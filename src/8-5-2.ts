import { readFile } from "fs/promises";
const sleep851 = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

sleep851(100).then(() => {
  console.log("exit");
  process.exit();
});

const p851 = await readFile("./wuhyo.txt", "utf8");
console.log(p851);
