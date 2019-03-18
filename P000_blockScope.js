
//블록에 의해 생기는 유효범위 
// {}에 의해서 변수의 유효범위가 결정된다. 
/*
    */
{

    let a =10; 
    {
        let a=20; 
        let b=30;
        console.log(a,b); 
    }
        console.log(a,b); //ReferenceError: b is not defined
    
}
    console.log(a); // ReferenceError: a is not defined 
console.log("-------------------------------------------------------------------"); 


(function (){
    console.log("호이스팅! = >" + aa);
    var aa=10;
    (function (){
        var aa=20; 
        console.log(aa); 
    })();
        console.log(aa);
})(); 
console.log(">" +  aa);  //에러뜸 var의 유효범위는 함수내 지역변수? 이므로 
console.log("-------------------------------------------------------------------"); 

/*
function test(){

        var aaa=100; 

}

console.log(aaa);  //에러뜸 var의 유효범위는 함수내 지역변수? 이므로 
*/
console.log("-------------------------------------------------------------------"); 

function hasValue(p){
    console.log(v); //호이스팅 var는 호이스팅으로 undefined 할당해 준다. 
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
console.log("-------------------------------------------------------------------");

function hasValue1(p){
    //console.log(v); //let은 호이스팅은 되지만, undefined를 할당하지 않아서 에러가 발생한다. 
    if(p){
        let v='blue';
        console.log("true  "  +  v);  
    }else{
        let v='red';
        console.log("false  "  +  v); 
    }
    //console.log("end   "  + v);
}
hasValue1(10);
