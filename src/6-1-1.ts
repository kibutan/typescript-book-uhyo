type Animal611 = {
  species: string;
};
type Human611 = {
  name: string;
};

type User611 = Animal611 | Human611;

const tama: User611 = {
  species: "Felis silvestris catus",
};

const uhyo611: User611 = {
  name: "uhyo",
};

// error
// function getName(user: User611): string {
//   return user.name;
// }
