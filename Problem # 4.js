function findMinMaxElements(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  console.log("Minimum element:", min);
  console.log("Maximum element:", max);
}

let array = [3, 1, 5, 2, 4];
findMinMaxElements(array);
