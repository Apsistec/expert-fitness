import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../_shared/shared.module';
import { TestimonialsPageRoutingModule } from './testimonials-routing.module';
import { TestimonialsPage } from './testimonials.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TestimonialsPageRoutingModule
  ],
  declarations: [TestimonialsPage]
})
export class TestimonialsPageModule {}
