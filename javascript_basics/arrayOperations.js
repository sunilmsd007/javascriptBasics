
//array creation
let fruitArr = ["Apple", "Mango", "Banana", "Pine apple"] //method1
console.log(fruitArr);
let vegArr = new Array("Tomato","onion","brinjal") //method2
console.log(vegArr);

console.log(fruitArr.length); //prints length of the array

//loop over an array
fruitArr.forEach((data,i) => {  
    console.log(data,i) //prints array elements with its index
})

//indexOf
let pos = fruitArr.indexOf("Apple")
console.log("index of Apple",pos)

//array copy
let newFruitArr = [...fruitArr] //copies all the elements using spread (...)
console.log("---copy elements---")
console.log(newFruitArr);

//slice() method can be used for copying and it slices out a piece of array from existing array
let newVegArr = vegArr.slice() //copies all the elements
console.log(newVegArr)
newVegArr = vegArr.slice(0)
console.log(newVegArr) //copies all (if other than 0 ie 1,2.. is mentioned then that position element will be copied)

console.log("---sliced array---")
newVegArr = vegArr.slice(0,2) //slice a piece of array into new array
console.log(newVegArr) //copies elements between 0-2 (excluding 2nd pos)  
 
//adding and removing elements in array [splice() method]
console.log("---adding elements---")
newFruitArr.splice(2, 0, "Kiwi"); //adding element at 2nd position of the array
console.log(newFruitArr);
newFruitArr.splice(2,0, "grapes", "orange") //adding multiple elements
console.log(newFruitArr);
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.

console.log("--removing element--")
newFruitArr.splice(0,1) //1 element will be removed(by default it starts from first element)
console.log(newFruitArr);

console.log("--adding and removing element at same time--")
let fr= newFruitArr.splice(1,2, "guava") //adds guava to 1st position and removes 2 elements from that position
console.log(newFruitArr) //returns modified array
console.log(fr) //returns removed elements

//push and pop methods
console.log("--pushing element--")
let pu= newFruitArr.push("sweet") //adds element at the end of the array
console.log(pu) //returns length of the modified array
console.log(newFruitArr)

console.log("--popping element--")
let po= newFruitArr.pop() //removes element at the end
console.log(po) //returns popped element
console.log(newFruitArr)

//unshift and shift methods
console.log("--adding element unshift--")
let arr= newFruitArr.unshift("salt") //adds element at starting position
console.log(arr) //returns length of the modified array
console.log(newFruitArr)

console.log("--removing element shift--")
let sh= newFruitArr.shift() //removes starting element
console.log(sh) //returns removed element
console.log(newFruitArr)

//concat
console.log("--concatinating 2 arrays--")
let eatables= newFruitArr.concat(vegArr) //can concat multiple arrays by comma seperation ie arr1.concat(arr2,arr3)
console.log(eatables)
eatables= [...newFruitArr, ...vegArr] //using spread
console.log(eatables)

console.log("--array toString--")
let neweatables= newFruitArr.concat(vegArr).toString() //returns string representation of array
console.log(neweatables)

console.log("--sorted array--")
neweatables= newFruitArr.concat(vegArr).sort() //returns array with sorted elements in ascending
console.log(neweatables)

let joineatables= neweatables.join(" /") //returns string representaion with specified string seperator
console.log(joineatables)

function scanArray([first,second]) {console.log(first+ " " +second); }
scanArray(eatables) //prints first and second elements of eatables 

let alleat=""
for(let eat of neweatables){
    alleat += eat+ " "        //adding array elements in a string
} 
console.log(alleat) 

