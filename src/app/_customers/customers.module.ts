import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SharedModule } from '../_shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedDirectivesModule } from '../_directives/shared-directives.module';

@NgModule({
  declarations: [
    CancelSubscriptionComponent,
    InvoicesComponent,
    InvoicesComponent,

  ],
  imports: [
    IonicModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CustomersRoutingModule,
    SharedDirectivesModule
  ],
  exports: [

  ],
})
export class CustomersPageModule{}
