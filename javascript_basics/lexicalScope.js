//-lexical scope
//scope is where we can access the particular variable, scope is directly dependent on lexical environment
//lexical environment is the local memory along with lexical environment of its parent
var d = 10;     
function a(){   
    var b=11;
    console.log("in a", d,b)
    function c(){  //here function c() is lexically inside function a()
        var e = 12;
      console.log("in b", d,b,e) //can access d & b by checking its parent lexical environment
    }
    c();
}
a();

//-closure
//closure is a function bundled with its lexical environment 
//or function along with its lexical scope and variable references
//closure gives an access to outer function's scope from inner function i.e here function y() can be accessed outside x(), via z()
function x(){
    var w=10;
    function y(){
      console.log(w)
    }
    return y;
}
// var z = x(); //calling x()
// console.log(z) //gives function y()
// z();  //prints value of w bcz of closure