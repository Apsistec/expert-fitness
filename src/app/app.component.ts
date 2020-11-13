import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import * as firebase from 'firebase/app';
import { CheckForUpdateService } from './_services/check-for-update.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private checkForUpdate: CheckForUpdateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async ngOnInit() {
    // this.checkForUpdate.checkForUpdateService();

    // try {
    //   await Promise.all([
    //     firebase.firestore().enablePersistence({ synchronizeTabs: true }), // set {synchronizeTabs:true} for resource sharing across tabs
    //     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL),
    //   ]);
    //   firebase.analytics();
    // } catch (error) {
    //   console.error('Persistense Failed');
    // }
  }
}

