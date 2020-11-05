(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_home-verify-email-verify-email-module"],{

/***/ "6C6O":
/*!***********************************************************!*\
  !*** ./src/app/_home/verify-email/verify-email.module.ts ***!
  \***********************************************************/
/*! exports provided: VerifyEmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPageModule", function() { return VerifyEmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/shared.module */ "i2L+");
/* harmony import */ var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify-email-routing.module */ "Qmun");
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verify-email.page */ "pifY");








let VerifyEmailPageModule = class VerifyEmailPageModule {
};
VerifyEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_7__["VerifyEmailPage"]]
    })
], VerifyEmailPageModule);



/***/ }),

/***/ "Qmun":
/*!*******************************************************************!*\
  !*** ./src/app/_home/verify-email/verify-email-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VerifyEmailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPageRoutingModule", function() { return VerifyEmailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify-email.page */ "pifY");




const routes = [
    {
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_3__["VerifyEmailPage"]
    }
];
let VerifyEmailPageRoutingModule = class VerifyEmailPageRoutingModule {
};
VerifyEmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerifyEmailPageRoutingModule);



/***/ }),

/***/ "YNJ2":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_home/verify-email/verify-email.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <ion-card\n    class=\"ion-padding ion-text-center\"\n    style=\"margin: auto; top: 10vh; max-width: 500px\"\n    color=\"light\"\n  >\n    <div class=\"displayTableCell\">\n      <div class=\"authBlock\">\n        <h3>Thank You for Registering</h3>\n\n        <div class=\"formGroup\" *ngIf=\"user | async\">\n          <p class=\"text-center\">\n            We have sent a confirmation email to\n            <strong>{{user.email}}</strong>.\n          </p>\n          <p class=\"text-center\">\n            Please check your email and click on the link to verfiy your email\n            address.\n          </p>\n        </div>\n\n        <!-- Calling SendVerificationMail() method using authService Api -->\n        <div class=\"formGroup\">\n          <ion-button\n            class=\"ion-text-capitalize\"\n            type=\"button\"\n            class=\"btn btnPrimary\"\n            (click)=\"authService.sendVerificationMail()\"\n          >\n            <i class=\"fas fa-redo-alt\"></i>\n            Resend Verification Email\n          </ion-button>\n        </div>\n      </div>\n\n      <div class=\"redirectToSignIn\">\n        <span\n          >Go back to?<span class=\"redirect\" routerLink=\"/get-started\">\n            Sign in</span\n          ></span\n        >\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "hjSG":
/*!***********************************************************!*\
  !*** ./src/app/_home/verify-email/verify-email.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19ob21lL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "pifY":
/*!*********************************************************!*\
  !*** ./src/app/_home/verify-email/verify-email.page.ts ***!
  \*********************************************************/
/*! exports provided: VerifyEmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPage", function() { return VerifyEmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verify_email_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verify-email.page.html */ "YNJ2");
/* harmony import */ var _verify_email_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-email.page.scss */ "hjSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");






let VerifyEmailPage = class VerifyEmailPage {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => this.user = user));
    }
};
VerifyEmailPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
VerifyEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify-email',
        template: _raw_loader_verify_email_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_email_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerifyEmailPage);



/***/ })

}]);
//# sourceMappingURL=_home-verify-email-verify-email-module.js.map