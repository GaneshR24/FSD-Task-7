// Convert the UML diagram to Typescript class. - use number for double

class circle {
    constructor(radius){
      this.radius= radius;
    }
    getArea(){
      return Math.PI * Math.pow(this.radius, 2);
    }
    getCircumference(){
  return 2 * Math.PI * this.radius
    }
  }
  
  let circle1 = new circle(6);
  let circle2 = new circle(8);
  
  console.log(circle1.getArea());
  console.log(circle1.getCircumference());
  console.log(circle2.getArea());
  console.log(circle2.getCircumference());