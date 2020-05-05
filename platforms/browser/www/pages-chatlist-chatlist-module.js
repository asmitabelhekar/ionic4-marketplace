(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chatlist-chatlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatlist/chatlist.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatlist/chatlist.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <!-- <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> -->\n    <label style=\"color:white; font-size:17px; margin-left:10px\">Chat</label>\n\n    <!-- <ion-title style=\"color:white ; margin-left:10px\">\n      Chats\n    </ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"width:100%;height:100%;\">\n    <div *ngFor=\"let item of usersArray\" style=\"margin-top:10px\">\n      <div *ngIf=\"item.id != userId\">\n\n        <ion-row (click)=\"detailChat(item.name, item.id)\" style=\"margin-left:10px; width:100%\">\n          <ion-col size=\"2\">\n            <img src=\"../../../assets/defaultprofilepicimg.png\"\n              style=\"border-radius: 50%;width:55px; height:55px; border:1px solid rgb(240, 234, 234)\" />\n          </ion-col>\n          <ion-col size=\"10\" style=\"margin-top:5px;\">\n            <ion-item style=\"margin-left:-10px\">\n              <div fxLayout=\"column\" >\n                <label style=\"color:black; font-size:12px;\">Name</label>\n                <label style=\"color:black;font-size:17px;\">{{item.name}}</label>\n              </div>\n              \n  \n            </ion-item>\n  \n  \n          </ion-col>\n        </ion-row>\n      </div>\n     \n\n    </div>\n    <div class=\"cl_bottom_fix\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n        <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n        <ion-icon name=\"document\" class=\"cl_post_css\" (click)=\"openChatList()\"></ion-icon>\n        <ion-icon name=\"add-circle\" class=\"cl_bottom_nav_css\" (click)=\"postAdvertisement()\">\n        </ion-icon>\n        <ion-icon name=\"heart\" class=\"cl_bottom_nav_css\" (click)=\"openFavourite()\"></ion-icon>\n        <ion-icon name=\"person\" class=\"cl_bottom_nav_css\" (click)=\"openProfile()\"></ion-icon>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: linear-gradient(to bottom, #152a3f 0%, #66ccff 100%);\n}\n\n.cl_bottom_nav_css {\n  width: 30px;\n  height: 30px;\n  color: gray;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  height: 50px;\n  width: 100%;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 30px;\n  height: 30px;\n  color: #152a3f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9jaGF0bGlzdC9jaGF0bGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXRsaXN0L2NoYXRsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtFQUFBO0FDQ0o7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNDLFdBQUE7RUFDQyx1QkFBQTtBQ0FOOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0bGlzdC9jaGF0bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzdGVycyB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTUyYTNmIDAlLCAjNjZjY2ZmIDEwMCUpO1xuICB9XG5cblxuICAuY2xfYm90dG9tX25hdl9jc3N7XG4gICAgd2lkdGg6MzBweDtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBjb2xvcjpncmF5O1xuICB9XG4gIFxuICAuY2xfYm90dG9tX2ZpeHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIGJvdHRvbTowcHg7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5jbF9wb3N0X2Nzc3tcbiAgICB3aWR0aDozMHB4O1xuICAgIGhlaWdodDozMHB4O1xuICAgIGNvbG9yOiMxNTJhM2Y7XG4gICAgLy8gY29sb3I6cmdiKDI0NywgOTcsIDk3KTtcbiAgfSIsIi5tYXN0ZXJzIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTUyYTNmIDAlLCAjNjZjY2ZmIDEwMCUpO1xufVxuXG4uY2xfYm90dG9tX25hdl9jc3Mge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmNsX2JvdHRvbV9maXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsX3Bvc3RfY3NzIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6ICMxNTJhM2Y7XG59Il19 */");

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
/* harmony import */ var src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/loaderservice/loader.service */ "./src/app/service/loaderservice/loader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/apiservice/api.service */ "./src/app/service/apiservice/api.service.ts");
/* harmony import */ var src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/network/network.service */ "./src/app/service/network/network.service.ts");








var ChatlistPage = /** @class */ (function () {
    function ChatlistPage(router, loader, apiCall, networkServices, menuController) {
        this.router = router;
        this.loader = loader;
        this.apiCall = apiCall;
        this.networkServices = networkServices;
        this.menuController = menuController;
        this.noInternet = "0";
        this.usersArray = [];
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
        this.menuController.enable(false);
        this.userId = localStorage.getItem("userId");
    }
    ChatlistPage.prototype.ngOnInit = function () {
        this.getUsers();
        this.userId = localStorage.getItem("userId");
    };
    ChatlistPage.prototype.ionViewWillEnter = function () {
        this.userId = localStorage.getItem("userId");
        console.log("get userId:" + this.userId);
        this.getUsers();
        console.log("show page : Chat List");
    };
    ChatlistPage.prototype.detailChat = function (name, id) {
        var userDetail = {
            "name": name,
            "id": id
        };
        this.router.navigate(['/detailchat', { userDetail: JSON.stringify(userDetail) }]);
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
    ChatlistPage.prototype.getUsers = function () {
        var _this = this;
        this.loader.showBlockingLoaderAuth();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "users/" + this.userId + "/chat-users";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.usersArray = MyResponse['result']['list'];
            console.log("show users:" + _this.usersArray);
            _this.loader.hideBlockingLoaderAuth();
            _this.noInternet = '0';
        }, function (error) {
            _this.noInternet = '1';
            _this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    ChatlistPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    ChatlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chatlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatlist/chatlist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chatlist.page.scss */ "./src/app/pages/chatlist/chatlist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_service_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            src_app_service_apiservice_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            src_app_service_network_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], ChatlistPage);
    return ChatlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chatlist-chatlist-module.js.map