//kth min and max
const numbers = [10, 5, 34, 25, 4, 5];

const bubbleSort = numbers => {
  do {
    isSwapping = false;
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        isSwapping = true;
      }
    }
  } while (isSwapping);
  return numbers;
};
const sortedNumbers = bubbleSort(numbers);
console.log("sortedNumbers", sortedNumbers);
const minMax = (arr, K, n) => {
  const KthMin = arr[K - 1];
  const KthMax = arr[n - K];
  return { KthMin, KthMax };
};

console.log("minMax:", minMax(sortedNumbers, 2, sortedNumbers.length));
