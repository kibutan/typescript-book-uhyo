import { readFile } from "fs/promises";
try {
  const p851 = await readFile("./wuhyo.txt", "utf8");
  const body851 = p851.toString().split("\n");
} catch {
  console.log("error");
}

let count = 0;
let currentIndex = 0;
for (let line of body851) {
  currentIndex = 0;
  while (true) {
    let index = line.indexOf("uhyo", currentIndex);
    // console.log("while block", line, index);
    if (index === -1) break;
    else {
      count++;
      currentIndex = index + 1;
    }
  }
}

console.log(count);
