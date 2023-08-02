
// Questions for Quiz

const choicePickAnswers = [
    {
        Question: "What is HTML?",

        UserChoiceOptions: [
            "Hyper Text Markup Language",
            "Hype Typer Mark Lang",
            "Hyper Typer Marker Langer",
            "Hype Type Mype Lype"
        ],
        RightAnswer: 
            "Hyper Text Markup Language"
        ,

    },
    {
        Question: "What is a button in HTML?",

        UserChoiceOptions: [
            "A name tag you put on",
            "A clickable element that takes action",
            "A place where you get hit",
            "A patch of grass on the hill"
        ],
        RightAnswer: 
            "A clickable element that takes action"
        ,

    },
    {
        Question: "What is CSS?",

        UserChoiceOptions: [
            "Candy Stop Spot",
            "Cool Sports Stuff",
            "Cascading Style Sheets",
            "Cascade Dishwasher Detergent"
        ],
        RightAnswer: 
            "Cascading Style Sheets"
        ,

    },
    {
        Question: "What is JavaScript?",

        UserChoiceOptions: [
            "Actually just Java with no script",
            "A cup of Coffee",
            "A piece of paper",
            "An object-oriented computer programming language"
        ],
        RightAnswer: 
            "An object-oriented computer programming language"
        ,

    },
    {
        Question: "What are you using right now?",

        UserChoiceOptions: [
            "A Computer, Mouse and Keyboard",
            "The moon",
            "A rusty soda can",
            "A Boom Box"
        ],
        RightAnswer: 
            "A Computer, Mouse and Keyboard"
        ,

    },
];



// Let

let clock = 15;
let clockTime
let choices = {};
let choicePicks = choicePickOptions();
let points = 0;
let totalScoreCount = []

// Variables

var continueButtonEL = document.querySelector("#ContinueButton")
var clockEL = document.getElementById("clock")
var highScore = document.getElementById("highscore")
var UserName = document.getElementById("UserName")
var point$ = document.getElementById("points")
var pointScore = document.getElementById("pointScore")
var qIndex = 0
var question = document.getElementById("Question")
var quizQuestionsEL = document.querySelector("#QuizQuestions")
var rulesAndInformationEL = document.querySelector("#RulesAndInformation")
var saveHighScores = JSON.parse(localStorage.getItem("highScore"))||[]
var startButtonEL = document.querySelector("#StartButton")
var submit = document.getElementById("submit")
var userChoiceOptions = document.getElementById("UserChoiceOptions")

// Functions

function answerHandler(event) {
    var userChoice = event.target.textContent
    console.log(userChoice)
    console.log(qIndex)
    console.log(choicePickAnswers[qIndex].RightAnswer)
    if(userChoice !== choicePickAnswers[qIndex].RightAnswer) {
        clock = clock - 5
        points = points - 25
    }
    if(userChoice == choicePickAnswers[qIndex].RightAnswer) {
        clock = clock + 5
        points = points + 100
    }
    if(qIndex < choicePickAnswers.length - 1){
        qIndex = qIndex + 1
        quizQuestions()
    } 
    else {
        highScorePage()
    } 
    pointScore.textContent = points
}

function choicePickOptions() {
    let choicePicks = JSON.parse(JSON.stringify(choicePickAnswers));
    return choicePicks;
}

function continueButtonHandler(event) {
    console.log(event)
    rulesAndInformationEL.classList.add("hide")
    quizQuestionsEL.classList.remove("hide")
    point$.classList.remove("hide")
    quizQuestions()
    startClock()
    timer.classList.remove("hide")
    pointScore.classList.remove("hide")
    clockEL.classList.remove("hide")
}

function endGame() {
    clearInterval(clockTime)
    highScorePage()
}

function highScorePage() {
    question.textContent = "End of Quiz"
    userChoiceOptions.classList.add("hide")
    clockEL.textContent = clock.toFixed()
    clearInterval(clockTime)
    highScore.classList.remove("hide")
}

function quizQuestions(event) {
    var q = choicePickAnswers[qIndex]
    console.log(q)
    question.textContent = q.Question
    userChoiceOptions.innerHTML = ""
    for(var i = 0; i < q.UserChoiceOptions.length; i++){
        var buttonEL = document.createElement("button")
        buttonEL.textContent = q.UserChoiceOptions[i]
        userChoiceOptions.append(buttonEL)
    }
}

function startButtonHandler(event) {
    console.log(event)
    event.target.classList.add("hide")
    rulesAndInformationEL.classList.remove("hide")
    
}

function startClock() {
    clockTime = setInterval(function() {
    clock--
    if(clock === 0){
        endGame()
    }
    clockEL.textContent = clock
    },1000)
}

function saveHighScore() {
    console.log("Hit")
    var userScore  = {
        score: points,
        UserName: UserName.value,
    }
    saveHighScores.push(userScore)
    window.localStorage.setItem("highScore",JSON.stringify(saveHighScores));
    window.location.assign("HighScores HTML/highscores.html")

}

// Click Event Listeners

startButtonEL.addEventListener("click", startButtonHandler)
continueButtonEL.addEventListener("click", continueButtonHandler)
userChoiceOptions.addEventListener("click", answerHandler)
submit.addEventListener("click", saveHighScore)



