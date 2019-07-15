const SP = ' ';
class Drone {
    constructor(id) {
        this._id = id;      // underscore usually means private   }
    }

    // getter can modify or validate the property that is being retrieved
    get id() {
        this._id = this._id.toLowerCase();
        if (this._id.includes('x')) throw 'Cannot contain an X';
        return this._id;
    }

    // setter allows assigning a new value to the property
    set id(value) {
        this._id = value;
    }
}

let drone = new Drone('A123');
drone.id = 'B456Y';
console.log('drone id: ' + drone.id);
