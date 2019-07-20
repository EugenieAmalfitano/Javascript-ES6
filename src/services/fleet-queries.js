import { FleetDataService } from './fleet-data-service.js';
import { fleet } from '../fleet-data.js';
export class DemoSpecialQueries {
    constructor() {
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);
    }

    demoSpecialQueries() {
        // This section is just to demo getCarByLicense, getCarsSortedByLicense, and filterCarsByMake, and to show the error log if there are data service errors
        const NewLine = '\r\n';

        let car = this.dataService.getCarByLicense('AT9900');

        console.log('Car retrieved by License AT9900: ')
        console.log(car);

        let cars = this.dataService.getCarsSortedByLicense();

        console.log(NewLine + 'Sorted car licenses: ');
        for (let car of cars)
            console.log(car.license);

        let filter = 'U';
        cars = this.dataService.filterCarsByMake(filter);

        console.log(NewLine + 'Cars containing the filter: ' + filter);
        for (let car of cars)
            console.log(car.make);
    }

    showDataErrorLog() {
        for (let e of this.dataService.errors) {
            console.log(e.message, e.data);
        }
    }
}


