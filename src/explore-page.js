import { Page } from './framework/page.js';
import { Image } from './ui/image.js';
import { Paragraph } from './ui/paragraph.js';
import {application} from './app.js';

export class ExplorePage extends Page {
    
    constructor() {
        super('Explore');
        this.explorePageText = '';
        /* this.explorePageText = 'text here' //Another way to add text, but can't set style properties; */
    }
    
    createElement() {
        super.createElement();  
        let p = new Paragraph("Eugenie and Deb are working together to build cool things.");
        p.fontColor = 'black';
        p.fontFamily = 'verdana';
        p.fontSize = '18';
        p.textAlign = 'left';
        p.isAddBreak = true;
        p.buildStyleString();
        p.appendToElement(this.element);
 
        let i = new Image('../images/eaa.gif','300px');
        i.appendToElement(this.element);
        i = new Image('../images/4411641.gif.png', '300px');
        i.appendToElement(this.element);

        p.textString="That\'s why Eugenie is doing the happy dance!";
        p.fontColor = 'blue';
        p.buildStyleString();
        p.appendToElement(this.element);
    }
    
    getElementString() {
        return `<div style="margin: 20px;"><h3>Explore</h3>
                <p>${this.explorePageText}</p>
                </div>  
                `;
    }
}