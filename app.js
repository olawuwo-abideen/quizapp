import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'NODEJS QUIZ\n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    Hello!
    Welcome to Nodejs Quiz
    If you get any question wrong you will be force to ${chalk.bgRed('QUIT')}
    So get all the questions right...
    All the Best!!!

  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Good ${playerName}. That's the correct answer` });
  } else {
    spinner.error({ text: `Quiz over, you lose ${playerName}!` });
    process.exit(1);
  }
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;
}

function winner() {
  console.clear();
  figlet(`Congrats , ${playerName} !\n You have won the sum of $ 10 , 0 0 0 , 0 0 0`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        ``
      )
    );
    process.exit(0);
  });
}


async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'Why code written in Node.JS is pretty fast although being written in JavaScript?\n',
    choices: [
      'Node.JS internally converts JavaScript code to Java based code and then execute the same',
      'Node.JS internally converts JavaScript code to C based code and then execute the same',
      "Being built on Google Chrome's V8 JavaScript Engine",
      'None of the above',
    ],
  });

  return handleAnswer(answers.question_1 === "Being built on Google Chrome's V8 JavaScript Engine");
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'Which of the following is not a valid HTTP method?\n',
    choices: [  'get', 
                'header', 
                'post', 
                'put',
                'patch'],
  });
  return handleAnswer(answers.question_2 === 'header');
}

async function question3() {
    const answers = await inquirer.prompt({
      name: 'question_3',
      type: 'list',
      message: 'Which of the following code print the name of operating system?\n',
      choices: [  "console.log('type : ' + os.getType());", 
                  "None of the above.", 
                  "console.log('type : ' + os.type);", 
                  "console.log('type : ' + os.type());"
                  ],
    });
    return handleAnswer(answers.question_3 === "console.log('type : ' + os.type());");
  }





  async function question4() {
    const answers = await inquirer.prompt({
      name: 'question_4',
      type: 'list',
      message: 'What is Callback?\n',
      choices: [  "Callback is an asynchronous equivalent for a function.", 
                  "None of the above.", 
                  "Callback is a technique in which a method call back the caller method.", 
                  "Both of the above."
                  ],
    });
    return handleAnswer(answers.question_4 === "Callback is an asynchronous equivalent for a function.");
  }

  async function question5() {
    const answers = await inquirer.prompt({
      name: 'question_5',
      type: 'list',
      message: '  Node js is a single threaded application but supports concurrency.\n',
      choices: [  "true.", 
                  "None of the above.", 
                  "false.", 
                  "Both of the above."
                  ],
    });
    return handleAnswer(answers.question_5 === "true.");
  }

 



// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
winner();