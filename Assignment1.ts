// TypeScript Assignment

// Question-1 Solution:
// using if else
let age: number = 20;
if (age >= 18) {
  console.log("You are Eligible to vote\n");
} else {
  console.log("You are not Eligible to vote\n");
}

//  Question-2 Solution:
// This PROGRAM to show a is greater using template literal
let a: number = 15;
let b: number = 13;
let result = a > b;
console.log(`Is a greater than b? ${result}\n`);

//  Question-3 Solution:
// USing boolean
let isStudent: boolean = false;
if (isStudent) {
  console.log("Welcome Student!\n");
} else {
  console.log("Access Restricted\n");
}

//  Question-4 Solution:
// PROGRAM to check the number is even or odd
let num: number = 8;
if (num % 2 == 0) {
  console.log(`${num} is even\n,`);
} else {
  console.log(`${num} is odd\n`);
}

//  Question-5 Solution:
// combining text and variable using template literal
let first_name: string = "Khurram";
console.log(`Hello, ${first_name}! How are you today?\n`);

// Question-6 Solution:
// PROGRAM to find the largest number
let x: number = 12;
let y: number = 23;
let z: number = 20;

let largest;
if (x > y && x > z) {
  largest = x;
} else if (y > x && y > z) {
  largest = y;
} else {
  largest = z;
}
console.log(`The Largest number is ${largest}\n`);

// Question-7 Solution:
//  combine Two VAriables using Template literal
let greeting: string = "Good Afternoon";
let person: string = "Khurram";
console.log(`${greeting},${person}! \n`);

// Question-8 Solution:
//  using Ternary operator
let isRaining: boolean = false;
let message: string = isRaining ? "Take an Umbrella!" : "Enjoy the Sun!\n";
console.log(message);

// Question-9 Solution:
// Addition, subtraction , multiplication , Division of two numbers
let n1: number = 14;
let n2: number = 7;
let result1 = n1 + n2;
console.log(`The Addition of ${n1} and ${n2} is ${result1}`);
let result2 = n1 - n2;
console.log(`The Subtraction od ${n1} and ${n2} is ${result2}`);
let result3 = n1 * n2;
console.log(`The Multiplication of ${n1} and ${n2} is ${result3}`);
let result4 = n1 / n2;
console.log(`The Division of ${n1} and ${n2} is ${result4}\n`);

// Question-10 Solution:
// PROGRAM to Assign a grade according to students numbers
let marks: number = 87;
let grade;
if (marks >= 90) {
  grade = "A";
} else if (marks >= 80 && marks <= 89) {
  grade = "B";
} else if (marks >= 70 && marks <= 79) {
  grade = "C";
} else if (marks >= 60 && marks <= 69) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`According to your marks ${marks} your grade is ${grade}`);
