function map(array: number[], callback: (x: number) => number): number[] {
  let return_array: number[] = [];
  for (const i of array) {
    return_array.push(callback(i));
  }
  return return_array;
}
const data = [1, 1, 2, 3, 5, 8, 13];

const result = map(data, (x) => x * 10);
console.log(result);
// [10,10,20,30,50,80,130]
// const xRepeat = (num: number) => "x".repeat(num);

function map2<T, U>(array: T[], callback: (x: T) => U): U[] {
  let return_array: U[] = [];
  for (const i of array) {
    return_array.push(callback(i));
  }
  return return_array;
}
const dataNum = [1, 1, 2, 3, 5, 8, 13];
const dataStr = ["a", "a", "b", "c"];
const dataBol = [1, -3, -2, 8, 0, -1];

const result2 = map2<number, number>(dataNum, (x) => x * 10);
const result3 = map2<string, string>(dataStr, (x) => x + x);
const result4: boolean[] = map2<number, boolean>(dataBol, (x) => x >= 0);
console.log(result2);
// [10,10,20,30,50,80,130]

console.log(result3);
// ["aaaaaaaaaa","aaaaaaaaaa","bbbbbbbbbb","cccccccccc"]

console.log(result4);
// [true,false,false,true,true,false]
