// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Shape {
    // Just like constructor functions, classes can accept arguments
    constructor(area, perimeter) {
      this.area = area;
      this.perimeter = perimeter;
    }
  
    printInfo() {
      console.log(`Area: ${this.area}`);
      console.log(`Perimeter: ${this.perimeter}`);
    }
  }
  
  