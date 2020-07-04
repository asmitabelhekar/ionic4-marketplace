(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"MainLoginClass\">\n  <div fxLayout=\"column\"  style=\"height:100%\">\n<div style=\"height:60%;width:100%;position: relative;\" >\n  <img src=\"./assets/loginbg.png\" style=\"width:100%; height:100%;\"/>\n<label fxLayoutAlign=\"center center\" class=\"app-title-css\">HOLYHUB</label>\n</div>\n\n<div class=\"sociallogin-container\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <label fxLayoutAlign=\"center center\" class=\"desc-text\">Sign in with Social Networks</label>\n\n<div  fxLayout=\"row\" style=\"width:90%;margin-top:15px\">\n\n\n<div fxFlex=\"48\" fxLayout=\"row\"  (click)=\"fbLogin()\" >\n  <button mat-raised-button class=\"loginFbButton\">\n    <span style=\"font-size:22px\">f</span> &nbsp;&nbsp;&nbsp;   FACEBOOK\n  </button>\n \n</div>\n\n<div fxFlex=\"4\"></div>\n\n\n<!-- <div fxFlex=\"48\" fxLayout=\"row\"  (click)=\"loginWithGmail()\"> -->\n  <div fxFlex=\"48\" fxLayout=\"row\"  (click)=\"login()\">\n\n  <button mat-raised-button class=\"loginGmailButton\">\n    <span style=\"font-size:20px\">G</span> &nbsp;&nbsp;&nbsp;   GOOGLE\n  </button>\n \n</div>\n\n\n    \n\n</div>\n<label fxLayoutAlign=\"center center\" class=\"desc-text-signin\">By sign in you agree to the &nbsp;<span class=\"color-change\">Terms </span>&nbsp; and the &nbsp;<span class=\"color-change\"> Conditions </span></label>\n\n</div>\n  \n  </div>\n\n \n</div>\n\n\n  <!-- <button fxLayout=\"row\" fxFlex=\"100\"  mat-raised-button class=\"loginFbButton\" (click)=\"fbLogin()\"><label fxFlex=\"50\" fxLayoutAlign=\"start center\">f</label><label fxFlex=\"50\" fxLayoutAlign=\"center center\">LOGIN WITH FACEBOOK</label></button>\n  <button fxLayout=\"row\" mat-raised-button class=\"loginGmailButton\" (click)=\"loginWithGmail()\"><label fxLayoutAlign=\"start center\">G</label><label fxLayoutAlign=\"center center\">LOGIN WITH GMAIL</label></button> -->\n\n        <!-- <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n          <mat-form-field style=\"width:92%; margin-top:5%;margin-left:4%;color:black; margin-right:4%\"\n            appearance=\"outline\">\n            <mat-label style=\"color:gray\">Phone Number</mat-label>\n            <input matInput type=\"tel\" id=\"mobile\" class=\"form-control\" required minlength=\"10\" appearance=\"outline\"\n              maxlength=\"10\" [(ngModel)]=\"loginModel.mobile\" #mobile=\"ngModel\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger\">\n                  <div class=\"LoginError\" *ngIf=\"mobile.errors.required\">\n                    Please Enter Phone Number\n                  </div>\n                  <div class=\"LoginError\" *ngIf=\"mobile.errors.minlength\">\n                    Phone Number must be at least 10 digits long.\n                  </div>\n  \n  \n                </div>\n              </div>\n            </mat-error>\n          </mat-form-field>\n  \n          <mat-form-field style=\"width:92%;color:black ;margin-top:5px\" appearance=\"outline\">\n            <mat-label style=\"color:gray\">Password</mat-label>\n            <input matInput [type]=\"hide ? 'password' : 'text'\" id=\"password\" class=\"form-control\"\n              required [(ngModel)]=\"loginModel.password\" #password=\"ngModel\" style=\"color:black\"/>\n            <mat-icon matSuffix (click)=\"hide = !hide\" style=\"color:gray\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                  <div class=\"LoginError\" *ngIf=\"password.errors.required\">\n                    Please Enter Password\n                  </div>\n  \n  \n  \n                </div>\n              </div>\n            </mat-error>\n          </mat-form-field>\n          <div *ngIf=\"is_error\" class=\"LoginError\">\n            {{message}}\n          </div>\n        </div>\n          <button [disabled]=\"mobile.invalid || password.invalid\" mat-raised-button class=\"loginButton\" (click)=\"login(loginModel)\">LOGIN</button> -->\n  \n  ");

/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



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
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");











var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"]
            ],
            providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__["Facebook"]],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".LoginFormClass {\n  width: 100%;\n}\n\n.FullWidth {\n  width: 96%;\n  margin-top: 20px;\n}\n\n.LoginError {\n  color: #FF6464;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  text-align: right;\n}\n\n.LogoutBtn {\n  box-sizing: border-box;\n  height: 48px;\n  width: 131px;\n  border-radius: 25px;\n  background-color: linear-gradient(to right, #3672f6, #52caf9);\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n  margin-bottom: 25px;\n}\n\n.LoginClass {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 40px;\n}\n\n.centerImg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 140px;\n  color: grey;\n  height: 120px;\n  top: 25%;\n  position: relative;\n}\n\n.outerWrapper {\n  width: 100%;\n  height: 100vh;\n}\n\n.innerWrapper {\n  width: 100%;\n  height: 50vh;\n}\n\n.blueGradient {\n  width: 100%;\n  height: 100%;\n  background-color: #3672f6;\n  background-image: linear-gradient(to right, #3672f6, #52caf9);\n}\n\n.loginCurveOverlay {\n  width: 100%;\n  height: 50vh;\n  border-radius: 15% 15% 0 0;\n  border: 2px solid #FFF;\n  background: #FFF;\n  position: absolute;\n  top: calc(50% - (15vh / 2));\n}\n\n.loginOverlay {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  margin: 0 auto;\n  border: 1px solid #FFF;\n  position: relative;\n  padding: 5px;\n  top: -38px;\n}\n\n.loginOverlayNew {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  box-shadow: 1px 1px 1px 1px #CCC;\n  margin: 0 auto;\n  height: 325px;\n  border: 1px solid #FFF;\n  border-radius: 5px;\n  top: -100px;\n  position: relative;\n  padding: 5px;\n}\n\n.logo {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  top: 15%;\n  margin: 0 auto;\n  border-radius: 100%;\n}\n\n.FullWidth {\n  width: 100%;\n}\n\n.MainLoginClass {\n  background-size: cover;\n  height: 100%;\n  background: linear-gradient(to bottom, #f35b28, #f7906e, #feae93);\n  background-repeat: no-repeat;\n  position: relative;\n  overflow-y: scroll;\n  width: 100%;\n}\n\n.social-login-button {\n  width: 80%;\n}\n\n.sociallogin-container {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  height: 30%;\n  background-color: white;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.loginButton {\n  background-color: #fbb5da;\n  color: white;\n  width: 80%;\n  padding: 4px;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\n.loginFbButton {\n  background-color: #395696;\n  color: white;\n  width: 100%;\n  font-size: 12px;\n  padding: 4px;\n  border-radius: 25px;\n}\n\n.loginGmailButton {\n  background-color: #ca4d45;\n  color: white;\n  width: 100%;\n  font-size: 12px;\n  padding: 4px;\n  border-radius: 25px;\n}\n\n.sub-text-css {\n  color: white;\n  font-size: 10px;\n  text-align: justify;\n  width: 75%;\n  text-justify: inter-word;\n}\n\n.text-size-f-css {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.text-size-G-css {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.desc-text {\n  color: gray;\n  font-size: 12px;\n  width: 80%;\n  padding: 8px;\n  margin-top: 30px;\n}\n\n.desc-text-signin {\n  color: gray;\n  font-size: 10px;\n  width: 95%;\n  padding: 8px;\n  position: fixed;\n  bottom: 5px;\n  text-justify: inter-word;\n}\n\n.app-title-css {\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n  font-size: 1.6em;\n  font-family: sans-serif;\n  font-weight: 470;\n  color: white;\n}\n\n.color-change {\n  color: #f35b28;\n}\n\n.socialMediaIcon {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Frc2hheS5tYWRrZS9EZXNrdG9wL0V4ZXJjaXNlL2lvbmljNC1tYXJrZXRwbGFjZS9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLDZEQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFFRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkRBQUE7QUNGRjs7QURTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ05GOztBRFNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNORjs7QURVQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNQRjs7QURXQTtFQUdBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVkE7O0FEZUE7RUFDQSxXQUFBO0FDWkE7O0FEZUE7RUFJQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxpRUFBQTtFQUVBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNqQkE7O0FEb0JBO0VBQ0UsVUFBQTtBQ2pCRjs7QURvQkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBR0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDbkJGOztBRHNCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDbkJGOztBRHNCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDcEJGOztBRHVCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDckJGOztBRHdCQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0YsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNyQkE7O0FEdUJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDcEJGOztBRHVCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQyxZQUFBO0VBQ0YsZ0JBQUE7QUNwQkQ7O0FEc0JBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0MsWUFBQTtFQUNELGVBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUNuQkY7O0FEc0JBO0VBQ0Usa0JBQUE7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7QUNuQko7O0FEc0JBO0VBQ0UsY0FBQTtBQ25CRjs7QURpQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzlCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Mb2dpbkZvcm1DbGFzc3tcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1hcmdpbjogMzBweCAwIDAgMDtcbn1cbi5GdWxsV2lkdGh7XG4gIHdpZHRoOjk2JTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5Mb2dpbkVycm9ye1xuICBjb2xvcjogI0ZGNjQ2NDtcdFxuICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICBmb250LXNpemU6IDEycHg7XHRcbiAgZm9udC13ZWlnaHQ6IDUwMDtcdFxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHRcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHRcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uTG9nb3V0QnRue1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1x0XG4gIGhlaWdodDogNDhweDtcdFxuICB3aWR0aDogMTMxcHg7XHRcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcdFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1x0XG4gIGJhY2tncm91bmQtY29sb3I6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNjcyZjYgLCAjNTJjYWY5KTtcbiAgY29sb3I6ICNGRkZGRkY7XHRcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgZm9udC1zaXplOiAxNXB4O1x0XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHRcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1x0XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAvLyBib3gtc2hhZG93OiAwIDRweCA4cHggMnB4ICNGRkYzRTAsIDAgMnB4IDJweCAwICNGRkYzRTA7XG59XG4uTG9naW5DbGFzc3tcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY2VudGVySW1nIHtcbiAgLy8gYm9yZGVyIDogMXB4IHNvbGlkICNiZGFmYWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTQwcHg7XG4gIGNvbG9yOmdyZXk7XG4gIGhlaWdodDogMTIwcHg7XG4gIHRvcDoyNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gbWFyZ2luLXRvcDoyMCU7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmMDMyZjA7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm91dGVyV3JhcHBlcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5pbm5lcldyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuXG4uYmx1ZUdyYWRpZW50e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMzNjcyZjY7IFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNjcyZjYgLCAjNTJjYWY5KTsgXG59XG5cbi5zZWNvbmRIYWxmIHtcbiAgXG59XG5cbi5sb2dpbkN1cnZlT3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDE1JSAxNSUgMCAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkZGO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAoMTV2aCAvIDIpKTtcbn1cblxuLmxvZ2luT3ZlcmxheXtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRvcDogLTM4cHg7XG59XG5cblxuLmxvZ2luT3ZlcmxheU5ld3tcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggI0NDQztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMzI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdG9wOiAtMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5cbi5sb2dvIHtcbi8vIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2FwcGxvZ28ucG5nJykgY2VudGVyO1xuLy8gYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xud2lkdGg6IDE1MHB4O1xuaGVpZ2h0OiAxNTBweDtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbnRvcDogMTUlO1xubWFyZ2luOiAwIGF1dG87XG5ib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5GdWxsV2lkdGh7XG53aWR0aDogMTAwJTtcbn1cblxuLk1haW5Mb2dpbkNsYXNze1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjM1YjI4LCNmZTg4NjAsI2ZlYWU5Myk7XG4vLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbmF0dXJlLmpwZWdcIik7XG4vLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbG9naW5iZy5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuaGVpZ2h0OjEwMCU7XG5cbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI2YzNWIyOCwgI2Y3OTA2ZSwjZmVhZTkzKTtcbi8vIGJhY2tncm91bmQtY29sb3I6ICNmNzkwNmU7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xucG9zaXRpb246IHJlbGF0aXZlO1xub3ZlcmZsb3cteTogc2Nyb2xsO1xud2lkdGg6MTAwJTtcbn1cblxuLnNvY2lhbC1sb2dpbi1idXR0b257XG4gIHdpZHRoOjgwJTtcbn1cblxuLnNvY2lhbGxvZ2luLWNvbnRhaW5lcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206MHB4O1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MzAlO1xuLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL0JHLnBuZ1wiKTtcbi8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmNzkwNmUsI2ZlYWU5Myk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbn1cblxuLmxvZ2luQnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiNWRhO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOjgwJTtcbiAgcGFkZGluZzo0cHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBmb250LXNpemU6MTRweDtcbn1cblxuLmxvZ2luRmJCdXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTU2OTY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6MTAwJTtcbiAgLy8gbWFyZ2luLXRvcDoyNXB4O1xuICBmb250LXNpemU6MTJweDtcbiAgcGFkZGluZzo0cHg7XG4gIGJvcmRlci1yYWRpdXM6MjVweDtcbn1cblxuLmxvZ2luR21haWxCdXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYTRkNDU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6MTAwJTtcbiAgLy8gbWFyZ2luLXRvcDoyNXB4O1xuICBmb250LXNpemU6MTJweDtcbiAgcGFkZGluZzo0cHg7XG4gIGJvcmRlci1yYWRpdXM6MjVweDtcbn1cblxuLnN1Yi10ZXh0LWNzc3tcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZToxMHB4O1xudGV4dC1hbGlnbjoganVzdGlmeTtcbndpZHRoOjc1JTtcbnRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cbi50ZXh0LXNpemUtZi1jc3N7XG4gIGZvbnQtc2l6ZToyMnB4O1xuICBmb250LXdlaWdodDpib2xkO1xufVxuXG4udGV4dC1zaXplLUctY3Nze1xuICBmb250LXNpemU6MjBweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLmRlc2MtdGV4dHtcbiAgY29sb3I6Z3JheTsgXG4gIGZvbnQtc2l6ZToxMnB4O1xuICB3aWR0aDo4MCU7XG4gICBwYWRkaW5nOjhweDtcbiBtYXJnaW4tdG9wOjMwcHg7XG59XG4uZGVzYy10ZXh0LXNpZ25pbntcbiAgY29sb3I6Z3JheTsgXG4gIGZvbnQtc2l6ZToxMHB4O1xuICB3aWR0aDo5NSU7XG4gICBwYWRkaW5nOjhweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206NXB4O1xuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG59XG5cbi5hcHAtdGl0bGUtY3Nze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBib3R0b206MjBweDtcbiAgIHdpZHRoOjEwMCU7XG4gICBmb250LXNpemU6MS42ZW07XG4gICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OjQ3MDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuLmNvbG9yLWNoYW5nZXtcbiAgY29sb3I6I2YzNWIyODtcbn1cbi8vIGlvbi1jYXJke1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuLy8gfVxuXG4vLyA6Om5nLWRlZXAge1xuXG4vLyAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuLy8gICB9XG4vLyB9XG5cbi5zb2NpYWxNZWRpYUljb257XG4gIHdpZHRoOjMwcHg7XG4gIGhlaWdodDozMHB4O1xufSIsIi5Mb2dpbkZvcm1DbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uRnVsbFdpZHRoIHtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLkxvZ2luRXJyb3Ige1xuICBjb2xvcjogI0ZGNjQ2NDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5Mb2dvdXRCdG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMzFweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2LCAjNTJjYWY5KTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5Mb2dpbkNsYXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY2VudGVySW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxNDBweDtcbiAgY29sb3I6IGdyZXk7XG4gIGhlaWdodDogMTIwcHg7XG4gIHRvcDogMjUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdXRlcldyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmlubmVyV3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG59XG5cbi5ibHVlR3JhZGllbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY3MmY2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNjcyZjYsICM1MmNhZjkpO1xufVxuXG4ubG9naW5DdXJ2ZU92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBib3JkZXItcmFkaXVzOiAxNSUgMTUlIDAgMDtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gKDE1dmggLyAyKSk7XG59XG5cbi5sb2dpbk92ZXJsYXkge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgdG9wOiAtMzhweDtcbn1cblxuLmxvZ2luT3ZlcmxheU5ldyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4ICNDQ0M7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDMyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRvcDogLTEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uRnVsbFdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5NYWluTG9naW5DbGFzcyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2YzNWIyOCwgI2Y3OTA2ZSwgI2ZlYWU5Myk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNvY2lhbC1sb2dpbi1idXR0b24ge1xuICB3aWR0aDogODAlO1xufVxuXG4uc29jaWFsbG9naW4tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG59XG5cbi5sb2dpbkJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmI1ZGE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxvZ2luRmJCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk1Njk2O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmxvZ2luR21haWxCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E0ZDQ1O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnN1Yi10ZXh0LWNzcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogNzUlO1xuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG59XG5cbi50ZXh0LXNpemUtZi1jc3Mge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1zaXplLUctY3NzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRlc2MtdGV4dCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmRlc2MtdGV4dC1zaWduaW4ge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1cHg7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cblxuLmFwcC10aXRsZS1jc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDcwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb2xvci1jaGFuZ2Uge1xuICBjb2xvcjogI2YzNWIyODtcbn1cblxuLnNvY2lhbE1lZGlhSWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59Il19 */");

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
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");










var LoginPage = /** @class */ (function () {
    function LoginPage(router, toast, menuController, loader, facebook, googlePlus, nativeStorage, loadingController, platform, routerOutlet, apiCall) {
        var _this = this;
        this.router = router;
        this.toast = toast;
        this.menuController = menuController;
        this.loader = loader;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.nativeStorage = nativeStorage;
        this.loadingController = loadingController;
        this.platform = platform;
        this.routerOutlet = routerOutlet;
        this.apiCall = apiCall;
        this.hide = true;
        this.loginModel = {};
        this.gmailId = "";
        this.fbId = "";
        this.isLoggedIn = false;
        this.imageUrl = "";
        this.users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
        this.platform = platform;
        this.platform.backButton.subscribeWithPriority(-1, function () {
            if (_this.routerOutlet.canGoBack()) {
                navigator['app'].exitApp();
            }
        });
        this.menuController.enable(false);
        // let initParams: InitParams = {
        //   appId: '293072848530685',
        //   xfbml: true,
        //   version: 'v2.8'
        // };
        // fb.init(initParams);
        facebook.getLoginStatus()
            .then(function (res) {
            console.log(res.status);
            if (res.status === 'connect') {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.fbLogin = function () {
        var _this = this;
        // this.fbLogout();
        this.facebook.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === 'connected') {
                _this.isLoggedIn = true;
                localStorage.setItem("loginType", "fb");
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.facebook.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
            .then(function (res) {
            // this.router.navigate(['/home']);
            _this.users = res;
            _this.imageUrl = _this.users.picture.data.url;
            console.log("show fb url:" + _this.imageUrl);
            _this.gmailId = "";
            _this.fbId = res.id;
            _this.userName = res.name;
            _this.userEmail = res.email;
            _this.login();
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    LoginPage.prototype.fbLogout = function () {
        var _this = this;
        this.facebook.logout()
            .then(function (res) { return _this.isLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        // this.navCtrl.popToRoot();
        console.log("Looks like I’m about to leave :11");
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var send_date = {};
        // send_date['name'] = this.userName;
        // // send_date['mobile'] = this.loginModel.mobile;
        // send_date['userRole'] = 0;
        // if(this.imageUrl == "" || this.imageUrl == null){
        // }else{
        //   send_date['image'] = this.imageUrl;
        // }
        // send_date['email'] = this.userEmail;
        // if(this.gmailId != ""){
        //   send_date['gmailId'] = this.gmailId;
        // }
        // if(this.fbId != ""){
        //   send_date['facebookId'] = this.fbId;
        // }
        send_date['name'] = "Akshay Madake";
        send_date['userRole'] = 0;
        send_date['image'] = "http://d3lgrseqpnv6xt.cloudfront.net/1593068644973.jpg";
        send_date['email'] = "akshaymadake1@gmail.com";
        send_date['gmailId'] = "108308451660503119865";
        // send_date['name'] = "Asmita Belhekar";
        // send_date['userRole'] = 0;
        // send_date['image'] = "https://lh3.googleusercontent.com/a-/AOh14GgUQz70Tw0LjfLiFy0I7C-6RmtV2mdG5j9PEIX9Ww";
        // send_date['email'] = "asmita.belhekar@gmail.com";
        // send_date['gmailId'] = "110231677548942846776";
        send_date['fcmToken'] = localStorage.getItem("fcmToken");
        console.log("my token", "" + JSON.stringify(send_date));
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "users";
        this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
            if (MyResponse['result']['isActive'] == 1) {
                localStorage.setItem("userId", MyResponse['result']['id']);
                // localStorage.setItem("loginType","email");
                localStorage.setItem("loginStatus", 'yes');
                localStorage.setItem("authToken", MyResponse['result']['jwt-token']);
                if (MyResponse['result']['image'] == null || MyResponse['result']['image'] == "" || MyResponse['result']['image'] == undefined) {
                    localStorage.setItem("profilePic", MyResponse['result']['image']);
                }
                else {
                    localStorage.setItem("profilePic", MyResponse['result']['image']);
                }
                localStorage.setItem("userRole", MyResponse['result']['userRole']);
                localStorage.setItem("userName", MyResponse['result']['name']);
                localStorage.setItem("userCreated", MyResponse['result']['created']);
                _this.router.navigate(['/home', { categoryId: "5" }], { replaceUrl: true });
                // this.router.navigateByUrl('/profile', { replaceUrl: true }) 
                console.log("show login data:" + JSON.stringify(MyResponse['result']));
            }
            else {
                _this.presentToast("Please try again");
            }
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
    LoginPage.prototype.loginWithGmail = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            _this.loginDetails = res;
            console.log("show gmail login detail:" + JSON.stringify(_this.loginDetails));
            // localStorage.setItem("profileImage",res.imageUrl);
            _this.gmailId = res.userId;
            _this.imageUrl = res.imageUrl;
            if (_this.imageUrl == null) {
                _this.imageUrl = "";
            }
            _this.fbId = "";
            _this.userName = res.displayName;
            _this.userEmail = res.email;
            localStorage.setItem("loginType", "gmail");
            _this.login();
        }, function (err) {
        });
    };
    LoginPage.prototype.logOut = function () {
        this.googlePlus.logout();
        alert("logged out");
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"] },
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
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map