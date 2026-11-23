

console.log("Welcome to Learn Kiswahili!");

function checkAnswer(answer) {
    const result = document.getElementById("answer-result");

    if (answer === "correct") {
        result.textContent = "Correct! Asante means Thank you.";
    } else {
        result.textContent = "Not quite! Try again.";
    }
}

