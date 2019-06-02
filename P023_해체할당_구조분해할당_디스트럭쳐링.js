//destructuring assignment 


//배열 해체할당 
var colors = ['red','white']
var color1 = colors[0]; 
var color2 = colors[1]; 
console.log(color1,color2); 

console.log("------------------------------------------------------------")

var colors01 =  ['red','white']; 
var  [col1,col2] = colors01; 
console.log(col1,col2); 

console.log("------------------------------------------------------------")

var colors02 =  ['red','white']; 
var [,col03] = colors02; 
console.log(col03); 

console.log("------------------------------------------------------------")

const colors03 = ['red', 'blue' , 'gray']; 
const [,col04,col05,col06] = colors03; 
console.log(col04,col05,col06); 
//col06 = 10; //col06이 const이므로 제 할당이 불가능하다. 

console.log("------------------------------------------------------------")

//rest Parameter와 연동 
const arr01 = [1,2,3,4,5]; 
const [a,...b] = arr01; 
const [,,...c] = arr01; 
console.log(a,b,c); 

console.log("------------------------------------------------------------")


//default Parameter와 연동 
const [a1 = 10 , b1 =20] = [undefined , 5]; 
console.log(a1,b1); 

const [c1,d1 = c1 *2] = [5]; 
console.log(c1,d1); // ㅋㅋ 재밌네ㅋㅋ

console.log("------------------------------------------------------------")

//에러뜸 
//const [e =f , f] = [undefined , 10]; 
//console.log(e,f); 

console.log("------------------------------------------------------------")


//다차원 배열의 활용 
const arr02 = [1,[2,[3,4],5],6]; 
const         [a2,[b2,[,c2],],d2] = arr02; 
console.log(a2,b2,c2,d2);  


const arr03 = [1,[2,[3,4],5],6]; 
const         [a3,[b3 ,aaa    ] ,d3] = arr03; 
console.log(a3,b3,d3); 
console.log(aaa);



console.log("------------------------------------------------------------")
//서로의 변수를 바꿀 수 있다. 
let a4 = 10; 
let b4 = 20; 
[a4,b4] = [b4,a4]; 
console.log(a4,b4); 

//오른쪽꺼랑 왼쪽거랑 매칭된다. 일부분만 하고 싶으면 ,(콤마) 로 구분해 준다. 