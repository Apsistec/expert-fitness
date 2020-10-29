(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_home-ratings-ratings-module"],{

/***/ "7Y58":
/*!***********************************************!*\
  !*** ./src/app/_home/ratings/ratings.page.ts ***!
  \***********************************************/
/*! exports provided: RatingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsPage", function() { return RatingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ratings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ratings.page.html */ "xTB9");
/* harmony import */ var _ratings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ratings.page.scss */ "V0aV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/message.service */ "Qskx");










let RatingsPage = class RatingsPage {
    constructor(modalController, authService, fb, messageService, afs) {
        this.modalController = modalController;
        this.authService = authService;
        this.fb = fb;
        this.messageService = messageService;
        this.afs = afs;
        this.imgDescription = 'Submitted by RF$ PRO Members';
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            loop: true,
            breakpoints: {
                // when window width is >= 320px
                150: {
                    slidesPerView: 1.5,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                576: {
                    slidesPerView: 2.5,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                1200: {
                    slidesPerView: 3.5,
                    spaceBetween: 15
                }
            }
        };
        this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((user) => (this.user = user)));
        this.reviewForm = this.fb.group({
            review: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    }
};
RatingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
RatingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ratings',
        template: _raw_loader_ratings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ratings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RatingsPage);



/***/ }),

/***/ "V0aV":
/*!*************************************************!*\
  !*** ./src/app/_home/ratings/ratings.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL19ob21lL3JhdGluZ3MvcmF0aW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "ZCKE":
/*!*************************************************!*\
  !*** ./src/app/_home/ratings/ratings.module.ts ***!
  \*************************************************/
/*! exports provided: RatingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsPageModule", function() { return RatingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ratings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ratings.page */ "7Y58");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/shared.module */ "i2L+");







let RatingsPageModule = class RatingsPageModule {
};
RatingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        declarations: [_ratings_page__WEBPACK_IMPORTED_MODULE_5__["RatingsPage"]],
    })
], RatingsPageModule);



/***/ }),

/***/ "xTB9":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_home/ratings/ratings.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header> </app-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <app-ratings-insert></app-ratings-insert>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-title>\n            <ion-text> Add A Review of Expert Fitness App </ion-text>\n          </ion-card-title>\n          <ion-card-content>\n            <!-- <form\n              *ngIf=\"user\"\n              [formGroup]=\"reviewForm\"\n              (ngSubmit)=\"setTestimonial()\"\n              novalidate\n            >\n              <ion-list class=\"ion-no-margin ion-no-padding\">\n                <ion-item>\n                  <ion-label>{{ user.displayName }}</ion-label>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"floating\">Review</ion-label>\n                  <ion-textarea\n                    auto-grow=\"true\"\n                    color=\"primary\"\n                    type=\"text\"\n                    inputmode=\"text\"\n                    formControlName=\"review\"\n                    placeholder=\"Your review goes here...\"\n                    required\n                    spellcheck=\"true\"\n                    wrap=\"soft\"\n                    autofocus=\"true\"\n                  >\n                  </ion-textarea>\n                </ion-item>\n              </ion-list>\n\n              <ion-button\n                [disabled]=\"reviewForm.invalid\"\n                color=\"tertiary\"\n                expand=\"full\"\n                type=\"submit\"\n              >\n                <ion-icon size=\"small\" slot=\"start\" displayName=\"arrow-forward-sharp\">\n                </ion-icon>\n                <ion-text>Create</ion-text>\n              </ion-button>\n            </form> -->\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=_home-ratings-ratings-module.js.map