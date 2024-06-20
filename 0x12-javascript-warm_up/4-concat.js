#!/usr/bin/node
const bold = process.argv.slice(2);
const [arg1 = 'undefined', arg2 = 'undefined'] = bold;
console.log(`${arg1} is ${arg2}`);
