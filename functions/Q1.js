//Q1 create one function with zero parameter having a console statement.
    function foo(){
        console.log("Hello World!");
    }

    foo();


//Q2 create a function that prints the sum of 3 and 4 as 7

function sum(x,y){

    sum=x+y;
    console.log("sum of"+ x+"and" +y +"is:" +sum);
};

sum(3,4);


//Q3 Create one arrow function

//Q4 output "Print output:"
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

//output undefined undefined

// Q5 "Print output:"
var x = 21;
girl ();
console.log(x);
function girl() {
    console.log(x);
    var x = 20;
};

//output 21 undefined


//Q6 print output

var x = 21;
a();
b();

  function a() {

   x = 20;
  console.log(x);
};
 function b() {

    x = 40;
   console.log(x);
};

//output 20 40

//Q7 Write a function that accepts parameter n and returns factorial of n

function fact(n){
    var fact=1;
    var i=n;
    // using while loop
    
    while(i>0){
    fact*=i;
    i--;
    }
    
    //using for loop
    for(i=0;i<n;i++){
    fact*=i;
    }
    return fact;
};

var factorial =fact(5);
console.log(factorial);