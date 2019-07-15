// Inheritance and Code Organization
// Inheritance - Classes deriving functionality from other classes
// -- can inherit constructors, properties, and methods. 

const SP = ' ';
// Base class
class Vehicle {
    start() {
        console.log('starting vehicle');
    }
    static getCompanyName() {
        console.log('My Company');
    }
}

// Derived class
class Drone extends Vehicle {
    start() {
        console.log('starting drone');
    }
}

// Derived class
class Car extends Vehicle {
    start() {
        super.start();
        console.log('starting car');
    }
    static getCompanyName() {
        super.getCompanyName();
        console.log('My Other Company');
    }
}

let c = new Car();
c.start();

// A static method on the base class is available to the derived class.
Car.getCompanyName();

