(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-postadvertisement-postadvertisement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/postadvertisement/postadvertisement.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/postadvertisement/postadvertisement.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"3\">\n        <label style=\"color:white; font-size:17px; margin-left:10px\">LOGO</label>\n      </ion-col>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"3\">\n        <label style=\"color:white;margin-right:10px;font-size:17px;\">Pune</label>\n        <mat-icon style=\"width:15px;height:18px; color:white;position:fixed;right:10\">room</mat-icon>\n       \n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  \n<ion-content>\n\n  <form #userForm=\"ngForm\" style=\"width:100%\">\n \n  \n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:20px\">\n    <mat-form-field style=\"width:96%;\" appearance=\"outline\">\n      <mat-label>Title</mat-label>\n          <input matInput class=\"form-control\" type=\"text\" name=\"title\" [(ngModel)]=\"advertisementModel.title\" #title=\"ngModel\"\n            align=\"center\" required pattern=\"[a-zA-Z0-9,.  ]+$\">\n            <mat-error>\n              <div class=\"form-group\" style=\"margin-bottom:10px\">\n                <div *ngIf=\"title.invalid && (title.dirty || title.touched)\">\n                  Title Is Requird\n                </div>\n              </div>\n            </mat-error>\n    </mat-form-field>\n  </div>\n\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:5px\">\n    <mat-form-field style=\"width:96%\" appearance=\"outline\">\n      <mat-label>Description</mat-label>\n          <input matInput class=\"form-control\" type=\"text\" name=\"description\" [(ngModel)]=\"advertisementModel.description\" #description=\"ngModel\"\n            align=\"center\" required pattern=\"[a-zA-Z0-9,.  ]+$\">\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"description.invalid && (description.dirty || description.touched)\">\n                  Description Is Requird\n                </div>\n              </div>\n            </mat-error>\n    </mat-form-field>\n  </div>\n</form>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:5px\">\n  <mat-form-field style=\"width:96%\" appearance=\"outline\">\n    <mat-label>Select Category</mat-label>\n    <select matNativeControl required #categorytype (change)=\"selectCategoryType(categorytype.value)\" [(ngModel)]=\"advertisementModel.categoryType\">\n      <option *ngFor=\"let type of categoryArray\" [value]=\"type.id\"> {{type.name}}</option>\n    </select>\n  </mat-form-field>\n</div>\n\n\n\n<ion-row style=\"border: 1px solid #d3d5da;border-radius: 5px;height:50px; padding-left:8px; width:96%; margin-left: 2% ; margin-right: 2%; margin-top:5px\">\n  <ion-col size=\"4\" fxLayoutAlign=\"start center\">\n<label fxLayoutAlign=\"start center\">Gender</label>\n\n  </ion-col>\n\n  <ion-col size=\"8\" fxLayoutAlign=\"center center\">\n    <ion-radio-group (ionChange)=\"radioGroupChange($event)\">\n\n    <div fxLayout=\"row\">\n        <div style=\"margin-right:20px\" fxLayoutAlign=\"center center\">\n          <ion-radio fxLayoutAlign=\"center center\" slot=\"start\" value=\"male\"></ion-radio>\n          <ion-label fxLayoutAlign=\"center center\" style=\"margin-left:10px\">Male</ion-label>\n        </div>\n  \n        <div fxLayoutAlign=\"center center\">\n          <ion-radio slot=\"start\" value=\"female\"></ion-radio>\n        <ion-label style=\"margin-left:10px\">Female</ion-label>\n        \n      </div>\n     \n    </div>\n  </ion-radio-group>\n\n    <!-- <ion-item>\n      <ion-label>Male</ion-label>\n      <ion-radio slot=\"start\" value=\"male\"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Female</ion-label>\n      <ion-radio slot=\"start\" value=\"female\"></ion-radio>\n    </ion-item> -->\n  </ion-col>\n</ion-row>\n\n\n\n\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:25px\">\n  <mat-form-field style=\"width:96%; margin-left: 2% ; margin-right: 2%;\" appearance=\"outline\">\n    <mat-label style=\"color:black; background-color: white;\">Email</mat-label>\n    <input matInput class=\"form-control \" name=\"email\" [(ngModel)]=\"advertisementModel.email\" #email=\"ngModel\"\n      pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" />\n    <mat-error>\n      <div class=\"form-group\">\n        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" >\n          Email Is Requird\n        </div>\n      </div>\n    </mat-error>\n\n  </mat-form-field>\n</div>\n\n\n<div fxLayout=\"row\" fxLayoutAlign=\"  center center\" style=\"width:100%;margin-top:5px\">\n  <mat-form-field style=\"width:96%; margin-left: 2% ; margin-right: 2%;\" appearance=\"outline\">\n        <mat-label>Address</mat-label>\n        <input matInput placeholder=\"Location\" [(ngModel)]=\"advertisementModel.address\" ngx-google-places-autocomplete\n          [options]='options' #placesRef=\"ngx-places\" name=\"city\" required pattern=\"[a-zA-Z0-9,.  ]+$\" \n          (onAddressChange)=\"handleAddressChange($event)\">\n          <!-- <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"address.invalid && (address.dirty || address.touched)\">\n                Address Is Requird\n              </div>\n            </div>\n          </mat-error> -->\n      </mat-form-field>\n</div>\n\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:5px\">\n    <mat-form-field style=\"width:96%;\" appearance=\"outline\">\n    <mat-label>Languages</mat-label>\n      <mat-select \n      name=\"year\" \n      (selectionChange)=\"selectedChanged(selectedLanguages)\"\n      class=\"filter-select\" \n      [(ngModel)]=\"selectedLanguages\" \n      [compareWith]=\"equals\"\n      multiple \n      #yearSelect=\"ngModel\">\n        <!-- <mat-option disabled=\"disabled\" class=\"filter-option\">\n          <input type=\"checkbox\"(click)=\"selectAll(checkAll.checked, yearSelect, years)\" #checkAll>\n        </mat-option> -->\n        <mat-option *ngFor=\"let year of languageArray\" [value]=\"year.name\">\n          {{year.name}}\n        </mat-option>\n      </mat-select>\n  </mat-form-field>\n</div>\n\n<!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-bottom:15%\">\n  <mat-form-field style=\"width:96%\" appearance=\"outline\">\n    <mat-label>Languages you know</mat-label>\n        <input matInput class=\"form-control\" type=\"text\" name=\"languages\" [(ngModel)]=\"advertisementModel.languages\" #languages=\"ngModel\"\n          align=\"center\" required pattern=\"[a-zA-Z0-9,.  ]+$\">\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"languages.invalid && (languages.dirty || languages.touched)\">\n                Languages Is Requird\n              </div>\n            </div>\n          </mat-error>\n  </mat-form-field>\n</div> -->\n\n\n\n    <button mat-raised-button class=\"loginButton\" [disabled]=\"email.invalid || description.invalid || title.invalid\"\n      (click)=\"addAdvertisementData(advertisementModel)\"><b>Next</b></button>\n\n  <!-- </div> -->\n\n  <div class=\"cl_bottom_fix\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n      <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n      <ion-icon name=\"document\" class=\"cl_bottom_nav_css\" (click)=\"openChatList()\"></ion-icon>\n      <ion-icon name=\"add-circle\" class=\"cl_post_css\" (click)=\"postAdvertisement()\">\n      </ion-icon>\n      <ion-icon name=\"heart\" class=\"cl_bottom_nav_css\" (click)=\"openFavourite()\"></ion-icon>\n      <ion-icon name=\"person\" class=\"cl_bottom_nav_css\" (click)=\"openProfile()\"></ion-icon>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/postadvertisement/postadvertisement-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/postadvertisement/postadvertisement-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PostadvertisementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostadvertisementPageRoutingModule", function() { return PostadvertisementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _postadvertisement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postadvertisement.page */ "./src/app/pages/postadvertisement/postadvertisement.page.ts");




var routes = [
    {
        path: '',
        component: _postadvertisement_page__WEBPACK_IMPORTED_MODULE_3__["PostadvertisementPage"]
    }
];
var PostadvertisementPageRoutingModule = /** @class */ (function () {
    function PostadvertisementPageRoutingModule() {
    }
    PostadvertisementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PostadvertisementPageRoutingModule);
    return PostadvertisementPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/postadvertisement/postadvertisement.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/postadvertisement/postadvertisement.module.ts ***!
  \*********************************************************************/
/*! exports provided: PostadvertisementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostadvertisementPageModule", function() { return PostadvertisementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _postadvertisement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postadvertisement-routing.module */ "./src/app/pages/postadvertisement/postadvertisement-routing.module.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _postadvertisement_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postadvertisement.page */ "./src/app/pages/postadvertisement/postadvertisement.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");










var PostadvertisementPageModule = /** @class */ (function () {
    function PostadvertisementPageModule() {
    }
    PostadvertisementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["GooglePlaceModule"],
                _postadvertisement_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostadvertisementPageRoutingModule"]
            ],
            declarations: [_postadvertisement_page__WEBPACK_IMPORTED_MODULE_7__["PostadvertisementPage"]]
        })
    ], PostadvertisementPageModule);
    return PostadvertisementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/postadvertisement/postadvertisement.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/postadvertisement/postadvertisement.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: #f1f4f9;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.loginButton {\n  background-color: #152a3f;\n  color: white;\n  width: 28%;\n  margin-left: 35%;\n  margin-right: 35%;\n  margin-top: 5%;\n  padding-top: 5px;\n  margin-bottom: 15%;\n  padding-bottom: 5px;\n  font-size: 18px;\n}\n\n.cl_bottom_nav_css {\n  width: 30px;\n  height: 30px;\n  color: gray;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  height: 50px;\n  width: 100%;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 30px;\n  height: 30px;\n  color: #f76161;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9wb3N0YWR2ZXJ0aXNlbWVudC9wb3N0YWR2ZXJ0aXNlbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3RhZHZlcnRpc2VtZW50L3Bvc3RhZHZlcnRpc2VtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FER0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNGLGVBQUE7QUNESjs7QURNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0hKOztBRE1FO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0MsV0FBQTtFQUNDLHVCQUFBO0FDSE47O0FETUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RhZHZlcnRpc2VtZW50L3Bvc3RhZHZlcnRpc2VtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1hc3RlcnMge1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjRmOTtcbiAgfVxuXG4gIC5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmNsLWJhY2stYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nJykgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cblxuLmxvZ2luQnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTJhM2Y7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOjI4JTtcbiAgICAgbWFyZ2luLWxlZnQ6MzUlOyBcbiAgICAgbWFyZ2luLXJpZ2h0OjM1JTtcbiAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICAgIHBhZGRpbmctdG9wOjVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206MTUlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDVweDsgXG4gICAgZm9udC1zaXplOjE4cHg7XG4gIH1cblxuXG5cbiAgLmNsX2JvdHRvbV9uYXZfY3Nze1xuICAgIHdpZHRoOjMwcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgY29sb3I6Z3JheTtcbiAgfVxuICBcbiAgLmNsX2JvdHRvbV9maXh7XG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICBib3R0b206MHB4O1xuICAgIGhlaWdodDo1MHB4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuY2xfcG9zdF9jc3N7XG4gICAgd2lkdGg6MzBweDtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBjb2xvcjpyZ2IoMjQ3LCA5NywgOTcpO1xuICB9XG5cbiAgLy8gaW9uLWNvbnRlbnR7XG4gIC8vICAgLS1iYWNrZ3JvdW5kOiAjZjFmNGY5ICFpbXBvcnRhbnQ7ICAgXG4gIC8vIH1cbiAgXG5cbi8vIDo6bmctZGVlcCB7XG5cbi8vICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4vLyAgIH1cbi8vIH0iLCIubWFzdGVycyB7XG4gIC0tYmFja2dyb3VuZDogI2YxZjRmOTtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5sb2dpbkJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTJhM2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDI4JTtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzNSU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsX2JvdHRvbV9uYXZfY3NzIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5jbF9ib3R0b21fZml4IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2NzcyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZjc2MTYxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/postadvertisement/postadvertisement.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/postadvertisement/postadvertisement.page.ts ***!
  \*******************************************************************/
/*! exports provided: PostadvertisementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostadvertisementPage", function() { return PostadvertisementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");







var PostadvertisementPage = /** @class */ (function () {
    function PostadvertisementPage(router, apiCall, toast, changeDetectorRef) {
        this.router = router;
        this.apiCall = apiCall;
        this.toast = toast;
        this.changeDetectorRef = changeDetectorRef;
        // loc: any = {};
        this.languagesArray = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.advertisementModel = {};
        this.categoryArray = [
            {
                "categoryName": "abc",
                "categoryId": "1"
            },
            {
                "categoryName": "abcd",
                "categoryId": "2"
            },
            {
                "categoryName": "abce",
                "categoryId": "3"
            },
            {
                "categoryName": "abcf",
                "categoryId": "4"
            }
        ];
        this.genderArray = [
            {
                "gender": "Male",
                "genderId": "0"
            },
            {
                "gender": "Female",
                "genderId": "1"
            }
        ];
    }
    //toCheck: boolean =  false;
    PostadvertisementPage.prototype.equals = function (objOne, objTwo) {
        if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
            return objOne.id === objTwo.id;
        }
    };
    PostadvertisementPage.prototype.selectAll = function (checkAll, select, values) {
        console.log("selected languages:" + select);
        console.log("selected values:" + values);
        console.log("selected values:" + this.selectedLanguages);
        if (checkAll) {
            select.update.emit(values);
        }
        else {
            select.update.emit([]);
        }
    };
    PostadvertisementPage.prototype.ngOnInit = function () {
        this.getCategory();
        this.languageArray = [
            { id: 1, name: "English" },
            { id: 2, name: "Hindi" },
            { id: 3, name: "Marathi" },
            { id: 4, name: "Gujrati" },
            { id: 5, name: "Bangali" }
        ];
    };
    PostadvertisementPage.prototype.getCategory = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "category/" + 0 + "/sub-category";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.categoryArray = MyResponse['result']['list'];
        }, function (error) {
        });
    };
    PostadvertisementPage.prototype.addAdvertisementData = function (data) {
        // category, languages, gender
        // let languageArray = data.languages;
        // this.languagesArray = languageArray.split(',');
        if (this.address == undefined || this.address == null || this.address == "") {
            this.presentToast("Please enter address");
        }
        else {
            if (this.languagesArray.length == 0) {
                this.presentToast("Please select languages");
            }
            else {
                if (this.advertisementModel['gender'] == '0' || this.advertisementModel['gender'] == '1') {
                    if (this.categoryId == undefined || this.categoryId == null || this.categoryId == "") {
                        this.presentToast("Please select category id");
                    }
                    else {
                        var advertisemntInfo = {
                            "title": data.title,
                            "description": data.description,
                            "lattitude": this.lattitude,
                            "longitude": this.longitude,
                            "address": this.address,
                            "gender": this.advertisementModel['gender'],
                            "languages": this.languagesArray,
                            "email": this.advertisementModel['email'],
                            "categoryId": this.categoryId
                        };
                        console.log("data:" + JSON.stringify(advertisemntInfo));
                        this.router.navigate(['/nextadvertisement', { advertisementData: JSON.stringify(advertisemntInfo) }]);
                    }
                }
                else {
                    this.presentToast("Please select gender");
                }
            }
        }
    };
    PostadvertisementPage.prototype.radioGroupChange = function (event) {
        console.log("radioGroupChange", event.detail);
        this.selectedRadioGroup = event.detail.value;
        if (this.selectedRadioGroup == 'male') {
            this.advertisementModel['gender'] = 0;
        }
        else if (this.selectedRadioGroup == 'female') {
            this.advertisementModel['gender'] = 1;
        }
        else {
            this.advertisementModel['gender'] = 1;
        }
    };
    PostadvertisementPage.prototype.presentToast = function (message) {
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
    PostadvertisementPage.prototype.handleAddressChange = function (data) {
        console.log("Address Data", data);
        this.lattitude = data.geometry.location.lat();
        this.longitude = data.geometry.location.lng();
        console.log("Address Data lattitude one::", this.lattitude);
        console.log("Address Data longitude one::", this.longitude);
        console.log("lat", this.lattitude, this.longitude);
        var string = "";
        string = data['formatted_address'];
        var arr = [];
        var str = "";
        var ss = [];
        arr = string.split(",");
        for (var index = arr.length - 1; index >= 0; index--) {
            console.log(index, "data ", arr[index]);
            this.advertisementModel['landmark'] = arr[2];
            this.advertisementModel['address'] = data.vicinity;
            this.advertisementModel['location'] = data.name;
            this.countryName = arr[arr.length - 1] != null ? arr[arr.length - 1] : "";
            str = arr[arr.length - 2] != null ? arr[arr.length - 2] : "";
            var statestr = str.split(' ');
            ss = statestr;
            this.stateName = ss[1];
            this.pincode = ss[2];
            this.cityName = arr[arr.length - 3] != null ? arr[arr.length - 3] : "";
            this.changeDetectorRef.detectChanges();
        }
        console.log(this.cityName, this.stateName, this.countryName, this.pincode, this.advertisementModel['landmark'], this.advertisementModel['location']);
        this.address = this.advertisementModel['landmark'], this.advertisementModel['location'], this.cityName, this.countryName, this.pincode;
    };
    PostadvertisementPage.prototype.selectCategoryType = function (data) {
        // alert("check data:"+data);
        console.log("show id:" + data);
        this.categoryId = data;
    };
    PostadvertisementPage.prototype.selectGenderType = function (id) {
        this.advertisementModel['gender'] = id;
    };
    PostadvertisementPage.prototype.selectedChanged = function (selectedLanguage) {
        // alert("selectedLanguage:"+JSON.stringify(selectedLanguage));
        this.languagesArray = (selectedLanguage);
    };
    PostadvertisementPage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    PostadvertisementPage.prototype.postAdvertisement = function () {
        this.router.navigate(['/postadvertisement']);
        // this.router.navigate(['/secondpageadvertisement']);
    };
    PostadvertisementPage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    PostadvertisementPage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    PostadvertisementPage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    PostadvertisementPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    PostadvertisementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postadvertisement',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./postadvertisement.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/postadvertisement/postadvertisement.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./postadvertisement.page.scss */ "./src/app/pages/postadvertisement/postadvertisement.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PostadvertisementPage);
    return PostadvertisementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-postadvertisement-postadvertisement-module.js.map