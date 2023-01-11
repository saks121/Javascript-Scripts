 
 function arrayMin(arr) {
  let min=arr[0];
  for(i=0;i<=arr.length;i++){
    
    if(arr[i] <min){
      min =arr[i];
      //console.log("Min changed at index"+ i);
    }
     
  }
  
  return min; 
  
}

function arrayMax(arr) {
  let max=arr[0];
 for(i=0;i<=arr.length;i++){
    //max =arr[0];
    if(arr[i] >max ){
        max =arr[i];
        //console.log("Max changed at index"+ i);
    }
  }
   
  return max; 
 
}

