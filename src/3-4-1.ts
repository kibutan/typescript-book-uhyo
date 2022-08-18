type user<T> = {
  name: string;
  child: T;
};

type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const obj: Family<number, string> = {
  mother: 100,
  father: 200,
  child: "300",
};

const objerr: Family = {
  mother: 1000,
  father: 2000,
  child: "3000",
};
export {};
