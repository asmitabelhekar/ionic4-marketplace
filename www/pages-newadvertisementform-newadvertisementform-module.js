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
/* harmony default export */ __webpack_exports__["default"] = (".mat-stepper-vertical {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n\n.cl_image_div {\n  width: 100%;\n  height: 120px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 10px;\n}\n\n.cl_first_column_img {\n  width: 47%;\n  color: #b6b3b3;\n  height: 120px;\n  border: 1px solid #d4d1d1;\n  margin-right: 10px;\n  border-radius: 10px;\n}\n\n.cl_second_column_img {\n  width: 47%;\n  height: 120px;\n  color: #b6b3b3;\n  border: 1px solid #d4d1d1;\n  border-radius: 10px;\n}\n\n.cl_images {\n  width: 40%;\n  height: 25%;\n  color: #b6b3b3;\n}\n\n.cl_display_img {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n\n.buttonClass {\n  background-color: #fa7549;\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.buttonPayClass {\n  background: linear-gradient(to right, #fe4f14, #fe8860, #feae93);\n  color: white;\n  padding: 12px;\n  width: 100%;\n  font-weight: 500;\n  border-radius: 5px;\n  font-size: 16px;\n}\n\n.disabledClass {\n  background-color: #f1f4f9;\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.buttonBackClass {\n  background-color: #f1f4f9;\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.mat-step-icon .mat-icon {\n  font-size: 13px !important;\n  height: 16px;\n  width: 16px;\n}\n\n.desc-text {\n  font-size: 14px;\n}\n\n.text-font-size {\n  font-size: 13px;\n}\n\n.floating-label-css {\n  font-size: 13px;\n}\n\n.margin-top-css {\n  margin-top: 0px;\n}\n\n.table-text-size {\n  font-size: 10px;\n}\n\n.table-title-text-size {\n  font-size: 9px;\n}\n\ntd {\n  padding: 10px;\n  border: 1px solid #a8a7a7;\n}\n\nth {\n  padding: 10px;\n  font-weight: normal;\n  background-color: #f1f4f9;\n  border: 1px solid #a8a7a7;\n}\n\n.cl_bottom_nav_css {\n  width: 24px;\n  height: 24px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 8px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 24px;\n  height: 24px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 11px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 11px;\n  color: #fb7645;\n}\n\nion-radio {\n  --color-checked: #fb7645;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #fb7645;\n  /*replace with your color*/\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #f5b9a6;\n  /*replace with your color*/\n}\n\n.card-css {\n  border-radius: 6px;\n  width: 90px;\n  padding: 5px;\n  height: 90px;\n  margin: 6px;\n}\n\n.card-one {\n  background: linear-gradient(to bottom, #fc7c51, #fcb29a);\n}\n\n.h-css-one {\n  color: white;\n}\n\n.label-css-one {\n  color: white;\n}\n\n.h-css-two {\n  color: black;\n}\n\n.label-css-two {\n  color: gray;\n}\n\n.card-two {\n  --background: white !important;\n}\n\n.padding1px {\n  padding: 2px;\n}\n\n.padding12px {\n  padding: 12px;\n  line-height: 20px;\n}\n\n.expiryCard-css {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background: linear-gradient(to right, #f88863, #fcb29a);\n  color: #ffffff;\n  font-size: 10px;\n  line-height: 20px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9uZXdhZHZlcnRpc2VtZW50Zm9ybS9uZXdhZHZlcnRpc2VtZW50Zm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25ld2FkdmVydGlzZW1lbnRmb3JtL25ld2FkdmVydGlzZW1lbnRmb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0MsbUJBQUE7RUFDQyxnQkFBQTtBQ0NOOztBREVFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0w7O0FERUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNDLGNBQUE7RUFDQyx5QkFBQTtFQUNDLG1CQUFBO0FDQ1A7O0FERUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7QUNDTDs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDRTtFQUNFLGdFQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURJRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURLQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURPQTtFQUNFLGVBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7QUNKRjs7QURNQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0hGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtFQUdBLHlCQUFBO0FDUkY7O0FEV0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0MsNkJBQUE7RUFDQyx1QkFBQTtBQ1JKOztBRFdBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUdBLHlCQUFBO0FDVkY7O0FEY0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNYRjs7QURjQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNYRjs7QURhQTtFQUNFLHdCQUFBO0FDVkY7O0FEYUE7RUFDRSx5QkFBQTtFQUEyQiwwQkFBQTtBQ1Q3Qjs7QURhQTtFQUNFLHlCQUFBO0VBQTRCLDBCQUFBO0FDVDlCOztBRFlBO0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDVkY7O0FEYUE7RUFDRSx3REFBQTtBQ1ZGOztBRGdCQTtFQUNFLFlBQUE7QUNiRjs7QURnQkE7RUFDRSxZQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsWUFBQTtBQ2JGOztBRGdCQTtFQUNFLFdBQUE7QUNiRjs7QURlQTtFQUNFLDhCQUFBO0FDWkY7O0FEZUE7RUFDRSxZQUFBO0FDWkY7O0FEZUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNaRjs7QURnQkE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdURBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld2FkdmVydGlzZW1lbnRmb3JtL25ld2FkdmVydGlzZW1lbnRmb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbiBcbiAgLmNsX2ltYWdlX2RpdntcbiAgICB3aWR0aDoxMDAlOyBcbiAgICBoZWlnaHQ6MTIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcbiAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgfVxuXG4gIC5jbF9maXJzdF9jb2x1bW5faW1ne1xuICAgIHdpZHRoOjQ3JTsgXG4gICAgY29sb3I6cmdiKDE4MiwgMTc5LCAxNzkpO1xuICAgIGhlaWdodDoxMjBweDtcbiAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMiwgMjA5LCAyMDkpO1xuICAgICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICB9XG5cbiAgLmNsX3NlY29uZF9jb2x1bW5faW1ne1xuICAgIHdpZHRoOjQ3JTtcbiAgICBoZWlnaHQ6MTIwcHg7XG4gICAgIGNvbG9yOnJnYigxODIsIDE3OSwgMTc5KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTIsIDIwOSwgMjA5KTtcbiAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gIH1cblxuICAuY2xfaW1hZ2Vze1xuICAgIHdpZHRoOjQwJTsgXG4gICAgaGVpZ2h0OjI1JTtcbiAgICBjb2xvcjpyZ2IoMTgyLCAxNzksIDE3OSk7XG4gIH1cblxuICAuY2xfZGlzcGxheV9pbWd7XG4gICAgd2lkdGg6MTAwJTtcbiAgICAgaGVpZ2h0OjEwMCU7IFxuICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gIH1cblxuICAuYnV0dG9uQ2xhc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNzU0OTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG4gIH1cbiAgLmJ1dHRvblBheUNsYXNze1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZlNGYxNCwjZmU4ODYwLCNmZWFlOTMpO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmYTc1NDk7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzoxMnB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuXG4gICAgLy8gcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgLy8gcGFkZGluZy1yaWdodDoxMHB4O1xuICB9XG4gIC5kaXNhYmxlZENsYXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY0Zjk7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xuICB9XG5cbiAgLmJ1dHRvbkJhY2tDbGFzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY5O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcbiAgfVxuXG5cbi5tYXQtc3RlcC1pY29uIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4uZGVzYy10ZXh0e1xuICBmb250LXNpemU6MTRweDtcbn1cblxuLnRleHQtZm9udC1zaXple1xuICBmb250LXNpemU6MTNweDtcbn1cblxuLmZsb2F0aW5nLWxhYmVsLWNzc3tcbiAgZm9udC1zaXplOjEzcHg7XG59XG5cblxuLm1hcmdpbi10b3AtY3NzIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5cbi50YWJsZS10ZXh0LXNpemV7XG4gIGZvbnQtc2l6ZToxMHB4O1xufVxuXG4udGFibGUtdGl0bGUtdGV4dC1zaXple1xuICBmb250LXNpemU6OXB4O1xufVxudGR7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjoxcHggc29saWQgcmdiKDE2OCwgMTY3LCAxNjcpO1xufVxuXG5cbnRoIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY5O1xuICBib3JkZXI6MXB4IHNvbGlkIHJnYigxNjgsIDE2NywgMTY3KTtcbn1cblxuLmNsX2JvdHRvbV9uYXZfY3Nze1xuICB3aWR0aDoyNHB4O1xuICBoZWlnaHQ6MjRweDtcbiAgLy8gY29sb3I6Z3JheTtcblxuICB3aWR0aDoxMDAlO1xuICBjb2xvcjpncmF5O1xuICAvLyBwYWRkaW5nLXRvcDo1cHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXh7XG4gIHBvc2l0aW9uOiBmaXhlZDsgXG4gIGJvdHRvbTowcHg7XG4gIHdpZHRoOjEwMCU7XG4gIHBhZGRpbmc6OHB4O1xuICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2YxZjRmOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsX3Bvc3RfY3Nze1xuICB3aWR0aDoxMDAlO1xuICB3aWR0aDoyNHB4O1xuICBoZWlnaHQ6MjRweDtcbiAgY29sb3I6ICNmYjc2NDU7XG4gIC8vIHBhZGRpbmctdG9wOjVweDtcbiAgLy8gcGFkZGluZy1ib3R0b206NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuIFxufVxuXG4uY2xfdGV4dF9mb250e1xuICBwYWRkaW5nLXRvcDo0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udHtcbiAgcGFkZGluZy10b3A6NHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xufVxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmI3NjQ1O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNzY0NTsgLypyZXBsYWNlIHdpdGggeW91ciBjb2xvciovXG59XG5cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjViOWE2OyAgLypyZXBsYWNlIHdpdGggeW91ciBjb2xvciovXG59XG5cbi5jYXJkLWNzc1xue1xuICBib3JkZXItcmFkaXVzOjZweDtcbiAgd2lkdGg6OTBweDtcbiAgcGFkZGluZzo1cHg7XG4gIGhlaWdodDo5MHB4O1xuICBtYXJnaW46NnB4O1xufVxuXG4uY2FyZC1vbmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCNmYzdjNTEsI2ZjYjI5YSk7XG4gIC8vIC0tY29sb3I6d2hpdGU7XG5cbiBcbn1cblxuLmgtY3NzLW9uZXtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5sYWJlbC1jc3Mtb25le1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmgtY3NzLXR3b3tcbiAgY29sb3I6YmxhY2s7XG59XG5cbi5sYWJlbC1jc3MtdHdve1xuICBjb2xvcjpncmF5O1xufVxuLmNhcmQtdHdvIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuIFxufVxuLnBhZGRpbmcxcHh7XG4gIHBhZGRpbmc6MnB4O1xufVxuXG4ucGFkZGluZzEycHh7XG4gIHBhZGRpbmc6MTJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cblxuLmV4cGlyeUNhcmQtY3Nze1xuICBwYWRkaW5nLXRvcDoxMHB4O1xuICBwYWRkaW5nLWJvdHRvbToxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2Y4ODg2MywjZmNiMjlhKTtcbiAgY29sb3I6I2ZmZmZmZjtcbiAgZm9udC1zaXplOjEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG4gIC8vIGhlaWdodDo1MHB4O1xufSIsIi5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNsX2ltYWdlX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jbF9maXJzdF9jb2x1bW5faW1nIHtcbiAgd2lkdGg6IDQ3JTtcbiAgY29sb3I6ICNiNmIzYjM7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQxZDE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNsX3NlY29uZF9jb2x1bW5faW1nIHtcbiAgd2lkdGg6IDQ3JTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgY29sb3I6ICNiNmIzYjM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQxZDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jbF9pbWFnZXMge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDI1JTtcbiAgY29sb3I6ICNiNmIzYjM7XG59XG5cbi5jbF9kaXNwbGF5X2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idXR0b25DbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTc1NDk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uYnV0dG9uUGF5Q2xhc3Mge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZTRmMTQsICNmZTg4NjAsICNmZWFlOTMpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmRpc2FibGVkQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY5O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmJ1dHRvbkJhY2tDbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY0Zjk7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWF0LXN0ZXAtaWNvbiAubWF0LWljb24ge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cblxuLmRlc2MtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRleHQtZm9udC1zaXplIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZmxvYXRpbmctbGFiZWwtY3NzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubWFyZ2luLXRvcC1jc3Mge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi50YWJsZS10ZXh0LXNpemUge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi50YWJsZS10aXRsZS10ZXh0LXNpemUge1xuICBmb250LXNpemU6IDlweDtcbn1cblxudGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYThhN2E3O1xufVxuXG50aCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY0Zjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOGE3YTc7XG59XG5cbi5jbF9ib3R0b21fbmF2X2NzcyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjRmOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2NzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX3RleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICNmYjc2NDU7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZiNzY0NTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjc2NDU7XG4gIC8qcmVwbGFjZSB3aXRoIHlvdXIgY29sb3IqL1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWI5YTY7XG4gIC8qcmVwbGFjZSB3aXRoIHlvdXIgY29sb3IqL1xufVxuXG4uY2FyZC1jc3Mge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiA5MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogOTBweDtcbiAgbWFyZ2luOiA2cHg7XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmYzdjNTEsICNmY2IyOWEpO1xufVxuXG4uaC1jc3Mtb25lIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGFiZWwtY3NzLW9uZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmgtY3NzLXR3byB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxhYmVsLWNzcy10d28ge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmNhcmQtdHdvIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucGFkZGluZzFweCB7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLnBhZGRpbmcxMnB4IHtcbiAgcGFkZGluZzogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5leHBpcnlDYXJkLWNzcyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjg4ODYzLCAjZmNiMjlhKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */");

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
                }
                else {
                    _this.payWithRazor();
                }
                _this.presentToast("Advertisement updated successfully.");
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