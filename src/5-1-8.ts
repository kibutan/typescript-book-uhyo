const User5 = class {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public isAdult(): boolean {
    return this.age >= 20;
  }
};

const uhyo4 = new User5("uhyo", 26);
console.log(uhyo4.name, uhyo4.age);
console.log(uhyo4.isAdult());
