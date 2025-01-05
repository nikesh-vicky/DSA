let arr = [3, 2, 0, 1, 3, 2, 0, 1, 3];
console.log(arr);

const sortArr = arr => {
  let isSwipe;
  do {
    isSwipe = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwipe = true;
      }
    }
  } while (isSwipe);
  return arr;
};

let res = sortArr(arr);
console.log("Res", res);
