function isWithID(element){
    return element === 3;
}

var element = [1,2,3,4,5,6].find(isWithID);
console.log('Index : ' + element);