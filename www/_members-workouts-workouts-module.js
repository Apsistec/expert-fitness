(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_members-workouts-workouts-module"],{

/***/ "/ssd":
/*!******************************************************!*\
  !*** ./src/app/_members/workouts/workouts.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL19tZW1iZXJzL3dvcmtvdXRzL3dvcmtvdXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "24TE":
/*!******************************************************!*\
  !*** ./src/app/_members/workouts/workouts.module.ts ***!
  \******************************************************/
/*! exports provided: WorkoutsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsPageModule", function() { return WorkoutsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _workouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workouts-routing.module */ "4Hs4");
/* harmony import */ var _workouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workouts.page */ "x7TI");







let WorkoutsPageModule = class WorkoutsPageModule {
};
WorkoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _workouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkoutsPageRoutingModule"]
        ],
        declarations: [_workouts_page__WEBPACK_IMPORTED_MODULE_6__["WorkoutsPage"]]
    })
], WorkoutsPageModule);



/***/ }),

/***/ "4Hs4":
/*!**************************************************************!*\
  !*** ./src/app/_members/workouts/workouts-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: WorkoutsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsPageRoutingModule", function() { return WorkoutsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _workouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workouts.page */ "x7TI");




const routes = [
    {
        path: '',
        component: _workouts_page__WEBPACK_IMPORTED_MODULE_3__["WorkoutsPage"]
    }
];
let WorkoutsPageRoutingModule = class WorkoutsPageRoutingModule {
};
WorkoutsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkoutsPageRoutingModule);



/***/ }),

/***/ "B3sU":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_members/workouts/workouts.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar class=\"toolbar-global\">\n    <ion-title>workouts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen> </ion-content>\n");

/***/ }),

/***/ "x7TI":
/*!****************************************************!*\
  !*** ./src/app/_members/workouts/workouts.page.ts ***!
  \****************************************************/
/*! exports provided: WorkoutsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsPage", function() { return WorkoutsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_workouts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./workouts.page.html */ "B3sU");
/* harmony import */ var _workouts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workouts.page.scss */ "/ssd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let WorkoutsPage = class WorkoutsPage {
    constructor() { }
    ngOnInit() {
    }
};
WorkoutsPage.ctorParameters = () => [];
WorkoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-workouts',
        template: _raw_loader_workouts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_workouts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WorkoutsPage);



/***/ })

}]);
//# sourceMappingURL=_members-workouts-workouts-module.js.map