function countEvenOddElements(arr) {
  let evenCount = arr.filter((element) => element % 2 === 0).length;
  let oddCount = arr.length - evenCount;
  console.log("Even elements count:", evenCount);
  console.log("Odd elements count:", oddCount);
}

let array = [1, 2, 3, 4, 5];
countEvenOddElements(array);
