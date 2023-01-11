let count=0;
const findCount = (N, K, Arr) => 
{
  for(i=0;i<=N-1;i++){
    if(Arr[i] ==K){
      count+=1;
    }
  }
  
  return count;
};
 
