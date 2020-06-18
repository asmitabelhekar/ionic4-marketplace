(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-updateprofile-updateprofile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/updateprofile/updateprofile.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/updateprofile/updateprofile.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\" fxLayoutAlign=\"center center\">\n  <ion-row fxLayoutAlign=\"center center\">\n    <ion-col size=\"1\">\n      \n      <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n    </ion-col>\n    <ion-col size=\"11\" fxLayoutAlign=\"start center\">\n      <ion-label style=\"color:white;\" class=\"TitleText\">Edit Profile</ion-label>\n    </ion-col>\n \n  </ion-row>\n   \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<div fxLayout=\"column\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\n\n  <div fxLayoutAlign=\"center center\" fxLayout=\"column\" onclick=\"document.getElementById('profile_pic_upload').click()\">\n    <img *ngIf=\"profileImg == '' \" src=\"../../../assets/agent.png\" class=\"img-css\" />\n    <img  *ngIf=\"profileImg != '' \" src=\"{{profileImg}}\" class=\"img-css\" />\n    <label class=\"pic-text\">Change profile picture</label>\n  </div>\n  <input style=\"display: none;\" id=\"profile_pic_upload\" type=\"file\" (change)=\"detectEventGallery($event)\">\n  \n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;margin-top:25px\">\n    <mat-form-field style=\"width:96%;\" appearance=\"outline\">\n      <mat-label>Name</mat-label>\n          <input matInput class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"profileModel.name\" #name=\"ngModel\"\n            align=\"center\" required pattern=\"[a-zA-Z0-9,.  ]+$\">\n            <mat-error>\n              <div class=\"form-group\" style=\"margin-bottom:10px\">\n                <div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n                  Name Is Requird\n                </div>\n              </div>\n            </mat-error>\n    </mat-form-field>\n  </div>\n\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;\">\n    <mat-form-field style=\"width:96%; margin-left: 2% ; margin-right: 2%;\" appearance=\"outline\">\n      <mat-label style=\"color:black; background-color: white;\">Email</mat-label>\n      <input matInput class=\"form-control \" name=\"email\" [(ngModel)]=\"profileModel.email\" #email=\"ngModel\"\n        pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" />\n      <mat-error>\n        <div class=\"form-group\">\n          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" >\n           Invalid email address\n          </div>\n        </div>\n      </mat-error>\n  \n    </mat-form-field>\n  </div>\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;\">\n  <mat-form-field style=\"width:96%; margin-left: 2% ; margin-right: 2%\" appearance=\"outline\">\n    <mat-label>Mobile</mat-label>\n        <input matInput class=\"form-control\" type=\"tel\" name=\"contact\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"profileModel.contact\" #contact=\"ngModel\"\n          align=\"center\" >\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"contact.invalid && (contact.dirty || contact.touched)\">\n                Mobile Is Requird\n              </div>\n            </div>\n          </mat-error>\n  </mat-form-field>\n  </div>\n\n  <button mat-raised-button class=\"updateProfileButton\" [disabled]=\"email.invalid || contact.invalid ||  name.invalid\"\n  (click)=\"updateProfileData(advertisementModel)\">Update</button>\n</div>\n \n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  margin-left: 10px;\n}\n\n.updateProfileButton {\n  background-color: #fb7645;\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  margin-top: 5%;\n  font-weight: 450;\n  border-radius: 25px;\n  font-size: 18px;\n}\n\n.img-css {\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  color: white;\n  margin-top: 50px;\n  background: #f1f4f9;\n}\n\n.pic-text {\n  color: #fb7645;\n  font-size: 15px;\n  font-weight: 450;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy91cGRhdGVwcm9maWxlL3VwZGF0ZXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91cGRhdGVwcm9maWxlL3VwZGF0ZXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0U7RUFHRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0pKOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQyxjQUFBO0VBRUMsZ0JBQUE7RUFDQSxtQkFBQTtFQUNGLGVBQUE7QUNURjs7QURhQTtFQUNFLFlBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1ZIOztBRGVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZXByb2ZpbGUvdXBkYXRlcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG4gIFxuICBcbiAgLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuVGl0bGVUZXh0e1xuICAgIC8vIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIC8vIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuXG4udXBkYXRlUHJvZmlsZUJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNzY0NTtcbiAgY29sb3I6IHdoaXRlO1xuICAvLyB3aWR0aDoyOCU7XG4gIHBhZGRpbmctbGVmdDoxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG4gIHBhZGRpbmctYm90dG9tOjVweDtcbiAgcGFkZGluZy10b3A6NXB4O1xuIFxuICAgbWFyZ2luLXRvcDo1JTtcbiAgXG4gICAgZm9udC13ZWlnaHQ6NDUwO1xuICAgIGJvcmRlci1yYWRpdXM6MjVweDtcbiAgZm9udC1zaXplOjE4cHg7XG59XG5cblxuLmltZy1jc3N7XG4gIHdpZHRoOjEwMHB4O1xuICAgaGVpZ2h0OjEwMHB4OyBcbiAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIG1hcmdpbi10b3A6NTBweDtcbiAgIGJhY2tncm91bmQ6I2YxZjRmOTtcbiAgLy8gIGJvcmRlcjoxcHggc29saWQgI2Q3ZDhkYSA7XG4gICAgLy8gcGFkZGluZzo1cHg7XG59XG5cbi5waWMtdGV4dHtcbiAgY29sb3I6I2ZiNzY0NTtcbiAgZm9udC1zaXplOjE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0NTA7XG4gIG1hcmdpbjo1cHg7XG59XG4iLCIuY2wtYmFjay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi51cGRhdGVQcm9maWxlQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNzY0NTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBmb250LXdlaWdodDogNDUwO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbWctY3NzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmMWY0Zjk7XG59XG5cbi5waWMtdGV4dCB7XG4gIGNvbG9yOiAjZmI3NjQ1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0NTA7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */");

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
    function UpdateprofilePage(router, apiCall, loader, toast, activatedRoute) {
        this.router = router;
        this.apiCall = apiCall;
        this.loader = loader;
        this.toast = toast;
        this.activatedRoute = activatedRoute;
        this.updateStatus = 0;
        this.profileModel = {};
        this.profileImg = "";
    }
    UpdateprofilePage.prototype.ngOnInit = function () {
        this.loginUserId = localStorage.getItem('userId');
        this.userRole = localStorage.getItem('userRole');
        var getData = this.activatedRoute.snapshot.params['profileData'];
        this.getProfileDetail = JSON.parse(getData);
        console.log("getProfileDetail id:" + this.getProfileDetail.id);
        if (this.loginUserId == this.getProfileDetail.id) {
            this.updateStatus = 0;
        }
        else {
            this.updateStatus = 1;
        }
        this.profileModel['name'] = this.getProfileDetail.name;
        this.profileModel['email'] = this.getProfileDetail.email;
        this.profileModel['contact'] = this.getProfileDetail.mobile;
        this.profileModel['password'] = this.getProfileDetail.password;
    };
    UpdateprofilePage.prototype.goBackword = function () {
        window.history.back();
    };
    UpdateprofilePage.prototype.updateProfileData = function () {
        var _this = this;
        if (this.profileModel['contact'] == null) {
            this.profileModel['contact'] = "";
        }
        console.log("profile name:" + this.profileModel['name']);
        console.log("profile email:" + this.profileModel['email']);
        console.log("profile contact:" + this.profileModel['contact']);
        var send_date = {};
        send_date['name'] = this.profileModel['name'];
        localStorage.setItem("getName", send_date['name']);
        send_date['email'] = this.profileModel['email'];
        send_date['mobile'] = this.profileModel['contact'];
        // send_date['isActive'] = 1;
        send_date['userRole'] = this.userRole;
        // send_date['password'] = this.getProfileDetail.password;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "users/" + this.getProfileDetail.id;
        this.apiCall.put(url, send_date).subscribe(function (MyResponse) {
            _this.presentToast("Profile updated successfully.");
            _this.router.navigate(['/profile']);
        }, function (error) {
        });
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
//# sourceMappingURL=pages-updateprofile-updateprofile-module.js.map