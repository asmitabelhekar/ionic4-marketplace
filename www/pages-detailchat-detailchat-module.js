(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detailchat-detailchat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detailchat/detailchat.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detailchat/detailchat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"8\" class=\"TitleHeader TitleText\">\n        <ion-label style=\"color:white\">{{name}}</ion-label>\n      </ion-col>\n     <ion-col size=\"2\">\n       <ion-icon name=\"search\" style=\"color:white; height:20px; width: 20px; margin:10px\"></ion-icon>\n     </ion-col>\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  style=\"width:100%;height:100%;\">\n<div style=\"color:black\"> \n<div *ngFor=\"let item of chatArray\"> \n\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"item.type == '1' \" style=\"width:100%\">\n    <ion-col style=\"margin-left:10px\">\n      <button style=\"border-radius: 50%; width:50px; height:50px; background-color: #9badc0; \"></button>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <div fxLayout=\"column\">\n        <section  style=\"width:auto;min-width:40%; max-width: 70%;margin-top:20px; padding:10px; background-color: #ebeff3\">\n          <label style=\"font-size: 15px;\">{{item.message}}</label>\n        </section>\n       <label style=\"font-size:12px; margin-top:3px\">{{item.time}}</label>\n      </div>\n    </ion-col>\n   \n   \n  </div>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"end end\"  *ngIf=\"item.type == '2' \">\n    <section  style=\"width:auto;min-width:40%; max-width: 70%;margin-top:20px; margin-right:10px; padding:10px; background-color: #d3e2f1\">\n      <label>{{item.message}}</label>\n    </section>\n    <label style=\"margin-right:10px;font-size:12px; margin-top:3px\">{{item.time}}</label>\n  </div>\n\n</div>\n\n  <div style=\"position: fixed; height:80px; bottom:0;width:100%; margin:auto; margin-bottom:-5px\">\n    <ion-card style=\"width:100%;margin: auto\">\n      <ion-row>\n        <ion-col size=\"9\">\n          <ion-textarea placeholder=\"Reply.\" style=\"color:black\" [(ngModel)]=\"chatModel.message\"></ion-textarea>\n        </ion-col>\n\n        <ion-col size=\"3\" fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"sendMessage(chatModel)\">\n          <ion-row>\n\n            <ion-icon name=\"attach\" style=\"color:rgb(121, 111, 111); width:30px; height:35px; margin-top:-5px; margin-right:5px\"></ion-icon>\n            <ion-icon name=\"send\" style=\"color:rgb(121, 111, 111); width:25px; height:25px\" ></ion-icon>\n          </ion-row>\n        \n        </ion-col>\n      </ion-row>\n    </ion-card>\n  \n  </div>\n</div>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".innermsg.left {\n  float: left;\n  background-color: #F1F0F0;\n  color: black;\n  clear: both;\n}\n\n.innermsg.right {\n  float: right;\n  background-color: #0084FF;\n  color: white;\n  clear: both;\n}\n\n.masters {\n  --background: #f1f4f9;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvaW9uaWM0LW1hcmtldHBsYWNlL3NyYy9hcHAvcGFnZXMvZGV0YWlsY2hhdC9kZXRhaWxjaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGV0YWlsY2hhdC9kZXRhaWxjaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FKOztBRFFBO0VBQ0kscUJBQUE7QUNMSjs7QURRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNMSjs7QURPQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNKSjs7QURRQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGV0YWlsY2hhdC9kZXRhaWxjaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lcm1zZy5sZWZ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMEYwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLmlubmVybXNnLnJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgLy9tYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NEZGO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLy8gLm1hc3RlcnMge1xuLy8gICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE1MmEzZiAwJSwgIzY2Y2NmZiAxMDAlKTtcbi8vICAgfVxuXG5cbi5tYXN0ZXJzIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWY0Zjk7XG4gIH1cblxuICAuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uVGl0bGVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuIiwiLmlubmVybXNnLmxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjBGMDtcbiAgY29sb3I6IGJsYWNrO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmlubmVybXNnLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NEZGO1xuICBjb2xvcjogd2hpdGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ubWFzdGVycyB7XG4gIC0tYmFja2dyb3VuZDogI2YxZjRmOTtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */");

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



var DetailchatPage = /** @class */ (function () {
    function DetailchatPage(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.chatModel = {};
        this.chatArray = [
            {
                "type": "1",
                "message": "Hey there Robert, How can i help you today?",
                "time": "2 minutes ago"
            },
            {
                "type": "2",
                "message": "Hey Eugene, I think I left one of the book in my room",
                "time": "2 minutes ago"
            },
            {
                "type": "1",
                "message": "Hi how r you??",
                "time": "2 minutes ago"
            },
            {
                "type": "1",
                "message": "Hey there Robert, How can i help you today?",
                "time": "2 minutes ago"
            },
            {
                "type": "2",
                "message": "Hey Eugene, I think I left one of the book in my room",
                "time": "2 minutes ago"
            },
            {
                "type": "1",
                "message": "Hi how r you??",
                "time": "2 minutes ago"
            },
            {
                "type": "1",
                "message": "Hey there Robert, How can i help you today?",
                "time": "2 minutes ago"
            },
            {
                "type": "2",
                "message": "Hey Eugene, I think I left one of the book in my room",
                "time": "2 minutes ago"
            },
            {
                "type": "1",
                "message": "Hi how r you??",
                "time": "2 minutes ago"
            },
            {
                "type": "1",
                "message": "Hey there Robert, How can i help you today?",
                "time": "2 minutes ago"
            },
            {
                "type": "2",
                "message": "Hey Eugene, I think I left one of the book in my room",
                "time": "2 minutes ago"
            },
            {
                "type": "1",
                "message": "Hi how r you??",
                "time": "2 minutes ago"
            },
            {
                "type": "1",
                "message": "Hey there Robert, How can i help you today?",
                "time": "2 minutes ago"
            },
            {
                "type": "2",
                "message": "Hey Eugene, I think I left one of the book in my room",
                "time": "2 minutes ago"
            },
            {
                "type": "1",
                "message": "Hi how r you??",
                "time": "2 minutes ago"
            },
            {
                "type": "1",
                "message": "Hey there Robert, How can i help you today?",
                "time": "2 minutes ago"
            },
            {
                "type": "2",
                "message": "Hey Eugene, I think I left one of the book in my room",
                "time": "2 minutes ago"
            },
            {
                "type": "1",
                "message": "Hi how r you??",
                "time": "2 minutes ago"
            }
        ];
    }
    DetailchatPage.prototype.ngOnInit = function () {
        this.name = this.activatedRoute.snapshot.params['name'];
    };
    DetailchatPage.prototype.goBackword = function () {
        window.history.back();
    };
    DetailchatPage.prototype.sendMessage = function (message) {
        var obj = {
            "type": "2",
            "message": message.message,
            "time": "Now"
        };
        this.chatArray.push(obj);
        this.chatModel['message'] = "";
    };
    DetailchatPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    DetailchatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detailchat',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detailchat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detailchat/detailchat.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detailchat.page.scss */ "./src/app/pages/detailchat/detailchat.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailchatPage);
    return DetailchatPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detailchat-detailchat-module.js.map