(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dougw\Dev\expert-fitness\src\main.ts */"zUnb");


/***/ }),

/***/ "0qpp":
/*!**********************************************************!*\
  !*** ./src/app/_home/side-menu/side-menu.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".under-menu {\n  position: absolute;\n  text-align: center;\n  bottom: 5em;\n}\n\n.first-row {\n  position: relative;\n  padding-left: 3.5em;\n}\n\n.under-button {\n  padding-left: 3.5em;\n  position: relative;\n}\n\n.bottom-toolbar {\n  position: absolute;\n  bottom: 0px;\n}\n\n.active-item {\n  border-left: 0.625em solid var(--ion-color-tertiary);\n}\n\nion-item {\n  border-left: 0.625em solid var(--ion-color-light);\n}\n\n.side-menu-font {\n  font-weight: 700;\n  text-transform: capitalize;\n  font-variant: small-caps;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvX2hvbWUvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQTtFQUNFLG9EQUFBO0FBR0Y7O0FBQ0E7RUFDRSxpREFBQTtBQUVGOztBQUVBO0VBR0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FBREYiLCJmaWxlIjoiLi4vc3JjL2FwcC9faG9tZS9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVuZGVyLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm90dG9tOiA1ZW07XG59XG4uZmlyc3Qtcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDMuNWVtO1xufVxuXG4udW5kZXItYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAzLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJvdHRvbS10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbn1cblxuLmFjdGl2ZS1pdGVtIHtcbiAgYm9yZGVyLWxlZnQ6IDAuNjI1ZW0gc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLy8gICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYikgMC40KTtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXItbGVmdDogMC42MjVlbSBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5cbi5zaWRlLW1lbnUtZm9udCB7XG4gIC8vIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLy8gZm9udDogbm9ybWFsIDgwMCAxZW0gc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xufVxuIl19 */");

/***/ }),

/***/ "2yLC":
/*!******************************************************!*\
  !*** ./src/app/_shared/popover/popover.component.ts ***!
  \******************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_popover_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./popover.component.html */ "aaSh");
/* harmony import */ var _popover_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover.component.scss */ "aJca");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");








let PopoverComponent = class PopoverComponent {
    constructor(popoverController, afAuth, router, auth) {
        this.popoverController = popoverController;
        this.afAuth = afAuth;
        this.router = router;
        this.auth = auth;
    }
    // code for logout
    logOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dismissPopover();
            this.auth.SignOut();
        });
    }
    goToProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.dismissPopover();
            this.router.navigateByUrl('/members/dashboard');
        });
    }
    dismissPopover() {
        this.popoverController.dismiss();
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
PopoverComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-popover-component',
        template: _raw_loader_popover_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popover_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PopoverComponent);



/***/ }),

/***/ "3E2W":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_home/side-menu/side-menu.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu contentId=\"main-content\" type=\"overlay\">\n  <ion-header>\n    <ion-menu-toggle>\n      <ion-toolbar class=\"toolbar-global\">\n        <ion-buttons slot=\"start\">\n          <ion-menu-button color=\"tertiary\"></ion-menu-button>\n          <img src=\"../assets/logos/logo.png\" class=\"small-logo\" />\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-menu-toggle>\n  </ion-header>\n  <ion-content color=\"light-shade\">\n    <ion-list class=\"ion-no-padding\" lines=\"none\">\n      <ion-list-header class=\"list-header-global\"> Menu </ion-list-header>\n      <ion-menu-toggle>\n        <!-- Menu options -->\n        <ion-item\n          color=\"light\"\n          button\n          routerLinkActive=\"active-item\"\n          routerLinkActiveOptions=\"{ exact: true }\"\n          routerLink=\"/home\"\n        >\n          <ion-icon\n            size=\"small\"\n            slot=\"start\"\n            displayName=\"home-sharp\"\n          ></ion-icon>\n          <ion-label class=\"side-menu-font\">Home</ion-label>\n        </ion-item>\n        <!-- SignedIn Menu Items -->\n        <ng-component *ngIf=\"user | async\">\n          <ion-item\n            color=\"light\"\n            button\n            routerLinkActive=\"active-item\"\n            routerLinkActiveOptions=\"{ exact: true }\"\n            routerLink=\"/members/dashboard\"\n          >\n            <ion-icon\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"speedometer-sharp\"\n            ></ion-icon>\n            <ion-label class=\"side-menu-font\">Dashboard</ion-label>\n          </ion-item>\n          <ion-item\n            color=\"light\"\n            button\n            routerLinkActive=\"active-item\"\n            routerLinkActiveOptions=\"{ exact: true }\"\n            routerLink=\"/members/workouts\"\n          >\n            <ion-icon\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"fitness-sharp\"\n            ></ion-icon>\n            <ion-label class=\"side-menu-font\">Workouts</ion-label>\n          </ion-item>\n          <ion-item\n            color=\"light\"\n            button\n            routerLinkActive=\"active-item\"\n            routerLinkActiveOptions=\"{ exact: true }\"\n            routerLink=\"/members/nutrition\"\n          >\n            <ion-icon\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"nutrition-sharp\"\n            ></ion-icon>\n            <ion-label class=\"side-menu-font\">Nutrition</ion-label>\n          </ion-item>\n          <ion-item\n            color=\"light\"\n            button\n            routerLinkActive=\"active-item\"\n            routerLinkActiveOptions=\"{ exact: true }\"\n            routerLink=\"/members/videos\"\n          >\n            <ion-icon\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"videocam-sharp\"\n            ></ion-icon>\n            <ion-label class=\"side-menu-font\">Videos</ion-label>\n          </ion-item>\n          <ion-item\n            color=\"light\"\n            button\n            routerLinkActive=\"active-item\"\n            routerLinkActiveOptions=\"{ exact: true }\"\n            routerLink=\"/members/messages\"\n          >\n            <ion-icon\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"send-sharp\"\n            ></ion-icon>\n            <ion-label class=\"side-menu-font\">Messages</ion-label>\n          </ion-item>\n          <ion-item\n            color=\"light\"\n            button\n            routerLinkActive=\"active-item\"\n            routerLinkActiveOptions=\"{ exact: true }\"\n            routerLink=\"/members/settings\"\n          >\n            <ion-icon\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"cog-sharp\"\n            ></ion-icon>\n            <ion-label class=\"side-menu-font\">Settings</ion-label>\n          </ion-item>\n        </ng-component>\n        <!-- Menu Options for nonusers -->\n        <ion-item\n          color=\"light\"\n          button\n          routerLinkActive=\"active-item\"\n          routerLinkActiveOptions=\"{ exact: true }\"\n          routerLink=\"/home/products\"\n        >\n          <ion-icon\n            size=\"small\"\n            slot=\"start\"\n            displayName=\"body-sharp\"\n          ></ion-icon>\n          <ion-label class=\"side-menu-font\">Products</ion-label>\n        </ion-item>\n        <ion-item\n          color=\"light\"\n          button\n          routerLinkActive=\"active-item\"\n          routerLinkActiveOptions=\"{ exact: true }\"\n          routerLink=\"/home/faqs\"\n        >\n          <ion-icon\n            size=\"small\"\n            slot=\"start\"\n            displayName=\"information-circle-sharp\"\n          ></ion-icon>\n          <ion-label class=\"side-menu-font\">FAQs</ion-label>\n        </ion-item>\n        <ion-item\n          color=\"light\"\n          button\n          routerLinkActive=\"active-item\"\n          routerLinkActiveOptions=\"{ exact: true }\"\n          routerLink=\"/home/testimonials\"\n        >\n          <ion-icon\n            size=\"small\"\n            slot=\"start\"\n            displayName=\"body-sharp\"\n          ></ion-icon>\n          <ion-label class=\"side-menu-font\">Testimonials</ion-label>\n        </ion-item>\n        <ion-item\n          color=\"light\"\n          button\n          routerLinkActive=\"active-item\"\n          routerLinkActiveOptions=\"{ exact: true }\"\n          routerLink=\"/home/about\"\n        >\n          <ion-icon\n            size=\"small\"\n            slot=\"start\"\n            displayName=\"business-sharp\"\n          ></ion-icon>\n          <ion-label class=\"side-menu-font\">About</ion-label>\n        </ion-item>\n        <ion-item\n          color=\"light\"\n          button\n          rofuterLinkActive=\"active-item\"\n          routerLink=\"/home/contact\"\n        >\n          <ion-icon\n            size=\"small\"\n            slot=\"start\"\n            displayName=\"mail-sharp\"\n          ></ion-icon>\n          <ion-label class=\"side-menu-font\">Contact</ion-label>\n        </ion-item>\n        <!-- authentication area of menu -->\n        <ion-list-header class=\"list-header-global\">\n          Authentication\n        </ion-list-header>\n        <ng-component *ngIf=\"user | async; else nouser\">\n          <ion-item color=\"light\" button (click)=\"authService.SignOut()\">\n            <ion-label color=\"danger\" class=\"side-menu-font\">\n              Sign Out\n            </ion-label>\n            <ion-icon\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"log-out\"\n              slot=\"start\"\n              color=\"danger\"\n            ></ion-icon>\n          </ion-item>\n        </ng-component>\n        <ng-template #nouser>\n          <ion-item\n            color=\"light\"\n            button\n            routerLinkActive=\"active-item\"\n            routerLinkActiveOptions=\"{ exact: true }\"\n            (click)=\"showModalGetStarted()\"\n          >\n            <ion-icon\n              color=\"success\"\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"rocket\"\n            ></ion-icon>\n            <ion-label color=\"success\" class=\"side-menu-font\"\n              >Get Started</ion-label\n            >\n          </ion-item>\n        </ng-template>\n        <ion-list-header class=\"list-header-global\">\n          Intro Slides\n        </ion-list-header>\n        <ion-item\n          color=\"light\"\n          lines=\"none\"\n          button\n          (click)=\"userService.resetWelcome()\"\n        >\n          <ion-icon\n            size=\"small\"\n            slot=\"start\"\n            displayName=\"refresh-sharp\"\n          ></ion-icon>\n          <ion-label class=\"side-menu-font\"> Reset Intro</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n    <!-- Below menu -->\n    <div class=\"under-menu\">\n      <div class=\"first-row\">\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"showModalPrivacy()\">\n          Privacy\n        </ion-button>\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"showModalTerms()\">\n          Terms\n        </ion-button>\n      </div>\n      <ion-button\n        class=\"under-button\"\n        fill=\"clear\"\n        color=\"primary\"\n        (click)=\"showModalAbout()\"\n      >\n        About App\n      </ion-button>\n    </div>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar class=\"ion-text-center bottom-toolbar\" color=\"dark\">\n      <small>\n        &#9426;{{ yearDate | date: \"yyyy\" }} www.expertfitness.com\n      </small>\n    </ion-toolbar>\n  </ion-footer>\n</ion-menu>\n");

/***/ }),

/***/ "7Vn+":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message.service */ "Qskx");









let AuthService = class AuthService {
    constructor(afs, afAuth, router, messageService) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.messageService = messageService;
        this.currentBehaviorUser = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.authState$ = this.afAuth.authState;
        this.user$ = this.authState$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((user) => {
            if (user) {
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        }));
    }
    SignIn(credentials) {
        return this.afAuth
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((data) => {
            return this.afs.doc(`users/${data.user.uid}`).update({
                displayName: credentials.displayName,
                email: data.user.email,
                emailVerified: data.user.emailVerified,
            });
        });
    }
    SignUp(credentials) {
        return this.afAuth
            .createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then((data) => {
            this.SendVerificationMail();
            return this.afs.doc(`users/${data.user.uid}`).set({
                uid: data.user.uid,
                displayName: data.user.displayName,
                email: data.user.email,
                role: 'USER',
                permissions: ['delete-ticket'],
                emailVerified: data.user.emailVerified,
            });
        });
    }
    // Auth providers
    AuthLogin(provider) {
        return this.afAuth.signInWithRedirect(provider).then(() => {
            return this.afAuth.getRedirectResult().then((data) => {
                return this.afs.doc(`users/${data.user.uid}`).update({
                    uid: data.user.uid,
                    displayName: data.user.displayName,
                    photoURL: data.user.photoURL,
                    email: data.user.email,
                    role: 'USER',
                    permissions: ['delete-ticket'],
                    emailVerified: data.user.emailVerified,
                });
            });
        });
    }
    // .catch(async (error) => {
    //   const alert = await this.alertController.create({
    //     header: "Error",
    //     subHeader: error.code,
    //     message: error.message,
    //     cssClass: "warningA"
    //   });
    //   await alert.present();
    // });
    // Sign in with 3rd party Oauth
    GoogleAuth() {
        this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider());
    }
    TwitterAuth() {
        this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].TwitterAuthProvider());
    }
    /* Send email verfificaiton when new user sign up */
    SendVerificationMail() {
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]()
            .currentUser.sendEmailVerification()
            .then(() => {
            this.messageService.registerSuccessToast();
            this.router.navigate(['/verify-email']);
        });
    }
    // Recover password
    ForgotPassword(passwordResetEmail) {
        return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(() => {
            this.messageService.resetPasswordAlert();
        });
    }
    // Sign-out
    SignOut() {
        return this.afAuth.signOut().then(() => {
            this.messageService.signOutToast().then(() => {
                this.router.navigate(['/home']);
            });
        });
    }
    canRead(user) {
        return this.checkAuthorization(user);
    }
    // determines if user is a member
    checkAuthorization(user) {
        if (!user) {
            return false;
        }
        {
            // tslint:disable-next-line: triple-equals
            if (user.role == 'USER' || 'MEMBER' || 'TRAINER' || 'ADMIN') {
                return true;
            }
            else {
                return false;
            }
        }
    }
    hasPermissions(permissions) {
        for (const perm of permissions) {
            return this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((user) => {
                if (user.permissions.includes(perm)) {
                    return true;
                }
                return false;
            }));
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ "9ykT":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_home/get-started/get-started.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar class=\"toolbar-global ion-text-center\">\n    <ion-title *ngIf=\"loginTitle\" color=\"light\">Account Login</ion-title>\n    <ion-title *ngIf=\"!loginTitle\" color=\"light\"\n      >Account Registration</ion-title\n    >\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <div class=\"flip-container\" #flipcontainer>\n    <div class=\"flipper\">\n      <!-- Login Side of card -->\n      <div class=\"front ion-no-margin\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\" novalidate>\n          <ion-list class=\"ion-no-margin ion-no-padding\">\n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input\n                color=\"primary\"\n                type=\"email\"\n                inputmode=\"email\"\n                formControlName=\"email\"\n                autocomplete=\"email\"\n              >\n              </ion-input>\n            </ion-item>\n            <div\n              *ngIf=\"\n                loginFormControl.email.invalid &&\n                !loginFormControl.email.pristine\n              \"\n            >\n              <ion-text\n                *ngIf=\"loginFormControl.email.errors.required\"\n                color=\"danger\"\n              >\n                Email required.\n              </ion-text>\n              <ion-text\n                *ngIf=\"loginFormControl.email.errors.email\"\n                color=\"danger\"\n              >\n                Email not Valid.\n              </ion-text>\n            </div>\n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input\n                color=\"primary\"\n                [type]=\"hid ? 'password' : 'text'\"\n                inputmode=\"text\"\n                formControlName=\"password\"\n              >\n              </ion-input>\n              <ion-icon\n                color=\"dark\"\n                size=\"small\"\n                (click)=\"toggleHid()\"\n                slot=\"end\"\n                *ngIf=\"!hid\"\n                displayName=\"eye-sharp\"\n              >\n              </ion-icon>\n              <ion-icon\n                color=\"dark\"\n                size=\"small\"\n                (click)=\"toggleHid()\"\n                slot=\"end\"\n                *ngIf=\"hid\"\n                displayName=\"eye-off-sharp\"\n              >\n              </ion-icon>\n            </ion-item>\n            <div\n              *ngIf=\"\n                loginFormControl.password.invalid &&\n                !loginFormControl.password.pristine\n              \"\n            >\n              <ion-text\n                *ngIf=\"loginFormControl.password.errors.required\"\n                color=\"danger\"\n              >\n                Password required\n              </ion-text>\n              <ion-text\n                *ngIf=\"loginFormControl.password.errors.minlength\"\n                color=\"danger\"\n              >\n                Must be 6 characters or more\n              </ion-text>\n              <ion-text\n                *ngIf=\"loginFormControl.password.errors.maxlength\"\n                color=\"danger\"\n              >\n                Must be no more than 25 characters\n              </ion-text>\n              <ion-text\n                *ngIf=\"loginFormControl.password.errors.pattern\"\n                color=\"danger\"\n              >\n                At least 1 uppercase, 1 lowercase, and 1 number required\n              </ion-text>\n            </div>\n            <ion-item>\n              <ion-label>Select Role</ion-label>\n              <ion-select\n                class=\"selector\"\n                formControlName=\"role\"\n                displayName=\"role\"\n                value=\"role\"\n              >\n                <ion-select-option value=\"USER\">User</ion-select-option>\n                <ion-select-option value=\"TRAINER\">Trainer</ion-select-option>\n                <ion-select-option value=\"ADMIN\">Admin</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n          <ion-button\n            [disabled]=\"loginForm.invalid\"\n            color=\"secondary\"\n            expand=\"block\"\n            type=\"submit\"\n          >\n            <ion-icon\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"arrow-forward-sharp\"\n            >\n            </ion-icon>\n            <ion-text> Login </ion-text>\n          </ion-button>\n          <ion-button\n            expand=\"block\"\n            color=\"google\"\n            type=\"button\"\n            (click)=\"authService.GoogleAuth()\"\n          >\n            <ion-icon\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"logo-google\"\n            ></ion-icon>\n            Login with Google\n          </ion-button>\n          <ion-button\n            type=\"button\"\n            expand=\"block\"\n            color=\"twitter\"\n            (click)=\"authService.GoogleAuth()\"\n          >\n            <ion-icon\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"logo-twitter\"\n            ></ion-icon>\n            Login with Twitter\n          </ion-button>\n          <hr />\n          <ion-button\n            size=\"small\"\n            color=\"dark-shadow\"\n            expand=\"block\"\n            fill=\"clear\"\n            type=\"button\"\n            (click)=\"toggleRegister()\"\n          >\n            I want to Create an Account\n            <ion-icon\n              size=\"small\"\n              slot=\"end\"\n              displayName=\"arrow-forward\"\n            ></ion-icon>\n          </ion-button>\n        </form>\n      </div>\n\n      <!-- Register Side of Card -->\n      <div class=\"back ion-no-margin\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister()\">\n          <ion-list class=\"ion-no-margin ion-no-padding\">\n            <ion-item>\n              <ion-label position=\"floating\">Full Name</ion-label>\n              <ion-input\n                color=\"primary\"\n                type=\"text\"\n                inputmode=\"text\"\n                autocomplete=\"displayName\"\n                formControlName=\"displayName\"\n                autocapitalize=\"words\"\n              >\n              </ion-input>\n            </ion-item>\n            <div\n              *ngIf=\"\n                registerFormControl.displayName.invalid &&\n                !registerFormControl.displayName.pristine\n              \"\n            >\n              <ion-text\n                *ngIf=\"registerFormControl.displayName.errors.required\"\n                color=\"danger\"\n              >\n                Name required.\n              </ion-text>\n              <ion-text\n                *ngIf=\"registerFormControl.displayName.errors.maxlength\"\n                color=\"danger\"\n              >\n                Must be no more than 25 characters.\n              </ion-text>\n            </div>\n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input\n                color=\"primary\"\n                type=\"email\"\n                inputmode=\"email\"\n                formControlName=\"email\"\n                autocomplete=\"email\"\n              >\n              </ion-input>\n            </ion-item>\n            <div\n              *ngIf=\"\n                registerFormControl.email.invalid &&\n                !registerFormControl.email.pristine\n              \"\n            >\n              <ion-text\n                *ngIf=\"registerFormControl.email.errors.required\"\n                color=\"danger\"\n              >\n                Email required.\n              </ion-text>\n              <ion-text\n                *ngIf=\"registerFormControl.email.errors.email\"\n                color=\"danger\"\n              >\n                Email not valid.\n              </ion-text>\n            </div>\n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input\n                color=\"primary\"\n                [type]=\"hide ? 'password' : 'text'\"\n                inputmode=\"text\"\n                formControlName=\"password\"\n              >\n              </ion-input>\n              <ion-icon\n                color=\"dark\"\n                size=\"small\"\n                (click)=\"toggleHide()\"\n                slot=\"end\"\n                *ngIf=\"!hide\"\n                displayName=\"eye-sharp\"\n              >\n              </ion-icon>\n              <ion-icon\n                color=\"dark\"\n                size=\"small\"\n                (click)=\"toggleHide()\"\n                slot=\"end\"\n                *ngIf=\"hide\"\n                displayName=\"eye-off-sharp\"\n              >\n              </ion-icon>\n            </ion-item>\n            <div\n              *ngIf=\"\n                registerFormControl.password.invalid &&\n                !registerFormControl.password.pristine\n              \"\n            >\n              <ion-text\n                *ngIf=\"registerFormControl.password.errors.required\"\n                color=\"danger\"\n              >\n                Password required.\n              </ion-text>\n              <ion-text\n                *ngIf=\"registerFormControl.password.errors.minlength\"\n                color=\"danger\"\n              >\n                Must be 6 characters or more.\n              </ion-text>\n              <ion-text\n                *ngIf=\"registerFormControl.password.errors.maxlength\"\n                color=\"danger\"\n              >\n                Must be less than 25 characters.\n              </ion-text>\n              <ion-text\n                *ngIf=\"registerFormControl.password.errors.pattern\"\n                color=\"danger\"\n              >\n                At least 1 uppercase, 1 lowercase and 1 number required.\n              </ion-text>\n            </div>\n          </ion-list>\n          <ion-button\n            type=\"submit\"\n            color=\"tertiary\"\n            expand=\"block\"\n            [disabled]=\"registerForm.invalid\"\n          >\n            <ion-icon\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"person-add-sharp\"\n            ></ion-icon>\n            <ion-text> Register </ion-text>\n          </ion-button>\n          <ion-button\n            type=\"button\"\n            expand=\"block\"\n            color=\"google\"\n            (click)=\"authService.GoogleAuth()\"\n          >\n            <ion-icon size=\" small\" slot=\"start\" displayName=\"logo-google\">\n            </ion-icon>\n            Register with Google\n          </ion-button>\n          <ion-button\n            (click)=\"authService.GoogleAuth()\"\n            expand=\"block\"\n            color=\"twitter\"\n          >\n            <ion-icon\n              size=\"small\"\n              slot=\"start\"\n              displayName=\"logo-twitter\"\n            ></ion-icon>\n            Register with Twitter\n          </ion-button>\n          <hr />\n          <ion-button\n            color=\"dark-tint\"\n            expand=\"block\"\n            fill=\"clear\"\n            type=\"button\"\n            (click)=\"toggleRegister()\"\n          >\n            <ion-icon\n              size=\"small\"\n              displayName=\"arrow-back\"\n              slot=\"start\"\n              type=\"button\"\n            ></ion-icon>\n            Go Back to Sign In\n          </ion-button>\n        </form>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBp8ssZ4LEJqzdRYMbK9rvh66_za4iujdM',
        authDomain: 'expert-fitness-midland-tx.firebaseapp.com',
        databaseURL: 'https://expert-fitness-midland-tx.firebaseio.com',
        projectId: 'expert-fitness-midland-tx',
        storageBucket: 'expert-fitness-midland-tx.appspot.com',
        messagingSenderId: '179991880670',
        appId: '1:179991880670:web:a1394671023dc13052f34f',
        measurementId: 'G-RSCR13VTT9'
    },
    stripe_key: 'pk_test_Rm4QbcP0thjADBses4DnzU5600K3q0XqMA'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BXpk":
/*!**********************************************************!*\
  !*** ./src/app/_home/about-app/about-app.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL19ob21lL2Fib3V0LWFwcC9hYm91dC1hcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "M6Tk":
/*!****************************************************!*\
  !*** ./src/app/_home/privacy/privacy.component.ts ***!
  \****************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_privacy_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./privacy.component.html */ "cgxQ");
/* harmony import */ var _privacy_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privacy.component.scss */ "qwqW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let PrivacyComponent = class PrivacyComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalController.dismiss();
    }
};
PrivacyComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
PrivacyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-privacy',
        template: _raw_loader_privacy_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_privacy_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PrivacyComponent);



/***/ }),

/***/ "MXJX":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_home/terms/terms.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar class=\"toolbar-global\">\n    <ion-title>\n      <h2>Terms and conditions</h2>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"> Close </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n  <blockquote>\n    <i>Last updated: 2020-09-23</i>\n  </blockquote>\n  <p>1. <b>Introduction</b></p>\n  <p>Welcome to <b>Expert Fitness</b> (“Company”, “we”, “our”, “us”)!</p>\n  <p>\n    These Terms of Service (“Terms”, “Terms of Service”) govern your use of our\n    website located at <b>expert-fitness.com</b> (together or individually\n    “Service”) operated by <b>Expert Fitness</b>.\n  </p>\n  <p>\n    Our Privacy Policy also governs your use of our Service and explains how we\n    collect, safeguard and disclose information that results from your use of\n    our web pages.\n  </p>\n  <p>\n    Your agreement with us includes these Terms and our Privacy Policy\n    (“Agreements”). You acknowledge that you have read and understood\n    Agreements, and agree to be bound of them.\n  </p>\n  <p>\n    If you do not agree with (or cannot comply with) Agreements, then you may\n    not use the Service, but please let us know by emailing at\n    <b\n      ><a\n        target=\"_blank\"\n        rel=\"nofollow\"\n        href=\"mailto:support@expert-fitness.com?subject=Disagreement&body=Disagreement%20Details%3A\"\n        >support@expert-fitness.com</a\n      ></b\n    >\n    so we can try to find a solution. These Terms apply to all visitors, users\n    and others who wish to access or use Service.\n  </p>\n  <p>2. <b>Communications</b></p>\n  <p>\n    By using our Service, you agree to subscribe to newsletters, marketing or\n    promotional materials and other information we may send. However, you may\n    opt out of receiving any, or all, of these communications from us by\n    following the unsubscribe link or by emailing at\n    <a\n      target=\"_blank\"\n      rel=\"nofollow\"\n      href=\"mailto:support@expert-fitness.com?subject=Opt-out&body=Opt-out%20Details%3A\"\n      >support@expert-fitness.com</a\n    >.\n  </p>\n  <p>3. <b>Purchases</b></p>\n  <p>\n    If you wish to purchase any product or service made available through\n    Service (“Purchase”), you may be asked to supply certain information\n    relevant to your Purchase including but not limited to, your credit or debit\n    card number, the expiration date of your card, your billing address, and\n    your shipping information.\n  </p>\n  <p>\n    You represent and warrant that: (i) you have the legal right to use any\n    card(s) or other payment method(s) in connection with any Purchase; and that\n    (ii) the information you supply to us is true, correct and complete.\n  </p>\n  <p>\n    We may employ the use of third party services for the purpose of\n    facilitating payment and the completion of Purchases. By submitting your\n    information, you grant us the right to provide the information to these\n    third parties subject to our Privacy Policy.\n  </p>\n  <p>\n    We reserve the right to refuse or cancel your order at any time for reasons\n    including but not limited to: product or service availability, errors in the\n    description or price of the product or service, error in your order or other\n    reasons.\n  </p>\n  <p>\n    We reserve the right to refuse or cancel your order if fraud or an\n    unauthorized or illegal transaction is suspected.\n  </p>\n  <p>4. <b>Contests, Sweepstakes and Promotions</b></p>\n  <p>\n    Any contests, sweepstakes or other promotions (collectively, “Promotions”)\n    made available through Service may be governed by rules that are separate\n    from these Terms of Service. If you participate in any Promotions, please\n    review the applicable rules as well as our Privacy Policy. If the rules for\n    a Promotion conflict with these Terms of Service, Promotion rules will\n    apply.\n  </p>\n  <p>5. <b>Subscriptions</b></p>\n  <p>\n    Some parts of Service are billed on a subscription basis\n    (\"Subscription(s)\"). You will be billed in advance on a recurring and\n    periodic basis (\"Billing Cycle\"). Billing cycles will be set depending on\n    the type of subscription plan you select when purchasing a Subscription.\n  </p>\n  <p>\n    At the end of each Billing Cycle, your Subscription will automatically renew\n    under the exact same conditions unless you cancel it or Expert Fitness\n    cancels it. You may cancel your Subscription renewal either through your\n    online account management page or by contacting\n    <a\n      target=\"_blank\"\n      rel=\"nofollow\"\n      href=\"mailto:support@expert-fitness.com?subject=Cancel%20Subscription&body=Cancel%20Subscription%20Details%3A\"\n      >support@expert-fitness.com</a\n    >\n    customer support team.\n  </p>\n  <p>\n    A valid payment method is required to process the payment for your\n    subscription. You shall provide Expert Fitness with accurate and complete\n    billing information that may include but not limited to full displayName,\n    address, state, postal or zip code, telephone number, and a valid payment\n    method information. By submitting such payment information, you\n    automatically authorize Expert Fitness to charge all Subscription fees\n    incurred through your account to any such payment instruments.\n  </p>\n  <p>\n    Should automatic billing fail to occur for any reason, Expert Fitness\n    reserves the right to terminate your access to the Service with immediate\n    effect.\n  </p>\n  <p>6. <b>Free Trial</b></p>\n  <p>\n    Expert Fitness may, at its sole discretion, offer a Subscription with a free\n    trial for a limited period of time (\"Free Trial\").\n  </p>\n  <p>\n    You may be required to enter your billing information in order to sign up\n    for Free Trial.\n  </p>\n  <p>\n    If you do enter your billing information when signing up for Free Trial, you\n    will not be charged by Expert Fitness until Free Trial has expired. On the\n    last day of Free Trial period, unless you cancelled your Subscription, you\n    will be automatically charged the applicable Subscription fees for the type\n    of Subscription you have selected.\n  </p>\n  <p>\n    At any time and without notice, Expert Fitness reserves the right to (i)\n    modify Terms of Service of Free Trial offer, or (ii) cancel such Free Trial\n    offer.\n  </p>\n  <p>7. <b>Fee Changes</b></p>\n  <p>\n    Expert Fitness, in its sole discretion and at any time, may modify\n    Subscription fees for the Subscriptions. Any Subscription fee change will\n    become effective at the end of the then-current Billing Cycle.\n  </p>\n  <p>\n    Expert Fitness will provide you with a reasonable prior notice of any change\n    in Subscription fees to give you an opportunity to terminate your\n    Subscription before such change becomes effective.\n  </p>\n  <p>\n    Your continued use of Service after Subscription fee change comes into\n    effect constitutes your agreement to pay the modified Subscription fee\n    amount.\n  </p>\n  <p>8. <b>Refunds</b></p>\n  <p>\n    We issue refunds for Contracts within <b>30 days</b> of the original\n    purchase of the Contract.\n  </p>\n  <p>9. <b>Content</b></p>\n  <p>\n    Our Service allows you to post, link, store, share and otherwise make\n    available certain information, text, graphics, videos, or other material\n    (“Content”). You are responsible for Content that you post on or through\n    Service, including its legality, reliability, and appropriateness.\n  </p>\n  <p>\n    By posting Content on or through Service, You represent and warrant that:\n    (i) Content is yours (you own it) and/or you have the right to use it and\n    the right to grant us the rights and license as provided in these Terms, and\n    (ii) that the posting of your Content on or through Service does not violate\n    the privacy rights, publicity rights, copyrights, contract rights or any\n    other rights of any person or entity. We reserve the right to terminate the\n    account of anyone found to be infringing on a copyright.\n  </p>\n  <p>\n    You retain any and all of your rights to any Content you submit, post or\n    display on or through Service and you are responsible for protecting those\n    rights. We take no responsibility and assume no liability for Content you or\n    any third party posts on or through Service. However, by posting Content\n    using Service you grant us the right and license to use, modify, publicly\n    perform, publicly display, reproduce, and distribute such Content on and\n    through Service. You agree that this license includes the right for us to\n    make your Content available to other users of Service, who may also use your\n    Content subject to these Terms.\n  </p>\n  <p>\n    Expert Fitness has the right but not the obligation to monitor and edit all\n    Content provided by users.\n  </p>\n  <p>\n    In addition, Content found on or through this Service are the property of\n    Expert Fitness or used with permission. You may not distribute, modify,\n    transmit, reuse, download, repost, copy, or use said Content, whether in\n    whole or in part, for commercial purposes or for personal gain, without\n    express advance written permission from us.\n  </p>\n  <p>10. <b>Prohibited Uses</b></p>\n  <p>\n    You may use Service only for lawful purposes and in accordance with Terms.\n    You agree not to use Service:\n  </p>\n  <p>\n    0.1. In any way that violates any applicable national or international law\n    or regulation.\n  </p>\n  <p>\n    0.2. For the purpose of exploiting, harming, or attempting to exploit or\n    harm minors in any way by exposing them to inappropriate content or\n    otherwise.\n  </p>\n  <p>\n    0.3. To transmit, or procure the sending of, any advertising or promotional\n    material, including any “junk mail”, “chain letter,” “spam,” or any other\n    similar solicitation.\n  </p>\n  <p>\n    0.4. To impersonate or attempt to impersonate Company, a Company employee,\n    another user, or any other person or entity.\n  </p>\n  <p>\n    0.5. In any way that infringes upon the rights of others, or in any way is\n    illegal, threatening, fraudulent, or harmful, or in connection with any\n    unlawful, illegal, fraudulent, or harmful purpose or activity.\n  </p>\n  <p>\n    0.6. To engage in any other conduct that restricts or inhibits anyone’s use\n    or enjoyment of Service, or which, as determined by us, may harm or offend\n    Company or users of Service or expose them to liability.\n  </p>\n  <p>Additionally, you agree not to:</p>\n  <p>\n    0.1. Use Service in any manner that could disable, overburden, damage, or\n    impair Service or interfere with any other party’s use of Service, including\n    their ability to engage in real time activities through Service.\n  </p>\n  <p>\n    0.2. Use any robot, spider, or other automatic device, process, or means to\n    access Service for any purpose, including monitoring or copying any of the\n    material on Service.\n  </p>\n  <p>\n    0.3. Use any manual process to monitor or copy any of the material on\n    Service or for any other unauthorized purpose without our prior written\n    consent.\n  </p>\n  <p>\n    0.4. Use any device, software, or routine that interferes with the proper\n    working of Service.\n  </p>\n  <p>\n    0.5. Introduce any viruses, trojan horses, worms, logic bombs, or other\n    material which is malicious or technologically harmful.\n  </p>\n  <p>\n    0.6. Attempt to gain unauthorized access to, interfere with, damage, or\n    disrupt any parts of Service, the server on which Service is stored, or any\n    server, computer, or database connected to Service.\n  </p>\n  <p>\n    0.7. Attack Service via a denial-of-service attack or a distributed\n    denial-of-service attack.\n  </p>\n  <p>0.8. Take any action that may damage or falsify Company rating.</p>\n  <p>0.9. Otherwise attempt to interfere with the proper working of Service.</p>\n  <p>11. <b>Analytics</b></p>\n  <p>\n    We may use third-party Service Providers to monitor and analyze the use of\n    our Service.\n  </p>\n  <p>12. <b>No Use By Minors</b></p>\n  <p>\n    Service is intended only for access and use by individuals at least eighteen\n    (18) years old. By accessing or using Service, you warrant and represent\n    that you are at least eighteen (18) years of age and with the full\n    authority, right, and capacity to enter into this agreement and abide by all\n    of the terms and conditions of Terms. If you are not at least eighteen (18)\n    years old, you are prohibited from both the access and usage of Service.\n  </p>\n  <p>13. <b>Accounts</b></p>\n  <p>\n    When you create an account with us, you guarantee that you are above the age\n    of 18, and that the information you provide us is accurate, complete, and\n    current at all times. Inaccurate, incomplete, or obsolete information may\n    result in the immediate termination of your account on Service.\n  </p>\n  <p>\n    You are responsible for maintaining the confidentiality of your account and\n    password, including but not limited to the restriction of access to your\n    computer and/or account. You agree to accept responsibility for any and all\n    activities or actions that occur under your account and/or password, whether\n    your password is with our Service or a third-party service. You must notify\n    us immediately upon becoming aware of any breach of security or unauthorized\n    use of your account.\n  </p>\n  <p>\n    You may not use as a username the displayName of another person or entity or\n    that is not lawfully available for use, a displayName or trademark that is\n    subject to any rights of another person or entity other than you, without\n    appropriate authorization. You may not use as a username any displayName\n    that is offensive, vulgar or obscene.\n  </p>\n  <p>\n    We reserve the right to refuse service, terminate accounts, remove or edit\n    content, or cancel orders in our sole discretion.\n  </p>\n  <p>14. <b>Intellectual Property</b></p>\n  <p>\n    Service and its original content (excluding Content provided by users),\n    features and functionality are and will remain the exclusive property of\n    Expert Fitness and its licensors. Service is protected by copyright,\n    trademark, and other laws of and foreign countries. Our trademarks may not\n    be used in connection with any product or service without the prior written\n    consent of Expert Fitness.\n  </p>\n  <p>15. <b>Copyright Policy</b></p>\n  <p>\n    We respect the intellectual property rights of others. It is our policy to\n    respond to any claim that Content posted on Service infringes on the\n    copyright or other intellectual property rights (“Infringement”) of any\n    person or entity.\n  </p>\n  <p>\n    If you are a copyright owner, or authorized on behalf of one, and you\n    believe that the copyrighted work has been copied in a way that constitutes\n    copyright infringement, please submit your claim via email to\n    <a\n      target=\"_blank\"\n      rel=\"nofollow\"\n      href=\"mailto:support@expert-fitness.com?subject=Copyright%20Infringement&body=Copyright%20Infringement%20Details%3A\"\n      >support@expert-fitness.com</a\n    >, with the subject line: “Copyright Infringement” and include in your claim\n    a detailed description of the alleged Infringement as detailed below, under\n    “DMCA Notice and Procedure for Copyright Infringement Claims”\n  </p>\n  <p>\n    You may be held accountable for damages (including costs and attorneys’\n    fees) for misrepresentation or bad-faith claims on the infringement of any\n    Content found on and/or through Service on your copyright.\n  </p>\n  <p>16. <b>DMCA Notice and Procedure for Copyright Infringement Claims</b></p>\n  <p>\n    You may submit a notification pursuant to the Digital Millennium Copyright\n    Act (DMCA) by providing our Copyright Agent with the following information\n    in writing (see 17 U.S.C 512(c)(3) for further detail):\n  </p>\n  <p>\n    0.1. an electronic or physical signature of the person authorized to act on\n    behalf of the owner of the copyright’s interest;\n  </p>\n  <p>\n    0.2. a description of the copyrighted work that you claim has been\n    infringed, including the URL (i.e., web page address) of the location where\n    the copyrighted work exists or a copy of the copyrighted work;\n  </p>\n  <p>\n    0.3. identification of the URL or other specific location on Service where\n    the material that you claim is infringing is located;\n  </p>\n  <p>0.4. your address, telephone number, and email address;</p>\n  <p>\n    0.5. a statement by you that you have a good faith belief that the disputed\n    use is not authorized by the copyright owner, its agent, or the law;\n  </p>\n  <p>\n    0.6. a statement by you, made under penalty of perjury, that the above\n    information in your notice is accurate and that you are the copyright owner\n    or authorized to act on the copyright owner’s behalf.\n  </p>\n  <p>\n    You can contact our Copyright Agent via email at\n    <a\n      target=\"_blank\"\n      rel=\"nofollow\"\n      href=\"mailto:support@expert-fitness.com?subject=Copyright%20&body=Copyright%20Action%20Details%3A\"\n      >support@expert-fitness.com</a\n    >.\n  </p>\n  <p>17. <b>Error Reporting and Feedback</b></p>\n  <p>\n    You may provide us either directly at\n    <a\n      target=\"_blank\"\n      rel=\"nofollow\"\n      href=\"mailto:support@expert-fitness.com?subject=Error%20Reporting%2FFeedback&body=Error%20Reporting%2FFeedback%20Details%3A\"\n      >support@expert-fitness.com</a\n    >\n    or via third party sites and tools with information and feedback concerning\n    errors, suggestions for improvements, ideas, problems, complaints, and other\n    matters related to our Service (“Feedback”). You acknowledge and agree that:\n    (i) you shall not retain, acquire or assert any intellectual property right\n    or other right, title or interest in or to the Feedback; (ii) Company may\n    have development ideas similar to the Feedback; (iii) Feedback does not\n    contain confidential information or proprietary information from you or any\n    third party; and (iv) Company is not under any obligation of confidentiality\n    with respect to the Feedback. In the event the transfer of the ownership to\n    the Feedback is not possible due to applicable mandatory laws, you grant\n    Company and its affiliates an exclusive, transferable, irrevocable,\n    free-of-charge, sub-licensable, unlimited and perpetual right to use\n    (including copy, modify, create derivative works, publish, distribute and\n    commercialize) Feedback in any manner and for any purpose.\n  </p>\n  <p>18. <b>Links To Other Web Sites</b></p>\n  <p>\n    Our Service may contain links to third party web sites or services that are\n    not owned or controlled by Expert Fitness.\n  </p>\n  <p>\n    Expert Fitness has no control over, and assumes no responsibility for the\n    content, privacy policies, or practices of any third party web sites or\n    services. We do not warrant the offerings of any of these\n    entities/individuals or their websites.\n  </p>\n\n  <p>\n    YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE,\n    DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE\n    CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT,\n    GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR\n    SERVICES.\n  </p>\n  <p>\n    WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF\n    ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.\n  </p>\n  <p>19. <b>Disclaimer Of Warranty</b></p>\n  <p>\n    THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE”\n    BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS\n    OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION,\n    CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF\n    THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS\n    AT YOUR SOLE RISK.\n  </p>\n  <p>\n    NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR\n    REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY,\n    QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE\n    FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR\n    WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED\n    THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR\n    UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE\n    SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL\n    COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH\n    THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.\n  </p>\n  <p>\n    COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR\n    IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY\n    WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR\n    PURPOSE.\n  </p>\n  <p>\n    THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR\n    LIMITED UNDER APPLICABLE LAW.\n  </p>\n  <p>20. <b>Limitation Of Liability</b></p>\n  <p>\n    EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS,\n    EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL,\n    INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS’\n    FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT\n    TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS\n    INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS\n    ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING\n    WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING\n    FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL\n    LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY\n    ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF\n    THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE\n    AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES\n    WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW\n    THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL\n    DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.\n  </p>\n  <p>21. <b>Termination</b></p>\n  <p>\n    We may terminate or suspend your account and bar access to Service\n    immediately, without prior notice or liability, under our sole discretion,\n    for any reason whatsoever and without limitation, including but not limited\n    to a breach of Terms.\n  </p>\n  <p>\n    If you wish to terminate your account, you may simply discontinue using\n    Service.\n  </p>\n  <p>\n    All provisions of Terms which by their nature should survive termination\n    shall survive termination, including, without limitation, ownership\n    provisions, warranty disclaimers, indemnity and limitations of liability.\n  </p>\n  <p>22. <b>Governing Law</b></p>\n  <p>\n    These Terms shall be governed and construed in accordance with the laws of\n    US Texas, which governing law applies to agreement without regard to its\n    conflict of law provisions.\n  </p>\n  <p>\n    Our failure to enforce any right or provision of these Terms will not be\n    considered a waiver of those rights. If any provision of these Terms is held\n    to be invalid or unenforceable by a court, the remaining provisions of these\n    Terms will remain in effect. These Terms constitute the entire agreement\n    between us regarding our Service and supersede and replace any prior\n    agreements we might have had between us regarding Service.\n  </p>\n  <p>23. <b>Changes To Service</b></p>\n  <p>\n    We reserve the right to withdraw or amend our Service, and any service or\n    material we provide via Service, in our sole discretion without notice. We\n    will not be liable if for any reason all or any part of Service is\n    unavailable at any time or for any period. From time to time, we may\n    restrict access to some parts of Service, or the entire Service, to users,\n    including registered users.\n  </p>\n  <p>24. <b>Amendments To Terms</b></p>\n  <p>\n    We may amend Terms at any time by posting the amended terms on this site. It\n    is your responsibility to review these Terms periodically.\n  </p>\n  <p>\n    Your continued use of the Platform following the posting of revised Terms\n    means that you accept and agree to the changes. You are expected to check\n    this page frequently so you are aware of any changes, as they are binding on\n    you.\n  </p>\n  <p>\n    By continuing to access or use our Service after any revisions become\n    effective, you agree to be bound by the revised terms. If you do not agree\n    to the new terms, you are no longer authorized to use Service.\n  </p>\n  <p>25. <b>Waiver And Severability</b></p>\n  <p>\n    No waiver by Company of any term or condition set forth in Terms shall be\n    deemed a further or continuing waiver of such term or condition or a waiver\n    of any other term or condition, and any failure of Company to assert a right\n    or provision under Terms shall not constitute a waiver of such right or\n    provision.\n  </p>\n  <p>\n    If any provision of Terms is held by a court or other tribunal of competent\n    jurisdiction to be invalid, illegal or unenforceable for any reason, such\n    provision shall be eliminated or limited to the minimum extent such that the\n    remaining provisions of Terms will continue in full force and effect.\n  </p>\n  <p>26. <b>Acknowledgement</b></p>\n  <p>\n    BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU\n    HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.\n  </p>\n  <p>27. <b>Contact Us</b></p>\n  <p>\n    Please send your feedback, comments, requests for technical support by\n    email:\n    <b\n      ><a\n        target=\"_blank\"\n        rel=\"nofollow\"\n        href=\"mailto:support@expert-fitness.com?subject=General%20Inquiry&body=General%20Inquiry%20Details%3A\"\n        >support@expert-fitness.com</a\n      ></b\n    >.\n  </p>\n  <p style=\"margin-top: 5em; font-size: 0.7em\">\n    These\n    <a href=\"https://policymaker.io/terms-and-conditions/\">Terms of Service</a>\n    were created for <b>expert-fitness.com</b> by\n    <a href=\"https://policymaker.io\">PolicyMaker.io</a> on 2020-09-23.\n  </p>\n</ion-content>\n");

/***/ }),

/***/ "ON/7":
/*!**************************************************************!*\
  !*** ./src/app/_home/get-started/get-started.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selector {\n  font-weight: bold;\n  font-size: larger;\n  padding-right: 0.625em;\n}\n\n/* entire container, keeps perspective */\n\n.flip-container {\n  background-color: transparent;\n  position: relative;\n  perspective: 1000px;\n  height: 490px;\n}\n\n.flip-container.flip .flipper {\n  transform: rotateY(180deg);\n}\n\n.front,\n.back {\n  width: 100%;\n}\n\n/* flip speed goes here */\n\n.flipper {\n  position: relative;\n  height: 100%;\n  transition: 0.6s;\n  transform-style: preserve-3d;\n}\n\n/* hide back of pane during swap */\n\n.front,\n.back {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n/* front pane, placed above back */\n\n.front {\n  z-index: 2;\n}\n\n/* back, initially hidden pane */\n\n.back {\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvX2hvbWUvZ2V0LXN0YXJ0ZWQvZ2V0LXN0YXJ0ZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQSx3Q0FBQTs7QUFDQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBSUE7O0VBRUUsV0FBQTtBQURGOztBQUlBLHlCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQURGOztBQUlBLGtDQUFBOztBQUNBOztFQUVFLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQURGOztBQUlBLGtDQUFBOztBQUNBO0VBQ0UsVUFBQTtBQURGOztBQUlBLGdDQUFBOztBQUNBO0VBQ0UsMEJBQUE7QUFERiIsImZpbGUiOiIuLi9zcmMvYXBwL19ob21lL2dldC1zdGFydGVkL2dldC1zdGFydGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdG9yIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjYyNWVtO1xufVxuXG4vKiBlbnRpcmUgY29udGFpbmVyLCBrZWVwcyBwZXJzcGVjdGl2ZSAqL1xuLmZsaXAtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgaGVpZ2h0OiA0OTBweDtcbn1cblxuLmZsaXAtY29udGFpbmVyLmZsaXAgLmZsaXBwZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgLy8gaGVpZ2h0OiAxMDB2aDtcbn1cblxuLy8gLmZsaXAtY29udGFpbmVyLFxuLmZyb250LFxuLmJhY2sge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogZmxpcCBzcGVlZCBnb2VzIGhlcmUgKi9cbi5mbGlwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi8qIGhpZGUgYmFjayBvZiBwYW5lIGR1cmluZyBzd2FwICovXG4uZnJvbnQsXG4uYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4vKiBmcm9udCBwYW5lLCBwbGFjZWQgYWJvdmUgYmFjayAqL1xuLmZyb250IHtcbiAgei1pbmRleDogMjtcbn1cblxuLyogYmFjaywgaW5pdGlhbGx5IGhpZGRlbiBwYW5lICovXG4uYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "Qskx":
/*!**********************************************!*\
  !*** ./src/app/_services/message.service.ts ***!
  \**********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let MessageService = class MessageService {
    constructor(toastController, alertController) {
        this.toastController = toastController;
        this.alertController = alertController;
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
    // Toasts
    presentToast(infoMessage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: infoMessage,
                duration: 2000,
            });
            toast.present();
        });
    }
    registerSuccessToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Registration Successful',
                message: 'You have successfully registered, now verify your email. Check your email inbox for instructions!',
                cssClass: 'successT',
                position: 'middle',
                keyboardClose: true,
                duration: 4000,
            });
            return toast.present();
        });
    }
    isLoggedInToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Log In Successful',
                message: 'Welcome Back!',
                cssClass: 'successT',
                position: 'middle',
                keyboardClose: true,
                duration: 3000,
            });
            yield toast.present();
        });
    }
    federatedLoginToast(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Log In Successful',
                message: ' Welcome back ' + data.user.displayName + '!',
                cssClass: 'successT',
                position: 'middle',
                duration: 3000,
                keyboardClose: true,
            });
            yield toast.present();
        });
    }
    signOutToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Sign Out Successful',
                cssClass: 'successT',
                message: 'Thank You for Stopping By!',
                position: 'middle',
                duration: 3000,
                keyboardClose: true,
            });
            yield toast.present();
        });
    }
    deleteTicketToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Ticket Deleted',
                cssClass: 'successT',
                message: 'The ticket was successfully deleted.',
                position: 'middle',
                duration: 3000,
                keyboardClose: true,
            });
            yield toast.present();
        });
    }
    updateNameToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Update Successful',
                message: 'User info was updated',
                duration: 3000,
                position: 'middle',
                cssClass: 'successT',
                keyboardClose: true,
            });
            yield toast.present();
        });
    }
    subscribedToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Payment Successful',
                cssClass: 'successT',
                message: 'You are subscribed! Thank You!',
                position: 'middle',
                duration: 3000,
                keyboardClose: true,
            });
            yield toast.present();
        });
    }
    alreadySubscribedToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Invalid Request',
                cssClass: 'warningT',
                message: ' You are already Subscribed',
                position: 'middle',
                duration: 3000,
                keyboardClose: true,
            });
            yield toast.present();
        });
    }
    generalToast(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header,
                cssClass: 'successT',
                message,
                position: 'middle',
                duration: 2000,
                keyboardClose: true,
            });
            yield toast.present();
        });
    }
    //  Alerts
    noExistFederatedUserAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Error Occurred',
                subHeader: 'That email address is not in our system',
                message: 'Try another account. If you continue to have trouble, \n open a trouble ticket and we will assist you',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    needPaymentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Members Area Only',
                subHeader: 'Paid PRO Package Required',
                message: 'Purchase any RF$ports PRO Package for immediate access',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    resetPasswordAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Request Successful',
                subHeader: 'Password Reset Request Sent',
                message: 'Check your email for a link to RESET your password',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    repurchaseAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Invalid Request',
                message: 'You are already Subscribed',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    internalBlockPageAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const internalBlock = yield this.alertController.create({
                header: 'Invalid Request',
                subHeader: 'You are already Signed In',
                message: 'Your account does not need access to this area',
                buttons: ['OK'],
            });
            yield internalBlock.present();
        });
    }
    unsubscribedAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cancellation Successful',
                subHeader: 'Your account has been cancelled',
                message: 'Effective immediately. Thank you for giving us a try!',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    globalErrorAlert(err, router, page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Page: ' + page,
                subHeader: 'Location: ' + router.url,
                message: 'Error Message: ' + err.message,
                buttons: ['OK'],
                cssClass: 'warningA',
            });
            yield alert.present();
        });
    }
    errorAlert(err) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'An Error Occurred',
                message: err.message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    saveOrCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
            yield alert.present();
            yield alert.onDidDismiss().then((data) => {
                this.choice = data;
            });
            return this.choice;
        });
    }
    resetWelcomeAlert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
            yield alert.present();
            yield alert.onDidDismiss().then((data) => {
                this.choice = data;
            });
            return this.choice;
        });
    }
    deleteFeedAlert(feedId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
            yield alert.present();
            yield alert.onDidDismiss().then((data) => {
                this.choice = data;
            });
            return this.choice;
        });
    }
    updateOrCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Update Available?',
                subHeader: 'An update is available by reloading',
                message: 'Press Update to reload the page and apply the new update or press cancel to close.',
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
            yield alert.present();
            yield alert.onDidDismiss().then((data) => {
                this.choice = data;
            });
            return this.choice;
        });
    }
};
MessageService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], MessageService);



/***/ }),

/***/ "RCgm":
/*!****************************************************!*\
  !*** ./src/app/_services/error-handler.service.ts ***!
  \****************************************************/
/*! exports provided: GlobalErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandlerService", function() { return GlobalErrorHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "Qskx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let GlobalErrorHandlerService = class GlobalErrorHandlerService {
    constructor(message, injector, router) {
        this.message = message;
        this.injector = injector;
        this.router = router;
    }
    handleError(error) {
        const page = this.router.url;
        const route = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]);
        console.log('URL: ' + route.url, 'Page: ' + page);
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            // Backend returns unsuccessful response codes such as 404, 500 etc.
            console.error('Backend returned status code: ', error.status);
            console.error('Response body:', error.message);
            this.message.globalErrorAlert('Error: ' + error.message, 'URL: ' + route.url, 'Page: ' + page);
        }
        else {
            this.message.globalErrorAlert('Error: ' + error.message, 'URL: ' + route.url, 'Page: ' + page);
        }
    }
};
GlobalErrorHandlerService.ctorParameters = () => [
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GlobalErrorHandlerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], GlobalErrorHandlerService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");







// import { CheckForUpdateService } from './_services/check-for-update.service';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar // private checkForUpdate: CheckForUpdateService
    ) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    ngOnInit() {
        // this.checkForUpdate.checkForUpdateService();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VITL":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message.service */ "Qskx");








let UserService = class UserService {
    constructor(storage, afAuth, afs, message, router) {
        this.storage = storage;
        this.afAuth = afAuth;
        this.afs = afs;
        this.message = message;
        this.router = router;
        this.favorites = [];
        this.HAS_SEEN_TUTORIAL = 'ion_did_tutorial';
    }
    hasFavorite(videoName) {
        return this.favorites.indexOf(videoName) > -1;
    }
    addFavorite(videoName) {
        this.favorites.push(videoName);
    }
    removeFavorite(videoName) {
        const index = this.favorites.indexOf(videoName);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
    }
    setEmail(email) {
        return this.afs.doc(`users/${this.user.uid}`).update({
            email
        }).then(() => {
            this.message.generalToast('Email Updated', 'The email that you sign in with was successfully updated.');
        });
    }
    getEmail() {
        let email;
        this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((user) => {
            email = user.email;
            return email;
        }));
    }
    checkHasSeenTutorial() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.storage.get(this.HAS_SEEN_TUTORIAL)
                .then((value) => {
                return value;
            });
        });
    }
    resetWelcome() {
        this.message
            .resetWelcomeAlert('Welcome Intro Reset', 'Press Okay to reset the welcome slides and refresh the web app; otherwise press cancel.')
            .then((res) => {
            if (res.role === 'okay') {
                this.storage.remove(this.HAS_SEEN_TUTORIAL).then(() => {
                    this.router.navigateByUrl('/welcome');
                });
            }
        });
    }
};
UserService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <app-side-menu></app-side-menu>\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/functions */ "RgrY");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-quicklink */ "FDOz");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_about_app_about_app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_home/about-app/about-app.component */ "hz90");
/* harmony import */ var _home_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_home/get-started/get-started.component */ "vF24");
/* harmony import */ var _home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_home/privacy/privacy.component */ "M6Tk");
/* harmony import */ var _home_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_home/side-menu/side-menu.component */ "ekXp");
/* harmony import */ var _home_terms_terms_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_home/terms/terms.component */ "tfvz");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_pipes/safe.pipe */ "cBtN");
/* harmony import */ var _pipes_to_https_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_pipes/to-https.pipe */ "jc3H");
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_services/error-handler.service */ "RCgm");






























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
            _pipes_to_https_pipe__WEBPACK_IMPORTED_MODULE_28__["ToHttpsPipe"],
            _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_27__["SafePipe"],
            _home_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_25__["SideMenuComponent"],
            _home_terms_terms_component__WEBPACK_IMPORTED_MODULE_26__["TermsComponent"],
            _home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__["PrivacyComponent"],
            _home_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_23__["GetStartedComponent"],
            _home_about_app_about_app_component__WEBPACK_IMPORTED_MODULE_22__["AboutAppComponent"],
        ],
        entryComponents: [],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonicModule"].forRoot(),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_17__["IonicStorageModule"].forRoot({
                name: '__mydb',
                driverOrder: ['indexeddb', 'sqlite', 'websql'],
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production,
            }),
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebaseConfig),
            _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuardModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
            _angular_fire_functions__WEBPACK_IMPORTED_MODULE_7__["AngularFireFunctionsModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ngx_quicklink__WEBPACK_IMPORTED_MODULE_18__["QuicklinkModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_14__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonicRouteStrategy"] },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: _services_error_handler_service__WEBPACK_IMPORTED_MODULE_29__["GlobalErrorHandlerService"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "aJca":
/*!********************************************************!*\
  !*** ./src/app/_shared/popover/popover.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL19zaGFyZWQvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "aaSh":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_shared/popover/popover.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <ion-list-header class=\"list-header-global\">\n    Quick Navigation\n  </ion-list-header>\n</ion-list>\n<ion-item button (click)=\"goToProfile()\" lines=\"none\">\n  <ion-text> Profile </ion-text>\n  <ion-icon slot=\"start\" displayName=\"person\"> </ion-icon>\n</ion-item>\n\n<ion-item button (click)=\"logOut()\" lines=\"none\" color=\"tertiary\">\n  <ion-text color=\"danger\"> Log Out </ion-text>\n  <ion-icon color=\"danger\" slot=\"start\" displayName=\"log-out\"> </ion-icon>\n</ion-item>\n");

/***/ }),

/***/ "cBtN":
/*!*************************************!*\
  !*** ./src/app/_pipes/safe.pipe.ts ***!
  \*************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe',
    })
], SafePipe);



/***/ }),

/***/ "cgxQ":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_home/privacy/privacy.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar class=\"toolbar-global\">\n    <ion-title>Privacy Policy</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"> Close </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n  <!-- <p>\n    Expert Fitness ('expertfitness.com & Expert Fitness') has established a\n    privacy policy ('Policy') to offer a more transparent view into how your\n    information is collected, where it is used, and ultimately how it is\n    protected. RF$ may update this policy at any time. RF$ will provide notice\n    of materially significant changes to this privacy policy by posting notice\n    on the RF$ site.\n  </p>\n\n  <hr />\n  <h3>Protecting Your Privacy</h3>\n  <p>\n    RF$ makes all attempts to protect your private information except as\n    provided in this Policy. RF$ will not share your personal information with\n    any third parties without your consent except as provided in this Policy.\n  </p>\n  <p>\n    Posts on RF$'s website may provide links to third party websites, where each\n    has it's own privacy practices. RF$ is not responsible for, nor does RF$\n    have any control over the privacy policies of those third parties. Thus RF$\n    encourages all users to read the privacy policies of each and every website\n    visited.\n  </p>\n\n  <hr />\n  <h3>Data Collection</h3>\n  <p>\n    RF$ may collect your displayName, age, date of birth, gender, email address,\n    physical address, profile information, photos, and phone number.\n  </p>\n  <p>\n    RF$ sometimes collects your email address, for purposes such as sending\n    email newsletters, notifications about your account, notifications from\n    other RF$ users, and authenticating your account. By submitting your email\n    RF$, you consent to emails from RF$.\n  </p>\n  <p>\n    RF$ sometimes collects your cell phone number for the purpose of sending you\n    text messages about RF$. By submitting your cell phone number to RF$, you\n    consent to text messages from RF$.\n  </p>\n  <p>\n    RF$ may collect personal information if you provide such information in\n    feedback or comments or if you contact RF$ directly. Only information that\n    is directly sent to RF$ may be confidential. Any information posted on the\n    site is not confidential. Please do not post anything on RF$ that you would\n    like to keep private, as it is a public forum. For instance, please do not\n    post your home address on your profile unless you want your home address to\n    be public.\n  </p>\n  <p>\n    RF$'s web logs collect standard web log entries for each page served,\n    including your IP address, page URL, and timestamp. Web logs help RF$\n    diagnose problems with our server, to administer the RF$ site, and to\n    otherwise provide RF$'s products and service to you. In addition, RF$ may\n    collect other information from your interaction with our Website, services,\n    content, and advertising, including computer and connection information,\n    statistics on page views, traffic to and from the Website, ad data, IP\n    address, demographic and navigational data, and standard web log\n    information. This information may be obtained for RF$ from a third party\n    provider. RF$ may use this information for marketing, commercial, or any\n    other purpose as RF$ sees fit.\n  </p>\n  <p>\n    RF$ may collect your geographical location if your device allows it. This\n    information may be posted on the RF$ if you have allowed locations services\n    to be enabled.\n  </p>\n  <hr />\n  <h3>Data RF$ Stores</h3>\n  <p>\n    All information posted to this site, including account and purchase\n    information, is stored in RF$'s database, even after 'deletion', and may be\n    archived elsewhere.\n  </p>\n  <p>\n    RF$'s web logs and other records are stored indefinitely. This may include\n    any information you supply to RF$ and your browsing history. However, RF$\n    cannot guarantee access to these records by third parties for more than\n    seven business days after the original information was submitted, except for\n    purchase information that is available until the items have been delivered.\n  </p>\n  <p>\n    Although RF$ makes good faith efforts to store personal information in a\n    secure operating environment that is not available to the public, RF$ cannot\n    guarantee complete security. While we also use security to secure the site,\n    any information posted on your public RF$ profile and any discussion boards\n    are made available to the public.\n  </p>\n  <p>\n    RF$ may store information in an off-site location, which may or may not be\n    located in the United States and may not be bound by the laws of the United\n    States.\n  </p>\n  <hr />\n  <h3>Search Engines & 3rd Parties</h3>\n  <p>\n    Search engines and third party sites not affiliated with RF$ - including\n    Google.com, Bing.com, and Yahoo.com - archive or otherwise make available\n    RF$'s web pages. RF$ has no control over third party archiving and search\n    engine sites and cannot guarantee the accuracy of any information stored by\n    search engine sites.\n  </p>\n  <hr />\n  <h3>Release of Information</h3>\n  <p>\n    RF$ may disclose information about its users for publicity purposes pursuant\n    to RF$'s Terms of Use. RF$ may disclose information about its users if\n    required to do so by law or in the good faith belief that such disclosure is\n    reasonably necessary to respond to subpoenas, court orders, or other legal\n    process.\n  </p>\n  <p>\n    RF$ may disclose information about its users to law enforcement officers or\n    others, in the good faith belief that such disclosure is reasonably\n    necessary to: enforce our Terms of Use; respond to claims that any posting\n    or other content violates the rights of third- parties; or protect the\n    rights, property, or personal safety of RF$, its users, or the general\n    public.\n  </p>\n  <p>\n    RF$ may disclose your information to third parties for use by RF$. This may\n    include disclosure to email marketing providers to provide targeted\n    marketing for our users or other information to third party marketers. RF$\n    may disclose your information to other business entities, should RF$ ever\n    plan to merge with or be acquired by that business entity.\n  </p>\n  <hr />\n  <h3>International Users</h3>\n  <p>\n    RF$ welcomes international users to browse the site. International Website\n    Users consent to all the terms of service and this privacy agreement.\n    International users waive any and all remedies that they may have based on\n    the laws of their country.\n  </p>\n  <hr />\n  <h3>Copyright Policy</h3>\n  <p>\n    Expert Fitness, with a website of RF$, respects the intellectual property\n    rights of its Website Users and third parties. Rank Fantasy Sports complies\n    with the requirements of the Digital Millennium Copyright Act (17 U.S.C. -\n    512), also known as the DMCA. Please be aware that the DMCA may make the\n    copyright owner liable for damages if he/she materially misrepresents a fact\n    that a user's content is infringing his/her copyright (for example, if the\n    use really falls under the Fair Use Doctrine).\n  </p>\n  <hr />\n\n  <p>\n    <ion-text color=\"primary\">\n      If you believe that an image or information on RF$ is violating your\n      copyright, please send corresponance to info@expertfitness.com. You will\n      need to include all of the following information in your email:\n    </ion-text>\n  </p>\n  <p>\n    <ion-text color=\"primary\">\n      Please send this information in a plain text email or as an attached pdf\n      document.\n    </ion-text>\n  </p>\n  <ul>\n    <li>\n      Identify what material you claim is infringing your copyright, with enough\n      detail so that Expert Fitness may locate it on the website, including, if\n      possible, the URL of the page the material is on;\n    </li>\n    <li>\n      A statement by you that you have a good faith belief that the disputed use\n      is not authorized by the copyright owner, its agent, or the law, and how\n      the use infringes on that copyright;\n    </li>\n    <li>\n      A statement by you declaring under penalty of perjury that (1) the above\n      information in your email is accurate, and (2) that you are the owner of\n      the copyright interest involved or that you are authorized to act on\n      behalf of the copyright owner and the copyright owner's information;\n    </li>\n    <li>\n      Your complete mailing address, including state and country, telephone #,\n      and email address; and\n    </li>\n    <li>Your physical or electronic signature.</li>\n  </ul>\n\n  <hr />\n\n  <p>\n    <ion-text color=\"primary\">\n      If you believe that an image or information is violating any other\n      intellectual property rights, please send corresponance to\n      info@expertfitness.com. You will need to include all of the following\n      information in your email:\n    </ion-text>\n  </p>\n  <p>\n    <ion-text color=\"primary\">\n      Please send this information in a plain text email or as an attached pdf\n      document.\n    </ion-text>\n  </p>\n  <ul>\n    <li>\n      Identify which material you claim is infringing your intellectual property\n      rights, with enough detail so Expert Fitness may locate it on the website,\n      including, if possible, the URL of the page the material is on;\n    </li>\n    <li>\n      A statement by you regarding how the use infringes on your intellectual\n      property rights;\n    </li>\n    <li>\n      A statement by you declaring under penalty of perjury that (1) the above\n      information in your email is accurate, and (2) that you are the owner of\n      the intellectual property interest involved or that you are authorized to\n      act on behalf of the owner and the owner's information;\n    </li>\n    <li>\n      Your complete mailing address, including state and country, telephone #,\n      and email address; and\n    </li>\n    <li>Your physical or electronic signature.</li>\n  </ul>\n\n  <hr />\n\n  <p>\n    Should Expert Fitness determine that the material is a violation of your\n    copyright or other intellectual property rights, Rank Fantasy Sports will\n    take all necessary actions to remove the infringing image and or\n    information, subject to the procedures outlined in the Digital Millennium\n    Copyright Act (DMCA).\n  </p> -->\n\n  <p>\n    Expert Fitness, Inc. built the Expert Fitness app as a Commercial app. This\n    SERVICE is provided by Expert Fitness and is intended for use as is.\n  </p>\n  <p>\n    This page is used to inform visitors regarding our policies with the\n    collection, use, and disclosure of Personal Information if anyone decided to\n    use our Service.\n  </p>\n  <p>\n    If you choose to use our Service, then you agree to the collection and use\n    of information in relation to this policy. The Personal Information that we\n    collect is used for providing and improving the Service. We will not use or\n    share your information with anyone except as described in this Privacy\n    Policy.\n  </p>\n  <p>\n    The terms used in this Privacy Policy have the same meanings as in our Terms\n    and Conditions, which is accessible at Expert Fitness unless otherwise\n    defined in this Privacy Policy.\n  </p>\n  <h3>Information Collection and Use</h3>\n  <p>\n    For a better experience, while using our Service, we may require you to\n    provide us with certain personally identifiable information, including but\n    not limited to displayName, phone number, address, email. The information\n    that we request will be retained by us and used as described in this privacy\n    policy.\n  </p>\n  <div>\n    <p>\n      The app does use third party services that may collect information used to\n      identify you.\n    </p>\n    <p>\n      Link to privacy policy of third party service providers used by the app\n    </p>\n    <ul>\n      <li>\n        <a\n          href=\"https://www.google.com/policies/privacy/\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n          >Google Play Services</a\n        >\n      </li>\n      <!---->\n      <li>\n        <a\n          href=\"https://firebase.google.com/policies/analytics\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n          >Google Analytics for Firebase</a\n        >\n      </li>\n      <li>\n        <a\n          href=\"https://firebase.google.com/support/privacy/\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n          >Firebase Crashlytics</a\n        >\n      </li>\n      <li>\n        <a\n          href=\"https://www.facebook.com/about/privacy/update/printable\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n          >Facebook</a\n        >\n      </li>\n      <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->\n    </ul>\n  </div>\n  <h3>Log Data</h3>\n  <p>\n    We want to inform you that whenever you use our Service, in a case of an\n    error in the app we collect data and information (through third party\n    products) on your phone called Log Data. This Log Data may include\n    information such as your device Internet Protocol (“IP”) address, device\n    displayName, operating system version, the configuration of the app when\n    utilizing our Service, the time and date of your use of the Service, and\n    other statistics.\n  </p>\n  <h3>Cookies</h3>\n  <p>\n    Cookies are files with a small amount of data that are commonly used as\n    anonymous unique identifiers. These are sent to your browser from the\n    websites that you visit and are stored on your device's internal memory.\n  </p>\n  <p>\n    This Service does not use these “cookies” explicitly. However, the app may\n    use third party code and libraries that use “cookies” to collect information\n    and improve their services. You have the option to either accept or refuse\n    these cookies and know when a cookie is being sent to your device. If you\n    choose to refuse our cookies, you may not be able to use some portions of\n    this Service.\n  </p>\n  <h3>Service Providers</h3>\n  <p>\n    We may employ third-party companies and individuals due to the following\n    reasons:\n  </p>\n  <ul>\n    <li>To facilitate our Service;</li>\n    <li>To provide the Service on our behalf;</li>\n    <li>To perform Service-related services; or</li>\n    <li>To assist us in analyzing how our Service is used.</li>\n  </ul>\n  <p>\n    We want to inform users of this Service that these third parties have access\n    to your Personal Information. The reason is to perform the tasks assigned to\n    them on our behalf. However, they are obligated not to disclose or use the\n    information for any other purpose.\n  </p>\n  <h3>Security</h3>\n  <p>\n    We value your trust in providing us your Personal Information, thus we are\n    striving to use commercially acceptable means of protecting it. But remember\n    that no method of transmission over the internet, or method of electronic\n    storage is 100% secure and reliable, and we cannot guarantee its absolute\n    security.\n  </p>\n  <h3>Links to Other Sites</h3>\n  <p>\n    This Service may contain links to other sites. If you click on a third-party\n    link, you will be directed to that site. Note that these external sites are\n    not operated by us. Therefore, we strongly advise you to review the Privacy\n    Policy of these websites. We have no control over and assume no\n    responsibility for the content, privacy policies, or practices of any\n    third-party sites or services.\n  </p>\n  <h3>Children’s Privacy</h3>\n  <p>\n    These Services do not address anyone under the age of 13. We do not\n    knowingly collect personally identifiable information from children under\n    13. In the case we discover that a child under 13 has provided us with\n    personal information, we immediately delete this from our servers. If you\n    are a parent or guardian and you are aware that your child has provided us\n    with personal information, please contact us so that we will be able to do\n    necessary actions.\n  </p>\n  <h3>Changes to This Privacy Policy</h3>\n  <p>\n    We may update our Privacy Policy from time to time. Thus, you are advised to\n    review this page periodically for any changes. We will notify you of any\n    changes by posting the new Privacy Policy on this page.\n  </p>\n  <p>This policy is effective as of 2020-09-22</p>\n\n  <h3>CONTACT US</h3>\n  <p>\n    For more information about our privacy practices, if you have questions, or\n    if you would like to make a complaint, please contact us by e-mail at\n    support@expert-fitness.app or by mail using the details provided below: 6801\n    19th Street Suite 777, Midland, TX, 75777, United States\n  </p>\n</ion-content>\n");

/***/ }),

/***/ "ekXp":
/*!********************************************************!*\
  !*** ./src/app/_home/side-menu/side-menu.component.ts ***!
  \********************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_side_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./side-menu.component.html */ "3E2W");
/* harmony import */ var _side_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-menu.component.scss */ "0qpp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/user.service */ "VITL");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_services/message.service */ "Qskx");
/* harmony import */ var _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../get-started/get-started.component */ "vF24");
/* harmony import */ var _shared_popover_popover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_shared/popover/popover.component */ "2yLC");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../terms/terms.component */ "tfvz");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../privacy/privacy.component */ "M6Tk");
/* harmony import */ var _about_app_about_app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../about-app/about-app.component */ "hz90");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");















let SideMenuComponent = class SideMenuComponent {
    constructor(popoverController, router, authService, userService, modalController, messageService) {
        this.popoverController = popoverController;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.modalController = modalController;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.getYear();
        // this.user = this.authService.user$;
        this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])((user) => (this.user = user)));
    }
    getYear() {
        this.yearDate = Date.now();
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _shared_popover_popover_component__WEBPACK_IMPORTED_MODULE_10__["PopoverComponent"],
                event: ev,
                translucent: true,
                cssClass: 'popoverUser',
            });
            return popover.present();
        });
    }
    gotoGetStarted() {
        this.router.navigateByUrl('/home/get-started');
    }
    showModalTerms() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_11__["TermsComponent"],
                cssClass: 'modal-css',
                backdropDismiss: true,
                swipeToClose: true,
                showBackdrop: true,
            });
            return modal.present().catch((err) => {
                return this.messageService.errorAlert(err);
            });
        });
    }
    showModalPrivacy() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_12__["PrivacyComponent"],
                cssClass: 'modal-css',
                backdropDismiss: true,
                swipeToClose: true,
                showBackdrop: true,
            });
            return modal.present().catch((err) => {
                return this.messageService.errorAlert(err);
            });
        });
    }
    showModalGetStarted() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _get_started_get_started_component__WEBPACK_IMPORTED_MODULE_9__["GetStartedComponent"],
                cssClass: 'modal-css',
                showBackdrop: true,
            });
            return modal.present().catch((err) => {
                return this.messageService.errorAlert(err);
            });
        });
    }
    showModalAbout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _about_app_about_app_component__WEBPACK_IMPORTED_MODULE_13__["AboutAppComponent"],
                cssClass: 'modal-css',
                backdropDismiss: true,
                swipeToClose: true,
                showBackdrop: true,
            });
            return modal.present().catch((err) => {
                return this.messageService.errorAlert(err);
            });
        });
    }
    dismissModal() {
        this.modalController.dismiss();
    }
};
SideMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }
];
SideMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-side-menu',
        template: _raw_loader_side_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_side_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SideMenuComponent);



/***/ }),

/***/ "hz90":
/*!********************************************************!*\
  !*** ./src/app/_home/about-app/about-app.component.ts ***!
  \********************************************************/
/*! exports provided: AboutAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutAppComponent", function() { return AboutAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-app.component.html */ "l7eZ");
/* harmony import */ var _about_app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-app.component.scss */ "BXpk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let AboutAppComponent = class AboutAppComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalController.dismiss();
    }
};
AboutAppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AboutAppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-app',
        template: _raw_loader_about_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutAppComponent);



/***/ }),

/***/ "jc3H":
/*!*****************************************!*\
  !*** ./src/app/_pipes/to-https.pipe.ts ***!
  \*****************************************/
/*! exports provided: ToHttpsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToHttpsPipe", function() { return ToHttpsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ToHttpsPipe = class ToHttpsPipe {
    transform(value, ...args) {
        return null;
    }
};
ToHttpsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'toHttps',
    })
], ToHttpsPipe);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "l7eZ":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_home/about-app/about-app.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar class=\"toolbar-global\">\n    <ion-title>App Design & Engineering</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"> Close </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n  <ion-text>\n    <p>\n      Expert Fitness App is a progressive web app created for fitness and health\n      enthusiast who are interested at reaching and maintaining high levels of\n      success within their training regimine. As a progressive web app, Expert\n      Fitness App is capable of working on all browsers across most all devices\n      including iOS, Android, and Microsoft.\n    </p>\n    <p>\n      This app is a product of Obliquity.dev.... An engineering and consulting\n      firm focused on improving workflow processes by developing comprehensive,\n      streamlined plans and fully tailored applications using a breadth of IT\n      knowledge, the latest libraries and web based technologies. The\n      Progressive Web Apps designed, developed and delivered by Obliquity.dev\n      are cross-platform for maximum enduser reach with capabilities on most any\n      device. Our goal remains simple, to cost-effectivly maximize our client's\n      effeciencies with a clear plan of action and a measurable suite of key\n      performance indicators. At Obliquity.dev, we achieve success when your\n      customer's' journeys are on target and Operations is equipped with the\n      right tools to become or remain a leader within their respective markets.\n    </p>\n  </ion-text>\n  <ion-button\n    class=\"ion-text-capitalize\"\n    target=\"_blank\"\n    href=\"https://obliquity.dev\"\n    color=\"success\"\n  >\n    Visit Obliquity\n  </ion-button>\n\n  <ion-text><p>\n    SomeIcons are provided by Tilda Publishing <br>\n    <a href=\"https://tilda.cc\">tilda.cc</a>\n  </p></ion-text>\n</ion-content>\n");

/***/ }),

/***/ "nGov":
/*!**************************************************!*\
  !*** ./src/app/_home/terms/terms.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL19ob21lL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "qwqW":
/*!******************************************************!*\
  !*** ./src/app/_home/privacy/privacy.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL19ob21lL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "tfvz":
/*!************************************************!*\
  !*** ./src/app/_home/terms/terms.component.ts ***!
  \************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./terms.component.html */ "MXJX");
/* harmony import */ var _terms_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms.component.scss */ "nGov");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let TermsComponent = class TermsComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalController.dismiss();
    }
};
TermsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
TermsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-terms',
        template: _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TermsComponent);



/***/ }),

/***/ "vF24":
/*!************************************************************!*\
  !*** ./src/app/_home/get-started/get-started.component.ts ***!
  \************************************************************/
/*! exports provided: GetStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedComponent", function() { return GetStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_get_started_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./get-started.component.html */ "9ykT");
/* harmony import */ var _get_started_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-started.component.scss */ "ON/7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");







let GetStartedComponent = class GetStartedComponent {
    constructor(fb, authService, loadingController, modalController, alertController) {
        this.fb = fb;
        this.authService = authService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.loginTitle = true;
        this.hide = true;
        this.hid = true;
        this.createForms();
    }
    createForms() {
        this.registerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
                ],
            ],
            displayName: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25),
                ],
            ],
        });
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
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
    onLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading...',
                translucent: true,
                keyboardClose: true,
            });
            yield loading.present();
            this.authService.SignIn(this.loginForm.value).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
                // this.navigateByRole(this.loginForm.value.role);
            }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const errorCode = error.code;
                const errorMessage = error.message;
                loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Error',
                    subHeader: errorCode,
                    message: errorMessage,
                    cssClass: 'warningA',
                    buttons: ['OK'],
                });
                alert.present();
            }));
        });
    }
    onRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading...',
                translucent: true,
                keyboardClose: true,
            });
            yield loading.present();
            this.authService.SignUp(this.registerForm.value).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
            }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const errorCode = error.code;
                const errorMessage = error.message;
                loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Error',
                    subHeader: errorCode,
                    message: errorMessage,
                    cssClass: 'warningA',
                    buttons: ['OK'],
                });
                alert.present();
            }));
        });
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
};
GetStartedComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
GetStartedComponent.propDecorators = {
    flipcontainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['flipcontainer', { static: false },] }]
};
GetStartedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-get-started',
        template: _raw_loader_get_started_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_get_started_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GetStartedComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-quicklink */ "FDOz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const redirectLoggedInToDash = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectLoggedInTo"])(['/members/dashboard']);
const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectUnauthorizedTo"])(['/']);
const verifiedEmail = () => _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["emailVerified"];
const routes = [
    Object.assign({ path: 'home', loadChildren: () => Promise.all(/*! import() | _home-home-module */[__webpack_require__.e("default~_home-home-module~_home-unknown-unknown-module~_home-verify-email-verify-email-module~_membe~0d6335ea"), __webpack_require__.e("_home-home-module")]).then(__webpack_require__.bind(null, /*! ./_home/home.module */ "7n5l")).then((m) => m.HomePageModule) }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["canActivate"])(redirectLoggedInToDash)),
    {
        path: 'unknown',
        loadChildren: () => Promise.all(/*! import() | _home-unknown-unknown-module */[__webpack_require__.e("default~_home-home-module~_home-unknown-unknown-module~_home-verify-email-verify-email-module~_membe~0d6335ea"), __webpack_require__.e("_home-unknown-unknown-module")]).then(__webpack_require__.bind(null, /*! ./_home/unknown/unknown.module */ "GMMh")).then((m) => m.UnknownPageModule),
    },
    {
        path: 'verify-email',
        loadChildren: () => Promise.all(/*! import() | _home-verify-email-verify-email-module */[__webpack_require__.e("default~_home-home-module~_home-unknown-unknown-module~_home-verify-email-verify-email-module~_membe~0d6335ea"), __webpack_require__.e("_home-verify-email-verify-email-module")]).then(__webpack_require__.bind(null, /*! ./_home/verify-email/verify-email.module */ "6C6O")).then((m) => m.VerifyEmailPageModule),
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then((m) => m.TabsModule),
    },
    // {
    //   path: 'members',
    //   loadChildren: () =>
    //     import('./_members/members.module').then((m) => m.MembersPageModule),
    //   // ...canActivate(redirectUnauthorizedToLogin),
    //   // ...canActivate(verifiedEmail)
    // },
    // {
    //   path: 'trainers',
    //   loadChildren: () =>
    //     import('./_trainers/trainers.module').then((m) => m.TrainersPageModule),
    //   ...canActivate(redirectUnauthorizedToLogin)
    // },
    // {
    //   path: 'admins',
    //   loadChildren: () =>
    //     import('./_admins/admins.module').then((m) => m.AdminsModule),
    //   ...canActivate(redirectUnauthorizedToLogin)
    // },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '/unknown',
        pathMatch: 'full',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__["QuicklinkStrategy"],
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map