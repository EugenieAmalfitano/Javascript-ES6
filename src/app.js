// Inheritance and Code Organization
// Inheritance - Classes deriving functionality from other classes
// -- can inherit constructors, properties, and methods. 

const SP = ' ';
// Base class
class Vehicle {
    start() {
        console.log('starting vehicle');
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
}

let c = new Car();
c.start();

