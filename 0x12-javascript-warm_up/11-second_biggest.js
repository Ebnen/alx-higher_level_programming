#!/usr/bin/node
const args = process.argv.slice(2);
if (args.length <= 1) {
  console.log(0);
} else {
  const nums = args.map(Number);
  const max = Math.max(...nums);
  const lad = Math.max(...nums.filter(n => n !== max));
  console.log(lad);
}
