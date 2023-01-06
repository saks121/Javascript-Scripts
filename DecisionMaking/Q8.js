
const findSndSmallest = (x,y,z) => {
    if(x >y && x>z){ //x is largest
      if(y >z){
        return y;
      }
      
      else{
        return z;
      }
    } 
    
    if(y >z && y>x){ //y is largest
      if(x >z){
        return x;
      }
      
      else{
        return z;
      }
    }
    
    if(z >x && z>y){ //z is largest
      if(x >y){
        return x;
      }
      else{
        return y;
      }
    }
     
    
     
    
};

