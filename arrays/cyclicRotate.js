const cyclicRotate = arr => {
  let lastElement = arr[numbers.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    console.log(
      `Iteration ${arr.length - 1 - i} : Shifting arr[${i}] to arr[${i + 1}]`
    );
    arr[i + 1] = arr[i];
    console.log("Array after shift is:", arr);
  }
  arr[0] = lastElement;
  return arr;
  console.log(lastElement);
};

let numbers = [1, 2, 3, 4, 5];
console.log("Original Arr", numbers);
let rotatedArray = cyclicRotate(numbers);
console.log("Res", rotatedArray);
