const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
let candidateName = (" ");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000meters? ", "(5+3)/2*10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "] ;
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
//et quizAnswers = [];
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName = input.question("Candidate Name: ");
  console.log("Hello " + candidateName)
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);
  //part 1 question
  for(let i = 0; i <questions.length; i++){
   candidateAnswers.push(input.question(questions[i]));
  }
}
function gradeQuiz(candidateAnswers) {
  let numberOfCorrectAnswers = [];
  for(let i=0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numberOfCorrectAnswers.push(candidateAnswers[i]);
      console.log(`Your answer: ${candidateAnswers[i]} Correct answer ${correctAnswers[i]} `);
      console.log("correct");
    } else {
      console.log(`Your answer: ${candidateAnswers[i]} Correct answer ${correctAnswers[i]} `);
      console.log("try again");
    }
  } 
  let quizGrade = numberOfCorrectAnswers.length / questions.length*100;
  console.log(`>>> Your grade: ${quizGrade} <<<`);
    if (quizGrade >= 80){
      console.log(`>>> Status: Passed <<<`)
    } else {
      console.log(`>>> Status: Failed <<< `)    
  }
  return quizGrade;
}
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*if (candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()){
  console.log("correct");
} else {
  console.log("try again")
}

}*/

  //let grade;
  

  //return grade;

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};