import { Injectable, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Plugins, PushNotification } from '@capacitor/core';
import { FCM } from '@capacitor-community/fcm';

const { PushNotifications } = Plugins;
const fcm = new FCM();

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  notifications: PushNotification[] = [];
  //
  // move to fcm demo
  topicName = 'super-awesome-topic';
  remoteToken: string;

  constructor(private platform: Platform, private zone: NgZone) {


    PushNotifications.addListener('registration', (data) => {
      alert(JSON.stringify(data));
      console.log(data);
    });
    PushNotifications.register().then(() => alert(`registered for push`));
    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotification) => {
        console.log('notification ' + JSON.stringify(notification));
        this.zone.run(() => {
          this.notifications.push(notification);
        });
      }
    );
  }

  //
  // move to fcm demo
  subscribeTo() {
    PushNotifications.register()
      .then((_) => {
        fcm
          .subscribeTo({ topic: this.topicName })
          .then((r) => alert(`subscribed to topic ${this.topicName}`))
          .catch((err) => console.log(err));
      })
      .catch((err) => alert(JSON.stringify(err)));
  }

  unsubscribeFrom() {
    fcm
      .unsubscribeFrom({ topic: 'test' })
      .then((r) => alert(`unsubscribed from topic ${this.topicName}`))
      .catch((err) => console.log(err));
    if (this.platform.is('android')) { fcm.deleteInstance(); }
  }

  getToken() {
    fcm
      .getToken()
      .then((result) => {
        this.remoteToken = result.token;
      })
      .catch((err) => console.log(err));
  }
}
