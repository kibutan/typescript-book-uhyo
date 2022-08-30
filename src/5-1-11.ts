class User7<T> {
  name: string;
  #age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }
  public isAdult() {
    return this.#age >= 20;
  }
}
const uhyo7 = new User7<string>("uhyo", 26, "admin");
const john = new User7("john", 22, { number: 24 });

const data2 = john.data;
