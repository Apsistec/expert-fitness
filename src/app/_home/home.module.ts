import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { SharedModule } from '../_shared/shared.module';
import { SharedDirectivesModule } from '../_directives/shared-directives.module';
import { HomePageRoutingModule } from './home-routing.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { HomePageTwoComponent } from '../_home/home-page-two/home-page-two.component';
import { HomePageThreeComponent } from '../_home/home-page-three/home-page-three.component';
import { HomePageFourComponent } from '../_home/home-page-four/home-page-four.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    SharedDirectivesModule,
    ShareButtonsModule,
    ShareIconsModule
  ],
  declarations: [
    HomePage,
    HomePageFourComponent,
    HomePageTwoComponent,
    HomePageThreeComponent,
  ]
})
export class HomePageModule {}
