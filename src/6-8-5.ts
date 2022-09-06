type ObjectA685<T> = {
  type: "hoge";
  value: T;
};
type ObjectB685 = { type: "huga" };

type Option685<T> = ObjectA685<T> | ObjectB685;

function isHoge685<T>(obj: Option685<T>): obj is ObjectA685<T> {
  return obj.type === "hoge";
}
function doubleOption(obj: Option685<number>) {
  return mapOption685(obj, (x) => x * 2);
}
const four685: Option685<number> = { type: "hoge", value: 4 };
const nothing685: Option685<number> = { type: "huga" };

// function mapOption(obj: Option685<number>, func: (x: number) => number) {
//   if (obj.type === "hoge") return func(obj.value);
//   return;
// }

function mapOption685<T, U>(
  obj: Option685<T>,
  func: (value: T) => U
): Option685<U> {
  switch (obj.type) {
    case "hoge":
      return {
        type: "hoge",
        value: func(obj.value),
      };
    case "huga":
      return {
        type: "huga",
      };
  }
}
console.log(doubleOption(four685));
console.log(doubleOption(nothing685));
