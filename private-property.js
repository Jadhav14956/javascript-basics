//    Private Method 
function secrectNumber(){
  var secNum = 100;
  this.getSecrect = function(){
    return secNum;
  }
  this.setSecret = function(num){
    secNum = num;
  }
}

var secretNumber = new secrectNumber();
console.log('old Secret Number : ' + secretNumber.getSecrect());
secretNumber.setSecret(50);
console.log('new Secret Number : ' + secretNumber.getSecrect());