#!/usr/bin/node
function fact (n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
const args = process.argv.slice(2);
const num = Number(args[0]);
if (isNaN(num)) {
  console.log(1);
} else {
  console.log(fact(num));
}
