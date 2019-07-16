import { Car } from '../src/classes/car.js';
import { Drone } from '../src/classes/drone.js';
import { DataError } from './data-error.js';

export class FleetDataService {
    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case 'car':
                    if (this.validateCarData(data)) {
                        let car = this.loadCar(data);
                        this.cars.push(car);
                        break;
                    }
                    else {
                        let e = new DataError('CAR: Contained invalid data:', data);
                        this.errors.push(e);
                        break;
                    }

                case 'drone':
                    if (this.validateDroneData(data)) {
                        let drone = this.loadDrone(data);
                        this.drones.push(drone);
                        break;
                    }
                    else {
                        let e = new DataError('DRONE: Contained invalid data: ', data);
                        this.errors.push(e);
                        break;
                    }

                default:
                    let e = new DataError('VEHICLE: Invalid type: ', data.type);
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
            this.errors.push(new DataError('CAR: Load error', car));
        }
        return null;
    }

    loadDrone(drone) {
        try {
            let d = new Drone(drone.license, drone.model, drone.latLong);
            d.airTimeHours = drone.airTimeHours;
            d.base = drone.base;
            return d;
        } catch (error) {
            this.errors.push(new DataError('DRONE: Load error', drone));
        }
        return null;
    }

    validateCarData(car) {
        let requiredProps = 'license model latLong miles make'.split(' ');
        let hasErrors = false;
        for (let field of requiredProps) {
            if (!car[field]) {
                this.errors.push(new DataError(`CAR: Missing field:  ${field} `, ''))
                hasErrors = true;
            }
        }
        if (Number.isNaN(Number.parseFloat(car.miles))) {
            this.errors.push(new DataError('CAR: Miles must be numeric: ', car.miles))
            hasErrors = true;
        }
        return !hasErrors;
    }
    validateDroneData(drone) {
        let requiredProps = 'license model latLong airTimeHours base'.split(' ');
        let hasErrors = false;
        for (let field of requiredProps) {
            if (!drone[field]) {
                this.errors.push(new DataError(`DRONE: Missing field: ${field} `, ''))
                hasErrors = true;
            }
        }
        if (Number.isNaN(Number.parseFloat(drone.airTimeHours))) {
            this.errors.push(new DataError('DRONE: Air time hours must be a number: ', drone.airTimeHours))
            hasErrors = true;
        }
        return !hasErrors;
    }
}