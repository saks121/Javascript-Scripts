var word = "The quick brown fox jumped over the lazy dog"
let freqArr = new Map(); // #1. create the map 

for(let i=0;i<word.length;i++)
{
    if(word[i]==' ')
    {
        continue;
    }
    // word[i] is the alphabet at index i 
    if(freqArr.has(word[i]))
    {
        freqArr.set(word[i],Number(freqArr.get(word[i]))+1);
    }
    else
    {
        freqArr.set(word[i],1);
    }
}



freqArr.forEach((value,key)=>
{
    console.log(key + " : " + value)
});
