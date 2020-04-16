(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favourite-favourite-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white; margin-left:-15px\">\n      Favourite\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"arrayLength > 0\" style=\"width:98%; margin-left:1%; margin-top:10px\">\n\n    <div class=\"row\" *ngFor=\"let item of imageArray\" (click)=\"showAdvertisementDetail(item)\">\n      <div class=\"column\" style=\"position:relative\">\n        <img src={{item.image}} style=\"border-radius: 5px;width:100%; height:100%\"/>\n        <div style=\"position:absolute; bottom:10px;width:100%\">\n\n          <ion-row style=\"color:white\">\n            <ion-col size=\"6\" fxLayoutAlign=\"start start\">\n              <label style=\"font-size:12px\"><b>Ad Title</b></label>\n            </ion-col>\n            <ion-col size=\"6\" fxLayoutAlign=\"end end\">\n              <label style=\"font-size:12px;padding-right:13px\"><b>$100</b></label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"width:100%; margin-top:-5px\">\n            <ion-col size=\"3\">\n              <ion-icon style=\"color:hotpink\" name=\"woman\"></ion-icon>\n              <ion-icon style=\"color:hotpink; margin-left:5px\" name=\"heart\"></ion-icon>\n\n            </ion-col>\n            <ion-col size=\"9\" fxLayoutAlign=\"end start\">\n              <label style=\"font-size:10px; color:white;padding-right: 11px;\"><b>Mumbai , 120km</b></label>\n            </ion-col>\n          </ion-row>\n\n\n        </div>\n      </div>\n\n    </div>\n\n\n  </div>\n  <img style=\"width:100%; height:60px; visibility: hidden;\" />\n  <div *ngIf=\"arrayLength == 0 \" style=\"margin-top:20%\">\n    <h3 align=\"center\">No records found.</h3>\n  </div>\n\n  <div class=\"cl_bottom_fix\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n      <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n      <ion-icon name=\"document\" class=\"cl_bottom_nav_css\" (click)=\"openChatList()\"></ion-icon>\n      <ion-icon name=\"add-circle\" class=\"cl_bottom_nav_css\" (click)=\"postAdvertisement()\">\n      </ion-icon>\n      <ion-icon name=\"heart\" class=\"cl_post_css\" (click)=\"openFavourite()\"></ion-icon>\n      <ion-icon name=\"person\" class=\"cl_bottom_nav_css\" (click)=\"openProfile()\"></ion-icon>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/favourite/favourite-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/favourite/favourite-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FavouritePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePageRoutingModule", function() { return FavouritePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favourite.page */ "./src/app/pages/favourite/favourite.page.ts");




var routes = [
    {
        path: '',
        component: _favourite_page__WEBPACK_IMPORTED_MODULE_3__["FavouritePage"]
    }
];
var FavouritePageRoutingModule = /** @class */ (function () {
    function FavouritePageRoutingModule() {
    }
    FavouritePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FavouritePageRoutingModule);
    return FavouritePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/favourite/favourite.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/favourite/favourite.module.ts ***!
  \*****************************************************/
/*! exports provided: FavouritePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePageModule", function() { return FavouritePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _favourite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourite-routing.module */ "./src/app/pages/favourite/favourite-routing.module.ts");
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favourite.page */ "./src/app/pages/favourite/favourite.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");









var FavouritePageModule = /** @class */ (function () {
    function FavouritePageModule() {
    }
    FavouritePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _favourite_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouritePageRoutingModule"]
            ],
            declarations: [_favourite_page__WEBPACK_IMPORTED_MODULE_6__["FavouritePage"]]
        })
    ], FavouritePageModule);
    return FavouritePageModule;
}());



/***/ }),

/***/ "./src/app/pages/favourite/favourite.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/favourite/favourite.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cl_bottom_nav_css {\n  width: 30px;\n  height: 30px;\n  color: gray;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  height: 50px;\n  width: 100%;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 30px;\n  height: 30px;\n  color: #f76161;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  height: 250px;\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9mYXZvdXJpdGUvZmF2b3VyaXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmF2b3VyaXRlL2Zhdm91cml0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNDLFdBQUE7RUFDQyx1QkFBQTtBQ0FOOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmF2b3VyaXRlL2Zhdm91cml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jbF9ib3R0b21fbmF2X2Nzc3tcbiAgICB3aWR0aDozMHB4O1xuICAgIGhlaWdodDozMHB4O1xuICAgIGNvbG9yOmdyYXk7XG4gIH1cbiAgXG4gIC5jbF9ib3R0b21fZml4e1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgYm90dG9tOjBweDtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmNsX3Bvc3RfY3Nze1xuICAgIHdpZHRoOjMwcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgY29sb3I6cmdiKDI0NywgOTcsIDk3KTtcbiAgfVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OjI1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICAvLyBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAvLyBtYXJnaW4tdG9wOi01cHg7XG59IiwiLmNsX2JvdHRvbV9uYXZfY3NzIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5jbF9ib3R0b21fZml4IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jbF9wb3N0X2NzcyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZjc2MTYxO1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/favourite/favourite.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/favourite/favourite.page.ts ***!
  \***************************************************/
/*! exports provided: FavouritePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePage", function() { return FavouritePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FavouritePage = /** @class */ (function () {
    function FavouritePage(router) {
        this.router = router;
        this.imageArray = [
            {
                "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXeBX1noYQ2ohp9RRcj6almCOdV1gxfom6IC8IU6rVTq5qMxEN&usqp=CAU"
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk6eFBj7WsT3CA-hXtm1XIXyrOl_4VGM7KeeRyOwrxlWImybUs&usqp=CAU"
            },
            {
                "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
            },
            {
                "image": "https://i.pinimg.com/564x/54/c9/9b/54c99b01a6e6574724eda35b4ced31a8.jpg"
            },
            {
                "image": "https://i.pinimg.com/564x/54/c9/9b/54c99b01a6e6574724eda35b4ced31a8.jpg"
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPbANJ346aMhq6fHmxibMF3nWG4PZ-RYurGwBLXz0J-I2h26s8&usqp=CAU"
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRToTUk2HOJ-99u3Mv4qRCO6V3lq5AC6-J7KVA4mRBOh_2moumu&usqp=CAU"
            },
            {
                "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcO627ajsCYsf_HE5L8MXfugvvUe8ouCm8A6688WXreyA73dVf&usqp=CAU"
            },
            {
                "image": "data:image/jpeg;base64,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"
            },
            {
                "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
            }
        ];
    }
    FavouritePage.prototype.ngOnInit = function () {
        this.arrayLength = this.imageArray.length;
    };
    FavouritePage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    FavouritePage.prototype.postAdvertisement = function () {
        this.router.navigate(['/postadvertisement']);
        // this.router.navigate(['/secondpageadvertisement']);
    };
    FavouritePage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    FavouritePage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    FavouritePage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    FavouritePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FavouritePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favourite',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favourite.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favourite.page.scss */ "./src/app/pages/favourite/favourite.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FavouritePage);
    return FavouritePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-favourite-favourite-module.js.map