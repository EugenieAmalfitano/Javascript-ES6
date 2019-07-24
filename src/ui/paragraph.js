import { BaseElement } from './base-element.js';

export class Paragraph extends BaseElement {
    constructor(textString,extraBreak) {
        super();
        this.textString = textString;
    }

    getElementString() {
        return `
             <p>${this.textString}</p>
             <br/>
        `
    }

}