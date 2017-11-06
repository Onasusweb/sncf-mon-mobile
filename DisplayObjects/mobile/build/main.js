webpackJsonp([0],{

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX

    Comments.

    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_PageImport*/

/*End_c8o_PageImport*/
var VideoPage = (function (_super) {
    __extends(VideoPage, _super);
    /*End_c8o_PageDeclaration*/
    function VideoPage(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        /*Begin_c8o_PageDeclaration*/
        _this.url = "";
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        /*Begin_c8o_PageConstructor*/
        _this.url = _this.navParams;
        _this.viewCtrl = _this.getInstance(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"]);
        return _this;
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    /*End_c8o_PageFunction*/
    /**
     * Function CustomAction
     *
     *
     * @param event , the event received
     */
    VideoPage.prototype.CTS1507647827143 = function (event) {
        /*Begin_c8o_function:CTS1507647827143*/
        this.viewCtrl.dismiss();
        /*End_c8o_function:CTS1507647827143*/
    };
    return VideoPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
VideoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-videopage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\VideoPage\videopage.html"*/'<ion-header class="class1507646011890">\n\n<ion-navbar class="class1507646011906" color="sncf">\n\n<ion-title class="class1507646011920">\n\n<ion-icon class="class1507647723213" name="arrow-back" item-start (click)="CTS1507647827143($event)">\n\n</ion-icon>\n\n<div class="class1507648079647" text-center>\n\n</div>\n\n</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1507641704252" padding>\n\n<video class="class1507641710168" [src]="url" width="100%" controls autoplay height="100%">\n\n</video>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\VideoPage\videopage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
], VideoPage);

//# sourceMappingURL=videopage.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionBeans; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionBeans = (function () {
    function ActionBeans() {
    }
    return ActionBeans;
}());
ActionBeans = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ActionBeans);

//# sourceMappingURL=actionbeans.service.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX

    Comments.

    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/
var TabsPage = (function (_super) {
    __extends(TabsPage, _super);
    /*End_c8o_PageDeclaration*/
    function TabsPage(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        /*Begin_c8o_PageConstructor*/
        _this.dataParent = _this.navParams.data;
        return _this;
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    /*End_c8o_PageFunction*/
    TabsPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        this.call('fs://monmob.get#doc', { docid: 'hierarchy' });
    };
    return TabsPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabspage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\TabsPage\tabspage.html"*/'<ion-tabs class="class1505293198171" color="light" color="sncf">\n\n<ion-tab class="class1505293199779" tabIcon="paper" tabTitle="News" [root]="router.pagesKeyValue[\'NewsPage\']">\n\n</ion-tab>\n\n<ion-tab class="class1505293227562" tabIcon="document" tabTitle="Documents" [root]="router.pagesKeyValue[\'DocumentsPage\']" [rootParams]="navParams.data">\n\n</ion-tab>\n\n<ion-tab class="class1505293243810" tabIcon="hand" tabTitle="Astuces" [root]="router.pagesKeyValue[\'AstucesPage\']">\n\n</ion-tab>\n\n<ion-tab class="class1505293245626" tabIcon="stats" tabTitle="Sondages" [root]="router.pagesKeyValue[\'SondagesPage\']">\n\n</ion-tab>\n\n<ion-tab class="class1505949595963" tabIcon="menu" tabTitle="Plus" [root]="router.pagesKeyValue[\'PlusPage\']">\n\n</ion-tab>\n\n</ion-tabs>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\TabsPage\tabspage.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]) === "function" && _g || Object])
], TabsPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=tabspage.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX

    Comments.

    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/
var NewsPage = (function (_super) {
    __extends(NewsPage, _super);
    /*Begin_c8o_PageDeclaration*/
    /*End_c8o_PageDeclaration*/
    function NewsPage(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        return _this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    /*End_c8o_PageFunction*/
    NewsPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        this.call('fs://monmob.view#news1', { ddoc: 'news', view: 'all', __live: 'allnews', descending: true });
    };
    return NewsPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-newspage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\NewsPage\newspage.html"*/'<ion-header class="class1491634212350">\n\n<ion-navbar class="class1491634231108" color="sncf">\n\n<ion-title class="class1491634265317">\n\nNews\n\n</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1489674805352">\n\n<ion-list class="class1505295845438">\n\n<ng-container class="class1505295874965" *ngFor="let item1505295874965 of listen([\'fs://monmob.view#news1\'])?.rows;">\n\n<ng-container class="class1505825742892" *ngIf="item1505295874965?.value?.noAttachments !=\'true\'">\n\n<button class="class1507625316601" ion-item (click)="call(\'fs://monmob.get#getDetailsNews\', {docid: item1505295874965?.id})">\n\n<ion-thumbnail class="class1507625357775" item-left>\n\n<img class="class1507625357791" width="" [src]="getAttachmentUrl(item1505295874965?.id, \'img.png\', \'assets/images/placeholder.png\', \'monmob\')" height=""/>\n\n</ion-thumbnail>\n\n<div class="class1507625357806">\n\n<h3 class="class1507625357824">\n\n{{item1505295874965?.value?.dateFr}}\n\n</h3>\n\n<h3 class="class1507625357883">\n\n{{item1505295874965?.value?.nomCategorie}}\n\n</h3>\n\n</div>\n\n<div class="class1507625357944">\n\n<h2 class="class1507625357960" ion-text>\n\n<div class="class1507625357977" text-capitalize text-wrap>\n\n{{item1505295874965?.value?.titre}}\n\n</div>\n\n</h2>\n\n</div>\n\n<div class="class1507625358078" text-wrap>\n\n<p class="class1507625358097">\n\n{{item1505295874965?.value?.abstract}}\n\n</p>\n\n</div>\n\n</button>\n\n</ng-container>\n\n<ng-container class="class1505815363443" *ngIf="item1505295874965?.value?.noAttachments==\'true\'">\n\n<button class="class1507625346552" ion-item (click)="call(\'fs://monmob.get#getDetailsNews\', {docid: item1505295874965?.id})">\n\n<div class="class1507625405008">\n\n<h3 class="class1507625405023">\n\n{{item1505295874965?.value?.dateFr}}\n\n</h3>\n\n<h3 class="class1507625405078">\n\n{{item1505295874965?.value?.nomCategorie}}\n\n</h3>\n\n</div>\n\n<div class="class1507625405136">\n\n<h2 class="class1507625405154" ion-text>\n\n<div class="class1507625405173" text-wrap>\n\n{{item1505295874965?.value?.titre}}\n\n</div>\n\n</h2>\n\n</div>\n\n<div class="class1507625405236" text-wrap>\n\n<p class="class1507625405252">\n\n{{item1505295874965?.value?.abstract}}\n\n</p>\n\n</div>\n\n</button>\n\n</ng-container>\n\n</ng-container>\n\n</ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="class1491634242460">\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\NewsPage\newspage.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]) === "function" && _g || Object])
], NewsPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=newspage.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX

    Comments.

    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/
var ProgressPage = (function (_super) {
    __extends(ProgressPage, _super);
    /*End_c8o_PageDeclaration*/
    function ProgressPage(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        return _this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    /*End_c8o_PageFunction*/
    ProgressPage.prototype.ionViewDidEnter = function () {
        _super.prototype.ionViewDidEnter.call(this);
        this.CTS1505814542210('ionViewDidEnter');
    };
    ProgressPage.prototype.ionViewWillLeave = function () {
        _super.prototype.ionViewWillLeave.call(this);
        this.CTS1505815071796('ionViewWillLeave');
    };
    /**
     * Function Progress
     *
     *
     * @param event , the event received
     */
    ProgressPage.prototype.CTS1505814542210 = function (event) {
        /*Begin_c8o_function:CTS1505814542210*/
        //Get a loader instance
        this.loading = this.getInstance(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]).create({
            content: 'Synchronisation' // + this.router?.sharedObject?.current + ' / ' + this.router?.sharedObject?.total
        });
        this.loading.present();
        /*End_c8o_function:CTS1505814542210*/
    };
    /**
     * Function CloseProgress
     *
     *
     * @param event , the event received
     */
    ProgressPage.prototype.CTS1505815071796 = function (event) {
        /*Begin_c8o_function:CTS1505815071796*/
        this.loading.dismiss();
        /*End_c8o_function:CTS1505815071796*/
    };
    return ProgressPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
ProgressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-progresspage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\ProgressPage\progresspage.html"*/'<ion-content class="class1505814420310" padding>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\ProgressPage\progresspage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
], ProgressPage);

//# sourceMappingURL=progresspage.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(447);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*End_c8o_PageImport*/
var DetailsNewsPage = (function (_super) {
    __extends(DetailsNewsPage, _super);
    /*End_c8o_PageDeclaration*/
    function DetailsNewsPage(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        /*Begin_c8o_PageConstructor*/
        _this.socialSharing = _this.getInstance(__WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]);
        return _this;
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    DetailsNewsPage.prototype.openSocial = function (network, fab) {
        var loading = this.loadingCtrl.create({
            content: network + " indisponible en mode navigateur",
            duration: 3000
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    /*End_c8o_PageFunction*/
    /**
     * Function openTwitter
     *
     *
     * @param event , the event received
     * @param label ,
     * @param container ,
     */
    DetailsNewsPage.prototype.CTS1505944628324 = function (event, label, container) {
        /*Begin_c8o_function:CTS1505944628324*/
        /*Begin_c8o_function:CTS1505944628324*/
        var _this = this;
        if (window["cordova"] == undefined) {
            this.openSocial(label, container);
        }
        else {
            var loading_1 = this.loadingCtrl.create({});
            loading_1.present();
            this.socialSharing.shareViaTwitter(this.listen(['fs://monmob.get#getDetailsNews']).description, null, null).then(function () {
                _this.c8o.log.info("news shared via Twitter");
                container.close();
                loading_1.dismiss();
            }).catch(function () {
                // Error!
                container.close();
                loading_1.dismiss();
                _this.openSocial(label, container);
                _this.c8o.log.error('error sharing news via Twitter');
            });
        }
        /*End_c8o_function:CTS1505944628324*/
    };
    /**
     * Function openFacebook
     *
     *
     * @param event , the event received
     * @param label ,
     * @param container ,
     */
    DetailsNewsPage.prototype.CTS1505944628411 = function (event, label, container) {
        var _this = this;
        /*Begin_c8o_function:CTS1505944628411*/
        /*Begin_c8o_function:CTS1505944628411*/
        if (window["cordova"] == undefined) {
            this.openSocial(label, container);
        }
        else {
            var loading_2 = this.loadingCtrl.create({});
            loading_2.present();
            this.socialSharing.shareViaFacebook(this.listen(['fs://monmob.get#getDetailsNews']).description, null, null).then(function () {
                _this.c8o.log.info("news shared via Facebook");
                container.close();
                loading_2.dismiss();
            }).catch(function () {
                // Error!
                container.close();
                loading_2.dismiss();
                _this.openSocial(label, container);
                _this.c8o.log.info('error sharing via Facebook');
            });
        }
        this.tick();
        /*End_c8o_function:CTS1505944628411*/
    };
    /**
     * Function openEmail
     *
     *
     * @param event , the event received
     * @param label ,
     * @param container ,
     */
    DetailsNewsPage.prototype.CTS1505945771559 = function (event, label, container) {
        var _this = this;
        /*Begin_c8o_function:CTS1505945771559*/
        /*Begin_c8o_function:CTS1505945771559*/
        if (window["cordova"] == undefined) {
            this.openSocial(label, container);
        }
        else {
            var loading_3 = this.loadingCtrl.create({});
            loading_3.present();
            this.socialSharing.canShareViaEmail().then(function () {
                // Sharing via email is possible
                _this.socialSharing.shareViaEmail(_this.listen(['fs://monmob.get#getDetailsNews']).description, _this.listen(['fs://monmob.get#getDetailsNews']).titre, ['']).then(function () {
                    // Success!
                    _this.c8o.log.info("news shared via Email");
                    container.close();
                    loading_3.dismiss();
                }).catch(function () {
                    // Error!
                    container.close();
                    loading_3.dismiss();
                    _this.c8o.log.info('error sharing via Email');
                });
            }).catch(function () {
                _this.c8o.log.info('error sharing via Email not possible');
                container.close();
                loading_3.dismiss();
                // Sharing via email is not possible
            });
        }
        this.tick();
        /*End_c8o_function:CTS1505945771559*/
    };
    return DetailsNewsPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
DetailsNewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detailsnewspage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\DetailsNewsPage\detailsnewspage.html"*/'<ion-header class="class1505827505455">\n\n<ion-navbar class="class1505827505467" color="sncf">\n\n<ion-title class="class1505827505476">\n\nNews\n\n</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1505827505537">\n\n<ng-container class="class1505830120607" *ngIf="listen([\'fs://monmob.get#getDetailsNews\'])?.noAttachments != \'true\'">\n\n<img class="class1505827505546" width="" [src]="this.getAttachmentUrl(listen([\'fs://monmob.get#getDetailsNews\'])?._id, \'img.png\', \'\', \'monmob\')" height=""/>\n\n</ng-container>\n\n<div class="class1505829729930" text-center>\n\n<h3 class="class1505827505564">\n\n{{listen([\'fs://monmob.get#getDetailsNews\'])?.titre}}\n\n</h3>\n\n</div>\n\n<h3 class="class1505828496787">\n\n{{listen([\'fs://monmob.get#getDetailsNews\'])?.dateFr}}\n\n</h3>\n\n<h3 class="class1505828496827">\n\n{{listen([\'fs://monmob.get#getDetailsNews\'])?.nomCategorie}}\n\n</h3>\n\n<hr class="class1505829918646"/>\n\n<div class="class1505828407515" padding>\n\n<span class="class1505827505636" [innerHTML]="listen([\'fs://monmob.get#getDetailsNews\'])?.description">\n\n</span>\n\n</div>\n\n<ion-fab class="class1505944628053" bottom right #fab>\n\n<button class="class1505944628075" ion-fab color="sncf">\n\n<ion-icon class="class1505944628087" name="share">\n\n</ion-icon>\n\n</button>\n\n<ion-fab-list class="class1505944628098" side="top">\n\n<button class="class1505944628306" color="twitter" ion-fab (click)="CTS1505944628324($event, \'Twitter\', fab)">\n\n<ion-icon class="class1505944628384" name="logo-twitter">\n\n</ion-icon>\n\n</button>\n\n<button class="class1505944628395" color="facebook" ion-fab (click)="CTS1505944628411($event, \'Facebook\', fab)">\n\n<ion-icon class="class1505944628474" name="logo-facebook">\n\n</ion-icon>\n\n</button>\n\n<button class="class1505945771527" color="facebook" ion-fab (click)="CTS1505945771559($event, \'Email\', fab)">\n\n<ion-icon class="class1505945771654" name="mail">\n\n</ion-icon>\n\n</button>\n\n</ion-fab-list>\n\n</ion-fab>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\DetailsNewsPage\detailsnewspage.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]) === "function" && _g || Object])
], DetailsNewsPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=detailsnewspage.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__VideoPage_videopage__ = __webpack_require__(171);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX

    Comments.

    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_PageImport*/









/*End_c8o_PageImport*/
var DocumentsPage = DocumentsPage_1 = (function (_super) {
    __extends(DocumentsPage, _super);
    /*End_c8o_PageDeclaration*/
    function DocumentsPage(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        _this.storageDirectory = '';
        _this.array = [];
        _this.searchbar = '';
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        /*Begin_c8o_PageConstructor*/
        _this.platform = _this.getInstance(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"]);
        _this.file = _this.getInstance(__WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]);
        _this.transfer = _this.getInstance(__WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */]);
        _this.fileOpener = _this.getInstance(__WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */]);
        _this.streamingMedia = _this.getInstance(__WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__["a" /* StreamingMedia */]);
        _this.toastCtrl = _this.getInstance(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]);
        _this.browser = _this.getInstance(__WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
        _this.modalCtrl = _this.getInstance(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"]);
        if (window["cordova"] != undefined) {
            if (_this.platform.is('ios')) {
                _this.storageDirectory = window['cordova'].file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = window['cordova'].file.dataDirectory;
            }
        }
        return _this;
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    DocumentsPage.prototype.download = function (url, name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.platform.ready().then(function () {
                var fileTransfer = _this.transfer.create();
                _this.c8o.log.error("preparing to download");
                fileTransfer.download(url, _this.storageDirectory + name)
                    .then(function (entry) {
                    _this.c8o.log.info("download ok");
                    resolve(true);
                }, function (error) {
                    _this.c8o.log.error("download ko", error);
                    resolve(false);
                }).catch(function (e) {
                    _this.c8o.log.error("download ko", e);
                    resolve(false);
                });
            });
        });
    };
    DocumentsPage.prototype.checkforfiles = function (name) {
        var _this = this;
        return new Promise(function (resolve) {
            var present = false;
            _this.file.checkFile(_this.storageDirectory, name)
                .then(function (prst) {
                present = prst;
                resolve(present);
            })
                .catch(function (err) {
                _this.c8o.log.error("error from checkforfiles", err);
                present = false;
                resolve(present);
            });
        });
    };
    DocumentsPage.prototype.openPDF = function (name) {
        var _this = this;
        this.fileOpener.open(this.storageDirectory + name, 'application/pdf')
            .then(function () { return _this.loading.dismiss(); })
            .catch(function (e) {
            _this.loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: "Erreur pendant l'ouverture du fichier",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.c8o.log.error('Error openening pdf file', e);
        });
    };
    DocumentsPage.prototype.openVideo = function (name, isCordova) {
        var path;
        if (isCordova) {
            path = this.storageDirectory + name;
        }
        else {
            path = name;
        }
        this.loading.dismiss();
        var mod = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__VideoPage_videopage__["a" /* VideoPage */], { navParams: path });
        mod.present();
    };
    DocumentsPage.prototype.search = function (ev) {
        this.array = [];
        var val = ev.target.value.toLowerCase();
        for (var _i = 0, _a = this.listen(['fs://monmob.get#doc']).array; _i < _a.length; _i++) {
            var element = _a[_i];
            if ((element.name.toLowerCase()).indexOf(val) != -1) {
                this.array.push(element);
            }
            if (element.children != undefined) {
                this.searchchild(val, element.children);
            }
        }
    };
    DocumentsPage.prototype.searchchild = function (val, arr) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var element = arr_1[_i];
            if ((element.name.toLowerCase()).indexOf(val) != -1) {
                this.array.push(element);
                if (element.children != undefined) {
                    this.searchchild(val, element.children);
                }
            }
        }
    };
    /*End_c8o_PageFunction*/
    DocumentsPage.prototype.ionViewWillEnter = function () {
        _super.prototype.ionViewWillEnter.call(this);
        this.call('fs://monmob.get#doc', { docid: 'hierarchy' });
    };
    /**
     * Function open
     *
     *
     * @param event , the event received
     * @param url ,
     * @param name ,
     */
    DocumentsPage.prototype.CTS1507625527483 = function (event, url, name) {
        var _this = this;
        /*Begin_c8o_function:CTS1507625527483*/
        //create a loading 
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        var isPDF;
        //check for cordova avaibility
        var isCordova = window["cordova"] != undefined;
        //Encode and prepare url for siteClipper
        url = encodeURI(url);
        //
        var prefix = this.routerProvider.sharedObject.prefix_site_clipper;
        var startIndx = url.indexOf("monmobile");
        url = url.substring(startIndx);
        url = prefix + url;
        //check type of file
        if (url.indexOf(".mp4") != -1) {
            name += ".mp4";
            isPDF = false;
        }
        else {
            isPDF = true;
            name += ".pdf";
        }
        //if file is pdf and we are in browser mode then we display a toast
        if (!isCordova) {
            if (isPDF) {
                var toast = this.toastCtrl.create({
                    message: "Fonctionnalité non disponible en mode navigateur",
                    duration: 3000,
                    position: 'bottom'
                });
                this.loading.dismiss();
                toast.present();
            }
            else {
                this.openVideo(url, isCordova);
            }
        }
        else {
            //check if file exists
            this.checkforfiles(name)
                .then(function (present) {
                if (present) {
                    if (isPDF) {
                        _this.openPDF(name);
                    }
                    else {
                        _this.openVideo(name, isCordova);
                    }
                }
                else {
                    _this.c8o.callJson(".Login")
                        .then(function (response, parameters) {
                        _this.c8o.log.info('login => logged');
                        _this.download(url, name)
                            .then(function (arg) {
                            if (arg) {
                                if (isPDF) {
                                    _this.openPDF(name);
                                }
                                else {
                                    _this.openVideo(name, isCordova);
                                }
                            }
                            else {
                                _this.loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: "Réseau non disponible",
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                        })
                            .catch(function (error) {
                            var toast = _this.toastCtrl.create({
                                message: "Erreur pendant le téléchargement du fichier",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            _this.loading.dismiss();
                            _this.c8o.log.error("error during download", error);
                        });
                        return null;
                    }).fail(function (resp) {
                        var toast = _this.toastCtrl.create({
                            message: "Réseau non disponible",
                            duration: 3000,
                            position: 'bottom'
                        });
                        _this.loading.dismiss();
                        toast.present();
                    });
                }
            });
        }
        //---function:CTS1505919816590---	/*End_c8o_function:CTS1507625527483*/
    };
    /**
     * Function openchildren
     *
     *
     * @param event , the event received
     * @param children ,
     * @param path ,
     * @param types ,
     */
    DocumentsPage.prototype.CTS1507625579944 = function (event, children, path, types) {
        /*Begin_c8o_function:CTS1507625579944*/
        this.searchbar = '';
        switch (types) {
            case "file": {
                //this.routerProvider.push("DocumentsPage", {navparams:, null)
                break;
            }
            case "dir": {
                //statements; 
                this.routerProvider.push(DocumentsPage_1, { navParams: children }, null);
                break;
            }
        }
        /*End_c8o_function:CTS1507625579944*/
    };
    /**
     * Function openchildren
     *
     *
     * @param event , the event received
     * @param children ,
     * @param path ,
     * @param types ,
     */
    DocumentsPage.prototype.CTS1507625621540 = function (event, children, path, types) {
        /*Begin_c8o_function:CTS1507625621540*/
        switch (types) {
            case "file": {
                //this.routerProvider.push("DocumentsPage", {navparams:, null)
                break;
            }
            case "dir": {
                //statements; 
                this.routerProvider.push(DocumentsPage_1, { navParams: children }, null);
                break;
            }
        }
        /*End_c8o_function:CTS1507625621540*/
    };
    /**
     * Function open2
     *
     *
     * @param event , the event received
     * @param url ,
     * @param name ,
     */
    DocumentsPage.prototype.CTS1507625657834 = function (event, url, name) {
        var _this = this;
        /*Begin_c8o_function:CTS1507625657834*/
        //create a loading 
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        var isPDF;
        //check for cordova avaibility
        var isCordova = window["cordova"] != undefined;
        //Encode and prepare url for siteClipper
        url = encodeURI(url);
        //
        var prefix = this.routerProvider.sharedObject.prefix_site_clipper;
        var startIndx = url.indexOf("monmobile");
        url = url.substring(startIndx);
        url = prefix + url;
        //check type of file
        if (url.indexOf(".mp4") != -1) {
            name += ".mp4";
            isPDF = false;
        }
        else {
            isPDF = true;
            name += ".pdf";
        }
        //if file is pdf and we are in browser mode then we display a toast
        if (!isCordova) {
            if (isPDF) {
                var toast = this.toastCtrl.create({
                    message: "Fonctionnalité non disponible en mode navigateur",
                    duration: 3000,
                    position: 'bottom'
                });
                this.loading.dismiss();
                toast.present();
            }
            else {
                this.openVideo(url, isCordova);
            }
        }
        else {
            //check if file exists
            this.checkforfiles(name)
                .then(function (present) {
                if (present) {
                    if (isPDF) {
                        _this.openPDF(name);
                    }
                    else {
                        _this.openVideo(name, isCordova);
                    }
                }
                else {
                    _this.c8o.callJson(".Login")
                        .then(function (response, parameters) {
                        _this.c8o.log.info('login => logged');
                        _this.download(url, name)
                            .then(function (arg) {
                            if (arg) {
                                if (isPDF) {
                                    _this.openPDF(name);
                                }
                                else {
                                    _this.openVideo(name, isCordova);
                                }
                            }
                            else {
                                _this.loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: "Réseau non disponible",
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                        })
                            .catch(function (error) {
                            var toast = _this.toastCtrl.create({
                                message: "Erreur pendant le téléchargement du fichier",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            _this.loading.dismiss();
                            _this.c8o.log.error("error during download", error);
                        });
                        return null;
                    }).fail(function (resp) {
                        var toast = _this.toastCtrl.create({
                            message: "Réseau non disponible",
                            duration: 3000,
                            position: 'bottom'
                        });
                        _this.loading.dismiss();
                        toast.present();
                    });
                }
            });
        }
        /*End_c8o_function:CTS1505919816590*/ /*End_c8o_function:CTS1507625657834*/
    };
    /**
     * Function openchildren
     *
     *
     * @param event , the event received
     * @param children ,
     * @param path ,
     * @param types ,
     */
    DocumentsPage.prototype.CTS1507625693667 = function (event, children, path, types) {
        /*Begin_c8o_function:CTS1507625693667*/
        switch (types) {
            case "file": {
                //this.routerProvider.push("DocumentsPage", {navparams:, null)
                break;
            }
            case "dir": {
                //statements; 
                this.routerProvider.push("DocumentsPage", { navParams: children }, null);
                break;
            }
        }
        /*End_c8o_function:CTS1507625693667*/
    };
    return DocumentsPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
DocumentsPage = DocumentsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-documentspage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\DocumentsPage\documentspage.html"*/'<ion-header class="class1505895272375">\n\n<ion-navbar class="class1505895272391" color="sncf">\n\n<ion-title class="class1505895272405">\n\nDocuments\n\n</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1505895192931" padding>\n\n<ion-searchbar class="class1506027992395" autocorrect="" debounce="250" autocomplete="off" spellcheck="false" animated="true" placeholder="Recherche" type="search" cancelButtonText="Cancel" showCancelButton="true" (ionInput)="search($event)" [(ngModel)]="searchbar">\n\n</ion-searchbar>\n\n<ion-list class="class1505895398665">\n\n<ng-container class="class1506030363691" *ngIf="searchbar == \'\'">\n\n<ng-container class="class1505909565774" *ngIf="this.navParams != \'\'">\n\n<ng-container class="class1506030996157" *ngFor="let item1506030996157 of this.navParams;">\n\n<ng-container class="class1506030996170" *ngIf="item1506030996157.type == \'file\'">\n\n<button class="class1507625475447" ion-item (click)="CTS1507625527483($event, item1506030996157.path, item1506030996157.id)">\n\n<ion-thumbnail class="class1507625520235" item-left>\n\n<ng-container class="class1507625520252" *ngIf="item1506030996157.type == \'dir\'">\n\n<img class="class1507625520273" width="" [src]="\'assets/images/folder.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1507625520357" *ngIf="item1506030996157.type == \'file\'">\n\n<ng-container class="class1507625520379" *ngIf="item1506030996157.path.indexOf(\'pdf\') !== -1;">\n\n<img class="class1507625520405" width="" [src]="\'assets/images/pdf.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1507625520431" *ngIf="item1506030996157.path.indexOf(\'mp4\') !== -1;">\n\n<img class="class1507625520459" width="" [src]="\'assets/images/mp4.png\'" height=""/>\n\n</ng-container>\n\n</ng-container>\n\n</ion-thumbnail>\n\n<div class="class1507625520481">\n\n<h2 class="class1507625520511" ion-text>\n\n<div class="class1507625520537" text-capitalize text-wrap>\n\n{{item1506030996157.name}}\n\n</div>\n\n</h2>\n\n</div>\n\n</button>\n\n</ng-container>\n\n<ng-container class="class1506030996495" *ngIf="item1506030996157.type == \'dir\'">\n\n<button class="class1507625489650" ion-item (click)="CTS1507625579944($event, item1506030996157?.children, item1506030996157?.path, item1506030996157?.type)">\n\n<ion-thumbnail class="class1507625573109" item-left>\n\n<ng-container class="class1507625573128" *ngIf="item1506030996157.type == \'dir\'">\n\n<img class="class1507625573149" width="" [src]="\'assets/images/folder.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1507625573171" *ngIf="item1506030996157.type == \'file\'">\n\n<ng-container class="class1507625573191" *ngIf="item1506030996157.path.indexOf(\'pdf\') !== -1;">\n\n<img class="class1507625573213" width="" [src]="\'assets/images/pdf.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1507625573238" *ngIf="item1506030996157.path.indexOf(\'mp4\') !== -1;">\n\n<img class="class1507625573261" width="" [src]="\'assets/images/mp4.png\'" height=""/>\n\n</ng-container>\n\n</ng-container>\n\n</ion-thumbnail>\n\n<div class="class1507625573282">\n\n<h2 class="class1507625573311" ion-text>\n\n<div class="class1507625573334" text-capitalize text-wrap>\n\n{{item1506030996157.name}}\n\n</div>\n\n</h2>\n\n</div>\n\n</button>\n\n</ng-container>\n\n</ng-container>\n\n</ng-container>\n\n<ng-container class="class1505909599593" *ngIf="this.navParams == \'\'">\n\n<ng-container class="class1505909649649" *ngFor="let item1505909649649 of listen([\'fs://monmob.get#doc\']).array;">\n\n<button class="class1507625500607" ion-item (click)="CTS1507625621540($event, item1505909649649?.children, item1505909649649?.path, item1505909649649?.type)">\n\n<ion-thumbnail class="class1507625611546" item-left>\n\n<ng-container class="class1507625611562" *ngIf="item1505909649649.type == \'dir\'">\n\n<img class="class1507625611578" width="" [src]="\'assets/images/folder.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1507625611599" *ngIf="item1505909649649.type == \'file\'">\n\n<ng-container class="class1507625611622" *ngIf="item1505909649649.path.indexOf(\'pdf\') !== -1;">\n\n<img class="class1507625611649" width="" [src]="\'assets/images/pdf.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1507625611672" *ngIf="item1505909649649.path.indexOf(\'mp4\') !== -1;">\n\n<img class="class1507625611692" width="" [src]="\'assets/images/mp4.png\'" height=""/>\n\n</ng-container>\n\n</ng-container>\n\n</ion-thumbnail>\n\n<div class="class1507625611713">\n\n<h2 class="class1507625611735" ion-text>\n\n<div class="class1507625611755" text-capitalize text-wrap>\n\n{{item1505909649649.name}}\n\n</div>\n\n</h2>\n\n</div>\n\n</button>\n\n</ng-container>\n\n</ng-container>\n\n</ng-container>\n\n<ng-container class="class1506030406070" *ngIf="searchbar != \'\'">\n\n<ng-container class="class1505895368913" *ngFor="let item1505895368913 of this.array;">\n\n<ng-container class="class1505900457055" *ngIf="item1505895368913.type == \'file\'">\n\n<button class="class1507625508221" ion-item (click)="CTS1507625657834($event, item1505895368913.path, item1505895368913.id)">\n\n<ion-thumbnail class="class1507625652029" item-left>\n\n<ng-container class="class1507625652048" *ngIf="item1505895368913.type == \'dir\'">\n\n<img class="class1507625652064" width="" [src]="\'assets/images/folder.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1507625652085" *ngIf="item1505895368913.type == \'file\'">\n\n<ng-container class="class1507625652109" *ngIf="item1505895368913.path.indexOf(\'pdf\') !== -1;">\n\n<img class="class1507625652130" width="" [src]="\'assets/images/pdf.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1507625652146" *ngIf="item1505895368913.path.indexOf(\'mp4\') !== -1;">\n\n<img class="class1507625652169" width="" [src]="\'assets/images/mp4.png\'" height=""/>\n\n</ng-container>\n\n</ng-container>\n\n</ion-thumbnail>\n\n<div class="class1507625652188">\n\n<h2 class="class1507625652212" ion-text>\n\n<div class="class1507625652232" text-capitalize text-wrap>\n\n{{item1505895368913.name}}\n\n</div>\n\n</h2>\n\n</div>\n\n</button>\n\n</ng-container>\n\n<ng-container class="class1505919790070" *ngIf="item1505895368913.type == \'dir\'">\n\n<button class="class1507625511201" ion-item (click)="CTS1507625693667($event, item1505895368913?.children, item1505895368913?.path, item1505895368913?.type)">\n\n<ion-thumbnail class="class1507625686152" item-left>\n\n<ng-container class="class1507625686169" *ngIf="item1505895368913.type == \'dir\'">\n\n<img class="class1507625686187" width="" [src]="\'assets/images/folder.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1507625686208" *ngIf="item1505895368913.type == \'file\'">\n\n<ng-container class="class1507625686227" *ngIf="item1505895368913.path.indexOf(\'pdf\') !== -1;">\n\n<img class="class1507625686245" width="" [src]="\'assets/images/pdf.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1507625686267" *ngIf="item1505895368913.path.indexOf(\'mp4\') !== -1;">\n\n<img class="class1507625686286" width="" [src]="\'assets/images/mp4.png\'" height=""/>\n\n</ng-container>\n\n</ng-container>\n\n</ion-thumbnail>\n\n<div class="class1507625686304">\n\n<h2 class="class1507625686323" ion-text>\n\n<div class="class1507625686346" text-capitalize text-wrap>\n\n{{item1505895368913.name}}\n\n</div>\n\n</h2>\n\n</div>\n\n</button>\n\n</ng-container>\n\n</ng-container>\n\n</ng-container>\n\n</ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\DocumentsPage\documentspage.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]) === "function" && _g || Object])
], DocumentsPage);

var DocumentsPage_1, _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=documentspage.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AstucesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX

    Comments.

    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/
var AstucesPage = (function (_super) {
    __extends(AstucesPage, _super);
    /*Begin_c8o_PageDeclaration*/
    /*End_c8o_PageDeclaration*/
    function AstucesPage(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        return _this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    return AstucesPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
AstucesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-astucespage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\AstucesPage\astucespage.html"*/'<ion-header class="class1505938118429">\n\n<ion-navbar class="class1505938118443" color="sncf">\n\n<ion-title class="class1505938118457">\n\nAstuces\n\n</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1505938125540" padding>\n\n<p class="class1505938146381">\n\nLa page n\'est pas impl&eacute;ment&eacute;e\n\n</p>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\AstucesPage\astucespage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
], AstucesPage);

//# sourceMappingURL=astucespage.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SondagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX

    Comments.

    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/
var SondagesPage = (function (_super) {
    __extends(SondagesPage, _super);
    /*Begin_c8o_PageDeclaration*/
    /*End_c8o_PageDeclaration*/
    function SondagesPage(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        return _this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    return SondagesPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
SondagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sondagespage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\SondagesPage\sondagespage.html"*/'<ion-header class="class1505938201855">\n\n<ion-navbar class="class1505938201865" color="sncf">\n\n<ion-title class="class1505938201876">\n\nSondages\n\n</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1505938201925" padding>\n\n<p class="class1505938201934">\n\nLa page n\'est pas impl&eacute;ment&eacute;e\n\n</p>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\SondagesPage\sondagespage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
], SondagesPage);

//# sourceMappingURL=sondagespage.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX

    Comments.

    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/
var SettingsPage = (function (_super) {
    __extends(SettingsPage, _super);
    /*Begin_c8o_PageDeclaration*/
    /*End_c8o_PageDeclaration*/
    function SettingsPage(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        return _this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    return SettingsPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settingspage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\SettingsPage\settingspage.html"*/'<ion-header class="class1505939386966">\n\n<ion-navbar class="class1505939386978" color="sncf">\n\n<ion-title class="class1505939386989">\n\nParam&egrave;tres\n\n</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1505939387039" padding>\n\n<ion-list class="class1505939431934">\n\n<h2 class="class1505949860477">\n\nNOTIFICATIONS PUSH\n\n</h2>\n\n<ion-item class="class1505939438512">\n\n<ion-icon class="class1505941856048" name="alarm" item-start>\n\n</ion-icon>\n\n<ion-label class="class1505942008533">\n\nActiver / D&eacute;sactiver\n\n</ion-label>\n\n<ion-toggle class="class1505941856070">\n\n</ion-toggle>\n\n</ion-item>\n\n<h2 class="class1505949896324">\n\nINFORMATION UTILISATEUR\n\n</h2>\n\n<ion-item class="class1505942174641">\n\n<ion-icon class="class1505942250777" name="mail" item-start>\n\n</ion-icon>\n\n<ion-input class="class1505942360532" placeholder="Aucun email renseigné">\n\n</ion-input>\n\n<ion-icon class="class1505942685135" name="checkbox" item-right>\n\n</ion-icon>\n\n</ion-item>\n\n<h2 class="class1505949977090">\n\nTUTORIEL MONMOBILE\n\n</h2>\n\n<ion-item class="class1505942506223">\n\n<ion-icon class="class1505942506345" name="bookmarks" item-start>\n\n</ion-icon>\n\n<ion-label class="class1505942506356">\n\nRevoir\n\n</ion-label>\n\n<ion-icon class="class1505942617308" name="play" item-right>\n\n</ion-icon>\n\n</ion-item>\n\n</ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\SettingsPage\settingspage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
], SettingsPage);

//# sourceMappingURL=settingspage.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
    You can customize your page class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX

    Comments.

    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_PageImport*/

/*End_c8o_PageImport*/
var PlusPage = (function (_super) {
    __extends(PlusPage, _super);
    /*End_c8o_PageDeclaration*/
    function PlusPage(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        _this.actionBeans = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__services_actionbeans_service__["a" /* ActionBeans */]);
        /*Begin_c8o_PageConstructor*/
        _this.toastCtrl = _this.getInstance(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]);
        return _this;
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    /*End_c8o_PageFunction*/
    /**
     * Function openOauth
     *
     *
     * @param event , the event received
     */
    PlusPage.prototype.CTS1506008737136 = function (event) {
        var _this = this;
        /*Begin_c8o_function:CTS1506008737136*/
        this.router.doOAuthLogin('https://idp-dev.sncf.fr:443/openam/oauth2/IDP/authorize?' +
            'client_id=sncf.id.sandbox.app' +
            '&response_type=id_token+token' +
            '&scope=openid' +
            '&response_mode=fragment&state=12345&nonce=678910', // Implicit flow
        'https://localhost/oidc-redirect_uri', // the call back URL to check (As declared in the app portal)
        'SncfOauth.LoginWithToken', // The server sequence to be launched to check the access token
        'SncfOauth.checkAccessToken' // The sequence to execute to check access token
        ).then(function (response) {
            var toast = _this.toastCtrl.create({
                message: "Le token généré est: " + response.token,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.c8o.log.info("SNCF TOKEN => " + JSON.stringify(response));
        });
        /*End_c8o_function:CTS1506008737136*/
    };
    /**
     * Function CustomAction
     *
     *
     * @param event , the event received
     */
    PlusPage.prototype.CTS1505949096434 = function (event) {
        /*Begin_c8o_function:CTS1505949096434*/
        var toast = this.toastCtrl.create({
            message: "Cette page n'est pas implémentée",
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        /*End_c8o_function:CTS1505949096434*/
    };
    /**
     * Function CustomAction
     *
     *
     * @param event , the event received
     */
    PlusPage.prototype.CTS1505949295644 = function (event) {
        /*Begin_c8o_function:CTS1505949295644*/
        var toast = this.toastCtrl.create({
            message: "Cette page n'est pas implémentée",
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        /*End_c8o_function:CTS1505949295644*/
    };
    return PlusPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
PlusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pluspage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\PlusPage\pluspage.html"*/'<ion-header class="class1505948840869">\n\n<ion-navbar class="class1505948840880" color="sncf">\n\n<ion-title class="class1505948840892">\n\nPlus\n\n</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1505949018307" padding>\n\n<div class="class1505949063597">\n\n<ion-list class="class1505949028817" inset no-lines>\n\n<button class="class1507625802768" ion-item>\n\n<ion-item-divider class="class1505949028834">\n\n<ion-icon class="class1505949028853" name="settings" item-left>\n\n</ion-icon>\n\n<p class="class1505949028866">\n\nParam&eacute;tres\n\n</p>\n\n<ion-icon class="class1505949028886" name="arrow-forward" item-right>\n\n</ion-icon>\n\n</ion-item-divider>\n\n</button>\n\n<button class="class1507625816946" ion-item (click)="CTS1506008737136($event)">\n\n<ion-item-divider class="class1506008737069">\n\n<ion-icon class="class1506008737081" name="lock" item-left>\n\n</ion-icon>\n\n<p class="class1506008737091">\n\nOAuth-SNCF\n\n</p>\n\n<ion-icon class="class1506008737115" name="arrow-forward" item-right>\n\n</ion-icon>\n\n</ion-item-divider>\n\n</button>\n\n</ion-list>\n\n</div>\n\n<div class="class1505949096341">\n\n<ion-list class="class1505949096351" inset no-lines>\n\n<button class="class1507625866714" ion-item (click)="CTS1505949096434($event)">\n\n<ion-item-divider class="class1505949096372">\n\n<ion-icon class="class1505949096384" name="thumbs-up" item-left>\n\n</ion-icon>\n\n<p class="class1505949096395">\n\nFeedback\n\n</p>\n\n<ion-icon class="class1505949096418" name="arrow-forward" item-right>\n\n</ion-icon>\n\n</ion-item-divider>\n\n</button>\n\n<button class="class1507625928817" ion-item (click)="CTS1505949295644($event)">\n\n<ion-item-divider class="class1505949295573">\n\n<ion-icon class="class1505949295586" name="information-circle" item-left>\n\n</ion-icon>\n\n<p class="class1505949295597">\n\nAssistance Mobilit&eacute;\n\n</p>\n\n<ion-icon class="class1505949295625" name="arrow-forward" item-right>\n\n</ion-icon>\n\n</ion-item-divider>\n\n</button>\n\n</ion-list>\n\n</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\PlusPage\pluspage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
], PlusPage);

//# sourceMappingURL=pluspage.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deepLinkConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_c8osdkangular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_c8osdkangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_c8osdkangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_c8ocaf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_actionbeans_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_transfer__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_opener__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_streaming_media__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_TabsPage_tabspage__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_NewsPage_newspage__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ProgressPage_progresspage__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_DetailsNewsPage_detailsnewspage__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_DocumentsPage_documentspage__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_AstucesPage_astucespage__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_SondagesPage_sondagespage__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_SettingsPage_settingspage__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_PlusPage_pluspage__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_VideoPage_videopage__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























/**
 * Deep links to your pages so that the app can rout directly to the page url
 */
var deepLinkConfig = {
    links: [{ component: __WEBPACK_IMPORTED_MODULE_19__pages_TabsPage_tabspage__["a" /* TabsPage */], name: "TabsPage", segment: "TabsPage" }, { component: __WEBPACK_IMPORTED_MODULE_20__pages_NewsPage_newspage__["a" /* NewsPage */], name: "NewsPage", segment: "NewsPage" }, { component: __WEBPACK_IMPORTED_MODULE_21__pages_ProgressPage_progresspage__["a" /* ProgressPage */], name: "ProgressPage", segment: "ProgressPage" }, { component: __WEBPACK_IMPORTED_MODULE_22__pages_DetailsNewsPage_detailsnewspage__["a" /* DetailsNewsPage */], name: "DetailsNewsPage", segment: "DetailsNewsPage" }, { component: __WEBPACK_IMPORTED_MODULE_23__pages_DocumentsPage_documentspage__["a" /* DocumentsPage */], name: "DocumentsPage", segment: "DocumentsPage" }, { component: __WEBPACK_IMPORTED_MODULE_24__pages_AstucesPage_astucespage__["a" /* AstucesPage */], name: "AstucesPage", segment: "AstucesPage" }, { component: __WEBPACK_IMPORTED_MODULE_25__pages_SondagesPage_sondagespage__["a" /* SondagesPage */], name: "SondagesPage", segment: "SondagesPage" }, { component: __WEBPACK_IMPORTED_MODULE_26__pages_SettingsPage_settingspage__["a" /* SettingsPage */], name: "SettingsPage", segment: "SettingsPage" }, { component: __WEBPACK_IMPORTED_MODULE_27__pages_PlusPage_pluspage__["a" /* PlusPage */], name: "PlusPage", segment: "PlusPage" }, { component: __WEBPACK_IMPORTED_MODULE_28__pages_VideoPage_videopage__["a" /* VideoPage */], name: "VideoPage", segment: "VideoPage" }]
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_19__pages_TabsPage_tabspage__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_20__pages_NewsPage_newspage__["a" /* NewsPage */], __WEBPACK_IMPORTED_MODULE_21__pages_ProgressPage_progresspage__["a" /* ProgressPage */], __WEBPACK_IMPORTED_MODULE_22__pages_DetailsNewsPage_detailsnewspage__["a" /* DetailsNewsPage */], __WEBPACK_IMPORTED_MODULE_23__pages_DocumentsPage_documentspage__["a" /* DocumentsPage */], __WEBPACK_IMPORTED_MODULE_24__pages_AstucesPage_astucespage__["a" /* AstucesPage */], __WEBPACK_IMPORTED_MODULE_25__pages_SondagesPage_sondagespage__["a" /* SondagesPage */], __WEBPACK_IMPORTED_MODULE_26__pages_SettingsPage_settingspage__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_27__pages_PlusPage_pluspage__["a" /* PlusPage */], __WEBPACK_IMPORTED_MODULE_28__pages_VideoPage_videopage__["a" /* VideoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClientModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyB0Nl1dX0kEsB5QZaNf6m-tnb1N-U5dpXs'
            }),
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, deepLinkConfig)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicApp"]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_19__pages_TabsPage_tabspage__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_20__pages_NewsPage_newspage__["a" /* NewsPage */], __WEBPACK_IMPORTED_MODULE_21__pages_ProgressPage_progresspage__["a" /* ProgressPage */], __WEBPACK_IMPORTED_MODULE_22__pages_DetailsNewsPage_detailsnewspage__["a" /* DetailsNewsPage */], __WEBPACK_IMPORTED_MODULE_23__pages_DocumentsPage_documentspage__["a" /* DocumentsPage */], __WEBPACK_IMPORTED_MODULE_24__pages_AstucesPage_astucespage__["a" /* AstucesPage */], __WEBPACK_IMPORTED_MODULE_25__pages_SondagesPage_sondagespage__["a" /* SondagesPage */], __WEBPACK_IMPORTED_MODULE_26__pages_SettingsPage_settingspage__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_27__pages_PlusPage_pluspage__["a" /* PlusPage */], __WEBPACK_IMPORTED_MODULE_28__pages_VideoPage_videopage__["a" /* VideoPage */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9_c8osdkangular__["C8o"],
            __WEBPACK_IMPORTED_MODULE_10_c8ocaf__["C8oRouter"],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_transfer__["b" /* TransferObject */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_11__services_actionbeans_service__["a" /* ActionBeans */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicErrorHandler"] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 289,
	"./af.js": 289,
	"./ar": 290,
	"./ar-dz": 291,
	"./ar-dz.js": 291,
	"./ar-kw": 292,
	"./ar-kw.js": 292,
	"./ar-ly": 293,
	"./ar-ly.js": 293,
	"./ar-ma": 294,
	"./ar-ma.js": 294,
	"./ar-sa": 295,
	"./ar-sa.js": 295,
	"./ar-tn": 296,
	"./ar-tn.js": 296,
	"./ar.js": 290,
	"./az": 297,
	"./az.js": 297,
	"./be": 298,
	"./be.js": 298,
	"./bg": 299,
	"./bg.js": 299,
	"./bn": 300,
	"./bn.js": 300,
	"./bo": 301,
	"./bo.js": 301,
	"./br": 302,
	"./br.js": 302,
	"./bs": 303,
	"./bs.js": 303,
	"./ca": 304,
	"./ca.js": 304,
	"./cs": 305,
	"./cs.js": 305,
	"./cv": 306,
	"./cv.js": 306,
	"./cy": 307,
	"./cy.js": 307,
	"./da": 308,
	"./da.js": 308,
	"./de": 309,
	"./de-at": 310,
	"./de-at.js": 310,
	"./de-ch": 311,
	"./de-ch.js": 311,
	"./de.js": 309,
	"./dv": 312,
	"./dv.js": 312,
	"./el": 313,
	"./el.js": 313,
	"./en-au": 314,
	"./en-au.js": 314,
	"./en-ca": 315,
	"./en-ca.js": 315,
	"./en-gb": 316,
	"./en-gb.js": 316,
	"./en-ie": 317,
	"./en-ie.js": 317,
	"./en-nz": 318,
	"./en-nz.js": 318,
	"./eo": 319,
	"./eo.js": 319,
	"./es": 320,
	"./es-do": 321,
	"./es-do.js": 321,
	"./es.js": 320,
	"./et": 322,
	"./et.js": 322,
	"./eu": 323,
	"./eu.js": 323,
	"./fa": 324,
	"./fa.js": 324,
	"./fi": 325,
	"./fi.js": 325,
	"./fo": 326,
	"./fo.js": 326,
	"./fr": 327,
	"./fr-ca": 328,
	"./fr-ca.js": 328,
	"./fr-ch": 329,
	"./fr-ch.js": 329,
	"./fr.js": 327,
	"./fy": 330,
	"./fy.js": 330,
	"./gd": 331,
	"./gd.js": 331,
	"./gl": 332,
	"./gl.js": 332,
	"./gom-latn": 333,
	"./gom-latn.js": 333,
	"./he": 334,
	"./he.js": 334,
	"./hi": 335,
	"./hi.js": 335,
	"./hr": 336,
	"./hr.js": 336,
	"./hu": 337,
	"./hu.js": 337,
	"./hy-am": 338,
	"./hy-am.js": 338,
	"./id": 339,
	"./id.js": 339,
	"./is": 340,
	"./is.js": 340,
	"./it": 341,
	"./it.js": 341,
	"./ja": 342,
	"./ja.js": 342,
	"./jv": 343,
	"./jv.js": 343,
	"./ka": 344,
	"./ka.js": 344,
	"./kk": 345,
	"./kk.js": 345,
	"./km": 346,
	"./km.js": 346,
	"./kn": 347,
	"./kn.js": 347,
	"./ko": 348,
	"./ko.js": 348,
	"./ky": 349,
	"./ky.js": 349,
	"./lb": 350,
	"./lb.js": 350,
	"./lo": 351,
	"./lo.js": 351,
	"./lt": 352,
	"./lt.js": 352,
	"./lv": 353,
	"./lv.js": 353,
	"./me": 354,
	"./me.js": 354,
	"./mi": 355,
	"./mi.js": 355,
	"./mk": 356,
	"./mk.js": 356,
	"./ml": 357,
	"./ml.js": 357,
	"./mr": 358,
	"./mr.js": 358,
	"./ms": 359,
	"./ms-my": 360,
	"./ms-my.js": 360,
	"./ms.js": 359,
	"./my": 361,
	"./my.js": 361,
	"./nb": 362,
	"./nb.js": 362,
	"./ne": 363,
	"./ne.js": 363,
	"./nl": 364,
	"./nl-be": 365,
	"./nl-be.js": 365,
	"./nl.js": 364,
	"./nn": 366,
	"./nn.js": 366,
	"./pa-in": 367,
	"./pa-in.js": 367,
	"./pl": 368,
	"./pl.js": 368,
	"./pt": 369,
	"./pt-br": 370,
	"./pt-br.js": 370,
	"./pt.js": 369,
	"./ro": 371,
	"./ro.js": 371,
	"./ru": 372,
	"./ru.js": 372,
	"./sd": 373,
	"./sd.js": 373,
	"./se": 374,
	"./se.js": 374,
	"./si": 375,
	"./si.js": 375,
	"./sk": 376,
	"./sk.js": 376,
	"./sl": 377,
	"./sl.js": 377,
	"./sq": 378,
	"./sq.js": 378,
	"./sr": 379,
	"./sr-cyrl": 380,
	"./sr-cyrl.js": 380,
	"./sr.js": 379,
	"./ss": 381,
	"./ss.js": 381,
	"./sv": 382,
	"./sv.js": 382,
	"./sw": 383,
	"./sw.js": 383,
	"./ta": 384,
	"./ta.js": 384,
	"./te": 385,
	"./te.js": 385,
	"./tet": 386,
	"./tet.js": 386,
	"./th": 387,
	"./th.js": 387,
	"./tl-ph": 388,
	"./tl-ph.js": 388,
	"./tlh": 389,
	"./tlh.js": 389,
	"./tr": 390,
	"./tr.js": 390,
	"./tzl": 391,
	"./tzl.js": 391,
	"./tzm": 392,
	"./tzm-latn": 393,
	"./tzm-latn.js": 393,
	"./tzm.js": 392,
	"./uk": 394,
	"./uk.js": 394,
	"./ur": 395,
	"./ur.js": 395,
	"./uz": 396,
	"./uz-latn": 397,
	"./uz-latn.js": 397,
	"./uz.js": 396,
	"./vi": 398,
	"./vi.js": 398,
	"./x-pseudo": 399,
	"./x-pseudo.js": 399,
	"./yo": 400,
	"./yo.js": 400,
	"./zh-cn": 401,
	"./zh-cn.js": 401,
	"./zh-hk": 402,
	"./zh-hk.js": 402,
	"./zh-tw": 403,
	"./zh-tw.js": 403
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 549;

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_c8osdkangular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_c8osdkangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_c8osdkangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TabsPage_tabspage__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_NewsPage_newspage__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ProgressPage_progresspage__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_DetailsNewsPage_detailsnewspage__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_DocumentsPage_documentspage__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_AstucesPage_astucespage__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_SondagesPage_sondagespage__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_SettingsPage_settingspage__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_PlusPage_pluspage__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_VideoPage_videopage__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Convertigo CAF Imports



/*
    You can customize your application class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX
        
    Comments.
    
    Any code placed outside these these comments will be lost when the application is generated
*/
/*Begin_c8o_AppImport*/
/*End_c8o_AppImport*/










/**
 * Disable comments to run in prod mode
 */
/*import {enableProdMode} from '@angular/core';
 enableProdMode();*/
var MyApp = (function () {
    /*Begin_c8o_AppDeclaration*/
    /*End_c8o_AppDeclaration*/
    function MyApp(platform, statusBar, c8o, router, loader, app) {
        var _this = this;
        this.c8o = c8o;
        this.router = router;
        this.loader = loader;
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_ProgressPage_progresspage__["a" /* ProgressPage */];
        /**
         * declaring page to show in Menu
         */
        this.pages = [{ title: "Title for TabsPage", component: __WEBPACK_IMPORTED_MODULE_5__pages_TabsPage_tabspage__["a" /* TabsPage */], includedInAutoMenu: false }, { title: "First page", component: __WEBPACK_IMPORTED_MODULE_6__pages_NewsPage_newspage__["a" /* NewsPage */], includedInAutoMenu: false }, { title: "Title for ProgressPage", component: __WEBPACK_IMPORTED_MODULE_7__pages_ProgressPage_progresspage__["a" /* ProgressPage */], includedInAutoMenu: true }, { title: "Title for DetailsNewsPage", component: __WEBPACK_IMPORTED_MODULE_8__pages_DetailsNewsPage_detailsnewspage__["a" /* DetailsNewsPage */], includedInAutoMenu: false }, { title: "Title for DocumentsPage", component: __WEBPACK_IMPORTED_MODULE_9__pages_DocumentsPage_documentspage__["a" /* DocumentsPage */], includedInAutoMenu: true }, { title: "Title for AstucesPage", component: __WEBPACK_IMPORTED_MODULE_10__pages_AstucesPage_astucespage__["a" /* AstucesPage */], includedInAutoMenu: true }, { title: "Title for AstucesPage1", component: __WEBPACK_IMPORTED_MODULE_11__pages_SondagesPage_sondagespage__["a" /* SondagesPage */], includedInAutoMenu: true }, { title: "Title for SettingsPage", component: __WEBPACK_IMPORTED_MODULE_12__pages_SettingsPage_settingspage__["a" /* SettingsPage */], includedInAutoMenu: true }, { title: "Title for PlusPage", component: __WEBPACK_IMPORTED_MODULE_13__pages_PlusPage_pluspage__["a" /* PlusPage */], includedInAutoMenu: true }, { title: "Title for VideoPage", component: __WEBPACK_IMPORTED_MODULE_14__pages_VideoPage_videopage__["a" /* VideoPage */], includedInAutoMenu: true }];
        this.pagesKeyValue = { TabsPage: __WEBPACK_IMPORTED_MODULE_5__pages_TabsPage_tabspage__["a" /* TabsPage */], NewsPage: __WEBPACK_IMPORTED_MODULE_6__pages_NewsPage_newspage__["a" /* NewsPage */], ProgressPage: __WEBPACK_IMPORTED_MODULE_7__pages_ProgressPage_progresspage__["a" /* ProgressPage */], DetailsNewsPage: __WEBPACK_IMPORTED_MODULE_8__pages_DetailsNewsPage_detailsnewspage__["a" /* DetailsNewsPage */], DocumentsPage: __WEBPACK_IMPORTED_MODULE_9__pages_DocumentsPage_documentspage__["a" /* DocumentsPage */], AstucesPage: __WEBPACK_IMPORTED_MODULE_10__pages_AstucesPage_astucespage__["a" /* AstucesPage */], SondagesPage: __WEBPACK_IMPORTED_MODULE_11__pages_SondagesPage_sondagespage__["a" /* SondagesPage */], SettingsPage: __WEBPACK_IMPORTED_MODULE_12__pages_SettingsPage_settingspage__["a" /* SettingsPage */], PlusPage: __WEBPACK_IMPORTED_MODULE_13__pages_PlusPage_pluspage__["a" /* PlusPage */], VideoPage: __WEBPACK_IMPORTED_MODULE_14__pages_VideoPage_videopage__["a" /* VideoPage */] };
        this.router.pagesArray = this.pages;
        this.router.pagesKeyValue = this.pagesKeyValue;
        /* ============================================================================================================
           Convertigo Angular Framework (CAF) initialization...
           ============================================================================================================
         * Thanks to Convertigo CAF router we can manage call and navigation :
         *
         * Create a C8orouteOptions in order to define basic and repetitive routes options that will be used in C8oRoute
         * We can define actions such as beforeCall that allow us to run code before the C8o Call
         */
        var tableOptions = new __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouteOptions"]()
            .setBeforeCall(function () {
            //Do what ever has to be done...
        })
            .setAfterCall(function () {
            //Do what ever has to be done...
        })
            .setDidEnter(function (page, c8o) {
            c8o.log.trace("DidEnter was called from the new routing table and with page : " + page.constructor.name);
        })
            .setDidLeave(function (page, c8o) {
            c8o.log.trace("DidLeave was called from the new routing table and with page : " + page.constructor.name);
        })
            .setTargetAnimate(true)
            .setTargetDuration(250);
        /**
         * The generated Routing Table
         */
        this.router.addRouteListener(new __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouteListener"](["fs://monmob.get#getDetailsNews"]).addRoute(new __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRoute"](function (data) { return true; }, tableOptions).setTarget("push", __WEBPACK_IMPORTED_MODULE_8__pages_DetailsNewsPage_detailsnewspage__["a" /* DetailsNewsPage */])));
        /**
         *  Define a C8oSettings Object in order to declare settings to be used in the C8oInit method
         */
        var settings = new __WEBPACK_IMPORTED_MODULE_4_c8osdkangular__["C8oSettings"]();
        settings
            .setLogRemote(true)
            .setLogC8o(true)
            .setLogLevelLocal(__WEBPACK_IMPORTED_MODULE_4_c8osdkangular__["C8oLogLevel"].DEBUG)
            .setTimeout(120000);
        /**
         * Then we assign C8oSettings to our c8o Object with the init method
         */
        this.c8o.init(settings);
        /* ============================================================================================================
             End of Convertigo Angular Framework (CAF) initialization...
           ============================================================================================================*/
        /*Begin_c8o_AppConstructor*/
        /*End_c8o_AppConstructor*/
        platform.ready().then(function () {
            statusBar.backgroundColorByHexString('#009AA6');
            /**
             * Then we finalize initialization
             */
            _this.c8o.finalizeInit().then(function () {
                /*Begin_c8o_AppInitialization*/
                //set Prefix_url
                _this.router.sharedObject = { prefix_site_clipper: "https://mb.convertigo.net/cems/projects/MonMobile/connector=SC,context=ctx.siteclipper/http/" };
                //Testing connection Type
                var initialConnectionType = "Unknown";
                if (navigator["connection"] != undefined) {
                    initialConnectionType = navigator["connection"].type;
                    if (initialConnectionType == undefined) {
                        initialConnectionType = navigator["connection"].effectiveType;
                    }
                }
                //if there is network logging and synchronizing
                if (initialConnectionType == "Unknown" || initialConnectionType != navigator["connection"].NONE) {
                    // fisrt call Logging
                    //this.c8o.callJson("fs://monmob.reset").then((resp)=>{
                    _this.c8o.callJson(".Login")
                        .then(function (response, parameters) {
                        _this.c8o.log.info('login => logged');
                        _this.c8o.log.info(JSON.stringify(response));
                        // second call sync
                        return _this.c8o.callJson("fs://monmob.sync", "continuous", true);
                    })
                        .then(function (response, parameters) {
                        _this.c8o.log.info('Sync => Database Synchronized => set root page');
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_TabsPage_tabspage__["a" /* TabsPage */], null, null, null);
                        return null;
                    })
                        .progress(function (progress) {
                        _this.c8o.log.info(progress.toString());
                        // if progress is finished then show another view
                        if (progress.finished) {
                            _this.c8o.log.info('Progress finished');
                        }
                    })
                        .fail(function (err, params) {
                        _this.c8o.log.warn('Fail for initial sync =>\n Error: ' + JSON.stringify(err) + '\n Parameters:  ' + JSON.stringify(params));
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_TabsPage_tabspage__["a" /* TabsPage */], null, null, null);
                    });
                    /* return null;
                 });*/
                }
                else {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_TabsPage_tabspage__["a" /* TabsPage */], null, null, null);
                }
                // Handling online network event
                document.addEventListener("online", function () {
                    _this.c8o.log.info('online Event Handle =>  Login and Sync process staring again');
                    _this.c8o.callJson(".Login")
                        .then(function (response, parameters) {
                        _this.c8o.log.info('login => logged');
                        // second call sync
                        return _this.c8o.callJson("fs://monmob.sync", "continuous", true);
                    })
                        .then(function (response, parameters) {
                        _this.c8o.log.info('Sync => Database Synchronized');
                        return null;
                    })
                        .progress(function (progress) {
                        _this.c8o.log.info(progress.toString());
                        // share progress status with another page (ProgressPage)
                        //this.router.storeResponseForView("Page", "fs://monmob.sync#progress", progress, null, null, null);
                        // if progress is finished then show another view
                        if (progress.finished) {
                            _this.c8o.log.info('Progress finished => SetRoot TabsPage');
                        }
                    })
                        .fail(function (err, params) {
                        _this.c8o.log.warn('Fail for initial sync =>\n Error: ' + JSON.stringify(err) + '\n Parameters:  ' + JSON.stringify(params));
                    });
                });
                /*End_c8o_AppInitialization*/
            });
        });
    }
    MyApp.prototype.getRootNav = function () {
        var rootNavs = this.app.getRootNavs();
        return rootNavs.length > 0 ? rootNavs[0] : null;
    };
    MyApp.prototype.openPage = function (page) {
        var rootNav = this.getRootNav();
        if (rootNav) {
            rootNav.setRoot(page.component);
        }
    };
    MyApp.prototype.openPageWithName = function (name) {
        var rootNav = this.getRootNav();
        if (rootNav) {
            rootNav.setRoot(name);
        }
    };
    MyApp.prototype.getPagesIncludedInAutoMenu = function () {
        var arrayIncluded = [];
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p["includedInAutoMenu"]) {
                arrayIncluded.push(p);
            }
        }
        return arrayIncluded;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\app\app.html"*/'<ion-menu class="class1500890597895" swipeEnabled="false" id="Menu" [content]="content">\n\n<ion-header class="class1500890727582">\n\n<ion-toolbar class="class1500890731485" color="sncf">\n\n<ion-title class="class1500890752959">\n\nPlus\n\n</ion-title>\n\n</ion-toolbar>\n\n</ion-header>\n\n<ion-content class="class1500890742326" padding>\n\n<ion-list class="class1501343197007" inset no-lines>\n\n<ion-item class="class1505938542677" (click)="CTS1505939251471($event)">\n\n<ion-item-divider class="class1505938929242">\n\n<ion-icon class="class1505938833032" name="settings" item-left>\n\n</ion-icon>\n\n<p class="class1505939173443">\n\nParam&eacute;tres\n\n</p>\n\n<ion-icon class="class1505939093736" name="arrow-forward" item-right>\n\n</ion-icon>\n\n</ion-item-divider>\n\n</ion-item>\n\n</ion-list>\n\n</ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_c8osdkangular__["C8o"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_c8osdkangular__["C8o"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]) === "function" && _g || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ })

},[458]);
//# sourceMappingURL=main.js.map