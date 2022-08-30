class User3 {
  name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public isAdult(): boolean {
    return this.age >= 20;
  }
}

const uhyo3 = new User3("uhyo", 26);
console.log(uhyo3.name);
console.log(uhyo3.isAdult());

// error
// console.log(uhyo3.age);
