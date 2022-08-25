type HasName = { name: string };

type Family<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

type Animal = { name: string };
type Human = { name: string; age: number };

type T = Family<Animal, Human>;

type Family2<Parent extends HasName, child extends Parent> = {
  mother: Parent;
  father: Parent;
  child: child;
};

type S = Family2<Animal, Human>;
// error
// type ERR = Family2<Human, Animal>;

export {};
