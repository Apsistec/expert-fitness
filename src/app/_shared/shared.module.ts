import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PopoverComponent } from './popover/popover.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from '../_customers/ticket/ticket.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PopoverComponent,
    GetStartedComponent,
    TicketComponent
  ],
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    PopoverComponent,
    HeaderComponent,
    FooterComponent,
    GetStartedComponent,
    TicketComponent
  ]
})
export class SharedModule {}
