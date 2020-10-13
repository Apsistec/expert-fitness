
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { Platform, ToastController } from '@ionic/angular';

import { tap } from 'rxjs/operators';
import { from } from 'rxjs';
import { MessageService } from './message.service';

import { FCM } from '@ionic-native/fcm/ngx';
// import { AngularFirefunctions } from '@angular/fire/functions';
// import * from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  token;

  constructor(
    private afMessaging: AngularFireMessaging,
    private toastController: ToastController,
    private fcm: FCM,
    private platform: Platform,
    private message: MessageService
  ) {
    try {
      const _messaging = this.afMessaging;
      _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      _messaging.onMessage = _messaging.onMessage.bind(_messaging);
    } catch (e) {}
  }

  async makeToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
    });
    await toast.present().catch(err => {
      return this.message.errorAlert(err);
    });
  }

  getPermission() {
    let token$;
    if (this.platform.is('cordova')) {
      token$ = from(this.getPermissionNative());
    } else {
      token$ = this.getPermissionWeb();
    }

    return token$.pipe(
      tap(token => {
        this.token = token;
      })
    );
  }


  listenToMessages(): any {
    let messages$;

      messages$ = this.afMessaging.messages;


    return messages$.pipe(tap(v => this.showMessages(v)));
  }


  sub(topic): any {
    this.fcm.subscribeToTopic(topic).then(() => {
        this.makeToast(`subscribed to ${topic}`)
    })
  }

  unsub(topic) {
    this.fcm.unsubscribeFromTopic(topic).then(() => {
        this.makeToast(`unsubscribed from ${topic}`)
    })
  }

  private showMessages(payload) {
    let body;
    if (this.platform.is('android')) {
      body = payload.body;
    } else {
      body = payload.notification.body;
    }

    this.makeToast(body);
  }

  private getPermissionWeb() {
    return this.afMessaging.requestToken;
  }

  private async getPermissionNative() {
    let token;

    if (this.platform.is('ios')) {
    //   await this.firebaseNative.grantPermission();
    }

    // token = await this.firebaseNative.getToken();

    return token;
  }
}

