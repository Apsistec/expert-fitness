import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  choice;

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) {}
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  // Toasts

  async presentToast(infoMessage: string) {
    const toast = await this.toastController.create({
      message: infoMessage,
      duration: 2000,
    });
    toast.present();
  }

  async registerSuccessToast() {
    const toast = await this.toastController.create({
      header: 'Registration Successful',
      message:
        'You have successfully registered, now verify your email. Check your email inbox for instructions!',
      cssClass: 'successT',
      position: 'middle',
      keyboardClose: true,
      duration: 4000,
    });
    return toast.present();
  }

  async isLoggedInToast() {
    const toast = await this.toastController.create({
      header: 'Log In Successful',
      message: 'Welcome Back!',
      cssClass: 'successT',
      position: 'middle',
      keyboardClose: true,
      duration: 3000,
    });
    await toast.present();
  }

  async federatedLoginToast(data: any) {
    const toast = await this.toastController.create({
      header: 'Log In Successful',
      message: ' Welcome back ' + data.user.name + '!',
      cssClass: 'successT',
      position: 'middle',
      duration: 3000,

      keyboardClose: true,
    });
    await toast.present();
  }

  async signOutToast() {
    const toast = await this.toastController.create({
      header: 'Sign Out Successful',
      cssClass: 'successT',
      message: 'Thank You for Stopping By!',
      position: 'middle',
      duration: 3000,

      keyboardClose: true,
    });
    await toast.present();
  }
  async deleteTicketToast() {
    const toast = await this.toastController.create({
      header: 'Ticket Deleted',
      cssClass: 'successT',
      message: 'The ticket was successfully deleted.',
      position: 'middle',
      duration: 3000,

      keyboardClose: true,
    });
    await toast.present();
  }

  async updateNameToast() {
    const toast = await this.toastController.create({
      header: 'Update Successful',
      message: 'User info was updated',
      duration: 3000,
      position: 'middle',
      cssClass: 'successT',

      keyboardClose: true,
    });
    await toast.present();
  }

  async subscribedToast() {
    const toast = await this.toastController.create({
      header: 'Payment Successful',
      cssClass: 'successT',
      message: 'You are subscribed! Thank You!',
      position: 'middle',
      duration: 3000,

      keyboardClose: true,
    });
    await toast.present();
  }

  async alreadySubscribedToast() {
    const toast = await this.toastController.create({
      header: 'Invalid Request',
      cssClass: 'warningT',
      message: ' You are already Subscribed',
      position: 'middle',
      duration: 3000,

      keyboardClose: true,
    });
    await toast.present();
  }

  async generalToast(header: string, message: string) {
    const toast = await this.toastController.create({
      header,
      cssClass: 'successT',
      message,
      position: 'middle',
      duration: 2000,
      keyboardClose: true,
    });
    await toast.present();
  }

  //  Alerts
  async noExistFederatedUserAlert() {
    const alert = await this.alertController.create({
      header: 'Error Occurred',
      subHeader: 'That email address is not in our system',
      message:
        'Try another account. If you continue to have trouble, \n open a trouble ticket and we will assist you',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async needPaymentAlert() {
    const alert = await this.alertController.create({
      header: 'Members Area Only',
      subHeader: 'Paid PRO Package Required',
      message: 'Purchase any RF$ports PRO Package for immediate access',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async resetPasswordAlert() {
    const alert = await this.alertController.create({
      header: 'Request Successful',
      subHeader: 'Password Reset Request Sent',
      message: 'Check your email for a link to RESET your password',

      buttons: ['OK'],
    });
    await alert.present();
  }

  async repurchaseAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid Request',
      message: 'You are already Subscribed',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async internalBlockPageAlert() {
    const internalBlock = await this.alertController.create({
      header: 'Invalid Request',
      subHeader: 'You are already Signed In',
      message: 'Your account does not need access to this area',

      buttons: ['OK'],
    });
    await internalBlock.present();
  }

  async unsubscribedAlert() {
    const alert = await this.alertController.create({
      header: 'Cancellation Successful',
      subHeader: 'Your account has been cancelled',

      message: 'Effective immediately. Thank you for giving us a try!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async globalErrorAlert(err, router, page?) {
    const alert = await this.alertController.create({
      header: 'Page: ' + page,
      subHeader: 'Location: ' + router.url,
      message: 'Error Message: ' + err.message,
      buttons: ['OK'],
      cssClass: 'warningA',
    });
    await alert.present();
  }
  async errorAlert(err: any) {
    const alert = await this.alertController.create({
      header: 'An Error Occurred',
      message: err.message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async saveOrCancel() {
    const alert = await this.alertController.create({
      header: 'Are You Sure?',
      subHeader: 'Changes were NOT saved',
      message: 'Press Save to resume editing or press OK to close',
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
        },
        {
          text: 'Save',
          role: 'save',
        },
      ],
    });
    await alert.present();
    await alert.onDidDismiss().then((data) => {
      this.choice = data;
    });
    return this.choice;
  }

  async resetWelcomeAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      backdropDismiss: false,
      cssClass: 'infoA',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Okay',
          role: 'okay',
        },
      ],
    });

    await alert.present();
    await alert.onDidDismiss().then((data) => {
      this.choice = data;
    });
    return this.choice;
  }

  async deleteFeedAlert(feedId) {
    const alert = await this.alertController.create({
      header: 'Delete Post',
      subHeader: feedId,
      message: 'Are you sure you want to delete this post?',
      cssClass: 'warningA',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'delete',
        },
      ],
    });

    await alert.present();
    await alert.onDidDismiss().then((data) => {
      this.choice = data;
    });
    return this.choice;
  }

  async updateOrCancel() {
    const alert = await this.alertController.create({
      header: 'Update Available?',
      subHeader: 'An update is available by reloading',
      message:
        'Press Update to reload the page and apply the new update or press cancel to close.',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Update',
          role: 'update',
        },
      ],
    });
    await alert.present();
    await alert.onDidDismiss().then((data) => {
      this.choice = data;
    });
    return this.choice;
  }
}
