// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textarea = document.getElementById('textarea1');
// let but = document.getElementById('but');
//
// but.onclick=() => {
//     localStorage.setItem('text',textarea.value);
// }
// textarea.value = localStorage.getItem('text');

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

let text = document.getElementById('text');
let textarea = document.getElementById('textarea');
let checkbox = document.getElementById('checkbox');
let radio = document.getElementById('radio');
let select = document.getElementById('select');

text.oninput = () => {
    localStorage.setItem('text',text.value);
}
text.value = localStorage.getItem('text');

textarea.oninput = () => {
    localStorage.setItem('textarea',textarea.value);
}
textarea.value = localStorage.getItem('textarea');

checkbox.onclick = () => {
    localStorage.setItem('checkbox',checkbox.checked);
}
checkbox.checked = JSON.parse(localStorage.getItem('checkbox'));

radio.onclick = () => {
    localStorage.setItem('radio',radio.checked);
    }
radio.checked = JSON.parse(localStorage.getItem('radio'));

select.oninput = () => {
    localStorage.setItem('select',select.value);
}
select.value = localStorage.getItem('select');


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта



