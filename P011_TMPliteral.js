

var a='aaa'; 
var b="aaa";
var c=`aaa`;

var aa = "abc\nbbb"; 
var cc = `abc ${10}
            bbb` //multiline 들여쓰기 주의 
console.log(aa); 
console.log(cc); 


const aaa = 10; 
const bbb = 20; 
const str = `${aaa} +${bbb} = ${aaa+bbb}` //string interpolation
console.log(str); 



//중첩된 backtick 처리 
console.log(`foo ${`bar`}`); 
console.log(`foo ${`bar ${`baz`}`}`); 

//html 예쁘게 쓰기 
function func01(){
    return `
<div>
    <h1>string interpolaion</h1>
</div>
 `.trim(); 
}

func01(); 