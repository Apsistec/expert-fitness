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
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { SharedModule } from '../_shared/shared.module';
import { MembersRoutingModule } from './members-routing.module';
import { MaterialModule } from '../material/material.module';
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
    IonicModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    SharedModule,
    MembersRoutingModule,
  ],
  exports: [
    // CancelSubscriptionComponent,
    // DragndropComponent,
    // InvoicesComponent,
    // ChartsComponent,
    // TicketComponent,
    // ExcelSheetJsComponent,
    // UploadExcelComponent,
    // InvoicesComponent,
    // IonicModule,
    // FormsModule,
    // CommonModule,
    // ReactiveFormsModule,
    // HighchartsChartModule,
  ],
})
export class MembersPageModule{}
