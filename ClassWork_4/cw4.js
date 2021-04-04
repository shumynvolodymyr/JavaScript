// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function anyNumber() {
//     let min = arguments[0];
//     let max = arguments[0];
//     let length = arguments.length;
//     for (let i = 1; i < length; i++) {
//         if (arguments[i] < min) min = arguments[i];
//         if (arguments[i] > max) max = arguments[i];
//     }
//     console.log('max:', max);
//     return min;
// }
// anyNumber(10, 20, 5, 7, -2, 7, 4, 7, 9);

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// function keyOrValues(object, keysOrValues= '') {
//     let array = [];
//     const length = object.length;
//
//     if (keysOrValues === 'keys') {
//         for (let i = 0; i < length; i++) {
//             for (const item in object[i]) {
//                 array.push(item);
//             }
//         }
//         console.log(array);
//         return array;
//     }
//     if (keysOrValues === 'values') {
//         for (let i = 0; i < length; i++) {
//             for (const newArr in object[i]) {
//                 array.push(object[i][newArr])
//             }
//         }
//         console.log(array);
//         return array;
//     }
// }
//
// keyOrValues([{name: 'Dima', age: 13}, {model: 'Camry'}], 'keys');
// keyOrValues([{name: 'Dima', age: 13}, {model: 'Camry'}], 'values');

//==============================================
// Варіант із промпт:

// function keysOrValues(mix) {
//
//     let array = [];
//
//     if (prompt('What exactly do you need: keys or values?') === 'keys') {
//         for (let i = 0; i < mix.length; i++) {
//             for (const numbers in mix[i]) {
//                 array.push(numbers);
//             }
//         }
//         document.write(`<h1>${array}</h1>`);
//         console.table(array);
//         return array;
//     }
//     if (!!'key') {
//         for (const arrElement of mix) {
//             for (const mix in arrElement) {
//                 array.push(arrElement[mix]);
//             }
//         }
//         document.write(`<h1>${array}</h1>`);
//         console.table(array);
//         return array;
//         }
// }


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// function foo(array, i) {
//     if(i < array.length){
//         let change = array[i];
//         array[i] = array [i+1]
//         array[i+1] = change;
//
//         console.log(array);
//     }
// }
// foo([9,8,0,4],2)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function transferZero(array) {
// let zero = [];
// let numbers = [];
//     for (let i = 0; i < array.length; i++) {
//        if (array[i] === 0) {
//            zero.push(array[i]);
//        }
// if (!!array[i]) {
//     numbers.push(array[i]);
// }
//     }
// return numbers.concat(zero);
// }
// console.log(transferZero([1,0,6,0,3]));
// console.log(transferZero([0,1,2,3,4]));
// console.log(transferZero([0,0,1,0]));

//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// function validator(name) {
//     name = name.trim();
//     name = name.replace(/ +/g, ' ');
//     console.log(name);
// }
//
// validator('    Harry       Potter      ');
// validator('    Ron       Whisley      ');
// validator('    Hermione       Granger      ');

//
// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //