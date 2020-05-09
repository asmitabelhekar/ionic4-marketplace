(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\" fxLayoutAlign=\"center center\">\n  <ion-row fxLayoutAlign=\"center center\">\n    <ion-col size=\"1\">\n      <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n    </ion-col>\n    <ion-col size=\"8\" fxLayoutAlign=\"start center\">\n      <ion-label style=\"color:white;\" class=\"TitleText\">Profile</ion-label>\n    </ion-col>\n  <ion-col size=\"3\">\n    <label style=\"position: fixed; right:10px;color:white; bottom: 15px;  font-size:18px\" (click)=\"logOut()\">Log Out</label>\n  </ion-col>\n  </ion-row>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div style=\"height:320px;position: relative; top:0px;background-color: #f1f4f9;\" fxLayoutAlign=\"center center\" *ngIf=\"noInternet == 1 \">\n    <!-- <img src=\"../../../assets/noimage.png\" style=\"width:100%; height:100%;\" /> -->\n    <div style=\"position: absolute; bottom :60px;\" >\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <ion-icon name=\"person\" \n          style=\"width:60px; height:60px; border-radius: 100%;color:white;background-color: rgb(168, 158, 158) ; padding:15px\">\n        </ion-icon>\n        <label   style=\"margin-top:10px; color: black;font-size: 20px;\">{{name}}</label>\n      </div>\n\n\n    </div>\n    <div style=\"height:190px;background-color: #f1f4f9; \"></div>\n\n    <!-- <ion-row>\n      <ion-col size=\"3\">\n        <ion-icon name=\"person\" style=\"width:40px; height:40px; border-radius: 100%;margin-left: 15px;color:white;background-color: rgb(168, 158, 158) ; padding:18px\" ></ion-icon>\n      </ion-col>\n\n      <ion-col size=\"9\" style=\"margin-top:23px; padding-left:15px; font-size: 18px\">\n        <label>Chaitnya</label> \n      </ion-col>\n    </ion-row> -->\n\n  </div>\n \n\n  <ion-card class=\"cl_card_css\" *ngIf=\"noInternet == 1 \">\n    <div style=\"margin-top:10px\">\n\n     \n\n      <ion-row style=\"margin:20px\">\n        <ion-col size=\"1\">\n          <ion-icon style=\"height:19px;width:18px; margin:2px\" name=\"person\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <ion-label class=\"cl_content_fontsize\">{{name}}</ion-label><br />\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin:20px\">\n        <ion-col size=\"1\">\n          <ion-icon style=\"height:19px;width:18px; margin:2px\" name=\"call\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <ion-label class=\"cl_content_fontsize\">{{mobile}}</ion-label><br />\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin:20px\">\n        <ion-col size=\"1\">\n          <ion-icon style=\"height:19px;width:18px; margin:2px\" name=\"mail\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <ion-label class=\"cl_content_fontsize\">{{email}}</ion-label><br />\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row style=\"margin:20px\">\n        <ion-col size=\"1\">\n          <ion-icon style=\"height:19px;width:18px; margin:2px\" name=\"home\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <ion-label class=\"cl_content_fontsize\">Chinchwad, pune-19.</ion-label><br />\n        </ion-col>\n      </ion-row> -->\n\n\n\n\n\n    </div>\n\n\n\n  </ion-card>\n\n\n  <!-- <div id=\"map_canvas\" style=\"margin-bottom:5%;\" *ngIf=\"noInternet == '1' \"></div> -->\n\n\n  <div class=\"cl_bottom_fix\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n      <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n      <ion-icon name=\"document\" class=\"cl_bottom_nav_css\" (click)=\"openChatList()\"></ion-icon>\n      <ion-icon name=\"add-circle\" class=\"cl_bottom_nav_css\" (click)=\"postAdvertisement()\">\n      </ion-icon>\n      <ion-icon name=\"heart\" class=\"cl_bottom_nav_css\" (click)=\"openFavourite()\"></ion-icon>\n      <ion-icon name=\"person\" class=\"cl_post_css\" (click)=\"openProfile()\"></ion-icon>\n    </div>\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");










var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__["GooglePlaceModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cl_bottom_nav_css {\n  width: 30px;\n  height: 30px;\n  color: gray;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  height: 50px;\n  width: 100%;\n  background-color: white;\n  border-top: 1px solid #f1f4f9;\n}\n\n.cl_post_css {\n  width: 30px;\n  height: 30px;\n  color: #152a3f;\n}\n\n.cl_title_fontsize {\n  width: 18px;\n  height: 18px;\n  color: grey;\n}\n\n.cl_content_fontsize {\n  font-size: 17px;\n  color: black;\n  padding: 3px;\n}\n\n#map_canvas {\n  width: 100%;\n  margin: auto;\n  height: 35vh;\n}\n\n.cl_card_css {\n  width: 100%;\n  box-shadow: none !important;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding-bottom: 20px;\n  margin: 0px;\n  margin-top: -30px;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQyxXQUFBO0VBQ0MsdUJBQUE7RUFDQSw2QkFBQTtBQ0FOOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUo7O0FES0E7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNIRjs7QURPRTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0pGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBR0EsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNSRjs7QURhQTtFQUNFLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNWRjs7QURlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNaRjs7QURlQTtFQUdFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ2RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNsX2JvdHRvbV9uYXZfY3Nze1xuICAgIHdpZHRoOjMwcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgY29sb3I6Z3JheTtcbiAgfVxuICBcbiAgLmNsX2JvdHRvbV9maXh7XG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICBib3R0b206MHB4O1xuICAgIGhlaWdodDo1MHB4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2YxZjRmOTtcbiAgfVxuICBcbiAgLmNsX3Bvc3RfY3Nze1xuICAgIHdpZHRoOjMwcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgY29sb3I6IzE1MmEzZjtcbiAgICAvLyBjb2xvcjpyZ2IoMjQ3LCA5NywgOTcpO1xuICB9XG5cblxuLmNsX3RpdGxlX2ZvbnRzaXple1xuICAvLyBtYXJnaW46LTFweDs7XG4gIHdpZHRoOjE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgY29sb3I6IGdyZXk7XG4gIC8vIG1hcmdpbi1yaWdodDoxMHB4O1xuICB9XG4gIFxuICAuY2xfY29udGVudF9mb250c2l6ZXtcbiAgZm9udC1zaXplOjE3cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzozcHg7XG4gIH1cbiAgXG5cbiNtYXBfY2FudmFze1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW46YXV0bztcbiAgaGVpZ2h0OiAzNXZoO1xufVxuXG4uY2xfY2FyZF9jc3N7XG4gIHdpZHRoOjEwMCU7XG4gIC8vIGhlaWdodDo4MCU7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuICBtYXJnaW46MHB4O1xuICBtYXJnaW4tdG9wOi0zMHB4O1xufVxuXG5cblxuLmNsLWJhY2stYnV0dG9ue1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAvLyBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cblxuLlRpdGxlSGVhZGVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dHtcbiAgLy8gZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIC8vIHRleHQtYWxpZ246bGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIi5jbF9ib3R0b21fbmF2X2NzcyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uY2xfYm90dG9tX2ZpeCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjRmOTtcbn1cblxuLmNsX3Bvc3RfY3NzIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6ICMxNTJhM2Y7XG59XG5cbi5jbF90aXRsZV9mb250c2l6ZSB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uY2xfY29udGVudF9mb250c2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAzNXZoO1xufVxuXG4uY2xfY2FyZF9jc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLmNsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xufVxuXG4uVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/network/network.service */ "./src/app/service/network/network.service.ts");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");








var ProfilePage = /** @class */ (function () {
    function ProfilePage(router, networkServices, activatedRoute, loader, menuController, apiCall) {
        this.router = router;
        this.networkServices = networkServices;
        this.activatedRoute = activatedRoute;
        this.loader = loader;
        this.menuController = menuController;
        this.apiCall = apiCall;
        this.noInternet = 1;
        this.menuController.enable(false);
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.userId = this.activatedRoute.snapshot.params['userId'];
        console.log("user id:" + this.userId);
        this.getProfileInfo();
        // this.getCountryCode();
    };
    ProfilePage.prototype.getCountryCode = function () {
        var _this = this;
        var url = "https://www.universal-tutorial.com/api/countries";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            console.log("display::" + MyResponse);
        }, function (error) {
            console.log("display::" + error);
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    ProfilePage.prototype.getProfileInfo = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        this.noInternet = 1;
        if (this.userId == undefined || this.userId == "" || this.userId == null) {
            this.userId = localStorage.getItem('userId');
        }
        else {
        }
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "users/" + this.userId;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.profileDetail = MyResponse['result'];
            _this.name = _this.profileDetail.name;
            _this.mobile = _this.profileDetail.mobile;
            _this.email = _this.profileDetail.email;
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.noInternet = 0;
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    ProfilePage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    ProfilePage.prototype.postAdvertisement = function () {
        this.router.navigate(['/postadvertisement']);
        // this.router.navigate(['/secondpageadvertisement']);
    };
    ProfilePage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    ProfilePage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    ProfilePage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    ProfilePage.prototype.logOut = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
        localStorage.setItem("loginStatus", "no");
    };
    ProfilePage.prototype.goBackword = function () {
        window.history.back();
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map