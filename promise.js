// URL : https://www.youtube.com/watch?v=s6SH72uAn3Q
// defination from MDN : 
// Promise is object that represents completion (or failure) of an asynchronous operation, and its resulting value.

// content :
//  1. Basic syntax
//  2. Nesting promises
//  3. Parallel Execution
//  4. Race Execution

let promiseToCleanRoom = new Promise(function(resolve, reject){
    let isClean = true;
    if(isClean){
        resolve();
    }else{
        reject('Room is not clean');
    }
}); 

promiseToCleanRoom.then(function(result){
    console.log('Resolved');
    console.log('*********************************');
}).catch(function(err){
    console.log('ERROR : ' + err);
});


console.log('Complex example');

let cleanRoom = function(){
    return new Promise(function(resolve, reject){
        resolve({ 
            success : true,
            message : 'from cleanRoom'
        });
    });
}

let removeGarbage = function(){
    return new Promise(function(resolve, reject){
        resolve({ 
            success : true,
            message : 'from removeGarbage'
        });
    });
}

let winIcecream = function(){
    return new Promise(function(resolve, reject){
        resolve({ 
            success : true,
            message : 'from winIceCream'
        });
    });
}

cleanRoom().then(function(clean_room_result){
    console.log('Room Cleaned');
    return removeGarbage();
}).then(function(garbage_remove_result){
    console.log('Garbage removed');
    return winIcecream();
}).catch(function(err){
    console.log('This chain Shoulkd stop');
    return reject('did not throw garbage.');
}).then(function(){
    console.log('Ice Cream won.');
    console.log('*********************************');
});

// Parallel processing of promises
// Promise.all
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(response){
    console.log('All finised');
    console.log('Response : ' + JSON.stringify(response));
}).catch(function(err){
    console.log('Error : ' + JSON.stringify(err));
});



