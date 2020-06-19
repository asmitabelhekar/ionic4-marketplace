(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detailchat-detailchat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detailchat/detailchat.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detailchat/detailchat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\" fxLayoutAlign=\"center center\">\n    <ion-row fxLayoutAlign=\"center center\" style=\"padding:5px\">\n      <ion-col size=\"1\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"11\" fxLayoutAlign=\"start center\" fxLayout=\"row\">\n        <img *ngIf=\"image == '' \" src=\"../../../assets/agent.png\" class=\"img-css\" />\n        <img *ngIf=\"image != '' \" src=\"{{image}}\" class=\"img-css\" />\n        <ion-label style=\"color:white;\" class=\"TitleText\">{{name}}</ion-label>\n      </ion-col>\n\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"width:100%;height:100%;padding-bottom:1200px\">\n  <div style=\"height:15px; width:100%\">\n  </div>\n  <div style=\"color:black;margin-bottom:200px;\">\n    <div *ngFor=\"let item of chatArray\">\n      <div *ngIf=\"msgCount != '0' \">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"item.senderId != userId \"\n          style=\"width:100%;\">\n\n          <ion-card\n            style=\"border-radius:7px;width:auto;min-width:40%; max-width: 60%;margin-top:8px;margin-left:13px; padding:10px; background-color: white;color:black\">\n            <label style=\"font-size: 13px;\">{{item.message}}</label>\n          </ion-card>\n\n\n        </div>\n      </div>\n\n      <div *ngIf=\"msgCount != '0' \">\n        <div fxLayout=\"column\" fxLayoutAlign=\"end end\" *ngIf=\"item.senderId == userId \" >\n          <ion-card\n            style=\"border-radius:7px;width:auto;min-width:40%; max-width: 70%;margin-top:8px; margin-right:13px; padding:8px; background-color: #fe4f14;color:white\">\n            <label style=\"font-size: 13px;\">{{item.message}}</label>\n          </ion-card>\n        </div>\n\n      </div>\n\n    </div>\n\n\n    <div *ngIf=\"msgCount == '0' \" fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:100%; margin-top:40%\">\n\n      <h1> No chat present.</h1>\n    </div>\n\n\n    <div\n      style=\"position: fixed; height:80px; bottom:0;width:100%; margin:auto; margin-bottom:-5px; border-top:1px solid #f1f4f9; \">\n      <ion-card style=\"width:100%;margin: auto\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-textarea placeholder=\"Reply.\" style=\"color:black\" [(ngModel)]=\"chatModel.message\"></ion-textarea>\n          </ion-col>\n\n          <ion-col size=\"3\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <ion-row>\n\n              <ion-icon name=\"attach\"\n                style=\"color:rgb(121, 111, 111); width:30px; height:35px; margin-top:-5px; margin-right:5px\"></ion-icon>\n              <ion-icon name=\"send\" style=\"color:rgb(121, 111, 111); width:25px; height:25px\" (click)=\"sendMessage()\">\n              </ion-icon>\n            </ion-row>\n\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n    </div>\n  </div>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".innermsg.left {\n  float: left;\n  background-color: #F1F0F0;\n  color: black;\n  clear: both;\n}\n\n.innermsg.right {\n  float: right;\n  background-color: #0084FF;\n  color: white;\n  clear: both;\n}\n\n.placeholder-css {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  background-color: #9badc0;\n}\n\n.masters {\n  --background: #f1f4f9;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.TitleText {\n  font-size: 16px;\n  width: 81%;\n  margin-left: 10px;\n  color: #ffffff;\n}\n\n.img-css {\n  width: 43px;\n  border-radius: 100%;\n  height: 43px;\n  background-color: #f1f4f9;\n}\n\n.main-div {\n  width: 100%;\n  height: 100%;\n}\n\n.header-css {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  margin: auto;\n  padding: 10px;\n  background-color: #f88863;\n}\n\n.left-div-msg {\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  width: auto;\n  min-width: 40%;\n  max-width: 60%;\n  margin-left: 10px;\n  padding: 10px;\n  background-color: #ebeff3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9kZXRhaWxjaGF0L2RldGFpbGNoYXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXRhaWxjaGF0L2RldGFpbGNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FET0E7RUFDRSxrQkFBQTtFQUNDLFdBQUE7RUFDQyxZQUFBO0VBQ0MseUJBQUE7QUNKTDs7QURPQTtFQUNJLHFCQUFBO0FDSko7O0FEU0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDTko7O0FEV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QURXRTtFQUdFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDVko7O0FEY0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFHQSxZQUFBO0VBQ0EseUJBQUE7QUNiSjs7QURnQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ2JKOztBRGlCRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNDLFlBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7QUNmTDs7QURzQkU7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ25CTCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbGNoYXQvZGV0YWlsY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXJtc2cubGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjBGMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5pbm5lcm1zZy5yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIC8vbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODRGRjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi8vIC5tYXN0ZXJzIHtcbi8vICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxNTJhM2YgMCUsICM2NmNjZmYgMTAwJSk7XG4vLyAgIH1cblxuLnBsYWNlaG9sZGVyLWNzc3tcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgd2lkdGg6NTBweDtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzliYWRjMDsgXG59XG5cbi5tYXN0ZXJzIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG4gIH1cblxuIFxuXG4uY2wtYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICBcbiAgXG4gIC5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLlRpdGxlVGV4dHtcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAvLyB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmltZy1jc3N7XG4gICAgd2lkdGg6NDNweDsgXG4gICAgYm9yZGVyLXJhZGl1czoxMDAlO1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIC8vIHBhZGRpbmc6NXB4O1xuICAgIGhlaWdodDo0M3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY0Zjk7XG4gIH1cblxuICAubWFpbi1kaXZ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICAvLyAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZjg4ODYzLCNmY2IyOWEpO1xuICB9XG5cbiAgLmhlYWRlci1jc3N7XG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICB0b3A6MDtcbiAgICB3aWR0aDoxMDAlO1xuICAgICBtYXJnaW46YXV0bzsgXG4gICAgLy8gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmMWY0Zjk7XG4gICAgIHBhZGRpbmc6MTBweDsgXG4gICAgIGJhY2tncm91bmQtY29sb3I6I2Y4ODg2MztcbiAgfVxuXG4gIC8vIGlvbi1jb250ZW50e1xuICAvLyAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZjg4ODYzLCNmY2IyOWEpO1xuICAvLyB9XG5cbiAgLmxlZnQtZGl2LW1zZ3tcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIHdpZHRoOmF1dG87XG4gICAgbWluLXdpZHRoOjQwJTtcbiAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgIG1hcmdpbi1sZWZ0OjEwcHg7IFxuICAgICBwYWRkaW5nOjEwcHg7IFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlZmYzO1xuICB9IiwiLmlubmVybXNnLmxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjBGMDtcbiAgY29sb3I6IGJsYWNrO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmlubmVybXNnLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NEZGO1xuICBjb2xvcjogd2hpdGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ucGxhY2Vob2xkZXItY3NzIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWJhZGMwO1xufVxuXG4ubWFzdGVycyB7XG4gIC0tYmFja2dyb3VuZDogI2YxZjRmOTtcbn1cblxuLmNsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xufVxuXG4uVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDgxJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaW1nLWNzcyB7XG4gIHdpZHRoOiA0M3B4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBoZWlnaHQ6IDQzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY0Zjk7XG59XG5cbi5tYWluLWRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXItY3NzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmODg4NjM7XG59XG5cbi5sZWZ0LWRpdi1tc2cge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDQwJTtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlZmYzO1xufSJdfQ== */");

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
        this.image = "";
    }
    DetailchatPage.prototype.ngOnInit = function () {
        this.detailData = JSON.parse(this.activatedRoute.snapshot.params['userDetail']);
        this.name = this.detailData.name;
        this.id = this.detailData.id;
        if (this.detailData.image == null || this.detailData.image == "") {
            this.image = "";
        }
        else {
            this.image = this.detailData.image;
        }
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
        // this.loader.showBlockingLoaderAuth();
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
//# sourceMappingURL=pages-detailchat-detailchat-module.js.map