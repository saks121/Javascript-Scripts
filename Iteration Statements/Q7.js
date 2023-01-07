let count=0;
const Prime_Check = (N) => 
{
	 for(i=1;i<=N;i++){
	   if(N%i ===0){
	     count+=1;
	     //console.log("i= "+i +"count=" +count);

	   }
	 }
	 
	 if(N ===0 ){
	   return 'YES';
	 }
	 
	 if(count == 2){
	   return 'YES';
	 }
	 
	 else{
	   return 'NO';
	 }
	
};

