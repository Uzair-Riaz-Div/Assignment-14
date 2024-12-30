function sumArrayElements(arr) {
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log("Sum of array elements:", sum);
}

let array = [1, 2, 3, 4, 5];
sumArrayElements(array);
