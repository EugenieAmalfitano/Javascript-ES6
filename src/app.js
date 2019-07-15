// SUMMARY

/* Classes and Objects
Insantiating a class, it becomes an bject
Constuctor - code that automatically runs when you instantiate the object. 
Properties - pieces of informationthat belong to an instance
Methods - functions that belong to an instance
Static Properties and Methods - access these by using class name itself. 
Getters and Setters - let us execute code when we get or set a property; for example, validate or log. 
 */

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
