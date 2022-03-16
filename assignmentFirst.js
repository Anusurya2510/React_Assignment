//Global Variable


var x = 5; 
function someThing(y) {
  var z = x + y;
  console.log(z);
}
someThing(4); // 9
console.log(x); // 5


var x = 5; // global
function someThing(y) {
  x = 1; // still global!
  var z = x + y;
  console.log(z);
}
someThing(4) // 5
console.log(x) // 1


3
var x = 5; // global
function someThing(y) {
  var x = 3; // local
  var z = x + y;
  console.log(z);
}
someThing(4); // 7
console.log(x); // 5

//local variable
1 It takes precedence over global variables

var msg = "Good morning";
function greeting() {
  msg = "Good Evening";
  console.log(msg);
}
greeting();



//Let 

1 Declaring twice triggers an error

let msg = "hey";
let msg = "this will give an error "  


2. block scoped 
let msg;
{
     msg = "works in a block"
    console.log(msg)
}

3. mutable 

let text = "change it to "
text = "whatever u want "
console.log(text)





//freezing Methods
1
const obj = {
  prop: 100
};

Object.freeze(obj);
obj.prop = 200; // Throws an error in strict mode

console.log(obj.prop); //100

//It is used for freezing objects and arrays.
//It is used to make an object immutable.


2
const object = {
  property: 'Welcome JS world'
};
Object.freeze(object);
console.log(Object.isFrozen(object));



----------------------------------------------------------------
1 All variables are accessible within functions.

function () {
  var bar = 'bar';  // if var is declared in a function then it is 
  let baz = 'baz';
  const qux = 'qux';

  console.log(bar); // bar
  console.log(baz); // baz
  console.log(qux); // qux
}




================================================================

for( let j = 0; j < 3; j++ ) {
  console.log(j);
};
console.log(j);

================================================================
console.log(i)  //hoisted because its var
 for( var i = 0; i < 3; i++ ) {
    console.log(i); // 0, 1, 2
  };

  console.log(i);


==================================================================
CLOSURES

let in the loop can re-binds it to each iteration of the loop,
making sure to re-assign it the value from the end of the previous loop iteration,
so it can be used to avoid issue with closures.


for (let i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i); // output 0, 1, 2, 3, 4 
  }, 100);  
}



for (var i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i); // output '5' 5 times
  }, 5000);  
}








console.log(bar); // ReferenceError: bar is not defined
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined

2)var declared variables are accessible anywhere in the function scope.
if (true) {
  var bar = 'bar';
  let baz = 'baz';
  const qux = 'qux';
}
console.log(bar); // bar

// let and const defined variables are not accessible outside of the block they were defined in.

console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined

3)//Hoisting : var and function move at top of their scope

var allows variables to be hoisted, meaning they can be referenced in code before they are declared.
let and const will not allow this, instead throwing an error.

=====>
var message;
console.log(message);
message = "The variable has been Hoisted";

     ||
     ||
     ||

console.log(message);  //undefined
var message = "The function has been Hoisted";

=====>
console.log(foo); // undefined
var foo = 'foo';

======>
console.log(baz); // ReferenceError: can't access lexical declaration 'baz' before initialization
let baz = 'baz';

======>
console.log(bar); // ReferenceError: can't access lexical declaration 'bar' before initialization
const bar = 'bar';