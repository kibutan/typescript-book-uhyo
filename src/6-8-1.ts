type ObjectA<T> = {
  type: "hoge";
  value: T;
};
type ObjectB = { type: "huga" };

type Option<T> = ObjectA<T> | ObjectB;

const Object681A: Option<number> = {
  type: "hoge",
  value: 8,
};

const Object681B: Option<undefined> = {
  type: "huga",
};

const Object681C: Option<null> = {
  type: "huga",
};

const Object681D: Option<string> = {
  type: "hoge",
  value: "hogehogehugahuga",
};
console.log(Object681A.value);

function exercise681<T>(obj: Option<T>) {
  if (obj.type === "huga") return "The object is undefined of null";
  else return obj.value;
}

console.log(exercise681(Object681A));
console.log(exercise681(Object681B));
console.log(exercise681(Object681C));
console.log(exercise681(Object681D));
