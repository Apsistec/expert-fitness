import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AboutAppComponent } from './about-app/about-app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { GetStartedComponent } from '../_modals/get-started/get-started.component';
import { TicketComponent } from '../_customers/ticket/ticket.component';

@NgModule({
  declarations: [AboutAppComponent, AboutUsComponent, GetStartedComponent, TicketComponent, PrivacyComponent, TermsComponent],
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AboutAppComponent, AboutUsComponent, GetStartedComponent, TicketComponent, PrivacyComponent, TermsComponent],
})
export class SharedModalsModule {}
