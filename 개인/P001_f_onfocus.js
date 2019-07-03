
function f_RemoveMask(aElement){


let test = aElement.value; 
console.log(test);
    

}


let obj = {

    value : "?"

}

f_RemoveMask(obj); 


var pattern = /\d{1,3}(?=(\d{3})+(?!\d))/g; 
var cheanWon = "999999999999999999"; 
console.log(cheanWon.replace(pattern,'$&,'));


var pattern02 = /(\-|\.|\/|\`|\정|\*)/g;
var cheanWon02 = ".정/준/-``**일.-"; 
console.log(cheanWon02.replace(pattern02,""));


var stockinday ="20193333"; 
var tStr="";
var i, j; 
var tLen = stockinday.length + 1; 
var aMask ='99999999'; 

for(i=0, j=0; i< stockinday.length; i++, j++){

    if( (j<aMask.length) &&  ((aMask.charAt(j) == ":")||(aMask.charAt(j) == ".")||(aMask.charAt(j) == "/")||(aMask.charAt(j) == "-"))

           
    ){

        tStr += aMask.charAt(j++);
    }
         tStr += stockinday.charAt(i);
}

console.log(tStr); 


var good = "[\-0-9]";
var sKey=String.fromCharCode(13);
if(skey.equals("\r")){
    console.log("힁?"); 
}
var re=new RegExp(sFilter);
re.test(sKey)