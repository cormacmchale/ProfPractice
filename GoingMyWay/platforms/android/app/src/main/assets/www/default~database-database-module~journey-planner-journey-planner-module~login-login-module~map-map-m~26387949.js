(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~database-database-module~journey-planner-journey-planner-module~login-login-module~map-map-m~26387949"],{

/***/ "./node_modules/@ionic-native/geolocation/ngx/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/geolocation/ngx/index.js ***!
  \*************************************************************/
/*! exports provided: Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Geolocation = /** @class */ (function (_super) {
    __extends(Geolocation, _super);
    function Geolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Geolocation.prototype.getCurrentPosition = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    Geolocation.prototype.watchPosition = function (options) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    Geolocation.pluginName = "Geolocation";
    Geolocation.plugin = "cordova-plugin-geolocation";
    Geolocation.pluginRef = "navigator.geolocation";
    Geolocation.repo = "https://github.com/apache/cordova-plugin-geolocation";
    Geolocation.install = "ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION=\"To locate you\"";
    Geolocation.installVariables = ["GEOLOCATION_USAGE_DESCRIPTION"];
    Geolocation.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Geolocation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Geolocation);
    return Geolocation;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dlb2xvY2F0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBbUtELCtCQUFpQjs7OztJQVVoRCx3Q0FBa0IsYUFBQyxPQUE0QjtJQUkvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkc7SUFDSCxtQ0FBYSxHQUFiLFVBQWMsT0FBNEI7UUFDeEMsT0FBTyxJQUFJLFVBQVUsQ0FBYyxVQUFDLFFBQWE7WUFDL0MsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDNUIsT0FBTyxDQUNSLENBQUM7WUFDRixPQUFPLGNBQU0sT0FBQSxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBekMsQ0FBeUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7O0lBekNVLFdBQVc7UUFIdkIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFdBQVc7c0JBckt4QjtFQXFLaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlcyB7XG4gIC8qKlxuICAgKiBhIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uJ3MgbGF0aXR1ZGUgaW4gZGVjaW1hbCBkZWdyZWVzLlxuICAgKi9cbiAgbGF0aXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBwb3NpdGlvbidzIGxvbmdpdHVkZSBpbiBkZWNpbWFsIGRlZ3JlZXMuXG4gICAqL1xuICBsb25naXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBhY2N1cmFjeSBvZiB0aGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBwcm9wZXJ0aWVzLFxuICAgKiBleHByZXNzZWQgaW4gbWV0ZXJzLlxuICAgKi9cbiAgYWNjdXJhY3k6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBwb3NpdGlvbidzIGFsdGl0dWRlIGluIG1ldHJlcywgcmVsYXRpdmUgdG8gc2VhXG4gICAqIGxldmVsLiBUaGlzIHZhbHVlIGNhbiBiZSBudWxsIGlmIHRoZSBpbXBsZW1lbnRhdGlvbiBjYW5ub3QgcHJvdmlkZSB0aGUgZGF0YS5cbiAgICovXG4gIGFsdGl0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgYWNjdXJhY3kgb2YgdGhlIGFsdGl0dWRlIGV4cHJlc3NlZCBpbiBtZXRlcnMuXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIG51bGwuXG4gICAqL1xuICBhbHRpdHVkZUFjY3VyYWN5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBkZXZpY2UgaXMgdHJhdmVsaW5nLiBUaGlzXG4gICAqIHZhbHVlLCBzcGVjaWZpZWQgaW4gZGVncmVlcywgaW5kaWNhdGVzIGhvdyBmYXIgb2ZmIGZyb20gaGVhZGluZyB0cnVlIG5vcnRoXG4gICAqIHRoZSBkZXZpY2UgaXMuIDAgZGVncmVlcyByZXByZXNlbnRzIHRydWUgbm9ydGgsIGFuZCB0aGUgZGlyZWN0aW9uIGlzXG4gICAqIGRldGVybWluZWQgY2xvY2t3aXNlICh3aGljaCBtZWFucyB0aGF0IGVhc3QgaXMgOTAgZGVncmVlcyBhbmQgd2VzdCBpcyAyNzBcbiAgICogZGVncmVlcykuIElmIHNwZWVkIGlzIDAsIGhlYWRpbmcgaXMgTmFOLiBJZiB0aGUgZGV2aWNlIGlzIHVuYWJsZSB0byBwcm92aWRlXG4gICAqIGhlYWRpbmcgaW5mb3JtYXRpb24sIHRoaXMgdmFsdWUgaXMgbnVsbC5cbiAgICovXG4gIGhlYWRpbmc6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSB2ZWxvY2l0eSBvZiB0aGUgZGV2aWNlIGluIG1ldGVycyBwZXIgc2Vjb25kLlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBudWxsLlxuICAgKi9cbiAgc3BlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9wb3NpdGlvbiB7XG4gIC8qKlxuICAgKiBBIENvb3JkaW5hdGVzIG9iamVjdCBkZWZpbmluZyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgKi9cbiAgY29vcmRzOiBDb29yZGluYXRlcztcblxuICAvKipcbiAgICogQSB0aW1lc3RhbXAgcmVwcmVzZW50aW5nIHRoZSB0aW1lIGF0IHdoaWNoIHRoZSBsb2NhdGlvbiB3YXMgcmV0cmlldmVkLlxuICAgKi9cbiAgdGltZXN0YW1wOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25FcnJvciB7XG4gIC8qKlxuICAgKiBBIGNvZGUgdGhhdCBpbmRpY2F0ZXMgdGhlIGVycm9yIHRoYXQgb2NjdXJyZWRcbiAgICovXG4gIGNvZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBtZXNzYWdlIHRoYXQgY2FuIGRlc2NyaWJlIHRoZSBlcnJvciB0aGF0IG9jY3VycmVkXG4gICAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvbG9jYXRpb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIElzIGEgcG9zaXRpdmUgbG9uZyB2YWx1ZSBpbmRpY2F0aW5nIHRoZSBtYXhpbXVtIGFnZSBpbiBtaWxsaXNlY29uZHMgb2YgYVxuICAgKiBwb3NzaWJsZSBjYWNoZWQgcG9zaXRpb24gdGhhdCBpcyBhY2NlcHRhYmxlIHRvIHJldHVybi4gSWYgc2V0IHRvIDAsIGl0XG4gICAqIG1lYW5zIHRoYXQgdGhlIGRldmljZSBjYW5ub3QgdXNlIGEgY2FjaGVkIHBvc2l0aW9uIGFuZCBtdXN0IGF0dGVtcHQgdG9cbiAgICogcmV0cmlldmUgdGhlIHJlYWwgY3VycmVudCBwb3NpdGlvbi4gSWYgc2V0IHRvIEluZmluaXR5IHRoZSBkZXZpY2UgbXVzdFxuICAgKiByZXR1cm4gYSBjYWNoZWQgcG9zaXRpb24gcmVnYXJkbGVzcyBvZiBpdHMgYWdlLiBEZWZhdWx0OiAwLlxuICAgKi9cbiAgbWF4aW11bUFnZT86IG51bWJlcjtcblxuICAvKipcbiAgICogSXMgYSBwb3NpdGl2ZSBsb25nIHZhbHVlIHJlcHJlc2VudGluZyB0aGUgbWF4aW11bSBsZW5ndGggb2YgdGltZVxuICAgKiAoaW4gbWlsbGlzZWNvbmRzKSB0aGUgZGV2aWNlIGlzIGFsbG93ZWQgdG8gdGFrZSBpbiBvcmRlciB0byByZXR1cm4gYVxuICAgKiBwb3NpdGlvbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgSW5maW5pdHksIG1lYW5pbmcgdGhhdCBnZXRDdXJyZW50UG9zaXRpb24oKVxuICAgKiB3b24ndCByZXR1cm4gdW50aWwgdGhlIHBvc2l0aW9uIGlzIGF2YWlsYWJsZS5cbiAgICovXG4gIHRpbWVvdXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgYXBwbGljYXRpb24gd291bGQgbGlrZSB0byByZWNlaXZlIHRoZSBiZXN0IHBvc3NpYmxlIHJlc3VsdHMuXG4gICAqIElmIHRydWUgYW5kIGlmIHRoZSBkZXZpY2UgaXMgYWJsZSB0byBwcm92aWRlIGEgbW9yZSBhY2N1cmF0ZSBwb3NpdGlvbiwgaXRcbiAgICogd2lsbCBkbyBzby4gTm90ZSB0aGF0IHRoaXMgY2FuIHJlc3VsdCBpbiBzbG93ZXIgcmVzcG9uc2UgdGltZXMgb3IgaW5jcmVhc2VkXG4gICAqIHBvd2VyIGNvbnN1bXB0aW9uICh3aXRoIGEgR1BTIGNoaXAgb24gYSBtb2JpbGUgZGV2aWNlIGZvciBleGFtcGxlKS4gT24gdGhlXG4gICAqIG90aGVyIGhhbmQsIGlmIGZhbHNlLCB0aGUgZGV2aWNlIGNhbiB0YWtlIHRoZSBsaWJlcnR5IHRvIHNhdmUgcmVzb3VyY2VzIGJ5XG4gICAqIHJlc3BvbmRpbmcgbW9yZSBxdWlja2x5IGFuZC9vciB1c2luZyBsZXNzIHBvd2VyLiBEZWZhdWx0OiBmYWxzZS5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBlbmFibGVIaWdoQWNjdXJhY3k/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEdlb2xvY2F0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBkZXZpY2UncyBsb2NhdGlvbiwgc3VjaCBhcyBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlLiBDb21tb24gc291cmNlcyBvZiBsb2NhdGlvbiBpbmZvcm1hdGlvbiBpbmNsdWRlIEdsb2JhbCBQb3NpdGlvbmluZyBTeXN0ZW0gKEdQUykgYW5kIGxvY2F0aW9uIGluZmVycmVkIGZyb20gbmV0d29yayBzaWduYWxzIHN1Y2ggYXMgSVAgYWRkcmVzcywgUkZJRCwgV2lGaSBhbmQgQmx1ZXRvb3RoIE1BQyBhZGRyZXNzZXMsIGFuZCBHU00vQ0RNQSBjZWxsIElEcy5cbiAqXG4gKiAgVGhpcyBBUEkgaXMgYmFzZWQgb24gdGhlIFczQyBHZW9sb2NhdGlvbiBBUEkgU3BlY2lmaWNhdGlvbiwgYW5kIG9ubHkgZXhlY3V0ZXMgb24gZGV2aWNlcyB0aGF0IGRvbid0IGFscmVhZHkgcHJvdmlkZSBhbiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBGb3IgaU9TIHlvdSBoYXZlIHRvIGFkZCB0aGlzIGNvbmZpZ3VyYXRpb24gdG8geW91ciBjb25maWd1cmF0aW9uLnhtbCBmaWxlXG4gKiBgYGB4bWxcbiAqIDxlZGl0LWNvbmZpZyBmaWxlPVwiKi1JbmZvLnBsaXN0XCIgbW9kZT1cIm1lcmdlXCIgdGFyZ2V0PVwiTlNMb2NhdGlvbldoZW5JblVzZVVzYWdlRGVzY3JpcHRpb25cIj5cbiAqICAgIDxzdHJpbmc+V2UgdXNlIHlvdXIgbG9jYXRpb24gZm9yIGZ1bGwgZnVuY3Rpb25hbGl0eSBvZiBjZXJ0YWluIGFwcCBmZWF0dXJlcy48L3N0cmluZz5cbiAqIDwvZWRpdC1jb25maWc+XG4gKiBgYGBcbiAqXG4gKlxuICogQHVzYWdlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgR2VvbG9jYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2dlb2xvY2F0aW9uL25neCc7XG4gKlxuICogLi4uXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnZW9sb2NhdGlvbjogR2VvbG9jYXRpb24pIHt9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKS50aGVuKChyZXNwKSA9PiB7XG4gKiAgLy8gcmVzcC5jb29yZHMubGF0aXR1ZGVcbiAqICAvLyByZXNwLmNvb3Jkcy5sb25naXR1ZGVcbiAqIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICogICBjb25zb2xlLmxvZygnRXJyb3IgZ2V0dGluZyBsb2NhdGlvbicsIGVycm9yKTtcbiAqIH0pO1xuICpcbiAqIGxldCB3YXRjaCA9IHRoaXMuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbigpO1xuICogd2F0Y2guc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gKiAgLy8gZGF0YSBjYW4gYmUgYSBzZXQgb2YgY29vcmRpbmF0ZXMsIG9yIGFuIGVycm9yIChpZiBhbiBlcnJvciBvY2N1cnJlZCkuXG4gKiAgLy8gZGF0YS5jb29yZHMubGF0aXR1ZGVcbiAqICAvLyBkYXRhLmNvb3Jkcy5sb25naXR1ZGVcbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ29vcmRpbmF0ZXNcbiAqIEdlb3Bvc2l0aW9uXG4gKiBQb3NpdGlvbkVycm9yXG4gKiBHZW9sb2NhdGlvbk9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHZW9sb2NhdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdlb2xvY2F0aW9uJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmdlb2xvY2F0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZ2VvbG9jYXRpb24nLFxuICBpbnN0YWxsOlxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ2VvbG9jYXRpb24gLS12YXJpYWJsZSBHRU9MT0NBVElPTl9VU0FHRV9ERVNDUklQVElPTj1cIlRvIGxvY2F0ZSB5b3VcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnR0VPTE9DQVRJT05fVVNBR0VfREVTQ1JJUFRJT04nXSxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGRldmljZSdzIGN1cnJlbnQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7R2VvbG9jYXRpb25PcHRpb25zfSBvcHRpb25zICBUaGUgW2dlb2xvY2F0aW9uIG9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9wb3NpdGlvbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgW3Bvc2l0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb24pIG9mIHRoZSBkZXZpY2UsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0Q3VycmVudFBvc2l0aW9uKG9wdGlvbnM/OiBHZW9sb2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPEdlb3Bvc2l0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIHRoZSBjdXJyZW50IGRldmljZSdzIHBvc2l0aW9uLiAgQ2xlYXIgdGhlIHdhdGNoIGJ5IHVuc3Vic2NyaWJpbmcgZnJvbVxuICAgKiBPYnNlcnZhYmxlIGNoYW5nZXMuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKClcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigocCkgPT4gcC5jb29yZHMgIT09IHVuZGVmaW5lZCkgLy9GaWx0ZXIgT3V0IEVycm9yc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHBvc2l0aW9uID0+IHtcbiAgICogICBjb25zb2xlLmxvZyhwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlICsgJyAnICsgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlKTtcbiAgICogfSk7XG4gICAqXG4gICAqIC8vIFRvIHN0b3Agbm90aWZpY2F0aW9uc1xuICAgKiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7R2VvbG9jYXRpb25PcHRpb25zfSBvcHRpb25zICBUaGUgW2dlb2xvY2F0aW9uIG9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxHZW9wb3NpdGlvbj59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdpdGggdGhlIFtwb3NpdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uKSBvZiB0aGUgZGV2aWNlLCBvciBlcnJvcnMuXG4gICAqL1xuICB3YXRjaFBvc2l0aW9uKG9wdGlvbnM/OiBHZW9sb2NhdGlvbk9wdGlvbnMpOiBPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uPigob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgY29uc3Qgd2F0Y2hJZCA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuICgpID0+IG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHdhdGNoSWQpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/journey.service.ts":
/*!************************************!*\
  !*** ./src/app/journey.service.ts ***!
  \************************************/
/*! exports provided: JourneyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyService", function() { return JourneyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var JourneyService = /** @class */ (function () {
    function JourneyService(database, geolocation, authentication) {
        this.geolocation = geolocation;
        this.authentication = authentication;
        this.isLoggedIn = false;
        this.journies = database.collection('journey');
    }
    JourneyService.prototype.getJourney = function () {
        this.journiesTwo = this.journies.snapshotChanges();
        return this.journiesTwo;
    };
    JourneyService.prototype.sendJourney = function (startlong, startlat, endlong, endlat, name) {
        console.log(startlong + " " + startlat + " " + endlong + " " + endlat);
        this.addJourney = { startlong: startlong, startlat: startlat, endlong: endlong, endlat: endlat, name: name };
        this.journies.add(this.addJourney);
    };
    JourneyService.prototype.getlocation = function () {
        var user = this.geolocation.getCurrentPosition();
        return user;
    };
    JourneyService.prototype.userAuthentication = function (name, password) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1, errorforUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authentication.auth.signInWithEmailAndPassword(name, password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            alert("Login Success!");
                            console.log(result.user.email);
                            this.isLoggedIn = true;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        errorforUser = e_1.message;
                        console.error(e_1.message);
                        alert(errorforUser + "\n Login failed");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JourneyService.prototype.userRegister = function (name, password) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_2, errorforUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authentication.auth.createUserWithEmailAndPassword(name, password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            alert("Registration Success!");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        errorforUser = e_2.message;
                        console.error(e_2.message);
                        alert(errorforUser + "\n Registration failed");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JourneyService.prototype.getUser = function () {
        return this.authentication.auth.currentUser;
    };
    JourneyService.prototype.logUserOut = function () {
        return this.authentication.auth.signOut();
    };
    JourneyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], JourneyService);
    return JourneyService;
}());



/***/ })

}]);
//# sourceMappingURL=default~database-database-module~journey-planner-journey-planner-module~login-login-module~map-map-m~26387949.js.map