function countNegativeElements(arr) {
  let negativeCount = arr.filter((element) => element < 0).length;
  console.log("Negative elements count:", negativeCount);
}

let array = [1, -2, 3, -4, 5, -6];
countNegativeElements(array);
