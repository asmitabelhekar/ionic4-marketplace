(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chatlist-chatlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatlist/chatlist.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatlist/chatlist.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\" *ngIf=\"showSearch == 0 \">\n  <ion-toolbar class=\"new-background-color\">\n    <div fxFlex=\"100\" fxLayout=\"row\" >\n      <div fxFlex=\"85\" fxLayoutAlign=\"start center\">\n        <label style=\"color:white; font-size:17px; margin-left:10px;\">Chat</label>\n      </div>\n\n      <div fxFlex=\"15\" (click)=\"searchShow()\" fxLayoutAlign=\"end center\">\n        <ion-icon name=\"search\" style=\"color:white; height:25px; width: 26px; margin-right:10px;\"></ion-icon>\n      </div>\n    </div>\n\n   \n\n  </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"new-toolbar-background-color\" *ngIf=\"showSearch == 1 \">\n  <ion-toolbar class=\"new-toolbar-background-color\">\n   \n\n    <div  fxFlex=\"100\" fxLayout=\"row\" style=\"background-color: white;width:100%;\">\n      <div fxFlex=\"15\" fxLayoutAlign=\"center center\">\n        <ion-icon class=\"back-icon-css\" (click)=\"goBackword()\" name=\"arrow-back-outline\"></ion-icon>\n         <!-- <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button> -->\n      </div>\n      <div fxLayoutAlign=\"start center\" style=\"width: 70%;\">\n        <input placeholder=\"Search..\" (input)=\"search($event)\"\n          style=\"background: white;width: 87%;font-size:13px;color:rgb(61, 60, 60)\" />\n      </div>\n      <div fxLayoutAlign=\"start center\" *ngIf=\"showClose == 1\" style=\"width: 15%;\">\n        <ion-icon class=\"close-icon-css\" (click)=\"clearSearch()\" name=\"close\"></ion-icon>\n      </div>\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n \n  <div style=\"width:100%;height:100%;\">\n    <div *ngIf=\"usersCount > 0 \">\n      <div *ngFor=\"let item of usersArray\" style=\"margin-top:10px\">\n        <div *ngIf=\"item.id != userId\">\n            \n          <div fxLayout=\"row\" (click)=\"detailChat(item.name, item.id, item.image)\" style=\"margin-left:10px; width:100%;padding:5px;\">\n            <div style=\"width:16%\">\n              <img *ngIf=\"item.image == null || item.image == '' \" src=\"../../../assets/agent.png\"\n              style=\"border-radius: 50%;width:65px; height:62px; border:1px solid rgb(240, 234, 234);background-color:#f1f4f9\" />\n              <img *ngIf=\"item.image != null || item.image != '' \" src=\"{{item.image}}\"\n                style=\"border-radius: 50%;width:65px; height:62px; border:1px solid rgb(240, 234, 234);background-color:#f1f4f9\" />\n            </div>\n            <div style=\"margin-top:5px;width:84%\">\n              <ion-item style=\"margin-top:2px;background-color: transparent;\">\n                <div fxLayout=\"column\">\n                  <label style=\"color:rgb(49, 49, 49);font-size:16px;font-weight:420\">{{item.name}}</label>\n                  <label class=\"text\" style=\"color:rgb(110, 108, 108); font-size:11px;margin:2px;\">{{item.lastMessage}}</label>\n                </div>\n              </ion-item>\n            </div>\n\n          \n         \n          </div>\n\n        \n      \n\n        </div>\n\n\n      </div>\n    </div>\n    <div *ngIf=\"usersCount == 0 \" fxLayoutAlign=\"center center\">\n      <h4 style=\"margin-top:25%;\">No records found</h4>\n    </div>\n\n    <div class=\"cl_bottom_fix\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:10px\">\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"home()\">\n        <ion-icon name=\"home\" class=\"cl_bottom_nav_css\" (click)=\"home()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">HOME</label>\n      </div>\n\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openChatList()\">\n        <ion-icon class=\"cl_post_css\" name=\"document\" (click)=\"openChatList()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_selected-text_font\">CHATS</label>\n      </div>\n\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"postAdvertisement()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"add-circle\" (click)=\"postAdvertisement()\">\n        </ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">SELL</label>\n      </div>\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openFavourite()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"heart\" (click)=\"openFavourite()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">MY ADS</label>\n      </div>\n\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:20%\" (click)=\"openProfile()\">\n        <ion-icon class=\"cl_bottom_nav_css\" name=\"person\" (click)=\"openProfile()\"></ion-icon>\n        <label fxLayoutAlign=\"center center\" class=\"cl_text_font\">PROFILE</label>\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>");

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
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");









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
                src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
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
/* harmony default export */ __webpack_exports__["default"] = (".masters {\n  --background: linear-gradient(to bottom, #152a3f 0%, #66ccff 100%);\n}\n\n.cl_bottom_nav_css {\n  width: 24px;\n  height: 24px;\n  width: 100%;\n  color: gray;\n  background-color: #ffffff;\n}\n\n.cl_bottom_fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 8px;\n  border-top: 1px solid #f1f4f9;\n  background-color: white;\n}\n\n.cl_post_css {\n  width: 100%;\n  width: 24px;\n  height: 24px;\n  color: #fb7645;\n  background-color: #ffffff;\n}\n\n.cl_text_font {\n  padding-top: 4px;\n  font-size: 11px;\n}\n\n.cl_selected-text_font {\n  padding-top: 4px;\n  font-size: 11px;\n  color: #fb7645;\n}\n\n.back-div {\n  background-size: cover;\n  height: 100%;\n  background-repeat: no-repeat;\n  width: 100%;\n  background: linear-gradient(to bottom, #f35b28, #f7906e, #feae93);\n}\n\n.item-content {\n  background-color: #000000;\n}\n\nion-item {\n  --background:transparent;\n}\n\ninput {\n  border: none;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.cl_add_course_css {\n  border: 1px solid grey;\n  border-radius: 22px;\n  padding-left: 15px;\n  margin: 20px;\n  cursor: pointer;\n}\n\n.text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 25px;\n  height: 25px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n}\n\n.back-icon-css {\n  width: 28px;\n  color: #f35b28;\n  height: 28px;\n}\n\n.close-icon-css {\n  width: 34px;\n  color: gray;\n  height: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvRGVza3RvcC9pb25pYzQtbWFya2V0cGxhY2Uvc3JjL2FwcC9wYWdlcy9jaGF0bGlzdC9jaGF0bGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXRsaXN0L2NoYXRsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtFQUFBO0FDQ0o7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUdBLFdBQUE7RUFDQSxXQUFBO0VBR0EseUJBQUE7QUNKSjs7QURPRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQyw2QkFBQTtFQUNDLHVCQUFBO0FDSk47O0FET0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBR0EseUJBQUE7QUNOSjs7QURVRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1BKOztBRFVBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFFQSxXQUFBO0VBQ0EsaUVBQUE7QUNSSjs7QURhRTtFQUNFLHlCQUFBO0FDVko7O0FEYUU7RUFDRSx3QkFBQTtBQ1ZKOztBRGNBO0VBQ0UsWUFBQTtBQ1hGOztBRGVBO0VBQ0UsYUFBQTtBQ1pGOztBRGdCQTtFQUNFLHNCQUFBO0VBS0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNFLFlBQUE7RUFDRyxlQUFBO0FDakJQOztBRG1CQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQXVCLDRCQUFBO0VBQ3ZCLDRCQUFBO0FDZkY7O0FEbUJBO0VBQ0Usd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ2hCRjs7QURvQkE7RUFDRSxXQUFBO0VBQ0QsY0FBQTtFQUNDLFlBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQyxZQUFBO0FDakJIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdGxpc3QvY2hhdGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hc3RlcnMge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE1MmEzZiAwJSwgIzY2Y2NmZiAxMDAlKTtcbiAgfVxuXG5cbiAgLmNsX2JvdHRvbV9uYXZfY3Nze1xuICAgIHdpZHRoOjI0cHg7XG4gICAgaGVpZ2h0OjI0cHg7XG4gICAgLy8gY29sb3I6Z3JheTtcbiAgXG4gICAgd2lkdGg6MTAwJTtcbiAgICBjb2xvcjpncmF5O1xuICAgIC8vIHBhZGRpbmctdG9wOjVweDtcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTo1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuICBcbiAgLmNsX2JvdHRvbV9maXh7XG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICBib3R0b206MHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgcGFkZGluZzo4cHg7XG4gICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNmMWY0Zjk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmNsX3Bvc3RfY3Nze1xuICAgIHdpZHRoOjEwMCU7XG4gICAgd2lkdGg6MjRweDtcbiAgICBoZWlnaHQ6MjRweDtcbiAgICBjb2xvcjogI2ZiNzY0NTtcbiAgICAvLyBwYWRkaW5nLXRvcDo1cHg7XG4gICAgLy8gcGFkZGluZy1ib3R0b206NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICBcbiAgfVxuICBcbiAgLmNsX3RleHRfZm9udHtcbiAgICBwYWRkaW5nLXRvcDo0cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIFxuICAuY2xfc2VsZWN0ZWQtdGV4dF9mb250e1xuICAgIHBhZGRpbmctdG9wOjRweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICNmYjc2NDU7XG4gIH1cblxuLmJhY2stZGl2e1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCNmMzViMjgsICNmNzkwNmUsI2ZlYWU5Myk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xvZ2luYmcucG5nXCIpO1xuICAgIC8vIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sb2dpbmJnLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgfVxuXG4gIC5pdGVtLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDAwMDtcbiAgfVxuXG4gIGlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgfVxuXG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuXG4uY2xfYWRkX2NvdXJzZV9jc3N7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIC8vIHBhZGRpbmctdG9wOjEwcHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOjEwcHg7XG4gIC8vIHBhZGRpbmctbGVmdDoxM3B4O1xuICAvLyBwYWRkaW5nLXJpZ2h0OjEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIHBhZGRpbmctbGVmdDoxNXB4O1xuICAgIG1hcmdpbjoyMHB4O1xuICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50ZXh0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cblxuLmNsLWJhY2stYnV0dG9ue1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAvLyBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5iYWNrLWljb24tY3Nze1xuICB3aWR0aDoyOHB4O1xuIGNvbG9yOiNmMzViMjg7XG4gIGhlaWdodDoyOHB4O1xufVxuXG4uY2xvc2UtaWNvbi1jc3N7XG4gIHdpZHRoOjM0cHg7XG4gIGNvbG9yOmdyYXk7XG4gICBoZWlnaHQ6MzRweDtcbn0iLCIubWFzdGVycyB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE1MmEzZiAwJSwgIzY2Y2NmZiAxMDAlKTtcbn1cblxuLmNsX2JvdHRvbV9uYXZfY3NzIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBncmF5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2xfYm90dG9tX2ZpeCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNGY5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsX3Bvc3RfY3NzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZmI3NjQ1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2xfdGV4dF9mb250IHtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uY2xfc2VsZWN0ZWQtdGV4dF9mb250IHtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogI2ZiNzY0NTtcbn1cblxuLmJhY2stZGl2IHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2YzNWIyOCwgI2Y3OTA2ZSwgI2ZlYWU5Myk7XG59XG5cbi5pdGVtLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNsX2FkZF9jb3Vyc2VfY3NzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLmNsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xufVxuXG4uYmFjay1pY29uLWNzcyB7XG4gIHdpZHRoOiAyOHB4O1xuICBjb2xvcjogI2YzNWIyODtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uY2xvc2UtaWNvbi1jc3Mge1xuICB3aWR0aDogMzRweDtcbiAgY29sb3I6IGdyYXk7XG4gIGhlaWdodDogMzRweDtcbn0iXX0= */");

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
        this.profileImg = "";
        this.usersCount = 0;
        this.noInternet = "0";
        this.usersArray = [];
        this.showSearch = 0;
        this.showClose = 0;
        this.menuController.enable(false);
        this.userId = localStorage.getItem("userId");
    }
    ChatlistPage.prototype.ngOnInit = function () {
        this.profileImg = localStorage.getItem("profileImage");
        // this.getUsers();
        this.userId = localStorage.getItem("userId");
    };
    ChatlistPage.prototype.ionViewWillEnter = function () {
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "users/" + this.userId + "/chat-users";
        this.userId = localStorage.getItem("userId");
        console.log("get userId:" + this.userId);
        this.getUsers(this.url);
        console.log("show page : Chat List");
    };
    ChatlistPage.prototype.detailChat = function (name, id, image) {
        if (image == null) {
            image = "";
        }
        console.log("show image as abc::::" + image);
        var userDetail = {
            "name": name,
            "id": id,
            "image": image
        };
        this.router.navigate(['/detailchat', { userDetail: JSON.stringify(userDetail) }]);
    };
    ChatlistPage.prototype.openChatList = function () {
        this.router.navigate(['/chatlist']);
    };
    ChatlistPage.prototype.postAdvertisement = function () {
        var status = "0";
        localStorage.setItem("postStatus", status);
        this.router.navigate(['/newadvertisementform']);
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
    ChatlistPage.prototype.getUsers = function (url) {
        var _this = this;
        // this.loader.showBlockingLoaderAuth();
        // let url = environment.base_url + environment.version + "users/" + this.userId + "/chat-users";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.usersArray = MyResponse['result']['list'];
            _this.usersCount = MyResponse['result']['count'];
            console.log("show users:" + _this.usersArray);
            // this.loader.hideBlockingLoaderAuth();
            _this.noInternet = '0';
        }, function (error) {
            _this.noInternet = '1';
            // this.loader.hideBlockingLoaderAuth();
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    ChatlistPage.prototype.searchShow = function () {
        this.showSearch = 1;
    };
    ChatlistPage.prototype.goBackword = function () {
        this.showSearch = 0;
    };
    ChatlistPage.prototype.clearSearch = function () {
        this.showSearch = 0;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "users/" + this.userId + "/chat-users";
        this.getUsers(this.url);
    };
    ChatlistPage.prototype.search = function ($event) {
        console.log("show key search:" + $event.data);
        var getKey = $event.data;
        if (getKey.length > 0) {
            this.showClose = 1;
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version + "users/" + this.userId + "/chat-users?" + "search=" + getKey;
            this.getUsers(this.url);
        }
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
//# sourceMappingURL=pages-chatlist-chatlist-module.js.map