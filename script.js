let scoreCount = document.getElementById('score')
let highScoreElemnt = document.getElementById('high-score')
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
document.getElementById('check-btn').addEventListener('click', function () {
    const inputNumberField = document.getElementById('input-field')
    const displayNumber = document.getElementById('display-number')
    const guessingText = document.getElementById('guess-number')

    let inputNumberValue = inputNumberField.value
    const inputNumber = parseInt(inputNumberValue)
    // console.log(inputNumberValue.length, inputNumberValue)
    scoreCount.innerText = score;
    // displayNumber.innerText = randomNumber;

    if (!inputNumber) {
        guessingText.innerText = "⛔️ No number!"
    }
    else if (inputNumber === randomNumber) {
        document.body.style.backgroundColor = 'tomato'
        guessingText.innerText = "🎉 Correct Number!"
        displayNumber.innerText = randomNumber;

        if (score > highScore) {
            highScore = score;
            highScoreElemnt.innerText = score;
        }
    }
    else if (inputNumber !== randomNumber) {
        if(score > 1){
            if (inputNumber < randomNumber) {
                guessingText.innerText = "📉 Too low!"
                score--;
            }
            else if (inputNumber > randomNumber) {
                guessingText.innerText = "📈 Too high!"
                score--;
            }
        }
        else {
            score = 0;
            guessingText.innerText = "💥 You lost the game!"
        }
    }


})

function againBtn() {
    // console.log('hello')
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.getElementById('display-number').innerText = "?";
    document.getElementById('input-field').value = "";
    document.getElementById('guess-number').innerText = "Start guessing...";
    document.getElementById('score').innerText = score;
    document.body.style.backgroundColor = 'gray';

}