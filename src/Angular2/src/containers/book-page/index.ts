import {
    Component,
    ViewEncapsulation,
    Inject,
    ApplicationRef
} from 'angular2/core';

@Component({
    selector: 'ck-book',
    providers: [],
    directives: [],
    pipes: [],
    template: require('./book.html')
})
export class CkBookPage {
    private disconnect: Function;
    private unsubscribe: Function;

    private items: any;
    private task: any;
    private currentFilter: string = "";

    constructor(
        @Inject('ngRedux') private ngRedux,
        private applicationRef: ApplicationRef) {
    }


    ngOnInit() {
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
