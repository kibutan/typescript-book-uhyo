import { readFile } from "fs/promises";

const p = readFile("./uhyo.txt", "utf-8");
p.then(
  (data) => {
    console.log(data);
  },
  (error: unknown) => {
    console.log("失敗", error);
  }
);
