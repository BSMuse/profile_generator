const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What do you think of Node.js?",
  "What's your name?",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favorite (e.g., dinner, brunch, etc.)?",
  "What's your favorite thing to eat for that meal?",
  "Which sport is your absolute favorite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

function askQuestion(index) {
  if (index === questions.length) {
    rl.close();
    return;
  }

  rl.question(`${questions[index]} `, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    askQuestion(index + 1);
  });
}

askQuestion(0);
