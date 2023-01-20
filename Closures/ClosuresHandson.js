// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


//closures Handson

//Q1 Find output
    function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter()); //1
alert(counter()); //2
alert(counter()); //3
alert(counter()); //4

 
//Q2 Find output
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? //1
  }
  console.log(count); // What is logged?  // 0
})();

//Q3 Find output
// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged? //3 3 3 in case of 'let; it will print 0 1 2
//   }, 1000);
// }

//Q4 Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function A(l){
    
    function B(b){
         return l*b;
    }
    
    return B(5);
}

res =A(3);
console.log(res);


//Q5 Take a variable in outer function and create an inner function to increase the counter every time it is called

//let coun=0;
// function D(a){
     
    
//     function inner(){
//         if(D()){
//             coun+=1;
//         }
        
//         return coun;
    
//     };
    
//     return inner();
// }


// res =D(7);

//console.log(res);


//Q6 FInd ooutput

var a = 12;
(function () {
  alert(a); //12
})();

//Q7 FInd output
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a); // 12
  };
})();
x();

//Q8 FInd output

var globalVar = "xyz";

(function outerFunc(outerArg) {// 123
    var outerVar = 'a';  // a
    
    (function innerFunc(innerArg) { //456
    var innerVar = 'b'; //b
    
    console.log(
        "outerArg = " + outerArg + "\n" + //123
        "innerArg = " + innerArg + "\n" + //456
        "outerVar = " + outerVar + "\n" + //a 
        "innerVar = " + innerVar + "\n" + //b
        "globalVar = " + globalVar);  //xyz
    
    })(456);
})(123);