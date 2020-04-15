(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nextadvertisement-nextadvertisement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nextadvertisement/nextadvertisement.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nextadvertisement/nextadvertisement.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"10\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">Advertisement</ion-label>\n      </ion-col>\n    \n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <form #userForm=\"ngForm\" style=\"width:100%;margin-top:10px\">\n \n \n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;\">\n  <mat-form-field style=\"width:96%; margin-top:10px\" appearance=\"outline\">\n    <mat-label>Mobile</mat-label>\n        <input matInput class=\"form-control\" type=\"tel\" name=\"contact\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"advertisementModel.contact\" #contact=\"ngModel\"\n          align=\"center\" required pattern=\"[0-9]+$\">\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"contact.invalid && (contact.dirty || contact.touched)\">\n                Mobile Is Requird\n              </div>\n            </div>\n          </mat-error>\n  </mat-form-field>\n</div>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:5px\">\n  <mat-form-field style=\"width:96%\" appearance=\"outline\">\n    <mat-label>Price</mat-label>\n        <input matInput class=\"form-control\" type=\"number\" name=\"price\" [(ngModel)]=\"advertisementModel.price\" #price=\"ngModel\"\n          align=\"center\" required pattern=\"[0-9.]+$\">\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"price.invalid && (price.dirty || price.touched)\">\n                Price Is Requird\n              </div>\n            </div>\n          </mat-error>\n  </mat-form-field>\n</div>\n\n<h5 style=\"margin-top:15px; margin-left:10px\">Upload images</h5>\n<!-- <label style=\"margin-top:20px; margin-left:10px; color:black\"><b>Upload Images</b></label> -->\n<div style=\"width:100%; height:150px;padding-left:10px; padding-right:10px; margin-top:10px\" fxLayout=\"row\">\n<div fxLayoutAlign=\"center center\" style=\"width:50%; height:100%; border: 1px solid rgb(212, 209, 209);margin-right:10px; border-radius:10px\" onclick=\"document.getElementById('image_upload1').click()\">\n  <ion-icon *ngIf=\"firstImage == '' \" name=\"camera\" style=\"width:70%; height:70%;color:rgb(182, 179, 179)\"></ion-icon>\n  <img *ngIf=\"firstImage != '' \" src=\"{{firstImage}}\" style=\"width:100%; height:100%; border-radius:10px\" >\n</div>\n<div fxLayoutAlign=\"center center\" style=\"width:50%; height:100%; border: 1px solid rgb(212, 209, 209); border-radius:10px\" onclick=\"document.getElementById('image_upload2').click()\">\n  <ion-icon *ngIf=\"secondImage == '' \" name=\"camera\" style=\"width:70%; height:70%;color:rgb(182, 179, 179)\"></ion-icon>\n  <img *ngIf=\"secondImage != '' \" src=\"{{secondImage}}\" style=\"width:100%; height:100%; border-radius:10px\" >\n</div>\n</div>\n\n<div style=\"width:100%; height:150px;padding-left:10px; padding-right:10px; margin-top:10px\" fxLayout=\"row\">\n  <div fxLayoutAlign=\"center center\" style=\"width:50%; height:100%; border: 1px solid rgb(212, 209, 209);margin-right:10px; border-radius:10px\" onclick=\"document.getElementById('image_upload3').click()\">\n    <ion-icon *ngIf=\"thirdImage == '' \" name=\"camera\" style=\"width:70%; height:70%;color:rgb(182, 179, 179)\"></ion-icon>\n    <img *ngIf=\"thirdImage != '' \" src=\"{{thirdImage}}\" style=\"width:100%; height:100%; border-radius:10px\" >\n  </div>\n  <div fxLayoutAlign=\"center center\" style=\"width:50%; height:100%; border: 1px solid rgb(212, 209, 209); border-radius:10px\" onclick=\"document.getElementById('image_upload4').click()\">\n    <ion-icon *ngIf=\"fourthImage == '' \" name=\"camera\" style=\"width:70%; height:70%;color:rgb(182, 179, 179)\"></ion-icon>\n    <img  *ngIf=\"fourthImage != '' \" src=\"{{fourthImage}}\" style=\"width:100%; height:100%; border-radius:10px\" >\n  </div>\n  </div>\n\n  <div style=\"width:100%; height:150px;padding-left:10px; padding-right:10px; margin-top:10px\" fxLayout=\"row\">\n    <div fxLayoutAlign=\"center center\" style=\"width:50%; height:100%; border: 1px solid rgb(212, 209, 209);margin-right:10px; border-radius:10px\" onclick=\"document.getElementById('image_upload5').click()\">\n      <ion-icon *ngIf=\"fifthImage == '' \" name=\"camera\" style=\"width:70%; height:70%;color:rgb(182, 179, 179)\"></ion-icon>\n      <img *ngIf=\"fifthImage != '' \" src=\"{{fifthImage}}\" style=\"width:100%; height:100%; border-radius:10px\" >\n    </div>\n  \n    </div>\n\n    <input style=\"display: none;\" id=\"image_upload1\" type=\"file\" (change)=\"detectEventGallery($event,0)\">\n    <input style=\"display: none;\" id=\"image_upload2\" type=\"file\" (change)=\"detectEventGallery($event,1)\">\n    <input style=\"display: none;\" id=\"image_upload3\" type=\"file\" (change)=\"detectEventGallery($event,2)\">\n    <input style=\"display: none;\" id=\"image_upload4\" type=\"file\" (change)=\"detectEventGallery($event,3)\">\n    <input style=\"display: none;\" id=\"image_upload5\" type=\"file\" (change)=\"detectEventGallery($event,4)\">\n\n\n<div style=\"margin-top:5%\">\n  <button [disabled]=\"price.invalid || contact.invalid\" mat-raised-button class=\"nextButton\" (click)=\"next(advertisementModel)\">Next</button>\n</div>\n</form>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: #f1f4f9;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  padding: 5px;\n  margin-top: -5px;\n}\n\n.nextButton {\n  background-color: #152a3f;\n  color: white;\n  width: 30%;\n  margin-left: 35%;\n  margin-right: 35%;\n  padding: 5px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvaW9uaWM0LW1hcmtldHBsYWNlL3NyYy9hcHAvcGFnZXMvbmV4dGFkdmVydGlzZW1lbnQvbmV4dGFkdmVydGlzZW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9uZXh0YWR2ZXJ0aXNlbWVudC9uZXh0YWR2ZXJ0aXNlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREVBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtFQUNDLFlBQUE7RUFDRixlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXh0YWR2ZXJ0aXNlbWVudC9uZXh0YWR2ZXJ0aXNlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXN0ZXJzIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG4gIH1cblxuICAuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uVGl0bGVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDotNXB4O1xuICB9XG5cblxuLm5leHRCdXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MmEzZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6MzAlO1xuICAgICBtYXJnaW4tbGVmdDozNSU7IFxuICAgICBtYXJnaW4tcmlnaHQ6MzUlO1xuICAgICAgcGFkZGluZzo1cHg7IFxuICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyByaWdodDogMTBweDtcbiAgICB9IiwiLm1hc3RlcnMge1xuICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4ubmV4dEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTJhM2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzNSU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */");

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





var NextadvertisementPage = /** @class */ (function () {
    function NextadvertisementPage(activatedRoute, loader, apiCall) {
        this.activatedRoute = activatedRoute;
        this.loader = loader;
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
            // 1 for event gallery upload 
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
    NextadvertisementPage.prototype.next = function () {
        alert("show all images:" + this.urls);
    };
    NextadvertisementPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
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
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], NextadvertisementPage);
    return NextadvertisementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-nextadvertisement-nextadvertisement-module.js.map