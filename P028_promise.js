


/*
 function test01(){

  setTimeout(function(){ console.log('test')} , 3000); 
 }

 test01(); 



 const test01 = ()=>{

  setTimeout(test001=>{console.log('rrr')},)

 }

*/

const populateHeader = (jsonObj)=>{

  let jsonProp01 = jsonObj['squadName']; 

  console.log('jsonProp01-> ' + jsonProp01); 

  let jsonProp02 = jsonObj['homeTown']

  console.log('jsonProp02-> ' + jsonProp02); 


 }


const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

 function get(url){

    return new Promise((resolve,reject)=>{

      var req= new XMLHttpRequest(); 

      req.open('GET',url); 
      
      req.onload = function(){

        if(req.status == 200){
          console.log("통신성공!!");
       
          resolve(req);
        }else{

          reject(Error(req.statusText)); 
        }
      };

      req.onerror = function(){
        reject(Error('NetWork Error'));
      };

      req.send();
    });

 }


const callApi = ()=>{
    const movies =  get('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
                    .then(message =>message.responseText)
                    .catch(err=> console.log(err))

                    movies.then((value)=>{
                      console.log(typeof value); 
                   let test = JSON.parse(value); 
                   test.members.map((member,index)=>{

                        console.log(member.name); 
                      });
                    }).catch((error)=>{         //reject()가 실행되면 catch가 실행된다. 
                      console.error(error); 
                  })
     
 }



 callApi(); 







