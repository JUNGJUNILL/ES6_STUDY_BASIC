const f = function(x,y,z){

    x = x? x :4 
    y = y || 5
    if(!z){
        z=6
    }
    console.log(x,y,z); 

}

f(1); 
f(0,null);


//내부적으로... 
function a(a,b,c){



}
a(1,2,3);//이라고 하게 되면 

//함수 내부적으로는 
/*
function a(a,b,c){
    let a =1; 
    let b =2; 
    let c =3;

}

function a(a=1, b=2, c=3){
                                      내부적으로...   
    let a = a !== undefined ? : a : 1 즉 undefined면 디폴트 선언된 값을 넘겨라 라는 의미이다.
    let b =2;
    let c =3;

}

*/

//식이 올 수 도 있다. 
function b(a=1, b=a+1, c=3){
    console.log(a,b,c); 
}
b(1,undefined,3); 

//파라메터의 순서에 따라 TDZ에 걸려 에러를 발생 시킬 수도 있다. 
/*
function c(a=1, b=c+1 , c=3){

  
        let _a;
        let _b= _c + 1;  딱 봐도 TDZ에 걸린다.
        let _c;
    
    console.log(a,b,c); 
}
c(1,undefined,3); 
*/



//식이 올 수 있으므로 함수도 올 수 있다. 
const getDefault = function(){

    console.log('getDefault Called')
    return 10; 

}

const sum =  function(x,y=getDefault()){
    console.log(x*y); 
}
sum(100)

//기본값으로 할당하고자 하는 값이 변수일 경우 
/*
let aaa =10; 
let bbb =20; 
function d(aaa= aaa , bbb= bbb){ //똑같이 해 주면 안된다.(TDZ에 걸리기 때문에...) 
    console.log(aaa,bbb); 
}
d(); 
*/

const e =  function(a = 1 , b = 2 , c = 3){

    console.log(arguments); //유사배열 객체 {0 : 1, 1 : 2 , 2 : 3, length : 3}
                            //(array - like - object) : 객체인데, 각 프로퍼티의 키가 인덱스이고, length라는 프로퍼티가 있는 객체.
    console.log(a,b,c); 
}
e()
e(4)
e(4,5)
e(4,undefined,6)
e(4,5,6)
//chrome 개발자 도구로 해보면 무슨 말인지 이해가 될 것이다. 