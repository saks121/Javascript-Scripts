
var findGrades = (a) => {
  
  if(a>=0 && a <=10){
    p=1;
  }
  
  else if(a<=20 && a>=11){
    p=2;
  }
  
  else if(a<=30 && a>=21){
    p=3;
  }
  
  else if(a<=40 && a>=31){
    p=4;
  }
  
  else if (a<=50 && a>=41){
    p=5;
  }
  
  

  
  switch(p){
    
    case 1:
      return 'E';
    
    case 2 :
      return 'D';
    
    case 3 :
      return 'C';
      
    case 4 :
      return 'B';
    
    case 5:
      return 'A';
    
    
  }
  
};

