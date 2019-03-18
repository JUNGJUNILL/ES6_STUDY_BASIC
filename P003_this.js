
/*
var value  = 0; 

var obj = {
  
    value : 1,
    setValue : function(){
        this.value =2; //this : obj ->obj.value =2; 
        
        
        (function(){      //메소드가 아닌 함수이다. 그러므로
            this.value=3; //여기서 this는 window이다. -> window.value =3 이 말인 전역번수 value가 3이라는 의미이다.
        })(); 
            

        
        //블록 스코프로 obj의 value를 초기화 시켜주었다. 
        //우선순위와 관련이 있는 것 같다. (this는)가장 큰 우선 순위를 가진다. 
    }
}
obj.setValue(); 
console.log("value=> "+value); 
console.log("obj.value=> " + obj.value);
*/

/*
var value  = 0; 

var obj = {
  
    value : 1,
    setValue : function(){
        this.value =2; //this : obj ->obj.value =2; 
        
        var self = this;
        (function(){      //메소드가 아닌 함수이다. 그러므로
            self.value=3; //여기서 this는 window이다. -> window.value =3 이 말인 전역번수 value가 3이라는 의미이다.
        })(); 
            

        
        //블록 스코프로 obj의 value를 초기화 시켜주었다. 
        //우선순위와 관련이 있는 것 같다. (this는)가장 큰 우선 순위를 가진다. 
    }
}
obj.setValue(); 
console.log("value=> "+value); 
console.log("obj.value=> " + obj.value);
*/

/*
var value  = 0; 

var obj = {
  
    value : 1,
    setValue : function(){
        this.value =2; //this : obj ->obj.value =2; 
        
       
        var a = function(){      
            this.value=3; 
        }; 
        a.call(this);
        //다른 객체의 함수를 자기 것 마냥 사용할 수 있다. 
            

 
    }
}
obj.setValue(); 
console.log("value=> "+value); 
console.log("obj.value=> " + obj.value);
*/


var value  = 0; 

var obj = {
  
    value : 1,
    setValue : function(){
        let a = 20; 
        this.value =2; //this : obj ->obj.value =2; 
        
        
        {     
            let a =10; 
            this.value=3; 
                   //블록 스코프로 obj의 value를 초기화 시켜주었다. 
                   //우선순위와 관련이 있는 것 같다. (this는)가장 큰 우선 순위를 가진다. 
            console.log("a1=> " + a); 
        }
       
       
            console.log("a2=> " + a); 

 
    }

}
obj.setValue(); 
console.log("value=> "+value); 
console.log("obj.value=> " + obj.value);
console.log("obj.a=> " + obj.a);

//call 
/*
var person11 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

var person22 = {

    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
var person2 = {
    firstName:"Mary",
    lastName: "Doe",
}

//call의 첫번째 파라메터는 this를 대체 하는 것이다. 
var x = person11.fullName.call(person1); 
console.log(x); 

//call의 첫번째 파라메터는 this를 대체 하는 것이다. 
var y = person22.fullName.call(person2,'부천','한국'); 
console.log(y); 
//바인드 함수와 비슷하다. 
//다른 객체의 함수를 자기 것 마냥 사용 할 수 있다. 
*/