(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_members-videos-videos-module"],{

/***/ "/1xK":
/*!**********************************************************!*\
  !*** ./src/app/_members/videos/videos-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: VideosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPageRoutingModule", function() { return VideosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videos.page */ "Yv6p");




const routes = [
    {
        path: '',
        component: _videos_page__WEBPACK_IMPORTED_MODULE_3__["VideosPage"]
    }
];
let VideosPageRoutingModule = class VideosPageRoutingModule {
};
VideosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideosPageRoutingModule);



/***/ }),

/***/ "Yv6p":
/*!************************************************!*\
  !*** ./src/app/_members/videos/videos.page.ts ***!
  \************************************************/
/*! exports provided: VideosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPage", function() { return VideosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_videos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./videos.page.html */ "mriG");
/* harmony import */ var _videos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videos.page.scss */ "iTiB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let VideosPage = class VideosPage {
    constructor() { }
    ngOnInit() {
    }
};
VideosPage.ctorParameters = () => [];
VideosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-videos',
        template: _raw_loader_videos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VideosPage);



/***/ }),

/***/ "iTiB":
/*!**************************************************!*\
  !*** ./src/app/_members/videos/videos.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL19tZW1iZXJzL3ZpZGVvcy92aWRlb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "kZ63":
/*!**************************************************!*\
  !*** ./src/app/_members/videos/videos.module.ts ***!
  \**************************************************/
/*! exports provided: VideosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPageModule", function() { return VideosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/shared.module */ "i2L+");
/* harmony import */ var _videos_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videos-routing.module */ "/1xK");
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./videos.page */ "Yv6p");








let VideosPageModule = class VideosPageModule {
};
VideosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _videos_routing_module__WEBPACK_IMPORTED_MODULE_6__["VideosPageRoutingModule"]
        ],
        declarations: [_videos_page__WEBPACK_IMPORTED_MODULE_7__["VideosPage"]]
    })
], VideosPageModule);



/***/ }),

/***/ "mriG":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_members/videos/videos.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar class=\"toolbar-global\">\n    <ion-title>videos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen> </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=_members-videos-videos-module.js.map