
// entries() 메서드는 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 Array Iterator 객체를 반환한다. 
var array1 = ['a','b','c']; 
var iterator1 = array1.entries(); 

for(var i=0; i<array1.length; i++){

    //해당 value의 키 추출
    //console.log(iterator1.next().value[0]); 

    //해당 value 추출
    console.log(iterator1.next()); 
    //iterator1.next()의 반환값은 {value :  , done : }이다. 
    //value는 Array, done은 boolean이다. 


}

var someArray = [1,5,7]; 
var somArrayEntries = someArray.entries(); 

for(let ee of somArrayEntries){
    console.log(ee[1]); 
}





//Symbol은 객체에 Unique한 속성을 만들기 위해서이다. 
//다른 라이브러리와의 충동을 막기 위해서이다. 
//심볼은 Unique하기 때문에 description이 같아도 충돌하지 않는다.


var someString ="hi"; 
var iterator01 = someString[Symbol.iterator](); 
//문자열을 Symbol.iterator 시키면 char 형태로 하나하나 나눌 수 있다. 
//String's default iterator returns the string's characters one by one

//next()를 통해 나온 값은 다은 곳에 저장해 두지 않는 이상 두 번 다시 볼 수 없다. 

//console.log(iterator01.next()); 
//{value: "h", done: false}

for(let ee of iterator01){
    console.log(ee); 
}
