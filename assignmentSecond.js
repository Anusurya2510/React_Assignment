//***********spread operator
1
const obj = { a: 1, b: 2 }
const shallowClone = { ...obj }


2
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
console.log(sum.apply(null, numbers));

3
function addCookiesInArray(arr) {
    return [...arr, 'Cookies'];
  }
  const result = addCookiesInArray(['I', 'really', "don't", 'like']); 
  console.log(result); 

4
const person = {
    name: 'Todd',
    age: 29,
  };
  
  const copyOfPerson = { ...person };
  
  console.log(copyOfPerson); 



//1. Array Example
const arr = [1, 2, 3];
const newArr = [...arr, 4];

//2. Object Example
const human = Object.freeze({ race: 'human' });
const john = { ...human, name: 'John' };
const alienJohn = { ...john, race: 'alien' };

//copying an array 
let fruits = ['Apple', 'Orange', 'Banana'];
let newFruitArray = [...fruits];
console.log(newFruitArray);

//Concatenating arrays
let arr1 = ['A', 'B', 'C'];
let arr2 = ['X', 'Y', 'Z'];
let result = [...arr1, ...arr2];
console.log(result);

//
let fruits = ['Apple', 'Orange', 'Banana'];
let newFruits = ['Cherry', ...fruits];
console.log(newFruits);

//spreading elements on function calls
let fruits = ['Apple', 'Orange', 'Banana'];
var getFruits = (f1, f2, f3) => {
    console.log(`Fruits: ${f1}, ${f2} and ${f3}`);
};
getFruits(...fruits);



//*******REST parameter
function addFiveToABunchOfNumbers(...numbers) {
    return numbers.map(x => x + 5);
  }
  const result = addFiveToABunchOfNumbers(4, 5, 6, 7, 8, 9, 10); 
  const [a, b, ...rest] = [1, 2, 3, 4];
  const { e, f, ...others } = {
    e: 1,
    f: 2,
    g: 3,
    h: 4,
  };

//******Template Literal

let greeting = `Hello World!`;

// String Substitution
let name = "Alex";
console.log(`Hi, ${name}!`); // Output: "Hi, Alex!"


// Multiline Strings
let greeting = "Hello \
World";

// Tagged Templates
fn`Hello ${you}! You're looking ${adjective} today!`


//Default Parameters
function add(x = 10, y = 20) {
    console.log(x + y);
}
add(30, 40);


//Array Destructuring


    //1
const numbers = ['one', 'two', 'three'];
const [one, two, three] = numbers;

console.log(one); 
console.log(two);
console.log(three);

    //2 swap
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); 
console.log(b);

//Object Destructuring

const o = { p: 42, q: true };
const { p, q } = o;

console.log(p);
console.log(q);