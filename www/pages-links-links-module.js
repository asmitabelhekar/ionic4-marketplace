(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-links-links-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/links/links.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/links/links.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>links</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/links/links-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/links/links-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LinksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksPageRoutingModule", function() { return LinksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _links_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./links.page */ "./src/app/pages/links/links.page.ts");




var routes = [
    {
        path: '',
        component: _links_page__WEBPACK_IMPORTED_MODULE_3__["LinksPage"]
    }
];
var LinksPageRoutingModule = /** @class */ (function () {
    function LinksPageRoutingModule() {
    }
    LinksPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LinksPageRoutingModule);
    return LinksPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/links/links.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/links/links.module.ts ***!
  \*********************************************/
/*! exports provided: LinksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksPageModule", function() { return LinksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _links_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./links-routing.module */ "./src/app/pages/links/links-routing.module.ts");
/* harmony import */ var _links_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./links.page */ "./src/app/pages/links/links.page.ts");







var LinksPageModule = /** @class */ (function () {
    function LinksPageModule() {
    }
    LinksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _links_routing_module__WEBPACK_IMPORTED_MODULE_5__["LinksPageRoutingModule"]
            ],
            declarations: [_links_page__WEBPACK_IMPORTED_MODULE_6__["LinksPage"]]
        })
    ], LinksPageModule);
    return LinksPageModule;
}());



/***/ }),

/***/ "./src/app/pages/links/links.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/links/links.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpbmtzL2xpbmtzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/links/links.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/links/links.page.ts ***!
  \*******************************************/
/*! exports provided: LinksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksPage", function() { return LinksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinksPage = /** @class */ (function () {
    function LinksPage() {
    }
    LinksPage.prototype.ngOnInit = function () {
    };
    LinksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-links',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./links.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/links/links.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./links.page.scss */ "./src/app/pages/links/links.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinksPage);
    return LinksPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-links-links-module.js.map