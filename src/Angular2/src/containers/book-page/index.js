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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var CkBookPage = (function () {
    function CkBookPage(ngRedux, applicationRef, builder) {
        this.ngRedux = ngRedux;
        this.applicationRef = applicationRef;
        this.builder = builder;
        this.books = [];
    }
    CkBookPage.prototype.add = function (event) {
        console.log(this.form.value);
        var _value = Object.assign({}, this.form.value);
        _value.date = new Date();
        this.books.push(_value);
        event.preventDefault();
    };
    CkBookPage.prototype.ngOnInit = function () {
        var _this = this;
        this.amon = new common_1.Control("", common_1.Validators.required);
        this.category = new common_1.Control("", common_1.Validators.required);
        this.form = this.builder.group({
            category: this.category,
            amon: this.amon
        });
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
            directives: [common_1.FORM_DIRECTIVES],
            pipes: [],
            template: require('./book.html'),
            styles: ["\n        h3 {\n           color: red\n        }\n    "],
            encapsulation: core_1.ViewEncapsulation.Emulated
        }),
        __param(0, core_1.Inject('ngRedux')), 
        __metadata('design:paramtypes', [Object, core_1.ApplicationRef, common_1.FormBuilder])
    ], CkBookPage);
    return CkBookPage;
}());
exports.CkBookPage = CkBookPage;
;
//# sourceMappingURL=index.js.map