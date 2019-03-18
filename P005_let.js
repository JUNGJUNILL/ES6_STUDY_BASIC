

//let 호이스팅은 되지만 undefined를 할당해 주지 않는다. err 발생함 
let a =1; 

function f(){
    let b = 2; 
   // console.log(a,b,c); c때문에 에러
    
    if(true){
        let c =3; 
        //console.log(a,b,c); //ok 
    }
   // console.log(a,b,c); c때문에 에러


}
f();  
