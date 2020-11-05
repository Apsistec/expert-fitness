import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsfeedPageRoutingModule } from './newsfeed-routing.module';

import { NewsfeedPage } from './newsfeed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsfeedPageRoutingModule
  ],
  declarations: [NewsfeedPage]
})
export class NewsfeedPageModule {}
