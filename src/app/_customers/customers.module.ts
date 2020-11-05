import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { TicketComponent } from './ticket/ticket.component';
import { ExcelSheetJsComponent } from './excel-sheet-js/excel-sheet-js.component';
import { UploadExcelComponent } from './upload-excel/upload-excel.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { SharedModule } from '../_shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    CancelSubscriptionComponent,
    InvoicesComponent,
    TicketComponent,
    ExcelSheetJsComponent,
    UploadExcelComponent,
    InvoicesComponent,
    DragndropComponent,
  ],
  entryComponents: [TicketComponent],
  imports: [
    IonicModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CustomersRoutingModule,
  ],
  exports: [

  ],
})
export class CustomersPageModule{}
