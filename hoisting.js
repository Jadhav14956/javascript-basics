/*
function counter() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}

counter();
console.log(i); // this will give ReferenceError since i is local to function counter
*/

/*
function counter2() {
    for (j = 0; j < 10; j++) {
        console.log(j);
    }
}

counter2();
console.log(j); // this will be executed since j was not declared in function counter2 javascript will keep on looking for j till the window object and if not found will add to window object.

*/

console.log('var demonstration');
(function varTest() {
    var x = 1;
    if (true) {
        var x = 'sunil'; // same variable 
        console.log(x);
    }
    console.log(x);
})();

// Description : x is updated from inner block since javascript complier takes that as the same variable.

console.log('let demonstration');
(function letTest() {
    let x = 1;
    if (true) {
        let x = 'sunil'; // different variable.
        console.log(x);
    }
    console.log(x);
})();

// Description :