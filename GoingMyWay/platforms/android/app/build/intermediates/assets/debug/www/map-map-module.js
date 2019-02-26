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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Going My Way/RideShare</ion-title>\r\n    <ion-button (click)=\"visitMapPage()\">Journies</ion-button>\r\n    <ion-button (click)=\"navigateJourneyPlanner()\">Add a Journey</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-button (click)=\"showJournies()\">Show Markers</ion-button>\r\n  <br>\r\n  <div id=\"myMap\"></div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/map/map.page.scss":
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myMap {\n  height: 90%;\n  margin: 2%;\n  border-radius: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL0M6XFxVc2Vyc1xcQ29ybWFjXFxEZXNrdG9wXFxQcm9mUHJhY3RpY2VcXEdvaW5nTXlXYXkvc3JjXFxhcHBcXG1hcFxcbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQVc7RUFDWCxVQUFTO0VBQ1QsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteU1hcFxyXG57XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG1hcmdpbjoyJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function MapPage(journies, router) {
        this.journies = journies;
        this.router = router;
        this.userLat = 0;
        this.userLong = 0;
    }
    MapPage.prototype.ngOnInit = function () {
        this.loadDocuments();
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
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
        this.map = _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_1__["GoogleMaps"].create('myMap', mapOptions);
    }; //loadMap()
    MapPage.prototype.showJournies = function () {
        this.loadDocuments();
        if (this.markersToShow != null) {
            console.log(this.markersToShow);
            for (var _i = 0, _a = this.markersToShow; _i < _a.length; _i++) {
                var info = _a[_i];
                this.addMarkerFromDatabase(info.payload.doc._document.proto.fields.endlat.doubleValue, info.payload.doc._document.proto.fields.endlong.doubleValue, info.payload.doc._document.proto.fields.startlat.doubleValue, info.payload.doc._document.proto.fields.startlong.doubleValue, info.payload.doc._document.proto.fields.name.stringValue);
                //this.addPolylinesFromDatabase(info.payload.doc._document.proto.fields.endlat.doubleValue,info.payload.doc._document.proto.fields.endlong.doubleValue,info.payload.doc._document.proto.fields.startlat.doubleValue,info.payload.doc._document.proto.fields.startlong.doubleValue);
            }
        }
        else {
            console.log("No Data");
        }
    };
    //add markers from database
    MapPage.prototype.addMarkerFromDatabase = function (x, y, x1, y1, title) {
        var r = this.convertRgb(x);
        var g = this.convertRgb(y);
        var b = this.convertRgb(x1);
        //adding different logic
        var startMarker = this.map.addMarkerSync({
            title: "Start Of Journey",
            icon: 'rgb(' + r + ',' + g + ',' + b + ')',
            animation: 'Drop',
            position: {
                lat: x,
                lng: y
            }
        });
        var endMarker = this.map.addMarkerSync({
            title: "End Of Journey",
            icon: 'rgb(' + r + ',' + g + ',' + b + ')',
            animation: 'Drop',
            position: {
                lat: x1,
                lng: y1
            }
        });
        var pointA = startMarker.getPosition();
        var pointB = endMarker.getPosition();
        this.map.addPolyline({
            points: [pointA, pointB]
        });
        // this.map.addMarker(
        //   {
        //     title:title+" End",
        //     icon:'Red',
        //     animation: 'Drop',
        //     position:
        //      {
        //       lat:x,
        //       lng:y
        //     }
        //   }).then((marker:Marker)=>
        //   {
        //     marker.showInfoWindow();
        //     this.pointA = marker.getPosition();
        //   });
        //   this.map.addMarker(
        //     {
        //       title:title+" Start",
        //       icon:'Blue',
        //       animation: 'Drop',
        //       position:
        //        {
        //         lat:x1,
        //         lng:y1
        //       }
        //     }).then((marker:Marker)=>
        //     {
        //       marker.showInfoWindow();
        //       this.pointB = marker.getPosition();
        //     });
        //     this.addPolylinesFromDatabase(this.pointA,this.pointB) 
    };
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
    MapPage.prototype.visitMapPage = function () {
        this.router.navigate(['map']);
    };
    MapPage.prototype.navigateJourneyPlanner = function () {
        this.router.navigate(['journey-planner']);
    };
    MapPage.prototype.loadDocuments = function () {
        var _this = this;
        this.journies.getJourney().subscribe(function (res) {
            _this.markersToShow = res;
        });
    };
    MapPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/map/map.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_journey_service__WEBPACK_IMPORTED_MODULE_2__["JourneyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=map-map-module.js.map