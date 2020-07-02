(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-newadvertisementform-newadvertisementform-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newadvertisementform/newadvertisementform.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newadvertisementform/newadvertisementform.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title style=\"color:white\">Advertisement</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <mat-vertical-stepper [linear]=\"true\" #stepper style=\"padding-bottom:100px;\">\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <form [formGroup]=\"firstFormGroup\" fxLayout=\"column\" (ngSubmit)=\"form1()\" #formone=\"ngForm\">\n        <ng-template matStepLabel>Advertisement Detail</ng-template>\n        <mat-form-field appearance=\"outline\" class=\"margin-top-css\">\n          <mat-label class=\"floating-label-css\">Title</mat-label>\n          <input matInput type=\"text\" formControlName=\"titleCtrl\" required class=\"text-font-size\">\n        </mat-form-field>\n\n\n        <mat-form-field appearance=\"outline\" class=\"margin-top-css\">\n          <mat-label class=\"floating-label-css\">Price</mat-label>\n          <input matInput type=\"number\" formControlName=\"priceCtrl\" required class=\"text-font-size\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"margin-top-css\">\n          <mat-label class=\"floating-label-css\">Description</mat-label>\n          <textarea matInput type=\"text\" formControlName=\"descriptionCtrl\" required class=\"text-font-size\"></textarea>\n        </mat-form-field>\n\n        <div fxLayoutAlign=\"start start\" fxFlex=\"100\">\n          <button mat-button matStepperNext class=\"buttonClass\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\">\n      <form [formGroup]=\"secondFormGroup\" fxLayout=\"column\" (ngSubmit)=\"form2()\" #formtwo=\"ngForm\">\n        <ng-template matStepLabel>Contact Details</ng-template>\n        <mat-form-field appearance=\"outline\" class=\"margin-top-css\">\n          <mat-label class=\"floating-label-css\">Email</mat-label>\n          <input matInput type=\"email\" class=\"text-font-size\" formControlName=\"emailCtrl\" required\n            pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\n        </mat-form-field>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"width:100%;\">\n          <mat-form-field class=\"margin-top-css\" style=\"width:25%; height:82px; margin-right:10px; \"\n            appearance=\"outline\">\n            <mat-label class=\"floating-label-css\">Select Code</mat-label>\n            <mat-select name=\"type\" formControlName=\"countryCodeCtrl\" style=\"font-size:13px;\"\n              (selectionChange)=\"selectCountryCode(selectedCode)\" class=\"filter-select\" [(value)]=\"selectedCode\">\n              <mat-option *ngFor=\"let code of countryCode\" [value]=\"code.dial_code\">\n                +{{code.dial_code}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" class=\"margin-top-css\" style=\"width:74%; height:82px; \">\n            <mat-label class=\"floating-label-css\">Mobile</mat-label>\n            <input matInput type=\"tel\" minlength=\"10\" class=\"text-font-size\" maxlength=\"10\" formControlName=\"mobileCtrl\"\n              required>\n          </mat-form-field>\n\n        </div>\n\n\n        <ion-row\n          style=\"border: 1px solid #d3d5da;border-radius: 5px;height:60px; padding-left:8px; width:100%; margin-top:5px;margin-bottom:15px\">\n          <ion-col size=\"4\" fxLayoutAlign=\"start center\">\n            <label class=\"floating-label-css\" fxLayoutAlign=\"start center\">Gender</label>\n\n          </ion-col>\n\n          <ion-col size=\"8\" fxLayoutAlign=\"center center\">\n            <ion-radio-group (ionChange)=\"radioGroupChange($event)\" formControlName=\"checkRadioButton\">\n\n              <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                <div *ngFor=\"let item of genderArray\" fxLayoutAlign=\"center center\">\n                  <ion-radio value=\"{{item.value}}\"></ion-radio>\n                  <ion-label fxLayoutAlign=\"center center\" class=\"floating-label-css\" style=\"margin-left:10px\">\n                    {{item.name}}</ion-label>\n                </div>\n\n\n\n              </div>\n\n            </ion-radio-group>\n\n\n          </ion-col>\n        </ion-row>\n\n        <label class=\"floating-label-css\" style=\"color:gray;margin-top:5px;margin-bottom:5px;\">Just start typing you\n          will get autocomplete result\n          for address</label>\n        <mat-form-field appearance=\"outline\" class=\"margin-top-css\">\n          <mat-label class=\"floating-label-css\">Address</mat-label>\n          <input matInput class=\"text-font-size\" formControlName=\"addressCtrl\" ngx-google-places-autocomplete\n            #placesRef=\"ngx-places\" name=\"city\" required (onAddressChange)=\"handleAddressChange($event)\">\n        </mat-form-field>\n\n        <div fxFlex=\"100\" fxLayoutGap=\"15px\" fxLayoutAlign=\"start start\">\n          <button mat-button class=\"buttonBackClass\" matStepperPrevious>Back</button>\n          <button mat-button class=\"buttonClass\" matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"thirdFormGroup\">\n      <form [formGroup]=\"thirdFormGroup\" fxLayout=\"column\" (ngSubmit)=\"form3()\" #formthree=\"ngForm\">\n        <ng-template matStepLabel>Images Upload</ng-template>\n        <label class=\"desc-text\" style=\"color:gray;margin-top:5px;\">We recommend uploading image aspect ratio as\n          2:1</label>\n\n\n        <div class=\"cl_image_div\" style=\"margin-top:20px;\" fxLayout=\"row\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_first_column_img\"\n            onclick=\"document.getElementById('image_upload1').click()\">\n            <ion-icon *ngIf=\"firstImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n            <label class=\"floating-label-css\" *ngIf=\"firstImage == '' \" align=\"center\">Upload Image</label>\n            <img *ngIf=\"firstImage != '' \" src=\"{{firstImage}}\" class=\"cl_display_img\">\n          </div>\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_second_column_img\"\n            onclick=\"document.getElementById('image_upload2').click()\">\n            <ion-icon *ngIf=\"secondImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n            <label class=\"floating-label-css\" *ngIf=\"secondImage == '' \" align=\"center\">upload Image</label>\n            <img *ngIf=\"secondImage != '' \" src=\"{{secondImage}}\" class=\"cl_display_img\">\n          </div>\n        </div>\n\n        <div class=\"cl_image_div\" fxLayout=\"row\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_first_column_img\"\n            onclick=\"document.getElementById('image_upload3').click()\">\n            <ion-icon *ngIf=\"thirdImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n            <label class=\"floating-label-css\" *ngIf=\"thirdImage == '' \" align=\"center\">upload Image</label>\n            <img *ngIf=\"thirdImage != '' \" src=\"{{thirdImage}}\" class=\"cl_display_img\">\n          </div>\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_second_column_img\"\n            onclick=\"document.getElementById('image_upload4').click()\">\n            <ion-icon *ngIf=\"fourthImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n            <label class=\"floating-label-css\" *ngIf=\"fourthImage == '' \" align=\"center\">upload Image</label>\n            <img *ngIf=\"fourthImage != '' \" src=\"{{fourthImage}}\" class=\"cl_display_img\">\n          </div>\n        </div>\n\n        <div class=\"cl_image_div\" fxLayout=\"row\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"cl_first_column_img\"\n            onclick=\"document.getElementById('image_upload5').click()\">\n            <ion-icon *ngIf=\"fifthImage == '' \" name=\"camera\" class=\"cl_images\"></ion-icon>\n            <label class=\"floating-label-css\" *ngIf=\"fifthImage == '' \" align=\"center\">upload Image</label>\n            <img *ngIf=\"fifthImage != '' \" src=\"{{fifthImage}}\" class=\"cl_display_img\">\n          </div>\n\n        </div>\n\n        <input style=\"display: none;\" id=\"image_upload1\" type=\"file\" (change)=\"detectEventGallery($event,0)\">\n        <input style=\"display: none;\" id=\"image_upload2\" type=\"file\" (change)=\"detectEventGallery($event,1)\">\n        <input style=\"display: none;\" id=\"image_upload3\" type=\"file\" (change)=\"detectEventGallery($event,2)\">\n        <input style=\"display: none;\" id=\"image_upload4\" type=\"file\" (change)=\"detectEventGallery($event,3)\">\n        <input style=\"display: none;\" id=\"image_upload5\" type=\"file\" (change)=\"detectEventGallery($event,4)\">\n\n\n        <div fxFlex=\"100\" fxLayoutGap=\"15px\" style=\"margin-top:20px;\" fxLayoutAlign=\"start start\">\n          <button mat-button class=\"buttonBackClass\" matStepperPrevious>Back</button>\n          <button mat-button class=\"buttonClass\" matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"fourthFormGroup\">\n      <form [formGroup]=\"fourthFormGroup\" fxLayout=\"column\" (ngSubmit)=\"form4()\" #formfour=\"ngForm\">\n        <ng-template matStepLabel>Filter Detail</ng-template>\n\n        <mat-form-field appearance=\"outline\" style=\"width:100%\" class=\"margin-top-css\">\n          <mat-label class=\"floating-label-css\">Select Category</mat-label>\n\n          <mat-select style=\"font-size:13px;\" name=\"type\" formControlName=\"categoryId\"\n            (selectionChange)=\"selectCategoryType(categoryId)\" class=\"filter-select\" [(value)]=\"categoryId\">\n            <mat-option *ngFor=\"let type of categoryArray\" [value]=\"type.id\">\n              {{type.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" style=\"width:100%\" class=\"margin-top-css\">\n          <mat-label class=\"floating-label-css\">Select Sub Category</mat-label>\n\n          <mat-select style=\"font-size:13px;\" name=\"type\" formControlName=\"subCategoryId\"\n            (selectionChange)=\"selectSubCategoryType(subCategoryId)\" class=\"filter-select\" [(value)]=\"subCategoryId\">\n            <mat-option *ngFor=\"let type of subCategoryArray\" [value]=\"type.id\">\n              {{type.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field style=\"width:100%;\" appearance=\"outline\" class=\"margin-top-css\">\n          <mat-label class=\"floating-label-css\">Tags</mat-label>\n          <mat-select style=\"font-size:13px;\" name=\"tag\" formControlName=\"selectedTags\"\n            (selectionChange)=\"selectedTags(selectedTags)\" class=\"filter-select\" [(value)]=\"selectedTags\" multiple>\n            <mat-option *ngFor=\"let tag of tagsArray\" [value]=\"tag.name\">\n              {{tag.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n        <mat-form-field style=\"width:100%;\" appearance=\"outline\" class=\"margin-top-css\">\n          <mat-label class=\"floating-label-css\">Languages you support</mat-label>\n          <mat-select style=\"font-size:13px;\" name=\"year\" formControlName=\"selectedLanguages\"\n            (selectionChange)=\"selectedChanged(selectedLanguages)\" class=\"filter-select\" [(value)]=\"selectedLanguages\"\n            multiple>\n            <mat-option *ngFor=\"let year of languageArray\" [value]=\"year.name\">\n              {{year.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <div fxFlex=\"100\" fxLayoutGap=\"15px\" fxLayoutAlign=\"start start\">\n          <button mat-button class=\"buttonBackClass\" matStepperPrevious>Back</button>\n          <button mat-button class=\"buttonClass\" matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"fifthFormGroup\" *ngIf=\"postStatus == '1' \">\n      <form [formGroup]=\"fifthFormGroup\" fxLayout=\"column\" #formfour=\"ngForm\">\n        <ng-template matStepLabel>Dates</ng-template>\n\n        <div fxFlex=\"100\" fxLayoutGap=\"5\" fxLayout=\"row\">\n          <ion-card class=\"expiryCard-css\" fxFlex=\"49\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <div fxLayout=\"column\" *ngIf=\"adRemainingDays != 0 \" fxLayoutAlign=\"center center\">\n              <label class=\"padding1px\">{{adRemainingDays}} days remaining.</label>\n              <label class=\"padding1px\">Advertisement plan</label>\n              <label class=\"padding1px\">expires on</label>\n              <label class=\"padding1px\"><b>{{getEndDateForUpdate | date }}</b></label>\n            </div>\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" *ngIf=\"adRemainingDays == 0 \">\n              <label class=\"padding1px\">Advertisement plan</label>\n              <label class=\"padding1px\">expired on</label>\n              <label class=\"padding1px\"><b>{{getEndDateForUpdate | date }}</b></label>\n              <label class=\"padding1px\">please renew it</label>\n              <!-- <label class=\"padding12px\"> Your advertisement plan expires on <b>{{getEndDateForUpdate | date}}</b>, please renew\n                it</label> -->\n\n            </div>\n\n          </ion-card>\n\n          <ion-card class=\"expiryCard-css\" fxFlex=\"49\" fxLayout=\"column\" fxLayoutAlign=\"center center\" *ngIf=\"checkBannerEndDateTimestamp != 0 \">\n            <div fxLayout=\"column\" *ngIf=\"bannerRemainingDays != 0 \" fxLayoutAlign=\"center center\">\n              <label class=\"padding1px\">{{bannerRemainingDays}} days remaining.</label>\n              <label class=\"padding1px\">Banner plan</label>\n              <label class=\"padding1px\">expires on</label>\n              <label class=\"padding1px\"><b>{{getEndDateForUpdateBanner | date }}</b></label>\n            </div>\n            <!-- <div fxLayout=\"column\" *ngIf=\"bannerRemainingDays == 0 \">\n              <label class=\"padding12px\"> Your banner plan expires on <b>{{getEndDateForUpdateBanner | date}}</b>, please renew\n                it</label>\n                \n            </div> -->\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" *ngIf=\"bannerRemainingDays == 0 \">\n              <label class=\"padding1px\">Banner plan</label>\n              <label class=\"padding1px\">expired on</label>\n              <label class=\"padding1px\"><b>{{getEndDateForUpdateBanner | date }}</b></label>\n              <label class=\"padding1px\">please renew it</label>\n              <!-- <label class=\"padding12px\"> Your advertisement plan expires on <b>{{getEndDateForUpdate | date}}</b>, please renew\n                it</label> -->\n\n            </div>\n          </ion-card>\n          <!-- <ion-card class=\"expiryCard-css\" fxFlex=\"48\">\n            <label class=\"line\">Banner plan expires on <b>{{getEndDateForUpdateBanner | date }}</b></label>\n          </ion-card> -->\n        </div>\n\n\n        <!-- <ion-row style=\"margin:5px;margin-top:10px;\">\n          <ion-col size=\"5\">\n            <label style=\"color:rgb(66, 65, 65);font-size:12px;\">Advertisement - </label>\n          </ion-col>\n          <ion-col size=\"7\">\n            <label style=\"color:rgb(66, 65, 65);font-size:12px;\">{{getStartDateForUpdate | date}} &nbsp; <b>-</b>\n              &nbsp; {{getEndDateForUpdate | date }}</label>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"margin:5px;\" *ngIf=\"checkBannerEndDateTimestamp != 0 \">\n          <ion-col size=\"5\">\n            <label style=\"color:rgb(66, 65, 65);font-size:12px;\">Banner - </label>\n          </ion-col>\n          <ion-col size=\"7\">\n            <label style=\"color:rgb(66, 65, 65);font-size:12px;\">{{getStartDateForUpdateBanner | date}} &nbsp;\n              <b>-</b> &nbsp; {{getEndDateForUpdateBanner | date}}</label>\n          </ion-col>\n        </ion-row> -->\n\n\n\n        <div fxFlex=\"100\" fxLayoutGap=\"15px\" fxLayoutAlign=\"start start\" style=\"margin-top:15px;\">\n          <button mat-button class=\"buttonBackClass\" matStepperPrevious>Back</button>\n          <button mat-button class=\"buttonClass\" matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"sixthFormGroup\">\n      <form [formGroup]=\"sixthFormGroup\" fxLayout=\"column\" (ngSubmit)=\"form5()\" #formfive=\"ngForm\">\n        <ng-template matStepLabel>Payment</ng-template>\n\n\n\n        <div style=\"padding-bottom:10px;\" fxLayout=\"column\">\n\n          <label class=\"desc-text\" style=\"margin-top:15px;margin-bottom:10px;font-weight:400\">Advertisement\n            Plans</label>\n\n\n          <div fxLayout=\"row wrap\">\n            <div *ngFor=\"let item of plansArray\">\n              <ion-card *ngIf=\"item.isAdvertisement == 0 \" fxLayout=\"column\"\n                [ngClass]=\"(adPlanName == item.name) ? 'card-one' : 'card-two' \" fxLayoutAlign=\"center center\"\n                class=\"card-css\" (click)=\"checkAdveriseMentPriceCard(item.name,item.price,item.noOfDays)\">\n                <label [ngClass]=\"(adPlanName == item.name) ? 'h-css-one' : 'h-css-two' \"\n                  style=\"font-size:17px;font-weight:450\">${{item.price}}</label>\n                <label [ngClass]=\"(adPlanName == item.name) ? 'label-css-one' : 'label-css-two' \"\n                  fxLayoutAlign=\"center center\"\n                  style=\"font-size:11px;font-weight:400;margin-top:6px;\">{{item.name}}</label>\n\n              </ion-card>\n            </div>\n\n          </div>\n\n          <label class=\"desc-text\" style=\"margin-top:10px;margin-bottom:10px;font-weight:400\">Banner Plans</label>\n\n          <div fxLayout=\"row wrap\">\n            <div *ngFor=\"let item of plansArray\">\n              <ion-card *ngIf=\"item.isAdvertisement == 1 \" fxLayout=\"column\"\n                [ngClass]=\"(bannerPlanName == item.name) ? 'card-one' : 'card-two' \" fxLayoutAlign=\"center center\"\n                class=\"card-css\" (click)=\"checkBannerPriceCard(item.name,item.price,item.noOfDays)\">\n                <label [ngClass]=\"(bannerPlanName == item.name) ? 'h-css-one' : 'h-css-two' \"\n                  style=\"font-size:17px;font-weight:450\">${{item.price}}</label>\n                <label [ngClass]=\"(bannerPlanName == item.name) ? 'label-css-one' : 'label-css-two' \"\n                  fxLayoutAlign=\"center center\"\n                  style=\"font-size:11px;font-weight:400;margin-top:6px;\">{{item.name}}</label>\n              </ion-card>\n            </div>\n          </div>\n\n          <div fxFlex=\"100\" *ngIf=\"totalCalculatePayment != 0 \" style=\"margin-top:15px;padding:10px;\">\n            <label style=\"color:#fb7645\">Total : $ {{totalCalculatePayment}} </label>\n\n          </div>\n\n\n        </div>\n        <div fxFlex=\"100\">\n          <button class=\"buttonPayClass\" *ngIf=\"totalCalculatePayment == 0 \"\n            (click)=\"submmitAdvertisementData()\">Update</button>\n          <button class=\"buttonPayClass\" *ngIf=\"totalCalculatePayment != 0 \" (click)=\"submmitAdvertisementData()\">Pay\n            with RazorPay</button>\n        </div>\n\n      </form>\n    </mat-step>\n  </mat-vertical-stepper>\n\n  <div class=\"cl_bottom_fix\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"home()\">\n      <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">HOME</label>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openChatList()\">\n      <ion-icon class=\"cl_bottom_nav_css\" name=\"document\" (click)=\"openChatList()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">CHATS</label>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"postAdvertisement()\">\n      <ion-icon class=\"cl_post_css\" name=\"add-circle\" (click)=\"postAdvertisement()\">\n      </ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_selected-text_font\">SELL</label>\n    </div>\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openFavourite()\">\n      <ion-icon class=\"cl_bottom_nav_css\" name=\"heart\" (click)=\"openFavourite()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">MY ADS</label>\n    </div>\n\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openProfile()\">\n      <ion-icon class=\"cl_bottom_nav_css\" name=\"person\" (click)=\"openProfile()\"></ion-icon>\n      <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">PROFILE</label>\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/newadvertisementform/newadvertisementform-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/newadvertisementform/newadvertisementform-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: NewadvertisementformPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewadvertisementformPageRoutingModule", function() { return NewadvertisementformPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newadvertisementform_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newadvertisementform.page */ "./src/app/pages/newadvertisementform/newadvertisementform.page.ts");




var routes = [
    {
        path: '',
        component: _newadvertisementform_page__WEBPACK_IMPORTED_MODULE_3__["NewadvertisementformPage"]
    }
];
var NewadvertisementformPageRoutingModule = /** @class */ (function () {
    function NewadvertisementformPageRoutingModule() {
    }
    NewadvertisementformPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NewadvertisementformPageRoutingModule);
    return NewadvertisementformPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/newadvertisementform/newadvertisementform.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/newadvertisementform/newadvertisementform.module.ts ***!
  \***************************************************************************/
/*! exports provided: NewadvertisementformPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewadvertisementformPageModule", function() { return NewadvertisementformPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _newadvertisementform_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newadvertisementform-routing.module */ "./src/app/pages/newadvertisementform/newadvertisementform-routing.module.ts");
/* harmony import */ var _newadvertisementform_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newadvertisementform.page */ "./src/app/pages/newadvertisementform/newadvertisementform.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__);











var NewadvertisementformPageModule = /** @class */ (function () {
    function NewadvertisementformPageModule() {
    }
    NewadvertisementformPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["GooglePlaceModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _newadvertisementform_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewadvertisementformPageRoutingModule"]
            ],
            declarations: [_newadvertisementform_page__WEBPACK_IMPORTED_MODULE_6__["NewadvertisementformPage"]]
        })
    ], NewadvertisementformPageModule);
    return NewadvertisementformPageModule;
}());



/***/ }),

/***/ "./src/app/pages/newadvertisementform/newadvertisementform.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/newadvertisementform/newadvertisementform.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-stepper-vertical {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n\n.cl_image_div {\n  width: 100%;\n  height: 120px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 10px;\n}\n\n.cl_first_column_img {\n  width: 47%;\n  color: #b6b3b3;\n  height: 120px;\n  border: 1px solid #d4d1d1;\n  margin-right: 10px;\n  border-radius: 10px;\n}\n\n.cl_second_column_img {\n  width: 47%;\n  height: 120px;\n  color: #b6b3b3;\n  border: 1px solid #d4d1d1;\n  border-radius: 10px;\n}\n\n.cl_images {\n  width: 40%;\n  height: 25%;\n  color: #b6b3b3;\n}\n\n.cl_display_img {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n\n.buttonClass {\n  background-color: #fa7549;\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.buttonPayClass {\n  background: linear-gradient(to right, #fe4f14, #fe8860, #feae93);\n  color: white;\n  padding: 12px;\n  width: 100%;\n  font-weight: 500;\n  border-radius: 5px;\n  font-size: 16px;\n}\n\n.disabledClass {\n  background-color: #f1f4f9;\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.buttonBackClass {\n  background-color: #f1f4f9;\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.mat-step-icon .mat-icon {\n  font-size: 13px !important;\n  height: 16px;\n  width: 16px;\n}\n\n.desc-text {\n  font-size: 14px;\n}\n\n.text-font-size {\n  font-size: 13px;\n}\n\n.floating-label-css {\n  font-size: 13px;\n}\n\n.margin-top-css {\n  margin-top: 0px;\n}\n\n.table-text-size {\n  font-size: 10px;\n}\n\n.table-title-text-size {\n  font-size: 9px;\n}\n\ntd {\n  padding: 10px;\n  border: 1px solid #a8a7a7;\n}\n\nth {\n  padding: 10px;\n  font-weight: normal;\n  background-color: #f1f4f9;\n  border: 1px solid #a8a7a7;\n}\n\n.cl_bottom_nav_css {\n  width: 24px;\n  height: 24px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 8px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 24px;\n  height: 24px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 11px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 11px;\n  color: #fb7645;\n}\n\nion-radio {\n  --color-checked: #fb7645;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #fb7645;\n  /*replace with your color*/\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #f5b9a6;\n  /*replace with your color*/\n}\n\n.card-css {\n  border-radius: 6px;\n  width: 90px;\n  padding: 5px;\n  height: 90px;\n  margin: 6px;\n}\n\n.card-one {\n  background: linear-gradient(to bottom, #fc7c51, #fcb29a);\n}\n\n.h-css-one {\n  color: white;\n}\n\n.label-css-one {\n  color: white;\n}\n\n.h-css-two {\n  color: black;\n}\n\n.label-css-two {\n  color: gray;\n}\n\n.card-two {\n  --background: white !important;\n}\n\n.padding1px {\n  padding: 2px;\n}\n\n.padding12px {\n  padding: 12px;\n  line-height: 20px;\n}\n\n.expiryCard-css {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background: linear-gradient(to right, #f88863, #fcb29a);\n  color: #ffffff;\n  font-size: 10px;\n  line-height: 20px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Frc2hheS5tYWRrZS9Eb2N1bWVudHMvaW9uaWM0LW1hcmtldHBsYWNlL3NyYy9hcHAvcGFnZXMvbmV3YWR2ZXJ0aXNlbWVudGZvcm0vbmV3YWR2ZXJ0aXNlbWVudGZvcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9uZXdhZHZlcnRpc2VtZW50Zm9ybS9uZXdhZHZlcnRpc2VtZW50Zm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNDLG1CQUFBO0VBQ0MsZ0JBQUE7QUNDTjs7QURFRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNDLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NMOztBREVFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQyxjQUFBO0VBQ0MseUJBQUE7RUFDQyxtQkFBQTtBQ0NQOztBREVFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0FDQ0w7O0FERUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnRUFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FESUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FES0E7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FET0E7RUFDRSxlQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FETUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNIRjs7QURPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBR0EsV0FBQTtFQUNBLFdBQUE7RUFHQSx5QkFBQTtBQ1JGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNDLDZCQUFBO0VBQ0MsdUJBQUE7QUNSSjs7QURXQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFHQSx5QkFBQTtBQ1ZGOztBRGNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDWEY7O0FEY0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDWEY7O0FEYUE7RUFDRSx3QkFBQTtBQ1ZGOztBRGFBO0VBQ0UseUJBQUE7RUFBMkIsMEJBQUE7QUNUN0I7O0FEYUE7RUFDRSx5QkFBQTtFQUE0QiwwQkFBQTtBQ1Q5Qjs7QURZQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1ZGOztBRGFBO0VBQ0Usd0RBQUE7QUNWRjs7QURnQkE7RUFDRSxZQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsWUFBQTtBQ2JGOztBRGdCQTtFQUNFLFlBQUE7QUNiRjs7QURnQkE7RUFDRSxXQUFBO0FDYkY7O0FEZUE7RUFDRSw4QkFBQTtBQ1pGOztBRGVBO0VBQ0UsWUFBQTtBQ1pGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDWkY7O0FEZ0JBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVEQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDYkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXdhZHZlcnRpc2VtZW50Zm9ybS9uZXdhZHZlcnRpc2VtZW50Zm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gXG4gIC5jbF9pbWFnZV9kaXZ7XG4gICAgd2lkdGg6MTAwJTsgXG4gICAgaGVpZ2h0OjEyMHB4O1xuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG4gICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gIH1cblxuICAuY2xfZmlyc3RfY29sdW1uX2ltZ3tcbiAgICB3aWR0aDo0NyU7IFxuICAgIGNvbG9yOnJnYigxODIsIDE3OSwgMTc5KTtcbiAgICBoZWlnaHQ6MTIwcHg7XG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTIsIDIwOSwgMjA5KTtcbiAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgfVxuXG4gIC5jbF9zZWNvbmRfY29sdW1uX2ltZ3tcbiAgICB3aWR0aDo0NyU7XG4gICAgaGVpZ2h0OjEyMHB4O1xuICAgICBjb2xvcjpyZ2IoMTgyLCAxNzksIDE3OSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEyLCAyMDksIDIwOSk7XG4gICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICB9XG5cbiAgLmNsX2ltYWdlc3tcbiAgICB3aWR0aDo0MCU7IFxuICAgIGhlaWdodDoyNSU7XG4gICAgY29sb3I6cmdiKDE4MiwgMTc5LCAxNzkpO1xuICB9XG5cbiAgLmNsX2Rpc3BsYXlfaW1ne1xuICAgIHdpZHRoOjEwMCU7XG4gICAgIGhlaWdodDoxMDAlOyBcbiAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICB9XG5cbiAgLmJ1dHRvbkNsYXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYTc1NDk7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xuICB9XG4gIC5idXR0b25QYXlDbGFzc3tcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZTRmMTQsI2ZlODg2MCwjZmVhZTkzKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE3NTQ5O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6MTJweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OjUwMDtcbiAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICBmb250LXNpemU6MTZweDtcblxuICAgIC8vIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6MTBweDtcbiAgfVxuICAuZGlzYWJsZWRDbGFzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY5O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcbiAgfVxuXG4gIC5idXR0b25CYWNrQ2xhc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjRmOTtcbiAgICBjb2xvcjpibGFjaztcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG4gIH1cblxuXG4ubWF0LXN0ZXAtaWNvbiAubWF0LWljb24ge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cblxuLmRlc2MtdGV4dHtcbiAgZm9udC1zaXplOjE0cHg7XG59XG5cbi50ZXh0LWZvbnQtc2l6ZXtcbiAgZm9udC1zaXplOjEzcHg7XG59XG5cbi5mbG9hdGluZy1sYWJlbC1jc3N7XG4gIGZvbnQtc2l6ZToxM3B4O1xufVxuXG5cbi5tYXJnaW4tdG9wLWNzcyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuXG4udGFibGUtdGV4dC1zaXple1xuICBmb250LXNpemU6MTBweDtcbn1cblxuLnRhYmxlLXRpdGxlLXRleHQtc2l6ZXtcbiAgZm9udC1zaXplOjlweDtcbn1cbnRke1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6MXB4IHNvbGlkIHJnYigxNjgsIDE2NywgMTY3KTtcbn1cblxuXG50aCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjRmOTtcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMTY4LCAxNjcsIDE2Nyk7XG59XG5cbi5jbF9ib3R0b21fbmF2X2Nzc3tcbiAgd2lkdGg6MjRweDtcbiAgaGVpZ2h0OjI0cHg7XG4gIC8vIGNvbG9yOmdyYXk7XG5cbiAgd2lkdGg6MTAwJTtcbiAgY29sb3I6Z3JheTtcbiAgLy8gcGFkZGluZy10b3A6NXB4O1xuICAvLyBwYWRkaW5nLWJvdHRvbTo1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jbF9ib3R0b21fZml4e1xuICBwb3NpdGlvbjogZml4ZWQ7IFxuICBib3R0b206MHB4O1xuICB3aWR0aDoxMDAlO1xuICBwYWRkaW5nOjhweDtcbiAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNmMWY0Zjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2Nzc3tcbiAgd2lkdGg6MTAwJTtcbiAgd2lkdGg6MjRweDtcbiAgaGVpZ2h0OjI0cHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xuICAvLyBwYWRkaW5nLXRvcDo1cHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiBcbn1cblxuLmNsX3RleHRfZm9udHtcbiAgcGFkZGluZy10b3A6NHB4O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5jbF9zZWxlY3RlZC10ZXh0X2ZvbnR7XG4gIHBhZGRpbmctdG9wOjRweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbn1cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZiNzY0NTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjc2NDU7IC8qcmVwbGFjZSB3aXRoIHlvdXIgY29sb3IqL1xufVxuXG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YjlhNjsgIC8qcmVwbGFjZSB3aXRoIHlvdXIgY29sb3IqL1xufVxuXG4uY2FyZC1jc3NcbntcbiAgYm9yZGVyLXJhZGl1czo2cHg7XG4gIHdpZHRoOjkwcHg7XG4gIHBhZGRpbmc6NXB4O1xuICBoZWlnaHQ6OTBweDtcbiAgbWFyZ2luOjZweDtcbn1cblxuLmNhcmQtb25lIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZmM3YzUxLCNmY2IyOWEpO1xuICAvLyAtLWNvbG9yOndoaXRlO1xuXG4gXG59XG5cbi5oLWNzcy1vbmV7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4ubGFiZWwtY3NzLW9uZXtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5oLWNzcy10d297XG4gIGNvbG9yOmJsYWNrO1xufVxuXG4ubGFiZWwtY3NzLXR3b3tcbiAgY29sb3I6Z3JheTtcbn1cbi5jYXJkLXR3byB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiBcbn1cbi5wYWRkaW5nMXB4e1xuICBwYWRkaW5nOjJweDtcbn1cblxuLnBhZGRpbmcxMnB4e1xuICBwYWRkaW5nOjEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG5cbi5leHBpcnlDYXJkLWNzc3tcbiAgcGFkZGluZy10b3A6MTBweDtcbiAgcGFkZGluZy1ib3R0b206MTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNmODg4NjMsI2ZjYjI5YSk7XG4gIGNvbG9yOiNmZmZmZmY7XG4gIGZvbnQtc2l6ZToxMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAvLyBoZWlnaHQ6NTBweDtcbn0iLCIubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jbF9pbWFnZV9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2xfZmlyc3RfY29sdW1uX2ltZyB7XG4gIHdpZHRoOiA0NyU7XG4gIGNvbG9yOiAjYjZiM2IzO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkMWQxO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jbF9zZWNvbmRfY29sdW1uX2ltZyB7XG4gIHdpZHRoOiA0NyU7XG4gIGhlaWdodDogMTIwcHg7XG4gIGNvbG9yOiAjYjZiM2IzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkMWQxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2xfaW1hZ2VzIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIGNvbG9yOiAjYjZiM2IzO1xufVxuXG4uY2xfZGlzcGxheV9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYnV0dG9uQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE3NTQ5O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmJ1dHRvblBheUNsYXNzIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmU0ZjE0LCAjZmU4ODYwLCAjZmVhZTkzKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5kaXNhYmxlZENsYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjRmOTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5idXR0b25CYWNrQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY5O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLm1hdC1zdGVwLWljb24gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG59XG5cbi5kZXNjLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50ZXh0LWZvbnQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZsb2F0aW5nLWxhYmVsLWNzcyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm1hcmdpbi10b3AtY3NzIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4udGFibGUtdGV4dC1zaXplIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4udGFibGUtdGl0bGUtdGV4dC1zaXplIHtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbnRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E4YTdhNztcbn1cblxudGgge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYThhN2E3O1xufVxuXG4uY2xfYm90dG9tX25hdl9jc3Mge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jbF9ib3R0b21fZml4IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY0Zjk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY2xfcG9zdF9jc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICNmYjc2NDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jbF90ZXh0X2ZvbnQge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5jbF9zZWxlY3RlZC10ZXh0X2ZvbnQge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmYjc2NDU7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI3NjQ1O1xuICAvKnJlcGxhY2Ugd2l0aCB5b3VyIGNvbG9yKi9cbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjViOWE2O1xuICAvKnJlcGxhY2Ugd2l0aCB5b3VyIGNvbG9yKi9cbn1cblxuLmNhcmQtY3NzIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogOTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG1hcmdpbjogNnB4O1xufVxuXG4uY2FyZC1vbmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmM3YzUxLCAjZmNiMjlhKTtcbn1cblxuLmgtY3NzLW9uZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxhYmVsLWNzcy1vbmUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oLWNzcy10d28ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sYWJlbC1jc3MtdHdvIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5jYXJkLXR3byB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnBhZGRpbmcxcHgge1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5wYWRkaW5nMTJweCB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZXhwaXJ5Q2FyZC1jc3Mge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y4ODg2MywgI2ZjYjI5YSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/newadvertisementform/newadvertisementform.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/newadvertisementform/newadvertisementform.page.ts ***!
  \*************************************************************************/
/*! exports provided: NewadvertisementformPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewadvertisementformPage", function() { return NewadvertisementformPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var NewadvertisementformPage = /** @class */ (function () {
    function NewadvertisementformPage(formBuilder, loader, router, changeDetectorRef, toast, apiCall) {
        this.formBuilder = formBuilder;
        this.loader = loader;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.toast = toast;
        this.apiCall = apiCall;
        this.bannerUpdateStatusCheck = 1;
        this.totalCalculatePayment = 0;
        this.selectedCode = "91";
        this.countryCode = [];
        this.checkRadioButton = "male";
        this.isLinear = false;
        this.selectPlan = {};
        this.selectedBannerPrice = 0;
        this.selectedAdPrice = 0;
        this.firstImage = "";
        this.secondImage = "";
        this.thirdImage = "";
        this.fourthImage = "";
        this.fifthImage = "";
        this.urls = [];
        this.imageUrl = 0;
        this.categoryArray = [];
        this.languagesArray = [];
        this.adModel = {};
        this.advertisementModel = {};
        //weeks selection
        this.weeksArray = [];
        this.adWeek = "";
        this.bannerWeek = "";
        this.finalCalculation = 0;
        this.finalAdCalculation = 0;
        this.filterObject = {};
        this.checkBannerEndDateTimestamp = 0;
        this.checkBannerStartDateTimestamp = 0;
        this.checkAdEndDateTimestamp = 0;
        this.checkAdStartDateTimestamp = 0;
        this.genderArray = [
            {
                "id": "0",
                "value": "male",
                "name": "Male"
            },
            {
                "id": "1",
                "value": "female",
                "name": "Female"
            }
        ];
        this.planArray = [
            {
                "planName": "plan1",
                "days": "7",
                "price": "1000"
            },
            {
                "planName": "plan2",
                "days": "6",
                "price": "2000"
            },
            {
                "planName": "plan3",
                "days": "9",
                "price": "3000"
            },
            {
                "planName": "plan4",
                "days": "12",
                "price": "4000"
            }
        ];
        this.plansArray = [];
        //Tags
        this.tagsArray = [
            {
                "id": "0",
                "name": "Drop-in class"
            },
            {
                "id": "1",
                "name": "Training"
            },
            {
                "id": "2",
                "name": "Workshop / Retreat"
            },
            {
                "id": "3",
                "name": "Festival"
            },
            {
                "id": "4",
                "name": "Equipment"
            }
        ];
        this.paymentAmount = 333;
        this.currency = 'USD';
        this.razor_key = 'rzp_test_IA8F5OYVBMKeQw';
        this.calculateNumberOfWeeks = function (d1, d2) {
            var format = "MM/DD/YYYY";
            if (d1 == '' || d2 == '') {
                return '';
            }
            if (moment__WEBPACK_IMPORTED_MODULE_6__(d1, format).isValid() && moment__WEBPACK_IMPORTED_MODULE_6__(d2, format).isValid()) {
                d1 = moment__WEBPACK_IMPORTED_MODULE_6__(d1, format);
                d2 = moment__WEBPACK_IMPORTED_MODULE_6__(d2, format);
                this.w = (d1.diff(d2, 'days') / 7).toFixed(1);
                if (this.w < 1) {
                    this.w = this.w;
                }
                this.selectedNoOfWeek = this.w;
                return this.w;
            }
        };
        this.read_data();
    }
    NewadvertisementformPage.prototype.read_data = function () {
        var _this = this;
        fetch('../../../assets/countrycode.json').then(function (res) { return res.json(); })
            .then(function (json) {
            _this.countryCode = json;
            console.log(_this.data);
        });
    };
    NewadvertisementformPage.prototype.ionViewWillEnter = function () {
        var nnnn = this.toTimestamp("06/10/2020");
        console.log("show nnnn timesatmp:" + nnnn);
        this.getPlan();
        this.postStatus = localStorage.getItem("postStatus");
        console.log("check status ad or update:" + this.postStatus);
        if (this.postStatus == "1") {
            this.advertisementStatus = "update";
            var advertisementDetail = localStorage.getItem("ADVERTISEMENTDATA");
            this.advertisementObject = JSON.parse(advertisementDetail);
            console.log("show add details:" + JSON.stringify(this.advertisementObject));
            this.advertisementId = this.advertisementObject.id;
            this.advertisementModel['images'] = this.advertisementObject.images;
            this.firstFormGroup = this.formBuilder.group({
                titleCtrl: [this.advertisementObject.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                descriptionCtrl: [this.advertisementObject.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                priceCtrl: [this.advertisementObject.price, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            if (this.advertisementObject.gender == 0) {
                this.checkRadioButton = "male";
            }
            else {
                this.checkRadioButton = "female";
            }
            this.cityName = this.advertisementObject.address;
            this.secondFormGroup = this.formBuilder.group({
                emailCtrl: [this.advertisementObject.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                mobileCtrl: [this.advertisementObject.mobile, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                countryCodeCtrl: [this.advertisementObject.countryCode, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                addressCtrl: [this.advertisementObject.address, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                checkRadioButton: [this.checkRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            this.categoryId = this.advertisementObject.categoryId;
            this.getSubCategory(this.categoryId);
            console.log("show cid:" + this.categoryId);
            this.fourthFormGroup = this.formBuilder.group({
                categoryId: [this.categoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                subCategoryId: [this.advertisementObject.subCategoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                selectedTags: [this.advertisementObject.tags, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                selectedLanguages: [this.advertisementObject.languages, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            this.getAllBanner();
            this.checkAdStartDateTimestamp = this.advertisementObject.startDateTime;
            this.checkAdEndDateTimestamp = this.advertisementObject.endDateTime;
            this.getStartDateForUpdate = this.timestampToDate(this.checkAdStartDateTimestamp);
            this.getEndDateForUpdate = this.timestampToDate(this.checkAdEndDateTimestamp);
            var given = moment__WEBPACK_IMPORTED_MODULE_6__(this.getEndDateForUpdate);
            var current = moment__WEBPACK_IMPORTED_MODULE_6__().startOf('day');
            console.log("show diff in days:" + moment__WEBPACK_IMPORTED_MODULE_6__["duration"](given.diff(current)).asDays());
            this.adRemainingDays = moment__WEBPACK_IMPORTED_MODULE_6__["duration"](given.diff(current)).asDays();
            if (this.adRemainingDays > 0) {
                this.adRemainingDays = this.adRemainingDays;
            }
            else {
                this.adRemainingDays = 0;
            }
            console.log("check remaining days:::" + this.adRemainingDays);
            console.log("get Start Date For Update::" + this.getStartDateForUpdate);
            console.log("get End Date For Update::" + this.getEndDateForUpdate);
            // this.adWeek = this.getDate(this.fromDateTimeAd, this.toDateTimeAd);
            // this.finalAdCalculation = 7 + ((this.adWeek - 1) * 5);
            // this.totalCalculatePayment = 0;
            // this.totalCalculatePayment = this.finalCalculation + this.finalAdCalculation;
            this.sixthFormGroup = this.formBuilder.group({
                adWeek: [this.adWeek, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                bannerWeek: [this.bannerWeek, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            this.fifthFormGroup = this.formBuilder.group({});
            this.urls = [];
            // for(let i= 0;i < this.advertisementModel['images'].length; i++){
            if (this.advertisementModel['images'][0] == undefined || this.advertisementModel['images'][0] == null) {
                this.firstImage = "";
            }
            else {
                this.firstImage = this.advertisementModel['images'][0];
                this.urls.push(this.firstImage);
            }
            if (this.advertisementModel['images'][1] == undefined || this.advertisementModel['images'][1] == null) {
                this.secondImage = "";
            }
            else {
                this.secondImage = this.advertisementModel['images'][1];
                this.urls.push(this.secondImage);
            }
            if (this.advertisementModel['images'][2] == undefined || this.advertisementModel['images'][2] == null) {
                this.thirdImage = "";
            }
            else {
                this.thirdImage = this.advertisementModel['images'][2];
                this.urls.push(this.thirdImage);
            }
            if (this.advertisementModel['images'][3] == undefined || this.advertisementModel['images'][3] == null) {
                this.fourthImage = "";
            }
            else {
                this.fourthImage = this.advertisementModel['images'][3];
                this.urls.push(this.fourthImage);
            }
            if (this.advertisementModel['images'][4] == undefined || this.advertisementModel['images'][4] == null) {
                this.fifthImage = "";
            }
            else {
                this.fifthImage = this.advertisementModel['images'][4];
                this.urls.push(this.fifthImage);
            }
        }
        else {
            this.advertisementStatus = "post";
        }
    };
    NewadvertisementformPage.prototype.timestampToDate = function (tmsp) {
        var ts_ms = tmsp * 1000;
        var date_ob = new Date(ts_ms);
        var year = date_ob.getFullYear();
        var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        var date = ("0" + date_ob.getDate()).slice(-2);
        var getStartDate = month + "/" + date + "/" + year;
        return getStartDate;
        var dateToday = new Date(year, parseInt(month), parseInt(date));
    };
    NewadvertisementformPage.prototype.ngOnInit = function () {
        this.getCategory();
        this.getLanguages();
        this.todayDate = new Date();
        for (var p = 0; p <= 52; p++) {
            this.weeksArray.push(p);
        }
        console.log("show weeks array:" + this.weeksArray);
        this.firstFormGroup = this.formBuilder.group({
            titleCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descriptionCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priceCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this.formBuilder.group({
            emailCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobileCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            countryCodeCtrl: ['91', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            checkRadioButton: [this.checkRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.thirdFormGroup = this.formBuilder.group({
        // thirdCtrl: ['', Validators.required]
        });
        this.fourthFormGroup = this.formBuilder.group({
            categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subCategoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedTags: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedLanguages: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.sixthFormGroup = this.formBuilder.group({
            adWeek: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bannerWeek: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.fifthFormGroup = this.formBuilder.group({});
    };
    NewadvertisementformPage.prototype.getAllBanner = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        this.filterObject = {};
        this.filterObject['advertisementId'] = this.advertisementId;
        this.filterObject['userId'] = this.usersId;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "category/" + this.categoryId + "/banners?" + "filters=" + JSON.stringify(this.filterObject);
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.loader.hideBlockingLoaderAuth();
            _this.bannerArray = MyResponse['result']['list'];
            if (MyResponse['result']['count'] > 0) {
                _this.bannerUpdateStatusCheck = 1;
                var getBannerId = MyResponse['result']['list'][0]['id'];
                _this.checkBannerStartDateTimestamp = MyResponse['result']['list'][0]['startDateTime'];
                _this.checkBannerEndDateTimestamp = MyResponse['result']['list'][0]['endDateTime'];
                _this.getStartDateForUpdateBanner = _this.timestampToDate(_this.checkBannerStartDateTimestamp);
                _this.getEndDateForUpdateBanner = _this.timestampToDate(_this.checkBannerEndDateTimestamp);
                var givenB = moment__WEBPACK_IMPORTED_MODULE_6__(_this.getEndDateForUpdateBanner);
                var currentB = moment__WEBPACK_IMPORTED_MODULE_6__().startOf('day');
                console.log("show banner diff in days:" + moment__WEBPACK_IMPORTED_MODULE_6__["duration"](givenB.diff(currentB)).asDays());
                _this.bannerRemainingDays = moment__WEBPACK_IMPORTED_MODULE_6__["duration"](givenB.diff(currentB)).asDays();
                if (_this.bannerRemainingDays > 0) {
                    _this.bannerRemainingDays = _this.bannerRemainingDays;
                }
                else {
                    _this.bannerRemainingDays = 0;
                }
                console.log("selected getEndDateForUpdateBanner:" + _this.getEndDateForUpdateBanner);
                console.log("get Start Date For Update Banner::" + _this.getStartDateForUpdateBanner);
                console.log("get End Date For Update Banner::" + _this.getEndDateForUpdateBanner);
                localStorage.setItem("bannerId", getBannerId);
                _this.bannerWeek = _this.getDate(_this.checkBannerStartDateTimestamp, _this.checkBannerEndDateTimestamp);
                _this.finalCalculation = 7 + ((_this.bannerWeek - 1) * 5);
                // this.totalCalculatePayment = 0;
                // this.totalCalculatePayment = this.finalCalculation + this.finalAdCalculation;
                console.log("selected banner week show:" + _this.bannerWeek);
            }
            else {
                _this.bannerUpdateStatusCheck = 0;
                _this.checkBannerEndDateTimestamp = 0;
                _this.checkBannerStartDateTimestamp = 0;
                console.log("post bannee API");
            }
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
        });
    };
    NewadvertisementformPage.prototype.getDate = function (start, end) {
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
    NewadvertisementformPage.prototype.checkData = function (data) {
        console.log("check data:" + data);
    };
    NewadvertisementformPage.prototype.form1 = function () {
        this.firstFormData = this.firstFormGroup.value;
    };
    NewadvertisementformPage.prototype.form2 = function () {
        console.log(this.secondFormGroup.value);
        this.secondFormData = this.secondFormGroup.value;
    };
    NewadvertisementformPage.prototype.form3 = function () {
        console.log(this.thirdFormGroup.value);
    };
    NewadvertisementformPage.prototype.form4 = function () {
        console.log(this.fourthFormGroup.value);
        this.fourthFormData = this.fourthFormGroup.value;
    };
    NewadvertisementformPage.prototype.selectCountryCode = function (data) {
        this.selectedCode = data;
        console.log("countryCode:" + (this.selectedCode));
    };
    NewadvertisementformPage.prototype.form5 = function () {
        this.FifthFormData = this.fifthFormGroup.value;
        console.log("show first record:" + this.firstFormData.titleCtrl);
        console.log("show second record:" + this.secondFormData.emailCtrl);
        console.log("show third record:" + this.firstImage);
        console.log("show fourth record:" + this.fourthFormData.categoryId);
        console.log("show fifth record:" + this.FifthFormData.bannerWeek);
        // this.submmitAdvertisementData();
    };
    NewadvertisementformPage.prototype.radioGroupChange = function (event) {
        console.log("radioGroupChange", event.detail.value);
        this.selectedRadioGroup = event.detail.value;
        if (this.selectedRadioGroup == 'male') {
            this.advertisementModel['gender'] = 0;
            this.checkRadioButton = "male";
        }
        else if (this.selectedRadioGroup == 'female') {
            this.advertisementModel['gender'] = 1;
            this.checkRadioButton = "female";
        }
        else {
            this.advertisementModel['gender'] = 1;
            this.checkRadioButton = "female";
        }
    };
    NewadvertisementformPage.prototype.submmitAdvertisementData = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        // let getEndDtaeNo = parseInt(this.checkAdEndDateTimestamp); 
        var send_date = {};
        send_date['title'] = this.firstFormData.titleCtrl;
        send_date['description'] = this.firstFormData.descriptionCtrl;
        send_date['price'] = this.firstFormData.priceCtrl;
        send_date['latitude'] = this.lattitude;
        send_date['longitude'] = this.longitude;
        send_date['address'] = this.cityName;
        send_date['gender'] = this.advertisementModel['gender'];
        send_date['languages'] = this.fourthFormData.selectedLanguages;
        send_date['email'] = this.secondFormData.emailCtrl;
        send_date['mobile'] = this.secondFormData.mobileCtrl;
        send_date['categoryId'] = this.fourthFormData.categoryId;
        send_date['startDateTime'] = this.checkAdStartDateTimestamp;
        send_date['endDateTime'] = this.checkAdEndDateTimestamp;
        send_date['isActive'] = 1;
        send_date['images'] = this.urls;
        send_date['countryCode'] = this.selectedCode;
        send_date['subCategoryId'] = this.fourthFormData.subCategoryId;
        send_date['extraFields'] = {};
        send_date['tags'] = this.fourthFormData.selectedTags;
        this.usersId = localStorage.getItem("userId");
        if (this.advertisementStatus == "post") {
            console.log("show all forms data in send_date object:" + JSON.stringify(send_date));
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "users/" + this.usersId + "/advertisements";
            this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
                _this.getCategoryId = MyResponse['result']['categoryId'];
                _this.advertisementId = MyResponse['result']['id'];
                localStorage.setItem("categoryId", _this.getCategoryId);
                if (_this.checkBannerStartDateTimestamp == 0 || _this.checkBannerEndDateTimestamp == 0 || _this.checkBannerStartDateTimestamp == null) {
                    console.log("no banners posted.");
                }
                else {
                    _this.postBanner(_this.getCategoryId);
                }
                _this.payWithRazor();
                // this.router.navigate(['/home', { categoryId: this.getCategoryId }]);
                _this.loader.hideBlockingLoaderAuth();
            }, function (error) {
                _this.loader.hideBlockingLoaderAuth();
                // this.presentToast("Please try again.");
            });
        }
        else {
            var timestamp_formation = new Date(this.getEndDateForUpdate).getTime();
            console.log("show all forms data in send_date object:" + JSON.stringify(send_date));
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "users/" + this.usersId + "/advertisements/" + this.advertisementId;
            this.apiCall.put(url, send_date).subscribe(function (MyResponse) {
                _this.getCategoryId = MyResponse['result'][0]['categoryId'];
                console.log("shoe getCategoryId:" + _this.getCategoryId);
                localStorage.setItem("categoryId", _this.getCategoryId);
                if (_this.bannerUpdateStatusCheck == 0) {
                    if (_this.checkBannerStartDateTimestamp == 0 || _this.checkBannerEndDateTimestamp == 0 || _this.checkBannerStartDateTimestamp == null) {
                        console.log("no banners posted.");
                    }
                    else {
                        _this.postBanner(_this.getCategoryId);
                    }
                    // this.postBanner(this.getCategoryId);
                }
                else {
                    _this.updateBanner(_this.getCategoryId);
                }
                if (_this.totalCalculatePayment == 0) {
                    _this.presentToast("Advertisement updated successfully.");
                }
                else {
                    _this.payWithRazor();
                }
                _this.router.navigate(['/favourite']);
                // this.router.navigate(['/home', { categoryId: this.getCategoryId }]);
                _this.loader.hideBlockingLoaderAuth();
            }, function (error) {
                _this.loader.hideBlockingLoaderAuth();
                // this.presentToast("Please try again.");
            });
        }
        this.loader.hideBlockingLoaderAuth();
    };
    NewadvertisementformPage.prototype.postBanner = function (id) {
        var _this = this;
        this.bannerImage = this.urls[0];
        this.loader.showBlockingLoaderAuth();
        var send_date = {};
        send_date['image'] = this.bannerImage;
        send_date['title'] = this.firstFormData.titleCtrl;
        send_date['description'] = this.firstFormData.descriptionCtrl;
        send_date['startDateTime'] = this.checkBannerStartDateTimestamp;
        send_date['endDateTime'] = this.checkBannerEndDateTimestamp;
        send_date['lat'] = this.lattitude;
        send_date['lng'] = this.longitude;
        send_date['isActive'] = 1;
        send_date['city'] = this.cityName;
        send_date['advertisementId'] = this.advertisementId;
        send_date['userId'] = this.usersId;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "category/" + id + "/banners";
        this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
            console.log("bannerposted successfully:");
            // this.presentToast(MyResponse);
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            // this.presentToast("Please try again.")
        });
    };
    NewadvertisementformPage.prototype.updateBanner = function (categoryId) {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var send_date = {};
        send_date['image'] = this.bannerImage;
        send_date['title'] = this.firstFormData.titleCtrl;
        send_date['description'] = this.firstFormData.descriptionCtrl;
        send_date['startDateTime'] = this.checkBannerStartDateTimestamp;
        send_date['endDateTime'] = this.checkBannerEndDateTimestamp;
        send_date['lat'] = this.lattitude;
        send_date['lng'] = this.longitude;
        send_date['isActive'] = 1;
        send_date['city'] = this.cityName;
        send_date['advertisementId'] = this.advertisementId;
        send_date['userId'] = this.usersId;
        var getBannerId = localStorage.getItem("bannerId");
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "category/" + categoryId + "/banners/" + getBannerId;
        this.apiCall.put(url, send_date).subscribe(function (MyResponse) {
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
        });
    };
    NewadvertisementformPage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    NewadvertisementformPage.prototype.postAdvertisement = function () {
        this.router.navigate(['/newadvertisementform']);
        // this.router.navigate(['/secondpageadvertisement']);
    };
    NewadvertisementformPage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    NewadvertisementformPage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    NewadvertisementformPage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    NewadvertisementformPage.prototype.presentToast = function (message) {
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
    NewadvertisementformPage.prototype.selectCategoryType = function (data) {
        // alert("check data:"+data);
        console.log("show id:" + data);
        this.categoryId = data;
        this.getSubCategory(this.categoryId);
    };
    NewadvertisementformPage.prototype.selectSubCategoryType = function (data) {
        console.log("show id:" + data);
        this.subCategoryId = data;
    };
    NewadvertisementformPage.prototype.selectedTags = function (data) {
        console.log("show selected tags:" + data);
    };
    NewadvertisementformPage.prototype.getCategory = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "category/" + 0 + "/sub-category";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            var dataArray = MyResponse['result']['list'];
            for (var i = 0; i < dataArray.length; i++) {
                if (dataArray[i]['name'] == "Parent Category") {
                }
                else {
                    _this.categoryArray.push(dataArray[i]);
                }
            }
            console.log("show category:" + _this.categoryArray);
        }, function (error) {
        });
    };
    NewadvertisementformPage.prototype.getSubCategory = function (categoryId) {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "category/" + categoryId + "/sub-category";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.subCategoryArray = MyResponse['result']['list'];
            console.log("show sub category " + _this.subCategoryArray);
        }, function (error) {
        });
    };
    NewadvertisementformPage.prototype.getPlan = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "subscriptions";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.plansArray = MyResponse['result']['list'];
            console.log("show plansArray " + _this.plansArray);
            if (_this.postStatus == "1") {
                console.log("check first plan name of ad in update:");
            }
            else {
                console.log("check first plan name of ad in post:");
                for (var i = 0; i < _this.plansArray.length; i++) {
                    if (_this.plansArray[i]['isAdvertisement'] == "0") {
                        _this.adPlanName = _this.plansArray[i]['name'];
                        _this.checkAdveriseMentPriceCard(_this.adPlanName, _this.plansArray[i]['price'], _this.plansArray[i]['noOfDays']);
                        console.log("check first plan name of ad:" + _this.adPlanName);
                    }
                }
            }
        }, function (error) {
        });
    };
    NewadvertisementformPage.prototype.selectedChanged = function (selectedLanguage) {
        // alert("selectedLanguage:"+JSON.stringify(selectedLanguage));
        this.languagesArray = (selectedLanguage);
    };
    NewadvertisementformPage.prototype.getLanguages = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "languages";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.languageArray = MyResponse['result']['list'];
            // this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            // this.loader.hideBlockingLoaderAuth();
            // this.networkServices.checkInternetConnection();
            // this.networkServices.onPageLoadCheckInternet();
        });
    };
    NewadvertisementformPage.prototype.compare = function (date1, date2) {
        console.log("first date:" + date1);
        console.log("second date:" + date2);
        if (date1 > date2) {
            console.log("check first date :" + date1);
            return date1;
        }
        else if (date1 < date2) {
            console.log("check second date :" + date2);
            return date2;
        }
        else
            return (date1);
    };
    NewadvertisementformPage.prototype.checkAdveriseMentPriceCard = function (planName, price, noOfDays) {
        if (this.postStatus == "1") {
            var currentDate = new Date();
            var compareDates = this.compare(new Date(currentDate), new Date(this.getEndDateForUpdate));
            this.checkAdStartDateTimestamp = this.toTimestamp(compareDates);
            var checkNew = moment__WEBPACK_IMPORTED_MODULE_6__(compareDates, "MM-DD-YYYY").add(noOfDays, 'days');
            this.checkAdEndDateTimestamp = this.toTimestamp(checkNew);
            console.log("check final end date timestamp:" + this.checkAdEndDateTimestamp);
        }
        else {
            var startAddate = new Date();
            this.checkAdStartDateTimestamp = this.toTimestamp(startAddate);
            console.log("start timestamp:" + this.checkAdStartDateTimestamp);
            var checkNew = moment__WEBPACK_IMPORTED_MODULE_6__(startAddate, "MM-DD-YYYY").add(noOfDays, 'days');
            this.checkAdEndDateTimestamp = this.toTimestamp(checkNew);
        }
        console.log("checkAdEndDateTimestamp fromDateTimeAd:::" + this.checkAdStartDateTimestamp);
        this.totalCalculatePayment = 0;
        this.selectedAdPrice = price;
        this.totalCalculatePayment = +this.selectedBannerPrice + +this.selectedAdPrice;
        console.log("final payment:" + this.totalCalculatePayment);
        this.adPlanName = planName;
        this.getStartDateForUpdate = this.timestampToDate(this.checkAdStartDateTimestamp);
        this.getEndDateForUpdate = this.timestampToDate(this.checkAdEndDateTimestamp);
        console.log("ad dates show:::" + this.getStartDateForUpdate + ":end date:" + this.getEndDateForUpdate);
    };
    NewadvertisementformPage.prototype.checkBannerPriceCard = function (planName, price, noOfDays) {
        console.log("no of days:::" + noOfDays);
        if (this.postStatus == "0") {
            console.log("post banner----");
            var startdate = new Date();
            this.checkBannerStartDateTimestamp = this.toTimestamp(startdate);
            console.log("start banner timestamp:::" + this.checkBannerStartDateTimestamp);
            var checkBannerNew = moment__WEBPACK_IMPORTED_MODULE_6__(startdate, "MM-DD-YYYY").add(noOfDays, 'days');
            this.checkBannerEndDateTimestamp = this.toTimestamp(checkBannerNew);
        }
        else {
            console.log("update banner----");
            var currentDate = new Date();
            var compareBannerDates = this.compare(new Date(currentDate), new Date(this.getEndDateForUpdateBanner));
            this.checkBannerStartDateTimestamp = this.toTimestamp(compareBannerDates);
            var checkNew = moment__WEBPACK_IMPORTED_MODULE_6__(compareBannerDates, "MM-DD-YYYY").add(noOfDays, 'days');
            console.log("selected plan next ---:" + this.checkBannerEndDateTimestamp);
            this.checkBannerEndDateTimestamp = this.toTimestamp(checkNew);
        }
        // var time = moment(this.checkBannerEndDateTimestamp).format("DD-MM-YYYY");
        // console.log("no of days after calculation:::" + time);
        this.totalCalculatePayment = 0;
        this.selectedBannerPrice = price;
        this.totalCalculatePayment = +this.selectedBannerPrice + +this.selectedAdPrice;
        this.bannerPlanName = planName;
        this.getStartDateForUpdateBanner = this.timestampToDate(this.checkBannerStartDateTimestamp);
        this.getEndDateForUpdateBanner = this.timestampToDate(this.checkBannerEndDateTimestamp);
        console.log("banner dates show:::" + this.getStartDateForUpdateBanner + ":end date:" + this.getEndDateForUpdateBanner);
    };
    // selectBannerWeek(data) {
    //   this.bannerWeek = data;
    //   this.finalCalculation = 7 + ((data - 1) * 5);
    //   this.totalCalculation = this.finalCalculation;
    //   this.endDate = moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY');
    //   let startDateTimeStamp = this.toTimestamp(this.todayDate);
    //   let endDateTimeStamp = this.toTimestamp(this.endDate);
    //   this.fromDateTimestamp = startDateTimeStamp;
    //   this.toDateTimestamp = endDateTimeStamp;
    //   console.log("show banner timestamp:" + startDateTimeStamp)
    //   console.log("show banner date:" + moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY'));
    // }
    // selectAdWeek(data) {
    //   this.adWeek = data;
    //   this.finalAdCalculation = 7 + ((data - 1) * 5);
    //   this.todayDate = new Date();
    //   console.log("show no of week value::" + data);
    //   this.endAdvertisementDate = moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY');
    //   let startDateTime = this.toTimestamp(this.todayDate);
    //   let endDateTime = this.toTimestamp(this.endAdvertisementDate);
    //   this.fromDateTimeAd = startDateTime;
    //   this.toDateTimeAd = endDateTime;
    //   console.log("start date timestamp:" + startDateTime);
    //   console.log("end date timestamp:" + endDateTime);
    //   console.log("show next date:" + moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY'));
    // }
    NewadvertisementformPage.prototype.handleAddressChange = function (data) {
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
    NewadvertisementformPage.prototype.detectEventGallery = function (event, index) {
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
            this.handleFirstFileInput(this.fileToUpload, index);
        }
        console.log("file uploaded::" + JSON.stringify(this.fileToUpload));
    };
    NewadvertisementformPage.prototype.toTimestamp = function (strDate) {
        var datum = Date.parse(strDate);
        return datum / 1000;
    };
    NewadvertisementformPage.prototype.handleFirstFileInput = function (files, index) {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        if (files == null || files == undefined) {
        }
        var url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            if (_this.urls.length > 4) {
                _this.imageUrl = 0;
            }
            else {
                _this.imageUrl = 1;
            }
            _this.loader.hideBlockingLoaderAuth();
            if (index == 0) {
                _this.urls[0] = MyResponse['result'][0];
                _this.firstImage = MyResponse['result'][0];
            }
            else if (index == 1) {
                _this.urls[1] = MyResponse['result'][0];
                _this.secondImage = MyResponse['result'][0];
            }
            else if (index == 2) {
                _this.urls[2] = MyResponse['result'][0];
                _this.thirdImage = MyResponse['result'][0];
            }
            else if (index == 3) {
                _this.urls[3] = MyResponse['result'][0];
                _this.fourthImage = MyResponse['result'][0];
            }
            else if (index == 4) {
                _this.urls[4] = MyResponse['result'][0];
                _this.fifthImage = MyResponse['result'][0];
            }
            else {
            }
            console.log("print url resonce:" + _this.firstImage);
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            console.log(error);
        });
    };
    NewadvertisementformPage.prototype.payWithRazor = function () {
        var _this = this;
        console.log("check payment count:" + this.totalCalculatePayment);
        var getName = localStorage.getItem("getName");
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: this.currency,
            key: this.razor_key,
            amount: this.totalCalculatePayment,
            name: 'Holyhub',
            prefill: {
                email: this.secondFormData.emailCtrl,
                contact: this.secondFormData.mobileCtrl,
                name: getName
            },
            theme: {
                color: '#fe8860'
            },
            modal: {
                ondismiss: function () {
                    console.log('dismissed');
                }
            }
        };
        // this.submmitAdvertisementData();
        // var successCallback = function (payment_id) {
        //   alert('payment_id: ' + payment_id);
        //   this.submmitAdvertisementData();
        // };
        var successCallback = function (success) {
            // alert('payment_id: ' + success);
            _this.gatewayLogsCheck(success);
        };
        var cancelCallback = function (error) {
            // alert("show payment gateway error:" + error.description + ' (Error ' + error.code + ')');
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    };
    NewadvertisementformPage.prototype.setValue = function (name) {
        this.checkStatus = this.selectPlan.hasOwnProperty(name);
        if (this.checkStatus) {
            console.log("before delete:" + (this.selectPlan));
            delete this.selectPlan[name];
            localStorage.setItem("BOOKMARK", JSON.stringify(this.selectPlan));
            console.log("after delete:" + (this.selectPlan));
        }
        else {
            this.selectPlan[name] = true;
        }
        console.log("check data:" + JSON.stringify(this.selectPlan));
    };
    NewadvertisementformPage.prototype.gatewayLogsCheck = function (success) {
        var _this = this;
        this.getStartDateForUpdate = this.timestampToDate(this.checkAdStartDateTimestamp);
        this.getEndDateForUpdate = this.timestampToDate(this.checkAdEndDateTimestamp);
        this.getStartDateForUpdateBanner = this.timestampToDate(this.checkBannerStartDateTimestamp);
        this.getEndDateForUpdateBanner = this.timestampToDate(this.checkBannerEndDateTimestamp);
        this.loader.showBlockingLoaderAuth();
        var send_date = {};
        send_date['advertisementId'] = this.advertisementId;
        send_date['userId'] = this.usersId;
        send_date['paymentId'] = (success);
        send_date['isSuccess'] = 0;
        send_date['amount'] = this.totalCalculatePayment;
        send_date['advertisementStartDate'] = this.getStartDateForUpdate;
        send_date['advertisementEndDate'] = this.getEndDateForUpdate;
        if (this.checkBannerStartDateTimestamp == 0 || this.checkBannerEndDateTimestamp == 0) {
        }
        else {
            send_date['bannerStartDate'] = this.getStartDateForUpdateBanner;
            send_date['bannerEndDate'] = this.getEndDateForUpdateBanner;
        }
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "payment-gateway-logs";
        this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
            _this.router.navigate(['/home', { categoryId: _this.getCategoryId }]);
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
        });
    };
    NewadvertisementformPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    NewadvertisementformPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newadvertisementform',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newadvertisementform.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newadvertisementform/newadvertisementform.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./newadvertisementform.page.scss */ "./src/app/pages/newadvertisementform/newadvertisementform.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], NewadvertisementformPage);
    return NewadvertisementformPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-newadvertisementform-newadvertisementform-module.js.map