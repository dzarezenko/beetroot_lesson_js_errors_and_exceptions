lib = {

  /**
   * @throws Error In some cases.
   */
  someFunc() {
    console.log("Function!!!");
    
    if (true) {
      throw new SyntaxError("Error message");
    }

    // ... 

    
  }

}

console.log("Some code 1");

try {
  lib.someFunc();
} catch (e) {
  console.log(e.name);
  console.log(e.toString());
}

console.log("Some code 2");
