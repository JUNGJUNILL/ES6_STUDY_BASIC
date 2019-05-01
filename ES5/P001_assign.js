//두 개의 오브젝트를 하나로 병합하기 

const target = { a :1 , b :2}; 
const source = { b :4 , c :5}; 

const returnedTarGet = Object.assign(target,source); 
console.log(target); 
console.log(source);

//객체 클로닝 
const obj = { a:1 ,b:2 }; 
const copy  = Object.assign({},obj); 
console.log(copy); 

