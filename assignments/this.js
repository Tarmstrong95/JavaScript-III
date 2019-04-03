/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding - if this is global, it will refer to the window object ---- hard trying to convert the 
                       information to my own words lol;

* 2. implicit binding - this referes to the object a function is called on;

* 3. new binding - if a constructor function is used. this referes to the newly created object that 
                    the constructor created;

* 4. explicit binding - not really sure how to explain this without just saying... well, what it is lmfao so
                         this is explicit when call or apply are used.... #reverse lmfao;
*
* write out a code example of each explanation above
*/

// Principle 1

// // code example for Window Binding
// this

// // Principle 2

// // code example for Implicit Binding
// Object.this

// // Principle 3

// // code example for New Binding
// variable = new Object(stuff)
// variable.stuff == this.stuff
// // Principle 4

// // code example for Explicit Binding
// Object.function.call(Object);
// Object.function.apply(Object);








// function Bitch(name, height, ass){
//     this.name = name;
//     this.height = height;
//     this.ass = ass;
// }
// Bitch.prototype.clap = function(){
//     return `${this.name}, clap that ${this.ass} ass`;
// }

// const efrain = new Bitch("efrain", "2inches", "fat");

// console.log(efrain.clap())