const SP = ' ';
class Drone {
    constructor(id, name) {
        this.id = id;       // instance properties
        this.name = name;   // cannot be accessed before object is instantiated
    }
    static getCompany() {
        console.log('in getCompany');
    }
    fly() {
        console.log('Drone ' + this.id + ' is flying'); // you have to keep 'this' or it won't work.
    }
}

let drone = new Drone('A123', 'Flyer');
let drone2 = new Drone('B456', 'Twirl');
drone.fly();
drone2.fly();
Drone.getCompany(); // static method only works on the class
drone.getCompany(); // static method does not work on the instance.
