const SP = ' ';
class Drone {
    constructor(id, name) {
        this.id = id;       // instance properties
        this.name = name;   // cannot be accessed before object is instantiated
    }
}
Drone.maxHeight = 2000; // Static Property of the Drone class. 

let drone = new Drone('A123', 'Flyer'); // creates new instance of the drone
console.log('id: ' + drone['id'] + ', name: ' + drone['name']);

let drone2 = new Drone('B456', 'Twirl');
console.log(drone.id + SP + drone2.id + SP + drone.maxHeight) // maxHeight is undefined because it's a static property of the class, not the instance.



