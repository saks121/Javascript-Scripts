let prod=1;
const Find_Prod = (array, N) => 
{
  for(i=0;i<=N-1;i++){
    prod*=array[i];
  }  
     
  return prod;
};
 
