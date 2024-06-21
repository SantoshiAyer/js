// JavaScript has several built-in data types that can be classified into two main categories:
//  primitive types and object types.

// ### Primitive Types

// 1. String
// - Represents textual data.
    
    
    let name = "John";
    

// 2. Number
//    - Represents both integer and floating-point numbers.


let age = 25;
let price = 19.99;


// 3. BigInt
// - Represents integers with arbitrary precision.

    let bigNumber = 1234567890123456789012345678901234567890

// 4.Boolean
//    - Represents a logical entity and can have two values: `true` or `false`.
let isAvailable = true;


// 5.Undefined
// - Represents a variable that has not been assigned a value.

let x;
console.log(x); // undefined

// 6. **Null**
// - Represents the intentional absence of any object value.

let y = null;


// 7. Symbol
// - Represents a unique and immutable value often used as object keys.
let sym = Symbol("unique");

// # Object Types

// 1. *Object*
// - Represents a collection of key-value pairs.

let person = {
name: "John",
age: 30
};


// 2. Array
// - Represents a list-like object used to store multiple values.

let numbers = [1, 2, 3, 4, 5];


// 3.Function
// - Represents a block of code designed to perform a particular task.

function greet() {
return "Hello, World!";
}


// 4. **Date**
// - Represents a date and time.

let today = new Date();


// 5. **RegExp**
// - Represents regular expressions, which are used for pattern matching.

    let pattern = /abc/;

// 6. **Map**
// - Represents a collection of keyed data items, similar to an object but with additional features.

    let map = new Map();
map.set('key', 'value');

// 7. **Set**
// - Represents a collection of unique values.

let set = new Set([1, 2, 3]);

// ### Type Conversion

// JavaScript provides mechanisms for converting between different types:

// 1. **Implicit Conversion (Type Coercion)**
// - Automatically converting types during operations.

let result = '5' + 5; // '55' (string)


// 2. **Explicit Conversion**
// - Manually converting types using built-in functions.


     let num = Number('123'); // 123
     let str = String(123);   // '123'


// ### Type Checking

// JavaScript provides the `typeof` operator to check the type of a variable.


console.log(typeof "Hello"); // "string"
console.log(typeof 42);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);    // "object" (this is a well-known quirk in JavaScript)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof {});      // "object"
console.log(typeof []);      // "object" (arrays are objects in JavaScript)
console.log(typeof function(){}); // "function"


