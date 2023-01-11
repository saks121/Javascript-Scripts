let flag=0;
const isAllPass = (N, Arr) => 
{
   for(i=0;i<=N-1;i++){
     if(Arr[i] >=32){
       flag+=1;
     }
   }
   
   if(flag ==N){
     return 'YES';
   }
   else{
     return 'NO';
   }
};
 
