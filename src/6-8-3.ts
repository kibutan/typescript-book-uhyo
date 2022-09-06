type ObjectA683<T> = {
  type: "hoge";
  value: T;
};
type ObjectB683 = { type: "huga" };

type Option683<T> = ObjectA683<T> | ObjectB683;

function isHoge<T>(obj: Option683<T>): obj is ObjectA683<T> {
  return obj.type === "hoge";
}

function showNumberIfExists(obj: Option683<number>) {
  if (isHoge(obj)) console.log(obj.value);
}

showNumberIfExists({ type: "hoge", value: 5 });
