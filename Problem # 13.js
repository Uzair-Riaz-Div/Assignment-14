function countDuplicateElements(arr) {
  let frequencyMap = {};
  arr.forEach((element) => {
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }
  });

  let duplicateCount = 0;
  for (let key in frequencyMap) {
    if (frequencyMap[key] > 1) {
      duplicateCount++;
    }
  }
  console.log("Total number of duplicate elements:", duplicateCount);
}

let array = [1, 2, 1, 3, 4, 2, 5, 1];
countDuplicateElements(array);
