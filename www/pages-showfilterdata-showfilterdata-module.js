(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-showfilterdata-showfilterdata-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/showfilterdata/showfilterdata.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/showfilterdata/showfilterdata.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"10\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white; margin-left:-15px\">Filter</ion-label>\n      </ion-col>\n  \n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div style=\"width:100%; height:100%\">\n    <div style=\"width:96%;margin-left:2%; margin-right:2%\">\n\n      <div class=\"row\" *ngFor=\"let item of categoryArray\" >\n        <div class=\"column\" style=\"position:relative\">\n          \n        <ion-card style=\"border-radius: 5px;width:100%; height:100%; margin:auto; margin-top:10px\" (click)=\"applyFilter(item.id, item.name)\"  [ngClass]=\"(categoryName == item.id) ? 'card-one' : 'card-two' \" fxLayoutAlign=\"center center\">\n          <!-- <div >\n            <mat-checkbox slot=\"end\"\n            [(ngModel)]=\"item.isChecked\" \n            (ionChange)=\"checkEvent()\"></mat-checkbox>\n          </div> -->\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"margin-top:20px\">\n          \n            <img src={{item.image}} style=\"border-radius: 5px;width:50px; height:50px\"/>\n            <h5 align=\"center\">{{item.name}}</h5>\n          </div>\n         \n        </ion-card>\n        </div>\n  \n      </div>\n  \n  \n    </div>\n  \n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/showfilterdata/showfilterdata-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/showfilterdata/showfilterdata-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ShowfilterdataPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowfilterdataPageRoutingModule", function() { return ShowfilterdataPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _showfilterdata_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showfilterdata.page */ "./src/app/pages/showfilterdata/showfilterdata.page.ts");




var routes = [
    {
        path: '',
        component: _showfilterdata_page__WEBPACK_IMPORTED_MODULE_3__["ShowfilterdataPage"]
    }
];
var ShowfilterdataPageRoutingModule = /** @class */ (function () {
    function ShowfilterdataPageRoutingModule() {
    }
    ShowfilterdataPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShowfilterdataPageRoutingModule);
    return ShowfilterdataPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/showfilterdata/showfilterdata.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/showfilterdata/showfilterdata.module.ts ***!
  \***************************************************************/
/*! exports provided: ShowfilterdataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowfilterdataPageModule", function() { return ShowfilterdataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _showfilterdata_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showfilterdata-routing.module */ "./src/app/pages/showfilterdata/showfilterdata-routing.module.ts");
/* harmony import */ var _showfilterdata_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showfilterdata.page */ "./src/app/pages/showfilterdata/showfilterdata.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var ShowfilterdataPageModule = /** @class */ (function () {
    function ShowfilterdataPageModule() {
    }
    ShowfilterdataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _showfilterdata_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowfilterdataPageRoutingModule"]
            ],
            declarations: [_showfilterdata_page__WEBPACK_IMPORTED_MODULE_6__["ShowfilterdataPage"]]
        })
    ], ShowfilterdataPageModule);
    return ShowfilterdataPageModule;
}());



/***/ }),

/***/ "./src/app/pages/showfilterdata/showfilterdata.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/showfilterdata/showfilterdata.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: #f1f4f9;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  height: 170px;\n  margin: auto;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 8px;\n}\n\n.card-one {\n  --background: #152a3f !important;\n  --color:white;\n}\n\n.card-two {\n  --background: white !important;\n  --color:black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Frc2hheS5tYWRrZS9EZXNrdG9wL0V4ZXJjaXNlL2lvbmljNC1tYXJrZXRwbGFjZS9zcmMvYXBwL3BhZ2VzL3Nob3dmaWx0ZXJkYXRhL3Nob3dmaWx0ZXJkYXRhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2hvd2ZpbHRlcmRhdGEvc2hvd2ZpbHRlcmRhdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDRUo7O0FERUE7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtBQ0RKOztBRE9FO0VBRUUsZ0NBQUE7RUFDQSxhQUFBO0FDTEo7O0FEU0U7RUFFRSw4QkFBQTtFQUNBLGFBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3dmaWx0ZXJkYXRhL3Nob3dmaWx0ZXJkYXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0ZXJzIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG4gIH1cblxuICAuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uVGl0bGVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5cbi5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDoxNzBweDtcbiAgICBtYXJnaW46YXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgLy8gcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIC8vIG1hcmdpbi10b3A6LTVweDtcbiAgfVxuICAvLyBpb24tY29udGVudHtcbiAgLy8gICAtLWJhY2tncm91bmQ6ICMxNTJhM2YgIWltcG9ydGFudDsgICBcbiAgLy8gfVxuICAuY2FyZC1vbmUge1xuXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTUyYTNmICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjp3aGl0ZTtcbiAgICBcbiAgfVxuXG4gIC5jYXJkLXR3byB7XG5cbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjpibGFjaztcbiAgfSIsIi5tYXN0ZXJzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmNGY5O1xufVxuXG4uVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2wtYmFjay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTcwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLmNhcmQtb25lIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTUyYTNmICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6d2hpdGU7XG59XG5cbi5jYXJkLXR3byB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1jb2xvcjpibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/showfilterdata/showfilterdata.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/showfilterdata/showfilterdata.page.ts ***!
  \*************************************************************/
/*! exports provided: ShowfilterdataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowfilterdataPage", function() { return ShowfilterdataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/network/network.service */ "./src/app/service/network/network.service.ts");







var ShowfilterdataPage = /** @class */ (function () {
    function ShowfilterdataPage(loader, networkServices, router, apiCall) {
        this.loader = loader;
        this.networkServices = networkServices;
        this.router = router;
        this.apiCall = apiCall;
    }
    ShowfilterdataPage.prototype.ngOnInit = function () {
        this.getCategory();
    };
    ShowfilterdataPage.prototype.ionViewWillEnter = function () {
        this.categoryName = localStorage.getItem("categoryName");
        if (this.categoryName == undefined || this.categoryName == null || this.categoryName == "") {
        }
        else {
        }
    };
    ShowfilterdataPage.prototype.getCategory = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "category/" + 0 + "/sub-category";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.categoryArray = MyResponse['result']['list'];
            _this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    ShowfilterdataPage.prototype.goBackword = function () {
        window.history.back();
    };
    ShowfilterdataPage.prototype.applyFilter = function (id, name) {
        console.log("get id::" + id);
        localStorage.setItem("categoryName", id);
        this.router.navigate(['/home', { categoryId: id }]);
    };
    ShowfilterdataPage.ctorParameters = function () { return [
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    ShowfilterdataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showfilterdata',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./showfilterdata.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/showfilterdata/showfilterdata.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./showfilterdata.page.scss */ "./src/app/pages/showfilterdata/showfilterdata.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], ShowfilterdataPage);
    return ShowfilterdataPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-showfilterdata-showfilterdata-module.js.map