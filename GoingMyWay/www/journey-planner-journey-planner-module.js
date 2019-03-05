(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journey-planner-journey-planner-module"],{

/***/ "./src/app/journey-planner/journey-planner.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/journey-planner/journey-planner.module.ts ***!
  \***********************************************************/
/*! exports provided: JourneyPlannerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyPlannerPageModule", function() { return JourneyPlannerPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _journey_planner_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./journey-planner.page */ "./src/app/journey-planner/journey-planner.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _journey_planner_page__WEBPACK_IMPORTED_MODULE_5__["JourneyPlannerPage"]
    }
];
var JourneyPlannerPageModule = /** @class */ (function () {
    function JourneyPlannerPageModule() {
    }
    JourneyPlannerPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_journey_planner_page__WEBPACK_IMPORTED_MODULE_5__["JourneyPlannerPage"]]
        })
    ], JourneyPlannerPageModule);
    return JourneyPlannerPageModule;
}());



/***/ }),

/***/ "./src/app/journey-planner/journey-planner.page.html":
/*!***********************************************************!*\
  !*** ./src/app/journey-planner/journey-planner.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<<ion-header>\r\n  <ion-row>\r\n    <ion-col text-start padding-top>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        Going My Way/RideShare\r\n      </ion-title>\r\n    </ion-col>\r\n    <ion-col text-end>\r\n      <ion-button (click)=\"addJourneyToDatabase()\" shape=\"round\" fill=\"outline\">\r\n        <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\r\n        Add This Journey!\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-header>\r\n\r\n  <ion-content padding>\r\n      <ion-row>\r\n\r\n\r\n          <ion-col text-start padding-top>\r\n              <ion-input [(ngModel)]=\"search_address\" placeholder=\"\">Search location:\r\n\r\n                </ion-input>\r\n            </ion-col>\r\n            <ion-col text-end>\r\n                <ion-button (click)=\"search(search_address)\"shape=\"round\" fill=\"outline\" >search</ion-button>\r\n            </ion-col>\r\n\r\n\r\n      </ion-row>\r\n\r\n\r\n    \r\n    \r\n    <div id=\"myMap\"></div>\r\n\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/journey-planner/journey-planner.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/journey-planner/journey-planner.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myMap {\n  height: 90%;\n  margin: 2%;\n  border-radius: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5leS1wbGFubmVyL0M6XFxVc2Vyc1xcQ29ybWFjXFxEZXNrdG9wXFxQcm9mUHJhY3RpY2VcXEdvaW5nTXlXYXkvc3JjXFxhcHBcXGpvdXJuZXktcGxhbm5lclxcam91cm5leS1wbGFubmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQVc7RUFDWCxVQUFTO0VBQ1QsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9qb3VybmV5LXBsYW5uZXIvam91cm5leS1wbGFubmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteU1hcFxyXG57XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG1hcmdpbjoyJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/journey-planner/journey-planner.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/journey-planner/journey-planner.page.ts ***!
  \*********************************************************/
/*! exports provided: JourneyPlannerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyPlannerPage", function() { return JourneyPlannerPage; });
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-maps/ngx */ "./node_modules/@ionic-native/google-maps/ngx/index.js");
/* harmony import */ var src_app_journey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/journey.service */ "./src/app/journey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JourneyPlannerPage = /** @class */ (function () {
    function JourneyPlannerPage(router, journeyService) {
        this.router = router;
        this.journeyService = journeyService;
    }
    JourneyPlannerPage.prototype.ngOnInit = function () {
        this.loadMap();
    };
    JourneyPlannerPage.prototype.loadMap = function () {
        var mapOptions = {
            camera: {
                target: {
                    lat: 53.270962,
                    lng: -9.062691
                },
                zoom: 5,
                tilt: 30
            }
        };
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_0__["GoogleMaps"].create('myMap', mapOptions);
    }; //loadMap()
    JourneyPlannerPage.prototype.visitMapPage = function () {
        this.router.navigate(['map']);
    };
    JourneyPlannerPage.prototype.navigateJourneyPlanner = function () {
        this.router.navigate(['journey-planner']);
    };
    JourneyPlannerPage.prototype.search = function (location) {
        var _this = this;
        this.map.clear();
        console.log(location);
        _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_3__["Geocoder"].geocode({
            "address": location
        })
            .then(function (results) {
            console.log(results[0].position);
            _this.map.setCameraTarget(results[0].position);
            _this.map.setCameraZoom(10);
            var mark = results[0].position.lat;
            _this.endJourney = _this.map.addMarkerSync({
                title: "End Journey",
                icon: 'Red',
                position: results[0].position,
                draggable: true,
            });
            _this.startJourney = _this.map.addMarkerSync({
                title: "Start Journey",
                icon: 'Blue',
                position: results[0].position,
                draggable: true,
            });
        });
    };
    JourneyPlannerPage.prototype.addJourneyToDatabase = function () {
        if (!this.journeyService.getUser()) {
            alert("Please Log in to add a Journey");
        }
        else {
            var user = this.journeyService.getUser();
            var userName = user.email;
            this.start = this.startJourney.getPosition();
            this.end = this.endJourney.getPosition();
            this.showPosition(this.start.lng, this.start.lat, this.end.lng, this.end.lat, userName);
        }
    };
    JourneyPlannerPage.prototype.showPosition = function (x1, y1, x2, y2, user) {
        this.journeyService.sendJourney(x1, y1, x2, y2, user);
        alert("Journey added");
        this.router.navigate(['home']);
    };
    JourneyPlannerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-journey-planner',
            template: __webpack_require__(/*! ./journey-planner.page.html */ "./src/app/journey-planner/journey-planner.page.html"),
            styles: [__webpack_require__(/*! ./journey-planner.page.scss */ "./src/app/journey-planner/journey-planner.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_journey_service__WEBPACK_IMPORTED_MODULE_4__["JourneyService"]])
    ], JourneyPlannerPage);
    return JourneyPlannerPage;
}());



/***/ })

}]);
//# sourceMappingURL=journey-planner-journey-planner-module.js.map