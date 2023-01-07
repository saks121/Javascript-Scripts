let string="";
const Print_pattern = (N) => 
{
    for(i=1;i<=N;i++){
      for(j=1;j<=i;j++){
        
        string+="*";
      
      }
      string+="\n";
    }
    
    console.log(string);
};

