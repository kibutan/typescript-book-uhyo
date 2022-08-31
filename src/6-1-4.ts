type Human614 = { name: string };
type Animal614 = { species: string };
function getName(human: Human614) {
  return human.name;
}
function getSpecies(animal: Animal614) {
  return animal.species;
}

const mysteryFunc614 = Math.random() < 0.5 ? getName : getSpecies;
const uhyo614: Human614 = { name: "uhyo" };

// mysteryFunc614(uhyo614);
