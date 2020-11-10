import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

// import { Feed } from '../_models/feeds.model';
// import { Message } from '../_models/text-messages.model';
// import { Trainer } from '../_models/trainer';
import { Admin } from '../_models/admins.model';
import { Customer } from '../_models/customers.model';
import { User } from '../_models/users.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class CollectionService {
  usersRef: AngularFirestoreCollection<User>;
  users: Observable<User>;
  admins: Observable<Admin>;
  customers: Observable<Customer>;

  collectionVar: AngularFirestoreCollection;

  constructor(
    private db: AngularFirestore,
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
  getEmployees() {
    return this.db
      .collection('users', ref => ref.where('role', '==', 'EMPLOYEE'))
      .valueChanges();
  }
  getPremiumSubs() {
    return this.db
      .collection('users', ref => ref.where('plan', '==', 'PREMIUM'))
      .valueChanges();
  }
  getBasicSubs() {
    return this.db
      .collection('users', ref => ref.where('plan', '==', 'BASIC'))
      .valueChanges();
  }
  getFreeSubs() {
    return this.db
      .collection('users', ref => ref.where('plan', '==', 'FREE'))
      .valueChanges();
  }

  getCurrentCustomers() {
    return this.db
    .collection('users', ref => ref.where('subStatus', '==', 'current' || 'trialing'))
      .valueChanges();
  }
  getTroubledCustomers() {
    return this.db
    .collection('users', ref => ref.where('subStatus', '==', 'past_due' || 'unpaid'))
      .valueChanges();
  }
  getCancelledCustomers() {
    return this.db
    .collection('users', ref => ref.where('subStatus', '==', 'cancelled'))
      .valueChanges();
  }

  getAllAdmins() {
    return this.db
      .collection('users', ref => ref.where('role', '==', 'ADMIN' || 'SUPERADMIN'))
      .valueChanges();
  }
}
