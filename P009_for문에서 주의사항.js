
var obj = {

    prop1 : 1,
    prop2 : 2,
    prop3 : 3, 


}

//암기가 필요한 부분... 되네;  
for(const e in obj){
    console.log( e ," : ", obj[e]); 
}

for(let ee in obj){
    ee = 10; //이렇게 재할당이 가능하므로 in 할 때는 const를 쓰도록 하자. 
    console.log(ee, " : " , obj[ee]);
}


for(const eee in obj){
    eee = 10; // err 발생 
    console.log(eee, " : " , obj[eee]);
}

//우리가 익히 알고 있는 for문을 작성 할 때는 let으로 변수를 선언해주자. 
for(let i=0; i<0; i++){
    console.log(i); 
}
