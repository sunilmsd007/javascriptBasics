function greet()
{
    console.log("Hello")
}
//greet();

//with parameters
function sum(a,b,name) //(a,b,name="sunil") name refered as default parameter
{
    console.log("sum is", a+b,"name is", name)
    return true
}
//sum(2,3,"sunil");
//console.log(sum(1,2,"kumar"))

//anonymous function
(a,b) => {
    console.log(a+b)
};

//arrow function
let fun= (a,b) => {
    console.log("in arrow function",a+b)
};
//fun(1,2);

//synchronous
console.log("statement 1")
console.log("statement 2")
console.log("statement 3")

//asynchronous
console.log("statement 1")
setTimeout(() => {
    console.log("statement 2")
},2000)
console.log("statement 3")


