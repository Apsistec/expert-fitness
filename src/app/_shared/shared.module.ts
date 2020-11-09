import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PopoverComponent } from './popover/popover.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { AppModule } from '../app.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

];

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PopoverComponent,
    GetStartedComponent
  ],
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppModule
  ],
  exports: [
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    PopoverComponent,
    HeaderComponent,
    FooterComponent,
    GetStartedComponent
  ]
})
export class SharedModule {}
