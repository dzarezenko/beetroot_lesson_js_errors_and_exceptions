try {
  //eval("{"); // SyntaxError
  //aleeeert("Exception"); // ReferenceError

  // RangeError
  let num = 10;
  //num.toPrecision(500); // A number cannot have 500 significant digits

  //num.toUpperCase(); // TypeError

  // URIError
  decodeURI("https://mozilla.org/?x=%D1%8%D0%B5%D0%BB%D0%BB%D1%8B");
} catch (e) {
  /*console.log(e.toString());
  console.log(e.name);
  console.log(e.message);*/
  switch (e.name) {
    case ("ReferenceError"):
      console.log(e.toString());

      break;

    case ("EvalError"): // SyntaxError
    case ("SyntaxError"):
      console.log(e.toString());

      break;

    case ("RangeError"):
      console.log(e.toString());

      break;
    
    case ("TypeError"):
      console.log(e.toString());

      break;

    case ("URIError"):
      console.log(e.toString());

      break;
  }
}