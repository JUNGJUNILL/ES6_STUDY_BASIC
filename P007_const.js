
//const => constant variable (상수 변수)
//선언과 동시에 값을 할당해 주어야 한다. 
//const A; // ERR : Missing initializer in const declaration


//제 할당 할 수 없다. 
//const B=20; 
//B=20; 

const Obj = {

    prop1 : 1, 
    prop2 : 2

}


//Obj라는 변수는 상수가 맞지만, 
//Obj를 참조하고 있는 객체 자체는 상수가 아니므로, 
//참조해서 바꿔 줄 수 있다.
//(참조형 데이터(프로퍼티)를 상수변수에 할당할 경우 
//참조형 데이터 내부에 있는 프로퍼티들은 상수가 아니다.)
Obj.prop1 =999; 
console.log(Obj.prop1);


let a = { a : 1}; 
const b = a; 
//b =10; //const라서 제 할당이 안된다.  err : Assignment to constant variable.

console.log(b.a); 


//a는 10번 주소에 저장 30번 주소의 {a : 1} 객체를 참조 
//----------------------------
a=20; 
//----------------------------
//a는 1000번 주소의 20이라는 값을 참조 


console.log("a=> ",a); 
console.log("b=> ",b); 
//b는 a=20; 이라는 재할당된 a를 참조하는 것이 아니다. 

/*
 주소 
 10  : a -> 30번 주소를 참수 
 30  : { a : 1 }
 11  : b -> 30 

 a=20;의 의미는... 
 1000 : 20 
 10  : a -> 1000

 ***
 변수 선언과 실제 그 값의 주소값은 다르다. 

*/

const ARR = [0,1,2]; 
ARR.push(3); 
delete ARR[1]; 
console.log(ARR); 


//const의 객체 프로퍼티 또한 상수화 시키는 함수 
//Object.freeze()

const Obj1 = {

    prop1 : 1 

}

Object.freeze(Obj1);
Obj1.prop1 = 10;  
console.log(Obj1); 


const Obj2 = {

    prop1 : 1 ,
    prop2 : [1,2,3]
}
Object.freeze(Obj2);

Obj2.prop2=10; //freeze했기 떄문에 바뀌지 않지만.. 
console.log(Obj2.prop2);  //[1,2,3]

Obj2.prop2[0]=999; //프로퍼티의 참조 데이터이기 때문에 바뀔 수 있다. 
console.log(Obj2.prop2);  //[999,2,3]



Object.freeze(Obj2.prop2); 
Obj2.prop2[0]=999;
console.log(Obj2.prop2); 