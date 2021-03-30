// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// a) отримує текст з параграфа з id "content"

// let contentIdText = document.getElementById('content');
// console.log(contentIdText.innerText);

// b) отримує текст з блоку з id "rules"

// let rulesIdText = document.getElementById('rules');
// console.log(rulesIdText.innerText);

// c) замініть текст параграфа з id 'content' на будь-який інший
//
let contentIdText = document.getElementById('content');
contentIdText.innerText = 'Hello People :)';

// d) замініть текст параграфа з id 'rules' на будь-який інший

let rulesIdText = document.getElementById('rules');
rulesIdText.innerText = 'Jmenuji se Vladimir. Nemluvím anglicky';

// e) змініть кожному елементу колір фону на червоний

let allElementBody = document.getElementsByTagName('body');
for (let i = 0; i < allElementBody.length; i++) {
    allElementBody[i].style.backgroundColor = '#8a2c2c';
}

// f) змініть кожному елементу колір тексту на синій

let allElementColor = document.getElementsByTagName('body');
for (let i = 0; i < allElementColor.length; i++) {
    allElementColor[i].style.color = '#0e9dd8';
}

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

let allElementList = document.getElementById('rules')
console.log(allElementList.classList);

// h) отримати всі елементи з класом fc_rules

let allElementFcRules = document.getElementsByClassName('fc_rules');
console.log(allElementFcRules);

// i) поміняти колір тексту у всіх елементів fc_rules на червоний

let allColorFcRules = document.getElementsByClassName('fc_rules');
for (let i=0; i < allColorFcRules.length; i++) {
    allColorFcRules[i].style.color = 'red';
}

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
    // Вставити цей блок на сторінку

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// for (let i =0; i < users.length; i++) {
//     const usersDiv = document.createElement('div');
// usersDiv.innerHTML = `Hi. My name is ${users[i].name} <br> I am ${users[i].age} years old <br> My status
//      ${users[i].status}!<hr>`;
//     document.body.appendChild(usersDiv);
// }

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
for (let i =0; i < users.length; i++) {
    let usersDiv = document.createElement('div');
    usersDiv.innerHTML =
        `Hi. My name is ${users[i].name} <br> I am ${users[i].age} years old <br> My status ${users[i].status}!`;
    document.body.appendChild(usersDiv);

    let usersAddress = document.createElement('div');
    usersAddress.innerHTML = `
    I live in city ${users[i].address.city}. <br> 
    My country- ${users[i].address.country}. <br>
    Street: ${users[i].address.street}. <br>
    My house number ${users[i].address.houseNumber} <hr>`;
    usersDiv.appendChild(usersAddress);
}



