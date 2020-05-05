(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"MainLoginClass\">\n\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"margin-top:20%\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <!-- <img class=\"centerImg\" src=\"../../../assets/applogo.png\" style=\"width:200px;height:120px;margin-top:5%\" /> -->\n      <h3 style=\"color:white\">Holy Hub</h3>\n      <img src=\"../../../assets/logotransparent.png\" style=\"width:200px; height:200px;\"/>\n    </div>\n\n    <ion-card style=\"width:90%; padding-bottom:30px;border-radius: 20px;\">\n      <div class=\"LoginFormClass\">\n\n        <!-- <form name=\"entryform\" style=\"width: 100%;\" #f=\"ngForm\" novalidate> -->\n  \n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n          <mat-form-field style=\"width:92%; margin-top:15%;margin-left:4%;color:black; margin-right:4%\"\n            appearance=\"fill\">\n            <mat-label style=\"color:black\">Phone Number</mat-label>\n            <input matInput type=\"tel\" id=\"mobile\" class=\"form-control\" required minlength=\"10\" appearance=\"outline\"\n              maxlength=\"10\" [(ngModel)]=\"loginModel.mobile\" #mobile=\"ngModel\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger\">\n                  <div class=\"LoginError\" *ngIf=\"mobile.errors.required\">\n                    Please Enter Phone Number\n                  </div>\n                  <div class=\"LoginError\" *ngIf=\"mobile.errors.minlength\">\n                    Phone Number must be at least 10 digits long.\n                  </div>\n  \n  \n                </div>\n              </div>\n            </mat-error>\n          </mat-form-field>\n  \n          <mat-form-field style=\"width:92%;color:black ;margin-top:5px\" appearance=\"fill\">\n            <mat-label style=\"color:black\">Password</mat-label>\n            <input matInput [type]=\"hide ? 'password' : 'text'\" id=\"password\" class=\"form-control\"\n              required [(ngModel)]=\"loginModel.password\" #password=\"ngModel\" style=\"color:black\"/>\n            <mat-icon matSuffix (click)=\"hide = !hide\" style=\"color:black\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                  <div class=\"LoginError\" *ngIf=\"password.errors.required\">\n                    Please Enter Password\n                  </div>\n  \n  \n  \n                </div>\n              </div>\n            </mat-error>\n          </mat-form-field>\n          <div *ngIf=\"is_error\" class=\"LoginError\">\n            {{message}}\n          </div>\n        </div>\n  \n  \n  \n  \n  \n        <div style=\"margin-top:5%\">\n          <button [disabled]=\"mobile.invalid || password.invalid\" mat-raised-button class=\"loginButton\" (click)=\"login(loginModel)\">Login</button>\n        </div>\n  \n  \n        <!-- </form> -->\n  \n      </div>\n    </ion-card>\n  \n\n  </div>\n\n\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".LoginFormClass {\n  width: 100%;\n}\n\n.FullWidth {\n  width: 96%;\n  margin-top: 20px;\n}\n\n.LoginError {\n  color: #FF6464;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  text-align: right;\n}\n\n.LogoutBtn {\n  box-sizing: border-box;\n  height: 48px;\n  width: 131px;\n  border-radius: 25px;\n  background-color: linear-gradient(to right, #3672f6, #52caf9);\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n  margin-bottom: 25px;\n}\n\n.LoginClass {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 40px;\n}\n\n.centerImg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 140px;\n  color: grey;\n  height: 120px;\n  top: 25%;\n  position: relative;\n}\n\n.outerWrapper {\n  width: 100%;\n  height: 100vh;\n}\n\n.innerWrapper {\n  width: 100%;\n  height: 50vh;\n}\n\n.blueGradient {\n  width: 100%;\n  height: 100%;\n  background-color: #3672f6;\n  background-image: -webkit-gradient(linear, left top, right top, from(#3672f6), to(#52caf9));\n  background-image: linear-gradient(to right, #3672f6, #52caf9);\n}\n\n.loginCurveOverlay {\n  width: 100%;\n  height: 50vh;\n  border-radius: 15% 15% 0 0;\n  border: 2px solid #FFF;\n  background: #FFF;\n  position: absolute;\n  top: calc(50% - (15vh / 2));\n}\n\n.loginOverlay {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  margin: 0 auto;\n  border: 1px solid #FFF;\n  position: relative;\n  padding: 5px;\n  top: -38px;\n}\n\n.loginOverlayNew {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  box-shadow: 1px 1px 1px 1px #CCC;\n  margin: 0 auto;\n  height: 325px;\n  border: 1px solid #FFF;\n  border-radius: 5px;\n  top: -100px;\n  position: relative;\n  padding: 5px;\n}\n\n.logo {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  top: 15%;\n  margin: 0 auto;\n  border-radius: 100%;\n}\n\n.FullWidth {\n  width: 100%;\n}\n\n.MainLoginClass {\n  background-color: #152a3f;\n  height: 200%;\n  width: 100%;\n}\n\n.loginButton {\n  background-color: #152a3f;\n  color: white;\n  width: 30%;\n  margin-left: 35%;\n  margin-right: 35%;\n  padding: 5px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDJGQUFBO0VBQUEsNkRBQUE7QUNGRjs7QURTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ05GOztBRFNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNORjs7QURVQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNQRjs7QURXQTtFQUdBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVkE7O0FEZUE7RUFDQSxXQUFBO0FDWkE7O0FEZUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDYkE7O0FEZ0JBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQyxZQUFBO0VBQ0YsZUFBQTtBQ2JBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkxvZ2luRm9ybUNsYXNze1xuICB3aWR0aDogMTAwJTtcbiAgLy8gbWFyZ2luOiAzMHB4IDAgMCAwO1xufVxuLkZ1bGxXaWR0aHtcbiAgd2lkdGg6OTYlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLkxvZ2luRXJyb3J7XG4gIGNvbG9yOiAjRkY2NDY0O1x0XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gIGZvbnQtc2l6ZTogMTJweDtcdFxuICBmb250LXdlaWdodDogNTAwO1x0XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcdFxuICBsaW5lLWhlaWdodDogMTZweDtcdFxuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5Mb2dvdXRCdG57XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHRcbiAgaGVpZ2h0OiA0OHB4O1x0XG4gIHdpZHRoOiAxMzFweDtcdFxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1x0XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHRcbiAgYmFja2dyb3VuZC1jb2xvcjogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2NzJmNiAsICM1MmNhZjkpO1xuICBjb2xvcjogI0ZGRkZGRjtcdFxuICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICBmb250LXNpemU6IDE1cHg7XHRcbiAgZm9udC13ZWlnaHQ6IDUwMDtcdFxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHRcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIC8vIGJveC1zaGFkb3c6IDAgNHB4IDhweCAycHggI0ZGRjNFMCwgMCAycHggMnB4IDAgI0ZGRjNFMDtcbn1cbi5Mb2dpbkNsYXNze1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5jZW50ZXJJbWcge1xuICAvLyBib3JkZXIgOiAxcHggc29saWQgI2JkYWZhZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxNDBweDtcbiAgY29sb3I6Z3JleTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgdG9wOjI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBtYXJnaW4tdG9wOjIwJTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2YwMzJmMDtcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ub3V0ZXJXcmFwcGVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmlubmVyV3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG59XG5cbi5ibHVlR3JhZGllbnR7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IzM2NzJmNjsgXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2NzJmNiAsICM1MmNhZjkpOyBcbn1cblxuLnNlY29uZEhhbGYge1xuICBcbn1cblxuLmxvZ2luQ3VydmVPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTUlIDE1JSAwIDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtICgxNXZoIC8gMikpO1xufVxuXG4ubG9naW5PdmVybGF5e1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgdG9wOiAtMzhweDtcbn1cblxuXG4ubG9naW5PdmVybGF5TmV3e1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjQ0NDO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAzMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0b3A6IC0xMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cblxuLmxvZ28ge1xuLy8gYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYXBwbG9nby5wbmcnKSBjZW50ZXI7XG4vLyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG53aWR0aDogMTUwcHg7XG5oZWlnaHQ6IDE1MHB4O1xucG9zaXRpb246IHJlbGF0aXZlO1xudG9wOiAxNSU7XG5tYXJnaW46IDAgYXV0bztcbmJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLkZ1bGxXaWR0aHtcbndpZHRoOiAxMDAlO1xufVxuXG4uTWFpbkxvZ2luQ2xhc3N7XG4vLyBtYXJnaW4tdG9wOjM1JTtcbmJhY2tncm91bmQtY29sb3I6ICMxNTJhM2Y7XG5oZWlnaHQ6MjAwJTtcbndpZHRoOjEwMCU7XG59XG5cbi5sb2dpbkJ1dHRvbntcbmJhY2tncm91bmQtY29sb3I6ICMxNTJhM2Y7XG5jb2xvcjogd2hpdGU7XG53aWR0aDozMCU7XG4gbWFyZ2luLWxlZnQ6MzUlOyBcbiBtYXJnaW4tcmlnaHQ6MzUlO1xuICBwYWRkaW5nOjVweDsgXG5mb250LXNpemU6MThweDtcbn1cblxuLy8gaW9uLWNhcmR7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4vLyB9XG5cbi8vIDo6bmctZGVlcCB7XG5cbi8vICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4vLyAgIH1cbi8vIH0iLCIuTG9naW5Gb3JtQ2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkZ1bGxXaWR0aCB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5Mb2dpbkVycm9yIHtcbiAgY29sb3I6ICNGRjY0NjQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uTG9nb3V0QnRuIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTMxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2NzJmNiwgIzUyY2FmOSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uTG9naW5DbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNlbnRlckltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTQwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB0b3A6IDI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3V0ZXJXcmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5pbm5lcldyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuXG4uYmx1ZUdyYWRpZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NzJmNjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2LCAjNTJjYWY5KTtcbn1cblxuLmxvZ2luQ3VydmVPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTUlIDE1JSAwIDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtICgxNXZoIC8gMikpO1xufVxuXG4ubG9naW5PdmVybGF5IHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRvcDogLTM4cHg7XG59XG5cbi5sb2dpbk92ZXJsYXlOZXcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjQ0NDO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAzMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0b3A6IC0xMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLkZ1bGxXaWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uTWFpbkxvZ2luQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyYTNmO1xuICBoZWlnaHQ6IDIwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW5CdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyYTNmO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAzNSU7XG4gIG1hcmdpbi1yaWdodDogMzUlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */");

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
            localStorage.setItem("userName", MyResponse['result']['name']);
            localStorage.setItem("userCreated", MyResponse['result']['created']);
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