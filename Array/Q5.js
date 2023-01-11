let flag=0;
const Find_Num = (array,N,M) => 
{
  for(i=0;i<=N-1;i++){
    if(array[i] ==M){
      
      flag =1;
      break;
      
    }
    
    else{
      flag =0;
    }
    
  }
  
  if(flag ==1){
    return 'YES';
    
  }
  else{
    return 'NO';
  }
};
 
