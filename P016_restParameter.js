function f(x,y, ...z){
    console.log(z);  //나머지 파라메터 자체의 값은 array가 된다. 
                     //가장 마지막 파라메터로 넘겨야 한다. 
}


f(1,2,'정준일','정준이','정준삼');
f(1,2); //undefined


let person = {

    name : 'name', 
    age : 30, 
    get personInfo(){
        return this.name + ' '  + this.age; 
    },


}
console.log(person.personInfo);
console.log(person);
