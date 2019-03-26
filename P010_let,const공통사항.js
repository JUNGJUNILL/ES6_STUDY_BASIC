

//01.블록 스코프의 유효범위가 존재한다. 

//02.TDZ에 걸린다. 

//var를 웬만하면 쓰지마라... 

var a=10; 
console.log(window.a) //10
console.log(a) //10
delete a 
console.log(window.a) //10
console.log(a) //10 



//전역 공간에서 선언한 var 라는 변수는
//전역 변수임과 동시에 전역객체(window라던가)의 프로퍼티가 된다. 
//그래서 delete가 안된다. (양쪽에 다 걸쳐있어서...) 곱씹어보면 진짜 명언이다... 

//delete는 객체의 프로퍼티를 삭제하는 용도로 쓰인다. 

/*
window.a=10
10
a
10
delete a
true
a
//VM317:1 Uncaught ReferenceError: a is not definedat <anonymous>:1:1 (anonymous) @ VM317:1
window.a
undefined
var b=10;
undefined
delete b
false
delete window.b
false
b
10
window.b
10

*/

let c=30; 
console.log(window.c); //undefined
console.log(c); //30 

delete c //let 전역 객체의 프로퍼티가 아니므로 false 

window.b =20  // 20 
delete b  // true 
