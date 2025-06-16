// Задание 1

let str = 'js';
str = str.toUpperCase();
console.log(str);

// Задание 2

function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}

console.log(filter(['SkyPro', 'SkyFall', 'School', 'study'], 'sky'));