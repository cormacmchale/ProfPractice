(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-geolocation-test-geolocation-module"],{

/***/ "./src/app/test-geolocation/test-geolocation.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/test-geolocation/test-geolocation.module.ts ***!
  \*************************************************************/
/*! exports provided: TestGeolocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestGeolocationPageModule", function() { return TestGeolocationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_geolocation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-geolocation.page */ "./src/app/test-geolocation/test-geolocation.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _test_geolocation_page__WEBPACK_IMPORTED_MODULE_5__["TestGeolocationPage"]
    }
];
var TestGeolocationPageModule = /** @class */ (function () {
    function TestGeolocationPageModule() {
    }
    TestGeolocationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_test_geolocation_page__WEBPACK_IMPORTED_MODULE_5__["TestGeolocationPage"]]
        })
    ], TestGeolocationPageModule);
    return TestGeolocationPageModule;
}());



/***/ }),

/***/ "./src/app/test-geolocation/test-geolocation.page.html":
/*!*************************************************************!*\
  !*** ./src/app/test-geolocation/test-geolocation.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-row>\r\n      <ion-col text-start padding-top>\r\n        <ion-title>Google Map</ion-title>\r\n      </ion-col>\r\n      <ion-col text-end></ion-col>\r\n        <ion-button (click)=\"loadMap()\" shape=\"round\" fill=\"outline\">\r\n          <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\r\n          Where I Am\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-header>\r\n  <ion-content>\r\n   \r\n    <div class=\"map-wrapper\">\r\n      <div id=\"map_center\">\r\n        <img src=\"../../assets/icon/center_marker.png\" />\r\n      </div>\r\n      <div #map id=\"map\"></div>\r\n    </div>\r\n    <div id=\"address\">\r\n      <span>{{address}}</span>\r\n    </div>\r\n   \r\n   \r\n  </ion-content>"

/***/ }),

/***/ "./src/app/test-geolocation/test-geolocation.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/test-geolocation/test-geolocation.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red; }\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold; }\n\n#map {\n  width: 100%;\n  height: 70vh; }\n\n.map-wrapper {\n  position: relative; }\n\n.map-wrapper #map_center {\n    position: absolute;\n    z-index: 99;\n    height: 40px;\n    width: 40px;\n    top: 50%;\n    left: 50%;\n    margin-left: -21px;\n    margin-top: -41px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC1nZW9sb2NhdGlvbi9DOlxcVXNlcnNcXExlbmFcXERlc2t0b3BcXFByb2ZQcmFjdGljZVxcR29pbmdNeVdheS9zcmNcXGFwcFxcdGVzdC1nZW9sb2NhdGlvblxcdGVzdC1nZW9sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLHFCQUFxQixFQUFBOztBQUl2QjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQixFQUFBOztBQURwQjtJQUlJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtZ2VvbG9jYXRpb24vdGVzdC1nZW9sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwX2NhbnZhcyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gICBcclxuICAgXHJcbiAgI2FkZHJlc3Mge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAgXHJcbiAgI21hcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICB9XHJcbiAgIFxyXG4gIC5tYXAtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIFxyXG4gICAgI21hcF9jZW50ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTIxcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC00MXB4O1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/test-geolocation/test-geolocation.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/test-geolocation/test-geolocation.page.ts ***!
  \***********************************************************/
/*! exports provided: TestGeolocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestGeolocationPage", function() { return TestGeolocationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestGeolocationPage = /** @class */ (function () {
    function TestGeolocationPage(geolocation, nativeGeocoder) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
    }
    TestGeolocationPage.prototype.ngOnInit = function () {
        this.loadMap();
    };
    TestGeolocationPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.map.addListener('tilesloaded', function () {
                console.log('accuracy', _this.map);
                _this.getAddressFromCoords(_this.map.center.lat(), _this.map.center.lng());
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    TestGeolocationPage.prototype.getAddressFromCoords = function (lattitude, longitude) {
        var _this = this;
        console.log("getAddressFromCoords " + lattitude + " " + longitude);
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then(function (result) {
            _this.address = "";
            var responseAddress = [];
            for (var _i = 0, _a = Object.entries(result[0]); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (value.length > 0)
                    responseAddress.push(value);
            }
            responseAddress.reverse();
            for (var _c = 0, responseAddress_1 = responseAddress; _c < responseAddress_1.length; _c++) {
                var value = responseAddress_1[_c];
                _this.address += value + ", ";
            }
            _this.address = _this.address.slice(0, -2);
        })
            .catch(function (error) {
            _this.address = "Address Not Available!";
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TestGeolocationPage.prototype, "mapElement", void 0);
    TestGeolocationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-geolocation',
            template: __webpack_require__(/*! ./test-geolocation.page.html */ "./src/app/test-geolocation/test-geolocation.page.html"),
            styles: [__webpack_require__(/*! ./test-geolocation.page.scss */ "./src/app/test-geolocation/test-geolocation.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"]])
    ], TestGeolocationPage);
    return TestGeolocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=test-geolocation-test-geolocation-module.js.map