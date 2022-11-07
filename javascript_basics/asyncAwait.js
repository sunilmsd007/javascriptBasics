//a promise
function resolveAfter2seconds(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        },2000);
    });
}
//async function
async function asyncCall(){
    let abc=6;
    console.log("calling");
    const result = await resolveAfter2seconds(); //wait until promise resolves
    console.log("after resolve result", result);
    const finalResult = result + abc;
    console.log("after resolve ", finalResult);

}
//asyncCall(); //calling async function

//--------
function add(){
    let x =1;
    let y =2;
   return x+y;
}
function getSum(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(add());
        },2000);
    });
}
//async function
async function getFinalSum(){
    let abc=6;
    console.log("getting sum...");
    const result = await getSum(); //wait until promise resolves
    console.log("after resolve getsum", result);
    const finalResult = result + abc;
    console.log("after final Sum ", finalResult);

}
//getFinalSum(); //calling async function

//--------
function makeRequest(location){
    return new Promise((resolve,reject) => {
        console.log(`making request to ${location}`)
        if (location === "google"){
            resolve("google says hi");
        }else{
            reject("sorry.. we can only talk to google!");
        }
    })
}
function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log("processing response")
        resolve(`received information ${response}`)

    })
}
// makeRequest("google").then(response => {
//     console.log("response is received")
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err =>{
//     console.log(err)
// })

//this async function wroks same as the above promise function(but error handled using try and catch)
async function doWork(){
    try{
    const response = await makeRequest("google")
    console.log("response is received")
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
    }catch(err){
        console.log(err)

    }
}
doWork();