// simple example
// url : https://www.youtube.com/watch?v=pTbSfCT42_M&spfreload=5
let callback_func = function(){
    setTimeout(function() {
        console.log('I am called from callback function');    
    }, 1000);
    
}

let callback_test = function(callback_inst){
    setTimeout(function() {
        console.log('in callee function');
        callback_inst();    
    }, 1000);
    
}

callback_test(callback_func);

console.log(' ************************ ');


let add = function(a, b){
    return a + b;
}

let multiply = function( a, b){
    return a *b;
}

let calculate = function(num1, num2, callback){
    return callback(num1,num2);
}

console.log('Addition : ' + calculate(2,3, add));
console.log('multiply : ' + calculate(2,3, multiply));
console.log(' *********************** ');

// custome sort callback


var myArr = [
    {
        id : 1,
        str : 'apple'
    },
    {
        id : 3,
        str : 'cat'
    },
    {
        id : 2,
        str : 'xat'
    }
];
console.log('Before sort ' + JSON.stringify(myArr));

myArr.sort(function(val1, val2){
    if(val1.id < val2.id)
        return -1;
    else
        return 1;
});

console.log('after sort ' + JSON.stringify(myArr));

