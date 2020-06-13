(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"MainLoginClass\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"margin-top:100px;\">\n\n    <img src=\"../../../assets/holyhublogooo.png\" style=\"width:220px; height:120px;\"/>\n    <h3 align=\"center\" style=\"color:white;margin-top:50px;\">Welcome to Holyhub</h3>\n    <!-- <h4 align=\"center\" style=\"color:white;margin-top:50px;\">One solution, Infinite Posibilities</h4> -->\n    <!-- <label class=\"sub-text-css\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis ipsam veritatis adipisci vitae accusamus sint molestiae quam eius error quae, sequi dolore quasi inventore officia consequuntur sapiente cum asperiores?</label> -->\n  </div>\n<div class=\"sociallogin-container\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <label fxLayoutAlign=\"center center\" class=\"desc-text\">Sign in with Social Networks</label>\n\n<div  fxLayout=\"row\" style=\"width:90%;margin-top:15px\">\n\n\n<div fxFlex=\"48\" fxLayout=\"row\"  (click)=\"fbLogin()\" >\n  <button mat-raised-button class=\"loginFbButton\">\n    <span style=\"font-size:22px\">f</span> &nbsp;&nbsp;&nbsp;   FACEBOOK\n  </button>\n  <!-- <div fxFlex=\"25\" fxLayoutAlign=\"end center\" style=\"padding:10px;\" >\n    <label class=\"text-size-G-css\">f</label>\n  </div>\n  <div fxFlex=\"2\">\n   \n  </div>\n  <div fxFlex=\"73\" fxLayoutAlign=\"start center\" style=\"padding:10px;\">\n    <label>FACEBOOK</label>\n  </div> -->\n</div>\n\n<div fxFlex=\"4\"></div>\n\n\n<div fxFlex=\"48\" fxLayout=\"row\"  (click)=\"loginWithGmail()\">\n\n  <button mat-raised-button class=\"loginGmailButton\">\n    <span style=\"font-size:20px\">G</span> &nbsp;&nbsp;&nbsp;   GOOGLE\n  </button>\n  <!-- <div fxFlex=\"25\" fxLayoutAlign=\"end center\" style=\"padding:10px;\" >\n    <label class=\"text-size-G-css\">G</label>\n  </div>\n  <div fxFlex=\"2\">\n   \n  </div>\n  <div fxFlex=\"73\" fxLayoutAlign=\"start center\" style=\"padding:10px;\">\n    <label>GOOGLE</label>\n  </div> -->\n</div>\n\n\n    \n\n</div>\n<label fxLayoutAlign=\"center center\" class=\"desc-text-signin\">By sign in you agree to the &nbsp;<span class=\"color-change\">Terms </span>&nbsp; and the &nbsp;<span class=\"color-change\"> Conditions </span></label>\n\n</div>\n \n</div>\n\n\n  <!-- <button fxLayout=\"row\" fxFlex=\"100\"  mat-raised-button class=\"loginFbButton\" (click)=\"fbLogin()\"><label fxFlex=\"50\" fxLayoutAlign=\"start center\">f</label><label fxFlex=\"50\" fxLayoutAlign=\"center center\">LOGIN WITH FACEBOOK</label></button>\n  <button fxLayout=\"row\" mat-raised-button class=\"loginGmailButton\" (click)=\"loginWithGmail()\"><label fxLayoutAlign=\"start center\">G</label><label fxLayoutAlign=\"center center\">LOGIN WITH GMAIL</label></button> -->\n\n        <!-- <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n          <mat-form-field style=\"width:92%; margin-top:5%;margin-left:4%;color:black; margin-right:4%\"\n            appearance=\"outline\">\n            <mat-label style=\"color:gray\">Phone Number</mat-label>\n            <input matInput type=\"tel\" id=\"mobile\" class=\"form-control\" required minlength=\"10\" appearance=\"outline\"\n              maxlength=\"10\" [(ngModel)]=\"loginModel.mobile\" #mobile=\"ngModel\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger\">\n                  <div class=\"LoginError\" *ngIf=\"mobile.errors.required\">\n                    Please Enter Phone Number\n                  </div>\n                  <div class=\"LoginError\" *ngIf=\"mobile.errors.minlength\">\n                    Phone Number must be at least 10 digits long.\n                  </div>\n  \n  \n                </div>\n              </div>\n            </mat-error>\n          </mat-form-field>\n  \n          <mat-form-field style=\"width:92%;color:black ;margin-top:5px\" appearance=\"outline\">\n            <mat-label style=\"color:gray\">Password</mat-label>\n            <input matInput [type]=\"hide ? 'password' : 'text'\" id=\"password\" class=\"form-control\"\n              required [(ngModel)]=\"loginModel.password\" #password=\"ngModel\" style=\"color:black\"/>\n            <mat-icon matSuffix (click)=\"hide = !hide\" style=\"color:gray\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                  <div class=\"LoginError\" *ngIf=\"password.errors.required\">\n                    Please Enter Password\n                  </div>\n  \n  \n  \n                </div>\n              </div>\n            </mat-error>\n          </mat-form-field>\n          <div *ngIf=\"is_error\" class=\"LoginError\">\n            {{message}}\n          </div>\n        </div>\n          <button [disabled]=\"mobile.invalid || password.invalid\" mat-raised-button class=\"loginButton\" (click)=\"login(loginModel)\">LOGIN</button> -->\n  \n  ");

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
/* harmony default export */ __webpack_exports__["default"] = (".LoginFormClass {\n  width: 100%;\n}\n\n.FullWidth {\n  width: 96%;\n  margin-top: 20px;\n}\n\n.LoginError {\n  color: #FF6464;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  text-align: right;\n}\n\n.LogoutBtn {\n  box-sizing: border-box;\n  height: 48px;\n  width: 131px;\n  border-radius: 25px;\n  background-color: linear-gradient(to right, #3672f6, #52caf9);\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n  margin-bottom: 25px;\n}\n\n.LoginClass {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 40px;\n}\n\n.centerImg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 140px;\n  color: grey;\n  height: 120px;\n  top: 25%;\n  position: relative;\n}\n\n.outerWrapper {\n  width: 100%;\n  height: 100vh;\n}\n\n.innerWrapper {\n  width: 100%;\n  height: 50vh;\n}\n\n.blueGradient {\n  width: 100%;\n  height: 100%;\n  background-color: #3672f6;\n  background-image: linear-gradient(to right, #3672f6, #52caf9);\n}\n\n.loginCurveOverlay {\n  width: 100%;\n  height: 50vh;\n  border-radius: 15% 15% 0 0;\n  border: 2px solid #FFF;\n  background: #FFF;\n  position: absolute;\n  top: calc(50% - (15vh / 2));\n}\n\n.loginOverlay {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  margin: 0 auto;\n  border: 1px solid #FFF;\n  position: relative;\n  padding: 5px;\n  top: -38px;\n}\n\n.loginOverlayNew {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  box-shadow: 1px 1px 1px 1px #CCC;\n  margin: 0 auto;\n  height: 325px;\n  border: 1px solid #FFF;\n  border-radius: 5px;\n  top: -100px;\n  position: relative;\n  padding: 5px;\n}\n\n.logo {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  top: 15%;\n  margin: 0 auto;\n  border-radius: 100%;\n}\n\n.FullWidth {\n  width: 100%;\n}\n\n.MainLoginClass {\n  background: url('nature.jpeg') no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  background-repeat: no-repeat;\n  position: relative;\n  overflow-y: scroll;\n  width: 100%;\n}\n\n.social-login-button {\n  width: 80%;\n}\n\n.sociallogin-container {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 30%;\n  background-color: white;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.loginButton {\n  background-color: #fbb5da;\n  color: white;\n  width: 80%;\n  padding: 4px;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\n.loginFbButton {\n  background-color: #395696;\n  color: white;\n  width: 100%;\n  font-size: 12px;\n  padding: 4px;\n  border-radius: 25px;\n}\n\n.loginGmailButton {\n  background-color: #ca4d45;\n  color: white;\n  width: 100%;\n  font-size: 12px;\n  padding: 4px;\n  border-radius: 25px;\n}\n\n.sub-text-css {\n  color: white;\n  font-size: 10px;\n  text-align: justify;\n  width: 75%;\n  text-justify: inter-word;\n}\n\n.text-size-f-css {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.text-size-G-css {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.desc-text {\n  color: gray;\n  font-size: 12px;\n  width: 80%;\n  padding: 8px;\n  margin-top: 30px;\n}\n\n.desc-text-signin {\n  color: gray;\n  font-size: 10px;\n  width: 95%;\n  padding: 8px;\n  position: fixed;\n  bottom: 5px;\n  text-justify: inter-word;\n}\n\n.color-change {\n  color: #f35b28;\n}\n\n.socialMediaIcon {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZEQUFBO0FDRkY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNORjs7QURTQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDTkY7O0FEVUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDUEY7O0FEV0E7RUFHQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1ZBOztBRGVBO0VBQ0EsV0FBQTtBQ1pBOztBRGVBO0VBR0EsNERBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDZEE7O0FEaUJBO0VBQ0UsVUFBQTtBQ2RGOztBRGlCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBR0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDaEJGOztBRG1CQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDaEJGOztBRG1CQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDakJGOztBRG9CQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDbEJGOztBRHFCQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0YsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNsQkE7O0FEb0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDakJGOztBRG9CQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2pCRjs7QURvQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQyxZQUFBO0VBQ0YsZ0JBQUE7QUNqQkQ7O0FEbUJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0MsWUFBQTtFQUNELGVBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsY0FBQTtBQ2hCRjs7QUQ4QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzNCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Mb2dpbkZvcm1DbGFzc3tcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1hcmdpbjogMzBweCAwIDAgMDtcbn1cbi5GdWxsV2lkdGh7XG4gIHdpZHRoOjk2JTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5Mb2dpbkVycm9ye1xuICBjb2xvcjogI0ZGNjQ2NDtcdFxuICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICBmb250LXNpemU6IDEycHg7XHRcbiAgZm9udC13ZWlnaHQ6IDUwMDtcdFxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHRcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHRcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uTG9nb3V0QnRue1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1x0XG4gIGhlaWdodDogNDhweDtcdFxuICB3aWR0aDogMTMxcHg7XHRcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcdFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1x0XG4gIGJhY2tncm91bmQtY29sb3I6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNjcyZjYgLCAjNTJjYWY5KTtcbiAgY29sb3I6ICNGRkZGRkY7XHRcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgZm9udC1zaXplOiAxNXB4O1x0XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHRcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1x0XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAvLyBib3gtc2hhZG93OiAwIDRweCA4cHggMnB4ICNGRkYzRTAsIDAgMnB4IDJweCAwICNGRkYzRTA7XG59XG4uTG9naW5DbGFzc3tcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY2VudGVySW1nIHtcbiAgLy8gYm9yZGVyIDogMXB4IHNvbGlkICNiZGFmYWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTQwcHg7XG4gIGNvbG9yOmdyZXk7XG4gIGhlaWdodDogMTIwcHg7XG4gIHRvcDoyNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gbWFyZ2luLXRvcDoyMCU7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmMDMyZjA7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm91dGVyV3JhcHBlcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5pbm5lcldyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuXG4uYmx1ZUdyYWRpZW50e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMzNjcyZjY7IFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNjcyZjYgLCAjNTJjYWY5KTsgXG59XG5cbi5zZWNvbmRIYWxmIHtcbiAgXG59XG5cbi5sb2dpbkN1cnZlT3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDE1JSAxNSUgMCAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkZGO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAoMTV2aCAvIDIpKTtcbn1cblxuLmxvZ2luT3ZlcmxheXtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRvcDogLTM4cHg7XG59XG5cblxuLmxvZ2luT3ZlcmxheU5ld3tcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggI0NDQztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMzI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdG9wOiAtMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5cbi5sb2dvIHtcbi8vIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2FwcGxvZ28ucG5nJykgY2VudGVyO1xuLy8gYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xud2lkdGg6IDE1MHB4O1xuaGVpZ2h0OiAxNTBweDtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbnRvcDogMTUlO1xubWFyZ2luOiAwIGF1dG87XG5ib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5GdWxsV2lkdGh7XG53aWR0aDogMTAwJTtcbn1cblxuLk1haW5Mb2dpbkNsYXNze1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjM1YjI4LCNmZTg4NjAsI2ZlYWU5Myk7XG4vLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbmF0dXJlLmpwZWdcIik7XG5iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbmF0dXJlLmpwZWdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuaGVpZ2h0OjEwMCU7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xucG9zaXRpb246IHJlbGF0aXZlO1xub3ZlcmZsb3cteTogc2Nyb2xsO1xud2lkdGg6MTAwJTtcbn1cblxuLnNvY2lhbC1sb2dpbi1idXR0b257XG4gIHdpZHRoOjgwJTtcbn1cblxuLnNvY2lhbGxvZ2luLWNvbnRhaW5lcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206MHB4O1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MzAlO1xuLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL0JHLnBuZ1wiKTtcbi8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmNzkwNmUsI2ZlYWU5Myk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbn1cblxuLmxvZ2luQnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiNWRhO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOjgwJTtcbiAgcGFkZGluZzo0cHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBmb250LXNpemU6MTRweDtcbn1cblxuLmxvZ2luRmJCdXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTU2OTY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6MTAwJTtcbiAgLy8gbWFyZ2luLXRvcDoyNXB4O1xuICBmb250LXNpemU6MTJweDtcbiAgcGFkZGluZzo0cHg7XG4gIGJvcmRlci1yYWRpdXM6MjVweDtcbn1cblxuLmxvZ2luR21haWxCdXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYTRkNDU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6MTAwJTtcbiAgLy8gbWFyZ2luLXRvcDoyNXB4O1xuICBmb250LXNpemU6MTJweDtcbiAgcGFkZGluZzo0cHg7XG4gIGJvcmRlci1yYWRpdXM6MjVweDtcbn1cblxuLnN1Yi10ZXh0LWNzc3tcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZToxMHB4O1xudGV4dC1hbGlnbjoganVzdGlmeTtcbndpZHRoOjc1JTtcbnRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cbi50ZXh0LXNpemUtZi1jc3N7XG4gIGZvbnQtc2l6ZToyMnB4O1xuICBmb250LXdlaWdodDpib2xkO1xufVxuXG4udGV4dC1zaXplLUctY3Nze1xuICBmb250LXNpemU6MjBweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLmRlc2MtdGV4dHtcbiAgY29sb3I6Z3JheTsgXG4gIGZvbnQtc2l6ZToxMnB4O1xuICB3aWR0aDo4MCU7XG4gICBwYWRkaW5nOjhweDtcbiBtYXJnaW4tdG9wOjMwcHg7XG59XG4uZGVzYy10ZXh0LXNpZ25pbntcbiAgY29sb3I6Z3JheTsgXG4gIGZvbnQtc2l6ZToxMHB4O1xuICB3aWR0aDo5NSU7XG4gICBwYWRkaW5nOjhweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206NXB4O1xuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG59XG5cbi5jb2xvci1jaGFuZ2V7XG4gIGNvbG9yOiNmMzViMjg7XG59XG4vLyBpb24tY2FyZHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbi8vIH1cblxuLy8gOjpuZy1kZWVwIHtcblxuLy8gICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIFxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbi8vICAgfVxuLy8gfVxuXG4uc29jaWFsTWVkaWFJY29ue1xuICB3aWR0aDozMHB4O1xuICBoZWlnaHQ6MzBweDtcbn0iLCIuTG9naW5Gb3JtQ2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkZ1bGxXaWR0aCB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5Mb2dpbkVycm9yIHtcbiAgY29sb3I6ICNGRjY0NjQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uTG9nb3V0QnRuIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTMxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2NzJmNiwgIzUyY2FmOSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uTG9naW5DbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNlbnRlckltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTQwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB0b3A6IDI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3V0ZXJXcmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5pbm5lcldyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuXG4uYmx1ZUdyYWRpZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NzJmNjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2LCAjNTJjYWY5KTtcbn1cblxuLmxvZ2luQ3VydmVPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTUlIDE1JSAwIDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtICgxNXZoIC8gMikpO1xufVxuXG4ubG9naW5PdmVybGF5IHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRvcDogLTM4cHg7XG59XG5cbi5sb2dpbk92ZXJsYXlOZXcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjQ0NDO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAzMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0b3A6IC0xMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLkZ1bGxXaWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uTWFpbkxvZ2luQ2xhc3Mge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbmF0dXJlLmpwZWdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc29jaWFsLWxvZ2luLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5zb2NpYWxsb2dpbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbn1cblxuLmxvZ2luQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYjVkYTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubG9naW5GYkJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTU2OTY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4ubG9naW5HbWFpbEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYTRkNDU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uc3ViLXRleHQtY3NzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiA3NSU7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cblxuLnRleHQtc2l6ZS1mLWNzcyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0LXNpemUtRy1jc3Mge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGVzYy10ZXh0IHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZGVzYy10ZXh0LXNpZ25pbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDhweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDVweDtcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xufVxuXG4uY29sb3ItY2hhbmdlIHtcbiAgY29sb3I6ICNmMzViMjg7XG59XG5cbi5zb2NpYWxNZWRpYUljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufSJdfQ== */");

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
        this.isLoggedIn = false;
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
            _this.router.navigate(['/home']);
            console.log("show details:" + res);
            _this.users = res;
            localStorage.setItem("userId", _this.users.id);
            localStorage.setItem("loginStatus", 'yes');
            // localStorage.setItem("userRole", this.users['result']['userRole']);
            localStorage.setItem("userName", _this.users.name);
            // localStorage.setItem("userCreated", this.users.);
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
    LoginPage.prototype.login = function (data) {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var send_date = {};
        send_date['mobile'] = this.loginModel.mobile;
        send_date['password'] = this.loginModel.password;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "users/login";
        this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
            localStorage.setItem("userId", MyResponse['result']['id']);
            localStorage.setItem("loginType", "email");
            localStorage.setItem("loginStatus", 'yes');
            localStorage.setItem("userRole", MyResponse['result']['userRole']);
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
    LoginPage.prototype.loginWithGmail = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            _this.loginDetails = res;
            localStorage.setItem("gmailData", JSON.stringify(_this.loginDetails));
            localStorage.setItem("userId", _this.users.id);
            localStorage.setItem("loginStatus", 'yes');
            localStorage.setItem("loginType", "gmail");
            // localStorage.setItem("userRole", this.users['result']['userRole']);
            localStorage.setItem("userName", _this.users.name);
            // localStorage.setItem("userCreated", this.users.);
            _this.router.navigate(['/home']);
            console.log("show details:" + JSON.stringify(_this.loginDetails));
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