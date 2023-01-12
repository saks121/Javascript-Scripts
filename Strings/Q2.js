//let count=0;
var Count_Occ = (s) => 
{
   let n=s.length;
    let str = s.split("").sort().join("");
    let ans="";
    for(let i=0;i<n;i++) {//for the character thats is needed to be checked.
      let count =0;
      for(let j=0;j<n;j++) {//for the count of that character
      //this condition will tell you if the character has come first time or not
        if(str[i]===str[j] && i>j) {
          break;
        }
        
        if(str[i]===str[j]) {
          count+=1;
        }
      }
      if(count>1) {
        ans+=str[i]+count;
      }
    }
    return ans;

};
 
