type Animal651 = { tag: "animal"; species: string };
type Human651 = { tag: "human"; name: string };

type User651 = Animal651 | Human651;

function getNamesIfAllHuman(users: readonly User651[]): string[] | undefined {
  if (users.every((user) => user.tag === "human")) {
    return (users as Human651[]).map((user) => user.name);
  }
  return undefined;
}
