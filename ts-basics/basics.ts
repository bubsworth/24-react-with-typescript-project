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

type Person = {
  name: string;
  age: number;
}

let person: Person;

person = {
  name: 'Max',
  age: 32
}

// person = {
//   isEmployee: true
// }

let people: Person[];

// Type inference

let course: string | number = 'React';

course = 123;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1) // [-1, 1, 2, 3]
const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');