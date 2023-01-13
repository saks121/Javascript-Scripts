// D:sum of segment
// M:length of segment
// arr:Array
let noOFWays =0;
function Birthday_Game(arr,D ,M) {
  for(i=0;i<arr.length;i++){
    var j=0;
    let currSum =0;
    while(j<M){
      currSum +=arr[i+j];
      j++;
    }
    if(currSum ==D){
    noOFWays++;
    }
  }
  
  

return noOFWays;
}

