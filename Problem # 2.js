function printNegativeElements(arr) {
  let negativeElements = arr.filter((element) => element < 0);
  console.log("Negative elements in the array:", negativeElements);
}

let array = [1, -2, 3, -4, 5, -6];
printNegativeElements(array);
