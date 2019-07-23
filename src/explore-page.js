import { Page } from './framework/page.js';
import { Image } from './ui/image.js';
import {application} from './app.js';

export class ExplorePage extends Page {
    
    constructor() {
        super('Explore');
        this.bodyText = 'Eugenie was here!';
    }
    
    createElement() {
        super.createElement();  
        let i = new Image('../images/eaa.gif','300px');
        i.appendToElement(this.element);
    }
    
    getElementString() {
        return `<div style="margin: 20px;"><h3>Explore</h3>
                <p>${this.bodyText}</p>
                </div>  
                `;
    }
}