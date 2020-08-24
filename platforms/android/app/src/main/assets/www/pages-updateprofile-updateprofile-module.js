(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-updateprofile-updateprofile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/updateprofile/updateprofile.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/updateprofile/updateprofile.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\" fxLayoutAlign=\"center center\">\n  <ion-row fxLayoutAlign=\"center center\">\n    <ion-col size=\"1\">\n      \n      <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n    </ion-col>\n    <ion-col size=\"11\" fxLayoutAlign=\"start center\">\n      <ion-label style=\"color:white;\" class=\"TitleText\">Edit Profile</ion-label>\n    </ion-col>\n \n  </ion-row>\n   \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<div fxLayout=\"column\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n\n  <div fxLayoutAlign=\"center center\" fxLayout=\"column\" onclick=\"document.getElementById('profile_pic_upload').click()\">\n    <img *ngIf=\"profileImg == '1' \" src=\"../../../assets/agent.png\" class=\"img-css\" />\n    <img  *ngIf=\"profileImg != '1' \" src=\"{{profileImg}}\" class=\"img-css\" />\n    <label class=\"pic-text\">Change profile picture</label>\n  </div>\n  <input style=\"display: none;\" id=\"profile_pic_upload\" type=\"file\" (change)=\"detectEventGallery($event)\">\n  \n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:25px\">\n    <mat-form-field style=\"width:96%;\" appearance=\"outline\">\n      <mat-label class=\"label-text-css\">Name</mat-label>\n          <input matInput class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"profileModel.name\" #name=\"ngModel\"\n            align=\"center\" required style=\"font-size:13px;\">\n            <mat-error>\n              <div class=\"form-group\" style=\"margin-bottom:10px\">\n                <div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n                  Name Is Requird\n                </div>\n              </div>\n            </mat-error>\n    </mat-form-field>\n  </div>\n\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;\">\n    <mat-form-field style=\"width:96%; margin-left: 2% ; margin-right: 2%;\" appearance=\"outline\">\n      <mat-label class=\"label-text-css\" >Email</mat-label>\n      <input matInput class=\"form-control \" name=\"email\" [(ngModel)]=\"profileModel.email\" #email=\"ngModel\"\n        pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"  style=\"font-size:13px;\" />\n      <mat-error>\n        <div class=\"form-group\">\n          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" >\n           Invalid email address\n          </div>\n        </div>\n      </mat-error>\n  \n    </mat-form-field>\n  </div>\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;\">\n  <mat-form-field style=\"width:96%; margin-left: 2% ; margin-right: 2%\" appearance=\"outline\">\n    <mat-label class=\"label-text-css\">Mobile</mat-label>\n        <input matInput class=\"form-control\" type=\"tel\" name=\"contact\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"profileModel.contact\" #contact=\"ngModel\"\n          align=\"center\"  style=\"font-size:13px;\" required>\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"contact.invalid && (contact.dirty || contact.touched)\">\n                Mobile Is Requird\n              </div>\n            </div>\n          </mat-error>\n  </mat-form-field>\n  </div>\n\n  <!-- <ion-row\n  style=\"border: 1px solid #d3d5da;border-radius: 5px;height:60px; padding-left:8px; width:96%; margin-top:5px;margin-bottom:15px\">\n  <ion-col size=\"4\" fxLayoutAlign=\"start center\">\n    <label class=\"floating-label-css\" fxLayoutAlign=\"start center\">Gender</label>\n\n  </ion-col>\n\n  <ion-col size=\"8\" fxLayoutAlign=\"center center\">\n    <ion-radio-group class=\"form-control\" (ionChange)=\"radioGroupChange($event)\"  [(ngModel)]=\"profileModel.gender\" #gender=\"ngModel\">\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <div *ngFor=\"let item of genderArray\" fxLayoutAlign=\"center center\">\n          <ion-radio checked=\"true\" value=\"{{item.value}}\" ></ion-radio> \n          <ion-label fxLayoutAlign=\"center center\" class=\"floating-label-css\" style=\"margin-left:10px\">\n            {{item.name}}</ion-label>\n        </div>\n      </div>\n    </ion-radio-group>\n\n\n  </ion-col>\n</ion-row> -->\n\n  <button mat-raised-button class=\"updateProfileButton\" [disabled]=\"email.invalid || contact.invalid ||  name.invalid\"\n  (click)=\"updateProfileData(advertisementModel)\">Update</button>\n</div>\n \n</ion-content>\n");

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

/***/ "./src/app/pages/updateprofile/updateprofile-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/updateprofile/updateprofile-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateprofilePageRoutingModule", function() { return UpdateprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _updateprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateprofile.page */ "./src/app/pages/updateprofile/updateprofile.page.ts");




var routes = [
    {
        path: '',
        component: _updateprofile_page__WEBPACK_IMPORTED_MODULE_3__["UpdateprofilePage"]
    }
];
var UpdateprofilePageRoutingModule = /** @class */ (function () {
    function UpdateprofilePageRoutingModule() {
    }
    UpdateprofilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UpdateprofilePageRoutingModule);
    return UpdateprofilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/updateprofile/updateprofile.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/updateprofile/updateprofile.module.ts ***!
  \*************************************************************/
/*! exports provided: UpdateprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateprofilePageModule", function() { return UpdateprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _updateprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateprofile-routing.module */ "./src/app/pages/updateprofile/updateprofile-routing.module.ts");
/* harmony import */ var _updateprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateprofile.page */ "./src/app/pages/updateprofile/updateprofile.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");









var UpdateprofilePageModule = /** @class */ (function () {
    function UpdateprofilePageModule() {
    }
    UpdateprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _updateprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateprofilePageRoutingModule"]
            ],
            declarations: [_updateprofile_page__WEBPACK_IMPORTED_MODULE_6__["UpdateprofilePage"]]
        })
    ], UpdateprofilePageModule);
    return UpdateprofilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/updateprofile/updateprofile.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/updateprofile/updateprofile.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.floating-label-css {\n  font-size: 13px;\n}\n\n.TitleText {\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  margin-left: 10px;\n}\n\n.updateProfileButton {\n  background: linear-gradient(to right, #fe4f14, #fe8860, #feae93);\n  color: white;\n  padding-left: 50px;\n  padding-right: 50px;\n  margin-top: 10%;\n  font-weight: 450;\n  border-radius: 25px;\n  font-size: 16px;\n}\n\n.img-css {\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  color: white;\n  margin-top: 50px;\n  background: #f1f4f9;\n  border: 0.5px solid #9b9999;\n}\n\n.pic-text {\n  color: #fb7645;\n  font-size: 15px;\n  font-weight: 450;\n  margin: 5px;\n}\n\n.label-text-css {\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJhbmtva2F0ZS9FeGVyY2lzZS9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy91cGRhdGVwcm9maWxlL3VwZGF0ZXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91cGRhdGVwcm9maWxlL3VwZGF0ZXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0U7RUFDRSxlQUFBO0FDRko7O0FES0U7RUFHRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0pKOztBRFNBO0VBQ0UsZ0VBQUE7RUFFQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUlDLGVBQUE7RUFFQyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0YsZUFBQTtBQ1pGOztBRGdCQTtFQUNFLFlBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FDYkg7O0FEaUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNkRjs7QURrQks7RUFDQyxlQUFBO0FDZk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91cGRhdGVwcm9maWxlL3VwZGF0ZXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICBcbiAgXG4gIC5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5mbG9hdGluZy1sYWJlbC1jc3N7XG4gICAgZm9udC1zaXplOjEzcHg7XG4gIH1cbiAgXG4gIC5UaXRsZVRleHR7XG4gICAgLy8gZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgLy8gdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG5cbi51cGRhdGVQcm9maWxlQnV0dG9ue1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZTRmMTQsI2ZlODg2MCwjZmVhZTkzKTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZiNzY0NTtcbiAgY29sb3I6IHdoaXRlO1xuICAvLyB3aWR0aDoyOCU7XG4gIHBhZGRpbmctbGVmdDo1MHB4O1xuICBwYWRkaW5nLXJpZ2h0OjUwcHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOjVweDtcbiAgLy8gcGFkZGluZy10b3A6NXB4O1xuIFxuICAgbWFyZ2luLXRvcDoxMCU7XG4gIFxuICAgIGZvbnQtd2VpZ2h0OjQ1MDtcbiAgICBib3JkZXItcmFkaXVzOjI1cHg7XG4gIGZvbnQtc2l6ZToxNnB4O1xufVxuXG5cbi5pbWctY3Nze1xuICB3aWR0aDoxMDBweDtcbiAgIGhlaWdodDoxMDBweDsgXG4gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgY29sb3I6d2hpdGU7XG4gICBtYXJnaW4tdG9wOjUwcHg7XG4gICBiYWNrZ3JvdW5kOiNmMWY0Zjk7XG4gICBib3JkZXI6MC41cHggc29saWQgcmdiKDE1NSwgMTUzLCAxNTMpIDtcbiAgICAvLyBwYWRkaW5nOjVweDtcbn1cblxuLnBpYy10ZXh0e1xuICBjb2xvcjojZmI3NjQ1O1xuICBmb250LXNpemU6MTVweDtcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcbiAgbWFyZ2luOjVweDtcbn1cblxuXG4gICAgIC5sYWJlbC10ZXh0LWNzc3tcbiAgICAgIGZvbnQtc2l6ZToxMXB4O1xuICAgICB9XG4iLCIuY2wtYmFjay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmxvYXRpbmctbGFiZWwtY3NzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi51cGRhdGVQcm9maWxlQnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmU0ZjE0LCAjZmU4ODYwLCAjZmVhZTkzKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaW1nLWNzcyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmNGY5O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICM5Yjk5OTk7XG59XG5cbi5waWMtdGV4dCB7XG4gIGNvbG9yOiAjZmI3NjQ1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0NTA7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ubGFiZWwtdGV4dC1jc3Mge1xuICBmb250LXNpemU6IDExcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/updateprofile/updateprofile.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/updateprofile/updateprofile.page.ts ***!
  \***********************************************************/
/*! exports provided: UpdateprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateprofilePage", function() { return UpdateprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");







var UpdateprofilePage = /** @class */ (function () {
    // genderArray = [
    //   {
    //     "id": "0",
    //     "value": "male",
    //     "name": "Male"
    //   },
    //   {
    //     "id": "1",
    //     "value": "female",
    //     "name": "Female"
    //   }
    // ];
    function UpdateprofilePage(router, apiCall, loader, toast, activatedRoute) {
        this.router = router;
        this.apiCall = apiCall;
        this.loader = loader;
        this.toast = toast;
        this.activatedRoute = activatedRoute;
        this.updateStatus = 0;
        this.profileModel = {};
        this.profileImg = "";
        this.checkRadioButton = "male";
        this.genderArray = [
            {
                "id": "0",
                "value": "0",
                "name": "Male"
            },
            {
                "id": "1",
                "value": "1",
                "name": "Female"
            }
        ];
    }
    UpdateprofilePage.prototype.ngOnInit = function () {
        this.loginUserId = localStorage.getItem('userId');
        this.userRole = localStorage.getItem('userRole');
        var getData = this.activatedRoute.snapshot.params['profileData'];
        this.getProfileDetail = JSON.parse(getData);
        // this.callGetUserDetails();
        console.log("getProfileDetail id:" + this.getProfileDetail.id);
        this.profileImg = this.getProfileDetail.image;
        console.log("ger profile image:" + this.profileImg);
        if (this.profileImg == null || this.profileImg == undefined || this.profileImg == "") {
            console.log("ger profile empty");
            this.profileImg = "1";
        }
        else {
            console.log("ger profileimage:" + this.profileImg);
            this.profileImg = this.getProfileDetail.image;
        }
        if (this.loginUserId == this.getProfileDetail.id) {
            this.updateStatus = 0;
        }
        else {
            this.updateStatus = 1;
        }
        this.profileModel['name'] = this.getProfileDetail.name;
        this.profileModel['email'] = this.getProfileDetail.email;
        this.profileModel['contact'] = this.getProfileDetail.mobile;
        // if(this.getProfileDetail.gender ==0){
        //   this.selectedRadioGroup = "male"
        // }else if(this.getProfileDetail.gender ==1){
        //   this.selectedRadioGroup = "female"
        // }
        // this.profileModel['gender'] =  
        // this.selectedRadioGroup= this.getProfileDetail.gender;
        // this.profileModel['password'] = this.getProfileDetail.password;
    };
    // callGetUserDetails() {
    //   let url = environment.base_url + environment.version + "users/" + this.loginUserId
    //   this.apiCall.get(url).subscribe(MyResponse => {
    //       this.getProfileDetailN = MyResponse['result'];
    //       this.profileModel['gender'] = this.getProfileDetailN['gender'];
    //       if(this.profileModel['gender'] == 0){
    //         this.selectedRadioGroup = "0";
    //       }else if(this.profileModel['gender'] == 1){
    //         this.selectedRadioGroup = "1";
    //       }
    //        console.log("json string",""+JSON.stringify(this.getProfileDetailN));
    //   });
    // }
    UpdateprofilePage.prototype.goBackword = function () {
        window.history.back();
    };
    // radioGroupChange(event) {
    //   console.log("radioGroupChange", event.detail.value);
    //   this.selectedRadioGroup = event.detail.value;
    //   if (this.selectedRadioGroup == 'male' ) {
    //     this.profileModel['gender'] = 0;
    //     // this.checkRadioButton = "male";
    //   } else if (this.selectedRadioGroup == 'female' ) {
    //     this.profileModel['gender'] = 1;
    //     // this.checkRadioButton = "female";
    //   }
    // }
    UpdateprofilePage.prototype.updateProfileData = function () {
        var _this = this;
        if (this.profileImg == "1" || this.profileImg == null) {
            this.presentToast("Please upload profile picture.");
        }
        else {
            if (this.profileModel['contact'] == null) {
                this.profileModel['contact'] = "";
            }
            console.log("profile name:" + this.profileModel['name']);
            console.log("profile email:" + this.profileModel['email']);
            console.log("profile contact:" + this.profileModel['contact']);
            var send_date = {};
            send_date['name'] = this.profileModel['name'];
            send_date['image'] = this.profileImg;
            localStorage.setItem("getName", send_date['name']);
            send_date['email'] = this.profileModel['email'];
            send_date['mobile'] = this.profileModel['contact'];
            send_date['gender'] = -1;
            // send_date['token'] =localStorage.getItem("fcmToken");
            // send_date['isActive'] = 1;
            // send_date['userRole'] = this.userRole;
            // send_date['password'] = this.getProfileDetail.password;
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "users/" + this.getProfileDetail.id;
            this.apiCall.put(url, send_date).subscribe(function (MyResponse) {
                _this.presentToast("Profile updated successfully.");
                _this.router.navigate(['/profile']);
            }, function (error) {
            });
        }
    };
    UpdateprofilePage.prototype.presentToast = function (message) {
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
    UpdateprofilePage.prototype.detectEventGallery = function (event) {
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
            this.handleFirstFileInput(this.fileToUpload);
        }
        console.log("file uploaded::" + JSON.stringify(this.fileToUpload));
    };
    UpdateprofilePage.prototype.handleFirstFileInput = function (files) {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        if (files == null || files == undefined) {
        }
        var url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            _this.loader.hideBlockingLoaderAuth();
            _this.profileImg = MyResponse['result'][0];
            console.log("print url resonce:" + _this.profileImg);
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            console.log(error);
        });
    };
    UpdateprofilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    UpdateprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateprofile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./updateprofile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/updateprofile/updateprofile.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./updateprofile.page.scss */ "./src/app/pages/updateprofile/updateprofile.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UpdateprofilePage);
    return UpdateprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-updateprofile-updateprofile-module.js.map