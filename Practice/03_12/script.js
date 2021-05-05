/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
 class Pen {
    constructor(
      // Defines parameters:
      name,
      color,
      capOpen
    ) {
      // Define properties:
      this.name = name;
      this.color = color;
      this.capOpen = capOpen;
    }
    // Add methods like normal functions:
    toggleCap(capStatus) {
      this.capOpen = capStatus;
    }
  }
  
  export default Pen;