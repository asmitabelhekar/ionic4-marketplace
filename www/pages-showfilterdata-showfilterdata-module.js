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
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: #f1f4f9;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.column {\n  float: left;\n  border-radius: 5px;\n  width: 50%;\n  height: 170px;\n  margin: auto;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 8px;\n}\n\n.card-one {\n  --background: #152a3f !important;\n  --color:white;\n}\n\n.card-two {\n  --background: white !important;\n  --color:black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJhbmtva2F0ZS9FeGVyY2lzZS9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9zaG93ZmlsdGVyZGF0YS9zaG93ZmlsdGVyZGF0YS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nob3dmaWx0ZXJkYXRhL3Nob3dmaWx0ZXJkYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREVBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUNESjs7QURPRTtFQUVFLGdDQUFBO0VBQ0EsYUFBQTtBQ0xKOztBRFNFO0VBRUUsOEJBQUE7RUFDQSxhQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG93ZmlsdGVyZGF0YS9zaG93ZmlsdGVyZGF0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzdGVycyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmNGY5O1xuICB9XG5cbiAgLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuXG4uY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6MTcwcHg7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIC8vIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAvLyBtYXJnaW4tdG9wOi01cHg7XG4gIH1cbiAgLy8gaW9uLWNvbnRlbnR7XG4gIC8vICAgLS1iYWNrZ3JvdW5kOiAjMTUyYTNmICFpbXBvcnRhbnQ7ICAgXG4gIC8vIH1cbiAgLmNhcmQtb25lIHtcblxuICAgIC0tYmFja2dyb3VuZDogIzE1MmEzZiAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6d2hpdGU7XG4gICAgXG4gIH1cblxuICAuY2FyZC10d28ge1xuXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6YmxhY2s7XG4gIH0iLCIubWFzdGVycyB7XG4gIC0tYmFja2dyb3VuZDogI2YxZjRmOTtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDE3MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5jYXJkLW9uZSB7XG4gIC0tYmFja2dyb3VuZDogIzE1MmEzZiAhaW1wb3J0YW50O1xuICAtLWNvbG9yOndoaXRlO1xufVxuXG4uY2FyZC10d28ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6YmxhY2s7XG59Il19 */");

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