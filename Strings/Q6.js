let countA=0, countD=0;
var Game_Winner = (S) => 
{
  for(i=0;i<=S.length;i++){
    if(S[i] =='A'){
      countA+=1;
    }
    
    if(S[i] =='D'){
      countD+=1;
    }
  }
  
  
  if(countA >countD){
    return 'Aditya';
  }
  
  else if(countD > countA){
    return 'Danish';
  }
  
  else{
    return 'Draw';
  }
}
 
