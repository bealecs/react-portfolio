const answersList = ["The answer is yes", "The answer is no", "Maybe...", "It is not likely", "Most definitely!", "I don't think so", "Try again", "There's a chance"];
const answers = document.getElementById("answers");
const submitButton = document.getElementById("submit");
const inputText = document.getElementById("inputText");
submitButton.addEventListener('click', getAnswer);

startGame();
function startGame() {
    answers.value = " ";
    inputText.value = "";
}
function getAnswer() {
    if(inputText.value === "") {
        alert("You need to ask the 8 Ball a question to receive an answer");
    } else {
    const answer = Math.floor(Math.random() * 8);
    const finalAnswer = answersList[answer];
    alert(`${finalAnswer}`);
    inputText.value = "";
    }
}