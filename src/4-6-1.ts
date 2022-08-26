console.log("-------------------------------------------");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("Fizz Buzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
console.log("-------------------------------------------");

function getFizzBuzzString(i: number): string {
  let message = "";
  if (i % 3 === 0 && i % 5 === 0) message = "FizzBuzz";
  else if (i % 3 === 0) message = "Fizz";
  else if (i % 5 === 0) message = "Buzz";
  else message = String(i);
  return message;
}

function sequence(start: number, end: number): number[] {
  let return_array: number[] = [];
  for (let i = start; i <= end; i++) {
    return_array.push(i);
  }
  return return_array;
  //   [1,2,3,...,100]
}

for (let i = 1; i <= 100; i++) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
console.log("-------------------------------------------");

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
