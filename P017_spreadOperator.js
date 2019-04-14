

//[spreadOperator]-배열의 각 인자를 펼친 효과.. 
var birds = ['egle','pigeon']; 
var mammals = ['rabit','cat'];
var animals = birds.concat('whale').concat(mammals);
console.log(animals)

const test = [...birds , 'whale',...mammals]; 
console.log(test); 

const values = [20,10,30,50,40]; 
console.log(20,10,30,50,40); 
console.log(...values); 
console.log("최대값 = > " + Math.max(...values))


const values02 = [3,4,5,6,7,8]; 
const sum = (...args) => args.reduce((p,c) => p+ c)
console.log(sum(1,2,...values02,9,10))
//getter : 나머지 / 받는 입장 (restParameter)
//setter : 펼치기 / 주는 입장 (spreadOperator)




//iterable한 모든 데이터는 펼칠 수 있다. 
const str ='Hello!'; 
const splitArr = str.split(''); 
const restArr  = [...str]; 
console.log(splitArr,restArr) //결과값 : (6) ["H", "e", "l", "l", "o", "!"] (6) ["H", "e", "l", "l", "o", "!"]

const str02 = "hello!"; 
console.log(str[0]); 
console.log(str[1]);
console.log([...str02]); 
console.log(...str02); 

//unshift와 push를 대체 할 수 있다. 
//unshift : 배열의 가장 첫번째 요소로 넣고싶다.. 
//push : 배열의 가장 마지막 요소로 넣고 싶다... 

let originalArr = [2,3]; 
const preArr = [-2,-1]; 
const sufArr = [6,7]; 

originalArr.unshift(1);  //비용이 많이 든다.. 
console.log("originalArr.unshift(1); =>",originalArr); 

originalArr.push(4);
console.log("originalArr.push(4); =>",originalArr); 
console.log(originalArr); //원래 배열 

originalArr = [0,...originalArr,5]; //"새로운" 배열 
console.log(originalArr)



//'얕은복사'만을 수행한다. 
let originalArr01 =[
    {fisrt : 'hello', second : 'World!'},
    {fisrt : 'welcome', second : 'ES6!'}


]

let copiedArr = [...originalArr01]
console.log(copiedArr[0].fisrt);

copiedArr[0].fisrt="sexyGirl?!"; 
console.log(originalArr01[0].fisrt)
