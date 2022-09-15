const sleep842 = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

async function get3842() {
  console.log("get3 called");
  await sleep842(500);
  console.log("await done");
  return 3;
}

console.log("calling get3");
const p842 = get3842();
p842.then((num) => {
  console.log(`num is ${num}`);
});
console.log("get3 is done");

async function main843() {
  const num1 = await get3842();
  const num2 = await get3842();
  const num3 = await get3842();
  return num1 + num2 + num3;
}

main843().then((result) => {
  console.log(`result is ${result}`);
});
