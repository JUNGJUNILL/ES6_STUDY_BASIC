//new.Target 
//new 연산자를 강제하기 위한 것임 

function Person(name){

    if(this instanceof Person){ //this가 Person의 instance이면. new 연산자를 강제한다. 
                                //new 연산자를 안쓰면 this는 window이므로, Person 인스턴스가 아니므로 false
        this.name = name;
    }else {

        throw new Error('new 연산자를 사용하세요'); 
    }

}

//Person(1) 
new Person(1); 

var p1 = new Person("준일"); 
console.log("p1" , p1); 
var p2 = Person.call(p1,"곰"); 
console.log("p2" , p2); 

console.log("-----------------------------------------------------------------------")

function Person02(name){

    if(new.target !== undefined){ //new.target이라는거 차제가 그냥 하나의 변수이다. new Person02("정") 이거 자체가 new.target이라는 의미이다. 
        this.name=name; 
    }else{
        throw new Error('new 연산자를 사용하세요'); 
    }

}

var p1 = new Person02("준일"); 
console.log("p1" , p1); 
//var p2 = Person02.call(p1,"곰");  //에러 발생 new가 없어서 
//console.log("p2" , p2); 


console.log("-----------------------------------------------------------------------")


function Person03(name){

    this.name = name; 
    return 10; 

}

function Android(name){

    const res = Person03.call(this,name); //Person03을 new 연산자 없이 실행함 
    console.log(res); 
}

const p3  = new Android("준일봇"); 



console.log("-----------------------------------------------------------------------")

function Person04(name){

    if(new.target !== undefined){ //new.target이라는거 차제가 그냥 하나의 변수이다. new Person04("정") 이거 자체가 new.target이라는 의미이다. 
        this.name=name; 
    }else{
        throw new Error('new 연산자를 사용하세요'); 
    }

}


function Android01(name){

    const res = Person04.call(this,name); //Person03을 new 연산자 없이 실행함 
}

const p4  = new Android01("준일봇"); 




console.log("추상 클래스로 활용이 가능하다.-----------------------------------------------------------------------")

class A {

    constructor(){
        if(new.target === A ){throw new Error('이놈은 추상 클래스이다. ')} 
        console.log("A클래스 생성자");
    }
}

class B extends A{
    constructor(){
        super(); 
        console.log("B클래스 생성자"); 
    }
}
const a =new A(); 
const b =new B(); 

/*
class A {

    constructor(){
        console.log("A클래스 생성자");
    }
}

class B extends A{
    constructor(){
        super(); 
        console.log("B클래스 생성자"); 
    }
}
const a =new A(); 
const b =new B(); 
*/