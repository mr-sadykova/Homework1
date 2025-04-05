// Игра "Угадай число"

// function guessRandomInt() {
//     const randomNumber = Math.floor(Math.random() * 100) + 1; 
//     let guess;

//     while (true) {
//         guess = prompt('Угадай число от 1 до 100:'); 
//         if (guess === null) {
//             alert('Игра окончена!');
//             break;
//         }

//         if (guess < randomNumber) {
//             alert('Загаданное число больше!');
//         } else if (guess > randomNumber) {
//             alert('Загаданное число меньше!');
//         } else {
//             alert('Поздравляю! Вы угадали число!');
//             break; 
//         }
//     }
// }


// Игра "Простая арифметика"

// function simpleArithmetic() {
//     const operations = ['+', '-', '*', '/'];
//     const operation = operations[Math.floor(Math.random() * operations.length)];

//     let a = Math.floor(Math.random() * 100) + 1;
//     let b = Math.floor(Math.random() * 100) + 1;

//     if (operation === '+') {
//         task = `Найдите сумму чисел ${a} и ${b}`;
//     } else if (operation === '-') {
//         task = `Найдите разность чисел ${a} и ${b}`;
//     }
//     else if (operation === '*') {
//         task = `Найдите произведение чисел ${a} и ${b}`;
//     }
//     else (operation === '/') {
//         task = `Найдите частное чисел ${a} и ${b}`;
//     }
// }