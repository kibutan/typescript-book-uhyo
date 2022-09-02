type Animal634 = {
  tag: "animal";
  species: string;
};

type Human634 = {
  tag: "human";
  name: string;
};

type Robot634 = { tag: "robot"; name: string };
type User634 = Animal634 | Human634 | Robot634;

const tama634: User634 = {
  tag: "animal",
  species: "cat",
};

const uhyo634: User634 = {
  tag: "human",
  name: "uhyo",
};

// error
// const alien633: User633 = {
//   tag: "alien",
//   type: "gray",
// };
function getUserName634(user: User634): string {
  switch (user.tag) {
    case "human":
      return user.name;
    case "animal":
      return "名無し";
    case "robot":
      return `CPU ${user.name}`;
  }
}

console.log(getUserName634(tama634));
console.log(getUserName634(uhyo634));
