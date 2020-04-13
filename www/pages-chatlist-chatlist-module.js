(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chatlist-chatlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatlist/chatlist.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatlist/chatlist.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color:white\">\n      Chats\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"width:100%;height:100%;\">\n    <div *ngFor=\"let item of chatListArray\" style=\"margin-top:10px\">\n\n      <ion-row (click)=\"detailChat(item.name)\" style=\"margin-left:10px; width:100%\">\n        <ion-col size=\"2\">\n          <img src=\"../../../assets/defaultprofilepicimg.png\"\n            style=\"border-radius: 50%;width:55px; height:55px; border:1px solid rgb(240, 234, 234)\" />\n        </ion-col>\n        <ion-col size=\"10\" style=\"margin-top:5px;\">\n          <ion-item style=\"margin-left:-10px\">\n            <div fxLayout=\"column\" >\n              <label style=\"color:black; font-size:12px;\">{{item.name}}</label><br />\n              <label style=\"color:black;font-size:17px;\">{{item.name}}</label>\n            </div>\n            \n\n          </ion-item>\n\n\n        </ion-col>\n      </ion-row>\n\n    </div>\n    <div class=\"cl_bottom_fix\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n        <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n        <ion-icon name=\"document\" class=\"cl_post_css\" (click)=\"openChatList()\"></ion-icon>\n        <ion-icon name=\"add-circle\" class=\"cl_bottom_nav_css\" (click)=\"postAdvertisement()\">\n        </ion-icon>\n        <ion-icon name=\"heart\" class=\"cl_bottom_nav_css\" (click)=\"openFavourite()\"></ion-icon>\n        <ion-icon name=\"person\" class=\"cl_bottom_nav_css\" (click)=\"openProfile()\"></ion-icon>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/chatlist/chatlist-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/chatlist/chatlist-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChatlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlistPageRoutingModule", function() { return ChatlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chatlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatlist.page */ "./src/app/pages/chatlist/chatlist.page.ts");




var routes = [
    {
        path: '',
        component: _chatlist_page__WEBPACK_IMPORTED_MODULE_3__["ChatlistPage"]
    }
];
var ChatlistPageRoutingModule = /** @class */ (function () {
    function ChatlistPageRoutingModule() {
    }
    ChatlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChatlistPageRoutingModule);
    return ChatlistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/chatlist/chatlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chatlist/chatlist.module.ts ***!
  \***************************************************/
/*! exports provided: ChatlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlistPageModule", function() { return ChatlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _chatlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatlist-routing.module */ "./src/app/pages/chatlist/chatlist-routing.module.ts");
/* harmony import */ var _chatlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatlist.page */ "./src/app/pages/chatlist/chatlist.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");








var ChatlistPageModule = /** @class */ (function () {
    function ChatlistPageModule() {
    }
    ChatlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _chatlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatlistPageRoutingModule"]
            ],
            declarations: [_chatlist_page__WEBPACK_IMPORTED_MODULE_6__["ChatlistPage"]]
        })
    ], ChatlistPageModule);
    return ChatlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chatlist/chatlist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/chatlist/chatlist.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: linear-gradient(to bottom, #152a3f 0%, #66ccff 100%);\n}\n\n.cl_bottom_nav_css {\n  width: 30px;\n  height: 30px;\n  color: gray;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  height: 50px;\n  width: 100%;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 30px;\n  height: 30px;\n  color: #f76161;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvaW9uaWM0LW1hcmtldHBsYWNlL3NyYy9hcHAvcGFnZXMvY2hhdGxpc3QvY2hhdGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGF0bGlzdC9jaGF0bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrRUFBQTtBQ0NKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQyxXQUFBO0VBQ0MsdUJBQUE7QUNBTjs7QURHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdGxpc3QvY2hhdGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hc3RlcnMge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE1MmEzZiAwJSwgIzY2Y2NmZiAxMDAlKTtcbiAgfVxuXG5cbiAgLmNsX2JvdHRvbV9uYXZfY3Nze1xuICAgIHdpZHRoOjMwcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgY29sb3I6Z3JheTtcbiAgfVxuICBcbiAgLmNsX2JvdHRvbV9maXh7XG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICBib3R0b206MHB4O1xuICAgIGhlaWdodDo1MHB4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuY2xfcG9zdF9jc3N7XG4gICAgd2lkdGg6MzBweDtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBjb2xvcjpyZ2IoMjQ3LCA5NywgOTcpO1xuICB9IiwiLm1hc3RlcnMge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxNTJhM2YgMCUsICM2NmNjZmYgMTAwJSk7XG59XG5cbi5jbF9ib3R0b21fbmF2X2NzcyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uY2xfYm90dG9tX2ZpeCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY2xfcG9zdF9jc3Mge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2Y3NjE2MTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/chatlist/chatlist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/chatlist/chatlist.page.ts ***!
  \*************************************************/
/*! exports provided: ChatlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlistPage", function() { return ChatlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");




var ChatlistPage = /** @class */ (function () {
    function ChatlistPage(router, menuController) {
        this.router = router;
        this.menuController = menuController;
        this.chatListArray = [
            {
                "image": "",
                "name": "Asmita Belhekar"
            },
            {
                "image": "",
                "name": "Smita Belhekar"
            },
            {
                "image": "",
                "name": "Pranil Belhekar"
            },
            {
                "image": "",
                "name": "Suman Belhekar"
            },
            {
                "image": "",
                "name": "Asmita Belhekar"
            }, {
                "image": "",
                "name": "Asmita Belhekar"
            }
        ];
        this.menuController.enable(true);
    }
    ChatlistPage.prototype.ngOnInit = function () {
    };
    ChatlistPage.prototype.detailChat = function (name) {
        this.router.navigate(['/detailchat', { name: name }]);
    };
    ChatlistPage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    ChatlistPage.prototype.postAdvertisement = function () {
        this.router.navigate(['/postadvertisement']);
        // this.router.navigate(['/secondpageadvertisement']);
    };
    ChatlistPage.prototype.home = function () {
        this.router.navigate(['/home']);
    };
    ChatlistPage.prototype.openFavourite = function () {
        this.router.navigate(['/favourite']);
    };
    ChatlistPage.prototype.openProfile = function () {
        this.router.navigate(['/profile']);
    };
    ChatlistPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    ChatlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chatlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatlist/chatlist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chatlist.page.scss */ "./src/app/pages/chatlist/chatlist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], ChatlistPage);
    return ChatlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chatlist-chatlist-module.js.map