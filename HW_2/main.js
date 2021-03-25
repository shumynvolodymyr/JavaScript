// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let number = [13, 19, 25, 30 , 50];
// let string = ['hai', 'hello', 'ahoj', 'naschledanou', 'Nazdar'];
// let boolean = ['dom', 123, true, 'RED', false];
//
// console.log(number);
// console.log(string);
// console.log(boolean);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
//
// array.push('hello', true, false, 'OK', 123);
// console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Hello </div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i=0; i < 10; i++) {
//     document.write(`<div>${i} Привіт </div>`)
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0;
// while (i<20) {
//     document.write(`<h1> Text </h1>`);
//     i++;
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i<20) {
//     document.write(`<h1> ${i} C довільним текстом </h1>`);
//     i++;
// }

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let arr of array) {
//     console.log(arr);
// }

// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let array = ['hai', 'hello', 'ahoj', 'naschledanou', 'Nazdar', 'Robert', 'Andrew', 'Rus', 'Ukr', 'COM'];
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array = ['hai', false, 'ahoj', 10, 'Nazdar', true, 'Andrew', 20, 'Ukr', 'COM'];
//
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array = ['hai', false, 'ahoj', 10, 'Nazdar', true, 'Andrew', 20, 'Ukr', 'COM'];

// for (let i = 0; i < array.length; i++){
//     if (typeof array[i] === 'boolean') {
//         console.log(array[i]);
//     }
// }

// Нажаль нерозумію чому непрацює методом вайл як нижче?
// let i = 0;
// while (i < array.length) {
//     if (typeof array[i] === 'boolean') {
//         document.write(array[i]);
//         i++;
//     }
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array = ['hai', false, 'ahoj', 10, 'Nazdar', true, 'Andrew', 20, 'Ukr', 'COM'];
//
// for (const arrayElement of array) {
//     if (typeof arrayElement === 'number') {
//         console.log(arrayElement);
//     }
// }

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = ['hai', false, 'ahoj', 10, 'Nazdar', true, 'Andrew', 20, 'Ukr', 'COM'];
//
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//         console.log(array[i]);
//     }
// }

