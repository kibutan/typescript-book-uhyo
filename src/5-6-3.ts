function createUser9(name: string, age: number): (arg: string) => string {
  return (arg: string) => `${name} (${age}): 「${arg}」`;
}

const getMessage9 = createUser9("uhyo", 26);

console.log(getMessage9("Hellllo"));
