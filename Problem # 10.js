function deleteElement(arr, position) {
  arr.splice(position - 1, 1);
  console.log("Array after deletion:", arr);
}

let array = [1, 2, 3, 4, 5];
deleteElement(array, 3); // Delete element at position 3
