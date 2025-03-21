// Игра "Угадай число"

function guessRandomInt() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    let guess;

    while (true) {
        guess = prompt('Угадай число от 1 до 100:'); 
        if (guess === null) {
            alert('Игра окончена!');
            break;
        }

        if (guess < randomNumber) {
            alert('Загаданное число больше!');
        } else if (guess > randomNumber) {
            alert('Загаданное число меньше!');
        } else {
            alert('Поздравляю! Вы угадали число!');
            break; 
        }
    }
}
