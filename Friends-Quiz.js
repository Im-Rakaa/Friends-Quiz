var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question("What's your name?? ");
console.log('Welcome! '+ userName + ', well! lets see how much do you know me?? ');
console.log("It's a quiz!!!");
console.log('Your initial score is ' , score);
console.log("Lets see how you perform!!!!!");

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("Right!");
    score +=  1;
    console.log('Current Score: ', score);
  }else{
    console.log("Wrong!");
    score -= 1;
    console.log('Current Score: ', score);
  }
  console.log("- - - - - - - - - - - - - - - - ")
}
// array of objects

var questions = [{
  question: "Where do i live?",
  answer: "rasayani"
},{
  question: "Who is my favorite cricketer?",
  answer: "rohit sharma"
},{
  question: "how old am i?",
  answer: "19"
},{
  question: "which car do i like the most?",
  answer: "kia seltos"
},{
  question: "which color is my favorite?",
  answer: "black"
}];
// loop
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("yay!! You SCORED: "+ score);