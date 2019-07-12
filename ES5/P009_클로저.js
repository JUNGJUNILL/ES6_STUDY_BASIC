function outter(){

    function inner(){
        var title = "hello"; 
        console.log("title  " +title ); 
    }

    inner(); 
}

outter(); 



function outter01(){

    var title = "love fetl so good"; 

    function inner01(){
        console.log("test-> " + title); 
    } //내부 함수는 외부함수의 지역변수에 접근할 수 있다. 

    inner01(); 

}

outter01(); 

const test = ()=>{

    const aa = 10; 

    const test01 = ()=>{
        console.log(aa); 
    }
    test01(); 
}

test(); 