// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
//
// let crimsonDiv = document.getElementById('text');
// let divButton = document.getElementById('divButton');
// divButton.onclick = event => {crimsonDiv.hidden = !crimsonDiv.hidden};

//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//
// let divButtonTwo = document.getElementById('divButtonTwo');
// divButtonTwo.onclick = event => divButtonTwo.hidden = true;

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

// let inputAge = document.getElementById('input');
// let buttonAge = document.getElementById('button');
//
// buttonAge.onclick = ev => {
//     console.log(inputAge.value);
//     inputAge.value > 18 ? alert('18+') : alert(`Вік менше ніж 18`)};
//
//
// // - Створіть меню, яке розгортається/згортається при клику
//
// const menuName = document.getElementById('menuName');
// const menu = document.getElementById('menu');
//
// menu.style.display = 'block';
// menuName.style.backgroundColor = 'crimson';
//
// menuName.onclick = (e) => {
//     menu.style.display === 'block'
//     ?menu.style.display = 'none'
//     :menu.style.display = 'block'
// }

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.

// const commentsList = [
//     {title : 'lorem1', body:'lorem ipsum dolo sit ameti1'},
//     {title : 'lorem2', body:'lorem ipsum dolo sit ameti2'},
//     {title : 'lorem3', body:'lorem ipsum dolo sit ameti3'},
//     {title : 'lorem4', body:'lorem ipsum dolo sit ameti4'},
//     {title : 'lorem5', body:'lorem ipsum dolo sit ameti5'},
//     {title : 'lorem6', body:'lorem ipsum dolo sit ameti6'},
// ]
//
// const list = document.getElementById('list');
// commentsList.forEach(ev => {
//     const div = document.createElement('div');
//     const title = document.createElement('h1');
//     const body = document.createElement('p');
//     const button = document.createElement('button');
//     button.innerText = 'DEL';
//
//     button.onclick = () => {
//         body.hidden = ! body.hidden;
//     }
//
//     title.innerHTML = ev.title;
//     body.innerHTML = ev.body;
//
//     list.appendChild(div);
//     div.appendChild(title);
//     div.appendChild(body);
//     div.appendChild(button);
//
// })

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const but = document.getElementById('but');
// but.onclick = ev => {
//     for (const item of document.forms) {
//         for (const form of item) {
//             console.log(form.value);
//         }
//     }
// }

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// const generation = (genTr, genTd, element) => {
// const table = document.createElement('table');
//     for (let i = 0; i < genTr; i++) {
//         const teerka = document.createElement('tr');
//         table.appendChild(teerka);
//
//         for (let j = 0; j < genTd; j++) {
//             const tedeshka = document.createElement('tr');
//             teerka.appendChild(tedeshka);
//             tedeshka.innerText = 'two';
//         }
//     }
// let elmnt = document.createElement(element);
//     elmnt.appendChild(table);
//     document.body.append(elmnt);
//
// }
// generation(4,4,'one')

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

let prew = document.getElementsByClassName('prew');
let next = document.getElementsByClassName('next');

prew.onclick = () =>{

}


//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ