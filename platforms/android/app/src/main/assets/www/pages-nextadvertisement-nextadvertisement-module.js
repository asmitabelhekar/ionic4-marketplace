(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nextadvertisement-nextadvertisement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nextadvertisement/nextadvertisement.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nextadvertisement/nextadvertisement.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"10\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">Advertisement</ion-label>\n      </ion-col>\n    \n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <form #userForm=\"ngForm\" style=\"width:100%;margin-top:10px\">\n \n \n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;\">\n  <mat-form-field style=\"width:96%; margin-top:10px\" appearance=\"outline\">\n    <mat-label>Mobile</mat-label>\n        <input matInput class=\"form-control\" type=\"tel\" name=\"contact\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"advertisementModel.contact\" #contact=\"ngModel\"\n          align=\"center\" required pattern=\"[0-9]+$\">\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"contact.invalid && (contact.dirty || contact.touched)\">\n                Mobile Is Requird\n              </div>\n            </div>\n          </mat-error>\n  </mat-form-field>\n</div>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:5px\">\n  <mat-form-field style=\"width:96%\" appearance=\"outline\">\n    <mat-label>Price</mat-label>\n        <input matInput class=\"form-control\" type=\"number\" name=\"price\" [(ngModel)]=\"advertisementModel.price\" #price=\"ngModel\"\n          align=\"center\" required pattern=\"[0-9.]+$\">\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"price.invalid && (price.dirty || price.touched)\">\n                Price Is Requird\n              </div>\n            </div>\n          </mat-error>\n  </mat-form-field>\n</div>\n\n<h5 style=\"margin-top:15px; margin-left:10px\">Upload images</h5>\n<!-- <label style=\"margin-top:20px; margin-left:10px; color:black\"><b>Upload Images</b></label> -->\n<div class=\"cl_image_div\" fxLayout=\"row\">\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_first_column_img\" onclick=\"document.getElementById('image_upload1').click()\">\n  <ion-icon *ngIf=\"firstImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n  <h5 *ngIf=\"firstImage == '' \" align=\"center\">upload Image</h5>\n  <img *ngIf=\"firstImage != '' \" src=\"{{firstImage}}\" class=\"cl_display_img\" >\n</div>\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_second_column_img\" onclick=\"document.getElementById('image_upload2').click()\">\n  <ion-icon *ngIf=\"secondImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n  <h5 *ngIf=\"secondImage == '' \" align=\"center\">upload Image</h5>\n  <img *ngIf=\"secondImage != '' \" src=\"{{secondImage}}\" class=\"cl_display_img\">\n</div>\n</div>\n\n<div class=\"cl_image_div\" fxLayout=\"row\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_first_column_img\" onclick=\"document.getElementById('image_upload3').click()\">\n    <ion-icon *ngIf=\"thirdImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n    <h5 *ngIf=\"thirdImage == '' \" align=\"center\">upload Image</h5>\n    <img *ngIf=\"thirdImage != '' \" src=\"{{thirdImage}}\" class=\"cl_display_img\">\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_second_column_img\" onclick=\"document.getElementById('image_upload4').click()\">\n    <ion-icon *ngIf=\"fourthImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n    <h5 *ngIf=\"fourthImage == '' \" align=\"center\">upload Image</h5>\n    <img  *ngIf=\"fourthImage != '' \" src=\"{{fourthImage}}\" class=\"cl_display_img\">\n  </div>\n  </div>\n\n  <div class=\"cl_image_div\" fxLayout=\"row\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_first_column_img\" onclick=\"document.getElementById('image_upload5').click()\">\n      <ion-icon *ngIf=\"fifthImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n      <h5 *ngIf=\"fifthImage == '' \" align=\"center\">upload Image</h5>\n      <img *ngIf=\"fifthImage != '' \" src=\"{{fifthImage}}\" class=\"cl_display_img\" >\n    </div>\n  \n    </div>\n\n    <input style=\"display: none;\" id=\"image_upload1\" type=\"file\" (change)=\"detectEventGallery($event,0)\">\n    <input style=\"display: none;\" id=\"image_upload2\" type=\"file\" (change)=\"detectEventGallery($event,1)\">\n    <input style=\"display: none;\" id=\"image_upload3\" type=\"file\" (change)=\"detectEventGallery($event,2)\">\n    <input style=\"display: none;\" id=\"image_upload4\" type=\"file\" (change)=\"detectEventGallery($event,3)\">\n    <input style=\"display: none;\" id=\"image_upload5\" type=\"file\" (change)=\"detectEventGallery($event,4)\">\n\n\n<div style=\"margin-top:5%\">\n  <button [disabled]=\"price.invalid || contact.invalid\" mat-raised-button class=\"nextButton\" (click)=\"next(advertisementModel)\">Next</button>\n</div>\n</form>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: #f1f4f9;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  padding: 5px;\n  margin-top: -5px;\n}\n\n.nextButton {\n  background-color: #152a3f;\n  color: white;\n  width: 30%;\n  margin-left: 35%;\n  margin-right: 35%;\n  padding: 5px;\n  font-size: 18px;\n}\n\n.cl_image_div {\n  width: 100%;\n  height: 150px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 10px;\n}\n\n.cl_first_column_img {\n  width: 50%;\n  color: #b6b3b3;\n  height: 100%;\n  border: 1px solid #d4d1d1;\n  margin-right: 10px;\n  border-radius: 10px;\n}\n\n.cl_images {\n  width: 40%;\n  height: 40%;\n  color: #b6b3b3;\n}\n\n.cl_display_img {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n\n.cl_second_column_img {\n  width: 50%;\n  height: 100%;\n  color: #b6b3b3;\n  border: 1px solid #d4d1d1;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9uZXh0YWR2ZXJ0aXNlbWVudC9uZXh0YWR2ZXJ0aXNlbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25leHRhZHZlcnRpc2VtZW50L25leHRhZHZlcnRpc2VtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FER0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0MsWUFBQTtFQUNGLGVBQUE7QUNESjs7QURNSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQyxtQkFBQTtFQUNDLGdCQUFBO0FDSFI7O0FETUk7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNIUDs7QURNSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hOOztBRE1JO0VBQ0UsV0FBQTtFQUNDLFlBQUE7RUFDQSxtQkFBQTtBQ0hQOztBRE1JO0VBQ0UsVUFBQTtFQUNDLFlBQUE7RUFDQSxjQUFBO0VBQ0MseUJBQUE7RUFDQyxtQkFBQTtBQ0hUIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV4dGFkdmVydGlzZW1lbnQvbmV4dGFkdmVydGlzZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFzdGVycyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmNGY5O1xuICB9XG5cbiAgLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi10b3A6LTVweDtcbiAgfVxuXG5cbi5uZXh0QnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTJhM2Y7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOjMwJTtcbiAgICAgbWFyZ2luLWxlZnQ6MzUlOyBcbiAgICAgbWFyZ2luLXJpZ2h0OjM1JTtcbiAgICAgIHBhZGRpbmc6NXB4OyBcbiAgICBmb250LXNpemU6MThweDtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmNsX2ltYWdlX2RpdntcbiAgICAgIHdpZHRoOjEwMCU7IFxuICAgICAgaGVpZ2h0OjE1MHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgICAgcGFkZGluZy1yaWdodDoxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgfVxuXG4gICAgLmNsX2ZpcnN0X2NvbHVtbl9pbWd7XG4gICAgICB3aWR0aDo1MCU7IFxuICAgICAgY29sb3I6cmdiKDE4MiwgMTc5LCAxNzkpO1xuICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMiwgMjA5LCAyMDkpO1xuICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICB9XG5cbiAgICAuY2xfaW1hZ2Vze1xuICAgICAgd2lkdGg6NDAlOyBcbiAgICAgIGhlaWdodDo0MCU7XG4gICAgICBjb2xvcjpyZ2IoMTgyLCAxNzksIDE3OSk7XG4gICAgfVxuXG4gICAgLmNsX2Rpc3BsYXlfaW1ne1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICBoZWlnaHQ6MTAwJTsgXG4gICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIH1cblxuICAgIC5jbF9zZWNvbmRfY29sdW1uX2ltZ3tcbiAgICAgIHdpZHRoOjUwJTtcbiAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICBjb2xvcjpyZ2IoMTgyLCAxNzksIDE3OSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTIsIDIwOSwgMjA5KTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICB9IiwiLm1hc3RlcnMge1xuICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4ubmV4dEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTJhM2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzNSU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2xfaW1hZ2VfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNsX2ZpcnN0X2NvbHVtbl9pbWcge1xuICB3aWR0aDogNTAlO1xuICBjb2xvcjogI2I2YjNiMztcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkMWQxO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jbF9pbWFnZXMge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgY29sb3I6ICNiNmIzYjM7XG59XG5cbi5jbF9kaXNwbGF5X2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jbF9zZWNvbmRfY29sdW1uX2ltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNiNmIzYjM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQxZDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */");

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
    function NextadvertisementPage(activatedRoute, loader, router, toast, apiCall) {
        this.activatedRoute = activatedRoute;
        this.loader = loader;
        this.router = router;
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
    };
    NextadvertisementPage.prototype.goBackword = function () {
        window.history.back();
    };
    NextadvertisementPage.prototype.detectEventGallery = function (event, index) {
        this.loader.presentLoading();
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
        var url = "http://3.6.135.154:9000/api/" + "upload-image";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            _this.urls.push(MyResponse['result']['url']);
            // for (let i = 0; i < this.urls.length; i++) {
            //   let checkUrlLength = this.urls.length;
            //   if (checkUrlLength == 1) {
            //     this.firstImage = this.urls[0];
            //   }
            //   else if (checkUrlLength == 2) 
            //   {
            //     this.firstImage = this.urls[0];
            //     this.secondImage = this.urls[1];
            //   } else if (checkUrlLength == 3) {
            //     this.firstImage = this.urls[0];
            //     this.secondImage = this.urls[1];
            //     this.thirdImage = this.urls[2];
            //   } else if (checkUrlLength == 4) {
            //     this.firstImage = this.urls[0];
            //     this.secondImage = this.urls[1];
            //     this.thirdImage = this.urls[2];
            //     this.fourthImage = this.urls[3];
            //   } else if (checkUrlLength == 5) {
            //     this.firstImage = this.urls[0];
            //     this.secondImage = this.urls[1];
            //     this.thirdImage = this.urls[2];
            //     this.fourthImage = this.urls[3];
            //     this.fifthImage = this.urls[4];
            //   } else {
            //   }
            // }
            if (_this.urls.length > 4) {
                _this.imageUrl = 0;
            }
            else {
                _this.imageUrl = 1;
            }
            _this.loader.stopLoading();
            _this.firstImage = MyResponse['result']['url'];
            console.log("print url resonce:" + _this.firstImage);
        }, function (error) {
            _this.loader.stopLoading();
            console.log(error);
        });
    };
    NextadvertisementPage.prototype.handleSecondFileInput = function (files) {
        var _this = this;
        if (this.fileToUpload == null || this.fileToUpload == undefined) {
        }
        var url = "http://3.6.135.154:9000/api/" + "upload-image";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            _this.urls.push(MyResponse['result']['url']);
            if (_this.urls.length > 4) {
                _this.imageUrl = 0;
            }
            else {
                _this.imageUrl = 1;
            }
            _this.loader.stopLoading();
            _this.secondImage = MyResponse['result']['url'];
            console.log("print url secondImage:" + _this.secondImage);
        }, function (error) {
            _this.loader.stopLoading();
            console.log(error);
        });
    };
    NextadvertisementPage.prototype.handleThirdFileInput = function (files) {
        var _this = this;
        if (this.fileToUpload == null || this.fileToUpload == undefined) {
        }
        var url = "http://3.6.135.154:9000/api/" + "upload-image";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            _this.urls.push(MyResponse['result']['url']);
            if (_this.urls.length > 4) {
                _this.imageUrl = 0;
            }
            else {
                _this.imageUrl = 1;
            }
            _this.loader.stopLoading();
            _this.thirdImage = MyResponse['result']['url'];
            console.log("print url thirdImage:" + _this.thirdImage);
        }, function (error) {
            _this.loader.stopLoading();
            console.log(error);
        });
    };
    NextadvertisementPage.prototype.handleFourthFileInput = function (files) {
        var _this = this;
        if (this.fileToUpload == null || this.fileToUpload == undefined) {
        }
        var url = "http://3.6.135.154:9000/api/" + "upload-image";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            _this.urls.push(MyResponse['result']['url']);
            if (_this.urls.length > 4) {
                _this.imageUrl = 0;
            }
            else {
                _this.imageUrl = 1;
            }
            _this.loader.stopLoading();
            _this.fourthImage = MyResponse['result']['url'];
            console.log("print url fourthImage:" + _this.fourthImage);
        }, function (error) {
            _this.loader.stopLoading();
            console.log(error);
        });
    };
    NextadvertisementPage.prototype.handleFifthFileInput = function (files) {
        var _this = this;
        if (this.fileToUpload == null || this.fileToUpload == undefined) {
        }
        var url = "http://3.6.135.154:9000/api/" + "upload-image";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            _this.urls.push(MyResponse['result']['url']);
            if (_this.urls.length > 4) {
                _this.imageUrl = 0;
            }
            else {
                _this.imageUrl = 1;
            }
            _this.loader.stopLoading();
            _this.fifthImage = MyResponse['result']['url'];
            console.log("print url fifthImage:" + _this.fifthImage);
        }, function (error) {
            _this.loader.stopLoading();
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
                "lattitude": this.getData.lattitude,
                "longitude": this.getData.longitude,
                "address": this.getData.address,
                "gender": this.getData.gender,
                "languages": this.getData.languages,
                "email": this.getData.email,
                "categoryId": this.getData.categoryId,
                "price": this.advertisementModel['price'],
                "contact": this.advertisementModel['contact'],
                "images": this.urls
            };
            // alert("show data:"+this.getNextData);
            this.router.navigate(['/secondpageadvertisement', { FinalObject: JSON.stringify(this.getNextData) }]);
        }
    };
    NextadvertisementPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], NextadvertisementPage);
    return NextadvertisementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-nextadvertisement-nextadvertisement-module.js.map