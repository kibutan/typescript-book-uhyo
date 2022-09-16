// 8-5-2のPromise.Race版。読み込み出来るか1ms経過したかで出力がかわる

import { readFile } from "fs/promises";
const sleepReject852 = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    console.log("Rejected");
    setTimeout(reject, duration);
  });
};

const p8522 = Promise.race([
  readFile("./wuhyo.txt", "utf8"),
  sleepReject852(1),
]);

p8522.then(
  (result) => {
    console.log("result", result);
    const body8522 = result.toString().split("\n");
    // console.log(body8522);
    let count = 0;
    let currentIndex = 0;
    for (let line of body8522) {
      // console.log("line", line);
      currentIndex = 0;
      while (true) {
        let index = line.indexOf("uhyo", currentIndex);
        if (index === -1) break;
        else {
          count++;
          currentIndex = index + 1;
        }
      }
    }
    console.log("result of uhyo", count);
  },
  (error: unknown) => {
    console.log("missed", error);
  }
);
