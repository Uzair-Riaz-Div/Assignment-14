function countElementFrequency(arr) {
  let frequencyMap = {};
  arr.forEach((element) => {
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }
  });
  console.log("Element frequency:", frequencyMap);
}

let array = [1, 2, 1, 3, 4, 2, 5, 1];
countElementFrequency(array);
