type Animal613 = {
  species: string;
  age: number;
};
type Human613 = Animal613 & {
  name: string;
};

const tama613: Animal613 = { species: "Felis silvestris catus", age: 3 };
const uhyo613: Human613 = {
  species: "Homo sapiens sapiens",
  age: 26,
  name: "uhyo",
};
