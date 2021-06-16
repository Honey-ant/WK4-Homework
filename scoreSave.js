var scoreForm = document.getElementById("score-form");
var scoreList = document.getElementById("score-list");
var nameInput = document.getElementById("name-input");
var submitButton = document.getElementById("submit");
var highScores = document.getElementById("highScores");

submitButton.addEventListener("click", function (event) {
   container.classList.add("hide")
    submitForm.classList.add("hide")
    var scores = JSON.parse(window.localStorage.getItem("scoreList")) || [];
    console.log("clicked");
    event.preventDefault();
    console.log("name", nameInput.value);
    console.log("score", scoreCounter);
    var data = {
        name: nameInput.value,
        score: scoreCounter
    }
    scores.push(data);
    console.log(scores);

    window.localStorage.setItem("scoreList", JSON.stringify(scores));

    renderScores(scores);
});

function renderScores(x) {
    highScores.classList.remove('hide')  
    x = JSON.parse(window.localStorage.getItem("scoreList")) || [];
    

    x.forEach(function(score) {
        var liTag = document.createElement("li");
        console.log("liTag:", liTag);
        liTag.textContent = score.name + " : " + score.score;

        var olEl = document.getElementById("score-list");
        olEl.appendChild(liTag);
    })
    
}

// scoreForm.onclick('submit', handleScoreSubmit);