type User8 = {
  name: string;
  age: number;
};

function createUser8(name: string, age: number): User8 {
  if (name === "") {
    throw new Error("名前は空にできません");
  }
  return {
    name,
    age,
  };
}

function getMessage(user: User8, message: string): string {
  return `${user.name} (${user.age}) [${message}]`;
}

const uhyo8 = createUser8("uhyo", 26);
console.log(getMessage(uhyo8, "こんにちは"));

class User9 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("名前を入れてください@User9");
    }
    this.name = name;
    this.age = age;
    console.log("constructor", name, age);
  }

  getMessage9(user: User9, message: string): string {
    return `${user.name} (${user.age}) [${message}]`;
  }
}

const uhyo9 = new User9("uhyo", 26);
console.log(uhyo9);

console.log(uhyo9.getMessage9(uhyo9, "Hello"));
