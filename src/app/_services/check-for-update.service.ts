import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MessageService } from './message.service';

@Injectable()
export class CheckForUpdateService {
  constructor(private swUpdate: SwUpdate, private messageService: MessageService) {
    this.swUpdate.available.pipe(evt => {
      this.messageService.updateOrCancel()
        .then((choice) => {
          if (choice === 'update') { window.location.reload(); }

    });
  }
}
