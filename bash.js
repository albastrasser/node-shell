process.stdout.write('prompt > ');

const pwd = require('./pwd');
// process.stdin.on("data", pwd);

const ls = require('./ls');
// process.stdin.on("data", ls);

// let splitInput = data.split(" ");
// let comandName = splitInput[0];
// let fileName = splitInput[1];

const cat = require('./cat');
// process.stdin.on("data", cat);

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === pwd) {
    pwd();
  }
  if (cmd === ls) {
    ls();
  } else {
    let splitInput = cmd.split(' ');
    let commandName = splitInput[0];
    let fileName = splitInput[1];
    if (commandName === 'cat') {
      cat(fileName);
    }
  }
});

// const mainMenu = `Let's get started with some commands:
//     Input 1 for a greeting
//     Input 2 to see all my burger recommendations
//     Input 3 for a random nyc burger recommendation
//     Input 4 to add a burger restaurant
//   `;
// process.stdout.write(mainMenu);

// const { getOneBurgerPlace, getAllBurgers } = require('./burgers');

// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim(); // This removes newlines and spaces
//   console.log('this is the command', cmd);
//   switch (cmd) {
//     case '1':
//       process.stdout.write('Hello');
//       break;
//     case '2':
//       process.stdout.write(getAllBurgers().toString());
//       break;
//     case '3':
//       // What do we do here??
//       process.stdout.write(getOneBurgerPlace());
//       break;
//     case '4':
//       // What do we do here??
//       break;
//     default:
//       process.stdout.write("I'm sorry, I didn't understand that :(");
//   }
//   process.stdout.write(`\n${mainMenu}`);
// });
