const readlineSync = require("readline-sync");
let userInput;

while (true) {
  userInput = readlineSync.question("Next input? ");
  console.log(`${userInput}`);
}
