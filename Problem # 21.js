function leftRotateArray(arr, positions) {
  let rotatedArray = [...arr.slice(positions), ...arr.slice(0, positions)];
  console.log(
    "Left rotated array by " + positions + " positions:",
    rotatedArray
  );
}

let array = [1, 2, 3, 4, 5];
leftRotateArray(array, 2); // Left rotate by 2 positions
