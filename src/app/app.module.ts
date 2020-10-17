import { QuicklinkModule } from 'ngx-quicklink';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ErrorHandler, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { SafePipe } from './_pipes/safe.pipe';
import { ToHttpsPipe } from './_pipes/to-https.pipe';
import { GlobalErrorHandlerService } from './_services/error-handler.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TermsComponent } from './_home/terms/terms.component';
import { SideMenuComponent } from './_home/side-menu/side-menu.component';
import { PrivacyComponent } from './_home/privacy/privacy.component';
import { GetStartedComponent } from './_home/get-started/get-started.component';
import { AboutAppComponent } from './_home/about-app/about-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ToHttpsPipe,
    SafePipe,
    SideMenuComponent,
    TermsComponent,
    PrivacyComponent,
    GetStartedComponent,
    AboutAppComponent,
  ],
  entryComponents: [],
  imports: [
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql'],
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthGuardModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    QuicklinkModule,
    AppRoutingModule,
    HttpClientModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
