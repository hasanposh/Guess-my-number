const inputNumberText = document.getElementById('input-field')
const displayNumber = document.getElementById('display-number')
let scoreCount = document.getElementById('score')
let highScoreElemnt = document.getElementById('high-score')
let highScore = 0; 
let score = 20;
// console.log(inputNumber)
const randomNumber = Math.trunc(Math.random()*20) + 1;

document.getElementById('check-btn').addEventListener('click',function(){
    const inputNumber = parseInt(inputNumberText.value)
    console.log(inputNumber)
    scoreCount.innerText = score;


    console.log(inputNumber)
    score--;

    displayNumber.innerText = randomNumber;
    if(inputNumber == randomNumber){
        document.body.style.backgroundColor = 'red'
        highScoreElemnt.innerText = score
    }
    console.log(randomNumber)

})

// function generateRandomNumber(){
//     // let number = 0;
//     const number = Math.trunc(Math.random()*20) + 1;
//     return number;
// }