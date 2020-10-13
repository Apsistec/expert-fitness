import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../../_shared/shared.module";
import { ContactPageRoutingModule } from "./contact-routing.module";
import { ContactPage } from "./contact.page";
import { AboutUsComponent } from "../about-us/about-us.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    ContactPageRoutingModule,
  ],
  declarations: [ContactPage, AboutUsComponent],
})
export class ContactPageModule {}
