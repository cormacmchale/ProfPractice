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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Going My Way/RideShare\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"location\">\r\n    <ion-input [(ngModel)]=\"search_address\" placeholder=\"Search location:\"></ion-input>\r\n  </div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div id=\"search\">\r\n          <ion-button (click)=\"search(search_address)\" shape=\"round\" fill=\"outline\">search</ion-button>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div id=\"addJourney\">\r\n          <ion-button (click)=\"addJourneyToDatabase()\" shape=\"round\" fill=\"outline\">\r\n            <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\r\n            Add\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div id=\"myMap\"></div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/journey-planner/journey-planner.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/journey-planner/journey-planner.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myMap {\n  height: 90%;\n  margin: 2%;\n  border-radius: 5%; }\n\n#location {\n  border-radius: 30px;\n  margin: 2%;\n  border: 1px solid dodgerblue;\n  text-align: center; }\n\n#search {\n  text-align: center; }\n\n#addJourney {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5leS1wbGFubmVyL0M6XFxVc2Vyc1xcQ29ybWFjXFxEZXNrdG9wXFxQcm9mUHJhY3RpY2VcXEdvaW5nTXlXYXkvc3JjXFxhcHBcXGpvdXJuZXktcGxhbm5lclxcam91cm5leS1wbGFubmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLFdBQVc7RUFDWCxVQUFTO0VBQ1QsaUJBQWlCLEVBQUE7O0FBRXJCO0VBRUksbUJBQW1CO0VBQ25CLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBRUksa0JBQWtCLEVBQUE7O0FBR3RCO0VBRUksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9qb3VybmV5LXBsYW5uZXIvam91cm5leS1wbGFubmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vbWFyZ2lucyBmb3IgdGhlIGdvb2dsZSBtYXAgdGhhdCBhcHBlYXJzIHdoZW4geW91IFxyXG4vL2FjY2VzcyB0aGUgdmlld1xyXG4jbXlNYXBcclxue1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBtYXJnaW46MiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG4jbG9jYXRpb24gXHJcbnsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkb2RnZXJibHVlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNzZWFyY2ggXHJcbnsgICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuI2FkZEpvdXJuZXkgXHJcbnsgICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiAgXHJcbiAgIl19 */"

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
        //first thing the page must do is load the app in for the User
        this.loadMap();
    };
    //loads the Google map above ireland - will be changes in future builds for improved functionality
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
    };
    JourneyPlannerPage.prototype.search = function (location) {
        var _this = this;
        //clear the markers from the Map if the user decides to do a second search
        //so as not to confuse the data that will be sent to the database
        this.map.clear();
        //the location typed in by the User is converted to latlng co-ordinates by the Geocoder Object
        //the map is then sent to focus on this location
        //the user is then given two markers to drag to a start location and end location
        _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_3__["Geocoder"].geocode({
            "address": location
        })
            .then(function (results) {
            _this.map.setCameraTarget(results[0].position);
            _this.map.setCameraZoom(10);
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
    //this is the beginning of the largest set of function calls in the app
    //its setup in a cascading way as to handle the asynchrounous nature of the Geocoding
    JourneyPlannerPage.prototype.addJourneyToDatabase = function () {
        //first check that someone is logged in
        //if not found then alert the User as a user is required for a Journey
        if (!this.journeyService.getUser()) {
            alert("Please Log in to add a Journey");
        }
        else {
            //first gather the required information from the user that is logged on from the device
            var user = this.journeyService.getUser();
            var userName = user.email;
            //get the positions of where they have dragged the start and end of journey markers
            this.start = this.startJourney.getPosition();
            this.end = this.endJourney.getPosition();
            //all this information is passed here for formatting to be sent to that database as a document
            this.getJourneyInformation(this.start.lat, this.start.lng, this.end.lat, this.end.lng, userName);
        }
    };
    //this function reverse Geocodes a latlng for the start address
    //this information is used to delete a Journey in the databasePage
    JourneyPlannerPage.prototype.getJourneyInformation = function (x, y, x2, y2, user) {
        var _this = this;
        var waitForAddress = null;
        var checkAddress;
        _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_3__["Geocoder"].geocode({
            position: {
                "lat": x,
                "lng": y
            }
            //this is asynchronous so all of the information must be handled here for consistancy
        }).then(function (results) {
            checkAddress = results[0].extra.lines;
            waitForAddress =
                checkAddress[0] + ", " + checkAddress[1] + ", " + checkAddress[2]
                    + ", " + checkAddress[3] + ", " + checkAddress[4];
            //the same logic is then used to geocode the end address
            _this.finishGetJourneyInformation(x, y, x2, y2, user, waitForAddress);
        });
    };
    //the same as the above function for the other street addess of the end loaction
    JourneyPlannerPage.prototype.finishGetJourneyInformation = function (x, y, x2, y2, user, startLoc) {
        var _this = this;
        var waitForAddress = null;
        var checkAddress;
        _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_3__["Geocoder"].geocode({
            position: {
                "lat": x2,
                "lng": y2
            }
        }).then(function (results) {
            checkAddress = results[0].extra.lines;
            waitForAddress =
                checkAddress[0] + ", " + checkAddress[1] + ", " + checkAddress[2]
                    + ", " + checkAddress[3] + ", " + checkAddress[4];
            _this.addToDataBase(y, x, y2, x2, user, startLoc, waitForAddress);
        });
    };
    //finally after the street addresses have been obtained from the co-ordinates of where the markers are then
    //send all of the information to the service to be stored on firebase as a document
    JourneyPlannerPage.prototype.addToDataBase = function (x1, y1, x2, y2, user, startLoc, endLoc) {
        this.journeyService.sendJourney(x1, y1, x2, y2, user, startLoc, endLoc);
        //alert the user and return them to the homepage
        alert("Journey added!");
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