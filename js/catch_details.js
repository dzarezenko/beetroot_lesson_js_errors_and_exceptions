lib = {

  /**
   * @throws Error In some cases.
   */
  someFunc() {
    console.log("Function!!!");
    
    throw new Error("Error message");
  }

}

console.log("Some code 1");

try {
  lib.someFunc();
} catch (e) {
  console.log(e.toString());
}

console.log("Some code 2");
