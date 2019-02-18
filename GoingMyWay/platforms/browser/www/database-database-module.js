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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>database</ion-title>\n    <br>\n    <ion-button (click)=\"checkStack()\">Navigate</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label position=\"floating\">Longitude</ion-label>\n    <ion-input [(ngModel)] = \"Long\" ></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">Latitude</ion-label>\n    <ion-input [(ngModel)] = \"Lat\" ></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">Profile Name</ion-label>\n    <ion-input [(ngModel)] = \"name\" ></ion-input>\n  </ion-item>\n\n  <ion-button (click)=\"testSend()\">Send to Database</ion-button>\n  <br>\n  <br>\n  <ion-button (click)=\"displayDocuments()\">Log Documents</ion-button>\n  <br>\n  <br>\n\n\n  <!-- <ion-item  *ngFor =\"let data of getData\" >\n  {{data.payload.doc._document.proto.fields.lat.stringValue}} \n  {{data.payload.doc._document.proto.fields.long.stringValue}}\n  {{data.payload.doc._document.proto.fields.name.stringValue}}\n  </ion-item>  -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/database/database.page.scss":
/*!*********************************************!*\
  !*** ./src/app/database/database.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFiYXNlL2RhdGFiYXNlLnBhZ2Uuc2NzcyJ9 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function DatabasePage(data, router) {
        this.data = data;
        this.router = router;
    }
    DatabasePage.prototype.ngOnInit = function () {
        this.loadDocuments();
    };
    DatabasePage.prototype.displayDocuments = function () {
        this.loadDocuments();
        console.log(this.getData);
    };
    DatabasePage.prototype.testSend = function () {
        this.data.sendJourney(this.Long, this.Lat, this.name);
    };
    DatabasePage.prototype.checkStack = function () {
        this.router.navigate(['map']);
    };
    DatabasePage.prototype.loadDocuments = function () {
        var _this = this;
        this.data.getJourney().subscribe(function (res) {
            _this.getData = res;
        });
    };
    DatabasePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-database',
            template: __webpack_require__(/*! ./database.page.html */ "./src/app/database/database.page.html"),
            styles: [__webpack_require__(/*! ./database.page.scss */ "./src/app/database/database.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_journey_service__WEBPACK_IMPORTED_MODULE_1__["JourneyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DatabasePage);
    return DatabasePage;
}());



/***/ })

}]);
//# sourceMappingURL=database-database-module.js.map