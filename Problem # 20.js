function sortEvenOddElements(arr) {
  let evenArray = arr
    .filter((element) => element % 2 === 0)
    .sort((a, b) => a - b);
  let oddArray = arr
    .filter((element) => element % 2 !== 0)
    .sort((a, b) => a - b);
  console.log("Sorted even elements:", evenArray);
  console.log("Sorted odd elements:", oddArray);
}

let array = [3, 1, 5, 2, 4];
sortEvenOddElements(array);
