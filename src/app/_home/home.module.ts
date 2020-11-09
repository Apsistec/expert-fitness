import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageTwoComponent } from './home-page-two/home-page-two.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { HomePageOneComponent } from './home-page-one/home-page-one.component';
import { HomePageThreeComponent } from './home-page-three/home-page-three.component';
import { HomePageFourComponent } from './home-page-four/home-page-four.component';
import { SharedModule } from '../_shared/shared.module';
import { SharedDirectivesModule } from '../_directives/shared-directives.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutAppComponent } from './about-app/about-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePage } from './home.page';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    ShareIconsModule,
    ShareButtonsModule,
    SharedModule,
    SharedDirectivesModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  declarations: [
    HomePageTwoComponent,
    HomePageOneComponent,
    HomePageThreeComponent,
    HomePageFourComponent,
    TermsComponent,
    PrivacyComponent,
    HomePage,
    AboutAppComponent
  ],
  exports: [

  ]
})
export class HomePageModule {}
