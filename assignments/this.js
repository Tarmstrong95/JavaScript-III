/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding - if this is global, it will refer to the window object 

* 2. implicit binding - this referes to the object a function is called on;

* 3. new binding - if a constructor function is used. this referes to the newly created object                       that the constructor created;

* 4. explicit binding -  this is explicit when call or apply are used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this

// Principle 2

// code example for Implicit Binding
Object.this

// Principle 3

// code example for New Binding
variable = new Object(stuff)
// Principle 4

// code example for Explicit Binding
Object.function.call(Object);
Object.function.apply(Object);
