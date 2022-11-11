//ES-6 features----------
//default parameter
function sum(a,b=2) //b=2 refered as default parameter
{
    console.log("sum is", a+b)
}
sum(2,3);
//sum(4);

//template literals
let firstName = "sunil"
let lastName = "kumar"
console.log(`your name is ${firstName} ${lastName}`)

//multi_line strings
let poemData = `johny johny yes papa,
                eating sugar no papa,
                telling lies no papa
                open your mouth ha, ha, ha`;
console.log(poemData)

//spread operator
const even = [2,4,6]
const odd =  [1,3,5]
const copy = [...even, ...odd] //append all elements in array
console.log(copy)

//destructuring assignment
const arr = [1, 2, 3, 4, 5];
const [one, two, three] = arr;
console.log(one,two,three); 

// To skip certain values
const [first, ,middle,,last] = arr;
console.log(first,middle,last); 

// to exchange the values of two variables.
var a = 1;
var b = 3;
 
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

// Objects can also be destructurized and assigned
const student = { 
    name1: 'sunil', 
    age: 28,
    city: 'gadag'
};
console.log(student.name1, student.age,student.city) //traditional access
const {name1, age, city} = student; //destructured
console.log(name1,age,city)  //destrictred access

//ES7 features------------
//string includes
let text = "Hello world, welcome to javascript"
if(text.includes("hello")){   //case sensitive
    console.log("text have Hello")
}else{
    console.log("text don't have Hello")
}

//exponential operator
console.log( 2**3 ) //same as Math.pow(2,3)

//object
var obj = {
    foo: "bar",
    baz: 24
};
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(obj.baz)

//ES9 features--------------
//rest and spread
function restParams(a, b, ...rest) {
    console.log("a:",a); 
    console.log("b:",b); 
    console.log("rest:",rest); // the rest indefinite length parameters… can be converted into an array and passed in
}
restParams(1, 2, 3, 4, 5);  

// Can also be used in function input parameters
function restObjectInParam({ a, ...r }) {
    console.log(a); // prints 1
    console.log(r); //here rest returns object i.e in key value pair
}

restObjectInParam({
  a: 1,
  bol: "str",
  c: 3
});

//to find maximum in the array
const values = [19, 90, -2, 6, 25];
console.log( Math.max(...values) );

//promise.finally
let t = new Promise((resolve,reject) => {
    let a = 2;
    if(a==1){
        resolve("a is 1")
    }else{
        reject("a is not 1")
    }
})
t.then((message) => {
    console.log("inside then", message)
}).catch((message) => {
    console.log("inside catch", message)
}).finally(() => {
    console.log("it must execute no matter success or fail");
  });

//await in loop
//async function 
async function process(array) {
    console.log(array)
    for (var i=0; i<array.length; i++) {
        const result = await resolveAfter2seconds() //await in loop
        let res = result + i;
        console.log(res)
  }
  console.log(array)
}
  let a = [1,2,3,4,5]
  process(a);

//promise
  function resolveAfter2seconds(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        },2000);
    });
  }
  
//regex
const regExpDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regExpDate.exec('2020-06-25');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(match[0]) //returns Date
console.log(match)  //returns an array 

