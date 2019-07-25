import { Page } from './framework/page.js';
import { Image } from './ui/image.js';
import { Button } from './ui/button.js';
import { application } from './app.js';
import { Paragraph } from './ui/paragraph.js';

export class HomePage extends Page {

    constructor() {
        super('Home');
    }

    createElement() {
        super.createElement();
        let p = new Paragraph("Eugenie, Deb, and Claire are working together to build cool things.");
        p.fontColor = 'black';
        p.fontFamily = 'verdana';
        p.fontSize = '18';
        p.textAlign = 'left';
        p.isAddBreak = true;
        p.buildStyleString();
        p.appendToElement(this.element);

        let i = new Image('../images/eugenie.gif', '300px');
        i.appendToElement(this.element);
        i = new Image('../images/4411641.gif.png', '300px');
        i.appendToElement(this.element);

        p.textString = "That\'s why Eugenie is doing the happy dance!";
        p.fontColor = 'blue';
        p.buildStyleString();
        p.appendToElement(this.element);
        p.isAddBreak = false;

        let styleString = 'font-size: 12px; margin: 10px;';
        let b = new Button("Eugenie's Github");
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => window.open('https://github.com/EugenieAmalfitano?tab=repositories', '_blank'));

        b = new Button("Debbie's Github");
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => window.open('https://github.com/debbiev', '_blank'));

        b = new Button("Claire's Github");
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => window.open('https://github.com/polypodioides', '_blank'));
    }

    getElementString() {
        return '<div style="text-align: left; margin: 20px"></div>';
    }
}