let count=0;
let rem=0;

const Find_Five = (N) => 
{
	  while(N >0){
	    rem =N%10;
	    if(rem == 5){
	      count+=1;
	    }
	    
	    N=Math.trunc(N/10);
	  }
	  
	  return count;

};