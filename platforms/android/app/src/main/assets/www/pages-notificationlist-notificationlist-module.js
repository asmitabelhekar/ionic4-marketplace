(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notificationlist-notificationlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notificationlist/notificationlist.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notificationlist/notificationlist.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Second</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Congratulation!</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      You get price from our sponsor:\n      <h2>{{price}}</h2>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/notificationlist/notificationlist-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/notificationlist/notificationlist-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationlistPageRoutingModule", function() { return NotificationlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notificationlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificationlist.page */ "./src/app/pages/notificationlist/notificationlist.page.ts");




var routes = [
    {
        path: '',
        component: _notificationlist_page__WEBPACK_IMPORTED_MODULE_3__["NotificationlistPage"]
    }
];
var NotificationlistPageRoutingModule = /** @class */ (function () {
    function NotificationlistPageRoutingModule() {
    }
    NotificationlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NotificationlistPageRoutingModule);
    return NotificationlistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/notificationlist/notificationlist.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/notificationlist/notificationlist.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationlistPageModule", function() { return NotificationlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _notificationlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificationlist-routing.module */ "./src/app/pages/notificationlist/notificationlist-routing.module.ts");
/* harmony import */ var _notificationlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificationlist.page */ "./src/app/pages/notificationlist/notificationlist.page.ts");







var NotificationlistPageModule = /** @class */ (function () {
    function NotificationlistPageModule() {
    }
    NotificationlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _notificationlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationlistPageRoutingModule"]
            ],
            declarations: [_notificationlist_page__WEBPACK_IMPORTED_MODULE_6__["NotificationlistPage"]]
        })
    ], NotificationlistPageModule);
    return NotificationlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/notificationlist/notificationlist.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/notificationlist/notificationlist.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbmxpc3Qvbm90aWZpY2F0aW9ubGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/notificationlist/notificationlist.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/notificationlist/notificationlist.page.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationlistPage", function() { return NotificationlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NotificationlistPage = /** @class */ (function () {
    function NotificationlistPage(route) {
        this.route = route;
        this.price = '100';
    }
    NotificationlistPage.prototype.ngOnInit = function () {
        this.price = this.route.snapshot.params['price'];
    };
    NotificationlistPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    NotificationlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notificationlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notificationlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notificationlist/notificationlist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notificationlist.page.scss */ "./src/app/pages/notificationlist/notificationlist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NotificationlistPage);
    return NotificationlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-notificationlist-notificationlist-module.js.map