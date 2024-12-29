//finding the max and min number in Array using for loop
let numbers = [1,2,3,4,56,7,8,9,121]
const findMaxMin = (arr) => {
  if(arr?.length==0 || arr == undefined)
    return {max:null,min:null}
  
  let min = arr[0];
  let max = arr[0]
  
  for(let i =0;i<arr.length;i++){
    if(arr[i]>max)
    max = arr[i]
    if(arr[i]<min)
    min = arr[i]
  }
  return {max,min}
}

let result = findMaxMin(numbers);
console.log(result)


//finding the max and minimum number using while loop

const findMaxMinUsingWhile = (arr) => {
   if(arr?.length==0 || arr == undefined)
    return {max:null,min:null}
    
    let min = arr[0];
    let max = arr[0];
    let i =0
    while (i<arr.length){
      if(arr[i] < min)
      min = arr[i]
      if(arr[i] > max)
      max = arr[i]
      console.log(i)
      i++
    }
    return{
      min,max
    }
}

let whileResult = findMaxMinUsingWhile(numbers)
console.log('whileResult',whileResult)