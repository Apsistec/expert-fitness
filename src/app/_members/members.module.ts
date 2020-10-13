import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { TicketComponent } from './ticket/ticket.component';
import { ChartsComponent } from './charts/charts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ExcelSheetJsComponent } from './excel-sheet-js/excel-sheet-js.component';
import { UploadExcelComponent } from './upload-excel/upload-excel.component';
import { RouterModule } from '@angular/router';
import { DragndropComponent } from './dragndrop/dragndrop.component';

@NgModule({
  declarations: [
    CancelSubscriptionComponent,
    InvoicesComponent,
    ChartsComponent,
    TicketComponent,
    ExcelSheetJsComponent,
    UploadExcelComponent,
    InvoicesComponent,
    DragndropComponent,
  ],
  entryComponents: [TicketComponent],
  imports: [
    RouterModule,
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HighchartsChartModule,
  ],
  exports: [
    CancelSubscriptionComponent,
    DragndropComponent,
    InvoicesComponent,
    ChartsComponent,
    TicketComponent,
    ExcelSheetJsComponent,
    UploadExcelComponent,
    InvoicesComponent,
    RouterModule,
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HighchartsChartModule,
  ],
})
export class MembersModule{}
