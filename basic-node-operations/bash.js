const commands = require("./commands.js");

//prompt the user for input
process.stdout.write('prompt > ');

process.stdin.on('data', (userInput) => {
  userInput = userInput.toString().trim();

  commands.evaluateCmd(userInput);
});
