(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\" fxLayoutAlign=\"center center\">\n    <ion-row fxLayoutAlign=\"center center\">\n      <ion-col size=\"1\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"8\" fxLayoutAlign=\"start center\">\n        <ion-label style=\"color:white;\" class=\"TitleText\">Profile</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <label style=\"position: fixed; right:10px;color:white; bottom: 15px;  font-size:18px\"\n          (click)=\"presentAlert()\">Log Out</label>\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div fxLayout=\"column\" >\n   \n    <div class=\"img-div\" fxLayoutAlign=\"center center\" fxLayout=\"column\">\n\n      <ion-row style=\"position: absolute;top:0px;width:100%\">\n        <ion-col size=\"1\">\n          <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n        </ion-col>\n        <ion-col size=\"9\" fxLayoutAlign=\"start center\">\n          <ion-label style=\"color:white;\" class=\"TitleText\">Profile</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" fxLayoutAlign=\"center center\">\n          <ion-icon style=\"color: white;width:30px;height:30px;\" name=\"exit-outline\" (click)=\"presentAlert()\"></ion-icon>\n          <!-- <label style=\"position: fixed; right:10px;color:white; bottom: 15px;  font-size:18px\"\n            (click)=\"presentAlert()\">Log Out</label> -->\n        </ion-col>\n      </ion-row>\n\n      <img *ngIf=\"profileImg == '' \" src=\"../../../assets/agent.png\" class=\"img-css\" />\n      <img *ngIf=\"profileImg != '' \" src=\"{{profileImg}}\"  class=\"img-css\" />\n     <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <label style=\"margin-top:10px; color: white;font-size: 20px;\">{{name}}</label>\n      <mat-icon (click)=\"updateProfile()\" *ngIf=\"updateStatus == 0 \" class=\"cl_edit_css\">edit</mat-icon>\n\n     </div>\n\n      <div style=\" position: absolute;bottom:-55px;width:100%\"  fxLayoutAlign=\"center center\">\n        <ion-card class=\"show-count-css\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n          <div fxFlex=\"50\" class=\"first-subcount-div\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <label class=\"count-css\">{{advertisementCount}}</label>\n            <label  class=\"type-text-css\">Advertisement</label>\n          </div>\n          <div fxFlex=\"50\" class=\"second-subcount-div\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <label  class=\"count-css\">{{bannersCount}}</label>\n            <label  class=\"type-text-css\">Banner</label>\n          </div>\n    \n        </ion-card>\n      </div>\n   \n    </div>\n\n  \n<div fxLayout=\"column\" style=\"margin-top:70px;\">\n  <div style=\"width:100%;padding:5px;\" fxLayout=\"row\" *ngIf=\"mobile != '1'\">\n    <div *ngIf=\"mobile != ''\" fxFlex=\"20\"  fxLayoutAlign=\"center start\">\n      <ion-icon class=\"icon-css\" name=\"call\"></ion-icon>\n    </div>\n    <div *ngIf=\"mobile != ''\" fxFlex=\"80\"  fxLayoutAlign=\"start start\">\n      <ion-label class=\"cl_content_fontsize\">{{mobile}}</ion-label>\n    </div>\n    <!-- <div fxFlex=\"20\" fxLayoutAlign=\"center start\"  (click)=\"updateProfile()\" *ngIf=\"updateStatus == 0 \">\n      <mat-icon class=\"cl_edit_css\">edit</mat-icon>\n    </div> -->\n    </div>\n\n    <div style=\"width:100%;padding:5px;margin-top:20px;\" fxLayout=\"row\">\n      <div fxFlex=\"20\"  fxLayoutAlign=\"center start\">\n        <ion-icon class=\"icon-css\" name=\"mail\"></ion-icon>\n      </div>\n      <div fxFlex=\"80\"  fxLayoutAlign=\"start start\">\n        <ion-label class=\"cl_content_fontsize\">{{email}}</ion-label>\n      </div>\n      <!-- <div fxFlex=\"20\" fxLayoutAlign=\"center start\"  (click)=\"updateProfile()\" *ngIf=\"updateStatus == 0 \">\n        <mat-icon class=\"cl_edit_css\">edit</mat-icon>\n      </div> -->\n      </div>\n\n      <div style=\"width:100%;padding:5px;margin-top:20px;\" fxLayout=\"row\" (click)=\"viewPaymentLogs()()\">\n        <div fxFlex=\"20\"  fxLayoutAlign=\"center start\">\n          <ion-icon class=\"icon-css\" name=\"document\"></ion-icon>\n        </div>\n        <div fxFlex=\"60\"  fxLayoutAlign=\"start start\">\n          <ion-label class=\"cl_content_fontsize\">Payment history</ion-label>\n        </div>\n        <div fxFlex=\"20\" fxLayoutAlign=\"center start\">\n          <ion-icon class=\"arrow-icon-css\" name=\"chevron-forward-outline\"></ion-icon>\n        </div>\n        </div>\n\n</div>\n     \n\n     \n\n  </div>\n\n\n  <!-- <div style=\"height:320px;position: relative; top:0px;background-color: #f1f4f9;\" fxLayoutAlign=\"center center\" *ngIf=\"noInternet == 1 \"> -->\n  <!-- <div style=\"position: absolute; bottom :60px;\" >\n      <div fxLayout=\"column\" fxLayoutAlign=\"start center\">\n        <ion-icon name=\"person\" \n          style=\"width:60px; height:60px; border-radius: 100%;color:white;background-color: rgb(168, 158, 158) ; padding:15px\">\n        </ion-icon>\n        <label   style=\"margin-top:10px; color: black;font-size: 20px;\">{{name}}</label>\n      \n      </div>\n\n\n    </div> -->\n  <!-- <div style=\"height:190px;background-color: #f1f4f9; \"></div>\n\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-icon name=\"person\" style=\"width:40px; height:40px; border-radius: 100%;margin-left: 15px;color:white;background-color: rgb(168, 158, 158) ; padding:18px\" ></ion-icon>\n      </ion-col>\n\n      <ion-col size=\"9\" style=\"margin-top:23px; padding-left:15px; font-size: 18px\">\n        <label>Chaitnya</label> \n      </ion-col>\n    </ion-row> -->\n\n  <!-- </div> -->\n\n  <!-- \n  <ion-card class=\"cl_card_css\" *ngIf=\"noInternet == 1 \">\n    <div style=\"margin-top:10px\">\n\n     \n\n      <ion-row style=\"margin:20px\">\n        <ion-col size=\"1\">\n          <ion-icon style=\"height:19px;width:18px; margin:2px\" name=\"person\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-label class=\"cl_content_fontsize\">{{name}}</ion-label><br />\n        </ion-col>\n        <ion-col size=\"1\" (click)=\"updateProfile()\" *ngIf=\"updateStatus == 0 \">\n          <mat-icon class=\"cl_edit_css\">edit</mat-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin:20px\" *ngIf=\"mobile != null \">\n        <ion-col size=\"1\">\n          <ion-icon style=\"height:19px;width:18px; margin:2px\" name=\"call\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <ion-label class=\"cl_content_fontsize\">{{mobile}}</ion-label><br />\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin:20px\">\n        <ion-col size=\"1\">\n          <ion-icon style=\"height:19px;width:18px; margin:2px\" name=\"mail\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <ion-label class=\"cl_content_fontsize\">{{email}}</ion-label><br />\n        </ion-col>\n      </ion-row>\n\n   \n\n\n\n\n    </div>\n\n\n\n  </ion-card> -->\n\n\n  <div class=\"cl_bottom_fix\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"home()\">\n      <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">HOME</label>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openChatList()\">\n      <ion-icon class=\"cl_bottom_nav_css\" name=\"document\" (click)=\"openChatList()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">CHATS</label>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"postAdvertisement()\">\n      <ion-icon class=\"cl_bottom_nav_css\" name=\"add-circle\" (click)=\"postAdvertisement()\">\n      </ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">SELL</label>\n    </div>\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openFavourite()\">\n      <ion-icon class=\"cl_bottom_nav_css\" name=\"heart\" (click)=\"openFavourite()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">MY ADS</label>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openProfile()\">\n      <ion-icon class=\"cl_post_css\" name=\"person\" (click)=\"openProfile()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_selected-text_font\">PROFILE</label>\n    </div>\n\n  </div>\n\n\n\n</ion-content>");

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

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");










var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__["GooglePlaceModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cl_bottom_nav_css {\n  width: 24px;\n  height: 24px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 8px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 24px;\n  height: 24px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 10px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 10px;\n  color: #fb7645;\n}\n\n.cl_title_fontsize {\n  width: 18px;\n  height: 18px;\n  color: grey;\n}\n\n.cl_content_fontsize {\n  font-size: 15px;\n  color: black;\n}\n\n#map_canvas {\n  width: 100%;\n  margin: auto;\n  height: 35vh;\n}\n\n.cl_card_css {\n  width: 100%;\n  box-shadow: none !important;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding-bottom: 20px;\n  margin: 0px;\n  margin-top: -30px;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  margin-left: 10px;\n}\n\n.cl_edit_css {\n  font-size: 19px;\n  color: white;\n  margin-left: 5px;\n  margin-top: 12px;\n}\n\n.img-div {\n  position: relative;\n  padding-bottom: 70px;\n  background: linear-gradient(to bottom, #fe4f14, #fe8860, #feae93);\n  width: 100%;\n}\n\n.img-css {\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  color: white;\n  margin-top: 100px;\n  background: #f1f4f9;\n}\n\n.show-count-css {\n  width: 90%;\n  border-radius: 10px;\n  padding: 2px;\n}\n\n.first-subcount-div {\n  padding: 5px;\n}\n\n.second-subcount-div {\n  padding: 5px;\n}\n\n.count-css {\n  color: #fb7645;\n  font-size: 25px;\n  padding: 3px;\n  font-weight: 450;\n}\n\n.type-text-css {\n  color: gray;\n  font-size: 14px;\n  padding: 3px;\n}\n\n.icon-css {\n  height: 20px;\n  width: 20px;\n  margin: 2px;\n  color: gray;\n}\n\n.arrow-icon-css {\n  height: 25px;\n  width: 25px;\n  margin: 2px;\n  color: gray;\n}\n\n.row-css {\n  margin: 5px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtFQUdBLHlCQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0MsNkJBQUE7RUFDQyx1QkFBQTtBQ0xKOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUdBLHlCQUFBO0FDUEY7O0FEV0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNSRjs7QURXQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNSRjs7QURZQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1ZGOztBRGNFO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNYRjs7QURnQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNiRjs7QURnQkE7RUFDRSxXQUFBO0VBR0EsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNoQkY7O0FEcUJBO0VBQ0Usd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ2xCRjs7QUR1QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNwQkY7O0FEdUJBO0VBR0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUN0QkY7O0FEMEJBO0VBQ0UsZUFBQTtFQUdBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDekJGOztBRDRCQTtFQUVFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpRUFBQTtFQUdBLFdBQUE7QUM1QkY7O0FEK0JBO0VBQ0UsWUFBQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDNUJIOztBRGlDQTtFQUdFLFVBQUE7RUFDQSxtQkFBQTtFQUNELFlBQUE7QUNoQ0Q7O0FEb0NBO0VBR0EsWUFBQTtBQ25DQTs7QURzQ0E7RUFHRSxZQUFBO0FDckNGOztBRHdDQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDckNBOztBRHdDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ3JDRjs7QUR3Q0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDckNIOztBRHdDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNyQ0g7O0FEd0NBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNyQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jbF9ib3R0b21fbmF2X2Nzc3tcbiAgd2lkdGg6MjRweDtcbiAgaGVpZ2h0OjI0cHg7XG4gIC8vIGNvbG9yOmdyYXk7XG5cbiAgd2lkdGg6MTAwJTtcbiAgY29sb3I6Z3JheTtcbiAgLy8gcGFkZGluZy10b3A6NXB4O1xuICAvLyBwYWRkaW5nLWJvdHRvbTo1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jbF9ib3R0b21fZml4e1xuICBwb3NpdGlvbjogZml4ZWQ7IFxuICBib3R0b206MHB4O1xuICB3aWR0aDoxMDAlO1xuICBwYWRkaW5nOjhweDtcbiAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNmMWY0Zjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2Nzc3tcbiAgd2lkdGg6MTAwJTtcbiAgd2lkdGg6MjRweDtcbiAgaGVpZ2h0OjI0cHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xuICAvLyBwYWRkaW5nLXRvcDo1cHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiBcbn1cblxuLmNsX3RleHRfZm9udHtcbiAgcGFkZGluZy10b3A6NHB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jbF9zZWxlY3RlZC10ZXh0X2ZvbnR7XG4gIHBhZGRpbmctdG9wOjRweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbn1cblxuXG4uY2xfdGl0bGVfZm9udHNpemV7XG4gIC8vIG1hcmdpbjotMXB4OztcbiAgd2lkdGg6MThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogZ3JleTtcbiAgLy8gbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIH1cbiAgXG4gIC5jbF9jb250ZW50X2ZvbnRzaXple1xuICBmb250LXNpemU6MTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICAvLyBwYWRkaW5nOjNweDtcbiAgfVxuICBcblxuI21hcF9jYW52YXN7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjphdXRvO1xuICBoZWlnaHQ6IDM1dmg7XG59XG5cbi5jbF9jYXJkX2Nzc3tcbiAgd2lkdGg6MTAwJTtcbiAgLy8gaGVpZ2h0OjgwJTtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOjIwcHg7XG4gIG1hcmdpbjowcHg7XG4gIG1hcmdpbi10b3A6LTMwcHg7XG59XG5cblxuXG4uY2wtYmFjay1idXR0b257XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nJykgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIC8vIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuXG4uVGl0bGVIZWFkZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0e1xuICAvLyBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgLy8gdGV4dC1hbGlnbjpsZWZ0O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDoxMHB4O1xuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2xfZWRpdF9jc3N7XG4gIGZvbnQtc2l6ZToxOXB4O1xuICAvLyBtYXJnaW4tdG9wOjEwcHg7XG4gIC8vIG1hcmdpbi1sZWZ0OjNweDtcbiAgY29sb3I6d2hpdGU7XG4gIG1hcmdpbi1sZWZ0OjVweDtcbiAgbWFyZ2luLXRvcDoxMnB4O1xufVxuXG4uaW1nLWRpdntcbiAgLy8gaGVpZ2h0OjI1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOjcwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZTRmMTQsI2ZlODg2MCwjZmVhZTkzKTtcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZjg4ODYzLCNmY2IyOWEpO1xuICAvLyBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XG4gIHdpZHRoOjEwMCU7XG59XG5cbi5pbWctY3Nze1xuICB3aWR0aDoxMDBweDtcbiAgIGhlaWdodDoxMDBweDsgXG4gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgY29sb3I6d2hpdGU7XG4gICBtYXJnaW4tdG9wOjEwMHB4O1xuICAgYmFja2dyb3VuZDojZjFmNGY5O1xuICAvLyAgYm9yZGVyOjFweCBzb2xpZCAjZDdkOGRhIDtcbiAgICAvLyBwYWRkaW5nOjVweDtcbn1cblxuLnNob3ctY291bnQtY3Nze1xuICAvLyBib3JkZXItdG9wOjFweCBzb2xpZCByZ2IoMTY4LCAxNjUsIDE2NSk7XG4gIC8vIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYigxNjgsIDE2NSwgMTY1KTtcbiAgd2lkdGg6OTAlO1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG4gcGFkZGluZzoycHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmMWY0Zjk7XG59XG5cbi5maXJzdC1zdWJjb3VudC1kaXZ7XG4vLyBib3JkZXItcmlnaHQ6MXB4IHNvbGlkIGdyYXk7XG4vLyBoZWlnaHQ6NTBweDtcbnBhZGRpbmc6NXB4O1xufVxuXG4uc2Vjb25kLXN1YmNvdW50LWRpdntcbiAgLy8gYm9yZGVyOjFweCBzb2xpZCBncmF5O1xuICAvLyBoZWlnaHQ6NTBweDtcbiAgcGFkZGluZzo1cHg7XG59XG5cbi5jb3VudC1jc3N7XG5jb2xvcjojZmI3NjQ1O1xuZm9udC1zaXplOjI1cHg7XG5wYWRkaW5nOjNweDtcbmZvbnQtd2VpZ2h0OjQ1MDtcbn1cblxuLnR5cGUtdGV4dC1jc3N7XG4gIGNvbG9yOmdyYXk7XG4gIGZvbnQtc2l6ZToxNHB4O1xuICBwYWRkaW5nOjNweDtcbn1cblxuLmljb24tY3Nze1xuICBoZWlnaHQ6MjBweDtcbiAgd2lkdGg6MjBweDtcbiAgIG1hcmdpbjoycHg7XG4gICBjb2xvcjpncmF5O1xufVxuXG4uYXJyb3ctaWNvbi1jc3N7XG4gIGhlaWdodDoyNXB4O1xuICB3aWR0aDoyNXB4O1xuICAgbWFyZ2luOjJweDtcbiAgIGNvbG9yOmdyYXk7XG59XG5cbi5yb3ctY3Nze1xuICBtYXJnaW46NXB4O1xuICB3aWR0aDoxMDAlO1xufSIsIi5jbF9ib3R0b21fbmF2X2NzcyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjRmOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2NzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX3RleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmYjc2NDU7XG59XG5cbi5jbF90aXRsZV9mb250c2l6ZSB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uY2xfY29udGVudF9mb250c2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMzV2aDtcbn1cblxuLmNsX2NhcmRfY3NzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNsX2VkaXRfY3NzIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5pbWctZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZlNGYxNCwgI2ZlODg2MCwgI2ZlYWU5Myk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nLWNzcyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2YxZjRmOTtcbn1cblxuLnNob3ctY291bnQtY3NzIHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uZmlyc3Qtc3ViY291bnQtZGl2IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uc2Vjb25kLXN1YmNvdW50LWRpdiB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmNvdW50LWNzcyB7XG4gIGNvbG9yOiAjZmI3NjQ1O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcbn1cblxuLnR5cGUtdGV4dC1jc3Mge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5pY29uLWNzcyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmFycm93LWljb24tY3NzIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ucm93LWNzcyB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/network/network.service */ "./src/app/service/network/network.service.ts");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");










var ProfilePage = /** @class */ (function () {
    function ProfilePage(router, alertCtrl, networkServices, activatedRoute, loader, facebook, googlePlus, menuController, apiCall) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.networkServices = networkServices;
        this.activatedRoute = activatedRoute;
        this.loader = loader;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.menuController = menuController;
        this.apiCall = apiCall;
        this.noInternet = 1;
        this.updateStatus = 0;
        this.isLoggedIn = false;
        this.profileImg = "";
        this.bannersCount = 0;
        this.advertisementCount = 0;
        this.menuController.enable(false);
    }
    ProfilePage.prototype.ngOnInit = function () {
        // this.profileImg = localStorage.getItem("profileImage");
        // this.userId = this.activatedRoute.snapshot.params['userId'];
        // console.log("user id:" + this.userId);
        // this.getProfileInfo();
        // this.getCountryCode();
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.userId = this.activatedRoute.snapshot.params['userId'];
        console.log("user id:" + this.userId);
        this.loginType = localStorage.getItem("loginType");
        // if (this.userId == undefined || this.userId == "" || this.userId == null) {
        //   this.userId = localStorage.getItem('userId');
        //   this.updateStatus = 0;
        // } else {
        //   this.updateStatus = 1;
        // }
        this.getProfileInfo();
    };
    ProfilePage.prototype.getCountryCode = function () {
        var _this = this;
        var url = "https://www.universal-tutorial.com/api/countries";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            console.log("display::" + MyResponse);
        }, function (error) {
            console.log("display::" + error);
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    ProfilePage.prototype.getProfileInfo = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        this.noInternet = 1;
        if (this.userId == undefined || this.userId == "" || this.userId == null) {
            this.userId = localStorage.getItem('userId');
            // this.updateStatus = 0;
        }
        else {
            // this.updateStatus = 1;
        }
        this.loginUserId = localStorage.getItem('userId');
        if (this.loginUserId == this.userId) {
            this.updateStatus = 0;
            console.log("match id:");
        }
        else {
            this.updateStatus = 1;
            console.log("id not match");
        }
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "users/" + this.userId;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.profileDetail = MyResponse['result'];
            _this.name = _this.profileDetail.name;
            localStorage.setItem("getName", _this.name);
            if (_this.profileDetail.mobile == null || _this.profileDetail.mobile == "") {
                _this.mobile = "1";
            }
            else {
                console.log("ger profile mobile:" + _this.mobile);
                _this.mobile = _this.profileDetail.mobile;
            }
            // this.mobile = this.profileDetail.mobile;
            _this.email = _this.profileDetail.email;
            _this.profileImg = _this.profileDetail.image;
            if (_this.profileImg == null || _this.profileImg == undefined || _this.profileImg == "") {
                console.log("ger profile empty");
                _this.profileImg = "";
            }
            else {
                console.log("ger profileimage:" + _this.profileImg);
                _this.profileImg = _this.profileDetail.image;
            }
            _this.bannersCount = _this.profileDetail.bannersCount;
            _this.advertisementCount = _this.profileDetail.advertisementCount;
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.noInternet = 0;
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    ProfilePage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    ProfilePage.prototype.postAdvertisement = function () {
        var status = "0";
        localStorage.setItem("postStatus", status);
        this.router.navigate(['/newadvertisementform']);
        // this.router.navigate(['/secondpageadvertisement']);
    };
    ProfilePage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    ProfilePage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    ProfilePage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        if (this.loginType == "fb") {
            this.facebook.logout()
                .then(function (res) { return _this.isLoggedIn = false; })
                .catch(function (e) { return console.log('Error logout from Facebook', e); });
            localStorage.clear();
            this.router.navigate(['/login']);
            localStorage.setItem("loginStatus", "no");
        }
        else if (this.loginType == "gmail") {
            this.googlePlus.logout();
            localStorage.clear();
            this.router.navigate(['/login']);
            localStorage.setItem("loginStatus", "no");
        }
        else {
            localStorage.clear();
            this.router.navigate(['/login']);
            localStorage.setItem("loginStatus", "no");
        }
    };
    ProfilePage.prototype.goBackword = function () {
        window.history.back();
    };
    ProfilePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: '',
                            message: 'Are you sure you want to logout?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.logOut();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.setAttribute('role', 'alert');
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.updateProfile = function () {
        var profileData = {
            "name": this.name,
            "email": this.email,
            "mobile": this.mobile,
            "image": this.profileImg
        };
        this.router.navigate(['/updateprofile', { profileData: JSON.stringify(this.profileDetail) }]);
    };
    ProfilePage.prototype.viewPaymentLogs = function () {
        this.router.navigate(['/paymentlogs']);
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ProfilePage);
    return ProfilePage;
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
//# sourceMappingURL=pages-profile-profile-module.js.map