function insertElement(arr, element, position) {
  arr.splice(position - 1, 0, element);
  console.log("Array after insertion:", arr);
}

let array = [1, 2, 3, 4, 5];
insertElement(array, 10, 3); // Insert 10 at position 3
