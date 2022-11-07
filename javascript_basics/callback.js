
var demo = () => {
    console.log("hello")
};

var test = (a,callback) => {
    console.log(a)
    callback();
    //demo();
}
//test(1,demo)
//test(2,demo = () => {
//     console.log("hello")
// })

//----
function display(result) {
    console.log("sum is: ", result)
  }
  
  function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
  }
  
//calculator(5, 5, display);

//----
function greet(){ 
    console.log("hello world")
}
function sayName(name){
    console.log("hello"+ " " +name)
}
//setTimeout(greet,2000);
//sayName("sunil");

//----
function greet(name,callback){
    console.log("hello world")
   // callback(name);
    sayName("sunil");
}
function sayName(name){
    console.log("hello"+ " " +name)
}

//setTimeout(greet,2000,"sunil",sayName);
//setTimeout(greet,2000);

//callback hell
const add = function(a,b,callback){
    callback(a+b)
}
// add(1,2,(sum1) => {
//     console.log("sum1 is: " +sum1)
//     add(3,sum1,(sum2) => {
//         console.log("sum2 is: " +sum2)
//         add(4,sum2,(sum3) => {
//             console.log("sum3 is: " +sum3)
//         })
//     })
// })

//----
let math = function(x,y,callback){
    callback(x,y);
}
math(2,2,function sum(a,b) {
    console.log("sum is",a+b);
    math(3,1,sub=(a,b) =>{
        console.log("subtraction is",a-b);
        math(2,3,mul=(a,b) => {
            console.log("multiplication is", a*b);
            math(2,2,div=(a,b) => {
                console.log("division is", a%b);
            })
        })
    })
});