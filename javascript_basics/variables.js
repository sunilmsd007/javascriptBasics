//variables and its scope in function
var x=4;
//var x=5; //var can be redeclared
//x=6;  // also can change the value
//console.log("x is: ", x) 

let y=3;
//let y=2; cannot redeclare using let
//y=4; //but can change the value
//console.log("y is: ", y)

const z=7;
//const z=8; cannot be redeclared
//z=8; also cannot change the value since it is constant variable
//console.log("z is: ", z)

function scope(){
    //console.log("inside function",x,y,z) //x,y,z are declared outside the function but can be accessed inside function since their scope is global
     // var x=9;
    // let y=11;
    // const z=13;
    console.log("inside function",x,y,z)

    {
        //  var x=10;
        //   let y=12;
         //  const z=14;
 
        console.log("inside block",x,y,z)
        
    }
}
//console.log("outside function",x,y,z)
scope();