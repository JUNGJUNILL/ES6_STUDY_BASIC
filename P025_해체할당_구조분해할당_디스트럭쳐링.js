/*function objFunction() {
    console.log('Inside `objFunction`:', this.foo);
    return {
      foo: 25,
      bar: function() {
        console.log('Inside `bar`:', this.foo);
      },
    };
  }
  
  objFunction.call({foo: 13}).bar(); 
  */

 function objFunction() {
    console.log('Inside `objFunction`:', this.foo);
    return {
      foo: 25,
      bar: () => console.log('Inside `bar`:', this.foo),
    };
  }
  
  objFunction.call({foo: 13}).bar();