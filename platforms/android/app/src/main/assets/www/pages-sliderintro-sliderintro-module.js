(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sliderintro-sliderintro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sliderintro/sliderintro.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sliderintro/sliderintro.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides pager=\"false\" style=\"width:100%; height:100%\">\n\n  <ion-slide style=\"width:100%; height:100%\">\n    <div style=\"width:100%; height:100%; \">\n      <img src=\"../../../assets/dancetwo.png\" style=\"width:100%; height:100%\">\n    </div>\n  </ion-slide>\n\n  <ion-slide style=\"width:100%; height:100%\">\n    <div style=\"width:100%; height:100%; \">\n      <img src=\"../../../assets/dancetwo.png\" style=\"width:100%; height:100%\">\n    </div>\n   </ion-slide>\n\n   <ion-slide style=\"width:100%; height:100%\">\n    <div style=\"width:100%; height:100%; position: relative;\">\n      <img src=\"../../../assets/dancetwo.png\" style=\"width:100%; height:100%;\" />\n      <!-- <h3 align=\"center\" (click)=\"login()\" style=\"color:white;position: absolute; bottom:30px;border: 1px solid white;z-index: 1;padding:10px\">Login</h3> -->\n      <div  style=\"position: absolute; bottom:30px; border: 1px solid white;z-index: 1;padding:10px\" fxLayoutAlign=\"center center\" (click)=\"login()\">\n        <label style=\"color:white\" >Login</label>\n        </div>\n    </div>\n \n   </ion-slide>\n</ion-slides>");

/***/ }),

/***/ "./src/app/pages/sliderintro/sliderintro-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/sliderintro/sliderintro-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SliderintroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderintroPageRoutingModule", function() { return SliderintroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sliderintro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliderintro.page */ "./src/app/pages/sliderintro/sliderintro.page.ts");




var routes = [
    {
        path: '',
        component: _sliderintro_page__WEBPACK_IMPORTED_MODULE_3__["SliderintroPage"]
    }
];
var SliderintroPageRoutingModule = /** @class */ (function () {
    function SliderintroPageRoutingModule() {
    }
    SliderintroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SliderintroPageRoutingModule);
    return SliderintroPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/sliderintro/sliderintro.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sliderintro/sliderintro.module.ts ***!
  \*********************************************************/
/*! exports provided: SliderintroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderintroPageModule", function() { return SliderintroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _sliderintro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sliderintro-routing.module */ "./src/app/pages/sliderintro/sliderintro-routing.module.ts");
/* harmony import */ var _sliderintro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sliderintro.page */ "./src/app/pages/sliderintro/sliderintro.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");








var SliderintroPageModule = /** @class */ (function () {
    function SliderintroPageModule() {
    }
    SliderintroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _sliderintro_routing_module__WEBPACK_IMPORTED_MODULE_5__["SliderintroPageRoutingModule"]
            ],
            declarations: [_sliderintro_page__WEBPACK_IMPORTED_MODULE_6__["SliderintroPage"]]
        })
    ], SliderintroPageModule);
    return SliderintroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sliderintro/sliderintro.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/sliderintro/sliderintro.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NsaWRlcmludHJvL3NsaWRlcmludHJvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/sliderintro/sliderintro.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/sliderintro/sliderintro.page.ts ***!
  \*******************************************************/
/*! exports provided: SliderintroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderintroPage", function() { return SliderintroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");




var SliderintroPage = /** @class */ (function () {
    function SliderintroPage(router, menuController) {
        this.router = router;
        this.menuController = menuController;
        this.slides = document.querySelector('ion-slides');
        this.menuController.enable(false);
    }
    SliderintroPage.prototype.ngOnInit = function () {
        this.slides.options = {
            initialSlide: 1,
            speed: 400
        };
    };
    SliderintroPage.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    SliderintroPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    SliderintroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sliderintro',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sliderintro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sliderintro/sliderintro.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sliderintro.page.scss */ "./src/app/pages/sliderintro/sliderintro.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], SliderintroPage);
    return SliderintroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sliderintro-sliderintro-module.js.map