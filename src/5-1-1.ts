class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }
  setAge(newAge: number): void {
    this.age = newAge;
  }
}

const uhyo = new User("Uhyo", 26);
const baby = new User("Baby", 0);
console.log(uhyo.name);
console.log(uhyo.age);
console.log(uhyo.isAdult());

uhyo.age = 26;
console.log(uhyo.age);
console.log(uhyo.isAdult());
