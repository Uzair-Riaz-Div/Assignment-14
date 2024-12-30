function searchElement(arr, element) {
  let position = arr.indexOf(element);
  if (position !== -1) {
    console.log(element + " found at position:", position + 1);
  } else {
    console.log(element + " not found in array.");
  }
}

let array = [1, 2, 3, 4, 5];
searchElement(array, 3); // Search for element 3
