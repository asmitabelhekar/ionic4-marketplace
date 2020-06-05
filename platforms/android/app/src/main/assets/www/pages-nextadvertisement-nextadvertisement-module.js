(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nextadvertisement-nextadvertisement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nextadvertisement/nextadvertisement.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nextadvertisement/nextadvertisement.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"10\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">Advertisement</ion-label>\n      </ion-col>\n    \n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <form #userForm=\"ngForm\" style=\"width:100%;margin-top:10px\">\n \n\n<div fxLayout=\"row\" fxLayoutAlign=\"  center center\" style=\"width:100%;margin-top:5px\">\n  <mat-form-field style=\"width:96%; margin-left: 2% ; margin-right: 2%;margin-top:10px\" appearance=\"outline\">\n        <mat-label>Address</mat-label>\n        <input matInput placeholder=\"Location\" [(ngModel)]=\"advertisementModel.address\" ngx-google-places-autocomplete\n          [options]='options' #placesRef=\"ngx-places\" name=\"city\" required  \n          (onAddressChange)=\"handleAddressChange($event)\">\n         \n      </mat-form-field>\n</div>\n \n<!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;\">\n  <mat-form-field style=\"width:96%; margin-top:10px\" appearance=\"outline\">\n    <mat-label>Mobile</mat-label>\n        <input matInput class=\"form-control\" type=\"tel\" name=\"contact\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"advertisementModel.contact\" #contact=\"ngModel\"\n          align=\"center\" required pattern=\"[0-9]+$\">\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"contact.invalid && (contact.dirty || contact.touched)\">\n                Mobile Is Requird\n              </div>\n            </div>\n          </mat-error>\n  </mat-form-field>\n</div> -->\n\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:5px\">\n  <mat-form-field style=\"width:96%\" appearance=\"outline\">\n    <mat-label>Price</mat-label>\n        <input matInput class=\"form-control\" type=\"number\" name=\"price\" [(ngModel)]=\"advertisementModel.price\" #price=\"ngModel\"\n          align=\"center\" required pattern=\"[0-9.]+$\">\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"price.invalid && (price.dirty || price.touched)\">\n                Price Is Requird\n              </div>\n            </div>\n          </mat-error>\n  </mat-form-field>\n</div>\n\n<h5 style=\"margin-top:15px; margin-left:10px\">Upload images</h5>\n<!-- <label style=\"margin-top:20px; margin-left:10px; color:black\"><b>Upload Images</b></label> -->\n<div class=\"cl_image_div\" fxLayout=\"row\">\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_first_column_img\" onclick=\"document.getElementById('image_upload1').click()\">\n  <ion-icon *ngIf=\"firstImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n  <h5 *ngIf=\"firstImage == '' \" align=\"center\">upload Image</h5>\n  <img *ngIf=\"firstImage != '' \" src=\"{{firstImage}}\" class=\"cl_display_img\" >\n</div>\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_second_column_img\" onclick=\"document.getElementById('image_upload2').click()\">\n  <ion-icon *ngIf=\"secondImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n  <h5 *ngIf=\"secondImage == '' \" align=\"center\">upload Image</h5>\n  <img *ngIf=\"secondImage != '' \" src=\"{{secondImage}}\" class=\"cl_display_img\">\n</div>\n</div>\n\n<div class=\"cl_image_div\" fxLayout=\"row\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_first_column_img\" onclick=\"document.getElementById('image_upload3').click()\">\n    <ion-icon *ngIf=\"thirdImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n    <h5 *ngIf=\"thirdImage == '' \" align=\"center\">upload Image</h5>\n    <img *ngIf=\"thirdImage != '' \" src=\"{{thirdImage}}\" class=\"cl_display_img\">\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_second_column_img\" onclick=\"document.getElementById('image_upload4').click()\">\n    <ion-icon *ngIf=\"fourthImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n    <h5 *ngIf=\"fourthImage == '' \" align=\"center\">upload Image</h5>\n    <img  *ngIf=\"fourthImage != '' \" src=\"{{fourthImage}}\" class=\"cl_display_img\">\n  </div>\n  </div>\n\n  <div class=\"cl_image_div\" fxLayout=\"row\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_first_column_img\" onclick=\"document.getElementById('image_upload5').click()\">\n      <ion-icon *ngIf=\"fifthImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n      <h5 *ngIf=\"fifthImage == '' \" align=\"center\">upload Image</h5>\n      <img *ngIf=\"fifthImage != '' \" src=\"{{fifthImage}}\" class=\"cl_display_img\" >\n    </div>\n  \n    </div>\n\n    <input style=\"display: none;\" id=\"image_upload1\" type=\"file\" (change)=\"detectEventGallery($event,0)\">\n    <input style=\"display: none;\" id=\"image_upload2\" type=\"file\" (change)=\"detectEventGallery($event,1)\">\n    <input style=\"display: none;\" id=\"image_upload3\" type=\"file\" (change)=\"detectEventGallery($event,2)\">\n    <input style=\"display: none;\" id=\"image_upload4\" type=\"file\" (change)=\"detectEventGallery($event,3)\">\n    <input style=\"display: none;\" id=\"image_upload5\" type=\"file\" (change)=\"detectEventGallery($event,4)\">\n\n\n<div style=\"margin-top:5%; margin-bottom:15%\">\n  <button [disabled]=\"price.invalid \" mat-raised-button class=\"nextButton\" (click)=\"next(advertisementModel)\">Next</button>\n</div>\n</form>\n\n<div class=\"cl_bottom_fix\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n      \n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n  (click)=\"home()\">\n  <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n  <label fxLayoutAlign=\"center center\" class=\"cl-text_font\">HOME</label>\n  </div>\n\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n  (click)=\"openChatList()\">\n  <ion-icon class=\"cl_bottom_nav_css\" name=\"document\" (click)=\"openChatList()\"></ion-icon>\n  <label fxLayoutAlign=\"center center\" class=\"cl_selected-text_font\">CHATS</label>\n  </div>\n\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n    (click)=\"postAdvertisement()\">\n  <ion-icon class=\"cl_bottom_nav_css\"  name=\"add-circle\" (click)=\"postAdvertisement()\">\n  </ion-icon>\n  <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">SELL</label>\n  </div>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n  (click)=\"openFavourite()\">\n  <ion-icon class=\"cl_post_css\" name=\"heart\"  (click)=\"openFavourite()\"></ion-icon>\n  <label fxLayoutAlign=\"center center\" class=\"cl_selected_text_font\">MY ADS</label>\n  </div>\n\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n    (click)=\"openProfile()\">\n    <ion-icon class=\"cl_bottom_nav_css\" name=\"person\"  (click)=\"openProfile()\"></ion-icon>\n    <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">PROFILE</label>\n  </div>\n\n</div>\n\n\n<!-- <div class=\"cl_bottom_fix\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n    <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n    <ion-icon name=\"document\" class=\"cl_bottom_nav_css\" (click)=\"openChatList()\"></ion-icon>\n    <ion-icon name=\"add-circle\" class=\"cl_post_css\" (click)=\"postAdvertisement()\">\n    </ion-icon>\n    <ion-icon name=\"heart\" class=\"cl_bottom_nav_css\" (click)=\"openFavourite()\"></ion-icon>\n    <ion-icon name=\"person\" class=\"cl_bottom_nav_css\" (click)=\"openProfile()\"></ion-icon>\n  </div>\n</div> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/nextadvertisement/nextadvertisement-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/nextadvertisement/nextadvertisement-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: NextadvertisementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextadvertisementPageRoutingModule", function() { return NextadvertisementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nextadvertisement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nextadvertisement.page */ "./src/app/pages/nextadvertisement/nextadvertisement.page.ts");




var routes = [
    {
        path: '',
        component: _nextadvertisement_page__WEBPACK_IMPORTED_MODULE_3__["NextadvertisementPage"]
    }
];
var NextadvertisementPageRoutingModule = /** @class */ (function () {
    function NextadvertisementPageRoutingModule() {
    }
    NextadvertisementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NextadvertisementPageRoutingModule);
    return NextadvertisementPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/nextadvertisement/nextadvertisement.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/nextadvertisement/nextadvertisement.module.ts ***!
  \*********************************************************************/
/*! exports provided: NextadvertisementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextadvertisementPageModule", function() { return NextadvertisementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _nextadvertisement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nextadvertisement-routing.module */ "./src/app/pages/nextadvertisement/nextadvertisement-routing.module.ts");
/* harmony import */ var _nextadvertisement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nextadvertisement.page */ "./src/app/pages/nextadvertisement/nextadvertisement.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__);











var NextadvertisementPageModule = /** @class */ (function () {
    function NextadvertisementPageModule() {
    }
    NextadvertisementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["GooglePlaceModule"],
                _nextadvertisement_routing_module__WEBPACK_IMPORTED_MODULE_5__["NextadvertisementPageRoutingModule"]
            ],
            declarations: [_nextadvertisement_page__WEBPACK_IMPORTED_MODULE_6__["NextadvertisementPage"]]
        })
    ], NextadvertisementPageModule);
    return NextadvertisementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/nextadvertisement/nextadvertisement.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/nextadvertisement/nextadvertisement.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: #f1f4f9;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  padding: 5px;\n  margin-top: -5px;\n}\n\n.nextButton {\n  background-color: #152a3f;\n  color: white;\n  width: 30%;\n  margin-left: 35%;\n  margin-right: 35%;\n  padding: 5px;\n  font-size: 18px;\n}\n\n.cl_image_div {\n  width: 100%;\n  height: 150px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 10px;\n}\n\n.cl_first_column_img {\n  width: 50%;\n  color: #b6b3b3;\n  height: 100%;\n  border: 1px solid #d4d1d1;\n  margin-right: 10px;\n  border-radius: 10px;\n}\n\n.cl_images {\n  width: 40%;\n  height: 40%;\n  color: #b6b3b3;\n}\n\n.cl_display_img {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n\n.cl_second_column_img {\n  width: 50%;\n  height: 100%;\n  color: #b6b3b3;\n  border: 1px solid #d4d1d1;\n  border-radius: 10px;\n}\n\n.cl_bottom_nav_css {\n  width: 26px;\n  height: 26px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 5px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 26px;\n  height: 26px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 11px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 11px;\n  color: #fb7645;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9uZXh0YWR2ZXJ0aXNlbWVudC9uZXh0YWR2ZXJ0aXNlbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25leHRhZHZlcnRpc2VtZW50L25leHRhZHZlcnRpc2VtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtFQUNDLFlBQUE7RUFDRixlQUFBO0FDREo7O0FETUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0MsbUJBQUE7RUFDQyxnQkFBQTtBQ0hSOztBRE1JO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSFA7O0FETUk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNITjs7QURNSTtFQUNFLFdBQUE7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7QUNIUDs7QURNSTtFQUNFLFVBQUE7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNDLHlCQUFBO0VBQ0MsbUJBQUE7QUNIVDs7QURPSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBR0EsV0FBQTtFQUNBLFdBQUE7RUFHQSx5QkFBQTtBQ1JOOztBRFdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNDLDZCQUFBO0VBQ0MsdUJBQUE7QUNSUjs7QURXSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFHQSx5QkFBQTtBQ1ZOOztBRGNJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDWE47O0FEY0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDWE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXh0YWR2ZXJ0aXNlbWVudC9uZXh0YWR2ZXJ0aXNlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXN0ZXJzIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG4gIH1cblxuICAuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uVGl0bGVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDotNXB4O1xuICB9XG5cblxuLm5leHRCdXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MmEzZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6MzAlO1xuICAgICBtYXJnaW4tbGVmdDozNSU7IFxuICAgICBtYXJnaW4tcmlnaHQ6MzUlO1xuICAgICAgcGFkZGluZzo1cHg7IFxuICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyByaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAuY2xfaW1hZ2VfZGl2e1xuICAgICAgd2lkdGg6MTAwJTsgXG4gICAgICBoZWlnaHQ6MTUwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICB9XG5cbiAgICAuY2xfZmlyc3RfY29sdW1uX2ltZ3tcbiAgICAgIHdpZHRoOjUwJTsgXG4gICAgICBjb2xvcjpyZ2IoMTgyLCAxNzksIDE3OSk7XG4gICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEyLCAyMDksIDIwOSk7XG4gICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIH1cblxuICAgIC5jbF9pbWFnZXN7XG4gICAgICB3aWR0aDo0MCU7IFxuICAgICAgaGVpZ2h0OjQwJTtcbiAgICAgIGNvbG9yOnJnYigxODIsIDE3OSwgMTc5KTtcbiAgICB9XG5cbiAgICAuY2xfZGlzcGxheV9pbWd7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgIGhlaWdodDoxMDAlOyBcbiAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgfVxuXG4gICAgLmNsX3NlY29uZF9jb2x1bW5faW1ne1xuICAgICAgd2lkdGg6NTAlO1xuICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgIGNvbG9yOnJnYigxODIsIDE3OSwgMTc5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMiwgMjA5LCAyMDkpO1xuICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIH1cblxuXG4gICAgLmNsX2JvdHRvbV9uYXZfY3Nze1xuICAgICAgd2lkdGg6MjZweDtcbiAgICAgIGhlaWdodDoyNnB4O1xuICAgICAgLy8gY29sb3I6Z3JheTtcbiAgICBcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBjb2xvcjpncmF5O1xuICAgICAgLy8gcGFkZGluZy10b3A6NXB4O1xuICAgICAgLy8gcGFkZGluZy1ib3R0b206NXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gICAgXG4gICAgLmNsX2JvdHRvbV9maXh7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgICAgYm90dG9tOjBweDtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBwYWRkaW5nOjVweDtcbiAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjZjFmNGY5O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgLmNsX3Bvc3RfY3Nze1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIHdpZHRoOjI2cHg7XG4gICAgICBoZWlnaHQ6MjZweDtcbiAgICAgIGNvbG9yOiAjZmI3NjQ1O1xuICAgICAgLy8gcGFkZGluZy10b3A6NXB4O1xuICAgICAgLy8gcGFkZGluZy1ib3R0b206NXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgXG4gICAgfVxuICAgIFxuICAgIC5jbF90ZXh0X2ZvbnR7XG4gICAgICBwYWRkaW5nLXRvcDo0cHg7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgfVxuICAgIFxuICAgIC5jbF9zZWxlY3RlZC10ZXh0X2ZvbnR7XG4gICAgICBwYWRkaW5nLXRvcDo0cHg7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBjb2xvcjogI2ZiNzY0NTtcbiAgICB9IiwiLm1hc3RlcnMge1xuICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4ubmV4dEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTJhM2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzNSU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2xfaW1hZ2VfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNsX2ZpcnN0X2NvbHVtbl9pbWcge1xuICB3aWR0aDogNTAlO1xuICBjb2xvcjogI2I2YjNiMztcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkMWQxO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jbF9pbWFnZXMge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgY29sb3I6ICNiNmIzYjM7XG59XG5cbi5jbF9kaXNwbGF5X2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jbF9zZWNvbmRfY29sdW1uX2ltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNiNmIzYjM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQxZDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jbF9ib3R0b21fbmF2X2NzcyB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjRmOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2NzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX3RleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICNmYjc2NDU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/nextadvertisement/nextadvertisement.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/nextadvertisement/nextadvertisement.page.ts ***!
  \*******************************************************************/
/*! exports provided: NextadvertisementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextadvertisementPage", function() { return NextadvertisementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");






var NextadvertisementPage = /** @class */ (function () {
    function NextadvertisementPage(activatedRoute, loader, router, changeDetectorRef, toast, apiCall) {
        this.activatedRoute = activatedRoute;
        this.loader = loader;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.toast = toast;
        this.apiCall = apiCall;
        this.firstImage = "";
        this.secondImage = "";
        this.thirdImage = "";
        this.fourthImage = "";
        this.fifthImage = "";
        this.urls = [];
        this.advertisementModel = {};
        this.languagesArray = [];
        this.imageUrl = 0;
        this.advertisementObject = {};
        this.languageArray = [
            { id: 1, name: "English" },
            { id: 2, name: "Hindi" },
            { id: 3, name: "Marathi" },
            { id: 4, name: "Gujrati" },
            { id: 5, name: "Bangali" }
        ];
    }
    NextadvertisementPage.prototype.ngOnInit = function () {
        this.getData = JSON.parse(this.activatedRoute.snapshot.params['advertisementData']);
        console.log("next advertisement data:" + (this.getData.title));
        this.postStatus = localStorage.getItem("postStatus");
        if (this.postStatus == "1") {
            var advertisementDetail = localStorage.getItem("ADVERTISEMENTDATA");
            this.advertisementObject = JSON.parse(advertisementDetail);
            console.log("advertisementObject:" + this.advertisementObject['address']);
            this.advertisementModel['address'] = this.advertisementObject['address'];
            this.advertisementModel['price'] = this.advertisementObject['price'];
            this.advertisementModel['images'] = this.advertisementObject['images'];
            this.lattitude = this.advertisementObject['latitude'];
            this.longitude = this.advertisementObject['longitude'];
            this.urls = [];
            // for(let i= 0;i < this.advertisementModel['images'].length; i++){
            if (this.advertisementModel['images'][0] == undefined) {
                this.firstImage = "";
            }
            else {
                this.firstImage = this.advertisementModel['images'][0];
                this.urls.push(this.firstImage);
            }
            if (this.advertisementModel['images'][1] == undefined) {
                this.secondImage = "";
            }
            else {
                this.secondImage = this.advertisementModel['images'][1];
                this.urls.push(this.secondImage);
            }
            if (this.advertisementModel['images'][2] == undefined) {
                this.thirdImage = "";
            }
            else {
                this.thirdImage = this.advertisementModel['images'][2];
                this.urls.push(this.thirdImage);
            }
            if (this.advertisementModel['images'][3] == undefined) {
                this.fourthImage = "";
            }
            else {
                this.fourthImage = this.advertisementModel['images'][3];
                this.urls.push(this.fourthImage);
            }
            if (this.advertisementModel['images'][4] == undefined) {
                this.fifthImage = "";
            }
            else {
                this.fifthImage = this.advertisementModel['images'][4];
                this.urls.push(this.fifthImage);
            }
            // this.secondImage = this.advertisementModel['images'][1];
            // this.thirdImage = this.advertisementModel['images'][2];
            // this.fourthImage = this.advertisementModel['images'][3];
            // this.fifthImage = this.advertisementModel['images'][4];
            // }
            console.log("first image:" + this.firstImage);
            console.log("secondImage image:" + this.secondImage);
            console.log("thirdImage image:" + this.thirdImage);
            console.log("fourthImage image:" + this.fourthImage);
            console.log("fifthImage image:" + this.fifthImage);
        }
    };
    NextadvertisementPage.prototype.goBackword = function () {
        window.history.back();
    };
    NextadvertisementPage.prototype.detectEventGallery = function (event, index) {
        this.loader.showBlockingLoaderAuth();
        console.log(event);
        var files = event.target.files;
        console.log(files);
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                };
                console.log(file);
                this.fileToUpload = file;
                reader.readAsDataURL(this.fileToUpload);
            }
            if (index == 0) {
                this.handleFirstFileInput(this.fileToUpload);
            }
            else if (index == 1) {
                this.handleSecondFileInput(this.fileToUpload);
            }
            else if (index == 2) {
                this.handleThirdFileInput(this.fileToUpload);
            }
            else if (index == 3) {
                this.handleFourthFileInput(this.fileToUpload);
            }
            else if (index == 4) {
                this.handleFifthFileInput(this.fileToUpload);
            }
            else {
            }
        }
        console.log("file uploaded::" + JSON.stringify(this.fileToUpload));
    };
    NextadvertisementPage.prototype.handleFirstFileInput = function (files) {
        var _this = this;
        if (this.fileToUpload == null || this.fileToUpload == undefined) {
        }
        var url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
        // let url = "http://3.6.135.154:9000/api/" + "upload-image";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            // this.urls.push(MyResponse['result'][0])
            _this.urls[0] = MyResponse['result'][0];
            if (_this.urls.length > 4) {
                _this.imageUrl = 0;
            }
            else {
                _this.imageUrl = 1;
            }
            _this.loader.hideBlockingLoaderAuth();
            _this.firstImage = MyResponse['result'][0];
            console.log("print url resonce:" + _this.firstImage);
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            console.log(error);
        });
    };
    NextadvertisementPage.prototype.handleSecondFileInput = function (files) {
        var _this = this;
        if (this.fileToUpload == null || this.fileToUpload == undefined) {
        }
        var url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
        // let url = "http://3.6.135.154:9000/api/" + "upload-image";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            // this.urls.push(MyResponse['result'][0])
            _this.urls[1] = MyResponse['result'][0];
            if (_this.urls.length > 4) {
                _this.imageUrl = 0;
            }
            else {
                _this.imageUrl = 1;
            }
            _this.loader.hideBlockingLoaderAuth();
            _this.secondImage = MyResponse['result'][0];
            console.log("print url secondImage:" + _this.secondImage);
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            console.log(error);
        });
    };
    NextadvertisementPage.prototype.handleThirdFileInput = function (files) {
        var _this = this;
        if (this.fileToUpload == null || this.fileToUpload == undefined) {
        }
        var url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
        // let url = "http://3.6.135.154:9000/api/" + "upload-image";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            _this.urls[2] = MyResponse['result'][0];
            // this.urls.push(MyResponse['result'][0])
            if (_this.urls.length > 4) {
                _this.imageUrl = 0;
            }
            else {
                _this.imageUrl = 1;
            }
            _this.loader.hideBlockingLoaderAuth();
            _this.thirdImage = MyResponse['result'][0];
            console.log("print url thirdImage:" + _this.thirdImage);
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            console.log(error);
        });
    };
    NextadvertisementPage.prototype.handleFourthFileInput = function (files) {
        var _this = this;
        if (this.fileToUpload == null || this.fileToUpload == undefined) {
        }
        var url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
        // let url = "http://3.6.135.154:9000/api/" + "upload-image";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            // this.urls.push(MyResponse['result'][0])
            _this.urls[3] = MyResponse['result'][0];
            if (_this.urls.length > 4) {
                _this.imageUrl = 0;
            }
            else {
                _this.imageUrl = 1;
            }
            _this.loader.hideBlockingLoaderAuth();
            _this.fourthImage = MyResponse['result'][0];
            console.log("print url fourthImage:" + _this.fourthImage);
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            console.log(error);
        });
    };
    NextadvertisementPage.prototype.handleFifthFileInput = function (files) {
        var _this = this;
        if (this.fileToUpload == null || this.fileToUpload == undefined) {
        }
        var url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
        // let url = "http://3.6.135.154:9000/api/" + "upload-image";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            // this.urls.push(MyResponse['result'][0])
            _this.urls[4] = MyResponse['result'][0];
            if (_this.urls.length > 4) {
                _this.imageUrl = 0;
            }
            else {
                _this.imageUrl = 1;
            }
            _this.loader.hideBlockingLoaderAuth();
            _this.fifthImage = MyResponse['result'][0];
            console.log("print url fifthImage:" + _this.fifthImage);
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            console.log(error);
        });
    };
    NextadvertisementPage.prototype.selectedChanged = function (selectedLanguage) {
        // alert("selectedLanguage:"+JSON.stringify(selectedLanguage));
        this.languagesArray = (selectedLanguage);
    };
    NextadvertisementPage.prototype.presentToast = function (message) {
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
    NextadvertisementPage.prototype.next = function () {
        if (this.urls.length == 0) {
            this.presentToast("Please upload images");
        }
        else {
            this.getNextData = {
                "title": this.getData.title,
                "description": this.getData.description,
                "lattitude": this.lattitude,
                "longitude": this.longitude,
                "address": this.advertisementModel['address'],
                "gender": this.getData.gender,
                "languages": this.getData.languages,
                "email": this.getData.email,
                "categoryId": this.getData.categoryId,
                "price": this.advertisementModel['price'],
                "contact": this.getData.contact,
                "images": this.urls,
                "countryCode": this.getData.countryCode
            };
            // alert("show data:"+this.getNextData);
            this.router.navigate(['/secondpageadvertisement', { FinalObject: JSON.stringify(this.getNextData) }]);
        }
    };
    // "lattitude": this.lattitude,
    // "longitude": this.longitude,
    // "address": this.address,
    NextadvertisementPage.prototype.handleAddressChange = function (data) {
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
    NextadvertisementPage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    NextadvertisementPage.prototype.postAdvertisement = function () {
        this.router.navigate(['/postadvertisement']);
        // this.router.navigate(['/secondpageadvertisement']);
    };
    NextadvertisementPage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    NextadvertisementPage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    NextadvertisementPage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    NextadvertisementPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    NextadvertisementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nextadvertisement',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nextadvertisement.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nextadvertisement/nextadvertisement.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nextadvertisement.page.scss */ "./src/app/pages/nextadvertisement/nextadvertisement.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], NextadvertisementPage);
    return NextadvertisementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-nextadvertisement-nextadvertisement-module.js.map