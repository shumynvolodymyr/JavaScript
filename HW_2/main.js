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
//
// let array = [];
//
// array[0] = 'hello';
// array[1] = true;
// array[2] = false;
// array[3] = 'OK';
// array[4] = 123;
//
// console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Hello </div><br>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i=0; i < 10; i++) {
//     document.write(`<div>${i} Привіт </div>`)
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0;
// while (i<20) {
//     document.write(`<h1> Text </h1><hr>`);
//     i++;
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i<20) {
//     document.write(`<h1> ${i} З довільним текстом </h1>`);
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
//
// let array = ['hai', false, 'ahoj', 10, 'Nazdar', true, 'Andrew', 20, 'Ukr', 'COM'];

// for (let i = 0; i < array.length; i++){
//     if (typeof array[i] === 'boolean') {
//         console.log(array[i]);
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

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = [];
//
// array[0] = 'hello';
// array[1] = 123;
// array[2] = false;
// array[3] = 'OK';
// array[4] = 777;
// array[5] = 'Nazdar';
// array[6] = 'true';
// array[7] = true;
// array[8] = 'Ahoj';
// array[9] = 333;
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0 ; i < 10; i++) {
//     console.log(i);
// document.write(i);
// document.write(`<br>`);
// }

// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// let i = 0;
// while (i < 100) {
//     console.log(i);
//     document.write(i + `<br>`);
//     i++;
// }

// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i + `<br>`);
// }

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         document.write(i + `<br>`);
//         console.log(i);
//     }
// }

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// i = 0;
//
// while (i < 100) {
//     console.log(i);
//     document.write(i + `<br>`);
//     i+= 2;
// }

// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i< 100; i++) {
//     if (i % 2 ===1) {
//         document.write(i + `<br>`);
//         console.log(i);
//     }
// }

// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let min = 0; min < 60; min++) {
//     for (let sec = 0; sec < 60; sec++) {
//         console.log(min + `:` + sec);
//         if (min === 2 && sec === 0) {
//             min = 60;
// sec = 60;
//             break;
//         }
//     }
// }

// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let hour =0; hour < 12 ; hour++) {
//     for (let min = 0; min < 60; min++) {
//         for (let sec = 0; sec < 60; sec++) {
//             console.log(hour + `:` + min + `:` + sec);
//             if (hour === 2 && min === 20 && sec === 0) {
//                 hour = 12;
//                 min = 60;
//                 sec = 60;
//                 break;
//             }
//         }
//     }
// }




