/*const condition = true; 

const promise = new Promise((resolve,reject)=>{

    if(condition){
      resolve('성공'); 
    }else{
      reject('실패'); 
    }

}); 

promise.then((message)=>{ //resolve()가 실행되면 then 절이 실행된다. 
    console.log(message); 
})
.catch((error)=>{         //reject()가 실행되면 catch가 실행된다. 
    console.error(error); 
})
*/




/*
프로미스는 자바스크립트 비동기 처리에 사용되는 객체입니다. 
비동기 처리랑 '특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를
먼저 수행하는 자바스크립트 특성을 의미합니다. 
*/
const condition = true; 

const promise = new Promise((resolve,reject)=>{

    if(condition){
      resolve('성공'); 
    }else{
      reject('실패'); 
    }

}); 
console.log(typeof promise)
promise.then((message)=>{ //resolve()가 실행되면 then 절이 실행된다. 
   return new Promise((resolve,reject)=>{
     console.log(message+'ggg')
     resolve(message); 
   });  
})
.then((message2)=>{ //이 .then 구문은 바로 위에 새로 생성된 Promise
  console.log(message2); 
  return new Promise((resolve,reject)=>{
    resolve(message2+"hhh"); 
  }); 
})
.then((message3)=>{ //이 .then 구문도 바로 위에 새로 생성된 Promise
  console.log(message3); 
})
.catch((error)=>{         //reject()가 실행되면 catch가 실행된다. 
    console.error(error); 
})


console.log("----------------------------------------")


const fetch = require("node-fetch");
const callApi = ()=>{
 return  fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating') //fetch의 작업이 "그냥 완료되면(이 말 자체가 이해가 안되긴 한다.)
  .then(potato => potato.json()) //then()을 불러온다. json으로 파싱 후 
  .then(json => json.data.movies)
  .catch(err=> console.log(err))
 } 

 const getMovies = ()=>{

   const movies = callApi(); 
   //fetch의 return 값은 promise이다. 
   //그러므로 then, catch 처리를 해줘야 한다. 

  movies.then((movieList)=>{
    movieList.map((value,index)=>{
      console.log("["+value.id+ "] " + value.title); 
    }); 
  })
  .catch((error)=>{
    console.error(error); 
  }); 



 }


 getMovies(); 


 console.log("----------------------------------------")
/*
 //콜백의 저주 
 function findAndSaveUser(Users){

  Users.fineOne({},(err,user)=>{
      if(err){
        return console.error(err);
      }

      user.name='zero'; 
      user.save((err)=>{
        if(err){
          return console.error(err);
        }

        Users.findOne({gender:'m'},(err,user)=>{

        }); 
      });
  }); 
  */

  //저주 해결 
  //몽고디비관련.. 
  function findAndSaveUser(Users){
    Users.fineOne({})
      .then((user)=>{
        user.name = 'zero'; 
        return user.save();
      })
      .then((user)=>{
        return Users.fineOne({gender:'m'})
      })
      .then((user)=>{
        //....
      })
      .catch(err=>{
        console.error(err); 
      }); 

  }

console.log("----------------------------------------")
  

