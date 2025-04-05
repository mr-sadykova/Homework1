// Задание 1

const arr = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}

// Задание 2

const array = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
        console.log(i);
        break;
    }
}