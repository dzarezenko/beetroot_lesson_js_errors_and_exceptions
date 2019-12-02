try {
  throw "test";
} catch (str) {
  console.log(str);
}

let f = () => {
  return 42;
  // throw 42
}

let a = f();
console.log(a);

try {
  throw 123;
} catch (n) {
  console.log(n);
}

try {
  throw false;
} catch (b) {
  console.log(b);
}

const CURRENCY_BTC = "btc";
const CURRENCY_EUR = "eur";
const CURRENCY_USD = "usd";
const CURRENCY_UAH = "uah";
const CURRENCY_RUB = "rub";
