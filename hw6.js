// Задание 1

const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) {
        break;
    }
}

// Задание 2

const arr2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) {
        console.log(i);
        break;
    }
}

// Задание 3

const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

// Задание 4

const arr4 = []
for (let i = 0; i < 3; i++) {
    const arr42 = [];
    for (let i = 0; i < 3; i++) {
        arr42.push(1);        
    }
    arr4.push(arr42);
}
console.log(arr4);

// Задание 5

const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

// Задание 6

const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
const filteredArr = arr6.filter(item => typeof item !== 'string');
console.log(filteredArr);

// Задание 7

const arr7 = [9, 8, 7, 6, 5];
const userNumber = +prompt('Введите число');
if (arr7.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8

let str = 'abcdef';
str = str.split('');
str.reverse();
str = str.join('');
console.log(str);

// Задание 9

const arr9 = [[1, 2, 3],[4, 5, 6]];
const newArr = [];
for (let i = 0; i < arr9.length; i++) {
    newArr.push(...arr9[i]);
}
console.log(newArr);

// Задание 10

const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i + 1]) {
        console.log(arr10[i] + arr10[i + 1]);
    }
}

// Задание 11

function square(arr11) {
    return arr11.map(item => item ** 2);
}
console.log(square([1, 2, 3]));

// Задание 12

function getLength(arr12) {
    return arr12.map(item => item.length);
}
console.log(getLength(['hello', 'world']));

// Задание 13

function negativeNumbers(arr13) {
    return arr13.filter(item => item < 0);
}
console.log(negativeNumbers([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]));

// Задание 14

function randomNumber() {
    return Math.floor(Math.random() * 10);
}
const arr14 = [];
for (let i = 0; i < 10; i++) {
    arr14.push(randomNumber());
}
console.log(arr14);
const evenArr = [];
console.log(arr14);
for (let i = 0; i < arr14.length; i++) {
    if (arr14[i] % 2 === 0) {
        evenArr.push(arr14[i]);
    }    
}
console.log(evenArr);

// Задание 15

function randomNumb() {
    return Math.floor(Math.random() * 10);
}

const arr15 = [];
for (let i = 0; i < 6; i++) {
    arr15.push(randomNumb()); 
}

console.log(arr15);
console.log(arr15.reduce((a, b) => a + b) / arr15.length);

