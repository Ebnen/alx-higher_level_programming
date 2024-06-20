#!/usr/bin/node
const bold = process.argv.slice(2);
const [arg1] = bold;
const num = Number(arg1);
if (Number.isInteger(num) === true) {
  console.log(`My number: ${arg1}`);
} else {
  console.log('Not a number');
}
