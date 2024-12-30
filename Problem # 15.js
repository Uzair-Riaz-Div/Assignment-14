function mergeArrays(arr1, arr2) {
  let mergedArray = [...arr1, ...arr2];
  console.log("Merged array:", mergedArray);
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
mergeArrays(array1, array2);
