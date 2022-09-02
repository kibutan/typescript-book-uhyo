type Animal633 = {
  tag: "animal";
  species: string;
};

type Human633 = {
  tag: "human";
  name: string;
};

type User633 = Animal633 | Human633;

const tama633: User633 = {
  tag: "animal",
  species: "cat",
};

const uhyo633: User633 = {
  tag: "human",
  name: "uhyo",
};

// error
// const alien633: User633 = {
//   tag: "alien",
//   type: "gray",
// };
function getUserName(user: User633) {
  if (user.tag === "human") return user.name;
  else return "名無し";
}

console.log(getUserName(tama633));
console.log(getUserName(uhyo633));
