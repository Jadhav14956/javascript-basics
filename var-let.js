// difference between var and let.


for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log('For VAR');
        console.log(i);
    }, 100);
}

for (let j = 0; j < 5; j++) {
    setTimeout(function() {
        console.log('For LET');
        console.log(j)
    }, 100);
}

// since let is blocked scoped declaration, in clolsure for setTimeOut in 2nd forloop is value for j is taken from that block
// on other hand when using var which is function scoped inner function timer function will refer to the function scoped value which is 5.


// Credits : http://www.jstips.co/en/javascript/keyword-var-vs-let/

// TO MAKE VAR WORKING USING CLOSURE
// closure will cut doen the scope to thw closure function and value of i will be maintained.

for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log('For VAR in closure');
            console.log(i);
        }, 100);
    })(i)
}