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