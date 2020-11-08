import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { IonicModule } from '@ionic/angular';
import { CheckoutPageRoutingModule } from './checkout-routing.module';
import { CheckoutPage } from './checkout.page';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutPageRoutingModule,
    ReactiveFormsModule,
    ArchwizardModule,
    SharedModule,
  ],
  declarations: [CheckoutPage],
})
export class CheckoutPageModule {}
