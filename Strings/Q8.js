 
var Palin_Check = (str) =>
{
	let ab="";
	for(i=str.length-1;i>=0;i--){
	  ab+=str[i];
	  
	}
 
	
	if(str === ab){
	  return 'True';
	}
	
	else{
	  return 'False';
	}
	
}

