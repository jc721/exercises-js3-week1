class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() { return this.width * this.height; }
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

var triangle = new Polygon(25, 15);
console.log(triangle.name);
const areasTriangle = (triangle.height * triangle.width) / 2;
console.log(areasTriangle);


const circle = new Polygon(10, 25);
console.log(circle.name);
const radius = ((circle.height) / 2) + ((circle.width * circle.width) / (8 * circle.height));
const areasCircle = Math.PI * (radius * radius);
console.log(areasCircle);



