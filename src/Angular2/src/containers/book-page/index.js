"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var CkBookPage = (function () {
    function CkBookPage(ngRedux, applicationRef) {
        this.ngRedux = ngRedux;
        this.applicationRef = applicationRef;
        this.currentFilter = "";
    }
    CkBookPage.prototype.ngOnInit = function () {
        var _this = this;
        this.disconnect = this.ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);
        this.unsubscribe = this.ngRedux.subscribe(function () {
            _this.applicationRef.tick();
        });
    };
    CkBookPage.prototype.ngOnDestroy = function () {
        this.unsubscribe();
        this.disconnect();
    };
    CkBookPage.prototype.mapStateToThis = function (state) {
        return {};
    };
    CkBookPage.prototype.mapDispatchToThis = function (dispatch) {
        return {};
    };
    CkBookPage = __decorate([
        core_1.Component({
            selector: 'ck-book',
            providers: [],
            directives: [],
            pipes: [],
            template: require('./book.html')
        }),
        __param(0, core_1.Inject('ngRedux')), 
        __metadata('design:paramtypes', [Object, core_1.ApplicationRef])
    ], CkBookPage);
    return CkBookPage;
}());
exports.CkBookPage = CkBookPage;
;
//# sourceMappingURL=index.js.map