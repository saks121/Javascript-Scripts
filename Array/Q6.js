let AgeEight=[];
const highAge = (N, Arr) => 
{
  for(i=0;i<=N-1;i++){
    if(Arr[i] >=18){
      AgeEight.push(Arr[i]);
    }
  }
  
  return AgeEight;
};
 
