import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { MessageService } from './message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(
    private message: MessageService,
    private injector: Injector,
    private router: Router
    ) {}

  handleError(error) {
    const page = this.router.url;
    const route = this.injector.get(Router);
    console.log('URL: ' + route.url, 'Page: ' + page);

    if (error instanceof HttpErrorResponse) {
      // Backend returns unsuccessful response codes such as 404, 500 etc.
      console.error('Backend returned status code: ', error.status);
      console.error('Response body:', error.message);
      this.message.globalErrorAlert('Error: ' + error.message, 'URL: ' + route.url, 'Page: ' + page);
    } else {
      this.message.globalErrorAlert('Error: ' + error.message, 'URL: ' + route.url, 'Page: ' + page);
    }
  }
}
