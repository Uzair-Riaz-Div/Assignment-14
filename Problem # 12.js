function findUniqueElements(arr) {
  let uniqueElements = [...new Set(arr)];
  console.log("Unique elements:", uniqueElements);
}

let array = [1, 2, 1, 3, 4, 2, 5, 1];
findUniqueElements(array);
