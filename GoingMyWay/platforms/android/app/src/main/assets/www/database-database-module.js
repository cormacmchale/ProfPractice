(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["database-database-module"],{

/***/ "./src/app/database/database.module.ts":
/*!*********************************************!*\
  !*** ./src/app/database/database.module.ts ***!
  \*********************************************/
/*! exports provided: DatabasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabasePageModule", function() { return DatabasePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _database_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./database.page */ "./src/app/database/database.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _database_page__WEBPACK_IMPORTED_MODULE_5__["DatabasePage"]
    }
];
var DatabasePageModule = /** @class */ (function () {
    function DatabasePageModule() {
    }
    DatabasePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_database_page__WEBPACK_IMPORTED_MODULE_5__["DatabasePage"]]
        })
    ], DatabasePageModule);
    return DatabasePageModule;
}());



/***/ }),

/***/ "./src/app/database/database.page.html":
/*!*********************************************!*\
  !*** ./src/app/database/database.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Going My Way/RideShare\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div id=\"Center\">\r\n    <ion-card *ngFor=\"let info of getData\">\r\n      <ion-card-content *ngIf=\"info.payload.doc._document.proto.fields.name.stringValue == userName\">\r\n        <b>Start of Journey:</b> {{info.payload.doc._document.proto.fields.startloc.stringValue}}\r\n        <br>\r\n        <br>\r\n        <b>End of Journey:</b> {{info.payload.doc._document.proto.fields.endloc.stringValue}}\r\n        <br>\r\n        <ion-button color=\"danger\" (click)=\"deleteJourney(info.payload.doc._document.key.path.segments[6])\">Delete</ion-button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/database/database.page.scss":
/*!*********************************************!*\
  !*** ./src/app/database/database.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YWJhc2UvQzpcXFVzZXJzXFxDb3JtYWNcXERlc2t0b3BcXFByb2ZQcmFjdGljZVxcR29pbmdNeVdheS9zcmNcXGFwcFxcZGF0YWJhc2VcXGRhdGFiYXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXRhYmFzZS9kYXRhYmFzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjQ2VudGVyXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59Il19 */"

/***/ }),

/***/ "./src/app/database/database.page.ts":
/*!*******************************************!*\
  !*** ./src/app/database/database.page.ts ***!
  \*******************************************/
/*! exports provided: DatabasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabasePage", function() { return DatabasePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_journey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/journey.service */ "./src/app/journey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabasePage = /** @class */ (function () {
    function DatabasePage(data) {
        this.data = data;
    }
    DatabasePage.prototype.ngOnInit = function () {
        //get the Journey documnet from the database first
        this.loadDocuments();
    };
    //loading all the Journey Documents in from the database for the User
    DatabasePage.prototype.loadDocuments = function () {
        var _this = this;
        //all the information required by the app for mmanaging journies is collected here
        //onInit and manipulated in the html for the User
        this.user = this.data.getUser();
        this.userName = this.user.email;
        this.data.getJourney().subscribe(function (res) {
            _this.getData = res;
        });
    };
    //function that will delete a document from the database based on the id that is passed into
    //it
    DatabasePage.prototype.deleteJourney = function (documentId) {
        this.data.deleteJourney(documentId);
    };
    DatabasePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-database',
            template: __webpack_require__(/*! ./database.page.html */ "./src/app/database/database.page.html"),
            styles: [__webpack_require__(/*! ./database.page.scss */ "./src/app/database/database.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_journey_service__WEBPACK_IMPORTED_MODULE_1__["JourneyService"]])
    ], DatabasePage);
    return DatabasePage;
}());



/***/ })

}]);
//# sourceMappingURL=database-database-module.js.map