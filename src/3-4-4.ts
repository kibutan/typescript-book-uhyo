type Animal = {
  name: string;
};

type Family<Parent = Animal, Child = Animal> = {
  mother: string;
  father: string;
  child: string;
};
