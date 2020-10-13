import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodyPageRoutingModule } from './body-routing.module';

import { BodyPage } from './body.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodyPageRoutingModule
  ],
  declarations: [BodyPage]
})
export class BodyPageModule {}
