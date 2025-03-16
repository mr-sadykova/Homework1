// Задание 1

let password = 'профессия';
let enter = prompt("Введите пароль");
if (enter === password) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}

// Задание 2

let c = 2;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 3

let d = 12;
let e = 101;
if (d > 100 || e >100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 4

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5

let monthNumber = 9;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert("Зима");
        break;
    case 3:
    case 4:
    case 5:
        alert("Весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("Лето");
        break;
    case 9:
    case 10:
    case 11:
        alert("Осень");
        break;
    default:
        alert("Никакой");
        break;
}

// Дополнительное задание 1

let value = prompt('Пожалуйста, введите любое число');
if (value === "") {
    alert("Поле не должно быть пустым");
} else {
    let result = Number(value);
    if (isNaN(result)) {
        alert("Не является числом");
    } else {
        alert("Является числом");
        if (result % 2 === 0) {
            alert("Четное число");
        } else {
            alert("Нечетное число");
        }
    }
}

// Дополнительное задание 2

let question = prompt("Введите код операциооной системы")
let clientOS = parseInt(question, 10);
if (clientOS === 0) {
    alert("Установите версию приложения для iOS по ссылке");
} else {
    alert("Установите версию приложения для Android по ссылке");
}

// Дополнительное задание 3

let howOld = prompt("Введите год выпуска устройства")
let clientDeviceYear = 2015;
howOld = Number(howOld);
if (clientOS === 0) {
    if (howOld <= clientDeviceYear) {
        alert('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        alert('Установите версию приложения для iOS по ссылке');
    }
} else  if (clientOS === 1) {
    if (howOld <= clientDeviceYear) {
        alert('Установите облегченную версию приложения для Android по ссылке');
    } else {
        alert('Установите версию приложения для Android по ссылке');
    }
}