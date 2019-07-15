// Inheritance and Code Organization
// Inheritance - Classes deriving functionality from other classes
// -- can inherit constructors, properties, and methods. 

const SP = ' ';

// Vehicle will not be instatiated directly, as with most inherited classes.
class Vehicle {
    constructor(licenseNum) {
        console.log('constructing vehicle: ' + licenseNum);
        this.licenseNum = licenseNum;
    }
}

class Drone extends Vehicle {
    constructor(licenseNum) {
        super(licenseNum); // ensures the constructor for VEHICLE is executing first.
        // even if VEHICLE does not have a constructor, it is implied.
        console.log('constructing drone');
    }
}

class Car extends Vehicle {
    constructor(licenseNum) {
        super(licenseNum); // ensures the constructor for VEHICLE is executing first.
        // even if VEHICLE does not have a constructor, it is implied.
        console.log('constructing car');
    }

}

let c = new Car('A123');
// license number is available to all vehicles
console.log(c.licenseNum);

let d = new Drone('B456');
console.log(d.licenseNum);
