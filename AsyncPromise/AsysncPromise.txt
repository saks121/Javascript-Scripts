//Q1 Write an examle of how you create an callback function

function sum(a,b){
	return a+b;
}

function calc(num,numb){
console.log(num,numb);
}

calc("EA19",sum(10,12)); //EA19 22


//Q2 create a proise function

function promise =new promise(resolve,reject){
	let c=9;	
	if(c ==9){
		resolve("Yes the no.is 9");
	}
	else{
		reject("Error!! NO is not there");
	}
};

promise.then((x)=> {console.log("resolve is called!!",x)}).catch((err)=>{"Reject is called",err)})



// Q3.Create a Promise, and check is the number even or ODD. and return the result on .then(Even) and .catch(Odd) method


let promiseFunc =new Promise((resolve,reject) =>{
    let n=12;
    if(n%2 ===0){
        resolve("Even");
    }
    else{
        reject("Odd");
    }
});


promiseFunc.then((x)=>console.log("resolve Executed",x))
.catch((error)=>console.log("Reject execited"),error);

//Q3./*
"Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 

Explain callback hell.
Numbers
1
2
3
4
5
6
7"
*/

let count=0;
setTimeout(function(){
    console.log(++count);
    setTimeout(function(){
        console.log(++count);
        setTimeout(function(){
            console.log(++count);
            setTimeout(function(){
                console.log(++count);
                setTimeout(function(){
                    console.log(++count);
                    setTimeout(function(){
                        console.log(++count);
                        setTimeout(function(){
                            console.log(++count);
                        },7000)
                    },6000)
                },5000)
            },4000)
        },3000)
    },2000)
},1000)



 /*Q4. "Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed 
     then it should go to reject the state and catch the error and print Promise Rejected "
 */


let prom = new Promise((char,res,rej) =>{
    if(char == "YES" || char == "yes"){
        res("Promise resolved");
    }
    else{
        rej("Promise rejected");
    }
    
});

prom.then((x) =>{console.log("Promise Resolved",x)}).catch((x) =>{console.log("Promise Rejected"),x});

//Q5 Create examples to explain callback function.


function sum(a,b,cb){
	setInterval(function(){
	return a+b;
	},1000);
	cb();
}

function sum(a,b){
	return a+b;
}


sum(12,13,sum);


//Q6 Create examples to explain callback hell function

// creating callback hell

 function arrayDouble_cb(arr){
   setTimeout(function(){
     for(i=0;i<arr.length;i++){
       arr[i]*=2;
     }
     console.log("with cb,array doubled:",arr);
     setTimeout(function(){
       let a1=[];
       for(i=0;i<arr.length;i++){
         if(arr[i] %2 ===0){
           a1.push(arr[i]);
         }
       }
       console.log("with cb Array after filtering even :",a1);
       setTimeout(function(){
         let sum=0;
         for(i=0;i<arr.length;i++){
           sum+=arr[i];
         }
         console.log("with cb Array Sum:",sum);
       },1000);
     },1000);
   },1000);
 };

// arrayDouble_cb([1,2,3,4,5]);




//Q7 Create examples to explain promises function

taking the scenario we implmented in Q8 ,we are defining the promises.

const arrayDouble =(arr) =>{
  return new Promise((res,rej)=>{
    for(i=0;i<arr.length;i++){
      arr[i]*=2;
    }
    
    res(`Array Doubled! ${arr}`);
  })
  
}

const getFilterData =(arr)=>{
  return new Promise ((res,rej)=>{
    let a=[];
    for(i=0;i<arr.length;i++){
      if(arr[i]%2 ===0){
        a.push(arr[i]);
        
      }

    }
    res(`filter done! Array of even : ${a}`);
    rej("NO even Elemnts in array! opn can't be done");
      
  })
}


const getSum =(arr)=>{
  return new Promise((res,rej)=>{
    let sum=0;
    for(i=0;i<arr.length;i++){
      sum+=arr[i];
    }
    res(`Sum Done!! ${sum}`);
    rej("Sum calc err!!!");
  })
}







//Q8.Create examples to explain async await function

// We will implement following operations on array using async await functions. 

// 1-given an array ,multiply all the items with 2 ,double all individual items 

// 2- filter out all the elements from the array which are divisible by 2 or even
// 3- calculate the sum of the numbers 


//promises


const arrayDouble =(arr) =>{
  return new Promise((res,rej)=>{
    for(i=0;i<arr.length;i++){
      arr[i]*=2;
    }
    
    res(`Array Doubled! ${arr}`);
  })
  
}

const getFilterData =(arr)=>{
  return new Promise ((res,rej)=>{
    let a=[];
    for(i=0;i<arr.length;i++){
      if(arr[i]%2 ===0){
        a.push(arr[i]);
        
      }

    }
    res(`filter done! Array of even : ${a}`);
    rej("NO even Elemnts in array! opn can't be done");
      
  })
}


const getSum =(arr)=>{
  return new Promise((res,rej)=>{
    let sum=0;
    for(i=0;i<arr.length;i++){
      sum+=arr[i];
    }
    res(`Sum Done!! ${sum}`);
    rej("Sum calc err!!!");
  })
}


async function DoTask(arr){
  let getArr =await arrayDouble(arr);
  console.log(getArr);
  let Filter =await getFilterData(arr);
  console.log(Filter);
  let Sum =await getSum(arr);
  console.log(Sum);
}

DoTask([1,3,5,7,9]);



//Q9.Create examples to explain promise.all function

 
//here's a scenario we have created three random promises and executng them all in one go using all function. 

const pr =()=>{
    return new Promise((res,rej)=>{
        res("hi it's my promise!!");
    })
}

const pr2 =()=>{
    return new Promise((res,rej)=>{
        res("It's a 2nd promise");
    })
}

const pr3 =()=>{
    return new Promise((res,rej)=>{
        res("It's a 3rd promise");
    })
}

//It will execute the all promises in one go..

Promise.all([pr(),pr2(),pr3()]).then((result)=>{
    console.log(result);
    
    //We can fetch the promises individually with indexes
    console.log(result[0]); //1'st promise'
    console.log(result[1]); //2nd promise
    console.log(result[2]); //3rd promise
    
}) 