const tag = function(str , arg1, arg2){
        return {str: str, arg1 : arg1, arg2 : arg2}; 
}
const res  = tag `순서가 ${1}이렇게 ${2}`; 
console.log(res); 

//string interpolation으로 끝나면 뒤에는 빈 문자열로 인식하게 된다.
//그렇기 때문에 string interpolation보다 문자열이 무조건 하나 더 많을 수 밖에 없다. 

/*
{str: Array(3), arg1: 1, arg2: 2}
arg1: 1
arg2: 2
str: Array(3)
        0: "순서가 "
        1: "이렇게"
        2: ""                   //문자열 배열은 string interpolation보다 +1 많다. 
length: 3
        raw: Array(3)
        0: "순서가 "
        1: "이렇게"
        2: ""
length: 3
__proto__: Array(0)
__proto__: Array(0)
__proto__: Object

*/



const tag01= function(str , ...arg1){ //...arg1로 하게 되면 해당 string interpolation이 
                                      //arg1라는 프로퍼티 배열로 담기게 된다
        return {str: str, arg1}; 
}
const res01  = tag01 `순서가 ${2}이렇게 ${2}${2}${2}${2}`; 
console.log(res01); 

const array01 = res01.arg1; 
const sum = array01.reduce(function(acom,curr,index){
        console.log(acom,curr);
        return acom + curr; 

},0); 
console.log("sum->" , sum); 

const tag02 = (strings, ...express) =>{ console.log(strings, express);  }
const a = "iu" , b = "friday";
const str = tag02 `정준일, ${a}! Today is ${b}!!`;  


/*
const str01 = `이 함수는${'각 문자열'}마다${'|_suffix|'}라는 글자를 추가합니다.`; 

const test = (str, ...expr)=>{

        return {str : str , expr}; 
}
const res = test `이 함수는${'각 문자열'}마다${'|_suffix|'}라는 글자를 추가합니다.`; 

console.log(res); 
console.log(res.str); 
console.log(res.expr); 
*/
const addSuffix = (strs, ...exps) => {
        
        // strs의 모습  ['',"이 함수는", "마다", "라는 글자를 추가합니다."]
        return strs.reduce(function(acc , curr , inex){
                //이 reduce는 총 3번 반복할 터이고.. 
                console.log('acc->',acc); 

                let res03 = acc + curr + '_suffix '
                //01. '' + '이 함수는'+'_suffix '
                //02. '이 함수는_suffix 각 문자열'+'마다'+'_suffix '
                //03. '이 함수는_suffix 각 문자열'+'마다'+'_suffix '+'|_suffix|'+'라는 글자를 추가합니다.'


                if(exps[inex])  res03 = res03 + exps[inex]
                //exps[0] == '각 문자열' == true 
                //'' + '이 함수는'+'_suffix '+'각 문자열'
                //res03 == 이 함수는_suffix 각 문자열 

                //exps[1] == '|_suffix|' == true 
                //'이 함수는_suffix 각 문자열'+'마다'+'_suffix '+'|_suffix|'

                //exps[2] == false 
               

                return res03; //이 반환값이 acc로 가게 된다. 

        },'')

}

console.log(addSuffix `이 함수는${'각 문자열'}마다${'|_suffix|'}라는 글자를 추가합니다.`); 


//string interpolation만 추려서 
//해당 그 값에 천단위 ,(콤마)를 붙여주는 로직 
const setDecimalSeperators = (strs, ...exps)=>{

        return exps.reduce(function(acc,curr,index){
                return acc+strs[index] + (curr + '').replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,'$&,')

        },'') + strs[strs.length-1]

}
const result = setDecimalSeperators `이 사과는 하나에 ${2000}원이고, 총 ${1234567}개를 구입하시면 총${2000*1234567}원 이예요`
console.log(result);

console.log("-----------------------------------------------------------------")

const createCollection = {
        Map(keys, ...vals){
                const m = new Map()
                vals.forEach((val,index)=>{
                        m.set(keys[index].trim(),val)
                })
                return m; 
        },
          

        //이건 잘 모르겠다. 
        WMap(keys,...vals){
                const wm = new WeakMap()
                for(let i =0; i<vals.length; i+=2){
                        wm.set(vals[i],vals[i+1])
                }
                return wm
        }, 


}

const map = createCollection.Map `a ${10} b${'what'} fn${v=> v+10}`
console.log("map-> ", map); 
//keys = [a,b,fn]
//vals = [10,what, v=> v+10]


const wkeys = [ {a : 100} , {b : 200}]
let wmap = createCollection.WMap `${wkeys[0]} ${10} 
                                  ${wkeys[1]} ${20}`
                                  console.log(wmap); 
