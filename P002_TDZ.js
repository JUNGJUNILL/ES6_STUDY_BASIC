if(true){
    let a = 10; 

    if(true){
        console.log(a); 
        const a= 20; 
    }
    console.log(a); 
}
console.log(a); 
//에러 발생 
// -> TDZ : Temporal Dead Zone(임시 사각지대)
// let, const가 호이스팅 안하는게 아니라, 끌어올라가지기는 하는데 기존의 호이스팅인 undefined를 할당하지 않을 뿐이다. 