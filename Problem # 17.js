function segregateEvenOdd(arr) {
  let evenArray = arr.filter((element) => element % 2 === 0);
  let oddArray = arr.filter((element) => element % 2 !== 0);
  console.log("Even elements:", evenArray);
  console.log("Odd elements:", oddArray);
}

let array = [1, 2, 3, 4, 5];
segregateEvenOdd(array);
