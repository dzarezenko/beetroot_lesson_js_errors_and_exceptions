class ArrayOverflowError extends RangeError {

  name = "ArrayOverflowError";

}

let getArrayElementByIndex = (arr, index) => {
  if (index >= arr.length) {
    throw new ArrayOverflowError("Array index overflow");
  }

  return arr[index];
}

let a = [1, 2, 3];

console.log(getArrayElementByIndex(a, 1)); // 2
try {
  console.log(getArrayElementByIndex(a, 3));
} catch (e) {
  console.log(e.toString());
} finally {
  console.log("FINISH!");
}

console.log("FINISH!");
