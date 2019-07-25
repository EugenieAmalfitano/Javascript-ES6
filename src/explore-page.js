import { Page } from './framework/page.js';
import { Image } from './ui/image.js';
import { Paragraph } from './ui/paragraph.js';
import { Button } from './ui/button.js';
import {application} from './app.js';

export class ExplorePage extends Page {
    
    constructor() {
        super('Explore');
        this.explorePageText = 'Under Construction';

    }
    
    createElement() {
        super.createElement();   
    }
    
    getElementString() {
        return `<div style="margin: 20px;"><h3>Explore</h3>
                <h4>${this.explorePageText}</h4>
                </div>  
                `;
    }
}