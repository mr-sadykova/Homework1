// Задание 1

let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}

// Либо

for (let a = 0; a < 2; a++) {
    console.log("Привет");    
}

// Задание 2

for (let b = 0; b <= 5; b++) {
    console.log(b);    
}

// Задание 3

for (let c = 7; c <= 22; c++) {
    console.log(c);
}

// Задание 4

const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}
for (const key in obj) {
    console.log(`${key} - ${obj[key]}`);
}

// Задание 5

let n = 1000;
let num =0;
while (n >=50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(`Количество циклов: ${num}`);

// Задание 6

let dateFriday = 1;
let allDay = 31;
for (let f = dateFriday; f <= allDay; f += 7) {
    console.log(`Сегодня пятница, ${f}-е число. Необходимо подготовить отчет.`);
}