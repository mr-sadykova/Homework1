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


// Игра "Простая арифметика"

function simpleArithmetic() {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let a = Math.floor(Math.random() * 100) + 1;
    let b = Math.floor(Math.random() * 100) + 1;

    if (operation === '+') {
        task = `Найдите сумму чисел ${a} и ${b}`;
    } else if (operation === '-') {
        task = `Найдите разность чисел ${a} и ${b}`;
    }
    else if (operation === '*') {
        task = `Найдите произведение чисел ${a} и ${b}`;
    }
    else {
        task = `Найдите частное чисел ${a} и ${b}`;
    }

    let userAnswer = prompt(task);

    correctAnswer = calcCorrectAnswer(operation, a, b);
    if (Number(userAnswer) === Number(correctAnswer)) {
        alert('Молодец! Правильно!');
    } else {
        alert(`Неверно! Правильный ответ: ${correctAnswer}`);
    }

    function calcCorrectAnswer(operation, a, b) {
        if (operation === '/' && b === 0) {
            return 'Ошибка: деление на ноль';
        }

        switch (operation) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return Math.floor(a / b);
        }
    }
}

// Игра "Переверни текст"

function turnTheText() {
    let userText;

    do {
        userText = prompt("Введите текст для переворачивания");

        if (userText === null) {
            alert("Вввод отменен");
            return;
        }

        const trimmedText = userText.trim();

        if (trimmedText === '') {
            alert("Вы ввели пустую строку. Пожалуйста, введите текст");
        } else {
            const reversedText = trimmedText.split('').reverse().join('');
            alert("Перевёрнутый текст:\n" + reversedText);
            return;
        }
    } while (true);
}


// Игра "Простая викторина"