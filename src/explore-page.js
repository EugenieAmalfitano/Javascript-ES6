import { Page } from './framework/page.js';
import { Image } from './ui/image.js';
import { Paragraph } from './ui/paragraph.js';
import {application} from './app.js';

export class ExplorePage extends Page {
    
    constructor() {
        super('Explore');
        this.explorePageText = 'Text of the Explore Page.';
    }
    
    createElement() {
        super.createElement();  
        let i = new Image('../images/eaa.gif','300px');
        i.appendToElement(this.element);
        let b = new Paragraph('New Paragraph Element Here.');
        b.appendToElement(this.element);
    }
    
    getElementString() {
        return `<div style="margin: 20px;"><h3>Explore</h3>
                <p>${this.explorePageText}</p>
                </div>  
                `;
    }
}