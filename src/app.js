// Inheritance and Code Organization
// Inheritance - Classes deriving functionality from other classes
// -- can inherit constructors, properties, and methods. 

const SP = ' ';

// Vehicle will not be instatiated directly, as with most inherited classes.
class Vehicle {

}

class Drone extends Vehicle {

}

class Car extends Vehicle {

}

let c = new Car();

// when we insantiate a class, it's an instance of any inherited class as well as object
console.log(c instanceof Car)
console.log(c instanceof Vehicle)
console.log(c instanceof Object)