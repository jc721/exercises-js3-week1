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

console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas


//extended class Triangle
class Triangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Triangle";
    this.sides = 3;
  }
  get areasTriangle() { return (this.height * this.width) / 2; }
  sayName() {
    console.log('Hi, I am a Polygon and my name is ' + this.name + ".");
  }
}
var triangle = new Triangle(12, 25);
triangle.sayName();
console.log("Total areas of this rectangle is " + triangle.areasTriangle + ".")



//extended class circle
class Circle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "circle";
  }
  get areasCircle() {
    const radius = ((circle.height) / 2) + ((circle.width * circle.width) / (8 * circle.height));
    const areasCircle = Math.PI * (radius * radius);
    return areasCircle;
  }
  sayName() {
    console.log('Hi, I am a Polygon and my name is ' + this.name + ".");
  }
}
var circle = new Circle(12, 25);
circle.sayName();
console.log("Total areas of this rectangle is " + circle.areasCircle + ".");


