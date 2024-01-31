function Circle(radius) {
    this.radius =radius;
    this.draw=function(){
        console.log('draw');
    }
}

Circle.call({}, 1);
const Circle1 = new Circle(1)

console.log(Circle1);