import { Component, OnChanges, AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PopoverController, LoadingController, ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from '../../_services/auth.service';
import { MessageService } from '../../_services/message.service';
import { SeoService } from '../../_services/seo.service';
import { WizardComponent } from 'angular-archwizard';
import { PopoverComponent } from '../../_shared/popover/popover.component';
import { User } from '../../_models/users.model';
import { map, switchMap } from 'rxjs/operators';
declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss']
})

export class CheckoutPage implements OnInit, AfterViewInit, OnChanges {

  stripe: stripe.Stripe;

  @ViewChild(WizardComponent, { static: true }) public wizard: WizardComponent;

  loginForm: FormGroup;
  registerForm: FormGroup;
  isRegister = true;
  isLoggedIn = false;

  isLoading = false;

  showDetails: boolean;
  hideProduct: boolean;

  user: User;
  uid;
  userId;

  marked = false;
  theCheckbox = false;
  hide = true;

  @ViewChild('cardElement', { static: true }) cardElement: ElementRef;
  card;
  source;
  amount = 0;

  confirmation;
  confirmation0;
  cardErrors;

  constructor(
    public functions: AngularFireFunctions,
    public authService: AuthService,
    private messageService: MessageService,
    public modalController: ModalController,
    private seoService: SeoService,
    private popoverController: PopoverController,
    private fb: FormBuilder,
    private router: Router,
    private afAuth: AngularFireAuth,
    private stepper: AwWizzardStep
  ) {
    this.seoService.addTwitterCard(
      'Product and Subscription Purchase Page',
      'View and purchase Expert Fitness\' Subscriptions and other products at great prices',
      '../../../assets/img/rfs-logo.svg'
      );
  }


  ngOnInit() {
    this.authService.user$.pipe(map((user) => (this.user = user)));

    this.resetVars();
    this.checkboxStatus();
    this.stepperProcess();

    // Stripe Details
    this.stripe = Stripe('pk_test_Rm4QbcP0thjADBses4DnzU5600K3q0XqMA');
    const elements = this.stripe.elements();
    const style = {
      base: {
        color: 'var(--ion-color-secondary)',
        fontFamily: 'Monteserat, "Helvetica Neue", sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '1em',
        '::placeholder': {
          color: '#121212'
        }
      },
      invalid: {
        color: '#f73008',
        iconColor: '#f73008'
      }
    };

    // Create an instance of the card Element.
    this.card = elements.create('card', { style });
    this.card.mount(this.cardElement.nativeElement);
    this.card.addEventListener('change', ({ error }) => {
      this.cardErrors = error && error.message;
    });
  }

  ngAfterViewInit() {
    this.resetVars();
    this.checkboxStatus();
    this.stepperProcess();
  }

  ngOnChanges() {
    this.resetVars();
    this.checkboxStatus();
    this.stepperProcess();
  }

  resetVars() {
    this.hide = true;
    this.showDetails = true;
  }

  // evaluate checkmark status
  checkboxStatus() {
    this.amount = this.theCheckbox ? +'5700' : +'000';
  }

  stepperProcess() {
    if (this.authService.authenticated) {
      this.wizard.goToStep(1);
    } else {
      this.wizard.goToStep(0);
    }
  }

  firstStep() {
    this.wizard.goToStep(0);
  }

  nextStep() {
    this.wizard.goToStep(1);
  }


  // toggle checkmark status
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }


  async handleForm(e) {
      e.preventDefault();
      const { source, error } = await this.stripe.createSource(this.card);
      if (error) {
        // Inform the customer that there was an error.
        const cardErrors = error.message;
      } else {
        // Send the token to your server.
        this.isLoading = true;
        const fun = this.functions.httpsCallable('stripeCreateSubscription');
        this.confirmation = await fun({ source: source.id, uid: this.auth.currentUserId, plan: 'bronze' }).toPromise();
        this.isLoading = false;
        this.wizard.goToStep(2);
      }
  }
}










  switchAuthMode(); {
    this.isRegister = !this.isRegister;
  }

  async presentPopover(ev: any); {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'popoverUser'
    });
    popover.present();
  }
}
