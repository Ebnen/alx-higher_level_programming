#!/usr/bin/node
const bold = process.argv.slice(2);
if (bold.length !== 2) {
  console.log('cant help you');
} else {
  const [arg1, arg2] = bold;
  console.log(`${arg1} is ${arg2}`);
}
