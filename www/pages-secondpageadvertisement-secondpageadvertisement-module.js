(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-secondpageadvertisement-secondpageadvertisement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/secondpageadvertisement/secondpageadvertisement.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/secondpageadvertisement/secondpageadvertisement.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"10\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white; margin-left:-15px\">Advertisement</ion-label>\n      </ion-col>\n\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h5 align=\"center\" style=\" margin-top:8%\">Select Plan</h5>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\"\n    style=\"width:96%; margin-left:2%; color: white; background-color: #50a46c; padding:20px;\">\n\n   \n\n  \n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:25%; border-right: 1px solid white;\">\n\n      <label style=\"font-size:12px \">One Week</label>\n      <label style=\"margin-top:5px\">{{defaultAdvertisementWeekPrice}}$</label>\n\n    </div>\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:40%;border-right: 1px solid white;\">\n\n      <label style=\"font-size:12px \">Multiple Weeks</label>\n      <label style=\"margin-top:5px\">${{defaultAdvertisementWeekPrice}} + ( {{updatedWeeks}} * ${{furtherAdvertisementWeeksPrice}})</label>\n\n    </div>\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:35%;\">\n\n      <mat-form-field class=\"cl_matformfield_dropdown cl_select_week\" >\n      <label style=\"color:white;font-size:12px; margin-bottom:10px\">Select Weeks</label>\n      <select matNativeControl #week (change)=\"selectAdvertisementNoOfWeeksType(week.value)\" style=\"color:white;width:100%\" [(ngModel)]='updatedWeeks'>\n        <option *ngFor=\"let check of weeksArray\" [value]=\"check\" style=\"color:white\"> {{check}}</option>\n      </select>\n\n        <!-- <mat-select matNativeControl #week (selectionChange)=\"selectAdvertisementNoOfWeeksType(week.value)\" style=\"width:80% \" [(value)]=\"selectedNoOfWeek\">\n          <mat-option *ngFor=\"let check of weeksArray\" [value]=\"check\" style=\"color:white\"> {{check}}</mat-option>\n        </mat-select> -->\n      </mat-form-field>\n\n\n      \n    </div>\n  </div>\n\n\n\n\n  <div class=\"cl_select_margin\">\n    <ion-row style=\"margin-top:20px\">\n      <ion-col size=\"4\" fxLayoutAlign=\"start center\">\n      </ion-col>\n      <ion-col size=\"5\" fxLayoutAlign=\"center start\">\n        <div class=\"cl_div\">\n          <mat-form-field class=\"cl_matformfield cl_select\">\n            <mat-label style=\"color:white\">Select Weeks</mat-label>\n            <select matNativeControl #noweek (change)=\"selectNoOfWeeksType(noweek.value)\" style=\"color:white\"  [(ngModel)]='selectedWeek'>\n              <option *ngFor=\"let type of weeksArray\" [value]=\"type\" style=\"color:black\"> {{type}}</option>\n            </select>\n          </mat-form-field>\n        </div>\n      </ion-col>\n      <ion-col size=\"1\" fxLayoutAlign=\"end center\">\n        <label>=</label>\n      </ion-col>\n      <ion-col size=\"2\" fxLayoutAlign=\"end center\">\n        <label>$ {{finalCalculation}}</label>\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row style=\"border: 1px solid white; padding:10px; margin-top:20px; margin-left:2%; margin-right:2%\" [ngClass]=\"(checkBoostStatus == 0) ? 'without-boost' : 'with-boost' \"\n      (click)=\"calculateFinal()\">\n      <ion-col size=\"3\">\n        <button style=\"border-radius: 100%; border: 1px solid white; width: 30px; height:30px\"></button>\n      </ion-col>\n      <!-- <ion-col size=\"2\"></ion-col> -->\n      <ion-col size=\"7\" fxLayoutAlign=\"start center\">\n        <label fxLayoutAlign=\"start center\">Boost Ad</label>\n      </ion-col>\n\n      <ion-col size=\"2\" fxLayoutAlign=\"center center\">\n        <label fxLayoutAlign=\"center center\">$100</label>\n      </ion-col>\n    </ion-row>\n\n\n    <div style=\"border: 1px solid white; height:2px; margin-top:20px;margin-left:2%; margin-right:2% \"></div>\n    <ion-row style=\"margin-top:10px;margin-left:2%; margin-right:2%\">\n      <ion-col size=\"6\" fxLayoutAlign=\"start start\">\n        <label>Total</label>\n      </ion-col>\n\n      <ion-col size=\"6\" fxLayoutAlign=\"end end\">\n        <label>$ {{totalCalculation}}</label>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n\n\n  <!-- <div *ngIf=\"imageUrl == 1\"\n    style=\"border:1px solid rgb(201, 195, 195);height:100px;width:96%;border-radius:5px;background-color: white; margin-left:2%; margin-top:20px\"\n    fxLayout=\"column\" fxLayoutAlign=\"center center\" onclick=\"document.getElementById('image_upload').click()\">\n    <ion-icon name=\"camera\" style=\"width:70%; height:70%;color:gray\">\n    </ion-icon>\n\n\n    <input style=\"display: none;\" id=\"image_upload\" type=\"file\" (change)=\"detectEventGallery($event)\">\n  </div>\n  <div class=\"row\" *ngFor=\"let img of urls\" style=\"margin-top:20px; width:96%; margin-left:2%\">\n    <div class=\"column\">\n      <img src=\"{{img}}\" style=\"border-radius:10px\">\n\n    </div>\n  </div> -->\n\n\n  <button mat-raised-button class=\"loginButton\"\n    (click)=\"submmitAdvertisementData(advertisementModel)\"><b>Submit</b></button>\n\n\n    <div class=\"cl_bottom_fix\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n      \n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n      (click)=\"home()\">\n      <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">HOME</label>\n      </div>\n    \n    \n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n      (click)=\"openChatList()\">\n      <ion-icon class=\"cl_bottom_nav_css\" name=\"document\" (click)=\"openChatList()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">CHATS</label>\n      </div>\n    \n    \n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n        (click)=\"postAdvertisement()\">\n      <ion-icon class=\"cl_post_css\"  name=\"add-circle\" (click)=\"postAdvertisement()\">\n      </ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_selected-text_font\">SELL</label>\n      </div>\n    \n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n      (click)=\"openFavourite()\">\n      <ion-icon class=\"cl_bottom_nav_css\" name=\"heart\"  (click)=\"openFavourite()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">MY ADS</label>\n      </div>\n    \n    \n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n        (click)=\"openProfile()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"person\"  (click)=\"openProfile()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">PROFILE</label>\n      </div>\n    \n    </div>\n    \n\n\n  <!-- <div class=\"cl_bottom_fix\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n      <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n      <ion-icon name=\"document\" class=\"cl_bottom_nav_css\" (click)=\"openChatList()\"></ion-icon>\n      <ion-icon name=\"add-circle\" class=\"cl_post_css\" (click)=\"postAdvertisement()\">\n      </ion-icon>\n      <ion-icon name=\"heart\" class=\"cl_bottom_nav_css\" (click)=\"openFavourite()\"></ion-icon>\n      <ion-icon name=\"person\" class=\"cl_bottom_nav_css\" (click)=\"openProfile()\"></ion-icon>\n    </div>\n  </div> -->\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/secondpageadvertisement/secondpageadvertisement-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/secondpageadvertisement/secondpageadvertisement-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: SecondpageadvertisementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondpageadvertisementPageRoutingModule", function() { return SecondpageadvertisementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _secondpageadvertisement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secondpageadvertisement.page */ "./src/app/pages/secondpageadvertisement/secondpageadvertisement.page.ts");




var routes = [
    {
        path: '',
        component: _secondpageadvertisement_page__WEBPACK_IMPORTED_MODULE_3__["SecondpageadvertisementPage"]
    }
];
var SecondpageadvertisementPageRoutingModule = /** @class */ (function () {
    function SecondpageadvertisementPageRoutingModule() {
    }
    SecondpageadvertisementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SecondpageadvertisementPageRoutingModule);
    return SecondpageadvertisementPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/secondpageadvertisement/secondpageadvertisement.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/secondpageadvertisement/secondpageadvertisement.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SecondpageadvertisementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondpageadvertisementPageModule", function() { return SecondpageadvertisementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _secondpageadvertisement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./secondpageadvertisement-routing.module */ "./src/app/pages/secondpageadvertisement/secondpageadvertisement-routing.module.ts");
/* harmony import */ var _secondpageadvertisement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secondpageadvertisement.page */ "./src/app/pages/secondpageadvertisement/secondpageadvertisement.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");










var SecondpageadvertisementPageModule = /** @class */ (function () {
    function SecondpageadvertisementPageModule() {
    }
    SecondpageadvertisementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _secondpageadvertisement_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecondpageadvertisementPageRoutingModule"]
            ],
            declarations: [_secondpageadvertisement_page__WEBPACK_IMPORTED_MODULE_6__["SecondpageadvertisementPage"]]
        })
    ], SecondpageadvertisementPageModule);
    return SecondpageadvertisementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/secondpageadvertisement/secondpageadvertisement.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/secondpageadvertisement/secondpageadvertisement.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: #f1f4f9;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.img-circle {\n  border-radius: 50%;\n  margin: 10px;\n  margin-top: 25px;\n  border: 2px solid #3486E8;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  padding: 5px;\n  margin-top: -5px;\n}\n\n.loginButton {\n  background-color: #152a3f;\n  color: white;\n  width: 28%;\n  margin-left: 35%;\n  margin-right: 35%;\n  margin-top: 5%;\n  padding-top: 5px;\n  margin-bottom: 15%;\n  padding-bottom: 5px;\n  font-size: 18px;\n}\n\n.cl_bottom_nav_css {\n  width: 24px;\n  height: 24px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 8px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 24px;\n  height: 24px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 10px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 10px;\n  color: #fb7645;\n}\n\n.cl_matformfield {\n  width: 80%;\n  color: white;\n  margin-left: 5px;\n  background-color: #31897b;\n}\n\n.cl_matformfield_dropdown {\n  width: 80%;\n  color: white;\n  margin-right: 5px;\n  background-color: #50a46c;\n}\n\n.cl_div {\n  width: 100%;\n  background-color: #31897b;\n  color: white;\n}\n\n.cl_select_margin {\n  width: 96%;\n  margin-left: 2%;\n  color: white;\n  background-color: #31897b;\n  padding: 5px;\n  margin-top: 8%;\n}\n\n.without-boost {\n  background-color: #31897b !important;\n  --color:white;\n}\n\n.with-boost {\n  background-color: #50a46c !important;\n  --color:black;\n}\n\n.small-input.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 0.25em 0 0.75em 0;\n  font-size: 14px;\n}\n\n.small-input.mat-form-field-appearance-outline .mat-form-field-infix .mat-select-arrow {\n  margin-top: 10px;\n}\n\n.small-input.mat-form-field-appearance-outline .mat-select-empty + .mat-form-field-label-wrapper .mat-form-field-label {\n  margin-top: -0.75em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9zZWNvbmRwYWdlYWR2ZXJ0aXNlbWVudC9zZWNvbmRwYWdlYWR2ZXJ0aXNlbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlY29uZHBhZ2VhZHZlcnRpc2VtZW50L3NlY29uZHBhZ2VhZHZlcnRpc2VtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDREo7O0FETUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSEo7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDRixlQUFBO0FDTEY7O0FEV0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUdBLFdBQUE7RUFDQSxXQUFBO0VBR0EseUJBQUE7QUNaRjs7QURlQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQyw2QkFBQTtFQUNDLHVCQUFBO0FDWko7O0FEZUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBR0EseUJBQUE7QUNkRjs7QURrQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNmRjs7QURrQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDZkY7O0FEbUJBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0FDaEJIOztBRG1CQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0MsaUJBQUE7RUFDQSx5QkFBQTtBQ2hCSDs7QURtQkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQyxZQUFBO0FDaEJIOztBRG1CQTtFQUNFLFVBQUE7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNDLHlCQUFBO0VBQ0MsWUFBQTtFQUNDLGNBQUE7QUNoQk47O0FEbUJBO0VBRUUsb0NBQUE7RUFDQSxhQUFBO0FDakJGOztBRHFCQTtFQUNFLG9DQUFBO0VBR0EsYUFBQTtBQ3BCRjs7QURxQ0E7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUNsQ0Y7O0FEb0NBO0VBQXVGLGdCQUFBO0FDaEN2Rjs7QURpQ0E7RUFBdUgsbUJBQUE7QUM3QnZIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vjb25kcGFnZWFkdmVydGlzZW1lbnQvc2Vjb25kcGFnZWFkdmVydGlzZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFzdGVycyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmNGY5O1xuICB9XG5cbiAgLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmltZy1jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8vIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbWFyZ2luLXRvcDoyNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNDg2RTg7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cblxuLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi10b3A6LTVweDtcbiAgfVxuIFxuXG5cbi5sb2dpbkJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MmEzZjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDoyOCU7XG4gICBtYXJnaW4tbGVmdDozNSU7IFxuICAgbWFyZ2luLXJpZ2h0OjM1JTtcbiAgIG1hcmdpbi10b3A6NSU7XG4gICAgcGFkZGluZy10b3A6NXB4O1xuICAgIG1hcmdpbi1ib3R0b206MTUlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7IFxuICBmb250LXNpemU6MThweDtcbn1cblxuXG5cblxuLmNsX2JvdHRvbV9uYXZfY3Nze1xuICB3aWR0aDoyNHB4O1xuICBoZWlnaHQ6MjRweDtcbiAgLy8gY29sb3I6Z3JheTtcblxuICB3aWR0aDoxMDAlO1xuICBjb2xvcjpncmF5O1xuICAvLyBwYWRkaW5nLXRvcDo1cHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXh7XG4gIHBvc2l0aW9uOiBmaXhlZDsgXG4gIGJvdHRvbTowcHg7XG4gIHdpZHRoOjEwMCU7XG4gIHBhZGRpbmc6OHB4O1xuICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2YxZjRmOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsX3Bvc3RfY3Nze1xuICB3aWR0aDoxMDAlO1xuICB3aWR0aDoyNHB4O1xuICBoZWlnaHQ6MjRweDtcbiAgY29sb3I6ICNmYjc2NDU7XG4gIC8vIHBhZGRpbmctdG9wOjVweDtcbiAgLy8gcGFkZGluZy1ib3R0b206NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuIFxufVxuXG4uY2xfdGV4dF9mb250e1xuICBwYWRkaW5nLXRvcDo0cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udHtcbiAgcGFkZGluZy10b3A6NHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xufVxuXG5cbi5jbF9tYXRmb3JtZmllbGR7XG4gIHdpZHRoOjgwJTtcbiAgY29sb3I6IHdoaXRlO1xuICAgbWFyZ2luLWxlZnQ6NXB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzMxODk3Yjtcbn1cblxuLmNsX21hdGZvcm1maWVsZF9kcm9wZG93bntcbiAgd2lkdGg6ODAlO1xuICBjb2xvcjogd2hpdGU7XG4gICBtYXJnaW4tcmlnaHQ6NXB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzUwYTQ2Yztcbn1cblxuLmNsX2RpdntcbiAgd2lkdGg6MTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxODk3YjtcbiAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsX3NlbGVjdF9tYXJnaW57XG4gIHdpZHRoOjk2JTtcbiAgIG1hcmdpbi1sZWZ0OjIlOyBcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE4OTdiO1xuICAgICBwYWRkaW5nOjVweDtcbiAgICAgIG1hcmdpbi10b3A6OCU7XG59XG5cbi53aXRob3V0LWJvb3N0IHtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE4OTdiICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6d2hpdGU7XG4gIFxufVxuXG4ud2l0aC1ib29zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MGE0NmMgIWltcG9ydGFudDtcblxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyYTNmICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6YmxhY2s7XG59XG5cblxuLy8gOjpuZy1kZWVwIHtcblxuLy8gICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIFxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTg5N2IgIWltcG9ydGFudDtcbi8vICAgfVxuLy8gfVxuXG4vLyAubWF0LXNlbGVjdC12YWx1ZSB7XG5cbi8vICAgY29sb3I6d2hpdGU7XG5cbi8vIH1cbi5zbWFsbC1pbnB1dC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogLjI1ZW0gMCAuNzVlbSAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc21hbGwtaW5wdXQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCAubWF0LXNlbGVjdC1hcnJvd3ttYXJnaW4tdG9wOiAxMHB4O31cbi5zbWFsbC1pbnB1dC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1zZWxlY3QtZW1wdHkgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7bWFyZ2luLXRvcDogLTAuNzVlbTt9IiwiLm1hc3RlcnMge1xuICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uaW1nLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzQ4NkU4O1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4ubG9naW5CdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyYTNmO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyOCU7XG4gIG1hcmdpbi1sZWZ0OiAzNSU7XG4gIG1hcmdpbi1yaWdodDogMzUlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jbF9ib3R0b21fbmF2X2NzcyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjRmOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2NzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX3RleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmYjc2NDU7XG59XG5cbi5jbF9tYXRmb3JtZmllbGQge1xuICB3aWR0aDogODAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTg5N2I7XG59XG5cbi5jbF9tYXRmb3JtZmllbGRfZHJvcGRvd24ge1xuICB3aWR0aDogODAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBhNDZjO1xufVxuXG4uY2xfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTg5N2I7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsX3NlbGVjdF9tYXJnaW4ge1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxODk3YjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiA4JTtcbn1cblxuLndpdGhvdXQtYm9vc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE4OTdiICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6d2hpdGU7XG59XG5cbi53aXRoLWJvb3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwYTQ2YyAhaW1wb3J0YW50O1xuICAtLWNvbG9yOmJsYWNrO1xufVxuXG4uc21hbGwtaW5wdXQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuMjVlbSAwIDAuNzVlbSAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zbWFsbC1pbnB1dC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNtYWxsLWlucHV0Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LXNlbGVjdC1lbXB0eSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IC0wLjc1ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/secondpageadvertisement/secondpageadvertisement.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/secondpageadvertisement/secondpageadvertisement.page.ts ***!
  \*******************************************************************************/
/*! exports provided: SecondpageadvertisementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondpageadvertisementPage", function() { return SecondpageadvertisementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");








var SecondpageadvertisementPage = /** @class */ (function () {
    function SecondpageadvertisementPage(activatedRoute, router, loader, toast, apiCall) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loader = loader;
        this.toast = toast;
        this.apiCall = apiCall;
        this.imageUrl = 1;
        this.urls = [];
        this.defaultAdvertisementWeekPrice = "7";
        this.defaultBannerWeekPrice = "7";
        this.advertisementModel = {};
        this.fromDateTimestamp = 0;
        this.fromDateTimeAd = 0;
        this.toDateTimestamp = 0;
        this.toDateTimeAd = 0;
        this.selectedWeek = "1";
        this.weeksArray = ["1", "2", "3", "4", "5"];
        this.checkBoostStatus = '0';
        this.advertisementObject = {};
        this.selectedNoOfWeek = "1";
        this.filterObject = {};
        this.updatedWeeks = "1";
        this.pricingArray = [];
        this.calculateBannerNumberOfWeeks = function (d1, d2) {
            var format = "MM/DD/YYYY";
            if (d1 == '' || d2 == '') {
                return '';
            }
            if (moment__WEBPACK_IMPORTED_MODULE_5__(d1, format).isValid() && moment__WEBPACK_IMPORTED_MODULE_5__(d2, format).isValid()) {
                d1 = moment__WEBPACK_IMPORTED_MODULE_5__(d1, format);
                d2 = moment__WEBPACK_IMPORTED_MODULE_5__(d2, format);
                this.w = (d1.diff(d2, 'days') / 7).toFixed(1);
                if (this.w < 1) {
                    this.w = this.w;
                }
                // this.selectedNoOfWeek = this.w;
                return this.w;
            }
        };
        this.calculateNumberOfWeeks = function (d1, d2) {
            var format = "MM/DD/YYYY";
            if (d1 == '' || d2 == '') {
                return '';
            }
            if (moment__WEBPACK_IMPORTED_MODULE_5__(d1, format).isValid() && moment__WEBPACK_IMPORTED_MODULE_5__(d2, format).isValid()) {
                d1 = moment__WEBPACK_IMPORTED_MODULE_5__(d1, format);
                d2 = moment__WEBPACK_IMPORTED_MODULE_5__(d2, format);
                this.w = (d1.diff(d2, 'days') / 7).toFixed(1);
                if (this.w < 1) {
                    this.w = this.w;
                }
                this.selectedNoOfWeek = this.w;
                return this.w;
            }
        };
        this.selectedWeek = '1';
    }
    SecondpageadvertisementPage.prototype.ngOnInit = function () {
    };
    SecondpageadvertisementPage.prototype.ionViewWillEnter = function () {
        this.getPricing();
        this.todayDate = new Date();
        this.getData = JSON.parse(this.activatedRoute.snapshot.params['FinalObject']);
        this.bannerImage = this.getData.images[0];
        this.postStatus = localStorage.getItem("postStatus");
        if (this.postStatus == "1") {
            var advertisementDetail = localStorage.getItem("ADVERTISEMENTDATA");
            this.advertisementObject = JSON.parse(advertisementDetail);
            this.advertisementId = this.advertisementObject['id'];
            this.getAllBanner();
            console.log("advertisementObject:" + this.advertisementObject['address']);
            this.fromDateTimeAd = this.advertisementObject['startDateTime'];
            this.toDateTimeAd = this.advertisementObject['endDateTime'];
            this.updatedWeeks = this.getDate(this.fromDateTimeAd, this.toDateTimeAd);
            console.log("display ----:" + this.updatedWeeks);
            this.advertisementStatus = "update";
        }
        else {
            this.advertisementStatus = "post";
            this.selectAdvertisementNoOfWeeksType(1);
        }
        this.advertisementModel['noofweek'] = "1";
        this.selectedWeek = '1';
        this.selectNoOfWeeksType(1);
        localStorage.setItem("boostStatus", '0');
    };
    SecondpageadvertisementPage.prototype.getPricing = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "subscriptions";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.pricingArray = MyResponse['result']['list'];
            for (var i = 0; i < _this.pricingArray.length; i++) {
                if (_this.pricingArray[i]['name'] == "advertisement" || _this.pricingArray[i]['name'] == "Advertisement") {
                    _this.defaultAdvertisementWeekPrice = _this.pricingArray[i]['firstWeekPrice'];
                    _this.furtherAdvertisementWeeksPrice = _this.pricingArray[i]['furtherOnwardsPrice'];
                }
                else if (_this.pricingArray[i]['name'] == "banner" || _this.pricingArray[i]['name'] == "Banner") {
                    _this.defaultBannerWeekPrice = _this.pricingArray[i]['firstWeekPrice'];
                    _this.furtherBannerWeeksPrice = _this.pricingArray[i]['furtherOnwardsPrice'];
                }
                else {
                    _this.defaultAdvertisementWeekPrice = _this.pricingArray[i]['firstWeekPrice'];
                    _this.furtherAdvertisementWeeksPrice = _this.pricingArray[i]['furtherOnwardsPrice'];
                }
            }
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
        });
    };
    SecondpageadvertisementPage.prototype.goBackword = function () {
        window.history.back();
    };
    SecondpageadvertisementPage.prototype.toTimestamp = function (strDate) {
        var datum = Date.parse(strDate);
        return datum / 1000;
    };
    // submmitAdvertisementData(dat) {
    // this.fromDateTimestamp = this.toTimestamp(this.todayDate);
    // this.toDateTimestamp = this.toTimestamp(this.endDate);
    // alert("from date::"+this.fromDateTimestamp+ "to date:" +this.toDateTimestamp);
    // }
    SecondpageadvertisementPage.prototype.selectAdvertisementNoOfWeeksType = function (type) {
        this.selectedAdvertisementWeek = type;
        this.todayDate = new Date();
        console.log("show no of week value::" + type);
        this.endAdvertisementDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.todayDate).add(type, 'weeks').format('MM/DD/YYYY');
        var startDateTime = this.toTimestamp(this.todayDate);
        var endDateTime = this.toTimestamp(this.endAdvertisementDate);
        this.fromDateTimeAd = startDateTime;
        this.toDateTimeAd = endDateTime;
        console.log("start date timestamp:" + startDateTime);
        console.log("end date timestamp:" + endDateTime);
        console.log("show next date:" + moment__WEBPACK_IMPORTED_MODULE_5__(this.todayDate).add(type, 'weeks').format('MM/DD/YYYY'));
    };
    SecondpageadvertisementPage.prototype.getDate = function (start, end) {
        //get from date
        var ts_ms = start * 1000;
        var date_ob = new Date(ts_ms);
        var year = date_ob.getFullYear();
        var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        var date = ("0" + date_ob.getDate()).slice(-2);
        var getStartDate = month + "/" + date + "/" + year;
        var dateToday = new Date(year, parseInt(month), parseInt(date));
        //get end date
        var end_date_ob_ts_ms = end * 1000;
        var end_date_ob = new Date(end_date_ob_ts_ms);
        var end_date_ob_year = end_date_ob.getFullYear();
        var end_date_ob_month = ("0" + (end_date_ob.getMonth() + 1)).slice(-2);
        var end_date_ob_date = ("0" + end_date_ob.getDate()).slice(-2);
        var getEndDate = end_date_ob_month + "/" + end_date_ob_date + "/" + end_date_ob_year;
        console.log("show first date: " + getStartDate + "  ,  " + "show second date:" + getEndDate);
        var weeks = this.calculateNumberOfWeeks(getStartDate, getEndDate);
        console.log("show weeks:" + weeks);
        return Math.abs(weeks);
    };
    SecondpageadvertisementPage.prototype.getBannerDate = function (start, end) {
        //get from date
        var ts_ms = start * 1000;
        var date_ob = new Date(ts_ms);
        var year = date_ob.getFullYear();
        var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        var date = ("0" + date_ob.getDate()).slice(-2);
        var getStartDate = month + "/" + date + "/" + year;
        var dateToday = new Date(year, parseInt(month), parseInt(date));
        //get end date
        var end_date_ob_ts_ms = end * 1000;
        var end_date_ob = new Date(end_date_ob_ts_ms);
        var end_date_ob_year = end_date_ob.getFullYear();
        var end_date_ob_month = ("0" + (end_date_ob.getMonth() + 1)).slice(-2);
        var end_date_ob_date = ("0" + end_date_ob.getDate()).slice(-2);
        var getEndDate = end_date_ob_month + "/" + end_date_ob_date + "/" + end_date_ob_year;
        console.log("show first date: " + getStartDate + "  ,  " + "show second date:" + getEndDate);
        var weeks = this.calculateBannerNumberOfWeeks(getStartDate, getEndDate);
        console.log("show weeks:" + weeks);
        return Math.abs(weeks);
    };
    SecondpageadvertisementPage.prototype.weeksBetween = function (d1, d2) {
        return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
    };
    SecondpageadvertisementPage.prototype.selectNoOfWeeksType = function (data) {
        this.selectedWeek = data;
        localStorage.setItem("boostStatus", '0');
        this.checkBoostStatus = localStorage.getItem("boostStatus");
        this.finalCalculation = 7 + ((data - 1) * 5);
        this.totalCalculation = this.finalCalculation;
        this.endDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY');
        var startDateTimeStamp = this.toTimestamp(this.todayDate);
        var endDateTimeStamp = this.toTimestamp(this.endDate);
        this.fromDateTimestamp = startDateTimeStamp;
        this.toDateTimestamp = endDateTimeStamp;
        console.log("show next date:" + moment__WEBPACK_IMPORTED_MODULE_5__(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY'));
    };
    SecondpageadvertisementPage.prototype.calculateFinal = function () {
        this.checkBoostStatus = localStorage.getItem("boostStatus");
        if (this.checkBoostStatus == '0') {
            this.checkBoostStatus = '1';
            this.totalCalculation = this.finalCalculation + 100;
            localStorage.setItem("boostStatus", '1');
            this.updateBoost = localStorage.getItem("bannerId");
            // if(this.updateBoost == undefined || this.updateBoost == "" || this.updateBoost == null){
            //   this.postBanner(this.getData.categoryId);
            // }else{
            // this.updateBanner(this.getData.categoryId);
            // }
        }
        else {
            this.checkBoostStatus = '0';
            this.totalCalculation = this.totalCalculation - 100;
            localStorage.setItem("boostStatus", '0');
        }
    };
    SecondpageadvertisementPage.prototype.postBanner = function (id) {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var send_date = {};
        send_date['image'] = this.bannerImage;
        send_date['title'] = this.getData.title;
        send_date['description'] = this.getData.description;
        send_date['startDateTime'] = this.fromDateTimestamp;
        send_date['endDateTime'] = this.toDateTimestamp;
        send_date['lat'] = this.getData.lattitude;
        send_date['lng'] = this.getData.longitude;
        send_date['isActive'] = 1;
        send_date['city'] = this.getData.address;
        send_date['advertisementId'] = this.advertisementId;
        send_date['userId'] = this.usersId;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "category/" + id + "/banners";
        this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
            // this.presentToast(MyResponse);
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            // this.presentToast("Please try again.")
        });
    };
    SecondpageadvertisementPage.prototype.updateBanner = function (categoryId) {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var send_date = {};
        send_date['image'] = this.bannerImage;
        send_date['title'] = this.getData.title;
        send_date['description'] = this.getData.description;
        send_date['startDateTime'] = this.fromDateTimestamp;
        send_date['endDateTime'] = this.toDateTimestamp;
        send_date['lat'] = this.getData.lattitude;
        send_date['lng'] = this.getData.longitude;
        send_date['isActive'] = 1;
        send_date['city'] = this.getData.address;
        send_date['advertisementId'] = this.advertisementId;
        send_date['userId'] = this.usersId;
        var getBannerId = localStorage.getItem("bannerId");
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "category/" + categoryId + "/banners/" + getBannerId;
        this.apiCall.put(url, send_date).subscribe(function (MyResponse) {
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
        });
    };
    SecondpageadvertisementPage.prototype.submmitAdvertisementData = function (data) {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        if (this.toDateTimestamp == undefined || this.toDateTimestamp == null || this.toDateTimestamp == NaN) {
            this.presentToast("Please select weeks");
        }
        else {
            if (this.fromDateTimestamp == undefined || this.fromDateTimestamp == null) {
                this.presentToast("Please select weeks");
            }
            else {
                var send_date = {};
                send_date['title'] = this.getData.title;
                send_date['description'] = this.getData.description;
                send_date['price'] = this.getData.price;
                send_date['latitude'] = this.getData.lattitude;
                send_date['longitude'] = this.getData.longitude;
                send_date['address'] = this.getData.address;
                send_date['gender'] = this.getData.gender;
                send_date['languages'] = this.getData.languages;
                send_date['email'] = this.getData.email;
                send_date['mobile'] = this.getData.contact;
                send_date['categoryId'] = this.getData.categoryId;
                send_date['startDateTime'] = this.fromDateTimeAd;
                send_date['endDateTime'] = this.toDateTimeAd;
                send_date['isActive'] = 1;
                send_date['images'] = this.getData.images;
                send_date['countryCode'] = this.getData.countryCode;
                // send_date['transaction'] = "credited";
                this.usersId = localStorage.getItem("userId");
                if (this.advertisementStatus == "post") {
                    var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "users/" + this.usersId + "/advertisements";
                    this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
                        _this.advertisementId = MyResponse['result']['id'];
                        localStorage.setItem("categoryId", _this.getData.categoryId);
                        _this.presentToast("Advertisement posted successfully.");
                        if (_this.checkBoostStatus == '1') {
                            _this.postBanner(_this.getData.categoryId);
                        }
                        _this.router.navigate(['/home', { categoryId: _this.getData.categoryId }]);
                        _this.loader.showBlockingLoaderAuth();
                    }, function (error) {
                        _this.loader.hideBlockingLoaderAuth();
                        _this.presentToast("Please try again.");
                    });
                }
                else {
                    var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "users/" + this.usersId + "/advertisements/" + this.advertisementId;
                    this.apiCall.put(url, send_date).subscribe(function (MyResponse) {
                        localStorage.setItem("categoryId", _this.getData.categoryId);
                        _this.presentToast("Advertisement updated successfully.");
                        // this.getAllBanner();
                        if (_this.checkBoostStatus == '1') {
                            _this.updateBanner(_this.getData.categoryId);
                        }
                        else {
                            _this.postBanner(_this.getData.categoryId);
                        }
                        _this.router.navigate(['/favourite', { categoryId: _this.getData.categoryId }]);
                        _this.loader.showBlockingLoaderAuth();
                    }, function (error) {
                        _this.loader.hideBlockingLoaderAuth();
                        _this.presentToast("Please try again.");
                    });
                }
            }
        }
    };
    SecondpageadvertisementPage.prototype.getAllBanner = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        this.filterObject = {};
        this.filterObject['advertisementId'] = this.advertisementId;
        this.filterObject['userId'] = this.usersId;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "category/" + this.getData.categoryId + "/banners?" + "filters=" + JSON.stringify(this.filterObject);
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.bannerArray = MyResponse['result']['list'];
            if (MyResponse['result']['count'] > 0) {
                _this.checkBoostStatus = '1';
                var getBannerId = MyResponse['result']['list'][0]['id'];
                _this.fromDateTimestamp = MyResponse['result']['list'][0]['startDateTime'];
                _this.toDateTimestamp = MyResponse['result']['list'][0]['endDateTime'];
                localStorage.setItem("bannerId", getBannerId);
                _this.selectedWeek = _this.getBannerDate(_this.fromDateTimestamp, _this.toDateTimestamp);
                console.log("selected banner week show:" + _this.selectedWeek);
                //   console.log("update banner API");
                //  this.updateBanner(this.getData.categoryId, getBannerId);
            }
            else {
                console.log("post bannee API");
                _this.checkBoostStatus = '0';
                // this.postBanner(this.getData.categoryId);
            }
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
        });
    };
    SecondpageadvertisementPage.prototype.presentToast = function (message) {
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
    SecondpageadvertisementPage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    SecondpageadvertisementPage.prototype.postAdvertisement = function () {
        this.router.navigate(['/postadvertisement']);
        // this.router.navigate(['/secondpageadvertisement']);
    };
    SecondpageadvertisementPage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    SecondpageadvertisementPage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    SecondpageadvertisementPage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    SecondpageadvertisementPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    SecondpageadvertisementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-secondpageadvertisement',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./secondpageadvertisement.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/secondpageadvertisement/secondpageadvertisement.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./secondpageadvertisement.page.scss */ "./src/app/pages/secondpageadvertisement/secondpageadvertisement.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], SecondpageadvertisementPage);
    return SecondpageadvertisementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-secondpageadvertisement-secondpageadvertisement-module.js.map