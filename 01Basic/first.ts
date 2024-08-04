// let age: number = 10;

// if (age > 9) {
//     age += 10;
// }

// console.log(age);

let sale = 123_456_679; // typescript compiler knows the type if we don't give any anotation ts compiler will
// know sale is of type "number"
let course: string = "TypeScript";
let is_published: boolean = true;

let level; // ts assume level is of type "any - represent any type of variable (same as normal js)"

level = 1;
level = 'a';

// We shoud avoid use of "any"