import {
    Component,
    Inject,
    ApplicationRef,
    ViewEncapsulation
} from '@angular/core';

import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control} from '@angular/common';



@Component({
    selector: 'ck-book',
    providers: [],
    directives: [FORM_DIRECTIVES],
    pipes: [],
    template: require('./book.html'),
    styles: [`
        h3 {
           color: red
        }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class CkBookPage {
    private disconnect: Function;
    private unsubscribe: Function;

    private form: ControlGroup;
    private amon: Control;
    private category: Control;
    private books = [];

    constructor(
        @Inject('ngRedux') private ngRedux,
        private applicationRef: ApplicationRef,
        private builder: FormBuilder) {
    }

    add(event) {
        console.log(this.form.value);        
        let _value = Object.assign({}, this.form.value);
        _value.date = new Date();
        this.books.push(_value);
        
        event.preventDefault();
    }

    ngOnInit() {

        this.amon = new Control("", Validators.required);
        this.category = new Control("", Validators.required);

        this.form = this.builder.group({
            category: this.category,
            amon: this.amon
        });


        this.disconnect = this.ngRedux.connect(
            this.mapStateToThis,
            this.mapDispatchToThis)(this);

        this.unsubscribe = this.ngRedux.subscribe(() => {
            this.applicationRef.tick();
        });
    }

    ngOnDestroy() {
        this.unsubscribe();
        this.disconnect();
    }

    mapStateToThis(state) {
        return {

        };
    }

    mapDispatchToThis(dispatch) {
        return {
        };
    }

};
