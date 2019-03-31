
//forEach for문 돌리는거랑 같은 개념 
const a =[1,2,3]; 

a.forEach(function(v,i,arr ){
        console.log(v,i,arr,this);  //this는 [10,11,12]를 의미한다. 

},[10,11,12]);


a.forEach(function(v,i,arr ){
    console.log(this[i]); 
},[10,11,12]);



//map : for문을 돌려서 새로운 배열을 만드는 목적 
//반환값이 array이다. 
const aa = [1,2,3]; 
const bb = aa.map(function(v,i,arr){

        console.log(v,i,arr,this); 
        return this[0] + v

},[10])

console.log(bb); 




//reduce
//반환값이 있어야 하마 

//초기값이 있는 경우 
//accumulate(p)에 초기값(10)이 오고 
//배열의 0번째 index부터 순회한다. 
const array01 = [1,2,3]; 
const res01 = array01.reduce(function(p,c,i){
        console.log(p,c,i); 
        return p+c; //이 반환값이 p로 또 가는 것이다.
},10);
console.log(res01); 

/*
10 1 0
11 2 1
13 3 2
16
*/

//reduce
//초기값이 없는 경우 
//accumulate(p)에 배열의 0번째 값이 오고 
//배열의 1번째 index부터 순회한다. 
const array02 = [1,2,3]; 
const res02 = array02.reduce(function(p,c,i){
        console.log(p,c,i); 
        return p+c; 
});
console.log(res02); 

const array03 = ['a','b','c','d']; 
const res03 = array03.reduce(function(c,val,index){
        c[val] = c;
        //c[val]은 빈 객체의 프로퍼티 생성 
        //c[val] = c 해당 프로퍼티에 변수 c를 매핑시키는 작업


        return c;
},{})


const array04 = [1,2,3,4,5,6,7,8,9,10];
const sum = array04.reduce(function(sum,val,index){
                return sum= sum+val; 

},0)
console.log(sum)