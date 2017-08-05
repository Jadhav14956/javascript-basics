// Closure

var adder = function(value) {
    var add_number = value;
    return function(increment) {
        return increment + add_number;
    }
}

var adder5 = adder(5);
var adder10 = adder(10);

console.log('5 + 2 = ' + adder5(2));
console.log('10 + 2 = ' + adder10(2));