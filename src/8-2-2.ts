import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("input?:", (line) => {
  console.log(line);
  rl.close();
});
