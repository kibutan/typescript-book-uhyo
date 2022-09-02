type Human642 = {
  name: string;
  age: number;
};

type HumanKeys = keyof Human642;
let key: HumanKeys = "name";
key = "age";
// key = "hoge";

const mmConversionTable = { mm: 100, cm: 10, m: 1e3, km: 1e6 };

function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    cm: mmValue / 10,
    m: mmValue / 1e3,
    km: mmValue / 1e6,
  };
}

console.log(convertUnits(5600, "m"));
