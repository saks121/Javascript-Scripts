let sum=0;
let i=1;
let rem=0;
const Number_Sum = (N) => 
{
  
  while(N >0){
    rem=N%10;
    sum+=rem;
    N=Math.trunc(N/10);
  }
  
  return Math.round(sum);
	
};

