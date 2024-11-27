let score = Math.floor(Math.random() * 20) + 1;
console.log("Target Number:", score);

function myFunction() {
  const userGuess = document.querySelector(".input-field").value;
  const feedback = document.querySelector(".feedback");
  const scoreElement = document.querySelector(".score-text span");
  let currentScore = parseInt(scoreElement.innerText);

  if (userGuess == score) {
    feedback.innerText = `🎉 Correct! The number was ${score}!`;
    document.querySelector(".question-box").innerText = score;
    document.querySelector(".question-box").style.background = "#4ca1af";
  } else if (currentScore > 0) {
    feedback.innerText =
      userGuess < score ? "📉 Too Low!" : "📈 Too High!";
    currentScore--;
    scoreElement.innerText = currentScore;

    if (currentScore === 0) {
      feedback.innerText = "💔 Game Over! Try Again!";
    }
  }
}

function restartGame() {
  score = Math.floor(Math.random() * 20) + 1;
  console.log("New Target Number:", score);

  document.querySelector(".score-text span").innerText = 20;
  document.querySelector(".input-field").value = "";
  document.querySelector(".feedback").innerText = "🤔 Start guessing...";
  document.querySelector(".question-box").innerText = "?";
  document.querySelector(".question-box").style.background = "white";
}

document.querySelector(".check-btn").addEventListener("click", myFunction);
document.querySelector(".again-btn").addEventListener("click", restartGame);
