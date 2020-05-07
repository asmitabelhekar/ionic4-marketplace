(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n  <ion-row>\n    <ion-col size=\"3\" (click)=\"showPopup()\">\n      <mat-icon style=\"width:15px;height:18px; color:white;position:fixed;left:10px;cursor: pointer;\">room</mat-icon>\n      <label style=\"color:white;margin-left:35px;font-size:17px;;cursor: pointer;\">Pune</label>\n\n    </ion-col>\n    <ion-col size=\"6\" fxLayoutAlign=\"center center\">\n    <label style=\"color:white; font-size:17px; margin-left:10px\">Holy Hub</label>\n    </ion-col>\n    <ion-col size=\"3\">\n      <mat-icon [matMenuTriggerFor]=\"menu\"\n      style=\"position: fixed; right:25px;color:white;width:15px; height:18px; bottom : 20px;cursor: pointer;\">\n      g_translate</mat-icon>\n    <mat-menu #menu=\"matMenu\" >\n      <div fxLayout=\"row\" style=\"margin-left:20px; margin-top:10px\" *ngFor=\"let language of Languages\">\n        <img src=\"{{language.image}}\" style=\"width:25px; height:25px\" />\n        <label style=\"margin-top:-15px\" mat-menu-item>{{language.name}}</label>\n      </div>\n      \n    </mat-menu>\n    </ion-col>\n  </ion-row>\n\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div style=\"background-color:white\" class=\"cl_margin100\">\n\n    <div>\n      <ion-slides [options]=\"slideOptions\" pager=\"true\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\"\n        class=\"half-black\">\n        <ion-slide *ngFor=\"let item of bannerArray\">\n          <div class=\"cl_img_div\">\n            <img src=\"{{item.image}}\" class=\"cl_margin100\" />\n\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\n              style=\"width:100%;color:white;position:absolute; bottom:0; background: rgba(0, 0, 0, 0.5);\">\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"cl_name_css\">\n                <label style=\"font-size:16px\">{{item.title}}</label>\n              </div>\n              <div class=\"sub_div\">\n                <ion-row style=\"margin-top:3px\">\n                  <ion-col size=\"8\" fxLayoutAlign=\"start center\">\n                    <div class=\"check_width\">\n                      <label  style=\"font-size:12px\">{{item.description}}</label>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"4\" fxLayoutAlign=\"end start\">\n                    <div class=\"b\">\n                      <label style=\"font-size:12px\">{{item.city}} , 120KM</label>\n                    </div>\n                  </ion-col>\n                </ion-row>\n\n              </div>\n\n            </div>\n\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- </div> -->\n\n\n    <div style=\"width:100%; background-color:white;margin-top:15px; height:auto\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-bottom:10px\">\n        <img *ngIf=\"noInternet == '0' \" src=\"../../assets/funnelimg.png\" style=\"width:30px;height:30px\" (click)=\"filter()\" />\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" *ngFor=\"let item of categoryArray\"\n          (click)=\"checkType(item.name, item.id)\" [ngClass]=\"(displayCategory == item.id) ? 'even' : 'odd' \">\n          <img src=\"{{item.image}}\" style=\"width:30px;height:30px\" />\n          <label style=\"margin-top:5px;font-size:12px\">{{item.name}}</label>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"countAdvertisement > 0\" style=\"width:98%;margin-left:1%\">\n\n        <div class=\"row\" *ngFor=\"let item of advertisementArray\">\n          <div >\n            <div class=\"column\" style=\"position:relative\">\n              <img src={{item.images[0]}}  style=\"border-radius: 5px;width:100%; height:100%\" (click)=\"showAdvertisementDetail(image, item.id)\"/>\n              <div (click)=\"bookmarkAdvertisement(item.id)\"\n                style=\"position:absolute; bottom:8px;width:96%; background: rgba(0, 0, 0, 0.5); border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;;\">\n\n                <div fxLayout=\"row\" style=\"width:100%; color:white;padding-top:2px;\">\n                  <div fxFlex=\"50\" fxLayoutAlign=\"start start\">\n                    <div class=\"b\">\n                    <label style=\"font-size:11px;padding-left:5px\"><b>{{item.title}}</b></label>\n                    </div>\n                  </div>\n\n                  <div fxFlex=\"50\" fxLayoutAlign=\"end end\">\n                    <label style=\"font-size:11px;padding-right:5px\"><b>{{item.price}}</b></label>\n                  </div>\n\n                </div>\n\n                <div fxLayout=\"row\" style=\"width:100%; color:white;padding-top:2px; padding-bottom:2px\">\n                  <div fxFlex=\"30\" fxLayoutAlign=\"start start\" >\n                    <ion-icon style=\"color:hotpink\" name=\"woman\"></ion-icon>\n\n                      <ion-icon *ngIf=\"postBookmarkObj [item.id] == true \" style=\"color:hotpink; margin-left:5px\" name=\"heart\"></ion-icon>\n                      <ion-icon *ngIf=\"postBookmarkObj [item.id] != true \" style=\"color:hotpink; margin-left:5px\" name=\"heart-outline\"></ion-icon>\n\n                    <!-- <ion-icon *ngIf=\"keysObject.length == 0\" style=\"color:hotpink; margin-left:5px\" name=\"heart-outline\"></ion-icon> -->\n                    \n                  </div>\n\n\n                  <div fxFlex=\"70\" fxLayoutAlign=\"end start\">\n                    <div class=\"b\" style=\"margin-top:-5px\">\n                      <label style=\"font-size:10px; color:white;padding-right: 5px;\"><b>{{item.address}} ,\n                          120km</b></label>\n                    </div>\n                    <!-- <label style=\"font-size:10px;padding-right:5px\"><b>{{item.address}} , 120km</b></label> -->\n                  </div>\n\n                </div>\n\n\n                <!-- <ion-row style=\"width:100%; margin-top:-5px\">\n                  <ion-col size=\"4\">\n                    <ion-icon style=\"color:hotpink\" name=\"woman\"></ion-icon>\n                    <ion-icon style=\"color:hotpink; margin-left:5px\" name=\"heart\"></ion-icon>\n\n                  </ion-col>\n                  <ion-col size=\"8\" fxLayoutAlign=\"end start\">\n                    <div class=\"b\">\n                      <label style=\"font-size:10px; color:white;padding-right: 11px;\"><b>{{item.address}} ,\n                          120km</b></label>\n                    </div>\n                  </ion-col>\n                </ion-row> -->\n\n\n              </div>\n            </div>\n\n          </div>\n\n\n        </div>\n\n\n      </div>\n      <img style=\"width:100%; height:60px; visibility: hidden;\" />\n      <div *ngIf=\"countAdvertisement == 0 \" style=\"margin-top:20%\">\n        <h3 align=\"center\">No records found.</h3>\n      </div>\n\n\n    </div>\n\n    <div class=\"cl_bottom_fix\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n        <ion-icon name=\"home\" class=\"cl_post_css\" (click)=\"home()\"></ion-icon>\n        <ion-icon name=\"document\" class=\"cl_bottom_nav_css\" (click)=\"openChatList()\"></ion-icon>\n        <ion-icon name=\"add-circle\" class=\"cl_bottom_nav_css\" (click)=\"postAdvertisement()\">\n        </ion-icon>\n        <ion-icon name=\"heart\" class=\"cl_bottom_nav_css\" (click)=\"openFavourite()\"></ion-icon>\n        <ion-icon name=\"person\" class=\"cl_bottom_nav_css\" (click)=\"openProfile()\"></ion-icon>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__);











var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["GooglePlaceModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  height: 120px;\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-bottom: 9px;\n}\n\n.backimg {\n  background-image: url(http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg);\n  height: 20%;\n  width: 20%;\n}\n\n.background-image {\n  --background: url('user.png') 0 0/100% 100% no-repeat;\n}\n\n.background {\n  --background: url('user.png') 0 0/100% 100% no-repeat;\n}\n\n.half-black {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.sub_div {\n  width: 100%;\n  margin-top: -10px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.cl_name_css {\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.cl_margin100 {\n  width: 100%;\n  height: 100%;\n}\n\n.cl_img_div {\n  width: 100%;\n  height: 200px;\n  position: relative;\n}\n\n.cl_bottom_nav_css {\n  width: 30px;\n  height: 30px;\n  color: gray;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  height: 50px;\n  width: 100%;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 30px;\n  color: #152a3f;\n  height: 30px;\n}\n\ndiv.b {\n  white-space: nowrap;\n  width: 80px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\ndiv.check_width {\n  white-space: nowrap;\n  width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.odd {\n  color: black;\n}\n\n.even {\n  color: #f168cb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUNIRjs7QURPQTtFQUNFLCtHQUFBO0VBQ0EsV0FBQTtFQUNDLFVBQUE7QUNKSDs7QURNQTtFQUNFLHFEQUFBO0FDSEY7O0FETUE7RUFDRSxxREFBQTtBQ0hGOztBREtBO0VBQ0UsOEJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQyxpQkFBQTtFQUNDLGlCQUFBO0VBQ0Msa0JBQUE7QUNGTDs7QURLQTtFQUNFLFdBQUE7RUFDQyxrQkFBQTtFQUNDLG1CQUFBO0FDRko7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNDLGFBQUE7RUFDRCxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQyxXQUFBO0VBQ0MsdUJBQUE7QUNGSjs7QURLQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBRE9BO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0pGOztBRFNBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ05GOztBRFdBO0VBR0UsWUFBQTtBQ1ZGOztBRGNBO0VBSUUsY0FBQTtBQ2RGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6MTIwcHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIC8vIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG4gIC8vIG1hcmdpbi10b3A6LTVweDtcbn1cblxuLmJhY2tpbWd7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vZmlzaC5zb2NpYWxmbGl4LmluL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAyL29yYW5nZS1tZXJjZWRlcy1iZW56LWc2My0xNjQ2NTQuanBnKTtcbiAgaGVpZ2h0OjIwJTtcbiAgIHdpZHRoOiAyMCU7XG59XG4uYmFja2dyb3VuZC1pbWFnZXtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3VzZXIucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuLmJhY2tncm91bmR7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy91c2VyLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG4uaGFsZi1ibGFjayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnN1Yl9kaXZ7XG4gIHdpZHRoOjEwMCU7XG4gICBtYXJnaW4tdG9wOi0xMHB4O1xuICAgIHBhZGRpbmctbGVmdDo1cHg7XG4gICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xufVxuXG4uY2xfbmFtZV9jc3N7XG4gIHdpZHRoOjEwMCU7XG4gICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG59XG5cbi5jbF9tYXJnaW4xMDB7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xufVxuXG4uY2xfaW1nX2RpdntcbiAgd2lkdGg6MTAwJTtcbiAgIGhlaWdodDoyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2xfYm90dG9tX25hdl9jc3N7XG4gIHdpZHRoOjMwcHg7XG4gIGhlaWdodDozMHB4O1xuICBjb2xvcjpncmF5O1xufVxuXG4uY2xfYm90dG9tX2ZpeHtcbiAgcG9zaXRpb246IGZpeGVkOyBcbiAgYm90dG9tOjBweDtcbiAgaGVpZ2h0OjUwcHg7XG4gICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsX3Bvc3RfY3Nze1xuICB3aWR0aDozMHB4O1xuICBjb2xvcjogIzE1MmEzZjtcbiAgaGVpZ2h0OjMwcHg7XG4gIC8vIGNvbG9yOnJnYigyNDcsIDk3LCA5Nyk7XG59XG5cblxuZGl2LmIge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbiAgd2lkdGg6IDgwcHg7IFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG59XG5cblxuZGl2LmNoZWNrX3dpZHRoIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG4gIHdpZHRoOiAxMjBweDsgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuXG4ub2RkIHtcblxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOmJsYWNrO1xuICBcbn1cblxuLmV2ZW4ge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG5cbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzE1MmEzZiAhaW1wb3J0YW50O1xuICBjb2xvcjojZjE2OGNiO1xufVxuIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTIwcHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG59XG5cbi5iYWNraW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9maXNoLnNvY2lhbGZsaXguaW4vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDIvb3JhbmdlLW1lcmNlZGVzLWJlbnotZzYzLTE2NDY1NC5qcGcpO1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvdXNlci5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy91c2VyLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbi5oYWxmLWJsYWNrIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc3ViX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmNsX25hbWVfY3NzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsX21hcmdpbjEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jbF9pbWdfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNsX2JvdHRvbV9uYXZfY3NzIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5jbF9ib3R0b21fZml4IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2NzcyB7XG4gIHdpZHRoOiAzMHB4O1xuICBjb2xvcjogIzE1MmEzZjtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5kaXYuYiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiA4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuZGl2LmNoZWNrX3dpZHRoIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLm9kZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmV2ZW4ge1xuICBjb2xvcjogI2YxNjhjYjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pages_popup_popup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/popup/popup.page */ "./src/app/pages/popup/popup.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var _service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var _service_network_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/network/network.service */ "./src/app/service/network/network.service.ts");










var HomePage = /** @class */ (function () {
    function HomePage(dialog, apiCall, toast, alertCtrl, loader, networkServices, menuController, activatedRoute, router) {
        this.dialog = dialog;
        this.apiCall = apiCall;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.networkServices = networkServices;
        this.menuController = menuController;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.keysObject = [];
        this.getBookmarkObj = {};
        this.postBookmarkObj = {};
        this.advertisementModel = {};
        this.noInternet = "0";
        this.displayCategory = "5";
        this.bannerArray = [];
        this.categoryArray = [];
        this.categoryId = 5;
        this.categoryName = "Music";
        this.advertisementArray = [];
        this.dataArray = [
            {
                "name": "Retox Dance Academy",
                "subTitle": "Dance",
                "location": "Mumbai, 120km"
            },
            {
                "name": "Retox Dance Academy",
                "subTitle": "Dance",
                "location": "Mumbai, 120km"
            },
            {
                "name": "Retox Dance Academy",
                "subTitle": "Dance",
                "location": "Mumbai, 120km"
            }
        ];
        this.tabsArray = [
            {
                "img": "../../assets/funnelimg.png",
                "title": ""
            },
            {
                "img": "http://fish.socialflix.in/wp-content/uploads/elementor/thumbs/Dance-olz4x8qtziw6zu189ngvnqhzg8dh3ua0u9mjw3usqo.png",
                "title": "Dance"
            },
            {
                "img": "http://fish.socialflix.in/wp-content/uploads/elementor/thumbs/Yoga-olz3topcdiqselhq91x387unhhce6e8oeh9xtwi8lc.png",
                "title": "Yoga"
            },
            {
                "img": "http://fish.socialflix.in/wp-content/uploads/elementor/thumbs/Meditation-olz55q8dooidt3phptimo3esigjrlgysc9ncv19ukg.png",
                "title": "Meditation"
            },
            {
                "img": "http://fish.socialflix.in/wp-content/uploads/elementor/thumbs/Massage-olz55lj6qiby71wbh9hhtmlhjj6xizg4nmdxgngtfk.png",
                "title": "Massage"
            },
            {
                "img": "http://fish.socialflix.in/wp-content/uploads/elementor/thumbs/Music-olz55tzqg0nj3jk13v54y2gmw018g9dpos9as549vk.png",
                "title": "Music"
            }
        ];
        this.imageArray = [
            {
                "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
            },
            {
                "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
            },
            {
                "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
            },
            {
                "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
            }
        ];
        this.menuController.enable(false);
        this.getCategory();
        this.getLanguages();
        this.getBannerData(this.categoryId);
        this.getAdvertisement(this.categoryId);
        // let id = localStorage.get("userId");
        // alert("show user id:"+id);
    }
    HomePage.prototype.getCategory = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "category/" + 0 + "/sub-category";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.categoryArray = MyResponse['result']['list'];
            _this.loader.hideBlockingLoaderAuth();
            _this.noInternet = '0';
        }, function (error) {
            _this.noInternet = '1';
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    HomePage.prototype.getAdvertisement = function (categoryId) {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "categories/" + categoryId + "/advertisements";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.advertisementArray = MyResponse['result']['list'];
            _this.countAdvertisement = MyResponse['result']['count'];
            //  console.log("advertisement data::"+JSON.stringify(this.advertisementArray));
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    HomePage.prototype.getBannerData = function (categoryId) {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "category/" + categoryId + "/banners";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.bannerArray = MyResponse['result']['list'];
            //  this.bannerImg = this.bannerArray['image'];
            //  console.log("banner data:"+JSON.stringify(this.bannerArray));
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.arrayLength = this.imageArray.length;
        var jsonString = localStorage.getItem("BOOKMARK");
        this.postBookmarkObj = JSON.parse(jsonString);
        if (this.postBookmarkObj == null || this.postBookmarkObj == "" || this.postBookmarkObj == undefined) {
            this.postBookmarkObj = {};
        }
        else {
        }
        console.log("show retrieved object:" + this.postBookmarkObj);
        this.categoryId = this.activatedRoute.snapshot.params['categoryId'];
        if (this.categoryId == undefined) {
            this.categoryId = 5;
            console.log("check ::0");
        }
        else {
            if (this.categoryId == 1) {
                this.categoryName = "Dance";
                console.log("check ::1");
            }
            else if (this.categoryId == 2) {
                this.categoryName = "Yoga";
                console.log("check ::2");
            }
            else if (this.categoryId == 3) {
                this.categoryName = "Meditation";
                console.log("check ::3");
            }
            else if (this.categoryId == 4) {
                this.categoryName = "Massage";
                console.log("check ::4");
            }
            else if (this.categoryId == 5) {
                this.categoryName = "Music";
                console.log("check ::5");
            }
            else {
                this.categoryName = "Music";
                console.log("check ::6");
            }
            this.checkType(this.categoryName, this.categoryId);
        }
        console.log("get categoryId::" + this.categoryId);
        this.getBannerData(this.categoryId);
        this.getAdvertisement(this.categoryId);
    };
    HomePage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    HomePage.prototype.getLanguages = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "languages";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.Languages = MyResponse['result']['list'];
            _this.loader.hideBlockingLoaderAuth();
            _this.noInternet = '0';
        }, function (error) {
            _this.noInternet = '1';
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    HomePage.prototype.filter = function () {
        this.router.navigate(['/showfilterdata']);
    };
    HomePage.prototype.checkType = function (title, id) {
        console.log("check title id ::" + title + "   " + "id" + id);
        this.categoryId = id;
        this.displayCategory = id;
        if (title == "Dance") {
            this.getBannerData(id);
            this.getAdvertisement(id);
            this.imageArray = [
                {
                    "image": "https://i.pinimg.com/564x/54/c9/9b/54c99b01a6e6574724eda35b4ced31a8.jpg"
                },
                {
                    "image": "https://i.pinimg.com/564x/54/c9/9b/54c99b01a6e6574724eda35b4ced31a8.jpg"
                },
                {
                    "image": "https://i.pinimg.com/564x/54/c9/9b/54c99b01a6e6574724eda35b4ced31a8.jpg"
                },
                {
                    "image": "https://i.pinimg.com/564x/54/c9/9b/54c99b01a6e6574724eda35b4ced31a8.jpg"
                },
                {
                    "image": "https://i.pinimg.com/564x/54/c9/9b/54c99b01a6e6574724eda35b4ced31a8.jpg"
                }
            ];
            this.arrayLength = this.imageArray.length;
        }
        else if (title == "Yoga") {
            this.getBannerData(id);
            this.getAdvertisement(id);
            this.imageArray = [
                {
                    "image": "data:image/jpeg;base64,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"
                },
                {
                    "image": "data:image/jpeg;base64,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"
                },
                {
                    "image": "data:image/jpeg;base64,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"
                },
                {
                    "image": "data:image/jpeg;base64,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"
                },
                {
                    "image": "data:image/jpeg;base64,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"
                }
            ];
            this.arrayLength = this.imageArray.length;
        }
        else if (title == "Meditation") {
            this.getBannerData(id);
            this.getAdvertisement(id);
            this.imageArray = [
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-iJYUo5MgjnggZYrfud2ssQWQ-Xm7RaCtkalMhvpqNglOmG9d&usqp=CAU"
                },
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr-iW5ViYcqqh8HtgMANpJXndzF4rwCU7vdZ6y4ZKlDu9m7Id5&usqp=CAU"
                },
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlvN2r9H3T-8NLg1jpB9TWDpqhXXGP6QU5sm3mbzy5Q1Cyyqyj&usqp=CAU"
                },
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXeBX1noYQ2ohp9RRcj6almCOdV1gxfom6IC8IU6rVTq5qMxEN&usqp=CAU"
                },
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk6eFBj7WsT3CA-hXtm1XIXyrOl_4VGM7KeeRyOwrxlWImybUs&usqp=CAU"
                }
            ];
            this.arrayLength = this.imageArray.length;
        }
        else if (title == "Massage") {
            this.getBannerData(id);
            this.getAdvertisement(id);
            this.imageArray = [
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcO627ajsCYsf_HE5L8MXfugvvUe8ouCm8A6688WXreyA73dVf&usqp=CAU"
                },
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcO627ajsCYsf_HE5L8MXfugvvUe8ouCm8A6688WXreyA73dVf&usqp=CAU"
                },
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwWUwSnTHWE5h1DR5mUCwDv_tVlXFx6oehFkEf01Z9_CZtb9tH&usqp=CAU"
                },
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu5et4P2O7Du3TXDC63dPq4S4paJBTqceE-OxmNd2RUTwjdbir&usqp=CAU"
                },
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVirJnIrrnr7FBJCZ63zLAntX4z0ZyuN2g2d_e6H4P0iEwNrYJ&usqp=CAU"
                }
            ];
            this.arrayLength = this.imageArray.length;
        }
        else if (title == "Music") {
            this.getBannerData(id);
            this.getAdvertisement(id);
            this.imageArray = [
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgyL2_fwS1IwHABaNSWKetzVE8r57iiNZ7mXL0fFxEhrq38CZs&usqp=CAU"
                }, {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgyL2_fwS1IwHABaNSWKetzVE8r57iiNZ7mXL0fFxEhrq38CZs&usqp=CAU"
                },
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPbANJ346aMhq6fHmxibMF3nWG4PZ-RYurGwBLXz0J-I2h26s8&usqp=CAU"
                },
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRToTUk2HOJ-99u3Mv4qRCO6V3lq5AC6-J7KVA4mRBOh_2moumu&usqp=CAU"
                },
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGtxDkIhaXqILMX8hDssuRNrX0Xj_XL_G7onLQDGzv8J1T0hwA&usqp=CAU"
                },
                {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNeKeSpRRVSngOb6VR11UlJZcJF5ZiczitJLIza8kX-vTg6bER&usqp=CAU"
                },
            ];
            this.arrayLength = this.imageArray.length;
        }
    };
    HomePage.prototype.presentPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            inputs: [
                                {
                                    name: 'location',
                                    placeholder: 'Location'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Login',
                                    handler: function (data) {
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showPopup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_pages_popup_popup_page__WEBPACK_IMPORTED_MODULE_4__["PopupPage"], {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("show city name:" + result);
                return [2 /*return*/];
            });
        }); });
    };
    HomePage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    HomePage.prototype.postAdvertisement = function () {
        var status = "0";
        localStorage.setItem("postStatus", status);
        this.router.navigate(['/postadvertisement']);
        // this.router.navigate(['/secondpageadvertisement']);
        // this.router.navigate(['/nextadvertisement']);
    };
    HomePage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    HomePage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    HomePage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    HomePage.prototype.showAdvertisementDetail = function (data, id) {
        var sendId = {
            "id": id,
            "categoryId": this.categoryId,
            "status": "category",
            "adType": 1
        };
        // alert("show data::"+JSON.stringify(data));
        localStorage.setItem("url", data);
        console.log("send image::" + id);
        this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(sendId) }]);
    };
    HomePage.prototype.bookmarkAdvertisement = function (advertisementid) {
        var _this = this;
        this.checkStatus = this.postBookmarkObj.hasOwnProperty(advertisementid);
        console.log("check for status:" + this.checkStatus);
        if (this.checkStatus) {
            console.log("before delete:" + (this.postBookmarkObj));
            delete this.postBookmarkObj[advertisementid];
            localStorage.setItem("BOOKMARK", JSON.stringify(this.postBookmarkObj));
            this.removeBookmark(advertisementid);
            console.log("after delete:" + (this.postBookmarkObj));
        }
        else {
            this.postBookmarkObj[advertisementid] = true;
            localStorage.setItem("BOOKMARK", JSON.stringify(this.postBookmarkObj));
            console.log("display object:" + (this.postBookmarkObj));
            this.loader.showBlockingLoaderAuth();
            var send_date = {};
            this.advertisementModel['userId'] = localStorage.getItem("userId");
            send_date['userId'] = this.advertisementModel['userId'];
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "categories/" + this.categoryId + "/advertisements/" + advertisementid + "/bookmark";
            this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
                _this.loader.hideBlockingLoaderAuth();
            }, function (error) {
                _this.presentToast("Please try again");
                _this.loader.hideBlockingLoaderAuth();
            });
        }
    };
    HomePage.prototype.removeBookmark = function (advertisementId) {
        var _this = this;
        this.userId = localStorage.getItem("userId");
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "users/" + this.userId + "/bookmarks";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.advertisementArray = MyResponse['result']['list'];
            for (var i = 0; i < _this.advertisementArray.length; i++) {
                console.log("show advertisement id:" + advertisementId);
                if (_this.advertisementArray[i]['id'] == advertisementId) {
                    console.log("show advertisement bookmark id:" + _this.advertisementArray[i]['bookmarkId']);
                    _this.bookmarkId = _this.advertisementArray[i]['bookmarkId'];
                    console.log("check ------ bookmark id:" + _this.bookmarkId);
                }
                else {
                    console.log("show advertisement bookmark id failure ::" + _this.advertisementArray[i]['bookmarkId']);
                }
            }
            console.log("show advertisement bookmark id:" + _this.bookmarkId);
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "users/" + _this.userId + "/bookmarks/" + _this.bookmarkId;
            _this.apiCall.delete(url).subscribe(function (MyResponse) {
                _this.loader.hideBlockingLoaderAuth();
            }, function (error) {
                _this.presentToast("Please try again");
                _this.loader.hideBlockingLoaderAuth();
            });
        }, function (error) {
        });
    };
    HomePage.prototype.presentToast = function (message) {
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
    HomePage.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
        { type: _service_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _service_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map