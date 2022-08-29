class User2 {
  static adminName: string = "Uhyo";
  static getAdminUser() {
    return new User2(User2.adminName, 26);
  }

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
