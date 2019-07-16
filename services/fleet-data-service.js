import { Car } from '../src/classes/car.js';
import { Drone } from '../src/classes/drone.js';

export class FleetDataService {
    constructor() {
        console.log('in fleetDataService');
        this.cars = [];
        this.drones = [];
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case 'car':
                    this.cars.push(data);
                    break;
                case 'drone':
                    this.cars.push(data);
                    break;
            }
        }
    }
}