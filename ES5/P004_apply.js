o1 = {val1:1, val2:2, val3:3}; 
o2 = {val11:11, val22:22, val33:33};


function sum(){

    var _sum = 0; 
    for(const name in this){
        console.log(this[name] , this)
        _sum = _sum + this[name]; 
    }

    return _sum; 

}
console.log(sum.apply(o1)); 



var Person = {

    fullName : function(){
        return this.firstName + " : " + this.lastName; 
    }

}

var Person1 = {

    firstName:"준", 
    lastName :"일"

}

console.log(Person.fullName.apply(Person1)); 



//★★★
//apply(this, array); array는 해당 함수.apply 시 
//해당 함수의 파라메터 값이 된다. 

let o = {x : 15}; 
function f(a,b){

        console.log(a + (this.x * this.x) + b); 

}

function fff(object, func){

    let args = []; 
    for(let i=2; i < arguments.length; i++){ //2번 반복할 것이고.. 
        args.push(arguments[i]); 
        console.log("arguments[i] = >" , arguments[i]); 

    }

        
    func.apply(object,args); 
    //apply의 두번째 인자는 func함수의 파라메터 값이 된다. 
}


fff(o, f, "The value of x squared = ", ". Wow!");
//fff(o,  ->  func.apply(object, 로 인해 
//01
//function f의 this.x가 15가 되었고. 

//02
//arguments[1] = > The value of x squared = 
//arguments[2] = > . Wow!
//f(a,b)의 의미는 
//args[1] = a = The value of x squared 
//args[2] = b = . Wow! 



function sum(a,b,c){

    console.log("a = >" , a);  //1
    console.log("b = >" , b);  //3
    console.log("c = >" , c);  //5
    console.log("this.a + this.b + this.c = >" ,this.a + this.b + this.c); 
    console.log(a+b+c +this.a + this.b + this.c);

}


function test(object,func){

    const array = []; 
    for(let j=2; j<arguments.length; j++){
            array.push(arguments[j]); 
    }

    func.apply(object,...array); 

}

var object1 = {a:2 , b:4 , c:6}; 
test(object1,sum,1,3,5); 
