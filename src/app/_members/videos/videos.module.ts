import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../_shared/shared.module';
import { VideosPageRoutingModule } from './videos-routing.module';
import { VideosPage } from './videos.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,

    VideosPageRoutingModule
  ],
  declarations: [VideosPage]
})
export class VideosPageModule {}
