async function get3841(): Promise<number> {
  console.log("get3が呼び出されました");
  return 3;
}
console.log("get3を呼び出します");
const p841 = get3841();
p841.then((num) => {
  console.log(num);
});
console.log("get3を呼び出しました");
