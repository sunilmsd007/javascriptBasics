const xyz = () => {
    return new Promise((resolve,reject) => {
        let flag = true;
        if(flag){
            resolve("promise resolved");
        } else{
            reject("promise rejected");
        }
    })
}
// xyz()
// .then((data) => console.log("after resolve--->", data))
// .catch((error) => console.log("after reject--->", error))

//-----
let p = new Promise((resolve,reject) => {
    let a = 1;
    if(a==1){
        resolve("a is 1")
    }else{
        reject("a is not 1")
    }
})
p.then((message) => {
    console.log("inside then", message)
}).catch((message) => {
    console.log("inside catch", message)
})

//------
function sum(){
    let x =1;
    let y =2;
   // console.log("sum of x & y is: ", x+y)
   return x+y;
}
let cal = new Promise((resolve,reject) => {
    let flag = true;
    if(flag){
        resolve(sum())
    }else{
        reject("error finding sum")
    }
})
cal.then((result) => {
    console.log("sum of x & y is: ", result)
    }
).catch((error)=> {
    console.log(error)
})

//---------
const b = () => {
    return new Promise((resolve,reject) => {
        let flag = true;
        if(flag){
            resolve(2);
        } else{
            reject("promise rejected");
        }
    })
}
b()
.then((p) => {return p+p})
.then((q) => console.log("addition--->", q))
.catch((error) => console.log("after reject--->", error))