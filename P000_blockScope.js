
//블록에 의해 생기는 유효범위 
// {}에 의해서 변수의 유효범위가 결정된다. 
/*
{

    let a =10; 
    {
        let a=20; 
        console.log(a); 
    }
        console.log(a); 
    
    }
    console.log(a); // ReferenceError: a is not defined
    


(function (){
    var aa=10;
    (function (){
        var aa=20; 
        console.log(aa); 
    })();
        console.log(aa);
})(); 
console.log(aa); 


function test(){

        var aaa=100; 

}

console.log(aaa);  //에러뜸 var의 유효범위는 함수내 지역변수? 이므로 
*/
/*
function hasValue(p){
    console.log(v); //호이스팅 
    if(p){
        var v='blue';
        console.log("true  "  +  v);  
    }else{
        var v='red';
        console.log("false  "  +  v); 
    }
    console.log("end   "  + v);
}
hasValue(10);
*/

function hasValue(p){
    //console.log(v); //호이스팅 
    if(p){
        let v='blue';
        console.log("true  "  +  v);  
    }else{
        let v='red';
        console.log("false  "  +  v); 
    }
    //console.log("end   "  + v);
}
hasValue(10);

//하허하ㅓ