import { Page } from './framework/page.js';
import { Image } from './ui/image.js';
import { Button } from './ui/button.js';
import { application } from './app.js';
import { Paragraph } from './ui/paragraph.js';
import { DemoSpecialQueries } from './services/fleet-queries.js';

export class FleetPage extends Page {

    constructor() {
        super('Fleet');
    }

    createElement() {
        super.createElement();
        let i = new Image('../images/drone.jpg', '620px');
        i.appendToElement(this.element);

        // add paragraph just for spacing.
        let p = new Paragraph('');
        p.appendToElement(this.element);

        let styleString = 'width: 100px; height: 40px; font-size: 12px; margin: 10px;';

        let b = new Button('Explore');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Explore'));

        b = new Button('Cars');
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
                    <h3>Fleet</h3>
                </div>

        `;
    }
}