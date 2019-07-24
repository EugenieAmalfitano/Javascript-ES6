import { BaseElement } from './base-element.js';

export class Paragraph extends BaseElement {
    constructor(textString) {
        super();
        this.textString = textString;
    }

    set fontFamily(fontFamily) {
        this._fontFamily = fontFamily;
    }

    set fontSize(fontSize) {
        this._fontSize = fontSize;
    }

    set fontColor(fontColor) {
        this._fontColor = fontColor;
    }

    set textAlign(textAlign) {
        this._textAlign = textAlign;
    }

    set isAddBreak(isAddBreak) {
        this.brTag = ``;
        this._isExtraSpace = isAddBreak;
        if (this._isExtraSpace == true) {
            this.brTag = `<br><br>`;
        }
    }

    buildStyleString() {
        this._styleString = `font-family:${this._fontFamily}; font-size:${this._fontSize}px; color:${this._fontColor}; text-align:${this._textAlign};`;
    }

    getElementString() {
        return `
             <p style="${this._styleString}">${this.textString}</p>
             ${this.brTag}             
        `
    }
}