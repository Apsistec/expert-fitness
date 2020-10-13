import { switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { User } from '../_models/user';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;
  favorites: string[] = [];

  HAS_SEEN_TUTORIAL = 'ion_did_tutorial';

  constructor(
    public storage: Storage,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private message: MessageService,
    private router: Router
    ) {}

  hasFavorite(videoName: string): boolean {
    return this.favorites.indexOf(videoName) > -1;
  }

  addFavorite(videoName: string): void {
    this.favorites.push(videoName);
  }

  removeFavorite(videoName: string): void {
    const index = this.favorites.indexOf(videoName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }

  setEmail(email: string): Promise<any> {
    return this.afs.doc(`users/${this.user.uid}`).update({
      email
    }).then(() => {
      this.message.generalToast('Email Updated', 'The email that you sign in with was successfully updated.');
    });
  }

  getEmail() {
    let email;
    this.afAuth.authState.pipe(
      switchMap((user) => {
        email = user.email;
        return email;
      })
    );
  }

  async checkHasSeenTutorial(): Promise<boolean> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL)
    .then((value: boolean) => {
      return value;
    });
  }

  resetWelcome() {
    this.message
      .resetWelcomeAlert(
        'Welcome Intro Reset',
        'Press Okay to reset the welcome slides and refresh the web app; otherwise press cancel.'
      )
      .then((res) => {
        if (res.role === 'okay') {
          this.storage.remove(this.HAS_SEEN_TUTORIAL).then(() => {
            this.router.navigateByUrl('/welcome');
          });
        }
      });
  }
}
