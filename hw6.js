// Задание 1

const arr1 = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) {
        break;
    }
}

// Задание 2

const arr2 = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) {
        console.log(i);
        break;
    }
}

// Задание 3

const arr3 = [1, 3, 5, 10, 20]
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

const arr5 = [1, 1, 1]
arr5.push(2, 2, 2);
console.log(arr5);

// Задание 6

const arr6 = [9, 8, 7, 'a', 6, 5]
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