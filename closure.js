// Closure : A closure is the combination of a function and the lexical environment within which that function was declared.

// A closure is the combination of a function and the lexical environment within which that function was declared.

// The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is avai

// Benifits :  data hiding and encapsulation.
// Cons : degrades the performence of script.

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

// example 2 :

function sendRequest(username) {
    var sessionId = 101;
    $.ajax({
        url: `/myUrl/${username}/${sessionId}`,
        success: function(response) {
            console.log('Response : ' + response);
        }
    })
}


// demostrating independent closure independence
console.log('demostrating independent closure independence');

function makeCounter() {
    var peivate_counter = 0;

    function changeValueBy(val) {
        peivate_counter += val
    }

    return {
        increment: function() {
            changeValueBy(1);
        },
        decrement: function() {
            changeValueBy(-1);
        },
        value: function() {
            return peivate_counter;
        }
    };
}

var counter1 = makeCounter();
var counter2 = makeCounter();
counter1.increment();
counter1.increment();
console.log('Counter 1 ' + counter1.value());
console.log('Counter 2 ' + counter2.value());
// counter 1 and counter 2 have different value even though they are refering to the same function. private_counter is different for both of them.