// understanding Prototype

function person() {
    this.age = 0;
}

// NOTE : prototype from constructor function is refered as "function.prototype";
//        But prototype for variable from constructor function is refered by __proto__

var fnObj = new Person();

// fnObj.age >> 0 from prototype not from fnObj
// but if you say fnObj.age = 28;
// Now fnObj.age is 28 but fnObj.prototype.age is still 0;

// Note so when ever you look for property of object, javaqscript will go toobject structure
//		 if that object has that property it will straight away return that 
// 		 else it will go to the prototype skeleton and check for property there.


// *********************** Prototype look up ***********************
function Employee(name) {
    this.name = name
}

var Jim = new Employee('Jim');
var Pam = new Employee('Pam');

// # Jim.__proto__ == Pam.__proto__
Jim.play = function() {
    console.log(this.name + ' plays football');
}

Jim.play(); // gives >> "Jim plays football"
Pam.play(); // gives undefind error  

// Play function is added to Jim's Object defination, not in underlying prototype


emp2.__proto__.say = funnction() {
    console.log(this.name + ' is saying some shit');
}

// OR

Employee.prototype.say = funnction() {
    console.log(this.name + ' is saying some shit');
}

// will add say function to the defination of Employee and every body can use it.

// NOTE : adding functions to prototype can reduce copies of function that is added to every object created using constructor function.

// *********************** Prototype look up ***********************