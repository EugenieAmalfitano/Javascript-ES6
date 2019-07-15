// Inheritance and Code Organization
// Inheritance - Classes deriving functionality from other classes
// -- can inherit constructors, properties, and methods. 

const SP = ' ';
// Base class
class Vehicle {
    constructor(licenseNum) {
        this.gpsEnabled = true;
    }
}

// Derived class
class Drone extends Vehicle {
    constructor() {
        super();
        console.log('constructing drone');
    }
}

// Derived class
class Car extends Vehicle {
    constructor() {
        super();
        this.gpsEnabled = false;
        console.log('constructing car');
    }
}

// It helps to know whether property belongs to base class or derived class
// The derived class can change the value of the property in the base class
let c = new Car('A123');
console.log('GPS ENABLED:' + SP + c.gpsEnabled);

