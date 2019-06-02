//객체의 헤체할당 
//가장 중요함 

const iu = {

    name: '아이유', 
    age : 25,
    gender:'female'
}

const {

    name :n,
    age : a,
    gender :g

} =iu; 
console.log(n,a,g);

console.log("--------------------------------------------------------"); 

//프로퍼티 축약을 활용할 수 있다.
const iu01 = {

    name: '아이유', 
    age : 25,
    gender:'female'
}

const {

    name,
    age,
    gender

} =iu01; 
console.log(name,age,gender);


console.log("--------------------------------------------------------"); 

//다중화라면.. 

const loginInfo  = {

    device : {

        createAt : '20190101',
        deviced : "phone",
        deviceType : "samsung"
    },

    user : {

        createAt : '20190101',
        email : 'fkdldjseodnl@naver.com',
        name : '정준일', 
        nickname : "captainryan", 
        number : "01088055172"

    }
}


const {
device : {

    createAt,
    deviced,
    deviceType
},

user : userInfo,
user : {
    createAt : userCreatedAt,
    email,
    name1
  

}

} =  loginInfo; 

console.log(userInfo)


/*
위에 결과나 해당 주석 부분이나 같다. 
const {
device : {

    createAt,
    deviced,
    deviceType
},

user : userInfo,
user : {
    createAt : userCreatedAt,
    email,
    name1
  

}

} = {

    device : {

        createAt : '20190101',
        deviced : "phone",
        deviceType : "samsung"
    },

    user : {

        createAt : '20190101',
        email : 'fkdldjseodnl@naver.com',
        name : '정준일', 
        nickname : "captainryan", 
        number : "01088055172"

    }
}

*/



console.log("--------------------------------------------------------"); 
//default parameter와의 연동. 중요한 듯 

const phone01 = {
    name : 'iPhone', 
    color : undefined

}

const {
    name : name02,
    version : version02 = "testVersion", 
    color : color02 = "blue"

} =phone01

console.log(name02,version02,color02); 



console.log("--------------------------------------------------------"); 


const deliveryProduct = {
    orderedDate : '20190101', 
    estimatedDate : '20190102', 
    status : '배송중', 
    items : [
            {name :'사과' , price:1000 , qty: 3 },
            {name :'딸기' , price:2000,  qty:4 },
            {name :'보리' , price:50000 , qty:1 },

    ]

}

const {

    estimatedDate : esti, 
    status, 
    items : [,...produces]

} = deliveryProduct 
console.log(esti,status,produces); 



console.log("--------------------------------------------------------"); 


//재밌네 ㅋㅋ 
const getArea = (info) => {

    const {
            width,
            height
    } = info
    return width * height
}

getArea({width : 10 , height:20})


//이런 방법도 있다.. 
const getArea01 = ({width , height} = {width : 0 , height : 0}) =>{

    return width * height; 

}
getArea01({width : 10 , height:20})