(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nextadvertisement-nextadvertisement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nextadvertisement/nextadvertisement.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nextadvertisement/nextadvertisement.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"10\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">Advertisement</ion-label>\n      </ion-col>\n    \n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div\n  style=\"height:200px;width:95%;border-radius:5px;background-color: white; margin-top:10%\"\n  fxLayout=\"column\" fxLayoutAlign=\"center center\"\n  onclick=\"document.getElementById('image_upload').click()\">\n  <ion-icon *ngIf=\"profilePic == '' \" name=\"camera\" style=\"width:40%; height:40%; margin-top:15px;color:rgb(196, 184, 184)\">\n  </ion-icon>\n  <img  src=\"{{profilePic}}\"\n    style=\"width:100%;border-radius:5px; height:100%;\" />\n\n\n  <input style=\"display: none;\" id=\"image_upload\" type=\"file\" (change)=\"detectEventGallery($event)\">\n\n  <div *ngIf=\"profilePic == '' \" style=\"margin-top:12px;color: black;width:100%;margin-bottom:15px\"\n    fxLayoutAlign=\"center\">\n    <label type=\"file\">Upload Pic</label>\n  </div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/nextadvertisement/nextadvertisement-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/nextadvertisement/nextadvertisement-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: NextadvertisementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextadvertisementPageRoutingModule", function() { return NextadvertisementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nextadvertisement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nextadvertisement.page */ "./src/app/pages/nextadvertisement/nextadvertisement.page.ts");




var routes = [
    {
        path: '',
        component: _nextadvertisement_page__WEBPACK_IMPORTED_MODULE_3__["NextadvertisementPage"]
    }
];
var NextadvertisementPageRoutingModule = /** @class */ (function () {
    function NextadvertisementPageRoutingModule() {
    }
    NextadvertisementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NextadvertisementPageRoutingModule);
    return NextadvertisementPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/nextadvertisement/nextadvertisement.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/nextadvertisement/nextadvertisement.module.ts ***!
  \*********************************************************************/
/*! exports provided: NextadvertisementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextadvertisementPageModule", function() { return NextadvertisementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _nextadvertisement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nextadvertisement-routing.module */ "./src/app/pages/nextadvertisement/nextadvertisement-routing.module.ts");
/* harmony import */ var _nextadvertisement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nextadvertisement.page */ "./src/app/pages/nextadvertisement/nextadvertisement.page.ts");







var NextadvertisementPageModule = /** @class */ (function () {
    function NextadvertisementPageModule() {
    }
    NextadvertisementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _nextadvertisement_routing_module__WEBPACK_IMPORTED_MODULE_5__["NextadvertisementPageRoutingModule"]
            ],
            declarations: [_nextadvertisement_page__WEBPACK_IMPORTED_MODULE_6__["NextadvertisementPage"]]
        })
    ], NextadvertisementPageModule);
    return NextadvertisementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/nextadvertisement/nextadvertisement.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/nextadvertisement/nextadvertisement.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: #f1f4f9;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvaW9uaWM0LW1hcmtldHBsYWNlL3NyYy9hcHAvcGFnZXMvbmV4dGFkdmVydGlzZW1lbnQvbmV4dGFkdmVydGlzZW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9uZXh0YWR2ZXJ0aXNlbWVudC9uZXh0YWR2ZXJ0aXNlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREVBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXh0YWR2ZXJ0aXNlbWVudC9uZXh0YWR2ZXJ0aXNlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXN0ZXJzIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG4gIH1cblxuICAuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uVGl0bGVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuIiwiLm1hc3RlcnMge1xuICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/nextadvertisement/nextadvertisement.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/nextadvertisement/nextadvertisement.page.ts ***!
  \*******************************************************************/
/*! exports provided: NextadvertisementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextadvertisementPage", function() { return NextadvertisementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");




var NextadvertisementPage = /** @class */ (function () {
    function NextadvertisementPage(activatedRoute, apiCall) {
        this.activatedRoute = activatedRoute;
        this.apiCall = apiCall;
        this.urls = [];
    }
    NextadvertisementPage.prototype.ngOnInit = function () {
    };
    NextadvertisementPage.prototype.goBackword = function () {
        window.history.back();
    };
    NextadvertisementPage.prototype.detectEventGallery = function (event) {
        console.log(event);
        var files = event.target.files;
        console.log(files);
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                };
                console.log(file);
                this.fileToUpload = file;
                reader.readAsDataURL(this.fileToUpload);
            }
            this.handleFileInput(this.fileToUpload); // 1 for event gallery upload 
        }
        console.log("file uploaded::" + JSON.stringify(this.fileToUpload));
    };
    NextadvertisementPage.prototype.handleFileInput = function (files) {
        var _this = this;
        if (this.fileToUpload == null || this.fileToUpload == undefined) {
        }
        var url = "http://3.6.135.154:9000/api/" + "upload-image";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            _this.urls.push(MyResponse['result']['url']);
            _this.profilePic = MyResponse['result']['url'];
            console.log("print url resonce:" + _this.urls);
        }, function (error) {
            console.log(error);
        });
    };
    NextadvertisementPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    NextadvertisementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nextadvertisement',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nextadvertisement.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nextadvertisement/nextadvertisement.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nextadvertisement.page.scss */ "./src/app/pages/nextadvertisement/nextadvertisement.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], NextadvertisementPage);
    return NextadvertisementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-nextadvertisement-nextadvertisement-module.js.map