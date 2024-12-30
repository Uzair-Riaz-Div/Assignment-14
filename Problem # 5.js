function findSecondLargest(arr) {
  arr.sort((a, b) => b - a);
  return arr[1];
}

let array = [3, 1, 5, 2, 4];
console.log("Second largest element:", findSecondLargest(array));
