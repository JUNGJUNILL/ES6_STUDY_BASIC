
//forEach 
var items = ['t1' , 't2', 't3']; 

items.forEach(function(param){
    console.log(param); 
}); 


//for In
//객체의 속성들을 반복하여 작업을 수행할 수 있다. 
//모든 객체에서 사용이 가능하다. 
//for in 구문은 객체의 key 값에 접근할 수 있지만, value값에 접근하는 방법은 제공하지 않음. 

var obj ={
    a : 1,
    b : 2,
    c : 3 
}

for(var prop in obj){

    console.log("?" + prop,obj[prop]);

}



//for of  
//ES6에 추가된 새로운 컬렉션 전용 반복 구문입니다. for of 구문을 사용하기 위해선
//컬렉션 객체가 [Symbol.iterator] 속성을 가져야 한다. 

var iterable = [10,20,30]; 
var test =iterable[Symbol.iterator]();
console.log(test.next().value);  
for(var key of test){
    console.log(key); 
}

