const readlineSync = require("readline-sync");
let userInput;

console.log(`Echoing... (type "quit" to stop)`);

while (true) {
  userInput = readlineSync.prompt();
  if (userInput === "quit") {
    break;
  }
  console.log(`${userInput}`);
}
