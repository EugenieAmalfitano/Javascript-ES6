// Creating a Data Service Class
import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { fleet } from './fleet-data.js';
import { FleetDataService } from '../services/fleet-data-service.js'
//For some reason, the following line is not needed to access jquery because I have TypeScript installed
//import $ from 'jquery'; 

import { Button } from '../UI/button.js';

let b = new Button('Click me');
b.appendToElement($('body'));

const NewLine = '\r\n';
let dataService = new FleetDataService();
dataService.loadData(fleet);

let car = dataService.getCarByLicense('AT9900');
console.log('Car retrieved by License AT9900: ')
console.log(car);

let cars = dataService.getCarsSortedByLicense();
console.log(NewLine + 'Sorted car licenses: ');
for (let car of cars)
    console.log(car.license);

let filter = 'U';
cars = dataService.filterCarsByMake(filter);
console.log(NewLine + 'Cars containing the filter: ' + filter);
for (let car of cars)
    console.log(car.make);

for (let e of dataService.errors) {
    console.log(e.message, e.data);
}





