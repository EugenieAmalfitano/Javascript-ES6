import { Page } from './framework/page.js';
import { Image } from './ui/image.js';
import { Button } from './ui/button.js';
import { application } from './app.js';
//import { ApplicationBase } from './framework/application-base.js';
import { Paragraph } from './ui/paragraph.js';
import { DemoSpecialQueries } from './services/fleet-queries.js';
import { CarsPage } from './cars-page.js';
import { DronesPage } from './drones-page.js';
import { MapPage } from './map-page.js';
import { ExplorePage } from './explore-page.js';

export class FleetPage extends Page {

    constructor(appName) {
        super(appName);
        this.appName = appName;
    }
   
    createElement() {
        super.createElement();

    

        let i = new Image('../images/drone.jpg', '620px');
        i.appendToElement(this.element);

        // add paragraph just for spacing.
        let p = new Paragraph('');
        p.appendToElement(this.element);

        let styleString = 'width: 100px; height: 40px; font-size: 12px; margin: 10px;';

        let b = new Button('Cars');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Cars')); 
  
        b = new Button('Drones');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Drones'));

        b = new Button('Map');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Map'));

        // Demo special queries that log to console
        let demo = new DemoSpecialQueries();
        demo.demoSpecialQueries();
        demo.showDataErrorLog();
    }

    getElementString() {
        return `<div style="text-align: left; margin: 20px">
                    <h3>${this.appName}</h3>
                    <p>The ideas and most of the techniques for this Fleet App came from
                    <a href="https://www.pluralsight.com/courses/javascript-es6-object-oriented-programming"  target="_blank">Mark Zamoyta's PluralSight Class</a>
                </div>

        `;
    }
}