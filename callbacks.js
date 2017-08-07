let callback_func = function(){
    console.log('I am called from callback function');
}

let callback_test = function(callback){
    console.log('in calle function');
    callback();
}

callback_test();