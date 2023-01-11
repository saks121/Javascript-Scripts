 function Unique_Shirts (arr) {
  let freq=[];
  for(i=0;i<=1001;i++){
   freq[i] =0;
  }
  
  //counter increment
  
  for(i=0;i<=arr.length;i++){
    freq[arr[i]]++;
  }
  
  let ans=0;
  for(i=0;i<=freq.length;i++){
    if(freq[i] ===1){
    ans++;
    }
  }
  
  return ans;
  
  
}

