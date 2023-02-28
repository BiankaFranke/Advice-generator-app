// DECLARATIONS
const url = 'https://api.adviceslip.com/advice';
const dice = document.querySelector('#dice');
let advice = document.querySelector('#advice');
let number = document.querySelector('#adviceNo');

// FUNCTION

let giveMeAnAdvice = (e) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let randomNo = data['slip']['id'];
        let randomAdvice = data['slip']['advice'];

        number.innerText = randomNo;
        advice.innerText = randomAdvice;
});
}

// EVENTLISTENER
dice.addEventListener('click', (e) => {
    e.preventDefault();
    giveMeAnAdvice();
});