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


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PopoverComponent,
  ],
  imports: [
    RouterModule,
    QuicklinkModule,
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
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
  ],
})
export class SharedModule {}
