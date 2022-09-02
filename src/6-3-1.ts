type SignType = "plus" | "minus";
function signNumber(type: SignType): number {
  return type === "plus" ? 1 : -1;
}

function numberWithSign(num: number, type: SignType | "none") {
  if (type === "none") {
    return 0;
  } else {
    return num * signNumber(type);
  }
}

console.log(numberWithSign(5, "plus"));
console.log(numberWithSign(5, "minus"));
console.log(numberWithSign(5, "none"));

function numberWithSign2(num: number, type: SignType | "none") {
  if (type === "none") return 0;
  return num * signNumber(type);
}
console.log(numberWithSign2(5, "plus"));
console.log(numberWithSign2(5, "minus"));
console.log(numberWithSign2(5, "none"));

function numberWithSign3(num: number, type: SignType | "none") {
  return type === "none" ? 0 : num * signNumber(type);
}

console.log(numberWithSign3(5, "plus"));
console.log(numberWithSign3(5, "minus"));
console.log(numberWithSign3(5, "none"));
