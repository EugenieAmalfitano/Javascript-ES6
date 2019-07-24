import { BaseElement } from './base-element.js';

export class Paragraph extends BaseElement {
    constructor(textString,styleString,extraBreak) {
        super();
        this.textString = textString;
        this.styleString = '';
        this.extraBreak = false;
    }

    getElementString() {
        return `
             <p style="${this.styleString}">${this.textString}</p>
             <br/>
        `
    }
    setStyleString(style) {
        this.styleString = style;
    }
}