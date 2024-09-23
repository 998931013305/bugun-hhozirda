let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById('guess').value;
    let result = document.getElementById('result');
    let attemptsDisplay = document.getElementById('attempts');
    attempts++;

    if (userGuess == randomNumber) {
        result.textContent = 'Tabriklaymiz! Siz to\'g\'ri topdingiz!';
        result.style.color = 'green';
        attemptsDisplay.textContent = `Urinishlar soni: ${attempts}`;
    } else if (userGuess > randomNumber) {
        result.textContent = 'Kichikroq son kiriting!';
        result.style.color = 'red';
        attemptsDisplay.textContent = `Urinishlar soni: ${attempts}`;
    } else {
        result.textContent = 'Kattaroq son kiriting!';
        result.style.color = 'red';
        attemptsDisplay.textContent = `Urinishlar soni: ${attempts}`;
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('attempts').textContent = '';
}
