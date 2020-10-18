// import { Injectable } from '@angular/core';
// import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
// import { Observable } from 'rxjs';
// import { MessageService } from './message.service';


// @Injectable({
//   providedIn: 'root',
// })

// export class CheckForUpdateService {
//   constructor(
//     private swUpdate: SwUpdate,
//     private messageService: MessageService
//   ) {
//     this.checkForUpdateService();
//   }

//   checkForUpdateService() {
//     const enabled = this.swUpdate.isEnabled;
//     if (enabled) {
//       const updateAvailableEvent: UpdateAvailableEvent = new Observable(observer) => {
//         next: ev => {this.swUpdate.activateUpdate;}
//       }

//       this.updateAvailableEvent.subscribe( up => {

//         this.messageService.updateOrCancel().then((choice) => {
//           if (choice === 'update') {
//             window.location.reload();
//           }
//         })
//       });
//     })






//   }
// }
