webpackJsonp([0],{

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 221:
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
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
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
        /*Begin_c8o_PageConstructor*/
        _this.dataParent = _this.navParams.data;
        console.log("##############\n" + _this.navParams);
        return _this;
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    /*End_c8o_PageFunction*/
    TabsPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        this.call('fs://monmob.get#doc', { docid: 'hierarchy' }, null, 3000);
    };
    return TabsPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabspage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\TabsPage\tabspage.html"*/'<ion-tabs class="class1505293198171" color="sncf">\n\n<ion-tab class="class1505293199779" tabIcon="paper" tabTitle="News" [root]="getPageByName(\'NewsPage\')">\n\n</ion-tab>\n\n<ion-tab class="class1505293227562" tabIcon="document" tabTitle="Documents" [root]="getPageByName(\'DocumentsPage\')" [rootParams]="navParams.data">\n\n</ion-tab>\n\n<ion-tab class="class1505293243810" tabIcon="hand" tabTitle="Astuces" [root]="getPageByName(\'AstucesPage\')">\n\n</ion-tab>\n\n<ion-tab class="class1505293245626" tabIcon="stats" tabTitle="Sondages" [root]="getPageByName(\'SondagesPage\')">\n\n</ion-tab>\n\n<ion-tab class="class1505949595963" tabIcon="menu" tabTitle="Plus" [root]="getPageByName(\'PlusPage\')">\n\n</ion-tab>\n\n</ion-tabs>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\TabsPage\tabspage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
], TabsPage);

//# sourceMappingURL=tabspage.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
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
        return _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        /*Begin_c8o_PageConstructor*/
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    /*End_c8o_PageFunction*/
    NewsPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        this.call('fs://monmob.view#news1', { ddoc: 'news', view: 'all', __live: 'allnews', descending: true }, null, 3000);
    };
    return NewsPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-newspage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\NewsPage\newspage.html"*/'<ion-header class="class1491634212350">\n\n<ion-navbar class="class1491634231108" color="sncf">\n\n<ion-title class="class1491634265317">\n\nNews\n\n</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1489674805352">\n\n<ion-list class="class1505295845438">\n\n<ng-container class="class1505295874965" *ngFor="let item1505295874965 of listen([\'fs://monmob.view#news1\'])?.rows;">\n\n<ng-container class="class1505825742892" *ngIf="item1505295874965?.value?.noAttachments !=\'true\'">\n\n<ion-item class="class1505825742902" (click)="call(\'fs://monmob.get#getDetailsNews\', {docid: item1505295874965?.id},null, 3000)">\n\n<ion-thumbnail class="class1505825771841" item-left>\n\n<img class="class1505825771851" width="" [src]="getAttachmentUrl(item1505295874965?.id, \'img.png\', \'assets/images/placeholder.png\', \'monmob\')" height=""/>\n\n</ion-thumbnail>\n\n<div class="class1505826039943">\n\n<h3 class="class1505826078237">\n\n{{item1505295874965?.value?.dateFr}}\n\n</h3>\n\n<h3 class="class1505826084848">\n\n{{item1505295874965?.value?.nomCategorie}}\n\n</h3>\n\n</div>\n\n<div class="class1505826747653">\n\n<h2 class="class1505825743004" ion-text>\n\n<div class="class1505825743014" text-capitalize text-wrap>\n\n{{item1505295874965?.value?.titre}}\n\n</div>\n\n</h2>\n\n</div>\n\n<div class="class1505825743039" text-wrap>\n\n<p class="class1505825743052">\n\n{{item1505295874965?.value?.abstract}}\n\n</p>\n\n</div>\n\n</ion-item>\n\n</ng-container>\n\n<ng-container class="class1505815363443" *ngIf="item1505295874965?.value?.noAttachments==\'true\'">\n\n<ion-item class="class1505815363453" (click)="call(\'fs://monmob.get#getDetailsNews\', {docid: item1505295874965?.id},null, 3000)">\n\n<div class="class1505827383482">\n\n<h3 class="class1505827383492">\n\n{{item1505295874965?.value?.dateFr}}\n\n</h3>\n\n<h3 class="class1505827383521">\n\n{{item1505295874965?.value?.nomCategorie}}\n\n</h3>\n\n</div>\n\n<div class="class1505827383551">\n\n<h2 class="class1505827383561" ion-text>\n\n<div class="class1505827383572" text-wrap>\n\n{{item1505295874965?.value?.titre}}\n\n</div>\n\n</h2>\n\n</div>\n\n<div class="class1505827383617" text-wrap>\n\n<p class="class1505827383627">\n\n{{item1505295874965?.value?.abstract}}\n\n</p>\n\n</div>\n\n</ion-item>\n\n</ng-container>\n\n</ng-container>\n\n</ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="class1491634242460">\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\NewsPage\newspage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
], NewsPage);

//# sourceMappingURL=newspage.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
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
        return _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
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
            content: 'Synchronisation: ' // + this.router?.sharedObject?.current + ' / ' + this.router?.sharedObject?.total
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

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(441);
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
        /*Begin_c8o_PageConstructor*/
        _this.socialSharing = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]);
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
        var _this = this;
        if (window["cordova"] == undefined) {
            window["cblite"].getURL(function (err, url) {
                if (err) {
                    console.log("error launching Couchbase Lite: " + err);
                }
                else {
                    console.log("Couchbase Lite running at " + url);
                }
            });
            this.openSocial(label, container);
        }
        else {
            var loading_1 = this.loadingCtrl.create({});
            loading_1.present();
            this.socialSharing.shareViaTwitter(this.listen(['fs://monmob.get#getDetailsNews']).description, null, null).then(function () {
                console.log("shared");
                container.close();
                loading_1.dismiss();
            }).catch(function () {
                // Error!
                container.close();
                loading_1.dismiss();
                _this.openSocial(label, container);
                console.log('error sharing');
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
        if (window["cordova"] == undefined) {
            this.openSocial(label, container);
        }
        else {
            var loading_2 = this.loadingCtrl.create({});
            loading_2.present();
            this.socialSharing.shareViaFacebook(this.listen(['fs://monmob.get#getDetailsNews']).description, null, null).then(function () {
                console.log("shared");
                container.close();
                loading_2.dismiss();
            }).catch(function () {
                // Error!
                container.close();
                loading_2.dismiss();
                _this.openSocial(label, container);
                console.log('error sharing');
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
                    console.log('succes');
                    container.close();
                    loading_3.dismiss();
                }).catch(function () {
                    // Error!
                    container.close();
                    loading_3.dismiss();
                    console.log('error sharing');
                });
            }).catch(function () {
                console.log('sharing not possible');
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
], DetailsNewsPage);

//# sourceMappingURL=detailsnewspage.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_streaming_media__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(447);
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
var DocumentsPage = (function (_super) {
    __extends(DocumentsPage, _super);
    /*End_c8o_PageDeclaration*/
    function DocumentsPage(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) {
        var _this = _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
        _this.storageDirectory = '';
        _this.array = [];
        _this.searchbar = '';
        /*Begin_c8o_PageConstructor*/
        _this.platform = _this.getInstance(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"]);
        _this.file = _this.getInstance(__WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]);
        _this.transfer = _this.getInstance(__WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */]);
        _this.fileOpener = _this.getInstance(__WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */]);
        _this.streamingMedia = _this.getInstance(__WEBPACK_IMPORTED_MODULE_7__ionic_native_streaming_media__["a" /* StreamingMedia */]);
        _this.toastCtrl = _this.getInstance(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]);
        _this.browser = _this.getInstance(__WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]);
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
                    _this.c8o.log.error("error from download1", error);
                    _this.c8o.log.info(JSON.stringify(error));
                    resolve(false);
                }).catch(function (e) {
                    _this.c8o.log.error("download ko");
                    _this.c8o.log.error("error from download2", e);
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
                .then(function () {
                present = true;
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
            console.log('Error openening file', e);
        });
    };
    DocumentsPage.prototype.search = function (ev) {
        this.array = [];
        var val = ev.target.value.toLowerCase();
        console.log("val is: " + val);
        for (var _i = 0, _a = this.listen(['fs://monmob.get#doc']).array; _i < _a.length; _i++) {
            var element = _a[_i];
            console.log("search: current element:  ");
            console.log(element);
            console.log("search: val :" + val + ' element: ' + element.name.toLowerCase());
            if (element.name == "tutoriel activer le deverrouillage par empreinte digitale.mp4") {
                console.log("a");
            }
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
            console.log("searchchild: val :" + val + ' element: ' + element.name.toLowerCase());
            if (element.name.toLowerCase() == "tutoriel activer le deverrouillage par empreinte digitale.mp4") {
                console.log("a");
            }
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
        this.call('fs://monmob.get#doc', { docid: 'hierarchy' }, null, 3000);
    };
    /**
     * Function open
     *
     *
     * @param event , the event received
     * @param url ,
     * @param name ,
     */
    DocumentsPage.prototype.CTS1506030996407 = function (event, url, name) {
        var _this = this;
        /*Begin_c8o_function:CTS1506030996407*/
        if (window["cordova"] == undefined) {
            var toast = this.toastCtrl.create({
                message: "Fonctionalitée non disponible en mode navigateur",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            this.loading = this.loadingCtrl.create({});
            this.loading.present();
            var prefix = "https://mb.convertigo.net/cems/projects/MonMobile/connector=SC,context=ctx.siteclipper/http/";
            var startIndx = url.indexOf("monmobile");
            url = url.substring(startIndx);
            url = prefix + url;
            if (url.indexOf(".mp4") != -1) {
                this.c8o.callJson(".Login")
                    .then(function (response, parameters) {
                    _this.c8o.log.info('login => logged');
                    // second call sync
                    //window.open(url, '_blank', 'location=no');
                    _this.browser.create(url, '_blank', 'location=no,clearcache=no,clearsessioncache=no');
                    _this.loading.dismiss();
                    _this.browser.show();
                    return null;
                });
            }
            else {
                this.checkforfiles(name)
                    .then(function (present) {
                    if (present) {
                        _this.openPDF(name);
                    }
                    else {
                        _this.c8o.callJson(".Login")
                            .then(function (response, parameters) {
                            _this.c8o.log.info('login => logged');
                            // second call sync
                            _this.download(url, name)
                                .then(function (arg) {
                                if (arg) {
                                    _this.openPDF(name);
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
                                _this.c8o.log.error("error" + JSON.stringify(error));
                            });
                            return null;
                        }).fail(function (error) {
                            var toast = _this.toastCtrl.create({
                                message: "Erreur pendant le téléchargement du fichier",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            _this.loading.dismiss();
                            _this.c8o.log.error("error" + JSON.stringify(error));
                        });
                    }
                });
            }
        }
        //---function:CTS1505919816590---	/*End_c8o_function:CTS1506030996407*/
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
    DocumentsPage.prototype.CTS1506030996645 = function (event, children, path, types) {
        /*Begin_c8o_function:CTS1506030996645*/
        this.searchbar = '';
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
        /*End_c8o_function:CTS1506030996645*/
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
    DocumentsPage.prototype.CTS1505909649776 = function (event, children, path, types) {
        /*Begin_c8o_function:CTS1505909649776*/
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
        /*End_c8o_function:CTS1505909649776*/
    };
    /**
     * Function open2
     *
     *
     * @param event , the event received
     * @param url ,
     * @param name ,
     */
    DocumentsPage.prototype.CTS1505919816590 = function (event, url, name) {
        var _this = this;
        /*Begin_c8o_function:CTS1505919816590*/
        if (window["cordova"] == undefined) {
            var toast = this.toastCtrl.create({
                message: "Fonctionalitée non disponible en mode navigateur",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            this.loading = this.loadingCtrl.create({});
            this.loading.present();
            var prefix = "https://mb.convertigo.net/cems/projects/MonMobile/connector=SC,context=ctx.siteclipper/http/";
            var startIndx = url.indexOf("monmobile");
            url = url.substring(startIndx);
            url = prefix + url;
            if (url.indexOf(".mp4") != -1) {
                this.c8o.callJson(".Login")
                    .then(function (response, parameters) {
                    _this.c8o.log.info('login => logged');
                    // second call sync
                    window.open(url, '_blank', 'location=no');
                    _this.loading.dismiss();
                    return null;
                });
            }
            else {
                this.checkforfiles(name)
                    .then(function (present) {
                    if (present) {
                        _this.openPDF(name);
                    }
                    else {
                        _this.c8o.callJson(".Login")
                            .then(function (response, parameters) {
                            _this.c8o.log.info('login => logged');
                            // second call sync
                            _this.download(url, name)
                                .then(function (arg) {
                                if (arg) {
                                    _this.openPDF(name);
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
                                _this.c8o.log.error("error" + JSON.stringify(error));
                            });
                            return null;
                        }).fail(function (error) {
                            var toast = _this.toastCtrl.create({
                                message: "Erreur pendant le téléchargement du fichier",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                            _this.loading.dismiss();
                            _this.c8o.log.error("error" + JSON.stringify(error));
                        });
                    }
                });
            }
        }
        /*End_c8o_function:CTS1505919816590*/ /*End_c8o_function:CTS1505919816590*/
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
    DocumentsPage.prototype.CTS1505896832782 = function (event, children, path, types) {
        /*Begin_c8o_function:CTS1505896832782*/
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
        /*End_c8o_function:CTS1505896832782*/
    };
    return DocumentsPage;
}(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oPage"]));
DocumentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-documentspage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\DocumentsPage\documentspage.html"*/'<ion-header class="class1505895272375">\n\n<ion-navbar class="class1505895272391" color="sncf">\n\n<ion-title class="class1505895272405">\n\nDocuments\n\n</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1505895192931" padding>\n\n<ion-searchbar class="class1506027992395" autocorrect="" debounce="250" autocomplete="off" spellcheck="false" animated="true" placeholder="Recherche" type="search" cancelButtonText="Cancel" showCancelButton="true" (ionInput)="search($event)" [(ngModel)]="searchbar">\n\n</ion-searchbar>\n\n<ion-list class="class1505895398665">\n\n<ng-container class="class1506030363691" *ngIf="searchbar == \'\'">\n\n<ng-container class="class1505909565774" *ngIf="this.navParams != \'\'">\n\n<ng-container class="class1506030996157" *ngFor="let item1506030996157 of this.navParams;">\n\n<ng-container class="class1506030996170" *ngIf="item1506030996157.type == \'file\'">\n\n<ion-item class="class1506030996183" (click)="CTS1506030996407($event, item1506030996157.path, item1506030996157.id)">\n\n<ion-thumbnail class="class1506030996196" item-left>\n\n<ng-container class="class1506030996210" *ngIf="item1506030996157.type == \'dir\'">\n\n<img class="class1506030996228" width="" [src]="\'assets/images/folder.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1506030996240" *ngIf="item1506030996157.type == \'file\'">\n\n<ng-container class="class1506030996253" *ngIf="item1506030996157.path.indexOf(\'pdf\') !== -1;">\n\n<img class="class1506030996268" width="" [src]="\'assets/images/pdf.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1506030996284" *ngIf="item1506030996157.path.indexOf(\'mp4\') !== -1;">\n\n<img class="class1506030996297" width="" [src]="\'assets/images/mp4.png\'" height=""/>\n\n</ng-container>\n\n</ng-container>\n\n</ion-thumbnail>\n\n<div class="class1506030996322">\n\n<h2 class="class1506030996335" ion-text>\n\n<div class="class1506030996350" text-capitalize text-wrap>\n\n{{item1506030996157.name}}\n\n</div>\n\n</h2>\n\n</div>\n\n</ion-item>\n\n</ng-container>\n\n<ng-container class="class1506030996495" *ngIf="item1506030996157.type == \'dir\'">\n\n<ion-item class="class1506030996509" (click)="CTS1506030996645($event, item1506030996157?.children, item1506030996157?.path, item1506030996157?.type)">\n\n<ion-thumbnail class="class1506030996522" item-left>\n\n<ng-container class="class1506030996536" *ngIf="item1506030996157.type == \'dir\'">\n\n<img class="class1506030996551" width="" [src]="\'assets/images/folder.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1506030996567" *ngIf="item1506030996157.type == \'file\'">\n\n<ng-container class="class1506030996585" *ngIf="item1506030996157.path.indexOf(\'pdf\') !== -1;">\n\n<img class="class1506030996600" width="" [src]="\'assets/images/pdf.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1506030996612" *ngIf="item1506030996157.path.indexOf(\'mp4\') !== -1;">\n\n<img class="class1506030996626" width="" [src]="\'assets/images/mp4.png\'" height=""/>\n\n</ng-container>\n\n</ng-container>\n\n</ion-thumbnail>\n\n<div class="class1506030996791">\n\n<h2 class="class1506030996802" ion-text>\n\n<div class="class1506030996817" text-capitalize text-wrap>\n\n{{item1506030996157.name}}\n\n</div>\n\n</h2>\n\n</div>\n\n<ng-container class="class1506030996867" *ngIf="true">\n\n</ng-container>\n\n</ion-item>\n\n</ng-container>\n\n</ng-container>\n\n</ng-container>\n\n<ng-container class="class1505909599593" *ngIf="this.navParams == \'\'">\n\n<ng-container class="class1505909649649" *ngFor="let item1505909649649 of listen([\'fs://monmob.get#doc\']).array;">\n\n<ion-item class="class1505909649660" (click)="CTS1505909649776($event, item1505909649649?.children, item1505909649649?.path, item1505909649649?.type)">\n\n<ion-thumbnail class="class1505909649669" item-left>\n\n<ng-container class="class1505909649681" *ngIf="item1505909649649.type == \'dir\'">\n\n<img class="class1505909649693" width="" [src]="\'assets/images/folder.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1505909649708" *ngIf="item1505909649649.type == \'file\'">\n\n<ng-container class="class1505909649718" *ngIf="item1505909649649.path.indexOf(\'pdf\') !== -1;">\n\n<img class="class1505909649730" width="" [src]="\'assets/images/pdf.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1505909649743" *ngIf="item1505909649649.path.indexOf(\'mp4\') !== -1;">\n\n<img class="class1505909649754" width="" [src]="\'assets/images/mp4.png\'" height=""/>\n\n</ng-container>\n\n</ng-container>\n\n</ion-thumbnail>\n\n<div class="class1505909649838">\n\n<h2 class="class1505909649852" ion-text>\n\n<div class="class1505909649868" text-capitalize text-wrap>\n\n{{item1505909649649.name}}\n\n</div>\n\n</h2>\n\n</div>\n\n</ion-item>\n\n</ng-container>\n\n</ng-container>\n\n</ng-container>\n\n<ng-container class="class1506030406070" *ngIf="searchbar != \'\'">\n\n<ng-container class="class1505895368913" *ngFor="let item1505895368913 of this.array;">\n\n<ng-container class="class1505900457055" *ngIf="item1505895368913.type == \'file\'">\n\n<ion-item class="class1505919816296" (click)="CTS1505919816590($event, item1505895368913.path, item1505895368913.id)">\n\n<ion-thumbnail class="class1505919816307" item-left>\n\n<ng-container class="class1505919816319" *ngIf="item1505895368913.type == \'dir\'">\n\n<img class="class1505919816330" width="" [src]="\'assets/images/folder.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1505919816342" *ngIf="item1505895368913.type == \'file\'">\n\n<ng-container class="class1505919816354" *ngIf="item1505895368913.path.indexOf(\'pdf\') !== -1;">\n\n<img class="class1505919816367" width="" [src]="\'assets/images/pdf.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1505919816382" *ngIf="item1505895368913.path.indexOf(\'mp4\') !== -1;">\n\n<img class="class1505919816396" width="" [src]="\'assets/images/mp4.png\'" height=""/>\n\n</ng-container>\n\n</ng-container>\n\n</ion-thumbnail>\n\n<div class="class1505919816488">\n\n<h2 class="class1505919816499" ion-text>\n\n<div class="class1505919816511" text-capitalize text-wrap>\n\n{{item1505895368913.name}}\n\n</div>\n\n</h2>\n\n</div>\n\n</ion-item>\n\n</ng-container>\n\n<ng-container class="class1505919790070" *ngIf="item1505895368913.type == \'dir\'">\n\n<ion-item class="class1505895858010" (click)="CTS1505896832782($event, item1505895368913?.children, item1505895368913?.path, item1505895368913?.type)">\n\n<ion-thumbnail class="class1505896293429" item-left>\n\n<ng-container class="class1505896788080" *ngIf="item1505895368913.type == \'dir\'">\n\n<img class="class1505907388214" width="" [src]="\'assets/images/folder.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1505907628969" *ngIf="item1505895368913.type == \'file\'">\n\n<ng-container class="class1505907720430" *ngIf="item1505895368913.path.indexOf(\'pdf\') !== -1;">\n\n<img class="class1505907720439" width="" [src]="\'assets/images/pdf.png\'" height=""/>\n\n</ng-container>\n\n<ng-container class="class1505907815540" *ngIf="item1505895368913.path.indexOf(\'mp4\') !== -1;">\n\n<img class="class1505907815596" width="" [src]="\'assets/images/mp4.png\'" height=""/>\n\n</ng-container>\n\n</ng-container>\n\n</ion-thumbnail>\n\n<div class="class1505903956462">\n\n<h2 class="class1505903956472" ion-text>\n\n<div class="class1505903956481" text-capitalize text-wrap>\n\n{{item1505895368913.name}}\n\n</div>\n\n</h2>\n\n</div>\n\n<ng-container class="class1505912289651" *ngIf="true">\n\n</ng-container>\n\n</ion-item>\n\n</ng-container>\n\n</ng-container>\n\n</ng-container>\n\n</ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\DocumentsPage\documentspage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
], DocumentsPage);

//# sourceMappingURL=documentspage.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AstucesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
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
        return _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SondagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
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
        return _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
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

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
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
        return _super.call(this, routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl) || this;
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

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
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
        /*Begin_c8o_PageConstructor*/
        _this.toastCtrl = _this.getInstance(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]);
        return _this;
        /*End_c8o_PageConstructor*/
    }
    /*Begin_c8o_PageFunction*/
    /*End_c8o_PageFunction*/
    /**
     * Function push
     *
     *
     * @param event , the event received
     */
    PlusPage.prototype.CTS1505949028904 = function (event) {
        /*Begin_c8o_function:CTS1505949028904*/
        console.log(event);
        this.routerProvider.push("SettingsPage", null, null);
        /*End_c8o_function:CTS1505949028904*/
    };
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
        selector: 'page-pluspage',template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\pages\PlusPage\pluspage.html"*/'<ion-header class="class1505948840869">\n\n<ion-navbar class="class1505948840880" color="sncf">\n\n<ion-title class="class1505948840892">\n\nPlus\n\n</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="class1505949018307" padding>\n\n<div class="class1505949063597">\n\n<ion-list class="class1505949028817" inset no-lines>\n\n<ion-item class="class1505949028831" (click)="CTS1505949028904($event)">\n\n<ion-item-divider class="class1505949028834">\n\n<ion-icon class="class1505949028853" name="settings" item-left>\n\n</ion-icon>\n\n<p class="class1505949028866">\n\nParam&eacute;tres\n\n</p>\n\n<ion-icon class="class1505949028886" name="arrow-forward" item-right>\n\n</ion-icon>\n\n</ion-item-divider>\n\n</ion-item>\n\n<ion-item class="class1506008737059" (click)="CTS1506008737136($event)">\n\n<ion-item-divider class="class1506008737069">\n\n<ion-icon class="class1506008737081" name="lock" item-left>\n\n</ion-icon>\n\n<p class="class1506008737091">\n\nOAuth-SNCF\n\n</p>\n\n<ion-icon class="class1506008737115" name="arrow-forward" item-right>\n\n</ion-icon>\n\n</ion-item-divider>\n\n</ion-item>\n\n</ion-list>\n\n</div>\n\n<div class="class1505949096341">\n\n<ion-list class="class1505949096351" inset no-lines>\n\n<ion-item class="class1505949096362" (click)="CTS1505949096434($event)">\n\n<ion-item-divider class="class1505949096372">\n\n<ion-icon class="class1505949096384" name="thumbs-up" item-left>\n\n</ion-icon>\n\n<p class="class1505949096395">\n\nFeedback\n\n</p>\n\n<ion-icon class="class1505949096418" name="arrow-forward" item-right>\n\n</ion-icon>\n\n</ion-item-divider>\n\n</ion-item>\n\n<ion-item class="class1505949295562" (click)="CTS1505949295644($event)">\n\n<ion-item-divider class="class1505949295573">\n\n<ion-icon class="class1505949295586" name="information-circle" item-left>\n\n</ion-icon>\n\n<p class="class1505949295597">\n\nAssistance Mobilit&eacute;\n\n</p>\n\n<ion-icon class="class1505949295625" name="arrow-forward" item-right>\n\n</ion-icon>\n\n</ion-item-divider>\n\n</ion-item>\n\n</ion-list>\n\n</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\pages\PlusPage\pluspage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
], PlusPage);

//# sourceMappingURL=pluspage.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deepLinkConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_c8osdkangular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_c8osdkangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_c8osdkangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_c8ocaf__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_transfer__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_opener__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_streaming_media__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_TabsPage_tabspage__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_NewsPage_newspage__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ProgressPage_progresspage__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_DetailsNewsPage_detailsnewspage__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_DocumentsPage_documentspage__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_AstucesPage_astucespage__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_SondagesPage_sondagespage__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_SettingsPage_settingspage__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_PlusPage_pluspage__ = __webpack_require__(451);
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
    links: [{ component: __WEBPACK_IMPORTED_MODULE_18__pages_TabsPage_tabspage__["a" /* TabsPage */], name: "TabsPage", segment: "TabsPage" }, { component: __WEBPACK_IMPORTED_MODULE_19__pages_NewsPage_newspage__["a" /* NewsPage */], name: "NewsPage", segment: "Page" }, { component: __WEBPACK_IMPORTED_MODULE_20__pages_ProgressPage_progresspage__["a" /* ProgressPage */], name: "ProgressPage", segment: "ProgressPage" }, { component: __WEBPACK_IMPORTED_MODULE_21__pages_DetailsNewsPage_detailsnewspage__["a" /* DetailsNewsPage */], name: "DetailsNewsPage", segment: "DetailsNewsPage" }, { component: __WEBPACK_IMPORTED_MODULE_22__pages_DocumentsPage_documentspage__["a" /* DocumentsPage */], name: "DocumentsPage", segment: "DocumentsPage" }, { component: __WEBPACK_IMPORTED_MODULE_23__pages_AstucesPage_astucespage__["a" /* AstucesPage */], name: "AstucesPage", segment: "AstucesPage" }, { component: __WEBPACK_IMPORTED_MODULE_24__pages_SondagesPage_sondagespage__["a" /* SondagesPage */], name: "SondagesPage", segment: "AstucesPage1" }, { component: __WEBPACK_IMPORTED_MODULE_25__pages_SettingsPage_settingspage__["a" /* SettingsPage */], name: "SettingsPage", segment: "SettingsPage" }, { component: __WEBPACK_IMPORTED_MODULE_26__pages_PlusPage_pluspage__["a" /* PlusPage */], name: "PlusPage", segment: "PlusPage" }]
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_18__pages_TabsPage_tabspage__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_19__pages_NewsPage_newspage__["a" /* NewsPage */], __WEBPACK_IMPORTED_MODULE_20__pages_ProgressPage_progresspage__["a" /* ProgressPage */], __WEBPACK_IMPORTED_MODULE_21__pages_DetailsNewsPage_detailsnewspage__["a" /* DetailsNewsPage */], __WEBPACK_IMPORTED_MODULE_22__pages_DocumentsPage_documentspage__["a" /* DocumentsPage */], __WEBPACK_IMPORTED_MODULE_23__pages_AstucesPage_astucespage__["a" /* AstucesPage */], __WEBPACK_IMPORTED_MODULE_24__pages_SondagesPage_sondagespage__["a" /* SondagesPage */], __WEBPACK_IMPORTED_MODULE_25__pages_SettingsPage_settingspage__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_26__pages_PlusPage_pluspage__["a" /* PlusPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyB0Nl1dX0kEsB5QZaNf6m-tnb1N-U5dpXs'
            }),
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, deepLinkConfig)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicApp"]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_18__pages_TabsPage_tabspage__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_19__pages_NewsPage_newspage__["a" /* NewsPage */], __WEBPACK_IMPORTED_MODULE_20__pages_ProgressPage_progresspage__["a" /* ProgressPage */], __WEBPACK_IMPORTED_MODULE_21__pages_DetailsNewsPage_detailsnewspage__["a" /* DetailsNewsPage */], __WEBPACK_IMPORTED_MODULE_22__pages_DocumentsPage_documentspage__["a" /* DocumentsPage */], __WEBPACK_IMPORTED_MODULE_23__pages_AstucesPage_astucespage__["a" /* AstucesPage */], __WEBPACK_IMPORTED_MODULE_24__pages_SondagesPage_sondagespage__["a" /* SondagesPage */], __WEBPACK_IMPORTED_MODULE_25__pages_SettingsPage_settingspage__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_26__pages_PlusPage_pluspage__["a" /* PlusPage */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9_c8osdkangular__["C8o"],
            __WEBPACK_IMPORTED_MODULE_10_c8ocaf__["C8oRouter"],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_transfer__["b" /* TransferObject */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicErrorHandler"] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 282,
	"./af.js": 282,
	"./ar": 283,
	"./ar-dz": 284,
	"./ar-dz.js": 284,
	"./ar-kw": 285,
	"./ar-kw.js": 285,
	"./ar-ly": 286,
	"./ar-ly.js": 286,
	"./ar-ma": 287,
	"./ar-ma.js": 287,
	"./ar-sa": 288,
	"./ar-sa.js": 288,
	"./ar-tn": 289,
	"./ar-tn.js": 289,
	"./ar.js": 283,
	"./az": 290,
	"./az.js": 290,
	"./be": 291,
	"./be.js": 291,
	"./bg": 292,
	"./bg.js": 292,
	"./bn": 293,
	"./bn.js": 293,
	"./bo": 294,
	"./bo.js": 294,
	"./br": 295,
	"./br.js": 295,
	"./bs": 296,
	"./bs.js": 296,
	"./ca": 297,
	"./ca.js": 297,
	"./cs": 298,
	"./cs.js": 298,
	"./cv": 299,
	"./cv.js": 299,
	"./cy": 300,
	"./cy.js": 300,
	"./da": 301,
	"./da.js": 301,
	"./de": 302,
	"./de-at": 303,
	"./de-at.js": 303,
	"./de-ch": 304,
	"./de-ch.js": 304,
	"./de.js": 302,
	"./dv": 305,
	"./dv.js": 305,
	"./el": 306,
	"./el.js": 306,
	"./en-au": 307,
	"./en-au.js": 307,
	"./en-ca": 308,
	"./en-ca.js": 308,
	"./en-gb": 309,
	"./en-gb.js": 309,
	"./en-ie": 310,
	"./en-ie.js": 310,
	"./en-nz": 311,
	"./en-nz.js": 311,
	"./eo": 312,
	"./eo.js": 312,
	"./es": 313,
	"./es-do": 314,
	"./es-do.js": 314,
	"./es.js": 313,
	"./et": 315,
	"./et.js": 315,
	"./eu": 316,
	"./eu.js": 316,
	"./fa": 317,
	"./fa.js": 317,
	"./fi": 318,
	"./fi.js": 318,
	"./fo": 319,
	"./fo.js": 319,
	"./fr": 320,
	"./fr-ca": 321,
	"./fr-ca.js": 321,
	"./fr-ch": 322,
	"./fr-ch.js": 322,
	"./fr.js": 320,
	"./fy": 323,
	"./fy.js": 323,
	"./gd": 324,
	"./gd.js": 324,
	"./gl": 325,
	"./gl.js": 325,
	"./gom-latn": 326,
	"./gom-latn.js": 326,
	"./he": 327,
	"./he.js": 327,
	"./hi": 328,
	"./hi.js": 328,
	"./hr": 329,
	"./hr.js": 329,
	"./hu": 330,
	"./hu.js": 330,
	"./hy-am": 331,
	"./hy-am.js": 331,
	"./id": 332,
	"./id.js": 332,
	"./is": 333,
	"./is.js": 333,
	"./it": 334,
	"./it.js": 334,
	"./ja": 335,
	"./ja.js": 335,
	"./jv": 336,
	"./jv.js": 336,
	"./ka": 337,
	"./ka.js": 337,
	"./kk": 338,
	"./kk.js": 338,
	"./km": 339,
	"./km.js": 339,
	"./kn": 340,
	"./kn.js": 340,
	"./ko": 341,
	"./ko.js": 341,
	"./ky": 342,
	"./ky.js": 342,
	"./lb": 343,
	"./lb.js": 343,
	"./lo": 344,
	"./lo.js": 344,
	"./lt": 345,
	"./lt.js": 345,
	"./lv": 346,
	"./lv.js": 346,
	"./me": 347,
	"./me.js": 347,
	"./mi": 348,
	"./mi.js": 348,
	"./mk": 349,
	"./mk.js": 349,
	"./ml": 350,
	"./ml.js": 350,
	"./mr": 351,
	"./mr.js": 351,
	"./ms": 352,
	"./ms-my": 353,
	"./ms-my.js": 353,
	"./ms.js": 352,
	"./my": 354,
	"./my.js": 354,
	"./nb": 355,
	"./nb.js": 355,
	"./ne": 356,
	"./ne.js": 356,
	"./nl": 357,
	"./nl-be": 358,
	"./nl-be.js": 358,
	"./nl.js": 357,
	"./nn": 359,
	"./nn.js": 359,
	"./pa-in": 360,
	"./pa-in.js": 360,
	"./pl": 361,
	"./pl.js": 361,
	"./pt": 362,
	"./pt-br": 363,
	"./pt-br.js": 363,
	"./pt.js": 362,
	"./ro": 364,
	"./ro.js": 364,
	"./ru": 365,
	"./ru.js": 365,
	"./sd": 366,
	"./sd.js": 366,
	"./se": 367,
	"./se.js": 367,
	"./si": 368,
	"./si.js": 368,
	"./sk": 369,
	"./sk.js": 369,
	"./sl": 370,
	"./sl.js": 370,
	"./sq": 371,
	"./sq.js": 371,
	"./sr": 372,
	"./sr-cyrl": 373,
	"./sr-cyrl.js": 373,
	"./sr.js": 372,
	"./ss": 374,
	"./ss.js": 374,
	"./sv": 375,
	"./sv.js": 375,
	"./sw": 376,
	"./sw.js": 376,
	"./ta": 377,
	"./ta.js": 377,
	"./te": 378,
	"./te.js": 378,
	"./tet": 379,
	"./tet.js": 379,
	"./th": 380,
	"./th.js": 380,
	"./tl-ph": 381,
	"./tl-ph.js": 381,
	"./tlh": 382,
	"./tlh.js": 382,
	"./tr": 383,
	"./tr.js": 383,
	"./tzl": 384,
	"./tzl.js": 384,
	"./tzm": 385,
	"./tzm-latn": 386,
	"./tzm-latn.js": 386,
	"./tzm.js": 385,
	"./uk": 387,
	"./uk.js": 387,
	"./ur": 388,
	"./ur.js": 388,
	"./uz": 389,
	"./uz-latn": 390,
	"./uz-latn.js": 390,
	"./uz.js": 389,
	"./vi": 391,
	"./vi.js": 391,
	"./x-pseudo": 392,
	"./x-pseudo.js": 392,
	"./yo": 393,
	"./yo.js": 393,
	"./zh-cn": 394,
	"./zh-cn.js": 394,
	"./zh-hk": 395,
	"./zh-hk.js": 395,
	"./zh-tw": 396,
	"./zh-tw.js": 396
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
webpackContext.id = 543;

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c8ocaf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c8ocaf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_c8osdkangular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_c8osdkangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_c8osdkangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TabsPage_tabspage__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_NewsPage_newspage__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ProgressPage_progresspage__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_DetailsNewsPage_detailsnewspage__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_DocumentsPage_documentspage__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_AstucesPage_astucespage__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_SondagesPage_sondagespage__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_SettingsPage_settingspage__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_PlusPage_pluspage__ = __webpack_require__(451);
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
        this.pages = [{ title: "Title for TabsPage", component: __WEBPACK_IMPORTED_MODULE_5__pages_TabsPage_tabspage__["a" /* TabsPage */], includedInAutoMenu: false }, { title: "First page", component: __WEBPACK_IMPORTED_MODULE_6__pages_NewsPage_newspage__["a" /* NewsPage */], includedInAutoMenu: false }, { title: "Title for ProgressPage", component: __WEBPACK_IMPORTED_MODULE_7__pages_ProgressPage_progresspage__["a" /* ProgressPage */], includedInAutoMenu: true }, { title: "Title for DetailsNewsPage", component: __WEBPACK_IMPORTED_MODULE_8__pages_DetailsNewsPage_detailsnewspage__["a" /* DetailsNewsPage */], includedInAutoMenu: false }, { title: "Title for DocumentsPage", component: __WEBPACK_IMPORTED_MODULE_9__pages_DocumentsPage_documentspage__["a" /* DocumentsPage */], includedInAutoMenu: true }, { title: "Title for AstucesPage", component: __WEBPACK_IMPORTED_MODULE_10__pages_AstucesPage_astucespage__["a" /* AstucesPage */], includedInAutoMenu: true }, { title: "Title for AstucesPage1", component: __WEBPACK_IMPORTED_MODULE_11__pages_SondagesPage_sondagespage__["a" /* SondagesPage */], includedInAutoMenu: true }, { title: "Title for SettingsPage", component: __WEBPACK_IMPORTED_MODULE_12__pages_SettingsPage_settingspage__["a" /* SettingsPage */], includedInAutoMenu: true }, { title: "Title for PlusPage", component: __WEBPACK_IMPORTED_MODULE_13__pages_PlusPage_pluspage__["a" /* PlusPage */], includedInAutoMenu: true }];
        this.router.pagesArray = this.pages;
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
            .setLogLevelLocal(__WEBPACK_IMPORTED_MODULE_4_c8osdkangular__["C8oLogLevel"].TRACE)
            .setTimeout(120000);
        //.setEndPoint("https://mb.convertigo.net/cems/projects/MonMobile");
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
                _this.router.sharedObject = { current: 0, total: 0 };
                //Testing connection Type
                _this.router.routerLogLevel = __WEBPACK_IMPORTED_MODULE_4_c8osdkangular__["C8oLogLevel"].TRACE;
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
                        console.log(progress.toString());
                        _this.c8o.log.info(progress.toString());
                        // share progress status with another page (ProgressPage)
                        _this.router.sharedObject = { current: progress.current, total: progress.total };
                        //this.router.storeResponseForView("Page", "fs://monmob.sync#progress", progress, null, null, null);
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
                    //this.nav.setRoot(TabsPage, null, null, null);
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\a\MonMobile\_private\ionic\src\app\app.html"*/'<ion-menu class="class1500890597895" swipeEnabled="false" id="Menu" [content]="content">\n\n<ion-header class="class1500890727582">\n\n<ion-toolbar class="class1500890731485" color="sncf">\n\n<ion-title class="class1500890752959">\n\nPlus\n\n</ion-title>\n\n</ion-toolbar>\n\n</ion-header>\n\n<ion-content class="class1500890742326" padding>\n\n<ion-list class="class1501343197007" inset no-lines>\n\n<ion-item class="class1505938542677" (click)="CTS1505939251471($event)">\n\n<ion-item-divider class="class1505938929242">\n\n<ion-icon class="class1505938833032" name="settings" item-left>\n\n</ion-icon>\n\n<p class="class1505939173443">\n\nParam&eacute;tres\n\n</p>\n\n<ion-icon class="class1505939093736" name="arrow-forward" item-right>\n\n</ion-icon>\n\n</ion-item-divider>\n\n</ion-item>\n\n</ion-list>\n\n</ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\a\MonMobile\_private\ionic\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4_c8osdkangular__["C8o"], __WEBPACK_IMPORTED_MODULE_3_c8ocaf__["C8oRouter"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[452]);
//# sourceMappingURL=main.js.map