(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detailchat-detailchat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detailchat/detailchat.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detailchat/detailchat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\" fxLayoutAlign=\"center center\">\n    <ion-row fxLayoutAlign=\"center center\">\n      <ion-col size=\"1\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"9\" fxLayoutAlign=\"start center\">\n        <ion-label style=\"color:white;\" class=\"TitleText\">{{name}}</ion-label>\n      </ion-col>\n   \n    \n     <ion-col size=\"2\">\n       <ion-icon name=\"search\" style=\"color:white; height:20px; width: 20px; margin:10px\"></ion-icon>\n     </ion-col>\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  style=\"width:100%;height:100%;\">\n<div style=\"color:black;margin-bottom:200px;\"> \n<div *ngFor=\"let item of chatArray\"> \n<div *ngIf=\"msgCount != '0' \">\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"item.senderId != userId \" style=\"width:100%; margin-top:15px\">\n    <!-- <ion-col size=\"2\" style=\"margin-left:10px\">\n      <button style=\"border-radius: 50%; width:50px; height:50px; background-color: #9badc0; \"></button>\n    </ion-col> -->\n\n    <ion-col size=\"12\">\n      <div fxLayout=\"column\">\n        <section fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-left:10px;\">\n         <div>\n          <img src=\"../../../assets/agent.png\" class=\"placeholder-css\" /> \n         </div>\n         <div style=\"border-radius:8px;width:auto;min-width:40%; max-width: 60%;margin-left:10px; padding:10px; background-color: #ebeff3\">\n          <label style=\"font-size: 15px;\">{{item.message}}</label>\n\n         </div>\n        </section>\n       <!-- <label style=\"font-size:12px; margin-top:3px\">{{item.modified | date}}</label> -->\n      </div>\n    </ion-col>\n   \n   \n  </div>\n</div>\n \n<div *ngIf=\"msgCount != '0' \">\n  <div fxLayout=\"column\" fxLayoutAlign=\"end end\"  *ngIf=\"item.senderId == userId \">\n    <section  style=\"border-radius:8px;width:auto;min-width:40%; max-width: 70%;margin-top:20px; margin-right:10px; padding:10px; background-color: #d3e2f1\">\n      <label>{{item.message}}</label>\n      <!-- <img src=\"../../../assets/defaultpic.png\" style=\"height:80px; width:80px; border:1px solid gray\" /> -->\n    </section>\n    <!-- <label style=\"margin-right:10px;font-size:12px; margin-top:3px\">{{item.modified | date}}</label> -->\n  </div>\n\n</div>\n \n</div>\n\n\n<div *ngIf=\"msgCount == '0' \" fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:100%; margin-top:40%\">\n\n<h1 > No chat present.</h1>\n</div>\n\n\n  <div style=\"position: fixed; height:80px; bottom:0;width:100%; margin:auto; margin-bottom:-5px; border-top:1px solid #f1f4f9; \">\n    <ion-card style=\"width:100%;margin: auto\">\n      <ion-row>\n        <ion-col size=\"9\">\n          <ion-textarea placeholder=\"Reply.\" style=\"color:black\" [(ngModel)]=\"chatModel.message\"></ion-textarea>\n        </ion-col>\n\n        <ion-col size=\"3\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n          <ion-row>\n\n            <ion-icon name=\"attach\" style=\"color:rgb(121, 111, 111); width:30px; height:35px; margin-top:-5px; margin-right:5px\"></ion-icon>\n            <ion-icon name=\"send\" style=\"color:rgb(121, 111, 111); width:25px; height:25px\" (click)=\"sendMessage()\"></ion-icon>\n          </ion-row>\n        \n        </ion-col>\n      </ion-row>\n    </ion-card>\n  \n  </div>\n</div>\n</ion-content>\n\n\n\n<!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-bottom:10px;width:100%\">\n  <div style=\"width:10%;\" fxLayoutAlign=\"center center\">\n    <img *ngIf=\"noInternet == '0' \" src=\"../../assets/funnelimg.png\" style=\"width:30px;height:30px\" (click)=\"filter()\" />\n  </div>\n\n  <div fxLayout=\"column\" style=\"width:18%; \" fxLayoutAlign=\"center center\" *ngFor=\"let item of categoryArray\"\n    (click)=\"checkType(item.name, item.id)\" [ngClass]=\"(displayCategory == item.id) ? 'even' : 'odd' \">\n    <img src=\"{{item.image}}\" style=\"width:30px;height:30px\" />\n    <div fxLayoutAlign=\"center center\">\n      <label class=\"categoty-width\">{{item.name}}</label>\n    </div>\n  </div>\n</div> -->");

/***/ }),

/***/ "./src/app/pages/detailchat/detailchat-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/detailchat/detailchat-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailchatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailchatPageRoutingModule", function() { return DetailchatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detailchat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailchat.page */ "./src/app/pages/detailchat/detailchat.page.ts");




var routes = [
    {
        path: '',
        component: _detailchat_page__WEBPACK_IMPORTED_MODULE_3__["DetailchatPage"]
    }
];
var DetailchatPageRoutingModule = /** @class */ (function () {
    function DetailchatPageRoutingModule() {
    }
    DetailchatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DetailchatPageRoutingModule);
    return DetailchatPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/detailchat/detailchat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/detailchat/detailchat.module.ts ***!
  \*******************************************************/
/*! exports provided: DetailchatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailchatPageModule", function() { return DetailchatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _detailchat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailchat-routing.module */ "./src/app/pages/detailchat/detailchat-routing.module.ts");
/* harmony import */ var _detailchat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailchat.page */ "./src/app/pages/detailchat/detailchat.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");








var DetailchatPageModule = /** @class */ (function () {
    function DetailchatPageModule() {
    }
    DetailchatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _detailchat_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailchatPageRoutingModule"]
            ],
            declarations: [_detailchat_page__WEBPACK_IMPORTED_MODULE_6__["DetailchatPage"]]
        })
    ], DetailchatPageModule);
    return DetailchatPageModule;
}());



/***/ }),

/***/ "./src/app/pages/detailchat/detailchat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/detailchat/detailchat.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".innermsg.left {\n  float: left;\n  background-color: #F1F0F0;\n  color: black;\n  clear: both;\n}\n\n.innermsg.right {\n  float: right;\n  background-color: #0084FF;\n  color: white;\n  clear: both;\n}\n\n.placeholder-css {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  background-color: #9badc0;\n}\n\n.masters {\n  --background: #f1f4f9;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  font-size: 19px;\n  width: 81%;\n  margin-left: 10px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9kZXRhaWxjaGF0L2RldGFpbGNoYXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXRhaWxjaGF0L2RldGFpbGNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FET0E7RUFDRSxrQkFBQTtFQUNDLFdBQUE7RUFDQyxZQUFBO0VBQ0MseUJBQUE7QUNKTDs7QURPQTtFQUNJLHFCQUFBO0FDSko7O0FEU0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDTko7O0FEV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QURXRTtFQUdFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWxjaGF0L2RldGFpbGNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVybXNnLmxlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYwRjA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4uaW5uZXJtc2cucmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICAvL21hcmdpbi1yaWdodDogMTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg0RkY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4vLyAubWFzdGVycyB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTUyYTNmIDAlLCAjNjZjY2ZmIDEwMCUpO1xuLy8gICB9XG5cbi5wbGFjZWhvbGRlci1jc3N7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIHdpZHRoOjUwcHg7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM5YmFkYzA7IFxufVxuXG4ubWFzdGVycyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmNGY5O1xuICB9XG5cbiBcblxuLmNsLWJhY2stYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nJykgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbiAgXG4gIFxuICAuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5UaXRsZVRleHR7XG4gICAgLy8gZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgLy8gdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfSIsIi5pbm5lcm1zZy5sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYwRjA7XG4gIGNvbG9yOiBibGFjaztcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5pbm5lcm1zZy5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODRGRjtcbiAgY29sb3I6IHdoaXRlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnBsYWNlaG9sZGVyLWNzcyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliYWRjMDtcbn1cblxuLm1hc3RlcnMge1xuICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/detailchat/detailchat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/detailchat/detailchat.page.ts ***!
  \*****************************************************/
/*! exports provided: DetailchatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailchatPage", function() { return DetailchatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/network/network.service */ "./src/app/service/network/network.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");








var DetailchatPage = /** @class */ (function () {
    function DetailchatPage(activatedRoute, apiCall, networkServices, loader, toast) {
        this.activatedRoute = activatedRoute;
        this.apiCall = apiCall;
        this.networkServices = networkServices;
        this.loader = loader;
        this.toast = toast;
        this.chatModel = {};
        this.chatArray = [];
        this.noInternet = "0";
    }
    DetailchatPage.prototype.ngOnInit = function () {
        this.detailData = JSON.parse(this.activatedRoute.snapshot.params['userDetail']);
        this.name = this.detailData.name;
        this.id = this.detailData.id;
        this.getChatMassages();
    };
    DetailchatPage.prototype.ionViewWillEnter = function () {
        this.getChatMassages();
    };
    DetailchatPage.prototype.goBackword = function () {
        window.history.back();
    };
    DetailchatPage.prototype.sendMessage = function () {
        var _this = this;
        console.log("show msg :" + this.chatModel['message']);
        if (this.chatModel['message'] == undefined || this.chatModel['message'] == null || this.chatModel['message'] == "") {
        }
        else {
            this.loader.showBlockingLoaderAuth();
            var send_date = {};
            send_date['message'] = this.chatModel['message'];
            this.userId = localStorage.getItem("userId");
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "sender/" + this.userId + "/receive/" + this.id + "?" + "size=" + 1000;
            this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
                _this.getChatMassages();
                _this.chatModel['message'] = "";
                _this.loader.hideBlockingLoaderAuth();
            }, function (error) {
                _this.presentToast("Please try again");
                _this.loader.hideBlockingLoaderAuth();
            });
        }
    };
    DetailchatPage.prototype.presentToast = function (message) {
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
    DetailchatPage.prototype.getChatMassages = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        this.userId = localStorage.getItem("userId");
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "sender/" + this.userId + "/receive/" + this.id + "?" + "size=" + 1000;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.chatArray = MyResponse['result']['list'];
            _this.msgCount = MyResponse['result']['count'];
            console.log("show users:" + _this.chatArray);
            _this.loader.hideBlockingLoaderAuth();
            _this.noInternet = '0';
        }, function (error) {
            _this.noInternet = '1';
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    DetailchatPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
    ]; };
    DetailchatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detailchat',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detailchat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detailchat/detailchat.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detailchat.page.scss */ "./src/app/pages/detailchat/detailchat.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])
    ], DetailchatPage);
    return DetailchatPage;
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
//# sourceMappingURL=pages-detailchat-detailchat-module.js.map