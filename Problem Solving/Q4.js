let rev =0;
let i=0;
var Reverse_Number = (N) => 
{
  if(N <10){
    return N;
  }
  
  else{
    while(N >0){
      rem =N%10;
      rev =rev*10 +rem;
      N=Math.trunc(N/10);
    }
    
    return rev;
  }
  
  
};
 
