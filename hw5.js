// Задание 1

function less(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(less(4, 8));
console.log(less(6, 6));
console.log(less(9, 1));

// Задание 2

function evenUneven(n) {
    if (n % 2 === 0) {
      return 'Число четное';  
    } else {
       return 'Число нечетное'; 
    }
}

console.log(evenUneven(5));
console.log(evenUneven(6));

// Задание 3

function square(number) {
    console.log(number ** 2);
}

const degree = (n) => n ** 2;

square(3);
console.log(degree(6));

// Задание 4

function age() {
    let age = +prompt('Сколько Вам лет?');

    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}
age();

// Задание 5

function calc(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b
    }
}
console.log(calc(6, 7));

// Задание 6

function getNumber() {
    let number = prompt('Введите число');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом'
    } else {
        return `${number} в кубе равняется ${Math.pow(number, 3)}`;
    }
}

alert(getNumber());

