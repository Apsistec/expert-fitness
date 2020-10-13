import { Injectable, Input, EventEmitter, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PasswordPopoverComponent } from '../_shared/password-popover/password-popover.component';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {
  @Input('errormessage') message;
  @Output() output1 = new EventEmitter<string>();

  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PasswordPopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  onHoverError(errormessage: string) {
    this.output1.emit(errormessage);
  }

}
