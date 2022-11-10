//higher order function is a function that takes another functiona as an argument or returns a function from it

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//--filtering odd numbers
function filterOdd(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterOdd(arr));

//------filtering even numbers
function filterEven(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }
  console.log(filterEven(arr));

  //---------making filter function as generic
  function filterFunction(arr, callback) { //takes a callback function, here filterFunction() is a higher order function
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if(callback(arr[i]))
      filteredArr.push(arr[i]);
    }
    return filteredArr;
  }
  // Function containing logic for filtering out odd numbers
  function isOdd(a) {
      if(a% 2 !== 0)
      return a;
  }
  // Function containing logic for filtering out even numbers
  function isEven(x) {
     if(x % 2 === 0)
     return x;
  }
  let fil= filterFunction(arr, isOdd); //calling the function by passing isOdd() as callback function
  console.log("filtered",fil);
  

  // .map() method executes a callback func on each element in the array & returns new array of same length
  // each elements are mapped one to one
  const numArray = [1,2,3,4,5];
  const square = numArray.map((n)=> {
    return Math.pow(n,2)   //mapping one to one value
  })
  console.log("square",square)
  //---
  const binary = numArray.map((n)=>{
    return n.toString(2)
  })
  console.log("binary",binary)

  // .filter() it also executes callback func on each elem but it returns true/false value,  the returned array will contain only true values
  //filter() filters the elements based on a condition provided
  const even = numArray.filter((x)=>{
    return x%2==0;        //checks condition if true then returns
  })
  console.log("even",even)
  //---
  const odd = numArray.filter((x)=>{
    return x%2!==0;
  })
  console.log("odd",odd)

 // .reduce() method iterates through array and returns a single value
 const sum = numArray.reduce((accumulator,current) =>{
   return accumulator + current; //on each iteration, accumulator is the value returned by the last iteration, current is the current value
 })                             //optionally a second argument can be passed which acts as initial value of the accumulator
 console.log("sum using reduce",sum)
//----
const maxNum = numArray.reduce((acc,curr)=> {
  if(curr > acc){          
    return max=curr
  }
},0)               //initially acc value will be zero which is the second argument here
console.log("max number",maxNum)