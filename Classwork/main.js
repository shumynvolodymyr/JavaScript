// CLASS

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = 'true';
//
// console.log(typeof str, typeof num, typeof flag, typeof txt);

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
//
// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
//
// console.log(a1, a2, a3, a4, a5);

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
//
// console.log(a6, a7, a8, a9, a10);

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = 23;
// let width = 10;
//
// let s = (width + height);
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
//
// let v = Math.PI * dC * heightC;
//
// console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
//
// let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
//
// console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = 'Hello world';
//
// document.write(str);
// alert(str);
// console.log(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// alert('Shumyn Volodymyr\n 28\n autoMobile');

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Хто';
// let str2 = 'ти';
// let str3 = 'такий';
// let concatenation = (str1 + ' ' + str2 + ' ' + str3);
// document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");    //205 Тому що стр '20' - строка а при строковому типі при додаванні число
// просто
// // дописується до строки
// document.write(str - a + "<br/>");    //15 операція віднімання виконується норм, '20' -5 неможе бути 20-5 тому 15:)
// document.write(str * "2" + "<br/>"); //  40 операція множення для строк відсутня, тому стр перетворюється на число
// document.write(str / 2 + "<br/>");  // 10 аналогічно як із множенням

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14") сприймає тільки цілі числа тому буде '3'
//     parseInt("-7.875") вийде '-7'
// parseInt("435")  виведе '435'
// parseInt("Вася") Вася не число і тому буде НаН

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//
// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// let str = prompt('Ти хто?', 'Вася:)')
// console.log(str);
//
// Незовсім зрозумів завдання

//13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert


// let numberOne = +prompt('Введіть будь ласка цифру','7');
//
// let numberTwo = +prompt('Введіть будь ласка цифру','13');
//
// alert(numberOne + numberTwo);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// const name = prompt("Ваше ім'я", '');
// const lastName = prompt("Ваше прізвище", '');
// let age = prompt('Ваш вік', '');

// alert('Доброго вечера' + ' ' + name + ' ' + lastName + ', мои поздравления что вам' + ' ' + age);

// alert(`Доброго вечера ${name} ${lastName}, мои поздравления что вам ${age}`);

// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let numberOne = +prompt('Введіть число 1', '');
// let numberTwo = +prompt('Введіть число 2', '');
// let numberThree = +prompt('Введіть число 3', '');
//
// if (numberOne > numberTwo && numberOne > numberThree) {
//     document.write(numberOne);
// }
// else if (numberTwo > numberOne && numberTwo> numberThree)  {
//     document.write(numberTwo);
// }
// else if (numberThree > numberOne && numberThree > numberOne) {
//     document.write(numberThree);
// }

// Нажаль це недоробив так як нам ще походу то не пояснювали, і нагуглити невийшло))) Зараз виводить найбільше значення :)


// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// const road = prompt('Колір світлофора', '');
//
// switch (road) {
//             case 'зелений' && 'green':
//         alert('Шуруй');
//         break;
//     case 'жовтий' && 'yellow':
//         alert('Почекай');
//         break;
//     case 'червоний' && 'red':
//         alert('Стоп');
//         break;
//     default:
//         alert('Роби як знаєш!');
// }