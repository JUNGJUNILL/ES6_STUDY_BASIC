//프로퍼티 축약--------------------------------------------------
var aa = 10; 
var bb =20; 

var ojb = {
    a : aa, 
    b : bb 

}


for(const e in ojb){

    console.log(e + " : " + ojb[e]); 

}

const aaa = 10; 
const bbb = 20; 

const obj01 = {
    aaa, 
    bbb 
    //이런식으로 프로퍼티 축약을 할 수 있다. 
}

for(const e in obj01){

    console.log(obj01[e]); 

}



//키 벨류가 동일하다면 키 만 써주면 밸류는 알아서 나옴 ㅇㅇ 
const convertExtension  = (fullFileName)=> {

    const fullFileNameArr = fullFileName.split('.')
    const fileName = fullFileNameArr[0]; 
    const ext =fullFileNameArr[1] === 'png' ? 'jpg' : 'gif'
    return {
        fileName,
        ext
    }

}

convertExtension('abc.png'); 
//---------------------------------------------------------------



//destructuring assignment 
//약간 apply 느낌..
const {

    //name :name,
    //age  :age
     name ,
     age 

} = {

    name :  "정준일", 
    age  : 30

}

console.log(name,age)
//---------------------------------------------------------------


//concise methods (간결한 메소드)
//간결한 메소드는 생성자 함수로서의 역할을 제한함(이 말의 전제는 프로퍼티 함수는 생성자로 이용할 수 있었다.)
//(딴짓하지말고 너 할일만 해라.. ), 성능이 더 좋아짐 왜냐하면 prototype 프로퍼티가 사라짐, 생성자가 사라짐, 함수 본연의 기능만 가능함 
var obj02 ={
    name : "foo", 
   getName01 : function(name){ return this.name = name}, //함수를 프로퍼티에 할당함 
   getName02(){ return this.name}             //concise methods 
}

obj02.getName01("정준일"); 
obj02.getName02(); 
console.dir(obj02.getName01)
/*
ƒ getName01(name)
arguments: null
caller: null
length: 1
name: "getName01"
prototype:
                                            constructor: ƒ (name)
                                            __proto__: Object
                                            __proto__: ƒ ()
[[FunctionLocation]]: VM1091:4
[[Scopes]]: Scopes[1]*/
const test01 = new obj02.getName01(); //일반 함수는 생성자로 이용할 수 있다.(이 사실은 이번에 처음 앎)

/*
ƒ getName01(name) 
getName01
name: undefined
__proto__:
                                            constructor: ƒ (name)
                                            __proto__: Object
*/
//const test02 = new obj02.getName02(); //TypeError: obj02.getName02 is not a constructor




//computed property name(계산된 프로퍼티명)
//객체 리터럴 선언시 프로퍼티 키값에 대괄호 표기로 접근 가능 
//대괄호 내에는 값 또는 식을 넣어 조합할 수 있음 
let className = 'class'; 
let obj = {};

obj = {
    'ab cd' : 'AB CD'
}

obj['ab cd'] = 'AB CD'


obj['A'+className] = "?"; 

const obj03 = {

        ['A' + className] : 'A급'
                //이게 된다. 
}
console.log(obj02); 

let suffix = ' name'; 
let iu = {

    ['last'+suffix] : '이',
    ['first'+suffix] : '지은'

}
console.log(iu) // {last name: "이", first name: "지은"}



//신기하네;; 
const count = (function(c){
    
        return function(){
            return c++
        }
})(0)


var obj04 = {

    [`a_${count()}`] : count(),
    [`a_${count()}`] : count(),
    [`a_${count()}`] : count()

}
console.log(obj04)





//own property enumeration order(고정된 프로퍼티 열거 순서)
const obj05 = {

    c: 1,
    2: 2,
    a: 3,
    0: 4, 
    b: 5,
    1: 6


}

const keys1 = []; 
for(const key in obj05){ //obj05의 프로퍼티는 key 
    keys1.push(key); 
}
console.log(keys1); //프로퍼티의 나열 순서가 숫자가 먼저 나옴(오름차순)+ 문자는 입력한 순서대로 
// ["0", "1", "2", "c", "a", "b"]

console.log(Object.keys(obj05)); //객체의 프로퍼티를 배열로 만들어주는 함수 Object.key
//["0", "1", "2", "c", "a", "b"]

console.log(Object.getOwnPropertyNames(obj05)); 
//["0", "1", "2", "c", "a", "b"]


const obj06 = {

        [Symbol('2')]  : true, 
        '01' : true,
        '10' : true,         
        '2'  : true,
        '0'  : true,
        '02' : true,
        [Symbol('1')]  : true

}

const keys2 = []; 
for(const key in obj06){ //obj05의 프로퍼티는 key 
    keys2.push(key); 
}
console.log(keys2); //프로퍼티는 일단 문자열인데... 0으로 시작하는 숫자는 문자열로 인식하고.. 그렇지 않으면 숫자로 인식한다... 
//["0", "2", "10", "01", "02"]

const obj07 = Object.assign({},obj05,obj06); 
const keys3 = []; 

for(const key in obj07){

    keys3.push(key); 
}


console.log(keys3); 
console.log(Object.keys(obj07)); 
console.log(Object.getOwnPropertyNames(obj07)); 
console.log(Reflect.ownKeys(obj07));

//결론 : 숫자를 asc , 문자열을 입력된 순서, 심볼을 입력된 순서. 
//(분명이걸 이용해서 뭔가를 할 수 있다는 확신이 생김)
