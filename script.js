const startButton = document.getElementById("Start")
const nextButton = document.getElementById("next")
const questioncontainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
const correctAnswer = document.querySelector(".correct")
var timerElement = document.querySelector(".timer-count");
const timeCard = document.getElementById("time")
const container = document.querySelector(".container")
const submitForm = document.querySelector(".submit-form")
//const highScores = document.querySelector(".highscore-container")
const scoreText = document.querySelector(".score");
// var scoreForm = $('#score-form');
// var scoreList = $("'score-list');
let scoreCounter = 0;
var timer;
var timerCount;
var isCorrect = false;

const score_points = 100
const max_questions = 10

let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 
    questioncontainerElement.classList.remove("hide")
    timeCard.classList.remove("hide")
   // nextButton.classList.remove("hide")
   // (nextButton).remove("hide")
   timerCount = 60;
    setNextQuestion()
    startTimer()
    
}

function winGame() {

}

function setNextQuestion() {
    resetState()
 showQuestion(shuffledQuestions [currentQuestionIndex])
 shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0 

} 

function showQuestion(question){
    questionElement.innerText = question.question
      question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn');
        button.value = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    }); 
};

function selectAnswer(e){
    console.log("Answer selected");
    var selectedButton = e.target;
    var correctAnswer = selectedButton.value;
    console.log(correctAnswer)
    setStatusClass(document.querySelector(".btn"), correctAnswer);
    Array.from(answerButtonsElement.children).forEach(button =>  {
        setStatusClass( button, button.dataset.correct);
    });
    if (correctAnswer == "true") {
        scoreCounter++;
        console.log("CURRENT SCORE", scoreCounter);
        console.log("correct answer was chosen")
        resetState();
        if (questions[currentQuestionIndex] == undefined) {
            console.log("quiz finished");
            quizFin();
        } else {
        //console.log("current index", shuffledQuestions [currentQuestionIndex]);
        shuffledQuestions = questions;
        //.sort(() => Math.random() - .5)
        
        showQuestion(shuffledQuestions [currentQuestionIndex]);
        currentQuestionIndex++;
        scoreText.innerHTML = scoreCounter;
        }
        
        
    } else {
        timerCount -= 5;
        if (timerCount < 0) {
            timerCount = 0;
        }
    }
    // setNextQuestion()
};
function resetState() {
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


//function checkCorrect() {
//    if (selectedButton === correctAnswer){
//        correct = true;
//    } console.log('Correct Answer!')
//}

answerButtonsElement.addEventListener("click", function(event){
    var element = event.target;

    if (element.matches(".correct")) {
        setNextQuestion()
    }
})

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
//clears questions when timer runs out
function quizFin() {
    console.log("Quiz finished")
    questioncontainerElement.classList.add("hide")
    container.textContent = "Quiz Finished!";
    submitForm.classList.remove("hide")
    timeCard.classList.add("hide")
    //initForm()
}
// startTimer function starts the timer
function startTimer() {
    //Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount == 0) {
            clearInterval(timer);
            quizFin();
        }
    }, 1000);
}


const questions = [
    {
        question: 'What is the Bunuba word for barramundi?',
        answer: [
            {text: 'Barramundi', correct: false},
            {text: 'Balga', correct: true},
            {text: 'gawiy', correct: false},
            {text: 'bambarri', correct:false}
        ]
    },
    {
        question:'What is the Bunuba word for ears?',
        answer: [
            {text: "Bundi", correct: false},
            {text: "Garri", correct: false},
            {text: "Bina", correct: true},
            {text: "Gumani", correct: false}
        ]
    },
    {
        question:'What is the Bunuba word for man?',
        answer: [
            {text: "Wiyi", correct: false},
            {text: "Gurama", correct: true},
            {text: "Wura", correct: false},
            {text: "There isn't one", correct: false}
        ]
    }, 

    {
        question: 'What is the Bunuba word for water',
        answer: [
            {text: "Galwanyi", correct: false},
            {text: "Gawarra", correct: false},
            {text: "Garuwa", correct: true},
            {text: "Gayi", correct: false}
        ]
    },

    {
        question: 'How many Mawi (clans) speak the Bunuba language?',
        answer: [
            {text: "9", correct: false},
            {text: "13", correct: false},
            {text: "10", correct: false},
            {text: "12", correct: true}
        ]
    },

    {
        question: 'what is mayi?',
        answer: [
            {text: "Food", correct: true},
            {text: "Tree", correct: false},
            {text: "Goanna", correct: false},
            {text: "Sun", correct: false}
        ]
    },

    {
        question: 'jarramba is?',
        answer: [
            {text: "Sawfish", correct: false},
            {text: "Cherabin", correct: true},
            {text: "freshwater crocodile", correct: false},
            {text: "black swan", correct: false}
        ]
    },

    {
        question: 'What does it mean for a webite to be responsive?',
        answer: [
            {text: "The text is read out when clicked", correct: false},
            {text: "Things move when clicked", correct: false},
            {text: "Text and images fit to scale of the screen", correct: true},
            {text: "Users are asked to sign in/up first", correct: false}
        ]
    },

    {
        question: 'What is local storage called?',
        answer: [
            {text: "KSON", correct: false},
            {text: "GSON", correct: false},
            {text: "MSON", correct: false},
            {text: "JSON", correct: true}
        ]
    },

]

