import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { User } from '../../_models/users.model';
import { AuthService } from '../../_services/auth.service';
import { PhotoService } from '../../_services/photo.service';
import { StripeService } from '../../_services/stripe.service';
import { ThemeService } from '../../_services/theme.service';
import { UserService } from '../../_services/user.service';
import { CancelSubscriptionComponent } from '../cancel-subscription/cancel-subscription.component';
import { InvoicesComponent } from '../invoices/invoices.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  title = 'User Profile';
  planId;
  atp;
  buy;
  purchase;
  user: User;
  email: any;
  subs: any;

  constructor(
    private theme: ThemeService,
    private modalCtrl: ModalController,
    public authService: AuthService,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public stripe: StripeService,
    public photoService: PhotoService,
    private userService: UserService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
        // this.authService.user$.pipe(map(user => this.user = user));
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  // Themes
  enableDark() {
    this.theme.enableDark();
  }

  enableLight() {
    this.theme.enableLight();
  }

  // Stripe Account Administration Modals
  async presentCancelSubModal() {
    const modal = await this.modalCtrl.create({
      component: CancelSubscriptionComponent,
    });
    return modal.present();
  }

  async presentInvoicesModal() {
    const modal = await this.modalCtrl.create({
      component: InvoicesComponent,
    });
    return modal.present();
  }

  // dismiss Modals
  onDismissModal() {
    return this.modalCtrl.dismiss();
  }

  ngAfterViewInit() {
    this.getEmail();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current email populated
  // clicking OK will update the email and display it
  // clicking Cancel will close the alert and do nothing

  getEmail() {
    return this.userService.getEmail();
  }



  logout() {
    this.authService.SignOut().then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  support() {
    this.router.navigateByUrl('/customer/dashboard');
  }
}
