// by derek banas

function Point(x,y){
    this.x = x;
    this.y = y;
}

Object.defineProperty(Point.prototype, 'pointPos', {
    get: function(){
        return 'X : ' + this.x + ' Y : ' + this.y;
    },
    set : function(point){
        var parts = point.toString().split(',');
        this.x = parts[0] || 0;
        this.y = parts[1] || 0;
    }
});

var _point = new Point();

console.log(_point.pointPos());

_point.pointPos('100,200');

console.log(_point.pointPos());

//  *******************************************************  //
// Another way

var Circle = function(radius){
    this._radius = radius;
}

Circle.prototype = {
    set radius(radius) { this._radius = radius; },
    get redius() { return this._radius;},
    get area() { return Math.PI * this._radius * this._radius;}
}

var circle = new Circle();
circle.radius = 15;