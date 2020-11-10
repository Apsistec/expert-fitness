import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ExcelSheetJsComponent } from './excel-sheet-js/excel-sheet-js.component';
import { UploadExcelComponent } from './upload-excel/upload-excel.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { SharedModule } from '../_shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedDirectivesModule } from '../_directives/shared-directives.module';

@NgModule({
  declarations: [
    CancelSubscriptionComponent,
    InvoicesComponent,
    ExcelSheetJsComponent,
    UploadExcelComponent,
    InvoicesComponent,
    DragndropComponent,
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
