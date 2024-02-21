let scoreCount = document.getElementById('score')
let highScoreElemnt = document.getElementById('high-score')
const randomNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
document.getElementById('check-btn').addEventListener('click', function () {
    const inputNumberField = document.getElementById('input-field')
    const displayNumber = document.getElementById('display-number')
    const guessingText = document.getElementById('guess-number')

    let inputNumberValue = inputNumberField.value
    const inputNumber = parseInt(inputNumberValue)
    console.log(inputNumberValue.length, inputNumberValue)
    scoreCount.innerText = score;

    
    if (inputNumberValue.length < 1) {
        guessingText.innerText = "⛔️ No number!"
    }
    else if(score===highScore){
        return
    }
    else if (inputNumber == randomNumber) {
        document.body.style.backgroundColor = 'tomato'
        guessingText.innerText = "🎉 Correct Number!"
        displayNumber.innerText = randomNumber;
        highScoreElemnt.innerText = score;
        highScore = score
        return
    }
    else if (inputNumber < randomNumber) {
        guessingText.innerText = "📉 Too low!"
    }
    else {
        guessingText.innerText = "📈 Too high!"
    }
    score--;
})

function againBtn(){
    document.getElementById('display-number').innerText = "?";
    document.getElementById('input-field').value = "";
    document.getElementById('guess-number').innerText = "Start guessing...";
    score = 20;
    document.getElementById('score').innerText = score;
    document.body.style.backgroundColor = 'gray'

}