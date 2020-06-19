(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"MainLoginClass\">\n  <div fxLayout=\"column\"  style=\"height:100%\">\n<div style=\"height:60%;width:100%;position: relative;\" >\n  <img src=\"./assets/loginbg.png\" style=\"width:100%; height:100%;\"/>\n<label fxLayoutAlign=\"center center\" class=\"app-title-css\">Holyhub</label>\n</div>\n\n<div class=\"sociallogin-container\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <label fxLayoutAlign=\"center center\" class=\"desc-text\">Sign in with Social Networks</label>\n\n<div  fxLayout=\"row\" style=\"width:90%;margin-top:15px\">\n\n\n<div fxFlex=\"48\" fxLayout=\"row\"  (click)=\"fbLogin()\" >\n  <button mat-raised-button class=\"loginFbButton\">\n    <span style=\"font-size:22px\">f</span> &nbsp;&nbsp;&nbsp;   FACEBOOK\n  </button>\n \n</div>\n\n<div fxFlex=\"4\"></div>\n\n\n<div fxFlex=\"48\" fxLayout=\"row\"  (click)=\"loginWithGmail()\">\n\n  <button mat-raised-button class=\"loginGmailButton\">\n    <span style=\"font-size:20px\">G</span> &nbsp;&nbsp;&nbsp;   GOOGLE\n  </button>\n \n</div>\n\n\n    \n\n</div>\n<label fxLayoutAlign=\"center center\" class=\"desc-text-signin\">By sign in you agree to the &nbsp;<span class=\"color-change\">Terms </span>&nbsp; and the &nbsp;<span class=\"color-change\"> Conditions </span></label>\n\n</div>\n  \n  </div>\n\n \n</div>\n\n\n  <!-- <button fxLayout=\"row\" fxFlex=\"100\"  mat-raised-button class=\"loginFbButton\" (click)=\"fbLogin()\"><label fxFlex=\"50\" fxLayoutAlign=\"start center\">f</label><label fxFlex=\"50\" fxLayoutAlign=\"center center\">LOGIN WITH FACEBOOK</label></button>\n  <button fxLayout=\"row\" mat-raised-button class=\"loginGmailButton\" (click)=\"loginWithGmail()\"><label fxLayoutAlign=\"start center\">G</label><label fxLayoutAlign=\"center center\">LOGIN WITH GMAIL</label></button> -->\n\n        <!-- <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n          <mat-form-field style=\"width:92%; margin-top:5%;margin-left:4%;color:black; margin-right:4%\"\n            appearance=\"outline\">\n            <mat-label style=\"color:gray\">Phone Number</mat-label>\n            <input matInput type=\"tel\" id=\"mobile\" class=\"form-control\" required minlength=\"10\" appearance=\"outline\"\n              maxlength=\"10\" [(ngModel)]=\"loginModel.mobile\" #mobile=\"ngModel\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger\">\n                  <div class=\"LoginError\" *ngIf=\"mobile.errors.required\">\n                    Please Enter Phone Number\n                  </div>\n                  <div class=\"LoginError\" *ngIf=\"mobile.errors.minlength\">\n                    Phone Number must be at least 10 digits long.\n                  </div>\n  \n  \n                </div>\n              </div>\n            </mat-error>\n          </mat-form-field>\n  \n          <mat-form-field style=\"width:92%;color:black ;margin-top:5px\" appearance=\"outline\">\n            <mat-label style=\"color:gray\">Password</mat-label>\n            <input matInput [type]=\"hide ? 'password' : 'text'\" id=\"password\" class=\"form-control\"\n              required [(ngModel)]=\"loginModel.password\" #password=\"ngModel\" style=\"color:black\"/>\n            <mat-icon matSuffix (click)=\"hide = !hide\" style=\"color:gray\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                  <div class=\"LoginError\" *ngIf=\"password.errors.required\">\n                    Please Enter Password\n                  </div>\n  \n  \n  \n                </div>\n              </div>\n            </mat-error>\n          </mat-form-field>\n          <div *ngIf=\"is_error\" class=\"LoginError\">\n            {{message}}\n          </div>\n        </div>\n          <button [disabled]=\"mobile.invalid || password.invalid\" mat-raised-button class=\"loginButton\" (click)=\"login(loginModel)\">LOGIN</button> -->\n  \n  ");

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
/* harmony default export */ __webpack_exports__["default"] = (".LoginFormClass {\n  width: 100%;\n}\n\n.FullWidth {\n  width: 96%;\n  margin-top: 20px;\n}\n\n.LoginError {\n  color: #FF6464;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  text-align: right;\n}\n\n.LogoutBtn {\n  box-sizing: border-box;\n  height: 48px;\n  width: 131px;\n  border-radius: 25px;\n  background-color: linear-gradient(to right, #3672f6, #52caf9);\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n  margin-bottom: 25px;\n}\n\n.LoginClass {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 40px;\n}\n\n.centerImg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 140px;\n  color: grey;\n  height: 120px;\n  top: 25%;\n  position: relative;\n}\n\n.outerWrapper {\n  width: 100%;\n  height: 100vh;\n}\n\n.innerWrapper {\n  width: 100%;\n  height: 50vh;\n}\n\n.blueGradient {\n  width: 100%;\n  height: 100%;\n  background-color: #3672f6;\n  background-image: linear-gradient(to right, #3672f6, #52caf9);\n}\n\n.loginCurveOverlay {\n  width: 100%;\n  height: 50vh;\n  border-radius: 15% 15% 0 0;\n  border: 2px solid #FFF;\n  background: #FFF;\n  position: absolute;\n  top: calc(50% - (15vh / 2));\n}\n\n.loginOverlay {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  margin: 0 auto;\n  border: 1px solid #FFF;\n  position: relative;\n  padding: 5px;\n  top: -38px;\n}\n\n.loginOverlayNew {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  box-shadow: 1px 1px 1px 1px #CCC;\n  margin: 0 auto;\n  height: 325px;\n  border: 1px solid #FFF;\n  border-radius: 5px;\n  top: -100px;\n  position: relative;\n  padding: 5px;\n}\n\n.logo {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  top: 15%;\n  margin: 0 auto;\n  border-radius: 100%;\n}\n\n.FullWidth {\n  width: 100%;\n}\n\n.MainLoginClass {\n  background-size: cover;\n  height: 100%;\n  background: linear-gradient(to bottom, #f35b28, #f7906e, #feae93);\n  background-repeat: no-repeat;\n  position: relative;\n  overflow-y: scroll;\n  width: 100%;\n}\n\n.social-login-button {\n  width: 80%;\n}\n\n.sociallogin-container {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  height: 30%;\n  background-color: white;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.loginButton {\n  background-color: #fbb5da;\n  color: white;\n  width: 80%;\n  padding: 4px;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\n.loginFbButton {\n  background-color: #395696;\n  color: white;\n  width: 100%;\n  font-size: 12px;\n  padding: 4px;\n  border-radius: 25px;\n}\n\n.loginGmailButton {\n  background-color: #ca4d45;\n  color: white;\n  width: 100%;\n  font-size: 12px;\n  padding: 4px;\n  border-radius: 25px;\n}\n\n.sub-text-css {\n  color: white;\n  font-size: 10px;\n  text-align: justify;\n  width: 75%;\n  text-justify: inter-word;\n}\n\n.text-size-f-css {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.text-size-G-css {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.desc-text {\n  color: gray;\n  font-size: 12px;\n  width: 80%;\n  padding: 8px;\n  margin-top: 30px;\n}\n\n.desc-text-signin {\n  color: gray;\n  font-size: 10px;\n  width: 95%;\n  padding: 8px;\n  position: fixed;\n  bottom: 10px;\n  text-justify: inter-word;\n}\n\n.app-title-css {\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n  font-size: 1.5em;\n  font-weight: 400;\n}\n\n.color-change {\n  color: #f35b28;\n}\n\n.socialMediaIcon {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZEQUFBO0FDRkY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNORjs7QURTQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDTkY7O0FEVUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDUEY7O0FEV0E7RUFHQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1ZBOztBRGVBO0VBQ0EsV0FBQTtBQ1pBOztBRGVBO0VBSUEsc0JBQUE7RUFDQSxZQUFBO0VBRUEsaUVBQUE7RUFFQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDakJBOztBRG9CQTtFQUNFLFVBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUdBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ25CRjs7QURzQkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ25CRjs7QURzQkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNGLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FDckJBOztBRHVCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0MsWUFBQTtFQUNGLGdCQUFBO0FDcEJEOztBRHNCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNDLFlBQUE7RUFDRCxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDbkJGOztBRHNCQTtFQUNFLGtCQUFBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNDLGdCQUFBO0FDbkJKOztBRHNCQTtFQUNFLGNBQUE7QUNuQkY7O0FEaUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUM5QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTG9naW5Gb3JtQ2xhc3N7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtYXJnaW46IDMwcHggMCAwIDA7XG59XG4uRnVsbFdpZHRoe1xuICB3aWR0aDo5NiU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uTG9naW5FcnJvcntcbiAgY29sb3I6ICNGRjY0NjQ7XHRcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgZm9udC1zaXplOiAxMnB4O1x0XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHRcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1x0XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1x0XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLkxvZ291dEJ0bntcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcdFxuICBoZWlnaHQ6IDQ4cHg7XHRcbiAgd2lkdGg6IDEzMXB4O1x0XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XHRcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcdFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2ICwgIzUyY2FmOSk7XG4gIGNvbG9yOiAjRkZGRkZGO1x0XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gIGZvbnQtc2l6ZTogMTVweDtcdFxuICBmb250LXdlaWdodDogNTAwO1x0XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcdFxuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgLy8gYm94LXNoYWRvdzogMCA0cHggOHB4IDJweCAjRkZGM0UwLCAwIDJweCAycHggMCAjRkZGM0UwO1xufVxuLkxvZ2luQ2xhc3N7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNlbnRlckltZyB7XG4gIC8vIGJvcmRlciA6IDFweCBzb2xpZCAjYmRhZmFmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDE0MHB4O1xuICBjb2xvcjpncmV5O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB0b3A6MjUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIG1hcmdpbi10b3A6MjAlO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAzMmYwO1xuICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5vdXRlcldyYXBwZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uaW5uZXJXcmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTB2aDtcbn1cblxuLmJsdWVHcmFkaWVudHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjojMzY3MmY2OyBcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2ICwgIzUyY2FmOSk7IFxufVxuXG4uc2Vjb25kSGFsZiB7XG4gIFxufVxuXG4ubG9naW5DdXJ2ZU92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBib3JkZXItcmFkaXVzOiAxNSUgMTUlIDAgMDtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gKDE1dmggLyAyKSk7XG59XG5cbi5sb2dpbk92ZXJsYXl7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4O1xuICB0b3A6IC0zOHB4O1xufVxuXG5cbi5sb2dpbk92ZXJsYXlOZXd7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4ICNDQ0M7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDMyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRvcDogLTEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuXG4ubG9nbyB7XG4vLyBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9hcHBsb2dvLnBuZycpIGNlbnRlcjtcbi8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbndpZHRoOiAxNTBweDtcbmhlaWdodDogMTUwcHg7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG50b3A6IDE1JTtcbm1hcmdpbjogMCBhdXRvO1xuYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uRnVsbFdpZHRoe1xud2lkdGg6IDEwMCU7XG59XG5cbi5NYWluTG9naW5DbGFzc3tcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2YzNWIyOCwjZmU4ODYwLCNmZWFlOTMpO1xuLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL25hdHVyZS5qcGVnXCIpO1xuLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xvZ2luYmcucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbmhlaWdodDoxMDAlO1xuXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCNmMzViMjgsICNmNzkwNmUsI2ZlYWU5Myk7XG4vLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc5MDZlO1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbm92ZXJmbG93LXk6IHNjcm9sbDtcbndpZHRoOjEwMCU7XG59XG5cbi5zb2NpYWwtbG9naW4tYnV0dG9ue1xuICB3aWR0aDo4MCU7XG59XG5cbi5zb2NpYWxsb2dpbi1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOjBweDtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjMwJTtcbi8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9CRy5wbmdcIik7XG4vLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjc5MDZlLCNmZWFlOTMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG59XG5cbi5sb2dpbkJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYjVkYTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDo4MCU7XG4gIHBhZGRpbmc6NHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgZm9udC1zaXplOjE0cHg7XG59XG5cbi5sb2dpbkZiQnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk1Njk2O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOjEwMCU7XG4gIC8vIG1hcmdpbi10b3A6MjVweDtcbiAgZm9udC1zaXplOjEycHg7XG4gIHBhZGRpbmc6NHB4O1xuICBib3JkZXItcmFkaXVzOjI1cHg7XG59XG5cbi5sb2dpbkdtYWlsQnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E0ZDQ1O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOjEwMCU7XG4gIC8vIG1hcmdpbi10b3A6MjVweDtcbiAgZm9udC1zaXplOjEycHg7XG4gIHBhZGRpbmc6NHB4O1xuICBib3JkZXItcmFkaXVzOjI1cHg7XG59XG5cbi5zdWItdGV4dC1jc3N7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXNpemU6MTBweDtcbnRleHQtYWxpZ246IGp1c3RpZnk7XG53aWR0aDo3NSU7XG50ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG59XG4udGV4dC1zaXplLWYtY3Nze1xuICBmb250LXNpemU6MjJweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLnRleHQtc2l6ZS1HLWNzc3tcbiAgZm9udC1zaXplOjIwcHg7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5cbi5kZXNjLXRleHR7XG4gIGNvbG9yOmdyYXk7IFxuICBmb250LXNpemU6MTJweDtcbiAgd2lkdGg6ODAlO1xuICAgcGFkZGluZzo4cHg7XG4gbWFyZ2luLXRvcDozMHB4O1xufVxuLmRlc2MtdGV4dC1zaWduaW57XG4gIGNvbG9yOmdyYXk7IFxuICBmb250LXNpemU6MTBweDtcbiAgd2lkdGg6OTUlO1xuICAgcGFkZGluZzo4cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOjEwcHg7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cblxuLmFwcC10aXRsZS1jc3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIGJvdHRvbToyMHB4O1xuICAgd2lkdGg6MTAwJTtcbiAgIGZvbnQtc2l6ZToxLjVlbTtcbiAgICBmb250LXdlaWdodDo0MDA7XG59XG5cbi5jb2xvci1jaGFuZ2V7XG4gIGNvbG9yOiNmMzViMjg7XG59XG4vLyBpb24tY2FyZHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbi8vIH1cblxuLy8gOjpuZy1kZWVwIHtcblxuLy8gICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIFxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbi8vICAgfVxuLy8gfVxuXG4uc29jaWFsTWVkaWFJY29ue1xuICB3aWR0aDozMHB4O1xuICBoZWlnaHQ6MzBweDtcbn0iLCIuTG9naW5Gb3JtQ2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkZ1bGxXaWR0aCB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5Mb2dpbkVycm9yIHtcbiAgY29sb3I6ICNGRjY0NjQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uTG9nb3V0QnRuIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTMxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2NzJmNiwgIzUyY2FmOSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uTG9naW5DbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNlbnRlckltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTQwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB0b3A6IDI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3V0ZXJXcmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5pbm5lcldyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuXG4uYmx1ZUdyYWRpZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NzJmNjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2LCAjNTJjYWY5KTtcbn1cblxuLmxvZ2luQ3VydmVPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTUlIDE1JSAwIDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtICgxNXZoIC8gMikpO1xufVxuXG4ubG9naW5PdmVybGF5IHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRvcDogLTM4cHg7XG59XG5cbi5sb2dpbk92ZXJsYXlOZXcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjQ0NDO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAzMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0b3A6IC0xMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLkZ1bGxXaWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uTWFpbkxvZ2luQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmMzViMjgsICNmNzkwNmUsICNmZWFlOTMpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zb2NpYWwtbG9naW4tYnV0dG9uIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLnNvY2lhbGxvZ2luLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xufVxuXG4ubG9naW5CdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiNWRhO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5sb2dpbkZiQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NTY5NjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5sb2dpbkdtYWlsQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhNGQ0NTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5zdWItdGV4dC1jc3Mge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDc1JTtcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xufVxuXG4udGV4dC1zaXplLWYtY3NzIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtc2l6ZS1HLWNzcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXNjLXRleHQge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5kZXNjLXRleHQtc2lnbmluIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogOHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xufVxuXG4uYXBwLXRpdGxlLWNzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbG9yLWNoYW5nZSB7XG4gIGNvbG9yOiAjZjM1YjI4O1xufVxuXG4uc29jaWFsTWVkaWFJY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn0iXX0= */");

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
    function LoginPage(router, toast, menuController, loader, facebook, googlePlus, nativeStorage, loadingController, apiCall) {
        var _this = this;
        this.router = router;
        this.toast = toast;
        this.menuController = menuController;
        this.loader = loader;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.nativeStorage = nativeStorage;
        this.loadingController = loadingController;
        this.apiCall = apiCall;
        this.hide = true;
        this.loginModel = {};
        this.gmailId = "";
        this.fbId = "";
        this.isLoggedIn = false;
        this.imageUrl = "";
        this.users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
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
        this.fbLogout();
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
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var send_date = {};
        send_date['name'] = this.userName;
        // send_date['mobile'] = this.loginModel.mobile;
        send_date['userRole'] = 0;
        if (this.imageUrl == "" || this.imageUrl == null) {
        }
        else {
            send_date['image'] = this.imageUrl;
        }
        send_date['email'] = this.userEmail;
        if (this.gmailId != "") {
            send_date['gmailId'] = this.gmailId;
        }
        if (this.fbId != "") {
            send_date['facebookId'] = this.fbId;
        }
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
                _this.router.navigate(['/home', { categoryId: "5" }]);
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
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/service/apiservice/api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/apiservice/api.service.ts ***!
  \***************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    //Image Upload Post
    ApiService.prototype.callPostApiForImage = function (url, data) {
        var formData = new FormData();
        formData.append('image', data);
        // formData.append('isSaveToLocal', 'false');
        // console.log("url", url,data,options);
        return this.http.post(url, formData);
    };
    //POST
    ApiService.prototype.post = function (url, data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(url);
        return this.http.post(url, data, httpOptions);
    };
    //POST
    ApiService.prototype.postAuth = function (url, data) {
        var auth_token = localStorage.getItem("authToken");
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': auth_token
            })
        };
        console.log(url);
        return this.http.post(url, data, httpOptions);
    };
    //GET
    ApiService.prototype.get = function (url) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(url);
        return this.http.get(url, httpOptions);
    };
    ApiService.prototype.getAd = function (url) {
        var auth_token = localStorage.getItem("authToken");
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': auth_token
            })
        };
        console.log(url);
        return this.http.get(url, httpOptions);
    };
    // public getCode(url,token) {
    // console.log("show token::"+token);
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //       'Authorization':'Token' + " " +"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0"
    //     })
    //   }
    //   console.log(url);
    //   return this.http.get(url,httpOptions);
    // }
    ApiService.prototype.delete = function (url) {
        console.log(url);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.delete(url);
    };
    ApiService.prototype.deleteAuth = function (url) {
        var auth_token = localStorage.getItem("authToken");
        console.log();
        console.log(url);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': auth_token
            })
        };
        return this.http.delete(url, httpOptions);
    };
    //PUT
    ApiService.prototype.putAuth = function (url, data) {
        var auth_token = localStorage.getItem("authToken");
        console.log(url);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': auth_token
            })
        };
        return this.http.put(url, data, httpOptions);
    };
    //PUT
    ApiService.prototype.put = function (url, data) {
        console.log(url);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put(url, data, httpOptions);
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map