(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"],{

/***/ "./src/app/map/map.module.ts":
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.page */ "./src/app/map/map.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"]
    }
];
var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"]]
        })
    ], MapPageModule);
    return MapPageModule;
}());



/***/ }),

/***/ "./src/app/map/map.page.html":
/*!***********************************!*\
  !*** ./src/app/map/map.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Going My Way/RideShare\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"center\">\r\n    <ion-button (click)=\"showJournies()\" shape=\"round\" fill=\"outline\">\r\n      <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\r\n      Show Journies\r\n    </ion-button>\r\n  </div>\r\n  <div id=\"myMap\"></div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/map/map.page.scss":
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myMap {\n  height: 90%;\n  margin: 2%;\n  border-radius: 5%; }\n\n#center {\n  text-align: center;\n  margin: 3%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL0M6XFxVc2Vyc1xcQ29ybWFjXFxEZXNrdG9wXFxQcm9mUHJhY3RpY2VcXEdvaW5nTXlXYXkvc3JjXFxhcHBcXG1hcFxcbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQVc7RUFDWCxVQUFTO0VBQ1QsaUJBQWlCLEVBQUE7O0FBRXJCO0VBRUksa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215TWFwXHJcbntcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgbWFyZ2luOjIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbn1cclxuI2NlbnRlclxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDMlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/map/map.page.ts":
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/google-maps/ngx */ "./node_modules/@ionic-native/google-maps/ngx/index.js");
/* harmony import */ var src_app_journey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/journey.service */ "./src/app/journey.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = /** @class */ (function () {
    function MapPage(Journey, geo) {
        this.Journey = Journey;
        this.geo = geo;
    }
    MapPage.prototype.ngOnInit = function () {
        //first get the Journey documents from the database
        this.loadDocuments();
        //get the location of the device
        this.findUser();
    };
    //find the users current position and then pass these into the load map function
    //this will error handle the wait time for getting the users position
    //log an error if neccessary
    MapPage.prototype.findUser = function () {
        var _this = this;
        this.geo.getCurrentPosition().then(function (resp) {
            _this.loadMap(resp.coords.latitude, resp.coords.longitude);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    //load map waits for the Geolcation of the user and then centers the map on that location
    MapPage.prototype.loadMap = function (lat, lng) {
        var mapOptions = {
            camera: {
                target: {
                    lat: lat,
                    lng: lng
                },
                zoom: 12,
                tilt: 30
            }
        };
        //create the map for the view
        this.map = _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_1__["GoogleMaps"].create('myMap', mapOptions);
    };
    MapPage.prototype.showJournies = function () {
        //first check for a user
        if (!this.Journey.getUser()) {
            alert("Please Log in to view Journies");
        }
        //if a valid user is found
        else {
            if (this.markersToShow != null) {
                for (var _i = 0, _a = this.markersToShow; _i < _a.length; _i++) {
                    var info = _a[_i];
                    //loop through all of the documents from the database
                    //and one by one paint the Journeys from the database onto the map for the user
                    //by adding the required information from the document into the function to do so
                    this.addMarkerFromDatabase(info.payload.doc._document.proto.fields.endlat.doubleValue, info.payload.doc._document.proto.fields.endlong.doubleValue, info.payload.doc._document.proto.fields.startlat.doubleValue, info.payload.doc._document.proto.fields.startlong.doubleValue, info.payload.doc._document.proto.fields.name.stringValue);
                }
            }
            //if empty
            else {
                alert("No Journeys in Database");
            }
        }
    };
    //add markers from database
    MapPage.prototype.addMarkerFromDatabase = function (x, y, x1, y1, title) {
        //initially this get a random vaild RGB colour based on the unique co-ordinates of the Journey
        var r = this.convertRgb(x);
        var g = this.convertRgb(y);
        var b = this.convertRgb(x1);
        //add the markers to the map
        //title is name of the user who added the Journey so the other Users can see who is driving
        var startMarker = this.map.addMarkerSync({
            title: title,
            icon: 'rgb(' + r + ',' + g + ',' + b + ')',
            animation: 'Drop',
            position: {
                lat: x,
                lng: y
            }
        });
        //this allows the title to be viewed
        startMarker.showInfoWindow();
        //add the end point of the journey
        var endMarker = this.map.addMarkerSync({
            title: title,
            icon: 'rgb(' + r + ',' + g + ',' + b + ')',
            animation: 'Drop',
            position: {
                lat: x1,
                lng: y1
            }
        });
        endMarker.showInfoWindow();
        var pointA = startMarker.getPosition();
        var pointB = endMarker.getPosition();
        //add a polyline between these two points to distinguish Journeys on the view
        this.map.addPolyline({
            points: [pointA, pointB]
        });
    };
    //function that returns a valid rgb value based on latlng
    MapPage.prototype.convertRgb = function (x) {
        //keep in range
        if (x < 0) {
            x = (x * x) + 20;
        }
        else {
            x = x + 75;
        }
        //keep in range
        if (x >= 255) {
            x -= 100;
        }
        return x;
    };
    //retrieves the information from the database
    //and stores it into an array for manipulation
    MapPage.prototype.loadDocuments = function () {
        var _this = this;
        this.Journey.getJourney().subscribe(function (res) {
            _this.markersToShow = res;
        });
    };
    MapPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/map/map.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_journey_service__WEBPACK_IMPORTED_MODULE_2__["JourneyService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=map-map-module.js.map