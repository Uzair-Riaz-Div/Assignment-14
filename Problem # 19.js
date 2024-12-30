function sortArray(arr, order) {
  if (order === "ascending") {
    arr.sort((a, b) => a - b);
  } else if (order === "descending") {
    arr.sort((a, b) => b - a);
  }
  console.log("Sorted array (" + order + "):", arr);
}

let array = [3, 1, 5, 2, 4];
sortArray(array, "ascending");
sortArray(array, "descending");
