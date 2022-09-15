import { readFile } from "fs/promises";

const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  });
};

const p = Promise.allSettled([readFile("bar.txt", "utf-8"), sleepReject(500)]);

p.then((result) => {
  console.log(result);
});
