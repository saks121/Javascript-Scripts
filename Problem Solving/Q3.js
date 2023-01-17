let sum=0;
var Perfect_Check = (N) => 
{
  for(i=1;i<=N;i++){
    if(N%i ===0 && N!==i){
      sum+=i;
    }
  }
  
  if(N <10){
    return 'YES';
  }
  
  if(N == sum){
    return 'YES';
  }
  
  else{
    return 'NO';
  }
        
};
 
