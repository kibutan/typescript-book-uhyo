type Animal612 = { species: string; age: string };
type Human612 = { name: string; age: number };

type User612 = Animal612 | Human612;

const tama612: User612 = {
  species: "Felis silvestris catus",
  age: "永遠の17歳",
};

const uhyo612: User612 = {
  name: "uhyo",
  age: 26,
};

function showAge(user: User612) {
  const age = user.age;
  console.log(age);
}

showAge(uhyo612);
showAge(tama612);

type MysteryFunc612 = ((str: string) => string) | ((str: string) => number);
function useFunc(func: MysteryFunc612) {
  const result = func("uhyo");
  console.log(result);
}
