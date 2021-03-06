import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as fire from 'firebase/app';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../_models/users.model';
import { MessageService } from './message.service';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireFunctionsModule } from '@angular/fire/functions';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  role;
  displayName;
  currentBehaviorUser = new BehaviorSubject(null);
  authState$: any = this.afAuth.authState;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    private messageService: MessageService,
    private modalController: ModalController
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

  SignIn(credentials) {
    return this.afAuth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        this.afs.doc<User>(`users/${data.user.uid}`).update({
          uid: data.user.uid,
          photoURL: data.user.photoURL,
          email: data.user.email,
          emailVerified: data.user.emailVerified,
          lastUpdatedAt: fire.default.firestore.FieldValue.serverTimestamp()
        });
        this.modalController.dismiss();
        this.messageService.loggedInToast(data);
      })
      .catch((error) => {
        this.messageService.authErrorAlert(error);
      });
  }


  SignUp(credentials) {
    return this.afAuth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        this.afs
          .doc<User>(`users/${data.user.uid}`)
          .set({
            uid: data.user.uid,
            displayName: credentials.displayName,
            photoURL: data.user.photoURL,
            email: data.user.email,
            role: 'USER',
            permissions: ['delete-ticket'],
            emailVerified: data.user.emailVerified,
            createdAt: fire.default.firestore.FieldValue.serverTimestamp()
          })
          .catch((error) => {
            this.messageService.authErrorAlert(error);
          })
          .then(() => {
            this.modalController.dismiss();
            this.sendVerificationMail();
            this.messageService.registerSuccessAlert();
          });
      });
  }

  // Auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithRedirect(provider).then(() => {
      return this.afAuth.getRedirectResult().then((data) => {
        this.afs
          .doc<User>(`users/${data.user.uid}`)
          .update({
            uid: data.user.uid,
            photoURL: data.user.photoURL,
            email: data.user.email,
            emailVerified: data.user.emailVerified,
            lastUpdatedAt: fire.default.firestore.FieldValue.serverTimestamp()
          })
          .catch((err) => {
            this.messageService.authErrorAlert(err);
          })
          .then(() => {
            this.modalController.dismiss();
            this.messageService.loggedInToast(data);
          });
      });
    });
  }

  // Sign in with 3rd party Oauth
  GoogleAuth() {
    this.AuthLogin(new fire.default.auth.GoogleAuthProvider()).catch((error) => {
      this.messageService.errorAlert(error);
    });
  }

  TwitterAuth() {
    this.AuthLogin(new fire.default.auth.TwitterAuthProvider()).catch((error) => {
      this.messageService.errorAlert(error);
    });
  }
  // MicrosoftAuth() {
  //   this.AuthLogin(new fire.default.auth.OAuthProvider()).catch((error) => {
  //     this.messageService.errorAlert(error);
  //   });
  // }

  FacebookAuth() {
    this.AuthLogin(new fire.default.auth.FacebookAuthProvider()).catch((error) => {
      this.messageService.errorAlert(error);
    });
  }

  /* Send email verfificaiton when new user sign up */
  sendVerificationMail() {
    const actionCodeSettings = {
      url: 'https://expert-fitness-midland-tx.firebaseapp.com/vefified-email',
      handleCodeInApp: true,
    };
    fire
      .default
      .auth()
      .currentUser.sendEmailVerification(actionCodeSettings)
      .then(() => {
        this.messageService.registerSuccessAlert();
      })
      .catch((error) => {
        this.messageService.errorAlert(error);
      });
  }

  // Recover password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .catch((error) => this.messageService.errorAlert(error))
      .then(() =>
        this.messageService
          .resetPasswordAlert()
          .catch((error) => this.messageService.errorAlert(error))
      );
  }

  // Sign-out
  SignOut() {
    return this.afAuth
      .signOut()
      .catch((error) => {
        this.messageService.errorAlert(error);
      })
      .then(() => {
        this.messageService
          .signOutToast()
          .catch((err) => this.messageService.errorAlert(JSON.stringify(err)))
          .then(() => this.router.navigate(['/home']));
      })
      .catch((err) => this.messageService.errorAlert(JSON.stringify(err)));
  }

  canRead(user: User): boolean {
    return this.checkAuthorization(user);
  }

  // determines if user is a member
  private checkAuthorization(user: User): boolean {
    if ((user && user.role === 'PUBLIC') || 'MEMBER' || 'EMPLOYEE' || 'ADMIN') {
      return true;
    }
    {
      return false;
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
