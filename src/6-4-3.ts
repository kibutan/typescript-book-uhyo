function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
type Human643 = { name: string; age: number };

const uhyo643: Human643 = { name: "uhyo", age: 26 };

const uhyoName = get(uhyo643, "name");
const uhyoAge = get(uhyo643, "age");
