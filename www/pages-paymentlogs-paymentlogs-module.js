(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paymentlogs-paymentlogs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymentlogs/paymentlogs.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymentlogs/paymentlogs.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\" fxLayoutAlign=\"center center\">\n    <ion-row fxLayoutAlign=\"center center\" style=\"padding:5px\">\n      <ion-col size=\"1\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"11\" fxLayoutAlign=\"start center\" fxLayout=\"row\">\n\n        <ion-label style=\"color:white;\" class=\"TitleText\">Payment History</ion-label>\n      </ion-col>\n\n\n      <!-- <ion-col size=\"2\">\n       <ion-icon name=\"search\" style=\"color:white; height:20px; width: 20px; margin:10px\"></ion-icon>\n     </ion-col> -->\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<div *ngIf=\"logsCount > 0 \" fxLayout=\"column\" fxFlex=\"100\">\n\n  <ion-card *ngFor=\"let item of paymentLogsArray\" fxLayout=\"column\" fxFlex=\"100\" style=\"padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;border-radius:8px;margin-top:10px;\">\n    <div fxLayout=\"row\" fxFlex=\"100\" style=\"margin:3px;\">\n      <div fxFlex=\"90\">\n        <label class=\"title-css\">{{item.title}}</label>\n      </div>\n      <div fxFlex=\"10\" fxLayoutAlign=\"end end\">\n        <label class=\"amount-css\">${{item.amount}}</label>\n      </div>\n    </div>\n\n    <div fxLayout=\"row\" fxFlex=\"100\" style=\"margin:3px;\">\n      <div fxFlex=\"80\">\n        <label class=\"paymentid-css\">{{item.paymentId}}</label>\n      </div>\n      <div fxFlex=\"20\" fxLayoutAlign=\"end end\">\n        <label *ngIf=\"item.isSuccess == 0 \" style=\"color:green;font-size:12px;\">Success</label>\n        <label *ngIf=\"item.isSuccess == 1 \" style=\"color:red;font-size:13px;\">Fail</label>\n      </div>\n    </div>\n\n\n    <div fxFlex=\"100\" fxLayoutAlign=\"end center\" style=\"margin:3px;\">\n      <div fxFlex=\"50\">\n      </div>\n      <div fxFlex=\"50\"  fxLayoutAlign=\"end end\">\n        <label class=\"date-css\">{{item.created | date}}</label>\n      </div>\n\n\n    </div>\n\n  </ion-card>\n</div>\n \n\n<div *ngIf=\"logsCount == 0 \" style=\"margin-top:20%\">\n  <h5 align=\"center\">No records found.</h5>\n</div>\n</ion-content>");

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



/***/ }),

/***/ "./src/app/pages/paymentlogs/paymentlogs-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/paymentlogs/paymentlogs-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentlogsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentlogsPageRoutingModule", function() { return PaymentlogsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _paymentlogs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymentlogs.page */ "./src/app/pages/paymentlogs/paymentlogs.page.ts");




var routes = [
    {
        path: '',
        component: _paymentlogs_page__WEBPACK_IMPORTED_MODULE_3__["PaymentlogsPage"]
    }
];
var PaymentlogsPageRoutingModule = /** @class */ (function () {
    function PaymentlogsPageRoutingModule() {
    }
    PaymentlogsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PaymentlogsPageRoutingModule);
    return PaymentlogsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/paymentlogs/paymentlogs.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/paymentlogs/paymentlogs.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentlogsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentlogsPageModule", function() { return PaymentlogsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _paymentlogs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentlogs-routing.module */ "./src/app/pages/paymentlogs/paymentlogs-routing.module.ts");
/* harmony import */ var _paymentlogs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymentlogs.page */ "./src/app/pages/paymentlogs/paymentlogs.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");









var PaymentlogsPageModule = /** @class */ (function () {
    function PaymentlogsPageModule() {
    }
    PaymentlogsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _paymentlogs_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentlogsPageRoutingModule"]
            ],
            declarations: [_paymentlogs_page__WEBPACK_IMPORTED_MODULE_6__["PaymentlogsPage"]]
        })
    ], PaymentlogsPageModule);
    return PaymentlogsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/paymentlogs/paymentlogs.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/paymentlogs/paymentlogs.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  margin-left: 10px;\n}\n\n.title-css {\n  font-size: 17px;\n  color: black;\n  font-weight: 470;\n}\n\n.paymentid-css {\n  font-size: 13px;\n  color: gray;\n}\n\n.date-css {\n  font-size: 10px;\n  color: gray;\n}\n\n.amount-css {\n  font-size: 17px;\n  color: #fe4f14;\n  font-weight: 480;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9wYXltZW50bG9ncy9wYXltZW50bG9ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BheW1lbnRsb2dzL3BheW1lbnRsb2dzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBR0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURPRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURRRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDTEo7O0FEUUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudGxvZ3MvcGF5bWVudGxvZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICBcbiAgLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuVGl0bGVUZXh0e1xuICAgIC8vIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIC8vIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAudGl0bGUtY3Nze1xuICAgIGZvbnQtc2l6ZToxN3B4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OjQ3MDtcbiAgfVxuXG5cbiAgLnBheW1lbnRpZC1jc3N7XG4gICAgZm9udC1zaXplOjEzcHg7XG4gICAgY29sb3I6Z3JheTtcbiAgfVxuXG4gIC5kYXRlLWNzc3tcbiAgICBmb250LXNpemU6MTBweDtcbiAgICBjb2xvcjpncmF5O1xuICB9XG5cblxuICAuYW1vdW50LWNzc3tcbiAgICBmb250LXNpemU6MTdweDtcbiAgICBjb2xvcjojZmU0ZjE0O1xuICAgIGZvbnQtd2VpZ2h0OjQ4MDtcbiAgfVxuIiwiLmNsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xufVxuXG4uVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGl0bGUtY3NzIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA0NzA7XG59XG5cbi5wYXltZW50aWQtY3NzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmRhdGUtY3NzIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmFtb3VudC1jc3Mge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmU0ZjE0O1xuICBmb250LXdlaWdodDogNDgwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/paymentlogs/paymentlogs.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/paymentlogs/paymentlogs.page.ts ***!
  \*******************************************************/
/*! exports provided: PaymentlogsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentlogsPage", function() { return PaymentlogsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/network/network.service */ "./src/app/service/network/network.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PaymentlogsPage = /** @class */ (function () {
    function PaymentlogsPage(apiCall, router, activatedRoute, networkServices) {
        this.apiCall = apiCall;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.networkServices = networkServices;
        this.status = "";
    }
    PaymentlogsPage.prototype.ngOnInit = function () {
        this.getData = JSON.parse(this.activatedRoute.snapshot.params['senPaymentLogData']);
        this.status = this.getData.status;
        console.log("check getData :" + this.status);
        this.getPaymentLogs();
    };
    PaymentlogsPage.prototype.goBackword = function () {
        window.history.back();
    };
    PaymentlogsPage.prototype.getPaymentLogs = function () {
        var _this = this;
        // this.loader.showBlockingLoaderAuth();
        var filterObj = {};
        if (this.status == "add") {
            filterObj = {
                "userId": this.getData.userId,
                "advertisementId": this.getData.advertisementId
            };
        }
        else if (this.status == "all") {
            filterObj = {
                "userId": this.getData.userId
            };
        }
        else {
            filterObj = {
                "userId": this.getData.userId
            };
        }
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "payment-gateway-logs?filters=" + JSON.stringify(filterObj);
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.paymentLogsArray = MyResponse['result']['list'];
            _this.logsCount = MyResponse['result']['count'];
            console.log("show payment logs:" + JSON.stringify(_this.paymentLogsArray));
            // this.loader.hideBlockingLoaderAuth();
        }, function (error) {
            // this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    PaymentlogsPage.ctorParameters = function () { return [
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"] }
    ]; };
    PaymentlogsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paymentlogs',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paymentlogs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymentlogs/paymentlogs.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paymentlogs.page.scss */ "./src/app/pages/paymentlogs/paymentlogs.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]])
    ], PaymentlogsPage);
    return PaymentlogsPage;
}());



/***/ }),

/***/ "./src/app/service/apiservice/api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/apiservice/api.service.ts ***!
  \***************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    //Image Upload Post
    ApiService.prototype.callPostApiForImage = function (url, data) {
        var formData = new FormData();
        formData.append('image', data);
        // formData.append('isSaveToLocal', 'false');
        // console.log("url", url,data,options);
        return this.http.post(url, formData);
    };
    //POST
    ApiService.prototype.post = function (url, data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(url);
        return this.http.post(url, data, httpOptions);
    };
    //POST
    ApiService.prototype.postAuth = function (url, data) {
        var auth_token = localStorage.getItem("authToken");
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': auth_token
            })
        };
        console.log(url);
        return this.http.post(url, data, httpOptions);
    };
    //GET
    ApiService.prototype.get = function (url) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(url);
        return this.http.get(url, httpOptions);
    };
    ApiService.prototype.getAd = function (url) {
        var auth_token = localStorage.getItem("authToken");
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': auth_token
            })
        };
        console.log(url);
        return this.http.get(url, httpOptions);
    };
    // public getCode(url,token) {
    // console.log("show token::"+token);
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //       'Authorization':'Token' + " " +"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0"
    //     })
    //   }
    //   console.log(url);
    //   return this.http.get(url,httpOptions);
    // }
    ApiService.prototype.delete = function (url) {
        console.log(url);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.delete(url);
    };
    ApiService.prototype.deleteAuth = function (url) {
        var auth_token = localStorage.getItem("authToken");
        console.log();
        console.log(url);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': auth_token
            })
        };
        return this.http.delete(url, httpOptions);
    };
    //PUT
    ApiService.prototype.putAuth = function (url, data) {
        var auth_token = localStorage.getItem("authToken");
        console.log(url);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': auth_token
            })
        };
        return this.http.put(url, data, httpOptions);
    };
    //PUT
    ApiService.prototype.put = function (url, data) {
        console.log(url);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put(url, data, httpOptions);
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-paymentlogs-paymentlogs-module.js.map