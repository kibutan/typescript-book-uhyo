import { readFileSync } from "fs";
const body = readFileSync("./uhyo.txt", "utf8").toString().split("\n");

let count = 0;
let currentIndex = 0;
for (let line of body) {
  currentIndex = 0;
  while (true) {
    let index = line.indexOf("uhyo", currentIndex);
    // console.log(line, index);
    if (index === -1) break;
    else {
      count++;
      currentIndex = index + 1;
    }
  }
}

console.log(count);
