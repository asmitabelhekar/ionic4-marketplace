(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"3\" (click)=\"showPopup()\" fxLayoutAlign=\"start center\">\n        <mat-icon style=\"font-size:22px;color:white;position:fixed;left:10px;cursor: pointer;\">room</mat-icon>\n        <label style=\"color:white;margin-left:35px;font-size:15px;;cursor: pointer;margin-top:0px\">{{cityName}}</label>\n\n      </ion-col>\n      <ion-col size=\"6\" fxLayoutAlign=\"center center\">\n        <label style=\"color:white; font-size:17px; margin-left:10px; margin-top:3px\">Holyhub</label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <img src=\"{{languageImage}}\" [matMenuTriggerFor]=\"menu\" class=\"languageImg\" />\n        <!-- <mat-icon [matMenuTriggerFor]=\"menu\"\n      style=\"position: fixed; right:22px;color:white;font-size:20px; bottom : 15px;cursor: pointer;\">\n      g_translate</mat-icon> -->\n        <mat-menu #menu=\"matMenu\">\n          <div fxLayout=\"row\" style=\"margin-left:10px;margin-top:10px;\" *ngFor=\"let language of Languages\"\n            [ngClass]=\"language.image == languageImage ? 'selected-category-back' : 'category-back' \"\n            (click)=\"getLanguage(language.image)\">\n            <button fxLayout=\"row\" mat-button style=\"padding:5px;\">\n              <ion-row>\n                <img src=\"{{language.image}}\" style=\"width:20px; height:20px\" />\n                <label style=\"margin-top:-15px\" mat-menu-item>{{language.name}}</label>\n              </ion-row>\n            </button>\n\n          </div>\n\n        </mat-menu>\n      </ion-col>\n      <!-- <ion-col size=\"1\" (click)=\"notifications()\">\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n    </ion-col> -->\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div style=\"background-color:white\" class=\"cl_margin100\">\n\n    <div>\n      <ion-slides [options]=\"slideOptions\" pager=\"true\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\"\n        class=\"half-black\">\n        <ion-slide *ngFor=\"let item of bannerArray\"\n          (click)=\"showAdvertisementDetail(item.categoryId, item.advertisementId, item.isBookmarked)\">\n         \n          <div *ngIf=\"bannerCount != 0 \" class=\"cl_img_div\">\n            <img src=\"{{item.image}}\" class=\"cl_margin100\" />\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"end end\" class=\"checkBack\"\n              style=\"background-image: linear-gradient(to bottom, transparent 15%, rgb(0, 0, 0,1)) ;\">\n\n\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"cl_name_css\">\n                <label style=\"font-size:15px;\">{{item.title}}</label>\n              </div>\n              <div class=\"sub_div\">\n                <ion-row>\n                  <ion-col size=\"8\" fxLayoutAlign=\"start end\">\n\n\n                    <div fxLayoutAlign=\"start start\">\n                      <label class=\"check_width\" style=\"font-size:12px\">{{item.description}}</label>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"4\" fxLayoutAlign=\"end center\">\n                    <div class=\"show_width\">\n                      <label style=\"font-size:12px\">{{item.city}}</label>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n          <!-- <div *ngIf=\"showNoBanner == 1 \" class=\"cl_img_div\">\n            <h3 align=\"center\">No banners available</h3>\n          </div> -->\n        </ion-slide>\n      </ion-slides>\n\n\n      <div fxLayoutAlign=\"center center\" *ngIf=\"showNoBanner == 1 \" class=\"cl_img_div\" style=\"background-color:rgb(175, 171, 171);\">\n        <h5 align=\"center\">No banners posted</h5>\n      </div>\n\n    </div>\n\n\n\n    <div style=\"width:100%; background-color:white;margin-top:10px; height:auto\">\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" style=\"margin-bottom:10px;width:100%;\">\n        <div style=\"width:10%;\" fxLayoutAlign=\"end center\" (click)=\"filter()\">\n          <!-- <mat-icon  *ngIf=\"noInternet == '0' \"  style=\"font-size:40px;color:#fb7645;margin-top:-30px;\">filter_list</mat-icon> -->\n          <!-- <ion-icon *ngIf=\"noInternet == '0' \" name=\"options\" style=\"width:35px;height:50px;color:#fb7645;margin-top:-10px\" (click)=\"filter()\"></ion-icon> -->\n          <img *ngIf=\"noInternet == '0' \" src=\"../../assets/newimgfilter.png\"\n            style=\"width:25px;height:35px;color:#fb7645;\"  />\n        </div>\n        <div style=\"overflow-x: scroll;width:87%\" fxLayout=\"row\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:145px;\" *ngFor=\"let item of categoryArray\"\n            (click)=\"checkType(item.name, item.id)\" [ngClass]=\"(displayCategory == item.id) ? 'even' : 'odd' \">\n            <img fxLayoutAlign=\"center center\" src=\"{{item.image}}\" style=\"width:30px;height:30px\" />\n            <div fxLayoutAlign=\"center center\">\n              <label class=\"categoty-width\" class=\"categoty-width\">{{item.name}}</label>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n\n\n      <div *ngIf=\"countAdvertisement > 0\" style=\"width:98%;margin-left:1%\">\n\n        <div class=\"row\" *ngFor=\"let item of advertisementArray\">\n          <div>\n            <div class=\"column\" style=\"position:relative\">\n              <img src={{item.images[0]}} style=\"border-radius: 5px;width:100%; height:100%;\"\n                (click)=\"showAdvertisementDetail(item.categoryId, item.id, item.isBookmarked)\" />\n\n\n\n                \n              <div style=\"position:absolute;top:7px;right:8px;width:30px;height:30px;\"\n                (click)=\"bookmarkAdvertisement(item.id,item.isBookmarked,item)\">\n                <ion-icon *ngIf=\"item.isBookmarked == 1 \"\n                style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart\"></ion-icon>\n              <ion-icon *ngIf=\"item.isBookmarked == 0 \"\n                style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart-outline\"></ion-icon>\n                <!-- <ion-icon *ngIf=\"postBookmarkObj [item.id] == true \"\n                  style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart\"></ion-icon>\n                <ion-icon *ngIf=\"postBookmarkObj [item.id] != true \"\n                  style=\"color:#fb7645;width:24px;height:24px; margin-left:5px\" name=\"heart-outline\"></ion-icon> -->\n              </div>\n\n              <div fxLayoutAlign=\"end end\" fxLayout=\"column\" (click)=\"showAdvertisementDetail(item.categoryId, item.id,item.isBookmarked)\"\n                style=\"position:absolute;background-image: linear-gradient(to bottom, transparent 15%, rgb(0, 0, 0,1)) ;bottom:8px;width:96%;  border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;;\">\n\n                <div fxLayout=\"row\" style=\"width:100%; color:white;padding-top:2px;\">\n                  <div fxFlex=\"100\" fxLayoutAlign=\"start start\">\n                    <div class=\"b\">\n                      <label style=\"font-size:14px;padding-left:5px; font-weight:500\">{{item.title}}</label>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div fxLayout=\"row\" style=\"width:100%; color:white;padding-top:2px; padding-bottom:2px\">\n                  <div fxFlex=\"30\" fxLayoutAlign=\"start start\">\n                    <label style=\"font-size:10px;padding-left:5px;font-weight:normal\">₹ {{item.price | number}}</label>\n\n\n\n                  </div>\n                  <div fxFlex=\"20\">\n\n                  </div>\n\n                  <div fxFlex=\"50\" fxLayoutAlign=\"end end\">\n                    <div class=\"b\" style=\"margin-top:-5px\">\n                      <label\n                        style=\"font-size:10px; color:white;font-weight:normal;padding-right:3px;\">{{item.address}}</label>\n                    </div>\n                  </div>\n\n                </div>\n\n\n\n              </div>\n\n\n            </div>\n\n          </div>\n\n\n        </div>\n        <div style=\"width:100%; margin-top:30px;\" fxLayoutAlign=\"center center\" *ngIf=\"lastPage-1 > currentPage\">\n          <button mat-button (click)=\"viewMore()\">View More</button>\n        </div>\n\n      </div>\n      <img style=\"width:100%; height:60px; visibility: hidden;\" />\n      <div *ngIf=\"countAdvertisement == 0 \" style=\"margin-top:20%\">\n        <h5 align=\"center\">No records found.</h5>\n      </div>\n\n\n    </div>\n\n      <div class=\"cl_bottom_fix\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n      \n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n        (click)=\"home()\">\n        <ion-icon name=\"home\" class=\"cl_post_css\" (click)=\"home()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_selected-text_font\">HOME</label>\n        </div>\n\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n        (click)=\"openChatList()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"document\" (click)=\"openChatList()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">CHATS</label>\n        </div>\n\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n          (click)=\"postAdvertisement()\">\n        <ion-icon class=\"cl_bottom_nav_css\"  name=\"add-circle\" (click)=\"postAdvertisement()\">\n        </ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">SELL</label>\n        </div>\n      \n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n        (click)=\"openFavourite()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"heart\"  (click)=\"openFavourite()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">MY ADS</label>\n        </div>\n\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" \n          (click)=\"openProfile()\">\n          <ion-icon class=\"cl_bottom_nav_css\" name=\"person\"  (click)=\"openProfile()\"></ion-icon>\n          <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">PROFILE</label>\n        </div>\n\n      </div>\n   \n\n\n\n  </div>\n\n\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  height: 150px;\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-bottom: 9px;\n}\n\n.backimg {\n  background-image: url(http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg);\n  height: 20%;\n  width: 20%;\n}\n\n.background-image {\n  --background: url('user.png') 0 0/100% 100% no-repeat;\n}\n\n.background {\n  --background: url('user.png') 0 0/100% 100% no-repeat;\n}\n\n.half-black {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.sub_div {\n  width: 100%;\n  margin-top: -10px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.checkBack {\n  width: 100%;\n  color: white;\n  position: absolute;\n  bottom: 0;\n  padding-top: 10px;\n}\n\n.cl_name_css {\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.cl_margin100 {\n  width: 100%;\n  height: 100%;\n}\n\n.cl_img_div {\n  width: 100%;\n  height: 200px;\n  position: relative;\n}\n\n.cl_bottom_nav_css {\n  width: 24px;\n  height: 24px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 8px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 24px;\n  height: 24px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 10px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 10px;\n  color: #fb7645;\n}\n\n.cl_icon {\n  width: 25px;\n  margin: 5px;\n  height: 20px;\n}\n\ndiv.show_width {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\ndiv.b {\n  white-space: nowrap;\n  margin-right: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nlabel.categoty-width {\n  white-space: nowrap;\n  width: 75px;\n  text-align: center;\n  margin-top: 5px;\n  font-size: 11px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nlabel.check_width {\n  white-space: nowrap;\n  width: 105px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.odd {\n  color: black;\n}\n\n.even {\n  color: #fb7645;\n}\n\n.languageImg {\n  width: 27px;\n  height: 27px;\n  position: fixed;\n  right: 22px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.selected-category-back {\n  background-color: #f1f4f9;\n}\n\n.category-back {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FDSEY7O0FET0E7RUFDRSwrR0FBQTtFQUNBLFdBQUE7RUFDQyxVQUFBO0FDSkg7O0FETUE7RUFDRSxxREFBQTtBQ0hGOztBRE1BO0VBQ0UscURBQUE7QUNIRjs7QURLQTtFQUNFLDhCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0MsaUJBQUE7RUFDQyxpQkFBQTtFQUNDLGtCQUFBO0FDRkw7O0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDSkY7O0FEUUE7RUFDRSxXQUFBO0VBQ0Msa0JBQUE7RUFDQyxtQkFBQTtBQ0xKOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQyxhQUFBO0VBQ0Qsa0JBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBR0EsV0FBQTtFQUNBLFdBQUE7RUFHQSx5QkFBQTtBQ1RGOztBRFlBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNDLDZCQUFBO0VBQ0MsdUJBQUE7QUNUSjs7QURZQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFHQSx5QkFBQTtBQ1hGOztBRGVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDWkY7O0FEZUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDWkY7O0FEZUE7RUFFRSxXQUFBO0VBQ0EsV0FBQTtFQUNDLFlBQUE7QUNiSDs7QURrQ0E7RUFDRSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsdUJBQUE7QUNoQ0Y7O0FEb0NBO0VBQ0UsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNsQ0Y7O0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNwQ0Y7O0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ3BDRjs7QUR3Q0E7RUFHRSxZQUFBO0FDdkNGOztBRDRDQTtFQUlFLGNBQUE7QUM1Q0Y7O0FEK0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0QsZUFBQTtBQzVDRjs7QUQrQ0E7RUFDRSx5QkFBQTtBQzVDRjs7QUQrQ0U7RUFDQSx1QkFBQTtBQzVDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OjE1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICAvLyBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICAvLyBtYXJnaW4tdG9wOi01cHg7XG59XG5cbi5iYWNraW1ne1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL2Zpc2guc29jaWFsZmxpeC5pbi93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMi9vcmFuZ2UtbWVyY2VkZXMtYmVuei1nNjMtMTY0NjU0LmpwZyk7XG4gIGhlaWdodDoyMCU7XG4gICB3aWR0aDogMjAlO1xufVxuLmJhY2tncm91bmQtaW1hZ2V7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy91c2VyLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbi5iYWNrZ3JvdW5ke1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvdXNlci5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuLmhhbGYtYmxhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zdWJfZGl2e1xuICB3aWR0aDoxMDAlO1xuICAgbWFyZ2luLXRvcDotMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xuICAgICBwYWRkaW5nLXJpZ2h0OjVweDtcbiAgICAgXG59XG5cblxuLmNoZWNrQmFja3tcbiAgd2lkdGg6MTAwJTtcbiAgY29sb3I6d2hpdGU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBib3R0b206MDsgXG4gIHBhZGRpbmctdG9wOjEwcHg7XG59XG5cblxuLmNsX25hbWVfY3Nze1xuICB3aWR0aDoxMDAlO1xuICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xufVxuXG4uY2xfbWFyZ2luMTAwe1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbn1cblxuLmNsX2ltZ19kaXZ7XG4gIHdpZHRoOjEwMCU7XG4gICBoZWlnaHQ6MjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNsX2JvdHRvbV9uYXZfY3Nze1xuICB3aWR0aDoyNHB4O1xuICBoZWlnaHQ6MjRweDtcbiAgLy8gY29sb3I6Z3JheTtcblxuICB3aWR0aDoxMDAlO1xuICBjb2xvcjpncmF5O1xuICAvLyBwYWRkaW5nLXRvcDo1cHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXh7XG4gIHBvc2l0aW9uOiBmaXhlZDsgXG4gIGJvdHRvbTowcHg7XG4gIHdpZHRoOjEwMCU7XG4gIHBhZGRpbmc6OHB4O1xuICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2YxZjRmOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsX3Bvc3RfY3Nze1xuICB3aWR0aDoxMDAlO1xuICB3aWR0aDoyNHB4O1xuICBoZWlnaHQ6MjRweDtcbiAgY29sb3I6ICNmYjc2NDU7XG4gIC8vIHBhZGRpbmctdG9wOjVweDtcbiAgLy8gcGFkZGluZy1ib3R0b206NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuIFxufVxuXG4uY2xfdGV4dF9mb250e1xuICBwYWRkaW5nLXRvcDo0cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udHtcbiAgcGFkZGluZy10b3A6NHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xufVxuXG4uY2xfaWNvbntcbiAgLy8gZm9udC1zaXplOjI1cHg7XG4gIHdpZHRoOjI1cHg7XG4gIG1hcmdpbjo1cHg7XG4gICBoZWlnaHQ6MjBweDtcbn1cblxuXG4vLyAuY2xfYm90dG9tX2ZpeHtcbi8vICAgcG9zaXRpb246IGZpeGVkOyBcbi8vICAgYm90dG9tOjBweDtcbi8vICAgbWFyZ2luOjEwcHg7XG4vLyAgIGhlaWdodDo1MHB4O1xuLy8gICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2YxZjRmOTtcbi8vIH1cblxuLy8gLmNsX3Bvc3RfY3Nze1xuICAvLyB3aWR0aDozMHB4O1xuICAvLyBoZWlnaHQ6MzBweDtcbi8vICAgY29sb3I6I2ZiNzY0NTtcbi8vIH1cblxuXG5kaXYuc2hvd193aWR0aCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICAvLyB3aWR0aDogOTVweDsgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuZGl2LmIge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbiAgLy8gd2lkdGg6IDc1cHg7IFxuICBtYXJnaW4tcmlnaHQ6NHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG59XG5cblxubGFiZWwuY2F0ZWdvdHktd2lkdGh7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICB3aWR0aDogNzVweDsgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDo1cHg7XG4gIGZvbnQtc2l6ZToxMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXG59XG5cbmxhYmVsLmNoZWNrX3dpZHRoIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG4gIHdpZHRoOiAxMDVweDsgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBcbn1cblxuXG4ub2RkIHtcblxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOmJsYWNrO1xuICAvLyB3aWR0aDoxNyU7XG4gIFxufVxuXG4uZXZlbiB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgLy8gd2lkdGg6MTclO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyYTNmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiNmYjc2NDU7XG59XG5cbi5sYW5ndWFnZUltZ3tcbiAgd2lkdGg6MjdweDtcbiAgaGVpZ2h0OjI3cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgIHJpZ2h0OjIycHg7XG4gICBib3JkZXItcmFkaXVzOjUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VsZWN0ZWQtY2F0ZWdvcnktYmFja3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjRmOTtcbiAgfVxuICBcbiAgLmNhdGVnb3J5LWJhY2t7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOztcbiAgfSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xufVxuXG4uYmFja2ltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vZmlzaC5zb2NpYWxmbGl4LmluL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAyL29yYW5nZS1tZXJjZWRlcy1iZW56LWc2My0xNjQ2NTQuanBnKTtcbiAgaGVpZ2h0OiAyMCU7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3VzZXIucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuLmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvdXNlci5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4uaGFsZi1ibGFjayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnN1Yl9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5jaGVja0JhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jbF9uYW1lX2NzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jbF9tYXJnaW4xMDAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2xfaW1nX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbF9ib3R0b21fbmF2X2NzcyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX2JvdHRvbV9maXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjRmOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2NzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsX3RleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNsX3NlbGVjdGVkLXRleHRfZm9udCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmYjc2NDU7XG59XG5cbi5jbF9pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbmRpdi5zaG93X3dpZHRoIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbmRpdi5iIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5sYWJlbC5jYXRlZ290eS13aWR0aCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiA3NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxubGFiZWwuY2hlY2tfd2lkdGgge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ub2RkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZXZlbiB7XG4gIGNvbG9yOiAjZmI3NjQ1O1xufVxuXG4ubGFuZ3VhZ2VJbWcge1xuICB3aWR0aDogMjdweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdGVkLWNhdGVnb3J5LWJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY5O1xufVxuXG4uY2F0ZWdvcnktYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */");

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
        this.showNoBanner = 0;
        this.categoryId = 5;
        this.categoryName = "Music";
        this.noInternet = "0";
        this.displayCategory = "5";
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
        // this.getBannerData(this.categoryId);
        // this.advertisementArray = [];
        // this.currentPage = 0;
        // this.getAdvertisement(this.categoryId);
    }
    HomePage.prototype.ngOnInit = function () {
        this.advertisementArray = [];
        this.currentPage = 0;
        this.getAdvertisement(this.categoryId);
        // var data={"id" : 1, "second" : "abcd"};
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
            this.categoryId = 5;
            console.log("check ::0");
            this.advertisementArray = [];
            this.currentPage = 0;
            this.getAdvertisement(this.categoryId);
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
        this.getBannerData(this.categoryId);
    };
    HomePage.prototype.getCategory = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "category/" + 0 + "/sub-category";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.parentArray = MyResponse['result']['list'];
            for (var i = 0; i < _this.parentArray.length; i++) {
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
        this.advertisementArray = [];
        this.loader.showBlockingLoaderAuth();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=10";
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
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].version + "category/" + categoryId + "/banners?" + "size=" + 1000;
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
                this.getBannerData(result.categoryId);
                this.getAdvertisement(result.subCategoryId);
                this.displayCategory = result.categoryId;
                localStorage.setItem("category", result.subCategoryId);
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
        this.router.navigate(['/notificationlist']);
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