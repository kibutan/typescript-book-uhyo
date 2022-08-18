type Animal = {
  age: number;
};

type AnimalFamily = {
  familiName: string;
  mother: Animal;
  father: Animal;
  child: Animal;
};

type HumanFamily = {
  familiName: string;
  mother: Human;
  father: Human;
  child: Human;
};

type Human = {
  age: number;
  name: string;
};
export {};
