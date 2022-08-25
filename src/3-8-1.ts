import { off } from "process";

type user = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data = `
uhyo,26,1
John smith, 17,0
Mary Sue,14,1
`;

// console.log(data.split("\n"));
const data_split: string[] = data.split("\n");
// console.log(data_split);
const users: user[] = [];
for (const split of data_split) {
  if (split) {
    const string = split.split(",");
    users.push({
      name: string[0],
      age: Number(string[1]),
      premiumUser: Boolean(Number(string[2])),
    });
  }
}

// add here
// const users:user[] = data.split("\n");

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age}はプレミアムユーザです)`);
  } else {
    console.log(`${user.name} (${user.age}はプレミアムユーザではありません)`);
  }
}
