const Check = (A, B) => 
{
  if(A%10 ===0 && B%10 ===0){
    return true;
  }
  if(A%10 ===0 || B%10===0){
    return true;
  }
  else
  {
    return false;
  }
   
};
