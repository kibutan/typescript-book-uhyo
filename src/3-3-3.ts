type User = { name: string; age: number };
// Type '{ name: string; age: number; telNumber: string; }' is not assignable to type 'User'.
//   Object literal may only specify known properties, and 'telNumber' does not exist in type 'User'.ts(2322)
// const u: User = { name: "John", age: 30, telNumber = "123-456-7890" };

const obj = { name: "John", age: 30, TelNumber: "123-456-7890" };
const u2: User = obj;
export {};
