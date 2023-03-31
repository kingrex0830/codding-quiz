var startButton = document.getElementById("start-button")
var startMenu = document.getElementById("start")
startButton.addEventListener("click", startQuiz)
var nextButton1 = document.getElementById("next-1")
var nextButton2 = document.getElementById("next-2")
var finishButton = document.getElementById("finish")
nextButton1.addEventListener("click", nextQuestion1)
nextButton2.addEventListener("click", nextQuestion2)
finishButton.addEventListener("click", finishQuiz)
var correctAnswer1 = document.getElementById("correct-1")
var correctAnswer2 = document.getElementById("correct-2")
var correctAnswer3 = document.getElementById("correct-3")
var incorrectAnswer11 = document.getElementById("incorrect-1-1")
var incorrectAnswer21 = document.getElementById("incorrect-2-1")
var incorrectAnswer31 = document.getElementById("incorrect-3-1")
var incorrectAnswer12 = document.getElementById("incorrect-1-2")
var incorrectAnswer22 = document.getElementById("incorrect-2-2")
var incorrectAnswer32 = document.getElementById("incorrect-3-2")
var quizMain = document.getElementById("quiz-main")
var questionsMain = document.getElementById("questions")
var question1 = document.getElementById("question-1")
var question2 = document.getElementById("question-2")
var question3 = document.getElementById("question-3")
var scoreCount = 0
var userScore = document.getElementById("user-score")
var profileSetup = document.getElementById("profile-setup")
var initialsInput = document.getElementById("user-initials")
var submitButton = document.getElementById("submit")

function addScore1() {
    scoreCount = scoreCount + 1
    console.log(scoreCount)
    correctAnswer1.disabled = true
    incorrectAnswer11.disabled = true
    incorrectAnswer12.disabled = true
    correctAnswer1.textContent = "Correct!"
    return scoreCount
}

function addScore2() {
  scoreCount = scoreCount + 1
  console.log(scoreCount)
  correctAnswer2.disabled = true
  incorrectAnswer21.disabled = true
  incorrectAnswer22.disabled = true
  correctAnswer2.textContent = "Correct!"
  return scoreCount
}

function addScore3() {
    scoreCount = scoreCount + 1
    console.log(scoreCount)
    correctAnswer3.disabled = true
    incorrectAnswer31.disabled = true
    incorrectAnswer32.disabled = true
    correctAnswer3.textContent = "Correct!"
    return scoreCount
}

function isCorrect() {
  correctAnswer1.addEventListener("click", addScore1)
  correctAnswer2.addEventListener("click", addScore2)
  correctAnswer3.addEventListener("click", addScore3)
}

function noScore1() {
  correctAnswer1.disabled = true
  incorrectAnswer11.disabled = true
  incorrectAnswer12.disabled = true
  incorrectAnswer11.textContent = "Incorrect!"
  incorrectAnswer12.textContent = "Incorrect!"
}

function noScore2() {
  correctAnswer2.disabled = true
  incorrectAnswer21.disabled = true
  incorrectAnswer22.disabled = true
  incorrectAnswer21.textContent = "Incorrect!"
  incorrectAnswer22.textContent = "Incorrect!"
}

function noScore3() {
  correctAnswer3.disabled = true
  incorrectAnswer31.disabled = true
  incorrectAnswer32.disabled = true
  incorrectAnswer31.textContent = "Incorrect!"
  incorrectAnswer32.textContent = "Incorrect!"
}

function isIncorrect() {
  incorrectAnswer11.addEventListener("click", noScore1)
  incorrectAnswer12.addEventListener("click", noScore1)
  incorrectAnswer21.addEventListener("click", noScore2)
  incorrectAnswer22.addEventListener("click", noScore2)
  incorrectAnswer31.addEventListener("click", noScore3)
  incorrectAnswer32.addEventListener("click", noScore3)
}

function startQuiz() {
  console.log("Start")
  isCorrect()
  isIncorrect()
  startMenu.style.display="none"
  nextButton1.style.display="block"
  question1.style.display="block"
  console.log("Hello world")
}

function nextQuestion1() {
  console.log("Next")
  isCorrect()
  isIncorrect()
  nextButton1.style.display="none"
  nextButton2.style.display="block"
  question1.style.display="none"
  question2.style.display="block"
}

function nextQuestion2() {
  console.log("Next")
  isCorrect()
  isIncorrect()
  nextButton2.style.display="none"
  finishButton.style.display="block"
  question2.style.display="none"
  question3.style.display="block"
}

function finishQuiz() {
  console.log("Finish")
  question3.style.display="none"
  finishButton.style.display="none"
  userScore.style.display="flex"
  profileSetup.style.display="block"
  submitButton.style.display="block"
  isCorrect()
  isIncorrect()
  userScore.textContent += scoreCount
  console.log(scoreCount)
}

function countdownTimer() {
  var count = 60, timer = setInterval(function() {
    $("#counter").html(count--)
    if(count == 1) clearInterval(timer)
}, 1000);

// if(wrong answer) {
//  -5sec
// }
}