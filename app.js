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


  async function question6() {
    const answers = await inquirer.prompt({
      name: 'question_6',
      type: 'list',
      message: '  What is the full form of npm? \n',
      choices: [  "Node Project Manager", 
                  "New Project Manager", 
                  "New Package Manager", 
                  "Node Package Manager"
                  ],
    });
    return handleAnswer(answers.question_6 === "Node Package Manager");
  }
 
  
  async function question7() {
    const answers = await inquirer.prompt({
      name: 'question_7',
      type: 'list',
      message: '  _____ is an interactive shell that processes Node. \n',
      choices: [  "REPL", 
                  "REAL", 
                  "RESP", 
                  "None of the Above"
                  ],
    });
    return handleAnswer(answers.question_7 === "REPL");
  }
  

  async function question8() {
    const answers = await inquirer.prompt({
      name: 'question_8',
      type: 'list',
      message: '  How can we expose node modules? \n',
      choices: [  "expose", 
                  "exports", 
                  "requires", 
                  "None of the Above"
                  ],
    });
    return handleAnswer(answers.question_8 === "exports");
  }

  
  async function question9() {
    const answers = await inquirer.prompt({
      name: 'question_9',
      type: 'list',
      message: ` 
                Which of the following statements are true?
      
                1. NodeJS is multithreaded.
                2. The Buffer class is a global class that can be accessed without importing a buffer module.`,
      choices: [  "Both are True", 
                  "Both are False", 
                  "Statement 1 is True and Statement 2 is False", 
                  "Statement 2 is True and Statement 1 is False"
                  ],
    });
    return handleAnswer(answers.question_9 === "Statement 1 is True and Statement 2 is False");
  }

  async function question10() {
    const answers = await inquirer.prompt({
      name: 'question_10',
      type: 'list',
      message: 'When does a stream fire a data event?' ,
      choices: [  "When there is Data to Read", 
                  "When there is Data to Write", 
                  "Where there is no Data available", 
                  "Node of the Above"
                  ],
    });
    return handleAnswer(answers.question_10 === "When there is Data to Write");
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
await question6();
await question7();
await question8();
await question9();
await question10();
winner();