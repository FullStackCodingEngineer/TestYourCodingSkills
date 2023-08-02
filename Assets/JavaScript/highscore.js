var highScoreListNames = document.getElementById("highScoreListNames")
var saveHighScores = JSON.parse(localStorage.getItem("highScore"))||[]

for (var i = 0; i < saveHighScores.length; i++) {
    var p = document.createElement("p")
    p.textContent = saveHighScores[i].UserName + "'s Score " + saveHighScores[i].score
    highScoreListNames.append(p)
}