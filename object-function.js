 var simple = {};

 // is equal to 

 var obj = new Object()

 // ***************** Heirarchy ********************

 function Employee(name) {
     this.name = name;
 }

 var Jim = new Employee('Jim');

 console.log(Jim.__proto__.__proto__ === Object.__proto__); // this will result in true

 // function employee has a prototype which in term depaends upon Object's Prototype

 // so if assume you added a property to Object prototype it will be accessable from every other type of object.