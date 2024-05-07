// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isIntructor: boolean;

isIntructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
}

person = {
  name: 'Max',
  age: 32
}

// person = {
//   isEmployee: true
// }

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course: string | number = 'React';

course = 123;

