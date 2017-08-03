// ///alert('Hello World');

// // var human = {
// //     species: "human",
// //     saySpecies: function() {
// //         console.log(this.species)
// //     },
// //     sayName: function() {
// //         console.log(this.name);
// //     }
// // };

// // var musician = Object.create(human);
// // musician.playInstrument = function() {
// //     console.log('plays ....... ' + this);
// // };

// // creating objects using constructor functions

// function createEmployee(fname, lname, _gender, _designation) {
//     var newObject = {};

//     newObject.firstName = fname;
//     newObject.lastName = lname;
//     newObject.gender = _gender;
//     newObject.designation = _designation;
//     return newObject;
// }

// var employee1 = createEmployee('Sunil', 'Jadhav', 'male',
//     'Janiter');

// var employee2 = createEmployee('Dugi', 'Shanrma', 'male',
//     'Junior Softwrae developer');

// var employee3 = createEmployee('Harshit', 'Singh', 'male',
//     'Business Man');

// // to get rid of extra object in constructor function.

// function createEmployee2(fname, lname, _gender, _designation) {
//     this.firstName = fname;
//     this.lastName = lname;
//     this.gender = _gender;
//     this.designation = _designation;
// }

// var employee3 = new createEmployee2('Lijo', 'zac', 'male',
//     'Master');

// var employee4 = new createEmployee2('Thomas', 'Raphle', 'male',
//     'Fucker');

// //alert('EMploye 4 : ' + JSON.stringify( employee4));

// // -------------------------------------------------------------
// // INHERITANCE : 
// // 1. from a single class
//     // 3 point.
// function Shape(){
//     this.y = 0;
//     this.x = 0;
//     this.name = 'sunil';
// } 

// Shape.prototype.move = function(x,y){
//     this.x += 1
//     this.y += 1;
// }

// var shape = new Shape();
// //alert('Shape : ' + JSON.stringify(shape));

// function Reactangle(){
//     Shape.call(this);    // <<<<<<<<<<<<<< 1
//     this.man = 'kirit';
// }

// // <<<<<<<<<<<<<< 2
// Reactangle.prototype = Object.create(Shape.prototype);
// // <<<<<<<<<<<<<< 3
// Reactangle.prototype.constructor = Reactangle;

// var rect = new Reactangle();
// rect.move();
// //alert('Reactangle : ' + JSON.stringify(rect));

// // 2. Multiple Inheritance
//     // using mixins
//     // Class 1


// function superClass(){
//     this.scProp1 = 0;
//     this.scProp2 = 0;
// }
//     // class 2
// function otherSuperClass(){
//     this.oscProp1 = 0;
//     this.oscProp2 = 0;
// }

// function subClass(){
//     superClass.call(this);
//     otherSuperClass.call(this);
// }

// // inherit one class
// subClass.prototype = Object.create(superClass.prototype);

// // mixin another
// Object.assign(subClass.prototype, otherSuperClass.prototype);


// // example : 
function Perosn(name, age) {
    this.name = name,
        this.age = age
    alert('In Person class');
}

function Male(name, age) {
    Person.call(this, name, age);
    alert('In Male class');
}

Male.prototype = Object.create(Perosn.prototype);

Male.prototype.constructor = Male;
//alert('Priniting Press');
var sunil = new Male('sunil', 28);

//alert(JSON.stringify(sunil));

//alert('Priniting Press');


// --------------------------------------------------------------------------------------- //

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }


//     getDetails(){
//         return 'Name : ' + this.name + ', Age : ' + this.age;
//     }

// }

// var sunil = new Person('sunil',28);

// var keys = Object.keys(sunil);

// alert('Keys : ' + keys)