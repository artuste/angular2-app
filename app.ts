/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';


/*
 If IDE compiler doesn't work

 terminal:
 tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts
 */

@Component({
    selector: 'my-app'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})

// Component controller
class MyAppComponent {
    name: string;

    constructor() {
        this.name = 'Alice';
    }
}

bootstrap(MyAppComponent);