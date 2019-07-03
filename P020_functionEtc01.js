// name property of function

function a () { }
console.log(a.name); 

const b = function() {}
console.log(b.name); 

const c = function cc() {}
console.log(c.name); 

const d = () => {}
console.log(d.name); 

const e = {

        om1 : function () {},
        om2 (){}, 
        om3 : () => {}


}

console.log(e.om1.name,e.om2.name,e.om3.name)

console.log('------------------------------------------')
class F {

    static method1 () {}
    method2 () {}

}


function G() {}
G.method1 = function() {} //<-함수 자체는 1급 객체이기 때문에 프로퍼티를 할당 해 줄 수 있다. 
G.prototype.method2 =  function() {}

const f = new F(); 
console.log(F.method1.name , f.method2.name); 


const g = new G(); 
console.log(G.method1.name , g.method2.name); 

console.log('------------------------------------------')


const ff = function(a,b) {return a+b; }
const gg = new Function('a','b','return a+b'); 



const person = {

    _name : "정준일", 
    get name () {
        return this.name; 
    }, 

    set name (v) {
        this.name = v; 
    } 

}

const descriptor = Object.getOwnPropertyDescriptor(person,'name'); 
console.dir(person); 