import { Injectable, Input, EventEmitter, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../_shared/popover/popover.component';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {
  @Input() errormessage;
  @Output() output1 = new EventEmitter<string>();

  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
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
