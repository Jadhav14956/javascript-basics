// traditional example of inheriting employee class from maanager

function Vehicle(){
    this.name = 'Vehicle';
}

Vehicle.prototype = {
    drive : function(){
        return this.name + ' drives forward';
    },
    stop : function(){
        return this.name + ' stops';
    }
}

function Truck(name){
    this.name = name;
}

Truck.prototype = new Vehicle();
Truck.prototype.constructor = Truck;

Truck.prototype.drive = function(){
    return Vehicle.prototype.drive.apply(this) + ' through field';
}

// ***************************************************  //

function Animal(){
    this.name = 'Animal';
    this.toString() = function(){
        return 'My name is ' + this.name;
    }
}

function Canine(){
    this.name = 'canine';
}

function Wolf(){
    return this.name = 'Wolf';
}

Canine.prototype = new Animal();
Canine.prototype.constructor = Canine;

Wolf.prototype = new Canine();
Wolf.prototype.constructor = Wolf;

var arcticWolf = new Wolf();
console.log(arcticWolf.toString()); // this will give wolf

Animal.prototype.sound = 'Grrrr';
Animal.prototype.makeSound = function(){
    return this.name + ' says ' + this.sound;
}

console.log(arcticWolf.makeSound()); // makes sound "Wolf says Grrrr'.

// ***************************************************  //

// doing things in ES6

class AnimalX {
    constructor(name){
        this.name = name;
    }

    toString(){
        return 'Animal is name ' + this.name;
    }

    static getAnimal(){
        return new Animal('No Name');
    }

}

class Dog extends Animal {
    constructor(name, owner){
        super(name);
        this.owner = owner;
    }

    toString(){
        return super.toString() + ' Dog is named ' + this.name;
    }
}

