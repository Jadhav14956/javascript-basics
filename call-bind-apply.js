// Difference between call, bind and apply in javascript.
// URL : https://www.youtube.com/watch?v=c0mLRpw-9rI&t=198s
// author : techsith

// CALL demonstration
var obj = { num : 2 };

var addToThis = function(a){
    return this.num + a;
}

// if you use call this in that function will be set to the object you pass with call. in the following example this in addToThis() function is obj. 

var val = addToThis.call(obj, 3);

console.log('Call result = ' + val);


// APPLY demonstration.
var addToThis2 = function(a, b,c){
    return this.num + a + b + c;
}

var arr = [1,2,3];
console.log('apply result : ' + addToThis2.apply(obj,arr));


// BIND demonstration

var obj3 = { num : 100};
var bound_func = addToThis2.bind(obj3);

console .log('Bind resuilt : ' + bound_func(1,2,3));

// bind example : bind returns a function that, when later executed, will have the correct context set for calling the original function. This way you can maintain context in async callbacks and events.

function MyObject(element) {
    this.elm = element;

    element.addEventListener('click', this.onClick.bind(this), false);
};

MyObject.prototype.onClick = function(e) {
     var t=this;  //do something with [t]...
    //without bind the context of this function wouldn't be a MyObject
    //instance as you would normally expect.
};


//  *************************************************  //

// Call and apply are pretty interchangeable. Just decide whether it’s easier to send in an array or a comma separated list of arguments.

// I always remember which one is which by remembering that Call is for comma (separated list) and Apply is for Array.

// Bind is a bit different. It returns a new function. Call and Apply execute the current function immediately.

// Bind is great for a lot of things. We can use it to curry functions like in the above example. We can take a simple hello function and turn it into a helloJon or helloKelly. We can also use it for events like onClick where we don’t know when they’ll be fired but we know what context we want them to have.