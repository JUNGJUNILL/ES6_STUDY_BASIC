var obj = {

    string : 'zero', 
    yell : function(){
        console.log(this.string); 
    }

}

var obj02  = {

    string : 'what?', 
};

obj.yell.call(obj02);