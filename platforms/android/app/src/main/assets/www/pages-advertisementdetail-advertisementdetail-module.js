(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advertisementdetail-advertisementdetail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisementdetail/advertisementdetail.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisementdetail/advertisementdetail.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div class=\"cl_img_div\" fxLayoutAlign=\"center center\">\n    <img src=\"{{getImage}}\" style=\"width:100%; height:100%\" />\n\n    <div fxLayout=\"row\" class=\"cl_header\">\n      <ion-row style=\"width:100%\">\n        <ion-col size=\"2\">\n          <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n        </ion-col>\n\n        <ion-col size=\"8\" align=\"center\">\n        </ion-col>\n\n        <ion-col size=\"2\" fxLayoutAlign=\"center center\">\n          <img src=\"../../../assets/sharewhitee.png\" class=\"cl_share_icon\" />\n\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n\n  <div fxLayout=\"row\" style=\"margin-top:10px;\" class=\"cl_margin\">\n    <div fxLayoutAlign=\"start start\" style=\"width:90%; color:black\">\n      <div fxLayout=\"column\" style=\"color:black; font-size:14px; margin-left:4px\">\n        <label>Eicher 1090 36 jeep</label>\n        <label>₹ 6,25,000</label>\n      </div>\n\n    </div>\n\n    <div fxLayoutAlign=\"end start\" style=\"width:10%;\">\n      <ion-icon fxLayoutAlign=\"end start\" name=\"heart-outline\" style=\"width:23px; height:23px;\"></ion-icon>\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" style=\"margin-top:10px;\" class=\"cl_margin\">\n    <div fxLayoutAlign=\"start start\" style=\"width:85%; color:black\">\n      <mat-icon style=\"color:black;font-size:15px\">place</mat-icon>\n      <label style=\"margin-left:-3px\" class=\"cl_gray_label cl_font_14\">FATIMA NAGAR, PUNE </label>\n    </div>\n\n    <div fxLayoutAlign=\"end start\" style=\"width:15%;\">\n      <label class=\"cl_gray_label cl_font_13\">05 FEB</label>\n    </div>\n  </div>\n  <ion-item-divider style=\"width:100%;margin-top:-15px\">\n\n  </ion-item-divider>\n\n  <div class=\"cl_margin\" style=\"margin-top:5px\">\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <label class=\"cl_gray_title cl_font_13\"><b>Details</b></label>\n\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top:-5px\">\n      <ion-col size=\"6\">\n        <label class=\"cl_gray_label cl_font_14\">YEAR</label>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <label class=\"cl_gray_label cl_font_13\">2009</label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top:-5px\">\n      <ion-col size=\"6\">\n        <label class=\"cl_gray_label cl_font_13\">KM DRIVEN</label>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <label class=\"cl_gray_label cl_font_13\">200,000 KM</label>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-item-divider style=\"width:100%;margin-top:-20px; color:black\"></ion-item-divider>\n\n  <div style=\"width:96%;margin-left:2%; margin-top:5px\">\n    <label style=\"font-size:14px; color : rgb(78, 77, 77); margin-left:5px\"><b>Description</b></label>\n  </div>\n  <ion-item-divider style=\"margin-left:-2px; padding-bottom :8px; margin-top:4px\">\n    <label class=\"cl_gray_label cl_font_14\">Want to sell Eicher 1090 Jeep with all documents clear </label>\n  </ion-item-divider>\n\n  <ion-item-divider style=\"padding-bottom:10px\">\n    <div style=\"margin-top:10px\" class=\"cl_margin\" fxLayout=\"row\">\n      <div style=\"width:20%; margin-left:-10px\">\n        <img src=\"../../../assets/defaultprofilepic.png\" fxLayoutAlign=\"start start\" class=\"cl_default_pic\" />\n      </div>\n\n      <div style=\"width:75%\">\n        <label class=\"cl_gray_title cl_font_13\"><b>NITIN JADHAV</b></label><br />\n        <label class=\"cl_gray_label cl_font_14\">Member since Nov 2017</label><br />\n        <label class=\"cl_font_13\" style=\"color : #50b5f2\">SEE PROFILE</label>\n      </div>\n\n      <div fxLayoutAlign=\"center center\">\n\n        <mat-icon class=\"cl_arrow_right\">keyboard_arrow_right</mat-icon>\n      </div>\n\n    </div>\n\n  </ion-item-divider>\n\n  <div class=\"cl_margin\" style=\"margin-top:5px\">\n    <label class=\"cl_adpost\"><b>Add posted at</b></label>\n  </div>\n  <div id=\"map_canvas\" style=\" margin-bottom:20%;margin-top:10px;\"></div>\n\n\n\n\n\n  <div class=\"cl_call_message_maindiv\" fxLayout=\"row\">\n    <div class=\"cl_message_div\" fxLayout=\"row\" (click)=\"sendMessage()\">\n      <div fxFlex=\"50\" fxLayoutAlign=\"center center\">\n        <!-- <ion-icon name=\"call\" ></ion-icon> -->\n        <mat-icon class=\"cl_chat_icon\">chat_bubble_outline</mat-icon>\n      </div>\n      <div fxFlex=\"50\" fxLayoutAlign=\"start center\">\n        <label class=\"cl_font_14\">CHAT</label>\n      </div>\n    </div>\n\n    <div style=\"width:50%;\" (click)=\"makeCall()\">\n      <div fxFlex=\"50\" fxLayoutAlign=\"center center\">\n        <ion-icon name=\"call\" class=\"cl_call_icon\"></ion-icon>\n      </div>\n      <div fxFlex=\"50\" fxLayoutAlign=\"start center\">\n        <label class=\"cl_font_14\">CALL</label>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n#map_canvas {\n  margin-top: 10px;\n  width: 100%;\n  margin: auto;\n  height: 25vh;\n}\n\n.cl_call_icon {\n  width: 18px;\n  height: 18px;\n}\n\n.cl_font_14 {\n  font-size: 14px;\n}\n\n.cl_font_13 {\n  font-size: 13px;\n}\n\n.cl_chat_icon {\n  font-size: 16px;\n  margin-top: 7px;\n}\n\n.cl_message_div {\n  width: 50%;\n  border-right: 2px solid white;\n}\n\n.cl_call_message_maindiv {\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  height: 45px;\n  background-color: #1e69c8;\n  color: white;\n}\n\n.cl_canvas {\n  margin-bottom: 20%;\n  margin-top: 10px;\n}\n\n.cl_adpost {\n  font-size: 14px;\n  color: #4e4d4d;\n  margin-left: 5px;\n}\n\n.cl_gray_title {\n  color: #4e4d4d;\n}\n\n.cl_gray_label {\n  color: #5c5a5a;\n}\n\n.cl_margin {\n  width: 96%;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n\n.cl_arrow_right {\n  color: black;\n  width: 30px;\n  height: 30px;\n}\n\n.cl_default_pic {\n  width: 50px;\n  height: 50px;\n}\n\n.cl_img_div {\n  position: relative;\n  height: 250px;\n  width: 100%;\n}\n\n.cl_header {\n  position: absolute;\n  top: 0px;\n  height: 40px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.cl_share_icon {\n  width: 25px;\n  height: 25px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvaW9uaWM0LW1hcmtldHBsYWNlL3NyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudGRldGFpbC9hZHZlcnRpc2VtZW50ZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudGRldGFpbC9hZHZlcnRpc2VtZW50ZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSEo7O0FEWUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1RGOztBRFlBO0VBQ0UsZUFBQTtBQ1RGOztBRGFBO0VBQ0UsZUFBQTtBQ1ZGOztBRGFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNWRjs7QURhQTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtBQ1ZGOztBRGFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1ZIOztBRGFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsZUFBQTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtBQ1ZIOztBRGNBO0VBQ0UsY0FBQTtBQ1hGOztBRGNBO0VBQ0UsY0FBQTtBQ1hGOztBRGNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1hGOztBRGNBO0VBQ0UsWUFBQTtFQUNDLFdBQUE7RUFDQyxZQUFBO0FDWEo7O0FEY0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1hGOztBRGNBO0VBQ0Usa0JBQUE7RUFDQyxhQUFBO0VBQ0MsV0FBQTtBQ1hKOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQyw4QkFBQTtBQ1hIOztBRGNBO0VBQ0UsV0FBQTtFQUNDLFlBQUE7RUFDRCxpQkFBQTtBQ1hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudGRldGFpbC9hZHZlcnRpc2VtZW50ZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuXG4jbWFwX2NhbnZhc3tcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW46YXV0bztcbiAgICBoZWlnaHQ6IDI1dmg7XG4gIH1cblxuLy8gICAubWF0ZXJpYWwtaWNvbnMge1xuICBcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4gIFxuLy8gfVxuXG4uY2xfY2FsbF9pY29ue1xuICB3aWR0aDoxOHB4OyBcbiAgaGVpZ2h0OjE4cHg7XG59XG5cbi5jbF9mb250XzE0e1xuICBmb250LXNpemU6MTRweDtcbn1cblxuXG4uY2xfZm9udF8xM3tcbiAgZm9udC1zaXplOjEzcHg7XG59XG5cbi5jbF9jaGF0X2ljb257XG4gIGZvbnQtc2l6ZToxNnB4OyBcbiAgbWFyZ2luLXRvcDo3cHg7XG59XG5cbi5jbF9tZXNzYWdlX2RpdntcbiAgd2lkdGg6NTAlOyBcbiAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmNsX2NhbGxfbWVzc2FnZV9tYWluZGl2e1xuICB3aWR0aDoxMDAlOyBcbiAgcG9zaXRpb246IGZpeGVkO1xuICAgYm90dG9tIDowcHg7IFxuICAgaGVpZ2h0OjQ1cHg7IFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNjljODtcbiAgIGNvbG9yOndoaXRlO1xufVxuXG4uY2xfY2FudmFze1xuICBtYXJnaW4tYm90dG9tOjIwJTtcbiAgbWFyZ2luLXRvcDoxMHB4O1xufVxuXG4uY2xfYWRwb3N0e1xuICBmb250LXNpemU6MTRweDtcbiAgIGNvbG9yIDogcmdiKDc4LCA3NywgNzcpO1xuICAgbWFyZ2luLWxlZnQ6NXB4O1xufVxuXG5cbi5jbF9ncmF5X3RpdGxle1xuICBjb2xvciA6IHJnYig3OCwgNzcsIDc3KTtcbn1cblxuLmNsX2dyYXlfbGFiZWx7XG4gIGNvbG9yIDogcmdiKDkyLCA5MCwgOTApO1xufVxuXG4uY2xfbWFyZ2lue1xuICB3aWR0aDo5NiU7XG4gIG1hcmdpbi1sZWZ0OjIlO1xuICBtYXJnaW4tcmlnaHQ6MiU7XG59XG5cbi5jbF9hcnJvd19yaWdodHtcbiAgY29sb3I6YmxhY2s7XG4gICB3aWR0aDozMHB4O1xuICAgIGhlaWdodDozMHB4O1xufVxuXG4uY2xfZGVmYXVsdF9waWN7XG4gIHdpZHRoOjUwcHg7IFxuICBoZWlnaHQ6NTBweDtcbn1cblxuLmNsX2ltZ19kaXZ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGhlaWdodDoyNTBweDtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4uY2xfaGVhZGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICB0b3A6MHB4OyBcbiAgaGVpZ2h0OjQwcHg7IFxuICB3aWR0aDoxMDAlO1xuICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uY2xfc2hhcmVfaWNvbntcbiAgd2lkdGg6MjVweDtcbiAgIGhlaWdodDoyNXB4O1xuICBtYXJnaW4tbGVmdDoxMHB4O1xufSIsIi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbn1cblxuI21hcF9jYW52YXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDI1dmg7XG59XG5cbi5jbF9jYWxsX2ljb24ge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4uY2xfZm9udF8xNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNsX2ZvbnRfMTMge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jbF9jaGF0X2ljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLmNsX21lc3NhZ2VfZGl2IHtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XG59XG5cbi5jbF9jYWxsX21lc3NhZ2VfbWFpbmRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTY5Yzg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsX2NhbnZhcyB7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNsX2FkcG9zdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZTRkNGQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5jbF9ncmF5X3RpdGxlIHtcbiAgY29sb3I6ICM0ZTRkNGQ7XG59XG5cbi5jbF9ncmF5X2xhYmVsIHtcbiAgY29sb3I6ICM1YzVhNWE7XG59XG5cbi5jbF9tYXJnaW4ge1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5jbF9hcnJvd19yaWdodCB7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmNsX2RlZmF1bHRfcGljIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNsX2ltZ19kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xfaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uY2xfc2hhcmVfaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */");

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








var AdvertisementdetailPage = /** @class */ (function () {
    function AdvertisementdetailPage(activatedRoute, platform, callNumber, googlemaps, router, nativeGeocoder, loader) {
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.callNumber = callNumber;
        this.googlemaps = googlemaps;
        this.router = router;
        this.nativeGeocoder = nativeGeocoder;
        this.loader = loader;
        this.lattitude = 18.579343;
        this.longitude = 73.9089168;
        this.loc = {};
        this.getImage = localStorage.getItem("url");
    }
    AdvertisementdetailPage.prototype.ngOnInit = function () {
        // this.getImage = this.activatedRoute.snapshot.params['imageShow'];
        // console.log("show image:"+this.getImage);
        this.loadMap();
        // this.platform.ready().then(() => {
        //   this.loadMap();
        // });
    };
    AdvertisementdetailPage.prototype.ionViewWillEnter = function () {
        // this.getImage = this.activatedRoute.snapshot.params['imageShow'];
        console.log("show image:" + this.getImage);
    };
    AdvertisementdetailPage.prototype.goBackword = function () {
        window.history.back();
    };
    AdvertisementdetailPage.prototype.loadMap = function () {
        var _this = this;
        this.loader.presentLoading();
        try {
            console.log("lat lng", this.longitude, this.lattitude);
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
            console.log("Address Data lattitude two::", this.lattitude);
            console.log("Address Data longitude two::", this.longitude);
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
                _this.loader.stopLoading();
            })
                .catch(function (error) {
                _this.loader.stopLoading();
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
        this.callNumber.callNumber("9527902622", true);
    };
    AdvertisementdetailPage.prototype.sendMessage = function () {
        this.router.navigate(['/detailchat', { name: "Asmita Belhekar" }]);
    };
    AdvertisementdetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
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