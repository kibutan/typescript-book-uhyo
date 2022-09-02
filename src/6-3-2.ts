function formatNumberOrString(value: number | string) {
  if (typeof value === "number") {
    return value.toFixed(3);
  } else {
    return value;
  }
}

console.log(formatNumberOrString(3.14));
console.log(formatNumberOrString("uhyo"));
