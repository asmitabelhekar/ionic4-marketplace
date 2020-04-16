(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"MainLoginClass\">\n\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <!-- <img class=\"centerImg\" src=\"../../../assets/applogo.png\" style=\"width:200px;height:120px;margin-top:5%\" /> -->\n      <h2>Market Place</h2>\n    </div>\n    <div class=\"LoginFormClass\">\n\n      <!-- <form name=\"entryform\" style=\"width: 100%;\" #f=\"ngForm\" novalidate> -->\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n        <mat-form-field style=\"width:92%; margin-top:15%;margin-left:4%;color:black; margin-right:4%\"\n          appearance=\"fill\">\n          <mat-label style=\"color:black\">Phone Number</mat-label>\n          <input matInput type=\"tel\" id=\"mobile\" class=\"form-control\" required minlength=\"10\"\n            maxlength=\"10\" [(ngModel)]=\"loginModel.mobile\" #mobile=\"ngModel\" />\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger\">\n                <div class=\"LoginError\" *ngIf=\"mobile.errors.required\">\n                  Please Enter Phone Number\n                </div>\n                <div class=\"LoginError\" *ngIf=\"mobile.errors.minlength\">\n                  Phone Number must be at least 10 digits long.\n                </div>\n\n\n              </div>\n            </div>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field style=\"width:92%;color:black\" appearance=\"fill\">\n          <mat-label style=\"color:black\">Password</mat-label>\n          <input matInput [type]=\"hide ? 'password' : 'text'\" id=\"password\" class=\"form-control\"\n            required [(ngModel)]=\"loginModel.password\" #password=\"ngModel\" style=\"color:black\"/>\n          <mat-icon matSuffix (click)=\"hide = !hide\" style=\"color:black\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                <div class=\"LoginError\" *ngIf=\"password.errors.required\">\n                  Please Enter Password\n                </div>\n\n\n\n              </div>\n            </div>\n          </mat-error>\n        </mat-form-field>\n        <div *ngIf=\"is_error\" class=\"LoginError\">\n          {{message}}\n        </div>\n      </div>\n\n\n\n\n\n      <div style=\"margin-top:5%\">\n        <button [disabled]=\"mobile.invalid || password.invalid\" mat-raised-button class=\"loginButton\" (click)=\"login(loginModel)\">Login</button>\n      </div>\n\n\n      <!-- </form> -->\n\n    </div>\n\n  </div>\n\n\n</div>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");









var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".LoginFormClass {\n  width: 100%;\n}\n\n.FullWidth {\n  width: 96%;\n  margin-top: 20px;\n}\n\n.LoginError {\n  color: #FF6464;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  text-align: right;\n}\n\n.LogoutBtn {\n  box-sizing: border-box;\n  height: 48px;\n  width: 131px;\n  border-radius: 25px;\n  background-color: linear-gradient(to right, #3672f6, #52caf9);\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n  margin-bottom: 25px;\n}\n\n.LoginClass {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 40px;\n}\n\n.centerImg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 140px;\n  color: grey;\n  height: 120px;\n  top: 25%;\n  position: relative;\n}\n\n.outerWrapper {\n  width: 100%;\n  height: 100vh;\n}\n\n.innerWrapper {\n  width: 100%;\n  height: 50vh;\n}\n\n.blueGradient {\n  width: 100%;\n  height: 100%;\n  background-color: #3672f6;\n  background-image: -webkit-gradient(linear, left top, right top, from(#3672f6), to(#52caf9));\n  background-image: linear-gradient(to right, #3672f6, #52caf9);\n}\n\n.loginCurveOverlay {\n  width: 100%;\n  height: 50vh;\n  border-radius: 15% 15% 0 0;\n  border: 2px solid #FFF;\n  background: #FFF;\n  position: absolute;\n  top: calc(50% - (15vh / 2));\n}\n\n.loginOverlay {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  margin: 0 auto;\n  border: 1px solid #FFF;\n  position: relative;\n  padding: 5px;\n  top: -38px;\n}\n\n.loginOverlayNew {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  box-shadow: 1px 1px 1px 1px #CCC;\n  margin: 0 auto;\n  height: 325px;\n  border: 1px solid #FFF;\n  border-radius: 5px;\n  top: -100px;\n  position: relative;\n  padding: 5px;\n}\n\n.logo {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  top: 15%;\n  margin: 0 auto;\n  border-radius: 100%;\n}\n\n.FullWidth {\n  width: 100%;\n}\n\n.MainLoginClass {\n  margin-top: 35%;\n  height: 100%;\n  width: 100%;\n}\n\n.loginButton {\n  background-color: #152a3f;\n  color: white;\n  width: 30%;\n  margin-left: 35%;\n  margin-right: 35%;\n  padding: 5px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDJGQUFBO0VBQUEsNkRBQUE7QUNGRjs7QURTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ05GOztBRFNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNORjs7QURVQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNQRjs7QURXQTtFQUdBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVkE7O0FEZUE7RUFDQSxXQUFBO0FDWkE7O0FEZUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUNiQTs7QURnQkE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtFQUNDLFlBQUE7RUFDRixlQUFBO0FDYkEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTG9naW5Gb3JtQ2xhc3N7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtYXJnaW46IDMwcHggMCAwIDA7XG59XG4uRnVsbFdpZHRoe1xuICB3aWR0aDo5NiU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uTG9naW5FcnJvcntcbiAgY29sb3I6ICNGRjY0NjQ7XHRcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgZm9udC1zaXplOiAxMnB4O1x0XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHRcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1x0XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1x0XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLkxvZ291dEJ0bntcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcdFxuICBoZWlnaHQ6IDQ4cHg7XHRcbiAgd2lkdGg6IDEzMXB4O1x0XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XHRcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcdFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2ICwgIzUyY2FmOSk7XG4gIGNvbG9yOiAjRkZGRkZGO1x0XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gIGZvbnQtc2l6ZTogMTVweDtcdFxuICBmb250LXdlaWdodDogNTAwO1x0XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcdFxuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgLy8gYm94LXNoYWRvdzogMCA0cHggOHB4IDJweCAjRkZGM0UwLCAwIDJweCAycHggMCAjRkZGM0UwO1xufVxuLkxvZ2luQ2xhc3N7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNlbnRlckltZyB7XG4gIC8vIGJvcmRlciA6IDFweCBzb2xpZCAjYmRhZmFmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDE0MHB4O1xuICBjb2xvcjpncmV5O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB0b3A6MjUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIG1hcmdpbi10b3A6MjAlO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAzMmYwO1xuICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5vdXRlcldyYXBwZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uaW5uZXJXcmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTB2aDtcbn1cblxuLmJsdWVHcmFkaWVudHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjojMzY3MmY2OyBcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2ICwgIzUyY2FmOSk7IFxufVxuXG4uc2Vjb25kSGFsZiB7XG4gIFxufVxuXG4ubG9naW5DdXJ2ZU92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBib3JkZXItcmFkaXVzOiAxNSUgMTUlIDAgMDtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gKDE1dmggLyAyKSk7XG59XG5cbi5sb2dpbk92ZXJsYXl7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4O1xuICB0b3A6IC0zOHB4O1xufVxuXG5cbi5sb2dpbk92ZXJsYXlOZXd7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4ICNDQ0M7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDMyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRvcDogLTEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuXG4ubG9nbyB7XG4vLyBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9hcHBsb2dvLnBuZycpIGNlbnRlcjtcbi8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbndpZHRoOiAxNTBweDtcbmhlaWdodDogMTUwcHg7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG50b3A6IDE1JTtcbm1hcmdpbjogMCBhdXRvO1xuYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uRnVsbFdpZHRoe1xud2lkdGg6IDEwMCU7XG59XG5cbi5NYWluTG9naW5DbGFzc3tcbm1hcmdpbi10b3A6MzUlO1xuLy8gYmFja2dyb3VuZC1jb2xvcjogIzBmMjQzMTtcbmhlaWdodDoxMDAlO1xud2lkdGg6MTAwJTtcbn1cblxuLmxvZ2luQnV0dG9ue1xuYmFja2dyb3VuZC1jb2xvcjogIzE1MmEzZjtcbmNvbG9yOiB3aGl0ZTtcbndpZHRoOjMwJTtcbiBtYXJnaW4tbGVmdDozNSU7IFxuIG1hcmdpbi1yaWdodDozNSU7XG4gIHBhZGRpbmc6NXB4OyBcbmZvbnQtc2l6ZToxOHB4O1xufSIsIi5Mb2dpbkZvcm1DbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uRnVsbFdpZHRoIHtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLkxvZ2luRXJyb3Ige1xuICBjb2xvcjogI0ZGNjQ2NDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5Mb2dvdXRCdG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMzFweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2LCAjNTJjYWY5KTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5Mb2dpbkNsYXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY2VudGVySW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxNDBweDtcbiAgY29sb3I6IGdyZXk7XG4gIGhlaWdodDogMTIwcHg7XG4gIHRvcDogMjUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdXRlcldyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmlubmVyV3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG59XG5cbi5ibHVlR3JhZGllbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY3MmY2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNjcyZjYsICM1MmNhZjkpO1xufVxuXG4ubG9naW5DdXJ2ZU92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBib3JkZXItcmFkaXVzOiAxNSUgMTUlIDAgMDtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gKDE1dmggLyAyKSk7XG59XG5cbi5sb2dpbk92ZXJsYXkge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgdG9wOiAtMzhweDtcbn1cblxuLmxvZ2luT3ZlcmxheU5ldyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4ICNDQ0M7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDMyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRvcDogLTEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uRnVsbFdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5NYWluTG9naW5DbGFzcyB7XG4gIG1hcmdpbi10b3A6IDM1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MmEzZjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tbGVmdDogMzUlO1xuICBtYXJnaW4tcmlnaHQ6IDM1JTtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");







var LoginPage = /** @class */ (function () {
    function LoginPage(router, toast, menuController, loader, apiCall) {
        this.router = router;
        this.toast = toast;
        this.menuController = menuController;
        this.loader = loader;
        this.apiCall = apiCall;
        this.hide = true;
        this.loginModel = {};
        this.menuController.enable(false);
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function (data) {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var send_date = {};
        send_date['mobile'] = this.loginModel.mobile;
        send_date['password'] = this.loginModel.password;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "users/login";
        this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
            localStorage.setItem("userId", MyResponse['result']['id']);
            localStorage.setItem("loginStatus", 'yes');
            _this.router.navigate(['/home']);
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.presentToast("Please try again");
            _this.loader.hideBlockingLoaderAuth();
        });
    };
    LoginPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: message,
                            duration: 4000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map