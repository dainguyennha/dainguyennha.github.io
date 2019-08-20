(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _first_question_first_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./first-question/first-question.component */ "./src/app/first-question/first-question.component.ts");
/* harmony import */ var _hello_hello_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hello/hello.component */ "./src/app/hello/hello.component.ts");





var routes = [
    { path: 'first-question', component: _first_question_first_question_component__WEBPACK_IMPORTED_MODULE_3__["FirstQuestionComponent"] },
    { path: '', component: _hello_hello_component__WEBPACK_IMPORTED_MODULE_4__["HelloComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-hello {\n    position: absolute;\n    top: 250px;\n    border-radius: 10px;\n    padding: 20px;\n    box-shadow: 2px 4px 3px 1px grey;\n    background: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVsbG8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDNweCAxcHggZ3JleTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<audio src=\"../../assets/musics/TheGioiCuaAnh-BuiTuanNgoc.mp3\" autoplay></audio>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'forme';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _first_question_first_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first-question/first-question.component */ "./src/app/first-question/first-question.component.ts");
/* harmony import */ var _hello_hello_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hello/hello.component */ "./src/app/hello/hello.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _first_question_first_question_component__WEBPACK_IMPORTED_MODULE_6__["FirstQuestionComponent"],
                _hello_hello_component__WEBPACK_IMPORTED_MODULE_7__["HelloComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/first-question/first-question.component.css":
/*!*************************************************************!*\
  !*** ./src/app/first-question/first-question.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n    margin: 20px;\n    color: #FFFBEA;\n    background: hsl(210, 16%, 82%, 0.5);\n    border-radius: 13px;\n    text-align: center;\n    padding: 13px;\n    transition: all 0.5s linear;\n    -webkit-animation-name: ttbb;\n    /* Safari 4.0 - 8.0 */\n    -webkit-animation-duration: 4s;\n    /* Safari 4.0 - 8.0 */\n    animation-name: ttbb;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n\n}\n\n.btn-yes {\n    padding: 15px 29px;\n    font-size: 20px;\n    border-radius: 14px;\n    border: none;\n    background: #E12D39;\n    color: white;\n    position: absolute;\n    left: 33%;\n    top: 42%;\n    transition: all 0.5s linear;\n    -webkit-animation-name: ttb;\n    /* Safari 4.0 - 8.0 */\n    -webkit-animation-duration: 4s;\n    /* Safari 4.0 - 8.0 */\n    animation-name: ttb;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n\n}\n\n.btn-yes:hover {\n    background: #EF4E4E;\n}\n\n.btn-no {\n    padding: 15px 29px;\n    font-size: 20px;\n    border-radius: 14px;\n    border: none;\n    background: #E12D39;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 42%;\n    -webkit-animation-name: ttb;\n    /* Safari 4.0 - 8.0 */\n    -webkit-animation-duration: 4s;\n    /* Safari 4.0 - 8.0 */\n    animation-name: ttb;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n\n\n}\n\n.modal-edit {\n    padding: 5px;\n}\n\n.anh-biet-ma h2 {\n    margin: 15px;\n    text-align: center;\n}\n\n.anh-biet-ma h4 {\n    padding: 19px;\n}\n\ninput {\n    width: 60%;\n    border: none;\n    background: #EF4E4E;\n    color: white;\n    border-radius: 23px;\n    padding: 8px 10px;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.nhap {\n    text-align: center;\n    margin-bottom: 45px;\n}\n\n.btn-send {\n    background: #EF4E4E;\n    padding: 6px 30px;\n    border: none;\n    font-size: 18px;\n    border-radius: 20px;\n    color: white;\n}\n\n.btn-send:hover {\n    color: white;\n}\n\n.btn-send:focus {\n    outline: none;\n}\n\n.result {\n    text-align: center;\n    display: none;\n    margin-bottom: 40px;\n}\n\n/* Safari 4.0 - 8.0 */\n\n@-webkit-keyframes ttb {\n    from {\n        top: 100%;\n        opacity: 0;\n    }\n    to {\n        top: 30%;\n        opacity: 1;\n    }\n}\n\n/* Standard syntax */\n\n@keyframes ttb {\n    from {\n        top: 100%;\n        opacity: 0;\n    }\n    to {\n        top: 42%;\n        opacity: 1;\n    }\n}\n\n/* Safari 4.0 - 8.0 */\n\n@-webkit-keyframes ttbb {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n/* Standard syntax */\n\n@keyframes ttbb {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3QtcXVlc3Rpb24vZmlyc3QtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLDhCQUFzQjtZQUF0QixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsOEJBQXNCO1lBQXRCLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDhCQUFzQjtZQUF0QixzQkFBc0I7OztBQUcxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUNBLHFCQUFxQjs7QUFFckI7SUFDSTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFFBQVE7UUFDUixVQUFVO0lBQ2Q7QUFDSjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkO0lBQ0E7UUFDSSxRQUFRO1FBQ1IsVUFBVTtJQUNkO0FBQ0o7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZmlyc3QtcXVlc3Rpb24vZmlyc3QtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGNvbG9yOiAjRkZGQkVBO1xuICAgIGJhY2tncm91bmQ6IGhzbCgyMTAsIDE2JSwgODIlLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHR0YmI7XG4gICAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcbiAgICAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gICAgYW5pbWF0aW9uLW5hbWU6IHR0YmI7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcblxufVxuXG4uYnRuLXllcyB7XG4gICAgcGFkZGluZzogMTVweCAyOXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjRTEyRDM5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzMlO1xuICAgIHRvcDogNDIlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB0dGI7XG4gICAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcbiAgICAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gICAgYW5pbWF0aW9uLW5hbWU6IHR0YjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuXG59XG5cbi5idG4teWVzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUY0RTRFO1xufVxuXG4uYnRuLW5vIHtcbiAgICBwYWRkaW5nOiAxNXB4IDI5cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNFMTJEMzk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA0MiU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogdHRiO1xuICAgIC8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gICAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuICAgIGFuaW1hdGlvbi1uYW1lOiB0dGI7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcblxuXG59XG5cbi5tb2RhbC1lZGl0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmgtYmlldC1tYSBoMiB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFuaC1iaWV0LW1hIGg0IHtcbiAgICBwYWRkaW5nOiAxOXB4O1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI0VGNEU0RTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uaGFwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cblxuLmJ0bi1zZW5kIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUY0RTRFO1xuICAgIHBhZGRpbmc6IDZweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tc2VuZDpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLXNlbmQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5yZXN1bHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4vKiBTYWZhcmkgNC4wIC0gOC4wICovXG5cbkAtd2Via2l0LWtleWZyYW1lcyB0dGIge1xuICAgIGZyb20ge1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4vKiBTdGFuZGFyZCBzeW50YXggKi9cblxuQGtleWZyYW1lcyB0dGIge1xuICAgIGZyb20ge1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdG9wOiA0MiU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4vKiBTYWZhcmkgNC4wIC0gOC4wICovXG5cbkAtd2Via2l0LWtleWZyYW1lcyB0dGJiIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLyogU3RhbmRhcmQgc3ludGF4ICovXG5cbkBrZXlmcmFtZXMgdHRiYiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/first-question/first-question.component.html":
/*!**************************************************************!*\
  !*** ./src/app/first-question/first-question.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"title\">\n        <h1>Em có yêu anh không? </h1>\n        <h3>Tắt cái này đi mà không trả lời sẽ phải yêu anh suốt đời =)) <i class=\"far fa-heart\"></i></h3>\n    </div>\n    <div class=\"answer\">\n        <button type=\"button\" class=\"btn btn-yes\" data-toggle=\"modal\" data-target=\"#exampleModal\"\n            data-whatever=\"@mdo\">Có! Em yêu anh ^^</button>\n        <button type=\"button\" class=\"btn btn-no\">Không bao giờ</button>\n    </div>\n</div>\n<div class=\"bd-example\">\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg modal-edit\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"anh-biet-ma\">\n                    <h2>Anh biết mà ^^</h2>\n                    <h4>Nếu câu trả lời trên là ép buộc thì hãy tự viết câu trả lời\n                        vào đây rồi bấm GỬI nhé ^^\n                    </h4>\n                </div>\n                <div class=\"nhap\">\n                    <form class=\"form-nhap\">\n                        <input type=\"text\" name=\"reply\" id=\"reply\" (keyup)=\"autoComplete()\" value=\"{{vall}}\"\n                            autocomplete=\"off\" [ngModel]=\"reply\">\n                        <button type=\"submit\" (click)=\"onSend()\" class=\"btn-send\">GỬI</button>\n                    </form>\n                </div>\n                <div class=\"result\">\n                    <h3>haha đừng có chối nữa nhé :v</h3>\n                    <h4>Anh cũng yêu em nhiều lắm</h4>\n                    <h4>Dù sau này có thế nào hãy luôn bên anh em nhé, anh hứa sẽ ngoan\n                        :vv</h4>\n                    <img src=\"../../assets/images/tenor.gif\" alt=\"\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/first-question/first-question.component.ts":
/*!************************************************************!*\
  !*** ./src/app/first-question/first-question.component.ts ***!
  \************************************************************/
/*! exports provided: FirstQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstQuestionComponent", function() { return FirstQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var FirstQuestionComponent = /** @class */ (function () {
    function FirstQuestionComponent() {
        this.reply = '';
        this.replyArray = 'Đúng vậy ^^ Em yêu anh nhất vũ trụ luôn đó'.split('');
        this.i = 0;
        this.gui = "GỬI";
    }
    FirstQuestionComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.btn-no').hover(function () {
                var x = Math.random() * 80;
                var y = Math.random() * 80;
                var top = x + '%';
                var left = y + '%';
                jquery__WEBPACK_IMPORTED_MODULE_2__('.btn-no').css({ "top": top, "left": left });
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('.btn-send').hover(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.btn-send').text("Gửi đi mà^^");
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('.btn-send').mouseleave(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.btn-send').text("GỬI");
            });
        });
    };
    FirstQuestionComponent.prototype.autoComplete = function () {
        if (this.i < this.replyArray.length) {
            this.reply += this.replyArray[this.i];
            this.i++;
        }
        else {
            this.reply = '';
            this.i = 0;
        }
    };
    FirstQuestionComponent.prototype.onSend = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.result').css("display", "block");
        jquery__WEBPACK_IMPORTED_MODULE_2__('.btn-send').text("Đáng yêu lắm^^");
        jquery__WEBPACK_IMPORTED_MODULE_2__('.btn-send').attr("disabled", true);
    };
    FirstQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first-question',
            template: __webpack_require__(/*! ./first-question.component.html */ "./src/app/first-question/first-question.component.html"),
            styles: [__webpack_require__(/*! ./first-question.component.css */ "./src/app/first-question/first-question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FirstQuestionComponent);
    return FirstQuestionComponent;
}());



/***/ }),

/***/ "./src/app/hello/hello.component.css":
/*!*******************************************!*\
  !*** ./src/app/hello/hello.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-hello {\n    position: absolute;\n    top: 250px;\n    border-radius: 10px;\n    padding: 20px;\n    box-shadow: 2px 4px 3px 1px grey;\n    background: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVsbG8vaGVsbG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaGVsbG8vaGVsbG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlbGxvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDRweCAzcHggMXB4IGdyZXk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/hello/hello.component.html":
/*!********************************************!*\
  !*** ./src/app/hello/hello.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-4\">\n            <div class=\"card-hello\">\n                <h4>Em à hãy trả lời câu hỏi của anh nhé. Trả lời cho thật lòng đó\n                    nghe chưa ^^\n                </h4>\n                <div class=\"text-center\">\n                    <a class=\"btn btn-primary\" routerLink=\"first-question\" role=\"button\">Ok. hihi ^^</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/hello/hello.component.ts":
/*!******************************************!*\
  !*** ./src/app/hello/hello.component.ts ***!
  \******************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    HelloComponent.prototype.ngOnInit = function () {
    };
    HelloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hello',
            template: __webpack_require__(/*! ./hello.component.html */ "./src/app/hello/hello.component.html"),
            styles: [__webpack_require__(/*! ./hello.component.css */ "./src/app/hello/hello.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelloComponent);
    return HelloComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nguyenducdai/Documents/forme/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map