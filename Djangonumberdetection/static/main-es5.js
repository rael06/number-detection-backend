function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n</body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n  <h1>Hand-written digits calculator</h1>\n  <div class=\"main\">\n    <div class=\"calculator\">\n      <app-canvas [canvasSize]=\"canvasSize\" (drawWritten)=\"saveDraw($event)\"\n                  [allow]=\"!loading && operation.operationString === undefined\"></app-canvas>\n      <app-calculator-buttons [loading]=\"loading\"\n                              [allowAll]=\"operation.number1.length > 0 && !operation.operationString\"\n                              (operatorEvent)=\"setOperator($event)\"\n                              (askResultEvent)=\"sendOperation()\"\n                              (clearEvent)=\"clearOperation()\">\n      </app-calculator-buttons>\n      <app-operation-details [resultScreenSize]=\"canvasSize\" [loading]=\"loading\" [operationDetails]=\"operation.operationString\"></app-operation-details>\n    </div>\n    <div class=\"blackboard\">\n      <div>\n        <app-blackboard [operation]=\"operation\"></app-blackboard>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/blackboard/blackboard.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/blackboard/blackboard.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsBlackboardBlackboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n  <div class=\"firstLine\">\n    <div>\n      <app-draw [dataURI]=\"signDictionaryService.get['empty']\" [imgSize]=\"imgSize\"></app-draw>\n    </div>\n    <div class=\"number\">\n      <app-digit *ngFor=\"let digit of operation.number1\" [digit]=\"digit\" [imgSize]=imgSize></app-digit>\n    </div>\n  </div>\n  <div class=\"secondLine\">\n    <div>\n      <app-draw [dataURI]=\"signDictionaryService.get[operation.operator]\"\n                [imgSize]=\"imgSize\"></app-draw>\n    </div>\n    <div class=\"number\">\n      <app-digit *ngFor=\"let digit of operation.number2\" [digit]=\"digit\"\n                 [imgSize]=imgSize></app-digit>\n    </div>\n  </div>\n  <div class=\"line\" [style.visibility]=\"result.length > 0 ? 'visible' : 'hidden'\" [style.height]=\"imgSize\"></div>\n  <div class=\"result\" [style.visibility]=\"result.length > 0 ? 'visible' : 'hidden'\">\n    <app-digit *ngFor=\"let digit of result\" [digit]=\"digit\" [imgSize]=imgSize></app-digit>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/calculator-buttons/calculator-buttons.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/calculator-buttons/calculator-buttons.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsCalculatorButtonsCalculatorButtonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n  <input class='btn btn-primary' type='button' value=\"C\" (click)=\"emitClearEvent()\" [disabled]=\"loading\">\n  <input class='btn btn-primary' type='button' value=\"+\" (click)=\"emitOperatorEvent('+')\" [disabled]=\"loading || !allowAll\">\n  <input class='btn btn-primary' type='button' value=\"-\" (click)=\"emitOperatorEvent('-')\" [disabled]=\"loading || !allowAll\">\n  <input class='btn btn-primary' type='button' value=\"x\" (click)=\"emitOperatorEvent('x')\" [disabled]=\"loading || !allowAll\">\n  <input class='btn btn-primary' type='button' value=\"/\" (click)=\"emitOperatorEvent('/')\" [disabled]=\"loading || !allowAll\">\n  <input class='btn btn-primary' type='button' value=\"=\" (click)=\"emitAskResultEvent()\" [disabled]=\" loading || !allowAll\">\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/canvas/canvas.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/canvas/canvas.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsCanvasCanvasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n  <canvas id=\"canvas\"></canvas>\n  <div class=\"buttons\">\n    <input class='btn btn-danger' type='button' value=\"Clear\" (click)=\"clear()\" [disabled]=\"!allow\">\n    <input class='btn btn-success' type='button' value=\"Write\" id='img' (click)=\"write()\" [disabled]=\"!allow\">\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/digit/digit.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/digit/digit.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsDigitDigitComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [class]=\"digit.prediction?.scores ? 'content scored' : 'content'\">\n  <img *ngIf=\"digit.data\" [src]=\"'data:image/png;base64,' + digit.data\" alt=\"\" [title]=\"scores\" [style.maxWidth]=\"imgSize\">\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/draw/draw.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/draw/draw.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsDrawDrawComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='content'>\n  <img *ngIf=\"dataURI\" [src]=\"'data:image/png;base64,' + dataURI\" alt=\"\" [style.maxWidth]=\"imgSize\">\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/operation-details/operation-details.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/operation-details/operation-details.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsOperationDetailsOperationDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\" [style.backgroundImage]=\"loading ? 'url(' + loadingImage + ')' : 'unset'\">\n  <p [style.maxWidth]=\"resultScreenSize\"\n     [style.visibility]=\"operationDetails || loading ? 'visible' : 'hidden'\">\n    {{loading ? '...loading...' : operationDetails ? operationDetails : '0'}}\n  </p>\n</div>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWVsL0RvY3VtZW50cy9jYW1wdXNpZC9udW1iZXItZGV0ZWN0aW9uL2Zyb250ZW5kL0NsaWVudEFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        pathMatch: 'full'
      }]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n  .content h1 {\n    margin: 20px auto;\n    font-family: \"Lucida Handwriting\", serif;\n    text-align: center; }\n  .content .main {\n    display: flex; }\n  .content .main .calculator {\n      display: flex;\n      flex-direction: column;\n      padding: 20px;\n      border: lightslategray 1px solid;\n      border-radius: 6px;\n      background: #c3d7de;\n      background: -webkit-gradient(left top, right bottom, color-stop(0%, #c3d7de), color-stop(42%, #c3d7de), color-stop(50%, #fcfcfc), color-stop(58%, #c3d7de), color-stop(100%, #c3d7de));\n      background: linear-gradient(135deg, #c3d7de 0%, #c3d7de 42%, #fcfcfc 50%, #c3d7de 58%, #c3d7de 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c3d7de', endColorstr='#c3d7de', GradientType=1 );\n      box-shadow: inset 0 0 2px 3px gainsboro, 1px 1px 2px 2px rgba(0, 0, 0, 0.75); }\n  .content .main .calculator app-canvas {\n        margin-bottom: 20px; }\n  .content .main .calculator app-calculator-buttons {\n        margin-bottom: 30px; }\n  .content .main .blackboard {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      background-color: black;\n      margin-left: 50px;\n      border-radius: 3px;\n      justify-content: space-between;\n      border-top: 20px solid #efa54d;\n      border-bottom: 20px solid #efa54d;\n      border-left: 20px solid #cd8e42;\n      border-right: 20px solid #cd8e42;\n      box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.75); }\n  @media screen and (max-width: 991px) {\n  .content > .main {\n    flex-direction: column;\n    align-items: center; }\n    .content > .main .blackboard {\n      margin-top: 40px;\n      margin-left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWVsL0RvY3VtZW50cy9jYW1wdXNpZC9udW1iZXItZGV0ZWN0aW9uL2Zyb250ZW5kL0NsaWVudEFwcC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQixFQUFBO0VBSnhCO0lBT0ksaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxrQkFBa0IsRUFBQTtFQVR0QjtJQWFJLGFBQWEsRUFBQTtFQWJqQjtNQWdCTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLGFBQWE7TUFDYixnQ0FBZ0M7TUFDaEMsa0JBQWtCO01BQ2xCLG1CQUErQjtNQUUvQixzTEFBa1A7TUFJbFAsb0dBQWdLO01BQ2hLLG9IQUFvSDtNQUdwSCw0RUFBbUYsRUFBQTtFQS9CekY7UUFrQ1EsbUJBQW1CLEVBQUE7RUFsQzNCO1FBc0NRLG1CQUFtQixFQUFBO0VBdEMzQjtNQTJDTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFdBQVc7TUFDWCx1QkFBdUI7TUFDdkIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQiw4QkFBOEI7TUFDOUIsOEJBQThCO01BQzlCLGlDQUFpQztNQUNqQywrQkFBK0I7TUFDL0IsZ0NBQWdDO01BR2hDLCtDQUE0QyxFQUFBO0VBS2xEO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CLEVBQUE7SUFGckI7TUFLSSxnQkFBZ0I7TUFDaEIsY0FBYyxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaDEge1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBIYW5kd3JpdGluZ1wiLCBzZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5jYWxjdWxhdG9yIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlcjogbGlnaHRzbGF0ZWdyYXkgMXB4IHNvbGlkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxOTUsMjE1LDIyMiwxKTtcbiAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgxOTUsMjE1LDIyMiwxKSAwJSwgcmdiYSgxOTUsMjE1LDIyMiwxKSA0MiUsIHJnYmEoMjUyLDI1MiwyNTIsMSkgNTAlLCByZ2JhKDE5NSwyMTUsMjIyLDEpIDU4JSwgcmdiYSgxOTUsMjE1LDIyMiwxKSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgxOTUsMjE1LDIyMiwxKSksIGNvbG9yLXN0b3AoNDIlLCByZ2JhKDE5NSwyMTUsMjIyLDEpKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEoMjUyLDI1MiwyNTIsMSkpLCBjb2xvci1zdG9wKDU4JSwgcmdiYSgxOTUsMjE1LDIyMiwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgxOTUsMjE1LDIyMiwxKSkpO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDE5NSwyMTUsMjIyLDEpIDAlLCByZ2JhKDE5NSwyMTUsMjIyLDEpIDQyJSwgcmdiYSgyNTIsMjUyLDI1MiwxKSA1MCUsIHJnYmEoMTk1LDIxNSwyMjIsMSkgNTglLCByZ2JhKDE5NSwyMTUsMjIyLDEpIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgxOTUsMjE1LDIyMiwxKSAwJSwgcmdiYSgxOTUsMjE1LDIyMiwxKSA0MiUsIHJnYmEoMjUyLDI1MiwyNTIsMSkgNTAlLCByZ2JhKDE5NSwyMTUsMjIyLDEpIDU4JSwgcmdiYSgxOTUsMjE1LDIyMiwxKSAxMDAlKTtcbiAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDE5NSwyMTUsMjIyLDEpIDAlLCByZ2JhKDE5NSwyMTUsMjIyLDEpIDQyJSwgcmdiYSgyNTIsMjUyLDI1MiwxKSA1MCUsIHJnYmEoMTk1LDIxNSwyMjIsMSkgNTglLCByZ2JhKDE5NSwyMTUsMjIyLDEpIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxOTUsMjE1LDIyMiwxKSAwJSwgcmdiYSgxOTUsMjE1LDIyMiwxKSA0MiUsIHJnYmEoMjUyLDI1MiwyNTIsMSkgNTAlLCByZ2JhKDE5NSwyMTUsMjIyLDEpIDU4JSwgcmdiYSgxOTUsMjE1LDIyMiwxKSAxMDAlKTtcbiAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjYzNkN2RlJywgZW5kQ29sb3JzdHI9JyNjM2Q3ZGUnLCBHcmFkaWVudFR5cGU9MSApO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IDNweCByZ2JhKDIyMCwyMjAsMjIwLDEpLCAxcHggMXB4IDJweCAycHggcmdiYSgwLDAsMCwwLjc1KTtcblxuICAgICAgYXBwLWNhbnZhcyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIGFwcC1jYWxjdWxhdG9yLWJ1dHRvbnMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ibGFja2JvYXJkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCAjZWZhNTRkO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCAjZWZhNTRkO1xuICAgICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgI2NkOGU0MjtcbiAgICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCAjY2Q4ZTQyO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xuICAuY29udGVudCA+IC5tYWluIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuYmxhY2tib2FyZCB7XG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/components/canvas/canvas.component */
    "./src/app/shared/components/canvas/canvas.component.ts");
    /* harmony import */


    var _shared_components_blackboard_blackboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/components/blackboard/blackboard.component */
    "./src/app/shared/components/blackboard/blackboard.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(cdRef) {
        _classCallCheck(this, HomeComponent);

        this.cdRef = cdRef;
        this.operation = {
          number1: [],
          number2: []
        };
        this.loading = false;
        this.digitIndex = 0;
        this.numberIndex = 0;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "clearOperation",
        value: function clearOperation() {
          this.reset();
          this.canvasComponent.clear();
        }
      }, {
        key: "onResize",
        value: function onResize() {
          this.defineCanvasSize();
          var blackboardElements = document.querySelectorAll("app-blackboard img");
          blackboardElements.forEach(function (i) {
            i.style.visibility = "hidden";
          });
          this.blackboardComponent.imgSize = "50%";
          this.blackboardComponent.resizeImages();
          setTimeout(function () {
            return blackboardElements.forEach(function (i) {
              i.style.visibility = "visible";
            });
          }, 0);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.defineCanvasSize();
          this.cdRef.detectChanges();
        }
      }, {
        key: "setOperator",
        value: function setOperator(value) {
          this.operation.operator = value;
          this.digitIndex = 0;
          this.numberIndex++;
          this.blackboardComponent.resizeImages();
        }
      }, {
        key: "sendOperation",
        value: function sendOperation() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var options;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.loading = true;
                    options = {
                      method: "post",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(this.operation)
                    };
                    _context.next = 4;
                    return fetch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api, options).then(function (res) {
                      return res.json();
                    })["catch"](function (err) {
                      throw new Error(err.statusText);
                    });

                  case 4:
                    this.operation = _context.sent;
                    this.loading = false;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "reset",
        value: function reset() {
          this.digitIndex = 0;
          this.numberIndex = 0;
          this.operation = {
            number1: [],
            number2: [],
            operator: undefined
          };
          this.blackboardComponent.imgSize = "50%";
        }
      }, {
        key: "saveDraw",
        value: function saveDraw(dataURI) {
          var draw = {
            numberIndex: this.numberIndex,
            digitIndex: this.digitIndex,
            name: this.numberIndex + "_" + this.digitIndex,
            data: dataURI
          };

          if (this.numberIndex === 0) {
            this.operation.number1.push(draw);
          } else {
            this.operation.number2.push(draw);
          }

          this.digitIndex++;
          this.blackboardComponent.resizeImages();
        }
      }, {
        key: "defineCanvasSize",
        value: function defineCanvasSize() {
          this.canvasSize = document.body.offsetWidth > 1200 ? 400 : document.body.offsetWidth < 400 ? 250 : 325;
          this.canvasComponent.canvas.setWidth(this.canvasSize);
          this.canvasComponent.canvas.setHeight(this.canvasSize);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_1__["CanvasComponent"], {
      "static": false
    }), __metadata("design:type", Object)], HomeComponent.prototype, "canvasComponent", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_blackboard_blackboard_component__WEBPACK_IMPORTED_MODULE_2__["BlackboardComponent"], {
      "static": false
    }), __metadata("design:type", Object)], HomeComponent.prototype, "blackboardComponent", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], HomeComponent.prototype, "onResize", null);

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: "app-home",
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }];

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      bootstrap: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/shared/components/blackboard/blackboard.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/blackboard/blackboard.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsBlackboardBlackboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  padding: 2vw;\n  display: flex;\n  flex-direction: column;\n  background: black;\n  color: white; }\n  .content .result {\n    display: flex;\n    justify-content: flex-end; }\n  .content .firstLine, .content .secondLine {\n    display: flex;\n    justify-content: space-between; }\n  .content .firstLine .number, .content .secondLine .number {\n      display: flex;\n      justify-content: flex-end; }\n  .content .line {\n    background-image: url(\"data:image/png;base64,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\");\n    background-size: contain; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWVsL0RvY3VtZW50cy9jYW1wdXNpZC9udW1iZXItZGV0ZWN0aW9uL2Zyb250ZW5kL0NsaWVudEFwcC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JsYWNrYm9hcmQvYmxhY2tib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7RUFMZDtJQVFJLGFBQWE7SUFDYix5QkFBeUIsRUFBQTtFQVQ3QjtJQWFJLGFBQWE7SUFDYiw4QkFBOEIsRUFBQTtFQWRsQztNQWlCTSxhQUFhO01BQ2IseUJBQXlCLEVBQUE7RUFsQi9CO0lBdUJJLCsyRUFBKzJFO0lBQy8yRSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JsYWNrYm9hcmQvYmxhY2tib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgcGFkZGluZzogMnZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuXG4gIC5yZXN1bHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gIC5maXJzdExpbmUsIC5zZWNvbmRMaW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5udW1iZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICB9XG5cbiAgLmxpbmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFZRUJRWUZCQVlHQlFZSEJ3WUlDaEFLQ2drSkNoUU9Ed3dRRnhRWUdCY1VGaFlhSFNVZkdoc2pIQllXSUN3Z0l5WW5LU29wR1I4dE1DMG9NQ1VvS1NqLzJ3QkRBUWNIQndvSUNoTUtDaE1vR2hZYUtDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2ovd0FBUkNBRXNBU3dEQVNJQUFoRUJBeEVCLzhRQUhRQUJBUUVBQVFVQkFBQUFBQUFBQUFBQUFBa0ZCZ0VDQXdRSENQL0VBREVRQVFBQkFnVUNCUU1EQXdVQUFBQUFBQUFGQVFJRUZsV1UwUU1IQmhFWFZwSWhNYkVTZ2FFVVVWTVRJaU5pa2YvRUFCUUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRC94QUFVRVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQURBTUJBQUlSQXhFQVB3RDhxQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEVnk1TjZOSmJXL2d5NU9hTkpiVy9nR1VOWExrNW8wbHRiK0RMazVvMGx0YitBWlExY3VUbWpTVzF2NE11VG1qU1cxdjRCbERWeTVPYU5KYlcvZ3k1T2FOSmJXL2dHVU5YTGs1bzBsdGIrRExrNW8wbHRiK0FaUTFjdVRtalNXMXY0TXVUbWpTVzF2NEJsRFZ5NU9hTkpiVy9neTVPYU5KYlcvZ0dVTnpCZUVmRVdOeEZuUXcwSEpYOVcvN1cvd0JOZlR6L0FQYU9SMmRuTzRWOXRMcmZDY2xXbGFlZFA5bE9RY0FIMEQwYTdoKzA1TDQwNVBScnVIN1RrdmpUa0h6OGZRUFJydUg3VGt2alRrOUd1NGZ0T1MrTk9RZlB4eit2WnZ1SFNsYTE4SnlYbFQvcFRseDZROEgrSTQ3RVhkREdRVWwwK3JiOTdmNmU2dmwrOUtBd1I1Y1IwT3RodXJYcDRqcGRUcGRTbjN0dnRyYlduN1ZlSUFBQUFBQUFBQUFBSGRaWmRmZlMyeTJ0MTFmcFNsS2VkYWc3UnFXZUhwcSsybDFrUkkzVzErMWFZYSt0UHc2NWNuTkdrdHJmd0NuNEFBQUFBQUFBQUFBQUFBQUFBQUFCWDYwK29BenNSQnhPSjZ0ZXBpSXZBZFhxVis5MStIc3VyWDk2MGVQTGNIbzBidGJPR3FBeXN0d2VqUnUxczRNdHdlalJ1MXM0YW9ES3kzQjZORzdXemd5M0I2Tkc3V3pocWdNckxjSG8wYnRiT0RMY0hvMGJ0Yk9HcUF5c3R3ZWpSdTFzNE10d2VqUnUxczRhb0RLeTNCNk5HN1d6Z3kzQjZORzdXemhxZ01yTGNIbzBidGJPSGRaNGVoYkw2WFdSRWRiZFQ2MHJURFdVclQrR21BNldXMjJXMHRzdHBiYlQ3VXBUeW82Z0JTdm5UenA5aE1DbmlPYnBUNlRNbHVyK1RNYzVyTWx1citRVS9Fd014em1zeVc2djVNeHptc3lXNnY1QlQ4VEF6SE9hekpicS9rekhPYXpKYnEva0ZQeE1ETWM1ck1sdXIrVE1jNXJNbHVyK1FVL0V3TXh6bXN5VzZ2NU14em1zeVc2djVCVDhUQXpIT2F6SmJxL2t6SE9hekpicS9rRlB4TURNYzVyTWx1citUTWM1ck1sdXIrUVUvZXRqTWZnOERiK3JHNHZENGUzKy9WNmxMS2Z6Vk1uTWM1ck1sdXIrWHJZeVVrTWRiK25HNDdGWWkzKzNWNjExOVA1cUNtZVpJUFdZM2RXY21aSVBXWTNkV2NwZ0FLZjVrZzlaamQxWnlaa2c5WmpkMVp5bUFBcVZnNUxBNDZsYTRMR1liRVVwL2g2dHQvNHE5cExiQnlXT3dOSzB3V054T0hwWC9GMWJyUHhWeUNHN2llTUlhbGFSdmlPUzZOSzE4Ni84MWJ2ejVncFNKMStzdmNQM1pKZktuQjZ5OXcvZGtsOHFjQW9vSjErc3ZjUDNaSmZLbkI2eTl3L2RrbDhxY0Fvb0oxK3N2Y1AzWkpmS25CNnk5dy9ka2w4cWNBb29KMStzdmNQM1pKZktuQjZ5OXcvZGtsOHFjQW9vSjErc3ZjUDNaSmZLbkI2eTl3L2RrbDhxY0Fvb0oxK3N2Y1AzWkpmS25CNnk5dy9ka2w4cWNBb29KMStzdmNQM1pKZktuQjZ5OXcvZGtsOHFjQW9vSnZTdmRIeHZLNGV2UXgvaWFTNnZTcjk3ZjlYOVA0OG1EbU9jMW1TM1YvSU1vQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFILzJRPT0nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/blackboard/blackboard.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/blackboard/blackboard.component.ts ***!
    \**********************************************************************/

  /*! exports provided: BlackboardComponent */

  /***/
  function srcAppSharedComponentsBlackboardBlackboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlackboardComponent", function () {
      return BlackboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_sign_dictionary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/sign-dictionary.service */
    "./src/app/shared/services/sign-dictionary.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var BlackboardComponent = /*#__PURE__*/function () {
      function BlackboardComponent(signDictionaryService) {
        _classCallCheck(this, BlackboardComponent);

        this.signDictionaryService = signDictionaryService;
        this.imgSize = '50%';
        this.result = [];
      }

      _createClass(BlackboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.checkOperationResult();
        }
      }, {
        key: "resizeImages",
        value: function resizeImages() {
          var _this = this;

          setTimeout(function () {
            var images = document.querySelectorAll('app-blackboard img');
            var imagesSizes = [];
            images.forEach(function (i) {
              imagesSizes.push(i.offsetWidth);
            });
            _this.imgSize = Math.min.apply(Math, imagesSizes) + 'px';
          }, 0);
        }
      }, {
        key: "checkOperationResult",
        value: function checkOperationResult() {
          if (this.operation.result || this.operation.result === 0) {
            var resultString = String(this.operation.result);

            for (var i = 0; i < resultString.length; i++) {
              this.result.push({
                digitIndex: i,
                data: this.signDictionaryService.get[String(resultString.charAt(i))]
              });
            }
          } else {
            this.result = [];
          }
        }
      }]);

      return BlackboardComponent;
    }();

    BlackboardComponent.ctorParameters = function () {
      return [{
        type: _services_sign_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["SignDictionaryService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], BlackboardComponent.prototype, "operation", void 0);

    BlackboardComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-blackboard',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./blackboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/blackboard/blackboard.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./blackboard.component.scss */
      "./src/app/shared/components/blackboard/blackboard.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_services_sign_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["SignDictionaryService"]])], BlackboardComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/calculator-buttons/calculator-buttons.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/shared/components/calculator-buttons/calculator-buttons.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsCalculatorButtonsCalculatorButtonsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  height: 100%;\n  display: flex;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWVsL0RvY3VtZW50cy9jYW1wdXNpZC9udW1iZXItZGV0ZWN0aW9uL2Zyb250ZW5kL0NsaWVudEFwcC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhbGN1bGF0b3ItYnV0dG9ucy9jYWxjdWxhdG9yLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FsY3VsYXRvci1idXR0b25zL2NhbGN1bGF0b3ItYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/calculator-buttons/calculator-buttons.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/components/calculator-buttons/calculator-buttons.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CalculatorButtonsComponent */

  /***/
  function srcAppSharedComponentsCalculatorButtonsCalculatorButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatorButtonsComponent", function () {
      return CalculatorButtonsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CalculatorButtonsComponent = /*#__PURE__*/function () {
      function CalculatorButtonsComponent() {
        _classCallCheck(this, CalculatorButtonsComponent);

        this.operatorEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.askResultEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CalculatorButtonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "emitOperatorEvent",
        value: function emitOperatorEvent(operator) {
          this.operatorEvent.emit(operator);
        }
      }, {
        key: "emitAskResultEvent",
        value: function emitAskResultEvent() {
          this.askResultEvent.emit();
        }
      }, {
        key: "emitClearEvent",
        value: function emitClearEvent() {
          this.clearEvent.emit();
        }
      }]);

      return CalculatorButtonsComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], CalculatorButtonsComponent.prototype, "operatorEvent", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], CalculatorButtonsComponent.prototype, "askResultEvent", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], CalculatorButtonsComponent.prototype, "clearEvent", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], CalculatorButtonsComponent.prototype, "allowAll", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], CalculatorButtonsComponent.prototype, "loading", void 0);

    CalculatorButtonsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-calculator-buttons',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./calculator-buttons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/calculator-buttons/calculator-buttons.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./calculator-buttons.component.scss */
      "./src/app/shared/components/calculator-buttons/calculator-buttons.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], CalculatorButtonsComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/canvas/canvas.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/canvas/canvas.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsCanvasCanvasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center; }\n  .content .buttons {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWVsL0RvY3VtZW50cy9jYW1wdXNpZC9udW1iZXItZGV0ZWN0aW9uL2Zyb250ZW5kL0NsaWVudEFwcC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhbnZhcy9jYW52YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTtFQUpyQjtJQU9JLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FudmFzL2NhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5idXR0b25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/canvas/canvas.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/canvas/canvas.component.ts ***!
    \**************************************************************/

  /*! exports provided: CanvasComponent */

  /***/
  function srcAppSharedComponentsCanvasCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasComponent", function () {
      return CanvasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! fabric */
    "./node_modules/fabric/dist/fabric.js");
    /* harmony import */


    var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_sign_dictionary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/sign-dictionary.service */
    "./src/app/shared/services/sign-dictionary.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CanvasComponent = /*#__PURE__*/function () {
      function CanvasComponent(signDictionaryService) {
        _classCallCheck(this, CanvasComponent);

        this.signDictionaryService = signDictionaryService;
        this.drawWritten = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CanvasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.canvas = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Canvas('canvas', {
            backgroundColor: 'black',
            isDrawingMode: true
          });
          this.canvas.freeDrawingBrush.color = 'white';
          this.canvas.freeDrawingBrush.width = 25;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.canvas) {
            this.canvas.isDrawingMode = this.allow;
          }
        }
      }, {
        key: "write",
        value: function write() {
          var dataURL = this.canvas.toDataURL({
            format: 'jpeg',
            quality: 0.8
          });
          var dataURI = dataURL.substring(23);

          if (dataURI !== this.signDictionaryService.get['empty']) {
            this.drawWritten.emit(dataURI);
            this.clear();
          } // else showmodal not empty canvas please

        }
      }, {
        key: "clear",
        value: function clear() {
          this.canvas.clear();
          this.canvas.backgroundColor = 'black';
        }
      }]);

      return CanvasComponent;
    }();

    CanvasComponent.ctorParameters = function () {
      return [{
        type: _services_sign_dictionary_service__WEBPACK_IMPORTED_MODULE_2__["SignDictionaryService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], CanvasComponent.prototype, "drawWritten", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], CanvasComponent.prototype, "allow", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], CanvasComponent.prototype, "canvasSize", void 0);

    CanvasComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-canvas',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./canvas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/canvas/canvas.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./canvas.component.scss */
      "./src/app/shared/components/canvas/canvas.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_services_sign_dictionary_service__WEBPACK_IMPORTED_MODULE_2__["SignDictionaryService"]])], CanvasComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/digit/digit.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/digit/digit.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsDigitDigitComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  display: flex; }\n  .content img {\n    width: 100%;\n    height: 100%; }\n  .scored {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWVsL0RvY3VtZW50cy9jYW1wdXNpZC9udW1iZXItZGV0ZWN0aW9uL2Zyb250ZW5kL0NsaWVudEFwcC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpZ2l0L2RpZ2l0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYSxFQUFBO0VBRGY7SUFJSSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBSWhCO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlnaXQvZGlnaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLnNjb3JlZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/digit/digit.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/digit/digit.component.ts ***!
    \************************************************************/

  /*! exports provided: DigitComponent */

  /***/
  function srcAppSharedComponentsDigitDigitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitComponent", function () {
      return DigitComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DigitComponent = /*#__PURE__*/function () {
      function DigitComponent(elementRef) {
        _classCallCheck(this, DigitComponent);

        this.elementRef = elementRef;
        this.scores = '';
      }

      _createClass(DigitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.digit.prediction) {
            this.scores = "Prediction : ".concat(this.digit.prediction.digit, "\nScores : \n");

            for (var i = 0; i < this.digit.prediction.scores.length; i++) {
              this.scores += "".concat(i, " : ").concat(this.digit.prediction.scores[i], " %\n");
            }
          }
        }
      }]);

      return DigitComponent;
    }();

    DigitComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], DigitComponent.prototype, "digit", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], DigitComponent.prototype, "imgSize", void 0);

    DigitComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-digit',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./digit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/digit/digit.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./digit.component.scss */
      "./src/app/shared/components/digit/digit.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])], DigitComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/draw/draw.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/draw/draw.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsDrawDrawComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RyYXcvZHJhdy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/components/draw/draw.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/components/draw/draw.component.ts ***!
    \**********************************************************/

  /*! exports provided: DrawComponent */

  /***/
  function srcAppSharedComponentsDrawDrawComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawComponent", function () {
      return DrawComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DrawComponent = /*#__PURE__*/function () {
      function DrawComponent() {
        _classCallCheck(this, DrawComponent);

        this.imgSize = '100%';
      }

      _createClass(DrawComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DrawComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], DrawComponent.prototype, "dataURI", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], DrawComponent.prototype, "imgSize", void 0);

    DrawComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-draw',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./draw.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/draw/draw.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./draw.component.scss */
      "./src/app/shared/components/draw/draw.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], DrawComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/operation-details/operation-details.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/components/operation-details/operation-details.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsOperationDetailsOperationDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: black;\n  border-radius: 6px;\n  color: white;\n  background-position: center;\n  box-shadow: inset 1px 1px 2px 2px rgba(255, 255, 255, 0.75); }\n  .content p {\n    font-family: \"Consolas\", serif;\n    text-align: center;\n    word-break: break-all;\n    font-size: 2em;\n    padding: 10px 10px;\n    margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWVsL0RvY3VtZW50cy9jYW1wdXNpZC9udW1iZXItZGV0ZWN0aW9uL2Zyb250ZW5kL0NsaWVudEFwcC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL29wZXJhdGlvbi1kZXRhaWxzL29wZXJhdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMkJBQTJCO0VBRzNCLDJEQUF3RCxFQUFBO0VBVjFEO0lBYUksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL29wZXJhdGlvbi1kZXRhaWxzL29wZXJhdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC43NSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4IDJweCByZ2JhKDI1NSwyNTUsMjU1LDAuNzUpO1xuXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbnNvbGFzXCIsIHNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/operation-details/operation-details.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/shared/components/operation-details/operation-details.component.ts ***!
    \************************************************************************************/

  /*! exports provided: OperationDetailsComponent */

  /***/
  function srcAppSharedComponentsOperationDetailsOperationDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationDetailsComponent", function () {
      return OperationDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OperationDetailsComponent = /*#__PURE__*/function () {
      function OperationDetailsComponent() {
        _classCallCheck(this, OperationDetailsComponent);

        this.operationDetails = '';
        this.loadingImage = '../../assets/load.gif';
      }

      _createClass(OperationDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OperationDetailsComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], OperationDetailsComponent.prototype, "operationDetails", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], OperationDetailsComponent.prototype, "loading", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], OperationDetailsComponent.prototype, "resultScreenSize", void 0);

    OperationDetailsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-operation-details',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./operation-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/operation-details/operation-details.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./operation-details.component.scss */
      "./src/app/shared/components/operation-details/operation-details.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], OperationDetailsComponent);
    /***/
  },

  /***/
  "./src/app/shared/services/sign-dictionary.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/sign-dictionary.service.ts ***!
    \************************************************************/

  /*! exports provided: SignDictionaryService */

  /***/
  function srcAppSharedServicesSignDictionaryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignDictionaryService", function () {
      return SignDictionaryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SignDictionaryService = function SignDictionaryService() {
      _classCallCheck(this, SignDictionaryService);

      this.get = {};
      this.get['empty'] = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAGQAZADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z';
      this.get['+'] = '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';
      this.get['-'] = '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';
      this.get['x'] = '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';
      this.get['/'] = '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';
      this.get['='] = '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';
      this.get['0'] = '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';
      this.get['1'] = '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';
      this.get['2'] = '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';
      this.get['3'] = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAEsASwDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBgkBAgUDBP/EAEkQAAEDAgMDBwgECwcFAAAAAAABAgMEBQYHEQgSIRMxQVFhcYEUFiIykZSh0UJVsbIYIzM3RFZydYKSkxUXJFJUYnM1dKLBwv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKWQmV0uZGIpEqnPhstFo6qlbzuVeZje1fgBHtns1yvVSkFpoaisl5t2GNXad/USTZtn3MK60zZm2qKla5NUbVTJG72F4sMYYs2F7fHRWK309HAxNPxbERXd686nsgUV/BozD/01t98T5D8GjMP/TW33xPkXqAFK7Nst4vq0X+0q620C68E31l19h6v4Jt8/WW2/wBB5b8AU/XZOvmi6Yltqr/wvMWvuzZju2rI6khpLhC1NUdDLo53c1S9IA1fXmw3ayVEkF2t1VSSRu3XJLGrURe/mPMNpNwttDcYljr6OnqWL9GWNHJ8SK8dbP2DMTRyy0lItpr3J6MtLwbr1q3mUChQJuxjs3YzsivktbIbxTJxRadd1/8AKpEt9w/d7BUcherdVUUvVNGrde5eZQPLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALz7IVvhpcoYKqPd5SsqppJNOfVrlYmvg1CjBaXY/zDoqKCowfdZmwySSrPRPeujXKvrM79ePiBa8A+NZVU9FTPqKueOCBiaukkcjWt71UD7AwSpzewBTTvhnxVbWyMXRyb6rp7EPn/fLl5+tlt/mX5AZ+CPpM58vGMV3nVb3adDXKqr8DG6raRy8p53xeW10u6um/HSq5q9y6gTKCK7Ln5l7dea9eSLroiVcSx6kjWq7267wNntddT1cSpqjoZEdw8AP3AAB0nlYiw9acSUDqO+W+nrad30ZWa6dy86HqgCueOdl6yXFz58K10lslVPyEv4yNV+1CAMc5L4zwg9zqq2PrKROKVFInKN07UTihsLCoioqKmqL0AarHNVjla5Fa5OCoqaKhwbAsx8kcJ41ZLM6kS3XNyLpVUqI3Vf9zeZSlWZeBLtgDEUlru8erV9KCdqehMzocnyAxIAAAAAAAAAAAAAAAAAAAAAAAAAADvHI+KRskT3Me1dWuauiovYp0AEqYez7x/Y6RlNDdmVMbE3W+VxJKqJ3mP42zOxZjSJIb7dZZKZF15CP0I9e5OcwsAAAAAAA9Ky3262SdJrRcKqjkTjrDIrfhzHmgCeMv9pPE9gYlNiBjb3SpzPkXdlb/F0+JPWCdoXBeI2Rx1tS60VjuCxVXq69jk4FDQBtJttyorpT8vbauCqh1034Xo5NfA/WaysKYwv+E6tKjD9zqaN3S1jvRd3t5ifcD7U1bTRx0+L7W2rROC1NKu47vVq8ALcAwXBWauEMYwxrartC2pd+jVC8nIi9WimdACOc8suoMw8Hy0jGtbdabWWilXod0tVepdNPYSMF4gatbpQVNruNRQ18Toaqnesckbk0VrkXRUPylkdsPAklvxBBi2jjTyOu3YajdT1ZUTgq96J7UUrcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHeOR8UjXxPcx7V1RzV0VF7FL0bLeP58Y4JfRXWoSa62xyROcvrPj09Fy9fSmvYUUJEyGxnJgrMa21bpFbQ1L0pqpuvBWOXRFXuXRfaBsQBwxyPY1zV1a5NUU5AwvOPDHndlverUxm/UOhWWBNOPKM9JNO1dNPE1xSxvilfHI1WvYqtci9CobUShu1LhCPC+Zk89JHydFdGeVsRE4I5V0en8yKviBDoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHKKqLqnBTgAbBdnTGT8ZZaUM9U/er6JfJKhdeKuanB3imiknlVth6smcmKqJV/wAOzkJm/tO3kX4NQtSAK4ba1mZPg+y3jmkpatade1JG6/8AwvtLHkFbZX5pIP3pD9yQCkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6Fis9wv1zht9opJausmXRkUbdVX5IB54LB2TZaxVW0rJbjcrfb5HJrybkdIqd+h6X4Jt8/WW2/0HgVqBZX8E2+frLbf6Dzyr/su4toKZ0ttr7fcnJx5Nmsar3agV/BLuGtnzHt5rJIqm2pbImLostW5ERf2UTnJIsmyfPyiLe8Rxozgu7Swrr2p6QFWjL8D5dYnxpWNhsdsmfGvrTyNVkTU61cpdDBuQ+CMMP5ZtvW4VPBUlrF393TqTmQlCmp4aWFsVNDHDE3mZG1GonggGBZJ5b0+W+FPIeUbUXCodytVOiaI52nMnYhISJonAAAQHtnVMceV9FTOciSy3KNzU60ax+v3kJ8KLbVGOvOrHzrbRy79stGsDNF4Pk+m728PACFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC7+ybgekseA4b/ADQtddLqnKcoqcWRa+i1O/n8SkBsL2dbvBd8n8OrTuarqWnSkkanO1zPR4+zUCSQAAAAAAAAAAAOsrEkjexVVEcipqi6KmoECbRWdUGFqGfD+Gqhkt+lRWTStXVKVqpx/i+wpVI90sjpJHK57lVXKvOqkzbQuUdfgi8TXejdNWWOrkVyTvXefE9eO69fsUhcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASfklmzX5a3SRqxrV2apVFqKbXRUX/O3qX7SMABsDsmfOX10pWTPvsVC5U1WOqarHIvUe7bc1MDXOo5ChxPbZZdNd3lN37dDW+ANn/nJY/rm2+9M+YTEdkVdEvNtVf8AumfM1gHKKqLqnBQNqEUsczEfC9kjF5nNXVDuaxLbim/WyZktBebhA9nq7s7tE8NdDPMO594/s0qK68Or4+mOrYj007OoC/4Kp4f2r3Nja2/4e3366K+kl04dejiTcL7QuBL7UMp5K6a3TOT9Lj3Wa9W8BL4PjR1UFbSx1NHNHPTyJvMkjdq1ydaKfYDysTWOixNYa60XWFJKSqYsbk6exU6lReJrizBwvU4NxfcrHWIu/Syq1jlT12Lxa5O9NDZkVg2zsGunobbiykjRVg/wlUqJx3V4scvxT2AVKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW32MsZOqLfcsK11RvPp1SopGvXjuLwc1OxF4+JZ01wZL3h1izSw3Wo5yN8sZC7RdNUk9Dj2elr4Gx9F1TVOYAYzmZY0xJgG+2pWtc+opXpGip9NE3m/FEMmC8U4garpWLHK+N3rNVWr3odDJMyLZHZsf4htsP5Klrpom9yPUxsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPpTTSU1RFPC5WyxOR7HJ0Ki6optItrlfbqVzl1VYmqq+CGrM2l2v/AKZSf8LPuoB+kAAa386vzt4v/elR99TCzNM6vzt4v/elR99TCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/XaKJ9yutFQxLpJVTshava5yIn2m0OijWKip4152RtavghruyKtH9t5tYapXNVWNqkncqdHJor0X2tQ2LqAAOHORrVc5dERNVUDXBnSuubeL1T60n++phZ6mKK+a6YkuldUqizVFTJI9U6VVynlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADlEVV0TioFj9i3DqVeKrvfZo9WUUCQROXm33rqviiIntLidJFezhgh2CsuqZlU1W3C4KlXUIv0VciaN8ERCVABhec1/lwzlhiG6U+nLx0ysj48znqjNfDe18DNCv22ZfvIMAUFpjkVstxqt5zU6WMTVU9rm+wClz3K97nOXVzl1VTqAAAAAAAAAAAAAAAAAAAAAAAACVcjcoq3Mm4SzzSOpLJTORs1QicXu/yM7etegCKgbBrRkVl7bqVsLsPwVaomiyVLle5fHU8+8bO+X1yk3222ejdpoiU06sb7AKEgt5d9lC1SJK61Ygq4nr6jJomua3vVOJG992ZMbUD3Lb30FxiRNd5ku4vsUCCwZreMrcb2eJ8tfhq4xxN53pHvJ8DH/Ny+fU1y91f8gPKB6vm5fPqa5e6v+Q83L59TXL3V/wAgPKB6vm5fPqa5e6v+R9IcL3+aVscVluTnuXRE8memvwA8YEhWjJnH10kjbBhusjZIvCWZEYxO9V5iWsLbKlfPE2TEt7jpXLprFSs31TxXgBWmlpp6udkFLDJNM9dGsjarnL4IWRyH2f6qtqKXEGNIpKamikbJBQOT05dOKK/qb2FgsucrcNYCo2MtNG2Wr+nWTtR0rl7+hOxDOwOGtRqIjU0ROCJ1HICgOkortV4zbifMR9BSSNfQWlvk7HNXVHSc719vDwLT5645hwLgGuq2yolyqWrT0bNeKvVPW/hTj7DXjLI+WV8kjlc96q5yr0qoHQAAAAAAAAAAAAAAAAAAAAAAAA2H7Pdrp7Xk/hptMjU8opW1L1Tpc/0l19prwLn7JmYlFdMJxYVrp2RXS36pA166ctFrqmnanNoBYUAAAAAAAAAAAAAAAAA6ySMijc+V7WMamqucuiInaoHYxrH+NLRgawTXS9ztY1qLyUKL6czuhrUI/wAytoDC2FIZqe2TJd7qiKjYoF1jY7/c7/0hTTHWNL3je8PuF+q3zPVV5OPX0Ik6mp0IB+7NLH90zCxJLc7m7chb6NPTtX0YWdCJ29amGgAAAAAAAAAAAAAAAAAAAAAAAAAD70dVUUVVHU0c0kFRGu8ySNytc1exUPgAJowttHY4srGxVk9PdYWpppUs9L+ZCSLNtY0/JNS84blSXpWlmTd/8ip4Avph3aIwDd26VFwkt0iaapVRqie1CQrXjHDl1iZJb75bpmv9XSdqKvgq6msk7Me5j0cxytcnFFRdFQDaixzXtRzHI5q8youqHJq/ZiG9MajWXe4tanMiVL0T7Tnzjvn1zcven/MDZ+DWB5x3z65uXvT/AJjzjvn1zcven/MDZ+F4JxNYHnHfPrm5e9P+YXEd7VON5uXvT/mBswqb1a6V+7U3Kihd1STsavxU8LEOYuEsP0b6i5X6gaxqa7scqSOd2IidJrdqaqoqn71TPLM7rkerl+J8QLe4y2qLZTxcnhO1y1c2v5Wr/FsRO5OJBOYGcmL8bMdBX1601Av6LS+g1f2l51I4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==';
      this.get['4'] = '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';
      this.get['5'] = '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';
      this.get['6'] = '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';
      this.get['7'] = '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';
      this.get['8'] = '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';
      this.get['9'] = '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';
      this.get['.'] = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAEsASwDASIAAhEBAxEB/8QAGwABAAICAwAAAAAAAAAAAAAAAAYIBwkCAwX/xAAwEAEAAgIBAwAHBwUBAAAAAAAAAQIDBAUGBxEIEiEiMUFRFGFxgZGhsRMVFyOywf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM1ej12cnuDtZOU5m2TDwGtf1JinstsX+dYn5RHzlcPg+geleE1Ka/HcDx+PHWPHvYa3mfxmfLxOwGhg4/s/wBMU16xWMupTPfxHxvf3p/eWQgeNsdK9P7GK2PNwnG2pb2TH2akf+ME95/R247ktHNynQ+CulyOOJvfSif9eaPpX6WWPAasNrXy6uxkwbOO2LNjtNb0tHiazHxiYdSz3pkdD6mhsaHVfH4a4rbV519uKx4i1/HmtvxmPMfkrCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlPa7gKdUdweC4bNHrYdrZiMkfWkRNrR+lZRZP8AsLyGHi+7/S+1s2iuKNqaTM/W9LUj97QDYfpauHS1MOtq464sGGkUpSseIrEeyIdwAAAwV6ZMR/iTDPj2/wBzw/8AGRSBcv00+YwYOhuK4ibx9p2tyM8U+cVpWY8/rZTQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzxZL4ctMmK00yUtFq2ifExMfCXABfvsN3W47rnpvV1dvZx4ef1qRjz4L28Tk8ez16/WJZZasdXZz6memfVzZMOak+a3x2mto/OE01O7fXuphri1+qeSpjj4R68T/MA2NRHhj/ALjd2el+hdTJPIb1Njf9WZx6eC0WyWn7/p+ake93Y673sFsO11RyWTHaPEx/U8fxCF582XYy2y58l8mW0+bXvaZmZ++ZBJ+5XXHJ9fdT5+X5W3jz7mHDWfdw0j4VhFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==';
      this.get['_'] = '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';
    };

    SignDictionaryService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [])], SignDictionaryService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/canvas/canvas.component */
    "./src/app/shared/components/canvas/canvas.component.ts");
    /* harmony import */


    var _components_calculator_buttons_calculator_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/calculator-buttons/calculator-buttons.component */
    "./src/app/shared/components/calculator-buttons/calculator-buttons.component.ts");
    /* harmony import */


    var _components_blackboard_blackboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/blackboard/blackboard.component */
    "./src/app/shared/components/blackboard/blackboard.component.ts");
    /* harmony import */


    var _components_digit_digit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/digit/digit.component */
    "./src/app/shared/components/digit/digit.component.ts");
    /* harmony import */


    var _components_operation_details_operation_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/operation-details/operation-details.component */
    "./src/app/shared/components/operation-details/operation-details.component.ts");
    /* harmony import */


    var _components_draw_draw_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/draw/draw.component */
    "./src/app/shared/components/draw/draw.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_2__["CanvasComponent"], _components_calculator_buttons_calculator_buttons_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorButtonsComponent"], _components_blackboard_blackboard_component__WEBPACK_IMPORTED_MODULE_4__["BlackboardComponent"], _components_digit_digit_component__WEBPACK_IMPORTED_MODULE_5__["DigitComponent"], _components_operation_details_operation_details_component__WEBPACK_IMPORTED_MODULE_6__["OperationDetailsComponent"], _components_draw_draw_component__WEBPACK_IMPORTED_MODULE_7__["DrawComponent"]],
      exports: [_components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_2__["CanvasComponent"], _components_calculator_buttons_calculator_buttons_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorButtonsComponent"], _components_blackboard_blackboard_component__WEBPACK_IMPORTED_MODULE_4__["BlackboardComponent"], _components_operation_details_operation_details_component__WEBPACK_IMPORTED_MODULE_6__["OperationDetailsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false,
      // api: 'https://localhost:44316/api/Operation'
      api: "http://127.0.0.1:8000/api/getOperationResults/"
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/rael/Documents/campusid/number-detection/frontend/ClientApp/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!***********************!*\
    !*** jsdom (ignored) ***!
    \***********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!********************************************************!*\
    !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!***************************************!*\
    !*** jsdom/lib/jsdom/utils (ignored) ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map