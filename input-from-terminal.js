const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = require("prompt-sync")({ sigint: true });
const age = prompt("How old are you? ");
console.log(`You are ${age} years old.`);

readline.question('Who are you?\n', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});

