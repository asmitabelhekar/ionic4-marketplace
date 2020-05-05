(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advertisementdetail-advertisementdetail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisementdetail/advertisementdetail.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisementdetail/advertisementdetail.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div fxLayoutAlign=\"start center\">\n  <ion-slides [options]=\"slideOptions\" pager=\"true\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\" \n    class=\"half-black\">\n    <ion-slide *ngFor=\"let item of advertisementImages\" >\n      <div style=\"width:100%;height:250px;position: relative;margin-bottom:5px\" >\n        <img src=\"{{item}}\" style=\"width:100%; height:100%\"/>\n      </div>\n\n    </ion-slide>\n  </ion-slides>\n  \n\n    <div fxLayout=\"row\" class=\"cl_header\">\n      <ion-row style=\"width:100%\">\n        <ion-col size=\"2\">\n          <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n        </ion-col>\n\n        <ion-col size=\"7\" align=\"center\">\n        </ion-col>\n\n        <ion-col size=\"2\" fxLayoutAlign=\"end center\">\n          <img src=\"../../../assets/sharewhitee.png\" class=\"cl_share_icon\" />\n\n        </ion-col>\n        <ion-col size=\"1\" fxLayoutAlign=\"center center\" (click)=\"editAdvertisement()\" *ngIf=\"advertisementType == 0 \">\n          <mat-icon style=\"color:white\">edit</mat-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"cl_middle_arrow\" style=\"width:100%\">\n     \n      <mat-icon class=\"cl_middle_arrow_left\" style=\"position: fixed; left:10px;\" (click)=\"prevSlide(slider)\">keyboard_arrow_left</mat-icon>\n      <mat-icon class=\"cl_middle_arrow_right\" style=\"position: fixed; right:10px;\" (click)=\"nextSlide(slider)\">keyboard_arrow_right</mat-icon>\n     \n     \n    </div>\n  </div>\n\n\n\n  <div fxLayout=\"row\" style=\"margin-top:10px;\" class=\"cl_margin\">\n    <div fxLayoutAlign=\"start start\" style=\"width:90%; color:black\">\n      <div fxLayout=\"column\" style=\"color:black; font-size:14px; margin-left:4px\">\n        <label>{{title}}</label>\n        <label>₹ {{price}}</label>\n      </div>\n\n    </div>\n\n    <div fxLayoutAlign=\"end start\" style=\"width:10%;\">\n      <ion-icon *ngIf=\"getBookmarkObj [advertisementId] == true \" style=\"color:hotpink; margin-left:5px;width:23px; height:23px;\" name=\"heart\"></ion-icon>\n      <ion-icon *ngIf=\"getBookmarkObj [advertisementId] != true \" style=\"color:hotpink; margin-left:5px;width:23px; height:23px;\" name=\"heart-outline\"></ion-icon>\n\n      <!-- <ion-icon fxLayoutAlign=\"end start\" name=\"heart-outline\" style=\"width:23px; height:23px;\"></ion-icon> -->\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" style=\"margin-top:10px;\" class=\"cl_margin\">\n    <div fxLayoutAlign=\"start start\" style=\"width:85%; color:black\">\n      <mat-icon style=\"color:black;font-size:15px\">place</mat-icon>\n      <label style=\"margin-left:-3px\" class=\"cl_gray_label cl_font_14\">{{address}} </label>\n    </div>\n\n    <div fxLayoutAlign=\"end start\" style=\"width:18%;\">\n      <label class=\"cl_gray_label cl_font_13\">{{date | date}}</label>\n    </div>\n  </div>\n  <!-- <ion-item-divider style=\"width:100%;margin-top:-15px\">\n\n  </ion-item-divider>\n\n  <div class=\"cl_margin\" style=\"margin-top:5px\">\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <label class=\"cl_gray_title cl_font_13\"><b>Details</b></label>\n\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top:-5px\">\n      <ion-col size=\"6\">\n        <label class=\"cl_gray_label cl_font_14\">YEAR</label>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <label class=\"cl_gray_label cl_font_13\">2009</label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top:-5px\">\n      <ion-col size=\"6\">\n        <label class=\"cl_gray_label cl_font_13\">KM DRIVEN</label>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <label class=\"cl_gray_label cl_font_13\">200,000 KM</label>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <ion-item-divider style=\"width:100%;margin-top:-20px; color:black\"></ion-item-divider>\n\n  <div style=\"width:96%;margin-left:2%; margin-top:5px\">\n    <label style=\"font-size:14px; color : rgb(78, 77, 77); margin-left:5px\"><b>Description</b></label>\n  </div>\n  <ion-item-divider style=\"margin-left:-2px; padding-bottom :8px; margin-top:4px\">\n    <label class=\"cl_gray_label cl_font_14\">{{description}}</label>\n  </ion-item-divider>\n\n  <ion-item-divider style=\"padding-bottom:10px\" (click)=\"viewProfile()\">\n    <div style=\"margin-top:10px\" class=\"cl_margin\" fxLayout=\"row\">\n      <div style=\"width:20%; margin-left:-10px\">\n        <img src=\"../../../assets/defaultprofilepic.png\" fxLayoutAlign=\"start start\" class=\"cl_default_pic\" />\n      </div>\n\n      <div style=\"width:75%\">\n        <label class=\"cl_gray_title cl_font_13\"><b>{{userName}}</b></label><br />\n        <label class=\"cl_gray_label cl_font_14\">Member since {{userCreated | date}}</label><br />\n        <label class=\"cl_font_13\" style=\"color : #50b5f2\">SEE PROFILE</label>\n      </div>\n\n      <div fxLayoutAlign=\"center center\">\n\n        <mat-icon class=\"cl_arrow_right\">keyboard_arrow_right</mat-icon>\n      </div>\n\n    </div>\n\n  </ion-item-divider>\n\n  <div class=\"cl_margin\" style=\"margin-top:5px\">\n    <label class=\"cl_adpost\"><b>Add posted at</b></label>\n  </div>\n  <div id=\"map_canvas\" style=\" margin-bottom:20%;margin-top:10px;\"></div>\n\n\n\n\n\n  <div class=\"cl_call_message_maindiv\" fxLayout=\"row\">\n    <div class=\"cl_message_div\" fxLayout=\"row\" (click)=\"sendMessage()\" style=\"cursor: pointer\">\n      <div fxFlex=\"50\" fxLayoutAlign=\"center center\">\n        <!-- <ion-icon name=\"call\" ></ion-icon> -->\n        <mat-icon class=\"cl_chat_icon\">chat</mat-icon>\n      </div>\n      <div fxFlex=\"50\" fxLayoutAlign=\"start center\">\n        <label class=\"cl_font_14\">CHAT</label>\n      </div>\n    </div>\n    <div class=\"cl_call_div\" fxLayout=\"row\" (click)=\"makeCall()\" style=\"cursor: pointer\">\n      <div fxFlex=\"50\" fxLayoutAlign=\"center center\">\n        <!-- <ion-icon name=\"call\" ></ion-icon> -->\n        <mat-icon class=\"cl_chat_icon\">call</mat-icon>\n      </div>\n      <div fxFlex=\"50\" fxLayoutAlign=\"start center\">\n        <label class=\"cl_font_14\">CALL</label>\n      </div>\n    </div>\n\n    <!-- <div style=\"width:50%;\" fxLayout=\"row\" (click)=\"makeCall()\" style=\"cursor: pointer\">\n      <div fxFlex=\"50\" align=\"center\">\n        <ion-icon name=\"call\"  class=\"cl_call_icon\"></ion-icon>\n      </div>\n      <div fxFlex=\"50\" align=\"center\">\n        <label class=\"cl_font_14\" >CALL</label>\n      </div>\n    </div> -->\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/advertisementdetail/advertisementdetail-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/advertisementdetail/advertisementdetail-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AdvertisementdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementdetailPageRoutingModule", function() { return AdvertisementdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _advertisementdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advertisementdetail.page */ "./src/app/pages/advertisementdetail/advertisementdetail.page.ts");




var routes = [
    {
        path: '',
        component: _advertisementdetail_page__WEBPACK_IMPORTED_MODULE_3__["AdvertisementdetailPage"]
    }
];
var AdvertisementdetailPageRoutingModule = /** @class */ (function () {
    function AdvertisementdetailPageRoutingModule() {
    }
    AdvertisementdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AdvertisementdetailPageRoutingModule);
    return AdvertisementdetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/advertisementdetail/advertisementdetail.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/advertisementdetail/advertisementdetail.module.ts ***!
  \*************************************************************************/
/*! exports provided: AdvertisementdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementdetailPageModule", function() { return AdvertisementdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _advertisementdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advertisementdetail-routing.module */ "./src/app/pages/advertisementdetail/advertisementdetail-routing.module.ts");
/* harmony import */ var _advertisementdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advertisementdetail.page */ "./src/app/pages/advertisementdetail/advertisementdetail.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");














var AdvertisementdetailPageModule = /** @class */ (function () {
    function AdvertisementdetailPageModule() {
    }
    AdvertisementdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _advertisementdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdvertisementdetailPageRoutingModule"]
            ],
            providers: [_ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeGeocoder"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMaps"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__["CallNumber"]],
            declarations: [_advertisementdetail_page__WEBPACK_IMPORTED_MODULE_6__["AdvertisementdetailPage"]]
        })
    ], AdvertisementdetailPageModule);
    return AdvertisementdetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/advertisementdetail/advertisementdetail.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/advertisementdetail/advertisementdetail.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n#map_canvas {\n  margin-top: 10px;\n  width: 100%;\n  margin: auto;\n  height: 25vh;\n}\n\n.cl_call_icon {\n  width: 18px;\n  height: 18px;\n}\n\n.cl_font_14 {\n  font-size: 14px;\n}\n\n.cl_font_13 {\n  font-size: 13px;\n}\n\n.cl_chat_icon {\n  font-size: 16px;\n  margin-top: 7px;\n}\n\n.cl_message_div {\n  width: 50%;\n  border-right: 2px solid white;\n}\n\n.cl_call_div {\n  width: 50%;\n}\n\n.cl_call_message_maindiv {\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  height: 45px;\n  background-color: #1e69c8;\n  color: white;\n}\n\n.cl_canvas {\n  margin-bottom: 20%;\n  margin-top: 10px;\n}\n\n.cl_adpost {\n  font-size: 14px;\n  color: #4e4d4d;\n  margin-left: 5px;\n}\n\n.cl_gray_title {\n  color: #4e4d4d;\n}\n\n.cl_gray_label {\n  color: #5c5a5a;\n}\n\n.cl_margin {\n  width: 96%;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n\n.cl_arrow_right {\n  color: black;\n  width: 30px;\n  height: 30px;\n}\n\n.cl_middle_arrow_left {\n  background: rgba(0, 0, 0, 0.3);\n  color: white;\n  width: 30px;\n  height: 30px;\n  margin: 7px;\n}\n\n.cl_middle_arrow_right {\n  color: white;\n  width: 30px;\n  height: 30px;\n  background: rgba(0, 0, 0, 0.3);\n  margin: 7px;\n}\n\n.cl_default_pic {\n  width: 50px;\n  height: 50px;\n}\n\n.cl_img_div {\n  position: relative;\n  height: 250px;\n  width: 100%;\n  margin: auto;\n}\n\n.cl_header {\n  position: absolute;\n  top: 0px;\n  height: 55px;\n  width: 100%;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.cl_middle_arrow {\n  position: absolute;\n  top: 120px;\n  height: 55px;\n  width: 100%;\n  z-index: 2;\n}\n\n.cl_share_icon {\n  width: 25px;\n  height: 25px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9hZHZlcnRpc2VtZW50ZGV0YWlsL2FkdmVydGlzZW1lbnRkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZHZlcnRpc2VtZW50ZGV0YWlsL2FkdmVydGlzZW1lbnRkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNISjs7QURZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDVEY7O0FEWUE7RUFDRSxlQUFBO0FDVEY7O0FEYUE7RUFDRSxlQUFBO0FDVkY7O0FEYUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ1ZGOztBRGFBO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0FDVkY7O0FEY0E7RUFDRSxVQUFBO0FDWEY7O0FEY0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDWEg7O0FEY0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDWEY7O0FEY0E7RUFDRSxlQUFBO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0FDWEg7O0FEZUE7RUFDRSxjQUFBO0FDWkY7O0FEZUE7RUFDRSxjQUFBO0FDWkY7O0FEZUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWkY7O0FEZUE7RUFDRSxZQUFBO0VBQ0MsV0FBQTtFQUNDLFlBQUE7QUNaSjs7QURlQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQ1pIOztBRGdCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0MsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ2JIOztBRGtCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDZkY7O0FEa0JBO0VBQ0Usa0JBQUE7RUFDQyxhQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNmSjs7QURrQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQyw4QkFBQTtBQ2ZIOztBRG1CQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ2hCRjs7QURxQkE7RUFDRSxXQUFBO0VBQ0MsWUFBQTtFQUNELGlCQUFBO0FDbEJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudGRldGFpbC9hZHZlcnRpc2VtZW50ZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuXG4jbWFwX2NhbnZhc3tcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW46YXV0bztcbiAgICBoZWlnaHQ6IDI1dmg7XG4gIH1cblxuLy8gICAubWF0ZXJpYWwtaWNvbnMge1xuICBcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4gIFxuLy8gfVxuXG4uY2xfY2FsbF9pY29ue1xuICB3aWR0aDoxOHB4OyBcbiAgaGVpZ2h0OjE4cHg7XG59XG5cbi5jbF9mb250XzE0e1xuICBmb250LXNpemU6MTRweDtcbn1cblxuXG4uY2xfZm9udF8xM3tcbiAgZm9udC1zaXplOjEzcHg7XG59XG5cbi5jbF9jaGF0X2ljb257XG4gIGZvbnQtc2l6ZToxNnB4OyBcbiAgbWFyZ2luLXRvcDo3cHg7XG59XG5cbi5jbF9tZXNzYWdlX2RpdntcbiAgd2lkdGg6NTAlOyBcbiAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCB3aGl0ZTtcbn1cblxuXG4uY2xfY2FsbF9kaXZ7XG4gIHdpZHRoOjUwJTsgXG59XG5cbi5jbF9jYWxsX21lc3NhZ2VfbWFpbmRpdntcbiAgd2lkdGg6MTAwJTsgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGJvdHRvbSA6MHB4OyBcbiAgIGhlaWdodDo0NXB4OyBcbiAgIGJhY2tncm91bmQtY29sb3I6ICMxZTY5Yzg7XG4gICBjb2xvcjp3aGl0ZTtcbn1cblxuLmNsX2NhbnZhc3tcbiAgbWFyZ2luLWJvdHRvbToyMCU7XG4gIG1hcmdpbi10b3A6MTBweDtcbn1cblxuLmNsX2FkcG9zdHtcbiAgZm9udC1zaXplOjE0cHg7XG4gICBjb2xvciA6IHJnYig3OCwgNzcsIDc3KTtcbiAgIG1hcmdpbi1sZWZ0OjVweDtcbn1cblxuXG4uY2xfZ3JheV90aXRsZXtcbiAgY29sb3IgOiByZ2IoNzgsIDc3LCA3Nyk7XG59XG5cbi5jbF9ncmF5X2xhYmVse1xuICBjb2xvciA6IHJnYig5MiwgOTAsIDkwKTtcbn1cblxuLmNsX21hcmdpbntcbiAgd2lkdGg6OTYlO1xuICBtYXJnaW4tbGVmdDoyJTtcbiAgbWFyZ2luLXJpZ2h0OjIlO1xufVxuXG4uY2xfYXJyb3dfcmlnaHR7XG4gIGNvbG9yOmJsYWNrO1xuICAgd2lkdGg6MzBweDtcbiAgICBoZWlnaHQ6MzBweDtcbn1cblxuLmNsX21pZGRsZV9hcnJvd19sZWZ0e1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGNvbG9yOndoaXRlO1xuICB3aWR0aDozMHB4O1xuICAgaGVpZ2h0OjMwcHg7XG4gICBtYXJnaW46N3B4O1xufVxuXG5cbi5jbF9taWRkbGVfYXJyb3dfcmlnaHR7XG4gIGNvbG9yOndoaXRlO1xuICB3aWR0aDozMHB4O1xuICAgaGVpZ2h0OjMwcHg7XG4gICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICBtYXJnaW46N3B4O1xufVxuXG5cblxuLmNsX2RlZmF1bHRfcGlje1xuICB3aWR0aDo1MHB4OyBcbiAgaGVpZ2h0OjUwcHg7XG59XG5cbi5jbF9pbWdfZGl2e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBoZWlnaHQ6MjUwcHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW46YXV0bztcbn1cblxuLmNsX2hlYWRlcntcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgdG9wOjBweDsgXG4gIGhlaWdodDo1NXB4OyBcbiAgd2lkdGg6MTAwJTtcbiAgei1pbmRleCA6IDE7XG4gICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cblxuLmNsX21pZGRsZV9hcnJvd3tcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgdG9wOjEyMHB4OyBcbiAgaGVpZ2h0OjU1cHg7IFxuICB3aWR0aDoxMDAlO1xuICB6LWluZGV4IDogMjtcbn1cblxuXG5cbi5jbF9zaGFyZV9pY29ue1xuICB3aWR0aDoyNXB4O1xuICAgaGVpZ2h0OjI1cHg7XG4gIG1hcmdpbi1sZWZ0OjEwcHg7XG59IiwiLmNsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjV2aDtcbn1cblxuLmNsX2NhbGxfaWNvbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5jbF9mb250XzE0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2xfZm9udF8xMyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNsX2NoYXRfaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4uY2xfbWVzc2FnZV9kaXYge1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmNsX2NhbGxfZGl2IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNsX2NhbGxfbWVzc2FnZV9tYWluZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlNjljODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2xfY2FudmFzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2xfYWRwb3N0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRlNGQ0ZDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmNsX2dyYXlfdGl0bGUge1xuICBjb2xvcjogIzRlNGQ0ZDtcbn1cblxuLmNsX2dyYXlfbGFiZWwge1xuICBjb2xvcjogIzVjNWE1YTtcbn1cblxuLmNsX21hcmdpbiB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLmNsX2Fycm93X3JpZ2h0IHtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uY2xfbWlkZGxlX2Fycm93X2xlZnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5jbF9taWRkbGVfYXJyb3dfcmlnaHQge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi5jbF9kZWZhdWx0X3BpYyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5jbF9pbWdfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2xfaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uY2xfbWlkZGxlX2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY2xfc2hhcmVfaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/advertisementdetail/advertisementdetail.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/advertisementdetail/advertisementdetail.page.ts ***!
  \***********************************************************************/
/*! exports provided: AdvertisementdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementdetailPage", function() { return AdvertisementdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/network/network.service */ "./src/app/service/network/network.service.ts");











var AdvertisementdetailPage = /** @class */ (function () {
    function AdvertisementdetailPage(activatedRoute, platform, networkServices, apiCall, networkService, callNumber, googlemaps, router, nativeGeocoder, loader) {
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.networkServices = networkServices;
        this.apiCall = apiCall;
        this.networkService = networkService;
        this.callNumber = callNumber;
        this.googlemaps = googlemaps;
        this.router = router;
        this.nativeGeocoder = nativeGeocoder;
        this.loader = loader;
        this.displayfavourite = "0";
        this.lattitude = 0;
        this.longitude = 0;
        this.advertisementImages = [];
        this.loc = {};
        this.getImage = localStorage.getItem("url");
        this.advertisementArray = [];
        this.getBookmarkObj = {};
        this.keysObject = [];
    }
    AdvertisementdetailPage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    AdvertisementdetailPage.prototype.nextSlide = function (slides) {
        slides.slideNext();
    };
    AdvertisementdetailPage.prototype.prevSlide = function (slides) {
        slides.slidePrev();
    };
    AdvertisementdetailPage.prototype.ngOnInit = function () {
        // var data={"id" : 1, "second" : "abcd"};
    };
    AdvertisementdetailPage.prototype.getDetailAdvertisement = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        this.apiCall.get(this.url).subscribe(function (MyResponse) {
            _this.advertisementArray = MyResponse['result'];
            _this.advertisementId = _this.advertisementArray['id'];
            _this.address = _this.advertisementArray['address'];
            _this.description = _this.advertisementArray['description'];
            _this.title = _this.advertisementArray['title'];
            _this.lattitude = _this.advertisementArray['latitude'];
            _this.longitude = _this.advertisementArray['longitude'];
            _this.price = _this.advertisementArray['price'];
            _this.mobile = _this.advertisementArray['mobile'];
            _this.date = _this.advertisementArray['modified'];
            _this.userId = _this.advertisementArray['userId'];
            _this.categoryId = _this.advertisementArray['categoryId'];
            _this.advertisementImages = _this.advertisementArray['images'];
            localStorage.setItem("ADVERTISEMENTDATA", JSON.stringify(_this.advertisementArray));
            _this.getProfileDetail();
            _this.loader.hideBlockingLoaderAuth();
            _this.loadMap();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkService.checkInternetConnection();
            _this.networkService.onPageLoadCheckInternet();
        });
    };
    AdvertisementdetailPage.prototype.ionViewWillEnter = function () {
        this.loader.showBlockingLoaderAuth();
        this.userId = localStorage.getItem('userId');
        this.getIds = JSON.parse(this.activatedRoute.snapshot.params['sendId']);
        this.advertisementType = this.getIds.adType;
        // this.getIds = JSON.parse(getdata);
        if (this.getIds.status == "users") {
            this.advertisementId = this.getIds.id;
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].version + "users/" + this.userId + "/advertisements/" + this.advertisementId;
            this.getDetailAdvertisement();
        }
        else {
            this.advertisementId = this.getIds.id;
            this.categoryId = this.getIds.categoryId;
            console.log("show categoryId::" + this.categoryId);
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].version + "categories/" + this.categoryId + "/advertisements/" + this.advertisementId;
            this.getDetailAdvertisement();
        }
        var jsonString = localStorage.getItem("BOOKMARK");
        this.getBookmarkObj = JSON.parse(jsonString);
        if (this.getBookmarkObj == null || this.getBookmarkObj == "" || this.getBookmarkObj == undefined) {
            this.getBookmarkObj = {};
        }
        else {
        }
        console.log("show retrieved object:" + this.getBookmarkObj);
        // let data = localStorage.getItem("BOOKMARK");
        // this.getBookmarkObj = JSON.parse(data);
        // console.log("getBookmarkObj::" + this.getBookmarkObj);
        // this.keysObject = Object.keys(this.getBookmarkObj);
        // for(let i=0; i< this.keysObject.length; i++){
        //   if(this.advertisementId == this.keysObject[i]){
        //     this.displayfavourite = "0";
        //   }
        //   else{
        //     this.displayfavourite = "1";
        //   }
        // }
        this.loader.hideBlockingLoaderAuth();
    };
    AdvertisementdetailPage.prototype.goBackword = function () {
        console.log("back navigation::" + this.categoryId);
        this.router.navigate(['/home', { categoryId: this.categoryId }]);
        // window.history.back();
    };
    AdvertisementdetailPage.prototype.getProfileDetail = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].version + "users/" + this.userId;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.profileDetail = MyResponse['result'];
            _this.userName = _this.profileDetail.name;
            _this.userCreated = _this.profileDetail.created;
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    AdvertisementdetailPage.prototype.loadMap = function () {
        var _this = this;
        // this.loader.showBlockingLoaderAuth();
        try {
            this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMaps"].create('map_canvas', {
                camera: {
                    target: {
                        lat: this.lattitude,
                        lng: this.longitude
                    },
                    zoom: 18,
                    tilt: 30
                }
            });
            this.map.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsEvent"].MAP_READY).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var marker;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("Click MAP", data);
                            return [4 /*yield*/, this.map.animateCamera({
                                    target: {
                                        lat: this.lattitude,
                                        lng: this.longitude
                                    },
                                    zoom: 17,
                                    duration: 2000
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.map.addMarker({
                                    title: 'Move pin to adjust',
                                    icon: 'red',
                                    animation: 'DROP',
                                    draggable: true,
                                    visible: true,
                                    position: {
                                        lat: this.lattitude,
                                        lng: this.longitude
                                    },
                                })];
                        case 2:
                            marker = _a.sent();
                            this.getAddressFromCoords(event[0]['lat'], event[0]['lng']);
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        catch (err) {
            console.log("loadmap function", err);
        }
    };
    AdvertisementdetailPage.prototype.getAddressFromCoords = function (lattitude, longitude) {
        var _this = this;
        try {
            console.log("getAddressFromCoords " + lattitude + " " + longitude);
            var options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
                .then(function (result) {
                _this.address = "";
                var responseAddress = [];
                console.log("result", result);
                _this.loc = {};
                _this.loc['location'] = result[0]['subLocality'] + ", " + result[0]['locality'] + ", " + result[0]['subAdministrativeArea'];
                _this.loc['address'] = result[0]['thoroughfare'];
                _this.cityName = result[0]['subAdministrativeArea'] == "" ? result[0]['locality'] : result[0]['subAdministrativeArea'];
                _this.stateName = result[0]['administrativeArea'];
                _this.countryName = result[0]['countryName'];
                console.log("address", _this.loc);
                _this.loader.hideBlockingLoaderAuth();
            })
                .catch(function (error) {
                _this.loader.hideBlockingLoaderAuth();
                _this.address = "Address Not Available!";
                // this.loader.hideBlockingLoaderAuth();
            });
        }
        catch (err) {
            console.log("get address function", err);
            // this.loader.hideBlockingLoaderAuth();
        }
    };
    AdvertisementdetailPage.prototype.makeCall = function () {
        this.callNumber.callNumber(this.mobile, true);
    };
    AdvertisementdetailPage.prototype.sendMessage = function () {
        this.router.navigate(['/detailchat', { name: "Asmita Belhekar" }]);
    };
    AdvertisementdetailPage.prototype.viewProfile = function () {
        this.router.navigate(['/profile', { userId: this.userId }]);
    };
    AdvertisementdetailPage.prototype.editAdvertisement = function () {
        var status = "1";
        localStorage.setItem("postStatus", status);
        this.router.navigate(['/postadvertisement']);
    };
    AdvertisementdetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_10__["NetworkService"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_10__["NetworkService"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
        { type: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMaps"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdvertisementdetailPage.prototype, "mapElement", void 0);
    AdvertisementdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advertisementdetail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advertisementdetail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisementdetail/advertisementdetail.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./advertisementdetail.page.scss */ "./src/app/pages/advertisementdetail/advertisementdetail.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_10__["NetworkService"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_10__["NetworkService"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"],
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMaps"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], AdvertisementdetailPage);
    return AdvertisementdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-advertisementdetail-advertisementdetail-module.js.map