import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RatingsPage } from './ratings.page';
import { SharedModule } from '../../_shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedModule],
  declarations: [RatingsPage],
})
export class RatingsPageModule {}
