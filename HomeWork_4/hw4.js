// 1) створити функцію яка приймає масив та виводить його

// function array(arr) {
//     console.log(arr);
//
// }
// array([10, 20, 30, 40, 50, 'true']);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function random(array) {
//     let rand = [];
//     for (let i = 0; i < array; i++) {
//         rand.push(Math.round(Math.random() *100));
//     }
//     console.log(rand)
// }
// random(10);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numer(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//         return a;
//     } if (b < a && b < c ) {
//         console.log(b);
//         return b;
//     } if (c < a && c < b) {
//         console.log(c);
//         return c;
//     }
// }
// numer(12, 1, 0);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//         return a;
//     } else if (b > a && b > c) {
//         console.log(b);
//         return b;
//     } else if (c > a && c > b) {
//         console.log(c);
//         return c;
//     }
// }
// maxNumber(15, 30, 23);

// 5) створити функцію яка повертає найбільше число з масиву

// function maxNumber(array) {
//     const result = Math.max.apply(Math,array);
//     console.log(result);
//     return result;
// }
// maxNumber([1, 23, 13, 220, 10, 15, 25]);

// 6) створити функцію яка повертає найменьше число з масиву

// function minNumber(array) {
//     const result = Math.min.apply(Math,array);
//     console.log(result);
//     return result;
// }
// minNumber([1, 23, 13, 220, 10, 15, 25]);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         sum += arrElement;
//     }
//     console.log(sum);
//     return sum;
// }
// sumArray([10, 20, 13, 17, 10, 55, 25]);
//
// let sumArray1 =  sumArray([10, 50, 13, 17, 10, 55, 25, 105]);
// console.log(sumArray1);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i] / arr.length;
//     }
//     console.log(sum);
//     return sum;
// }
// sumArray([10, 13, 17, 20, 30, 7, 3]);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]



// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
