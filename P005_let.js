

//let 호이스팅은 되지만 undefined를 할당해 주지 않는다. err 발생함 
let a =1; 

function f(){
    let b = 2; 
   // console.log(a,b,c); c때문에 에러
    
    if(true){
        let c =3; 
        console.log(a,b,c); //ok 
    }
   // console.log(a,b,c); c때문에 에러


}
f();  


console.log("------------------------------------"); 


/*재할당 가능*/
{
let a=1; 
a = 2; 
console.log(a); 
}

/*반복문 내에서의 함수 실행시 */
console.log("반복문 내에서의 함수 실행시 ------------------------------------"); 

var func = []; 

for(var i =0; i<4; i++){

    func.push(function(){
        console.log(i); 
    })

}

/*
function(){
        console.log(0); 
    },
function(){
        console.log(1); 
    },
function(){
        console.log(2); 
    },
function(){
        console.log(3); 
    }
 
 */

func.forEach(function(f){
    f(); 
})
//javascript는 함수가 실행될 때 변수가 resolve된다. 
//변수는 코드가 해석될 때, 실제 값으로 바뀐다. 

for(var i =0; i <4; i++){
    /*
    0 < 4 true  0 -> 1
    1 < 4 true  1 -> 2
    2 < 4 true  2 -> 3
    3 < 4 true  3 -> 4  var i는 이미 4인 것이다. 
    
    */
    console.log(i); 
}

console.log("즉시 실행함수 이용------------------------------------"); 

var func1 = [];

for(var j =0; j<4; j++){

    func1.push( (function(param){
        return function(){
            console.log(param); 
        }
    })(j))

}

func1.forEach(function(f){
        f(); 
}); 


console.log("let 이용------------------------------------"); 



var func2 = [];

for(let k =0; k<4; k++){

    func2.push( function(){
        console.log(k); 
    } )
        //let은 각각의 함수 스코프에 존재하므로... 

}

func1.forEach(function(f){
        f(); 
}); 