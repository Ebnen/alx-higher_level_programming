#!/usr/bin/node
const bold = process.argv.slice(2);
if (bold.length === 0) {
    console.log('No argument');
}else if (bold.length === 1) {
    console.log('Argument found');
}else 
    console.log('Arguments found');
