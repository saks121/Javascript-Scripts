let B=[];
let sumE=0; //sum --Even
let sumO=0; //sum --Odd
const findEvenOdd = (N, Arr) => 
{
  for(i=0;i<=N-1;i++){
    if(Arr[i]%2 ===0){
      sumE+=Arr[i];
    }
    
    else{
      sumO+=Arr[i];
    }
    
  }
  
  B.push(sumE);
  B.push(sumO);
  
  return B;
};
 
S