class User2 {
  static adminName: string = "Uhyo";
  static getAdminUser() {
    return new User2(User2.adminName, 26);
  }
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  isAdult(): boolean {
    return this.age >= 20;
  }
}

console.log(User2.adminName);
const admin = User2.getAdminUser();
console.log(admin.age);
console.log(admin.isAdult());
const uhyo2 = new User2("uhyo", 26);

// error
// console.log(uhyo2.adminName);
