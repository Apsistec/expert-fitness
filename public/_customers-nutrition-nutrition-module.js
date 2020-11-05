(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_customers-nutrition-nutrition-module"],{

/***/ "+zi7":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_customers/nutrition/nutrition.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar class=\"toolbar-global\">\n    <ion-title>nutrition</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen> </ion-content>\n");

/***/ }),

/***/ "bQ2X":
/*!********************************************************!*\
  !*** ./src/app/_customers/nutrition/nutrition.page.ts ***!
  \********************************************************/
/*! exports provided: NutritionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionPage", function() { return NutritionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nutrition_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nutrition.page.html */ "+zi7");
/* harmony import */ var _nutrition_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nutrition.page.scss */ "hGhx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NutritionPage = class NutritionPage {
    constructor() { }
    ngOnInit() {
    }
};
NutritionPage.ctorParameters = () => [];
NutritionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nutrition',
        template: _raw_loader_nutrition_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nutrition_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NutritionPage);



/***/ }),

/***/ "c5kW":
/*!******************************************************************!*\
  !*** ./src/app/_customers/nutrition/nutrition-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: NutritionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionPageRoutingModule", function() { return NutritionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nutrition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nutrition.page */ "bQ2X");




const routes = [
    {
        path: '',
        component: _nutrition_page__WEBPACK_IMPORTED_MODULE_3__["NutritionPage"]
    }
];
let NutritionPageRoutingModule = class NutritionPageRoutingModule {
};
NutritionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NutritionPageRoutingModule);



/***/ }),

/***/ "hGhx":
/*!**********************************************************!*\
  !*** ./src/app/_customers/nutrition/nutrition.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jdXN0b21lcnMvbnV0cml0aW9uL251dHJpdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "i3eq":
/*!**********************************************************!*\
  !*** ./src/app/_customers/nutrition/nutrition.module.ts ***!
  \**********************************************************/
/*! exports provided: NutritionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionPageModule", function() { return NutritionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nutrition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nutrition-routing.module */ "c5kW");
/* harmony import */ var _nutrition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nutrition.page */ "bQ2X");







let NutritionPageModule = class NutritionPageModule {
};
NutritionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nutrition_routing_module__WEBPACK_IMPORTED_MODULE_5__["NutritionPageRoutingModule"]],
        declarations: [_nutrition_page__WEBPACK_IMPORTED_MODULE_6__["NutritionPage"]],
    })
], NutritionPageModule);



/***/ })

}]);
//# sourceMappingURL=_customers-nutrition-nutrition-module.js.map