var shape = {
    type: '',
    getType: function() { return this.type; }
  };
  
  function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
  }
  
  Triangle.prototype = shape;
  Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
  };
  Triangle.prototype.constructor = Triangle;

  function findPerimeter(a, b, c) {
    `return (a + b + c);`
}
 var t = new Triangle(1, 2, 3); 
         t.constructor === Triangle; 
        true 
        shape.isPrototypeOf(t); 
        true 
         t.getPerimeter(); 
        6 
         t.getType(); 
        "triangle" 

        for (var i in t) { 
            if (t.hasOwnProperty(i)) { 
              console.log(i, '=', t[i]); 
           } 
          } 

          Array.prototype.shuffle = function () { 
            return this.sort(function () { 
              return Math.random() - 0.5; 
            }); 
          }; 