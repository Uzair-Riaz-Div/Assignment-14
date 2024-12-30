function rightRotateArray(arr, positions) {
  let rotatedArray = [...arr.slice(-positions), ...arr.slice(0, -positions)];
  console.log(
    "Right rotated array by " + positions + " positions:",
    rotatedArray
  );
}

let array = [1, 2, 3, 4, 5];
rightRotateArray(array, 2); // Right rotate by 2 positions
