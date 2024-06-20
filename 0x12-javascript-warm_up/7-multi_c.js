#!/usr/bin/node
const bold = process.argv.slice(2);
const [arg1] = bold;
const x = Number(arg1);
if (Number.isInteger(x)) {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
