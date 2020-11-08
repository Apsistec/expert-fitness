import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { HomePageTwoComponent } from './home-page-two/home-page-two.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { HomePageOneComponent } from './home-page-one/home-page-one.component';
import { HomePageThreeComponent } from './home-page-three/home-page-three.component';
import { HomePageFourComponent } from './home-page-four/home-page-four.component';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    ShareIconsModule,
    ShareButtonsModule,
    SharedModule
  ],
  declarations: [
    HomePage,
    HomePageTwoComponent,
    HomePageOneComponent,
    HomePageThreeComponent,
    HomePageFourComponent
  ],
  exports: [

  ]
})
export class HomePageModule {}
