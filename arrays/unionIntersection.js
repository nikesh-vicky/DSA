const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const findUnionIntersection = (arr1, arr2) => {
  let combinedArr = [...arr1, ...arr2];
  let unique = [];
  let intersection = [];
  for (num of combinedArr) {
    if (!unique.includes(num)) {
      unique.push(num);
    } else {
      intersection.push(num);
      console.log(num);
    }
  }
  return { unique, intersection };
};
let unionRes = findUnionIntersection(array1, array2);
console.log("unionRes", unionRes);
