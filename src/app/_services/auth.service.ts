import * as fire from 'firebase/app';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { User } from '../_models/user';
import { MessageService } from './message.service';

export interface UserCredentials {
  displayName: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  role;
  currentBehaviorUser = new BehaviorSubject(null);
  authState$: any = this.afAuth.authState;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    private messageService: MessageService
  ) {
    this.user$ = this.authState$.pipe(
      switchMap((user: any) => {
        if (user) {
          return this.afs.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }


  SignIn(credentials: UserCredentials) {
    return this.afAuth
    .signInWithEmailAndPassword( credentials.email, credentials.password )
    .then((data) => {
      return this.afs.doc(`users/${data.user.uid}`).update({
        displayName: credentials.displayName,
        email: data.user.email,
        lastSignInTime: data.user.metadata.lastSignInTime,
        providerId: data.user.providerId,
        emailVerified: data.user.emailVerified,
      });
    });
      }


  SignUp(credentials: UserCredentials) {
    return this.afAuth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {

        this.SendVerificationMail();
        return this.afs.doc(`users/${data.user.uid}`).set({
          uid: data.user.uid,
          displayName: credentials.displayName,
          email: data.user.email,
          lastSignInTime: data.user.metadata.lastSignInTime,
          role: 'USER',
          created: data.user.metadata.creationTime,
          providerId: data.user.providerId,
          permissions: ['delete-ticket'],
          emailVerified: data.user.emailVerified,
        });
      });
  }



  // Auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithRedirect(provider).then(() => {
      return this.afAuth
        .getRedirectResult()
        .then((data) => {
            return this.afs.doc(`users/${data.user.uid}`).update({
              uid: data.user.uid,
              displayName: data.user.displayName,
              photoURL: data.user.photoURL,
              lastSignInTime: data.user.metadata.lastSignInTime,
              email: data.user.email,
              role: 'USER',
              created: data.user.metadata.creationTime,
              providerId: data.user.providerId,
              permissions: ['delete-ticket'],
              emailVerified: data.user.emailVerified,
            });
          });

        });
      }
      // .catch(async (error) => {
        //   const alert = await this.alertController.create({
          //     header: "Error",
          //     subHeader: error.code,
          //     message: error.message,
          //     cssClass: "warningA"
          //   });

          //   await alert.present();
          // });



          // Sign in with 3rd party Oauth
          GoogleAuth() {
            this.AuthLogin(new fire.auth.GoogleAuthProvider());
          }

          TwitterAuth() {
       this.AuthLogin(new fire.auth.TwitterAuthProvider());
     }




    /* Send email verfificaiton when new user sign up */
     SendVerificationMail() {
       fire.auth().currentUser.sendEmailVerification()
         .then(() => {
           this.messageService.registerSuccessToast();
           this.router.navigate(['/verify-email']);
         });
     }

     // Recover password
     ForgotPassword(passwordResetEmail) {
       return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(() => {
         this.messageService.resetPasswordAlert();
       });
     }


    // Sign-out
    SignOut() {
      return this.afAuth.signOut().then(() => {
      this.messageService.signOutToast().then(() => {
        this.router.navigate(['/home']);
      });
    });
  }

  get isBronze() {
    return this.user$.pipe(
      map((user) => {
        if (user && user.bronze) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
  get isSilver() {
    return this.user$.pipe(
      map((user) => {
        if (user && user.silver) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
  get isGold() {
    return this.user$.pipe(
      map((user) => {
        if (user && user.gold) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  canRead(user: any): boolean {
    return this.checkAuthorization(user);
  }

  // determines if user is a member
  private checkAuthorization(user: User): boolean {
    if (!user) {
      return false;
    }
    {
      // tslint:disable-next-line: triple-equals
      if (user.role == 'USER' || 'MEMBER' || 'ADMIN') {
        return true;
      } else {
        return false;
      }
    }
  }

  hasPermissions(permissions: string[]) {
    for (const perm of permissions) {
      return this.user$.pipe(
        map((user) => {
          if (user.permissions.includes(perm)) {
            return true;
          }
          return false;
        })
      );
    }
  }
}
