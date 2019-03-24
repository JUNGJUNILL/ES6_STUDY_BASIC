

var  array= []; 


for(var i=0; i<10; i++){

    array.push( (function(param){

            return function(){
                console.log(param); 
            }
    })(i)); 

}

array.forEach(function(f){
    f(); 
}); 



function aaa(param){

    console.log(param);

}

aaa("하하하");



(function bbb(param){

        console.log(param); 

})("test"); 