//random quick examples

let firstName = 'Hank'; //modern best practice is to declare each variables in different lines
let lastName = 'Verma';

const rate = 0.3;
//rate = 1;
console.log(`rate is - ${rate}`);

// types 

// PRIMITIVE TYPES (string, numbers, undefined, booolean, null)
let name = 'Hank'; // String literal //typeof name will give string // we can chane to ame=1 // now type of is number (dynamic vs static typing)
let age = 6; // Number literal
let isApproved = true; // Booolean literal
let anotherName = undefined; // if we dont define its still undefined literal // undefined is uncommon, null is common 
// typeof anotherName is undefined
//type of udnefined is always udnefined
let selectedColor =  null; // we use it in situations when we need to explicitly clear the value of variables.
// type of selectedColor will be 'object' because in JS, typeof null is OBJECT

// DYNAMIC TYPES (Arrays, functions, objects)
let person = {
    name : 'Hank',
    age : 6
} // object literal
console.log(person);

//dot notation //more consise, shorter, shoukd be default
person.name = 'Oreo';
console.log(person.name);

//bracket notation //when yo dont know the name of the target property until run time
person['name'] = 'Ryleigh';
console.log(person["name"]);

let selectedColors = ['red', 'blue']; //array literal
console.log(selectedColors[0]);

//important
// since jS is a dynamic programming language, the length of the array and the type of lements of the aray can change at run time
selectedColors[2] = 'gray'
console.log(selectedColors);

selectedColors[2] = 1
console.log(selectedColors);

//typeof array will give "object" , an array is an object in JS

//function
function greet(name = 'oreo', lastName='Verma') { //here name is a parameter to the fucntion
    console.log(`hello ${name} ${lastName}`) //name will not be accessible outside the function
}

greet(); //will give hello undefined
greet("Niharika", "verma") //here Niharika is an argument, argument is the actual value we supply

//function types
//performaing a task or calculates and returns a value

function square(number) {
    return number * number;
}

console.log(square(2)); //no error //we have 2 fucntion calls here, one to log funcion and argument is clal to another function
let result = square(2);
console.log(result);


//operators
//arithemtic
// +, -, /, %, *, ** (exponential, x**y - means x to yhe power y)

//Increment operator
let x = 10;
console.log(x); // returns 10
console.log(x++) // returns 10, doesnt increment, but in next line it will make ++x as 12 because after console it incremented
console.log(x) //-> this will print 11
console.log(+x) // returns 11
console.log(++x) // returns 12

//Increment operator
console.log(x); // returns 12
console.log(x--) // returns 12
console.log(x) //-> this will print 11
console.log(--x) // returns 10

//let y = y++
//console.log(y) //error

let y = x++;
console.log(y) // 10 - VERY IMPORTANT
console.log(x) // 11 - VERY IMPORTANT
y = ++x;
console.log(y) // 12
console.log(x) // 12

x = x + 5;
console.log(x) // 16
x += 5 //same thing

console.log("****************************************")

//equlity operators

console.log(x === 1) // Strict eQuality (type + valu equal)
console.log(x == 1) // lose eQuality (valu equal)
console.log(1 === 1) //true
console.log(1 == 1) //true
console.log('1' === 1) //false
console.log('1' == 1) //true
console.log(true === 1) //false
console.log(true == 1) //true
console.log(true == undefined) //false

console.log("****************************************")

//Logical operators with Boolen
console.log(true && true) // true
console.log(true && false) // false
console.log(true || true) // true
console.log(true || false) // true
console.log(true || true) // true

console.log("****************************************")

//Logical operators with non - Boolen *****Always note that it will execute till it finds true, 
//so in OR it stops at first true, in AND stops at first false else prints the secnd one if first is true
console.log(true && undefined) // UNDEFINED - IMPORTANT
console.log(true || undefined) // true
console.log(true && null) // UNDEFINED - IMPORTANT
console.log(true || null) // true

console.log("****************************************")
console.log(false && undefined) // UNDEFINED - IMPORTANT
console.log(false || undefined) // true
console.log(false && null) // UNDEFINED - IMPORTANT
console.log(false || null) // true
console.log(false || '') // ''
console.log(false && '') // false

console.log("****************************************")

console.log(true && 'Niharika') // Niharika
console.log(true || 'Niharika') // true
console.log(false && 'Niharika') // Niharika
console.log(false || 'Niharika') // true
console.log('Niharika' || false) // Niharika
console.log('Niharika' || true) // Niharika
console.log('Niharika' && false) // false
console.log('Niharika' && true) // true



// falsY (this is not same as boolean false)
// undefined
// null
// NaN
// 0
// false
// ''

// anything thats not FALSY is TRUTHY

// short circuiting - as soon as a truthy is found, evaluation stops (in OR || operator)