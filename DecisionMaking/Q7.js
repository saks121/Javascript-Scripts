
const Max_out_of_three = (A,B,C) => {
  
  if(A >B && A>C){
    return A;
  }
  
  if(B >A && B>C){
    return B;
  }
  
  if(C >A && C>B){
    return C;
  }
  
  if(A==B ||B==C ||A==C){
    return -1;
  }
  if(A ===0 || B===0 || C===0){
    return 0;
  }
  
    

};

