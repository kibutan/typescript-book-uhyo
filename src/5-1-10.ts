class User6 {
  static adminUser: User6;
  static {
    this.adminUser = new User6();
    this.adminUser.#age = 9999;
  }
  #age: number = 0;
  getAge() {
    return this.#age;
  }
  setAge(age: number) {
    if (age < 0 || age > 150) {
      return;
    }
    this.#age = age;
  }
}

console.log(User6.adminUser.getAge());
