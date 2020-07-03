(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"3\" (click)=\"showPopup()\" fxLayoutAlign=\"start center\">\n        <mat-icon style=\"font-size:22px;color:white;position:fixed;left:10px;cursor: pointer;\">room</mat-icon>\n        <label style=\"color:white;margin-left:35px;font-size:15px;;cursor: pointer;margin-top:0px\">{{cityName}}</label>\n\n      </ion-col>\n      <ion-col size=\"5\" fxLayoutAlign=\"center center\">\n        <label style=\"color:white; font-size:17px; margin-left: 10px ;margin-top:3px\">Holyhub</label>\n      </ion-col>\n      <ion-col size=\"2\">\n        <img src=\"{{languageImage}}\" [matMenuTriggerFor]=\"menu\" class=\"languageImg\" />\n        <!-- <mat-icon [matMenuTriggerFor]=\"menu\"\n      style=\"position: fixed; right:22px;color:white;font-size:20px; bottom : 15px;cursor: pointer;\">\n      g_translate</mat-icon> -->\n        <mat-menu #menu=\"matMenu\">\n          <div fxLayout=\"row\" style=\"margin-top:10px;\" *ngFor=\"let language of Languages\"\n            [ngClass]=\"language.image == languageImage ? 'selected-category-back' : 'category-back' \"\n            (click)=\"getLanguage(language.image)\">\n            <button fxLayout=\"row\" mat-button style=\"padding:5px;\">\n              <ion-row>\n                <img src=\"{{language.image}}\" style=\"width:20px; height:20px\" />\n                <label style=\"margin-top:-15px\" mat-menu-item>{{language.name}}</label>\n              </ion-row>\n            </button>\n\n          </div>\n\n        </mat-menu>\n      </ion-col>\n      <ion-col size=\"1\" (click)=\"notifications()\"  style=\"margin-left: 10px\" fxLayoutAlign=\"end end\">\n        <!-- <img src=\"{{languageImage}}\" [matMenuTriggerFor]=\"menu\" class=\"notifImg\" /> -->\n      <ion-icon class=\"notifImg\"  name=\"notifications-outline\"></ion-icon>\n    </ion-col>\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<!-- <div *ngIf=\"loadingBlock\">\n  <div class=\"loadingBlockAuth-wrapper\">\n    <div class=\"loadingBlock-box\">\n\n     \n      <div class=\"loaderrr\"></div>\n      <div class=\"text\">\n         &nbsp;&nbsp;Please Wait\n      </div>\n\n    </div>\n  </div>\n</div> -->\n<ion-content [fullscreen]=\"true\">\n \n  <div style=\"background-color:white\" class=\"cl_margin100\">\n\n    <div>\n      <ion-slides [options]=\"slideOptions\" pager=\"true\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\"\n        class=\"half-black\">\n        <ion-slide *ngFor=\"let item of bannerArray\"\n          (click)=\"showAdvertisementDetail(item.categoryId, item.advertisementId, item.isBookmarked)\">\n         \n          <div *ngIf=\"bannerCount != 0 \" class=\"cl_img_div\">\n            <img src=\"{{item.image}}\" class=\"cl_margin100\" />\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"end end\" class=\"checkBack\"\n              style=\"background-image: linear-gradient(to bottom, transparent 15%, rgb(0, 0, 0,1)) ;\">\n\n\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"cl_name_css\">\n                <label style=\"font-size:15px;\">{{item.title}}</label>\n              </div>\n              <div class=\"sub_div\">\n                <ion-row>\n                  <ion-col size=\"8\" fxLayoutAlign=\"start end\">\n\n\n                    <div fxLayoutAlign=\"start start\">\n                      <label class=\"check_width\" style=\"font-size:12px\">{{item.description}}</label>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"4\" fxLayoutAlign=\"end center\">\n                    <div class=\"show_width\">\n                      <label style=\"font-size:12px\">{{item.city}}</label>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n          <!-- <div *ngIf=\"showNoBanner == 1 \" class=\"cl_img_div\">\n            <h3 align=\"center\">No banners available</h3>\n          </div> -->\n        </ion-slide>\n      </ion-slides>\n\n\n      <div fxLayoutAlign=\"center center\" *ngIf=\"showNoBanner == 1 \" class=\"cl_img_div\" style=\"background-color:rgb(175, 171, 171);\">\n        <h5 align=\"center\">No banners posted</h5>\n      </div>\n\n    </div>\n\n\n\n    <div style=\"width:100%; background-color:white;margin-top:10px; height:auto\">\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" style=\"margin-bottom:10px;width:100%;\">\n        <div style=\"width:10%;\" fxLayoutAlign=\"end center\" (click)=\"filter()\">\n          <!-- <mat-icon  *ngIf=\"noInternet == '0' \"  style=\"font-size:40px;color:#fb7645;margin-top:-30px;\">filter_list</mat-icon> -->\n          <!-- <ion-icon *ngIf=\"noInternet == '0' \" name=\"options\" style=\"width:35px;height:50px;color:#fb7645;margin-top:-10px\" (click)=\"filter()\"></ion-icon> -->\n          <img *ngIf=\"noInternet == '0' \" src=\"../../assets/newimgfilter.png\"\n            style=\"width:25px;height:35px;color:#fb7645;\"  />\n        </div>\n        <div  style=\"overflow-x: scroll;width:87%\" fxLayout=\"row\" id=\"container1\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:145px;\" *ngFor=\"let item of categoryArray\"\n            (click)=\"checkType(item.name, item.id)\" [ngClass]=\"(displayCategory == item.id) ? 'even' : 'odd' \">\n            <img fxLayoutAlign=\"center center\" src=\"{{item.image}}\" style=\"width:30px;height:30px\" />\n            <div fxLayoutAlign=\"center center\">\n              <label class=\"categoty-width\" class=\"categoty-width\">{{item.name}}</label>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"width:10%;\" fxLayoutAlign=\"center center\" (click)=\"scrollHorizontal()\">\n          <!-- <mat-icon  *ngIf=\"noInternet == '0' \"  style=\"font-size:40px;color:#fb7645;margin-top:-30px;\">filter_list</mat-icon> -->\n          <!-- <ion-icon *ngIf=\"noInternet == '0' \" name=\"options\" style=\"width:35px;height:50px;color:#fb7645;margin-top:-10px\" (click)=\"filter()\"></ion-icon> -->\n          <!-- <img *ngIf=\"noInternet == '0' \" src=\"../../assets/newimgfilter.png\"\n            style=\"width:25px;height:35px;color:#fb7645;\"  /> -->\n\n            <!-- <div fxFlex=\"20\" fxLayoutAlign=\"center start\"> -->\n              <ion-icon class=\"arrow-icon-css\" style=\"width:25px;height:35px;color:#fb7645;\" name=\"chevron-forward-outline\"></ion-icon>\n            <!-- </div> -->\n\n\n        </div>\n\n\n      </div>\n\n\n\n      <div *ngIf=\"countAdvertisement > 0\" style=\"width:98%;margin-left:1%\">\n\n        <div class=\"row\" *ngFor=\"let item of advertisementArray\">\n          <div>\n            <div class=\"column\" style=\"position:relative\">\n              <img src={{item.images[0]}} style=\"border-radius: 5px;width:100%; height:100%;\"\n                (click)=\"showAdvertisementDetail(item.categoryId, item.id, item.isBookmarked)\" />\n\n\n\n                \n              <div style=\"position:absolute;top:7px;right:8px;width:30px;height:30px;\"\n                (click)=\"bookmarkAdvertisement(item.id,item.isBookmarked,item)\">\n\n              \n                <ion-icon *ngIf=\"item.isBookmarked == 1 \"\n                style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart\"></ion-icon>\n              <ion-icon *ngIf=\"item.isBookmarked == 0 \"\n                style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart-outline\"></ion-icon>\n\n                <ion-icon *ngIf=\"item.gender == 1 \" name=\"male-outline\" style=\"color:#fb7645;width:23px;height:23px; margin-left:5px\"></ion-icon>\n                <ion-icon *ngIf=\"item.gender == 0 \" name=\"female-outline\" style=\"color:#fb7645;width:23px;height:23px; margin-left:5px\"></ion-icon>\n\n                \n                <!-- <img *ngIf=\"item.gender == 1 \" src=\"../../assets/maleicon.png\" style=\"width:18px; height:18px\" />\n                <img *ngIf=\"item.gender == 0 \" src=\"../../assets/femaleicon.png\" style=\"width:18px; height:18px\" /> -->\n\n                <!-- <ion-icon *ngIf=\"postBookmarkObj [item.id] == true \"\n                  style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart\"></ion-icon>\n                <ion-icon *ngIf=\"postBookmarkObj [item.id] != true \"\n                  style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart-outline\"></ion-icon> -->\n              </div>\n\n              <div fxLayoutAlign=\"end end\" fxLayout=\"column\" (click)=\"showAdvertisementDetail(item.categoryId, item.id,item.isBookmarked)\"\n                style=\"position:absolute;background-image: linear-gradient(to bottom, transparent 15%, rgb(0, 0, 0,1)) ;bottom:8px;width:96%;  border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;;\">\n\n                <div fxLayout=\"row\" style=\"width:100%; color:white;padding-top:2px;\">\n                  <div fxFlex=\"100\" fxLayoutAlign=\"start start\">\n                    <div class=\"b\">\n                      <label style=\"font-size:14px;padding-left:5px; font-weight:500\">{{item.title}}</label>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div fxLayout=\"row\" style=\"width:100%; color:white;padding-top:2px; padding-bottom:2px\">\n                  <div fxFlex=\"30\" fxLayoutAlign=\"start start\">\n                    <label style=\"font-size:10px;padding-left:5px;font-weight:normal\">₹ {{item.price | number}}</label>\n\n\n\n                  </div>\n                  <div fxFlex=\"20\">\n\n                  </div>\n\n                  <div fxFlex=\"50\" fxLayoutAlign=\"end end\">\n                    <div class=\"b\" style=\"margin-top:-5px\">\n                      <label\n                        style=\"font-size:10px; color:white;font-weight:normal;padding-right:3px;\">{{item.address}}</label>\n                    </div>\n                  </div>\n\n                </div>\n\n\n\n              </div>\n\n\n            </div>\n\n          </div>\n\n\n        </div>\n        <div style=\"width:100%; margin-top:30px;\" fxLayoutAlign=\"center center\" *ngIf=\"lastPage-1 > currentPage\">\n          <button mat-button (click)=\"viewMore()\">View More</button>\n        </div>\n\n      </div>\n      <img style=\"width:100%; height:60px; visibility: hidden;\" />\n      <div *ngIf=\"countAdvertisement == 0 \" style=\"margin-top:20%\">\n        <h5 align=\"center\">No records found.</h5>\n      </div>\n\n\n    </div>\n\n      <div class=\"cl_bottom_fix\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n      \n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n        (click)=\"home()\">\n        <ion-icon name=\"home\" class=\"cl_post_css\" (click)=\"home()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_selected-text_font\">HOME</label>\n        </div>\n\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n        (click)=\"openChatList()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"document\" (click)=\"openChatList()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">CHATS</label>\n        </div>\n\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n          (click)=\"postAdvertisement()\">\n        <ion-icon class=\"cl_bottom_nav_css\"  name=\"add-circle\" (click)=\"postAdvertisement()\">\n        </ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">SELL</label>\n        </div>\n      \n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n        (click)=\"openFavourite()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"heart\"  (click)=\"openFavourite()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">MY ADS</label>\n        </div>\n\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n          (click)=\"openProfile()\">\n          <ion-icon class=\"cl_bottom_nav_css\" name=\"person\"  (click)=\"openProfile()\"></ion-icon>\n          <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">PROFILE</label>\n        </div>\n\n      </div>\n   \n\n\n\n  </div>\n\n\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  height: 150px;\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-bottom: 9px;\n}\n\n.backimg {\n  background-image: url(http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg);\n  height: 20%;\n  width: 20%;\n}\n\n.background-image {\n  --background: url('user.png') 0 0/100% 100% no-repeat;\n}\n\n.background {\n  --background: url('user.png') 0 0/100% 100% no-repeat;\n}\n\n.half-black {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.sub_div {\n  width: 100%;\n  margin-top: -10px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.checkBack {\n  width: 100%;\n  color: white;\n  position: absolute;\n  bottom: 0;\n  padding-top: 10px;\n}\n\n.cl_name_css {\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.cl_margin100 {\n  width: 100%;\n  height: 100%;\n}\n\n.cl_img_div {\n  width: 100%;\n  height: 200px;\n  position: relative;\n}\n\n.cl_bottom_nav_css {\n  width: 24px;\n  height: 24px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 8px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 24px;\n  height: 24px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 10px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 10px;\n  color: #fb7645;\n}\n\n.cl_icon {\n  width: 25px;\n  margin: 5px;\n  height: 20px;\n}\n\ndiv.show_width {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\ndiv.b {\n  white-space: nowrap;\n  margin-right: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nlabel.categoty-width {\n  white-space: nowrap;\n  width: 75px;\n  text-align: center;\n  margin-top: 5px;\n  font-size: 11px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nlabel.check_width {\n  white-space: nowrap;\n  width: 95px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.odd {\n  color: black;\n}\n\n.even {\n  color: #fb7645;\n}\n\n.languageImg {\n  width: 27px;\n  height: 27px;\n  right: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.notifImg {\n  width: 27px;\n  height: 27px;\n  position: fixed;\n  right: 2px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.selected-category-back {\n  background-color: #f1f4f9;\n}\n\n.category-back {\n  background-color: white;\n}\n\n.loadingBlockAuth-wrapper {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.loadingBlockAuth-wrapper .loadingBlock-box {\n  width: 174px;\n  height: 64px;\n  background-color: white;\n  border-radius: 2px;\n  box-shadow: 3px 3px 10px 0px black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n\n.loadingBlockAuth-wrapper .loadingBlock-box .spinner-layer {\n  border-color: #303F9F;\n}\n\n.loadingBlockAuth-wrapper .loadingBlock-box .text p {\n  padding-left: 10px;\n  font-size: 14px;\n}\n\n.loadingBlockAuth-wrapper .spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-color: #26a69a;\n}\n\n.loadingBlockAuth-wrapper .spinner-blue,\n.loadingBlockAuth-wrapper .spinner-blue-only {\n  border-color: #4285f4;\n}\n\n.loadingBlockAuth-wrapper .spinner-red,\n.loadingBlockAuth-wrapper .spinner-red-only {\n  border-color: #db4437;\n}\n\n.loadingBlockAuth-wrapper .spinner-yellow,\n.loadingBlockAuth-wrapper .spinner-yellow-only {\n  border-color: #f4b400;\n}\n\n.loadingBlockAuth-wrapper .spinner-green,\n.loadingBlockAuth-wrapper .spinner-green-only {\n  border-color: #0f9d58;\n}\n\n.loadingBlockAuth-wrapper .gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.loadingBlockAuth-wrapper .gap-patch .circle {\n  width: 1000%;\n  left: -450%;\n}\n\n.loadingBlockAuth-wrapper .circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.loadingBlockAuth-wrapper .circle-clipper .circle {\n  width: 200%;\n  height: 100%;\n  border-width: 3px;\n  /* STROKEWIDTH */\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent !important;\n  border-radius: 50%;\n  -webkit-animation: none;\n  animation: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.loadingBlockAuth-wrapper .circle-clipper.left .circle {\n  left: 0;\n  border-right-color: transparent !important;\n  transform: rotate(129deg);\n}\n\n.loadingBlockAuth-wrapper .circle-clipper.right .circle {\n  left: -100%;\n  border-left-color: transparent !important;\n  transform: rotate(-129deg);\n}\n\n.loadingBlockAuth-wrapper .active .circle-clipper.left .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.loadingBlockAuth-wrapper .active .circle-clipper.right .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.loadingBlockAuth-wrapper .icon-css {\n  height: 20px;\n  width: 20px;\n  margin: 2px;\n  color: #fb7645;\n}\n\n.loadingBlockAuth-wrapper .arrow-icon-css {\n  height: 25px;\n  width: 25px;\n  margin: 2px;\n  color: #fb7645;\n}\n\n@-webkit-keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n  }\n  50% {\n    -webkit-transform: rotate(-5deg);\n  }\n  to {\n    -webkit-transform: rotate(130deg);\n  }\n}\n\n@keyframes left-spin {\n  from {\n    transform: rotate(130deg);\n  }\n  50% {\n    transform: rotate(-5deg);\n  }\n  to {\n    transform: rotate(130deg);\n  }\n}\n\n@-webkit-keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n  }\n  50% {\n    -webkit-transform: rotate(5deg);\n  }\n  to {\n    -webkit-transform: rotate(-130deg);\n  }\n}\n\n@keyframes right-spin {\n  from {\n    transform: rotate(-130deg);\n  }\n  50% {\n    transform: rotate(5deg);\n  }\n  to {\n    transform: rotate(-130deg);\n  }\n}\n\n.loaderrr {\n  border: 2px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 2px solid #357DF6;\n  width: 40px;\n  height: 40px;\n  -webkit-animation: spin 1s linear infinite;\n  /* Safari */\n  animation: spin 1s linear infinite;\n}\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Frc2hheS5tYWRrZS9EZXNrdG9wL0V4ZXJjaXNlL2lvbmljNC1tYXJrZXRwbGFjZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUNIRjs7QURPQTtFQUNFLCtHQUFBO0VBQ0EsV0FBQTtFQUNDLFVBQUE7QUNKSDs7QURNQTtFQUNFLHFEQUFBO0FDSEY7O0FETUE7RUFDRSxxREFBQTtBQ0hGOztBREtBO0VBQ0UsOEJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQyxpQkFBQTtFQUNDLGlCQUFBO0VBQ0Msa0JBQUE7QUNGTDs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURRQTtFQUNFLFdBQUE7RUFDQyxrQkFBQTtFQUNDLG1CQUFBO0FDTEo7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNDLGFBQUE7RUFDRCxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtFQUdBLHlCQUFBO0FDVEY7O0FEWUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0MsNkJBQUE7RUFDQyx1QkFBQTtBQ1RKOztBRFlBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUdBLHlCQUFBO0FDWEY7O0FEZUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNaRjs7QURlQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNaRjs7QURlQTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0MsWUFBQTtBQ2JIOztBRGtDQTtFQUNFLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSx1QkFBQTtBQ2hDRjs7QURvQ0E7RUFDRSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ2xDRjs7QUR1Q0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ3BDRjs7QUR1Q0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDcENGOztBRHdDQTtFQUdFLFlBQUE7QUN2Q0Y7O0FENENBO0VBSUUsY0FBQTtBQzVDRjs7QUQrQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVDLFdBQUE7RUFDQSxrQkFBQTtFQUNELGVBQUE7QUM3Q0Y7O0FEZ0RBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0QsZUFBQTtBQzdDRjs7QURnREE7RUFDRSx5QkFBQTtBQzdDRjs7QURnREU7RUFDQSx1QkFBQTtBQzdDRjs7QURrREE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDL0NGOztBRGdERTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQzlDTjs7QURnRE07RUFDSSxxQkFBQTtBQzlDVjs7QURrRFU7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNoRGQ7O0FEb0RFO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ2xETjs7QURxREk7O0VBRUUscUJBQUE7QUNuRE47O0FEc0RJOztFQUVFLHFCQUFBO0FDcEROOztBRHVESTs7RUFFRSxxQkFBQTtBQ3JETjs7QUR3REk7O0VBRUUscUJBQUE7QUN0RE47O0FEd0RJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ3RETjs7QUR5REk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ3ZETjs7QUQwREk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDeEROOztBRDJESTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUN6RE47O0FENERJO0VBQ0UsT0FBQTtFQUNBLDBDQUFBO0VBRUEseUJBQUE7QUMxRE47O0FENkRJO0VBQ0UsV0FBQTtFQUNBLHlDQUFBO0VBRUEsMEJBQUE7QUMzRE47O0FEOERJO0VBQ0Usc0JBQUE7RUFDQSw4RUFBQTtFQUNBLHNFQUFBO0FDNUROOztBRCtESTtFQUNFLHNCQUFBO0VBQ0EsK0VBQUE7RUFDQSx1RUFBQTtBQzdETjs7QURnRUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNDLFdBQUE7RUFDQSxjQUFBO0FDOURQOztBRGlFSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0MsV0FBQTtFQUNBLGNBQUE7QUMvRFA7O0FEbUVJO0VBQ0U7SUFDRSxpQ0FBQTtFQ2pFTjtFRG1FSTtJQUNFLGdDQUFBO0VDakVOO0VEbUVJO0lBQ0UsaUNBQUE7RUNqRU47QUFDRjs7QURvRUk7RUFDRTtJQUVVLHlCQUFBO0VDbEVkO0VEb0VJO0lBRVUsd0JBQUE7RUNsRWQ7RURvRUk7SUFFVSx5QkFBQTtFQ2xFZDtBQUNGOztBRHFFSTtFQUNFO0lBQ0Usa0NBQUE7RUNuRU47RURxRUk7SUFDRSwrQkFBQTtFQ25FTjtFRHFFSTtJQUNFLGtDQUFBO0VDbkVOO0FBQ0Y7O0FEc0VJO0VBQ0U7SUFFVSwwQkFBQTtFQ3BFZDtFRHNFSTtJQUVVLHVCQUFBO0VDcEVkO0VEc0VJO0lBRVUsMEJBQUE7RUNwRWQ7QUFDRjs7QUR5RUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQTRDLFdBQUE7RUFDNUMsa0NBQUE7QUNyRUY7O0FEd0VBLFdBQUE7O0FBQ0E7RUFDRTtJQUFLLCtCQUFBO0VDcEVMO0VEcUVBO0lBQU8saUNBQUE7RUNsRVA7QUFDRjs7QURvRUE7RUFDRTtJQUFLLHVCQUFBO0VDakVMO0VEa0VBO0lBQU8seUJBQUE7RUMvRFA7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OjE1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICAvLyBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICAvLyBtYXJnaW4tdG9wOi01cHg7XG59XG5cbi5iYWNraW1ne1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL2Zpc2guc29jaWFsZmxpeC5pbi93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMi9vcmFuZ2UtbWVyY2VkZXMtYmVuei1nNjMtMTY0NjU0LmpwZyk7XG4gIGhlaWdodDoyMCU7XG4gICB3aWR0aDogMjAlO1xufVxuLmJhY2tncm91bmQtaW1hZ2V7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy91c2VyLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbi5iYWNrZ3JvdW5ke1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvdXNlci5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuLmhhbGYtYmxhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zdWJfZGl2e1xuICB3aWR0aDoxMDAlO1xuICAgbWFyZ2luLXRvcDotMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xuICAgICBwYWRkaW5nLXJpZ2h0OjVweDtcbiAgICAgXG59XG5cblxuLmNoZWNrQmFja3tcbiAgd2lkdGg6MTAwJTtcbiAgY29sb3I6d2hpdGU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBib3R0b206MDsgXG4gIHBhZGRpbmctdG9wOjEwcHg7XG59XG5cblxuLmNsX25hbWVfY3Nze1xuICB3aWR0aDoxMDAlO1xuICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xufVxuXG4uY2xfbWFyZ2luMTAwe1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbn1cblxuLmNsX2ltZ19kaXZ7XG4gIHdpZHRoOjEwMCU7XG4gICBoZWlnaHQ6MjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNsX2JvdHRvbV9uYXZfY3Nze1xuICB3aWR0aDoyNHB4O1xuICBoZWlnaHQ6MjRweDtcbiAgLy8gY29sb3I6Z3JheTtcblxuICB3aWR0aDoxMDAlO1xuICBjb2xvcjpncmF5O1xuICAvLyBwYWRkaW5nLXRvcDo1cHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXh7XG4gIHBvc2l0aW9uOiBmaXhlZDsgXG4gIGJvdHRvbTowcHg7XG4gIHdpZHRoOjEwMCU7XG4gIHBhZGRpbmc6OHB4O1xuICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2YxZjRmOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsX3Bvc3RfY3Nze1xuICB3aWR0aDoxMDAlO1xuICB3aWR0aDoyNHB4O1xuICBoZWlnaHQ6MjRweDtcbiAgY29sb3I6ICNmYjc2NDU7XG4gIC8vIHBhZGRpbmctdG9wOjVweDtcbiAgLy8gcGFkZGluZy1ib3R0b206NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuIFxufVxuXG4uY2xfdGV4dF9mb250e1xuICBwYWRkaW5nLXRvcDo0cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udHtcbiAgcGFkZGluZy10b3A6NHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xufVxuXG4uY2xfaWNvbntcbiAgLy8gZm9udC1zaXplOjI1cHg7XG4gIHdpZHRoOjI1cHg7XG4gIG1hcmdpbjo1cHg7XG4gICBoZWlnaHQ6MjBweDtcbn1cblxuXG4vLyAuY2xfYm90dG9tX2ZpeHtcbi8vICAgcG9zaXRpb246IGZpeGVkOyBcbi8vICAgYm90dG9tOjBweDtcbi8vICAgbWFyZ2luOjEwcHg7XG4vLyAgIGhlaWdodDo1MHB4O1xuLy8gICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2YxZjRmOTtcbi8vIH1cblxuLy8gLmNsX3Bvc3RfY3Nze1xuICAvLyB3aWR0aDozMHB4O1xuICAvLyBoZWlnaHQ6MzBweDtcbi8vICAgY29sb3I6I2ZiNzY0NTtcbi8vIH1cblxuXG5kaXYuc2hvd193aWR0aCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICAvLyB3aWR0aDogOTVweDsgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuZGl2LmIge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbiAgLy8gd2lkdGg6IDc1cHg7IFxuICBtYXJnaW4tcmlnaHQ6NHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG59XG5cblxubGFiZWwuY2F0ZWdvdHktd2lkdGh7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICB3aWR0aDogNzVweDsgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDo1cHg7XG4gIGZvbnQtc2l6ZToxMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXG59XG5cbmxhYmVsLmNoZWNrX3dpZHRoIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG4gIHdpZHRoOiA5NXB4OyBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxufVxuXG5cbi5vZGQge1xuXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6YmxhY2s7XG4gIC8vIHdpZHRoOjE3JTtcbiAgXG59XG5cbi5ldmVuIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAvLyB3aWR0aDoxNyU7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMxNTJhM2YgIWltcG9ydGFudDtcbiAgY29sb3I6I2ZiNzY0NTtcbn1cblxuLmxhbmd1YWdlSW1ne1xuICB3aWR0aDoyN3B4O1xuICBoZWlnaHQ6MjdweDtcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAgcmlnaHQ6MTBweDtcbiAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpZkltZ3tcbiAgd2lkdGg6MjdweDtcbiAgaGVpZ2h0OjI3cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgIHJpZ2h0OjJweDtcbiAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3RlZC1jYXRlZ29yeS1iYWNre1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY5O1xuICB9XG4gIFxuICAuY2F0ZWdvcnktYmFja3tcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7O1xuICB9XG5cblxuXG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC41KTtcbiAgei1pbmRleDogMTAwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAubG9hZGluZ0Jsb2NrLWJveHtcbiAgICAgIHdpZHRoOiAxNzRweDtcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IDBweCBibGFjaztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAuc3Bpbm5lci1sYXllcntcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMzMDNGOUY7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0e1xuICAgICAgICAgIHB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICAuc3Bpbm5lci1sYXllciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBib3JkZXItY29sb3I6ICMyNmE2OWE7XG4gICAgfVxuICAgIFxuICAgIC5zcGlubmVyLWJsdWUsXG4gICAgLnNwaW5uZXItYmx1ZS1vbmx5IHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzQyODVmNDtcbiAgICB9XG4gICAgXG4gICAgLnNwaW5uZXItcmVkLFxuICAgIC5zcGlubmVyLXJlZC1vbmx5IHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2RiNDQzNztcbiAgICB9XG4gICAgXG4gICAgLnNwaW5uZXIteWVsbG93LFxuICAgIC5zcGlubmVyLXllbGxvdy1vbmx5IHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2Y0YjQwMDtcbiAgICB9XG4gICAgXG4gICAgLnNwaW5uZXItZ3JlZW4sXG4gICAgLnNwaW5uZXItZ3JlZW4tb25seSB7XG4gICAgICBib3JkZXItY29sb3I6ICMwZjlkNTg7XG4gICAgfVxuICAgIC5nYXAtcGF0Y2gge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogNDUlO1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICAgIFxuICAgIC5nYXAtcGF0Y2ggLmNpcmNsZSB7XG4gICAgICB3aWR0aDogMTAwMCU7XG4gICAgICBsZWZ0OiAtNDUwJTtcbiAgICB9XG4gICAgXG4gICAgLmNpcmNsZS1jbGlwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICBcbiAgICAuY2lyY2xlLWNsaXBwZXIgLmNpcmNsZSB7XG4gICAgICB3aWR0aDogMjAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgICAgLyogU1RST0tFV0lEVEggKi9cbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XG4gICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gICAgXG4gICAgLmNpcmNsZS1jbGlwcGVyLmxlZnQgLmNpcmNsZSB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjlkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTI5ZGVnKTtcbiAgICB9XG4gICAgXG4gICAgLmNpcmNsZS1jbGlwcGVyLnJpZ2h0IC5jaXJjbGUge1xuICAgICAgbGVmdDogLTEwMCU7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEyOWRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTI5ZGVnKTtcbiAgICB9XG4gICAgXG4gICAgLmFjdGl2ZSAuY2lyY2xlLWNsaXBwZXIubGVmdCAuY2lyY2xlIHtcbiAgICAgIC8qIGR1cmF0aW9uOiBBUkNUSU1FICovXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogbGVmdC1zcGluIDEzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlIGJvdGg7XG4gICAgICBhbmltYXRpb246IGxlZnQtc3BpbiAxMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoO1xuICAgIH1cbiAgICBcbiAgICAuYWN0aXZlIC5jaXJjbGUtY2xpcHBlci5yaWdodCAuY2lyY2xlIHtcbiAgICAgIC8qIGR1cmF0aW9uOiBBUkNUSU1FICovXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogcmlnaHQtc3BpbiAxMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoO1xuICAgICAgYW5pbWF0aW9uOiByaWdodC1zcGluIDEzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlIGJvdGg7XG4gICAgfVxuXG4gICAgLmljb24tY3Nze1xuICAgICAgaGVpZ2h0OjIwcHg7XG4gICAgICB3aWR0aDoyMHB4O1xuICAgICAgIG1hcmdpbjoycHg7XG4gICAgICAgY29sb3I6I2ZiNzY0NTtcbiAgICB9XG4gICAgXG4gICAgLmFycm93LWljb24tY3Nze1xuICAgICAgaGVpZ2h0OjI1cHg7XG4gICAgICB3aWR0aDoyNXB4O1xuICAgICAgIG1hcmdpbjoycHg7XG4gICAgICAgY29sb3I6I2ZiNzY0NTtcbiAgICB9XG5cblxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBsZWZ0LXNwaW4ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcbiAgICAgIH1cbiAgICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBrZXlmcmFtZXMgbGVmdC1zcGluIHtcbiAgICAgIGZyb20ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcbiAgICAgIH1cbiAgICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIEAtd2Via2l0LWtleWZyYW1lcyByaWdodC1zcGluIHtcbiAgICAgIGZyb20ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICAgICAgfVxuICAgICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQGtleWZyYW1lcyByaWdodC1zcGluIHtcbiAgICAgIGZyb20ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICAgICAgfVxuICAgICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbn1cblxuLmxvYWRlcnJyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzM1N0RGNjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLyogU2FmYXJpICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn0iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDlweDtcbn1cblxuLmJhY2tpbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL2Zpc2guc29jaWFsZmxpeC5pbi93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMi9vcmFuZ2UtbWVyY2VkZXMtYmVuei1nNjMtMTY0NjU0LmpwZyk7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMjAlO1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZSB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy91c2VyLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3VzZXIucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuLmhhbGYtYmxhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zdWJfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uY2hlY2tCYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY2xfbmFtZV9jc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2xfbWFyZ2luMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNsX2ltZ19kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2xfYm90dG9tX25hdl9jc3Mge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jbF9ib3R0b21fZml4IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY0Zjk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY2xfcG9zdF9jc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICNmYjc2NDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jbF90ZXh0X2ZvbnQge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jbF9zZWxlY3RlZC10ZXh0X2ZvbnQge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xufVxuXG4uY2xfaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBtYXJnaW46IDVweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG5kaXYuc2hvd193aWR0aCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5kaXYuYiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxubGFiZWwuY2F0ZWdvdHktd2lkdGgge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogNzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbmxhYmVsLmNoZWNrX3dpZHRoIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDk1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ub2RkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZXZlbiB7XG4gIGNvbG9yOiAjZmI3NjQ1O1xufVxuXG4ubGFuZ3VhZ2VJbWcge1xuICB3aWR0aDogMjdweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICByaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpZkltZyB7XG4gIHdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3RlZC1jYXRlZ29yeS1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjRmOTtcbn1cblxuLmNhdGVnb3J5LWJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLmxvYWRpbmdCbG9jay1ib3gge1xuICB3aWR0aDogMTc0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IDBweCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5sb2FkaW5nQmxvY2stYm94IC5zcGlubmVyLWxheWVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzAzRjlGO1xufVxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAubG9hZGluZ0Jsb2NrLWJveCAudGV4dCBwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5zcGlubmVyLWxheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBib3JkZXItY29sb3I6ICMyNmE2OWE7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5zcGlubmVyLWJsdWUsXG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5zcGlubmVyLWJsdWUtb25seSB7XG4gIGJvcmRlci1jb2xvcjogIzQyODVmNDtcbn1cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLnNwaW5uZXItcmVkLFxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAuc3Bpbm5lci1yZWQtb25seSB7XG4gIGJvcmRlci1jb2xvcjogI2RiNDQzNztcbn1cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLnNwaW5uZXIteWVsbG93LFxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAuc3Bpbm5lci15ZWxsb3ctb25seSB7XG4gIGJvcmRlci1jb2xvcjogI2Y0YjQwMDtcbn1cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLnNwaW5uZXItZ3JlZW4sXG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5zcGlubmVyLWdyZWVuLW9ubHkge1xuICBib3JkZXItY29sb3I6ICMwZjlkNTg7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5nYXAtcGF0Y2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNDUlO1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLmdhcC1wYXRjaCAuY2lyY2xlIHtcbiAgd2lkdGg6IDEwMDAlO1xuICBsZWZ0OiAtNDUwJTtcbn1cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLmNpcmNsZS1jbGlwcGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAuY2lyY2xlLWNsaXBwZXIgLmNpcmNsZSB7XG4gIHdpZHRoOiAyMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICAvKiBTVFJPS0VXSURUSCAqL1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5jaXJjbGUtY2xpcHBlci5sZWZ0IC5jaXJjbGUge1xuICBsZWZ0OiAwO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTI5ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTI5ZGVnKTtcbn1cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLmNpcmNsZS1jbGlwcGVyLnJpZ2h0IC5jaXJjbGUge1xuICBsZWZ0OiAtMTAwJTtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEyOWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMjlkZWcpO1xufVxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAuYWN0aXZlIC5jaXJjbGUtY2xpcHBlci5sZWZ0IC5jaXJjbGUge1xuICAvKiBkdXJhdGlvbjogQVJDVElNRSAqL1xuICAtd2Via2l0LWFuaW1hdGlvbjogbGVmdC1zcGluIDEzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlIGJvdGg7XG4gIGFuaW1hdGlvbjogbGVmdC1zcGluIDEzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlIGJvdGg7XG59XG4ubG9hZGluZ0Jsb2NrQXV0aC13cmFwcGVyIC5hY3RpdmUgLmNpcmNsZS1jbGlwcGVyLnJpZ2h0IC5jaXJjbGUge1xuICAvKiBkdXJhdGlvbjogQVJDVElNRSAqL1xuICAtd2Via2l0LWFuaW1hdGlvbjogcmlnaHQtc3BpbiAxMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZSBib3RoO1xuICBhbmltYXRpb246IHJpZ2h0LXNwaW4gMTMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGUgYm90aDtcbn1cbi5sb2FkaW5nQmxvY2tBdXRoLXdyYXBwZXIgLmljb24tY3NzIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xufVxuLmxvYWRpbmdCbG9ja0F1dGgtd3JhcHBlciAuYXJyb3ctaWNvbi1jc3Mge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6ICNmYjc2NDU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbGVmdC1zcGluIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsZWZ0LXNwaW4ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyByaWdodC1zcGluIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlnaHQtc3BpbiB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xuICB9XG59XG5cbi5sb2FkZXJyciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzNTdERjY7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgLyogU2FmYXJpICovXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi8qIFNhZmFyaSAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */");

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
/* harmony import */ var _pages_filtercategory_filtercategory_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/filtercategory/filtercategory.page */ "./src/app/pages/filtercategory/filtercategory.page.ts");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");












var HomePage = /** @class */ (function () {
    function HomePage(dialog, apiCall, toast, alertCtrl, loader, google, networkServices, menuController, activatedRoute, platform, routerOutlet, router) {
        var _this = this;
        this.dialog = dialog;
        this.apiCall = apiCall;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.google = google;
        this.networkServices = networkServices;
        this.menuController = menuController;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.routerOutlet = routerOutlet;
        this.router = router;
        this.showNoBanner = 0;
        this.categoryId = "clear";
        this.categoryName = "Music";
        this.noInternet = "0";
        this.displayCategory = "clear";
        this.languageImage = "";
        this.cityName = "";
        this.currentPage = 0;
        this.parentArray = [];
        this.keysObject = [];
        this.bannerArray = [];
        this.categoryArray = [];
        this.advertisementArray = [];
        this.getBookmarkObj = {};
        this.postBookmarkObj = {};
        this.advertisementModel = {};
        this.firstView = 1;
        this.menuController.enable(false);
        this.getCategory();
        this.getLanguages();
        this.platform = platform;
        this.platform.backButton.subscribeWithPriority(-1, function () {
            if (!_this.routerOutlet.canGoBack()) {
                navigator['app'].exitApp();
            }
        });
        // this.getBannerData(this.categoryId);
        // this.advertisementArray = [];
        // this.currentPage = 0;
        // this.getAdvertisement(this.categoryId);
    }
    HomePage.prototype.ngOnInit = function () {
        // this.loader.blockingLoaderAuth.subscribe(event => {
        //   this.loadingBlock = event;
        // });
        // this.advertisementArray = [];
        // this.currentPage = 0;
        // this.getAdvertisement(this.categoryId);
        // var data={"id" : 1, "second" : "abcd"};
    };
    HomePage.prototype.ionViewWillLeave = function () {
        // this.navCtrl.popToRoot();
        console.log("Looks like I’m about to leave :11");
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.categoryId = this.activatedRoute.snapshot.params['categoryId'];
        this.advertisementArray = [];
        // this.currentPage = 0;
        // this.getAdvertisement(this.categoryId);
        var city = localStorage.getItem("cityname");
        if (city == "" || city == "undefined" || city == null) {
            this.cityName = "";
            console.log("city name display undefined:" + city);
        }
        else {
            this.cityName = city;
            console.log("city name display:" + city);
        }
        // var jsonString = localStorage.getItem("BOOKMARK");
        // this.postBookmarkObj = JSON.parse(jsonString);
        // if (this.postBookmarkObj == null || this.postBookmarkObj == "" || this.postBookmarkObj == undefined) {
        //   this.postBookmarkObj = {};
        // } else {
        // }
        // console.log("show retrieved object:" + this.postBookmarkObj);
        if (this.categoryId == undefined) {
            this.categoryId = "clear";
            console.log("check ::0");
            this.advertisementArray = [];
            this.currentPage = 0;
            this.getAdvertisement(this.categoryId);
            this.getBannerData(this.categoryId);
        }
        else {
            // if (this.categoryId == 1) {
            //   this.categoryName = "Dance";
            //   console.log("check ::1");
            // } else if (this.categoryId == 2) {
            //   this.categoryName = "Yoga";
            //   console.log("check ::2");
            // } else if (this.categoryId == 3) {
            //   this.categoryName = "Meditation";
            //   console.log("check ::3");
            // } else if (this.categoryId == 4) {
            //   this.categoryName = "Massage";
            //   console.log("check ::4");
            // } else if (this.categoryId == 5) {
            //   this.categoryName = "Music";
            //   console.log("check ::5");
            // } else {
            //   this.categoryName = "Music";
            //   console.log("check ::6");
            // }
            this.checkType(this.categoryName, this.categoryId);
        }
        console.log("get categoryId::" + this.categoryId);
        // this.getBannerData(this.categoryId);
    };
    HomePage.prototype.getCategory = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "category/" + 0 + "/sub-category";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.parentArray = MyResponse['result']['list'];
            for (var i = 0; i < _this.parentArray.length; i++) {
                // this.displayCategory = this.parentArray[0]['id'];
                if (_this.parentArray[i]['name'] == "Parent Category") {
                }
                else {
                    _this.categoryArray.push(_this.parentArray[i]);
                }
            }
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
        console.log("check fb ads::");
        if (this.currentPage == 0) {
            this.advertisementArray = [];
        }
        this.loader.showBlockingLoaderAuth();
        var url;
        if (categoryId == "clear") {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "advertisements?page=" + this.currentPage + "&size=10";
        }
        else {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=10";
        }
        this.apiCall.getAd(url).subscribe(function (MyResponse) {
            _this.advertisementArray = _this.advertisementArray.concat(MyResponse['result']['list']);
            _this.countAdvertisement = MyResponse['result']['count'];
            _this.lastPage = Math.ceil(_this.countAdvertisement / 10);
            console.log("show total count:" + _this.lastPage);
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    HomePage.prototype.getAdvertisementWithSubcategory = function (categoryId, subCategoryId) {
        var _this = this;
        console.log("check fb ads::");
        if (this.currentPage == 0) {
            this.advertisementArray = [];
        }
        // /api/v1.0.0/categories/{categoryId}/subcategories/{subcategoryId}/advertisements
        this.loader.showBlockingLoaderAuth();
        var url;
        if (categoryId == "clear") {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "advertisements?page=" + this.currentPage + "&size=10";
        }
        else {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "categories/" + categoryId + "/subcategories/" + subCategoryId + "/advertisements?page=" + this.currentPage + "&size=10";
        }
        this.apiCall.getAd(url).subscribe(function (MyResponse) {
            _this.advertisementArray = _this.advertisementArray.concat(MyResponse['result']['list']);
            _this.countAdvertisement = MyResponse['result']['count'];
            _this.lastPage = Math.ceil(_this.countAdvertisement / 10);
            console.log("show total count:" + _this.lastPage);
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    HomePage.prototype.viewMore = function () {
        this.currentPage += 1;
        this.getAdvertisement(this.categoryId);
        // let url = environment.base_url + environment.version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=1";
    };
    HomePage.prototype.getBannerData = function (categoryId) {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url;
        if (categoryId == "clear") {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "banners?" + "size=1000";
        }
        else {
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "category/" + categoryId + "/banners?" + "size=1000";
        }
        //  url = environment.base_url + environment.version + "category/" + categoryId + "/banners?" + "size=" + 1000;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.bannerArray = MyResponse['result']['list'];
            _this.bannerCount = MyResponse['result']['count'];
            if (_this.bannerCount == 0) {
                _this.showNoBanner = 1;
            }
            else {
                _this.showNoBanner = 0;
            }
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    HomePage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    HomePage.prototype.getLanguages = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "languages";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.Languages = MyResponse['result']['list'];
            _this.languageImage = _this.Languages[3]['image'];
            _this.loader.hideBlockingLoaderAuth();
            _this.noInternet = '0';
        }, function (error) {
            _this.noInternet = '1';
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    HomePage.prototype.scrollHorizontal = function () {
        document.getElementById('container1').scrollLeft += 30;
    };
    HomePage.prototype.filter = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_pages_filtercategory_filtercategory_page__WEBPACK_IMPORTED_MODULE_10__["FiltercategoryPage"], {
            // width: '500px',
            panelClass: "show-filter-category-dialogue"
        });
        dialogRef.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("show filter category:" + result);
                console.log("show filtered data:" + JSON.stringify(result));
                if (result.categoryId == "clear") {
                    this.currentPage = 0;
                }
                this.categoryId = result.categoryId;
                this.getBannerData(result.categoryId);
                // this.getAdvertisement(result.subCategoryId);
                this.getAdvertisementWithSubcategory(result.categoryId, result.subCategoryId);
                this.displayCategory = result.categoryId;
                localStorage.setItem("categoryId", result.subCategoryId);
                localStorage.setItem("filterOpen", "0");
                return [2 /*return*/];
            });
        }); });
        // this.router.navigate(['/showfilterdata']);
    };
    HomePage.prototype.checkType = function (title, id) {
        console.log("check title id ::" + title + "   " + "id" + id);
        this.categoryId = id;
        this.displayCategory = id;
        this.getBannerData(id);
        this.advertisementArray = [];
        this.currentPage = 0;
        this.getAdvertisement(id);
        // if (title == "Dance") {
        //   this.getBannerData(id);
        //   this.advertisementArray = [];
        //   this.currentPage = 0;
        //   this.getAdvertisement(id);
        // } else if (title == "Yoga") {
        //   this.getBannerData(id);
        //   this.advertisementArray = [];
        //   this.currentPage = 0;
        //   this.getAdvertisement(id);
        // } else if (title == "Meditation") {
        //   this.getBannerData(id);
        //   this.advertisementArray = [];
        //   this.currentPage = 0;
        //   this.getAdvertisement(id);
        // }
        // else if (title == "Massage") {
        //   this.getBannerData(id);
        //   this.advertisementArray = [];
        //   this.currentPage = 0;
        //   this.getAdvertisement(id);
        // }
        // else if (title == "Music") {
        //   this.getBannerData(id);
        //   this.advertisementArray = [];
        //   this.currentPage = 0;
        //   this.getAdvertisement(id);
        // }
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
            width: '500px',
        });
        dialogRef.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("show city name:" + result);
                this.cityName = result;
                if (result == "" || result == "undefined" || result == null) {
                    this.cityName = "";
                }
                else {
                    this.cityName = result;
                }
                localStorage.setItem("cityname", this.cityName);
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
        // this.router.navigate(['/postadvertisement']);
        this.router.navigate(['/newadvertisementform']);
    };
    HomePage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    HomePage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    HomePage.prototype.openProfile = function () {
        // this.router.navigate(['/razorpay']);
        this.router.navigate(['/profile']);
    };
    HomePage.prototype.showAdvertisementDetail = function (categoryId, id, isBookmarked) {
        console.log("check bookmarked:" + isBookmarked);
        var sendId = {
            "id": id,
            "categoryId": categoryId,
            "status": "category",
            "adType": 1,
            "isBookmarked": isBookmarked
        };
        console.log("send image::" + id);
        this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(sendId) }]);
    };
    HomePage.prototype.bookmarkAdvertisement = function (advertisementid, isBookmarked, item) {
        var _this = this;
        console.log("show isBookmarked:" + isBookmarked);
        console.log("show advertisementid:" + advertisementid);
        console.log("show advertisement object:" + JSON.stringify(item));
        var getObj = item;
        if (isBookmarked == 1) {
            for (var i = 0; i < this.advertisementArray.length; i++) {
                if (advertisementid == this.advertisementArray[i]['id']) {
                    console.log("show advertisementid inside if:" + this.advertisementArray[i]['id']);
                    this.advertisementArray[i]['isBookmarked'] = 0;
                }
            }
            this.removeBookmark(advertisementid);
        }
        else {
            for (var i = 0; i < this.advertisementArray.length; i++) {
                if (advertisementid == this.advertisementArray[i]['id']) {
                    this.advertisementArray[i]['isBookmarked'] = 1;
                }
            }
            var send_date = {};
            this.advertisementModel['userId'] = localStorage.getItem("userId");
            send_date['userId'] = this.advertisementModel['userId'];
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "categories/" + this.categoryId + "/advertisements/" + advertisementid + "/bookmark";
            this.apiCall.postAuth(url, send_date).subscribe(function (MyResponse) {
                // this.getAdvertisement(this.categoryId);
                _this.loader.hideBlockingLoaderAuth();
            }, function (error) {
                _this.presentToast("Please try again");
                _this.loader.hideBlockingLoaderAuth();
            });
        }
    };
    // bookmarkAdvertisement(advertisementid) {
    //   this.checkStatus = this.postBookmarkObj.hasOwnProperty(advertisementid);
    //   console.log("check for status:" + this.checkStatus);
    //   if (this.checkStatus) {
    //     console.log("before delete:" + (this.postBookmarkObj));
    //     delete this.postBookmarkObj[advertisementid];
    //     localStorage.setItem("BOOKMARK", JSON.stringify(this.postBookmarkObj));
    //     this.removeBookmark(advertisementid);
    //     console.log("after delete:" + (this.postBookmarkObj));
    //   } else {
    //     this.postBookmarkObj[advertisementid] = true;
    //     localStorage.setItem("BOOKMARK", JSON.stringify(this.postBookmarkObj));
    //     console.log("display object:" + (this.postBookmarkObj));
    //     this.loader.showBlockingLoaderAuth();
    //     let send_date = {};
    //     this.advertisementModel['userId'] = localStorage.getItem("userId");
    //     send_date['userId'] = this.advertisementModel['userId'];
    //     let url = environment.base_url + environment.version + "categories/" + this.categoryId + "/advertisements/" + advertisementid + "/bookmark";
    //     this.apiCall.postAuth(url, send_date).subscribe(MyResponse => {
    //       this.getAdvertisement(this.categoryId);
    //       this.loader.hideBlockingLoaderAuth();
    //     }, error => {
    //       this.presentToast("Please try again");
    //       this.loader.hideBlockingLoaderAuth();
    //     })
    //   }
    // }
    HomePage.prototype.removeBookmark = function (advertisementId) {
        var _this = this;
        this.userId = localStorage.getItem("userId");
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "users/" + this.userId + "/bookmarks?" + "size=" + 1000;
        this.apiCall.getAd(url).subscribe(function (MyResponse) {
            _this.getBookMarkArray = MyResponse['result']['list'];
            for (var i = 0; i < _this.getBookMarkArray.length; i++) {
                console.log("show advertisement id:" + advertisementId);
                if (_this.getBookMarkArray[i]['id'] == advertisementId) {
                    console.log("show advertisement bookmark id:" + _this.getBookMarkArray[i]['bookmarkId']);
                    _this.bookmarkId = _this.getBookMarkArray[i]['bookmarkId'];
                    console.log("check ------ bookmark id:" + _this.bookmarkId);
                }
                else {
                    console.log("show advertisement bookmark id failure ::" + _this.getBookMarkArray[i]['bookmarkId']);
                }
            }
            console.log("show advertisement bookmark id:" + _this.bookmarkId);
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "users/" + _this.userId + "/bookmarks/" + _this.bookmarkId;
            _this.apiCall.deleteAuth(url).subscribe(function (MyResponse) {
                // this.getAdvertisement(this.categoryId);
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
    HomePage.prototype.notifications = function () {
        var senData = {};
        senData['userId'] = this.userId;
        senData['status'] = "all";
        this.router.navigate(['/notificationlistall', { senPaymentLogData: JSON.stringify(senData) }]);
    };
    HomePage.prototype.getLanguage = function (image) {
        this.languageImage = image;
        console.log("language image show:" + image);
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
        { type: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__["GoogleMaps"] },
        { type: _service_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"] },
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
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__["GoogleMaps"],
            _service_network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomePage);
    return HomePage;
}());



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



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map