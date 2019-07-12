
let aa = ['a','a','a']; 

const test =aa.map((value,index)=>{
  value = '['+value+'],'; 
if(aa.length-1 == index){
  value =value.replace(/,/gi,""); 
    console.log(value); 
}

return value; 

})


console.log(test);

