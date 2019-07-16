// Creating a Data Service Class
import { fleet } from './fleet-data.js';
import { FleetDataService } from '../services/fleet-data-service.js'
import { DataError } from '../services/data-error.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);

for (let car of dataService.cars)
    console.log(car);

for (let drone of dataService.drones)
    console.log(drone);

for (let e of dataService.errors) {
    console.log(e.message, e.data);
}





