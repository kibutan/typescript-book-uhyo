import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";
const data = readFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "../uhyo.txt")
);

// const data = readFileSync(join(fileURLToPath(import.meta.url)));
//
console.log(data.toString());
