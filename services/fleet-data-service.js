import { Car } from '../src/classes/car.js';
import { Drone } from '../src/classes/drone.js';
import { DataError } from './data-error.js';

export class FleetDataService {
    constructor() {
        console.log('in fleetDataService');
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case 'car':
                    let car = this.loadCar(data);
                    this.cars.push(car);
                    break;
                case 'drone':
                    let drone = this.loadDrone(data);
                    this.drones.push(drone);
                    break;
                default:
                    let e = new DataError('Invalid vehicle type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }

    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        } catch (error) {
            this.errors.push(new DataError('error loading car', car));
        }
        return null;
    }

    loadDrone(drone) {
        let d = new Drone(drone.license, drone.model, drone.latLong);
        d.airTimeHours = drone.airTimeHours;
        d.base = drone.base;
        return d;
    }
}