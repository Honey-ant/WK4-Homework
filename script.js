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

// function initForm() {
    // getCorrect();
// }

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

//These functions are beig used by init
// function getCorrect() {
//     console.log("Correct!")
//     //Get stored value from clientstorage, if it exists
//     var storedCorrect = localStorage.getItem("scoreCount");
//     if (storedCorrect === null) {
//         scoreCounter = 0;
//     } else {
//         scoreCounter = storedCorrect;
//     }
//     scoreText.correctAnswer = scoreCounter;
//     scoreCounter++
// }

//  startButton.addEventListener("click", function (event) {
//      var element = event.target;

//      if (element.matches(".correct")) {
//          var state = element.getAttribute("class");
//              if (state === "correct") {
//                  setNextQuestion()
//              } 
         
//      }
//  })

function setNextQuestion() {
    resetState()
 showQuestion(shuffledQuestions [currentQuestionIndex])
//  if (currentQuestionIndex.length === 0 || questionCounter > max_questions){
//      localStorage.setItem('mostRecentScore', scoreCounter)

//      return window.location.localStorage
//  }

//  questionCounter++
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
        // adds a class of 'correct' to the correct answer buttons
        // if (answer.correct == true ) {
        //     console.log('answer is correct')
        //    button.dataset.correct = answer.correct
        //   button.classList.add('correct')
        // } else {
        //     console.log('answer is wrong')
        //     button.dataset.false = answer.false
        //     button.classList.add('incorrect')
        // }
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
    container.textContent = "Quiz Fin";
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

// var scoreForm = document.getElementById("score-form");
// var scoreList = document.getElementById("score-list");

// function handleScoreSubmit(event) {
//   highScores.classList.remove('hide')    
//     event.preventDefault();
  
//     var scoreName = $('input[name="score-input"]').val();

//     if (!scoreName) {
//         console.log('No name filled out in form!');
//         return;
//     }

//     var scoreList = $(
//         //the listed item element will be added
//         '<li class>'
//     );
//     scoreList.text(scoreName);
//     // print to page
//     scoreList.append(scoreList);

//     $('input[name="score-input"]').val('');
// }

// scoreForm.on('submit', handleScoreSubmit);

// function initForm() {
//     getCorrect()

// }

const questions = [
    {
        question: 'What does HTML mean?',
        answer: [
            {text: 'Hyperlink text Manual Language', correct: false},
            {text: 'Hypertext Markup Language', correct: true},
            {text: 'HyperTone Mail Link', correct: false},
            {text: 'HypnoText Mega Lanuage', correct:false}
        ]
    },
    {
        question:'What does CSS stand for?',
        answer: [
            {text: "Casandra Sylvia Stoks", correct: false},
            {text: "Cambridge Sailing Society", correct: false},
            {text: "Cascading Styling Sheet", correct: true},
            {text: "Tasm", correct: false}
        ]
    },
    {
        question:'What is the <link> tag used for in HTML?',
        answer: [
            {text: "Yes", correct: false},
            {text: "Linking to an external style sheet", correct: true},
            {text: "Linking to an external Javascript file", correct: false},
            {text: "Nothing", correct: false}
        ]
    },

    {
        question: 'What is the signifigance of the location fo the MCG?',
        answer: [
            {text: "there is none", correct: false},
            {text: "Meeting place for the Kulin nation to decide new laws", correct: true},
            {text: "Where sports games were held", correct: false},
            {text: "Was a woman's area", correct: false}
        ]
    }

]

