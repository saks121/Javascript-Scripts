let sum=0;
const findSum = (n) => {
  
    for(i=1;i <=n;i++){
      if(i%2 ===0){
        sum+=i;
      }
    }
    
    return sum;
};

