import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Admin } from '../_models/admins.model';
import { Feed } from '../_models/feeds.model';
import { Member } from '../_models/member';
import { Message } from '../_models/text-messages.model';
import { Trainer } from '../_models/trainer';
import { User } from '../_models/users.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class CollectionService {
  usersRef: AngularFirestoreCollection<User>;
  users: Observable<User>;
  admins: Observable<Admin>;
  members: Observable<any>;
  wttsa: Observable<any>;
  collectionVar: AngularFirestoreCollection;

  constructor(
    private db: AngularFirestore,
    private auth: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  getUserFeed() {
    return this.db
      .collection('feed', ref => ref.where('from', '==', ''))
      .valueChanges();
  }
  getUsers() {
    return this.db
      .collection('users', ref => ref.where('role', '==', 'USER'))
      .valueChanges();
  }

  getMembers() {
    return this.db
    .collection('users', ref => ref.where('subStatus', '==', 'current' || 'trialing'))
      .valueChanges();
  }

  getTrainers() {
    return this.db
    .collection('trainers', ref => ref.where('role', '==', 'TRAINER'))
      .valueChanges();
  }

  getAdmins() {
    return this.db
      .collection('admins', ref => ref.where('role', '==', 'ADMIN'))
      .valueChanges();
  }
}
