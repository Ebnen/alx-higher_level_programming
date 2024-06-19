#!/usr/bin/node
const bold = process.argv.slice(2);
const firstArgument = bold.find(arg => arg !== undefined) || 'No argument';
console.log(firstArgument);
