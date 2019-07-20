//For some reason, the following line is not needed to access jquery because I have TypeScript installed
//import $ from 'jquery';
export class BaseElement {

    constructor() {
        this.element = null;  // jQuery object
    }

    appendToElement(el) {
        this.createElement();
        el.append(this.element);
        //this.enableJS(); - this does not work in my environment. 
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString() {
        throw 'Please override getElementString() in BaseElement';
    }

    enableJS() {
        componentHandler.upgradeElement(this.element[0]);
    }
}

