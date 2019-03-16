
var value  = 0; 

var obj = {
    value : 1,
    setValue : function(){
        this.value =2;
        {
            let a=10; 
            this.value=3;

        }
        //블록 스코프로 obj의 value를 초기화 시켜주었다. 
        //우선순위와 관련이 있는 것 같다. 가장 큰 우선 순위를 가진다. 
    }
}
obj.setValue(); 
console.log(value); 
console.log(obj.value);
console.log(obj.a); 