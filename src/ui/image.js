import { BaseElement } from './base-element.js';

export class Image extends BaseElement {
    constructor(fileName, imageWidth) {
        super();
        this.fileName = fileName;
        this.imageWidth = imageWidth;
    }

    getElementString() {
        return `
             <img src = "${this.fileName}" style="width: ${this.imageWidth};" />
             <br/>
        `
    }

}