import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { fleet } from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';
import { Button } from './ui/button.js';
import { Image } from './ui/image.js';
import { TitleBar } from './ui/title-bar.js';

import { ApplicationBase } from './framework/application-base.js';
import { HomePage } from './home-page.js';
import { FleetPage } from './fleet-page.js';
import { CarsPage } from './cars-page.js';
import { DronesPage } from './drones-page.js';
import { ExplorePage } from './explore-page.js';
import { MapPage } from './map-page.js';

export class App extends ApplicationBase {

    constructor() {
        super('Indialantic Tech Collaborative');

        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Fleet Sample App', new FleetPage('Fleet Sample App'));
        this.addRoute('Cars', new CarsPage('     Cars'));
        this.addRoute('Drones', new DronesPage('     Drones'));
        this.addRoute('Map', new MapPage('     Map'));
        this.addRoute('Explore', new ExplorePage());
    }
}
export let application = new App();
application.show($('body'));
