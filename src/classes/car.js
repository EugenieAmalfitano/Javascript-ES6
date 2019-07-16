// Derived class
import { Vehicle } from './vehicle.js'
export class Car extends Vehicle {
    start() {
        super.start();
        console.log('starting car');
    }
    static getCompanyName() {
        super.getCompanyName();
        console.log('My Other Company');
    }
}