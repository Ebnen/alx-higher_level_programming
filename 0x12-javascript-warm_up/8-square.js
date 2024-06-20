#!/usr/bin/node
const bold = process.argv.slice(2);
const [arg1] = bold;
const x = Number(arg1);
if (Number.isInteger(x)) {
  for (let i = 0; i < x; i++) {
    console.log('#'.repeat(x));
  }
} else {
  console.log('Missing size');
}
