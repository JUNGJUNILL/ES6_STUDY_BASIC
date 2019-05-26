//function이라는 글자를 없앤다. 

//함수가 return 값만 있으면 중괄호 생략 return 글자 생략가능 
var a = ()=> new Date(); 

//인자가 하나뿐이면 ()도 생략가능 
var b = a => a*a; 
console.log(a,b); 

//return값이 없으니 중괄호는 필요함
var c = (a,b) => {console.log(a*b)}

var d = function(x){

    return {

        x: x
    }

}

//객체 반환시 ({}), 프로퍼티 축약 ㅇㅇ  
var e = x => ({x}); 



var f = function(a){

        return function(b){
            return a+b
        }
}

var ff = a => b => a+b; 
var y = f(1); 
var z = y(2); 
var zz = f(1)(2);
console.log(zz);  


//this 바인딩
/* 
const obj = {

    a() {
      console.log(this) ; //<-이 this는 obj이다.
      
      const b =function (){

        console.log(this); //<-이 this는 전역객체 window이다. 
                           //함수라는 것이 실행되는 순간 this를 바인딩 한다.
                           //하지만 이 부분의 this 같은 경우는 바인딩 할게 없어서 전역 객체 window를 바인딩 한다.

      };

      b.call(this); //에로우 펑션은 따로 바인딩 해줄 필요가 없다. 
    }
}

obj.a();
*/

//에로우 펑션은 따로 바인딩 해 줄 필요가 없다. 
//에로우 펑션은 블록스코프가 아닌 '함수 스코프'를 생성한다. 다만 , 실행컨텍스트 생성 시 this를 바인딩 하지 않는다. 
const obj = {

    a() {
      console.log(this) ; //<-이 this는 obj이다.
        
      const b = () =>{
          console.log(this); 
      }

      b(); 
    }
}

obj.a();

/*
const obj01 = {

    grades : [80,90,100], 
    getTotal : function(){
            this.total = 0; 
            this.grades.forEach(function(v){
                this.total = this.total + v; 
        },this); //<-여기에 this를 해주면 forEach에서 사용하는 모든 this는 저 this가 되는 것이고 , 이 this는 우리가 아는 obj01이 된다. 
    }
}

*/
//하지만 이보다 더 좋은 방법은 그냥 에로우 함수를 사용하면 되는 것이다. 
const obj02 = {

    grades : [80,90,100], 
    getTotal : function(){
            this.total = 0; 
            this.grades.forEach( v => {
                this.total +=v
            })
        }
}

obj02.getTotal(); 
obj02

//-----------------------------------------------------------------------------^_^
const b = {

    name : "호호", 

    bb () {
        const b = x => this.name; 
        console.log(b()); 
    }


}
b.bb();


//-----------------------------------------------------------------------------
const bb = {

    name : "하하",
    bb () {
        return this.name; 
    },

    a: x=> {
        return this.name; 
    }

}

bb.bb()
 //"하하"
bb.a()
// ""
//이 말은 에로우 펑션은 this를 바인딩하지 않으므로 메소드로서의 역할이 아닌 함수로서의 역할을 한다. 