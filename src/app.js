class Drone {
    constructor(id, name) {
        this.id = id;       // instance properties
        this.name = name;   // cannot be accessed before object is instantiated
    }
}

let drone = new Drone('A123', 'Flyer'); // creates new instance of the drone
console.log('id: ' + drone['id'] + ', name: ' + drone['name']);



