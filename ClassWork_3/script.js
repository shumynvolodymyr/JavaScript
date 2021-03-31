// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

const hOneMaimHeader = document.getElementById('main_header');

hOneMaimHeader.style.color = 'skyblue';
hOneMaimHeader.innerText = 'February-2021';

// b) робить шириниу елементу ul 400px

// const weidthUl = document.getElementsByTagName('ul');
// for (let i = 0; i < weidthUl.length; i++) {
//     weidthUl[i].style.width = '400px';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let widthLinkList  = document.getElementsByClassName('linkList');
// for (let i =0; i < widthLinkList.length; i++) {
//     widthLinkList[i].style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// const listElementTwoText = document.getElementsByClassName('listElement2');
// for (let i = 0; i < listElementTwoText.length; i++) {
//     console.log(listElementTwoText[i].innerText);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

const elementLiColor = document.getElementsByTagName('li');
for (let i = 0; i < elementLiColor.length; i++) {
    elementLiColor[i].style.background = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

// const allElementA = document.getElementsByTagName('a');
// for (let i = 0; i < allElementA.length; i++) {
//     allElementA[i].classList.add('anchor');
//
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// const allElementA = document.getElementsByTagName('a');
// for (let i = 0; i < allElementA.length; i++) {
//     if (allElementA[i].innerText === 'link3') {
//         allElementA[i].style.fontSize =  `40px`;
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// const allElementA = document.getElementsByTagName('a');
// for (const allElementAElement of allElementA) {
//     allElementAElement.classList.add(`element_${allElementAElement.innerText}`);
// }

// або через фор
// const allElementA = document.getElementsByTagName('a');
// for (let i = 0; i < allElementA.length; i++) {
//     allElementA[i].classList.add(`element_${allElementA[i].innerText}`);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// const allSubHeader = document.getElementsByClassName('sub-header');
// for (let i = 0; i < allSubHeader.length; i++) {
//     const allSubHeaderElement = allSubHeader[i];
//     allSubHeaderElement.style.background = prompt('color');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// const allSubHeader = document.getElementsByClassName('sub-header');
// for (let i = 0; i < allSubHeader.length; i++) {
//     const allSubHeaderElement = allSubHeader[i];
//     if (allSubHeader[i].innerText === 'content 2 segment') {
//         allSubHeaderElement.style.background = prompt('color');
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// const contentOneText = document.getElementsByClassName('content_1');
// for (let i = 0; i < contentOneText.length; i++) {
//     const contentOneTextElement = contentOneText[i];
//     contentOneTextElement.innerText = prompt('Text');
// }

// l) отримати елементи p та змінити їм padding на 20px

// const allP = document.getElementsByTagName('p');
// for (let i = 0; i < allP.length; i++) {
//     const allPElement = allP[i];
//     allPElement.style.padding = '20px';
//
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// const elementTextTwo = document.getElementsByClassName('text2');
// for (const elementTextTwoElement of elementTextTwo) {
//     elementTextTwoElement.innerText = 'February 2021';
// }
//
// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];
const divochka = document.createElement('div');
divochka.innerHTML = `<h1>Правила бойцовского клуба<h1>`;
document.body.appendChild(divochka);

const content = document.createElement(`div`);
divochka.appendChild(content);
content.setAttribute(`id`, `wrap`);

for (let i = 0; i < rules.length; i++) {
let rulesDiv = document.createElement('div');
    rulesDiv.innerHTML = `<h2>${rules[i].title}</h2>`;
    rulesDiv.classList.add(`rules`, `rule${i+1}`);

content.appendChild(rulesDiv);

let rulesP = document.createElement('p');
rulesP.innerHTML = `${rules[i].body}`;
rulesDiv.appendChild(rulesP);
}
