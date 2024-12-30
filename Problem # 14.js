function removeDuplicateElements(arr) {
  let uniqueElements = [...new Set(arr)];
  console.log("Array after removing duplicates:", uniqueElements);
}

let array = [1, 2, 1, 3, 4, 2, 5, 1];
removeDuplicateElements(array);
