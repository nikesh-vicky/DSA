const reverseArray = arr => {
  console.time("Execution Time");
  let left = 0;
  let right = arr.length - 1;

  console.log(`Initial Array: [${arr}]`);

  let iteration = 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    console.log(
      `Iteration ${iteration}: Left = ${left}, Right = ${right}, Array = [${arr}]`
    );

    left++;
    right--;
    iteration++;
  }

  console.log(`Final Reversed Array: [${arr}]`);
  console.timeEnd("Execution Time");
  return arr;
};

let arr = [1, 2, 3, 4, 5];
reverseArray(arr);
