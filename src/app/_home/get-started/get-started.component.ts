import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent implements OnInit {
  loginTitle: boolean;
  hide: boolean;
  hid: boolean;
  registerForm: FormGroup;
  loginForm: FormGroup;
  @ViewChild('flipcontainer', { static: false }) flipcontainer: ElementRef;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private alertController: AlertController,
  ) {}

  ngOnInit() {
    this.loginTitle = true;
    this.hide = true;
    this.hid = true;
    this.createForms();
  }

  createForms() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
        ],
      ],
      displayName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
        ],
      ],
      role: ['USER', []],
    });
  }

  // navigateByRole(role) {
  //   if (role === "USER") {
  //     this.router.navigateByUrl("/tabs/dashboard");
  //   } else if (role === "TRAINER") {
  //     this.router.navigateByUrl("/trainers");
  //   } else if (role === "ADMIN") {
  //     this.router.navigateByUrl("/admins");
  //   }
  // }

  async onLogin() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      translucent: true,
      keyboardClose: true,
    });
    await loading.present();

    this.authService.SignIn(this.loginForm.value).then(
      async () => {
        await loading.dismiss();
        // this.navigateByRole(this.loginForm.value.role);
      },

      async (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        loading.dismiss();

        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: errorCode,
          message: errorMessage,
          cssClass: 'warningA',
          buttons: ['OK'],
        });
        alert.present();
      }
    );
  }

  async onRegister() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      translucent: true,
      keyboardClose: true,
    });
    await loading.present();

    this.authService.SignUp(this.registerForm.value).then(
      async () => {
        await loading.dismiss();
      },
      async (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        loading.dismiss();

        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: errorCode,
          message: errorMessage,
          cssClass: 'warningA',
          buttons: ['OK'],
        });
        alert.present();
      }
    );
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  toggleHid() {
    this.hid = !this.hid;
  }

  toggleRegister() {
    this.loginTitle = !this.loginTitle;
    this.flipcontainer.nativeElement.classList.toggle('flip');
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
