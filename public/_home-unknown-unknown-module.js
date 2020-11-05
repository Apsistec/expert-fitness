(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_home-unknown-unknown-module"],{

/***/ "GMMh":
/*!*************************************************!*\
  !*** ./src/app/_home/unknown/unknown.module.ts ***!
  \*************************************************/
/*! exports provided: UnknownPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownPageModule", function() { return UnknownPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/shared.module */ "i2L+");
/* harmony import */ var _unknown_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unknown-routing.module */ "oQAA");
/* harmony import */ var _unknown_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unknown.page */ "PJ5o");








let UnknownPageModule = class UnknownPageModule {
};
UnknownPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _unknown_routing_module__WEBPACK_IMPORTED_MODULE_6__["UnknownPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [_unknown_page__WEBPACK_IMPORTED_MODULE_7__["UnknownPage"]]
    })
], UnknownPageModule);



/***/ }),

/***/ "PJ5o":
/*!***********************************************!*\
  !*** ./src/app/_home/unknown/unknown.page.ts ***!
  \***********************************************/
/*! exports provided: UnknownPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownPage", function() { return UnknownPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let UnknownPage = class UnknownPage {
    constructor(location) {
        this.location = location;
    }
    goBack() {
        this.location.back();
    }
};
UnknownPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
UnknownPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: `
    <app-header></app-header>
    <ion-content
      fullscreen
      style="--background: right/cover no-repeat url('../../../assets/images/body.jpg')"
    >
      <ion-grid>
        <ion-row class="ion-margin">
          <ion-col size="auto">
            <ion-card color="light" class="ion-padding ion-text-center">
              <ion-card-header>
                <ion-card-title> Error 404 Not Found </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Oops, it looks like you have reached an <b>unknown</b> state of
                Zen!
              </ion-card-content>
              <ion-button class="ion-text-capitalize" (click)="goBack()"
                >Go Back</ion-button
              >
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  `,
    })
], UnknownPage);



/***/ }),

/***/ "oQAA":
/*!*********************************************************!*\
  !*** ./src/app/_home/unknown/unknown-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UnknownPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownPageRoutingModule", function() { return UnknownPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _unknown_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unknown.page */ "PJ5o");




const routes = [
    {
        path: '',
        component: _unknown_page__WEBPACK_IMPORTED_MODULE_3__["UnknownPage"]
    }
];
let UnknownPageRoutingModule = class UnknownPageRoutingModule {
};
UnknownPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UnknownPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=_home-unknown-unknown-module.js.map