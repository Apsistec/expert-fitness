import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedDirectivesModule } from '../_directives/shared-directives.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PopoverComponent } from './popover/popover.component';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsComponent } from './charts/charts.component';
import { TestimoniallInsertComponent } from './testimoniall-insert/testimoniall-insert.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PopoverComponent,
    ChartsComponent,
    TestimoniallInsertComponent,
  ],
  imports: [
    RouterModule,
    QuicklinkModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    HighchartsChartModule,
  ],
  exports: [
    RouterModule,
    QuicklinkModule,
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    PopoverComponent,
    HeaderComponent,
    FooterComponent,
    ChartsComponent,
    TestimoniallInsertComponent,
  ],
})
export class SharedModule {}
