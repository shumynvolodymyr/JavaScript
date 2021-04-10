// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.

// let numbers = [1, 3, 8, 13, 0, 4, 5, 25, 35, 19, 11, 7, 4, 5, 8, 9, 4, 14, 16, 18];

// let numbersOne = numbers.sort((a,b) => a-b);
// console.log(numbersOne);

//     b) відсортувати його від більшого до меншого.

// let numbersTwo = numbers.sort((a, b) => b - a);
// console.log(numbersTwo);

//     c) Відфілтрувати числа які є кратними 3.

// let numbersThree = numbers.filter((a) => a % 3 === 0);
// console.log(numbersThree);

// d) Відфілтрувати числа які є більшими за 10.

// let numbersFour = numbers.filter((a) => a > 10);
// console.log(numbersFour);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

// numbers.forEach((a) => document.write(` ${a} <hr>`));

// f) За допомогою map збільшити кожен елемент в масиві в три рази.

// let map = numbers.map((value) => value * 3);
// console.log(map);

// g) Порахувати загальну суму всіх елментів у масиві (reduce)

// let number = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(number);

// 2) Створити масив з 20 стрічок та:

// let users = ['One', 'Two','Пять','karIna', 'Шість', 'Сім' , 'Three', 'four', 'Вісім','David', 'Девять', 'десять', 'Bara', 'kara','Fara','Dasha','Masha', 'Sasha', 'Natasha', 'Artem'];
// console.log(users);

// a) Відсортувати його в алфавітному порядку

// let user = users.sort((a ,b)=> {
//    let nameA = a.toLowerCase();
//    let nameB = b.toLowerCase();
//    if (nameA<nameB) return -1;
//    if (nameA>nameB) return 1;
// });
// console.log(user);

// b) Відсортувати в зворотньому порядку

// let user = users.sort((a,b) => {
//     if (a < b) {
//         return  1
//     }
//     return -1;
// });
// console.log(user);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

// let newArr = users.filter(name => name.length > 4);
// console.log(newArr);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

// users.forEach((value) => console.log(`Sam says ${value}`));

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
//     const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)

// let user = users.sort((a,b)=> a.age-b.age);
// console.log(user);
//
// let user1 = users.sort((a,b)=> b.age - a.age);
// console.log(user1);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let user = users.sort((a,b)=> a.name.length - b.name.length);
// console.log(user);

// let user1 = users.sort((a,b)=> b.name.length - a.name.length);
// console.log(user1);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// d) відсортувати його за індентифікатором

// let usersId = users.map((name, idndex) => ({id: idndex +1, ...name}));
//
// usersId.sort((a,b)=> b.id - a.id);
// console.log(usersId);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

// let flat = users.reduce((acc, value) => {
//     if (value.isMarried === true) {
//         value.flat = 'Вітаю з квартирою!';
//         acc.push(value);
//
//     }
//     return acc;
// },[]);
// console.log(flat);


// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
//
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

// let result = cars.filter((values) => values.volume > 3);
// console.log(result);

// - двигун = 2л

// console.log(cars.filter((values) => values.volume === 2));

// - виробник мерс

// console.log(cars.filter((values) => values.producer === 'mercedes'));

// - двигун більше 3х літрів + виробник мерседес

// console.log(cars.filter((values) => values.volume === 3 && values.producer === 'mercedes'));

// - двигун більше 3х літрів + виробник субару

// console.log(cars.filter((values)=> values.volume >= 3 && values.producer === 'subaru'));

// - сили більше ніж 300

// console.log(cars.filter((value) => value.power > 300));

// - сили більше ніж 300 + виробник субару

// console.log((cars.filter((values) => values.power > 300 && values.producer === 'subaru')));

// - мотор серіі ej

// console.log(cars.filter(value => value.engine.startsWith('ej')));

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// console.log((cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej'))));

// - двигун меньше 3х літрів + виробник мерседес

// console.log(cars.filter(value => value.volume < 3 && value.producer === 'mercedes'));

// - двигун більше 2л + сили більше 250

// console.log(cars.filter(value => value.volume > 2 && value.power > 250));

// - сили більше 250  + виробник бмв

// console.log((cars.filter(value => value.power > 250 && value.producer === 'bmw')));

// - взять слдующий массив

// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'Oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

// -- Відсортувати їх по ID

// console.log((usersWithAddress.sort((a, b) => a.id - b.id)));

// -- Відсортувати їх по ID в зворотньому порядку

// console.log((usersWithAddress.sort((a, b) => b.id - a.id)));

// -- Відсортувати по віку

// console.log(usersWithAddress.sort((a,b)=> a.age - b.age));

// -- Відсортувати по віку в зворотньому порядку

// console.log(usersWithAddress.sort((a,b)=> b.age - a.age));

// -- Відсорутвати по імені

// console.log(usersWithAddress.sort((a,b)=> {
//     let nameA = a.name.toUpperCase();
//     let nameB = b.name.toUpperCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
// }));

// -- Відсорутвати по назві вулиці

// console.log(usersWithAddress.sort((a,b)=> {
//     let streetA = a.address.street.toUpperCase();
//     let streetB = b.address.street.toUpperCase();
//     if (streetA < streetB) return -1;
//     if (streetA > streetB) return 1;
// }));

// -- Відсорутвати по номеру будинку

// console.log(usersWithAddress.sort((a,b)=> a.address.number - b.address.number));

// -- Залигити тільки тих, хто молодший ніж 30 (filter)

// console.log((usersWithAddress.filter((a) => a.age < 30)));

// -- Залишити тільки одружених

// console.log((usersWithAddress.filter((a) => a.isMarried === true)));

// -- Залишити тільки одружених, які молодні за 30

// console.log((usersWithAddress.filter((a) => a.isMarried === true && a.age < 30)));

// -- Залишити лише тих, в кого парні номери будинків.

// console.log((usersWithAddress.filter((a) => a.address.number % 2 === 0)));

// -- Порахувати загальний вік всіх людей. (reduce)

// console.log((usersWithAddress.reduce((acc, currentValue) => {
//     return acc + currentValue.age;
// }, 0)));

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

// let child = usersWithAddress.reduce((acc, value) =>{
//     if (value.age > 30 && value.isMarried === true) {
//         value.child = true;
//         acc.push(value);
//     }
//     return acc;
// },[]);
// console.log(child);

// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.

const carOne = {producer:"subaru",volume: 2, owner: {name: 'John', age: 28, drivingExperience: 5}, price : 2000, year: 2015};
const carTwo = {producer:"bmw",volume: 3, owner: {name: 'Dan', age: 29, drivingExperience: 6}, price : 2500, year: 2014};
const carThree = {producer:"mercedes",volume: 6.3, owner: {name: 'Ivan', age: 25, drivingExperience: 7}, price : 3000, year: 2013};
const carFour = {producer:"opel",volume: 1.8, owner: {name: 'Dominik', age: 27, drivingExperience: 8}, price : 1000, year: 2008};
const carFive = {producer:"lada",volume: 1.6, owner: {name: 'Vlad', age: 26, drivingExperience: 4}, price : 500, year: 2009};
const carSix = {producer:"lexus",volume: 2.5, owner: {name: 'Andrew', age: 35, drivingExperience: 5}, price : 2800, year: 2012};
const carSeven = {producer:"fiat",volume: 2, owner: {name: 'Ihor', age: 27, drivingExperience: 7}, price : 4000, year: 2011};
const carEight = {producer:"renault",volume: 1.9, owner: {name: 'Artem', age: 33, drivingExperience: 3}, price : 1200, year: 2010};

const car = [carOne, carTwo, carThree, carFour, carFive, carSix, carSeven, carEight];

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

const newOwner = ['Sasha','','Masha','', 'Natasha','','Dasha'];

//// тут трішки зколхозив :)) тому що мені нових водіїв теж циклом гонить через один ( +

for (let i = 0; i < car.length; i+= 2) {
    car[i].volume += car[i].volume * 0.1;
    car[i].owner.name = newOwner[i];
}
console.log(car);

// Для початку вкладіть всі наші створені автомобілі в масив cars.

const cars = car.concat();
console.log(cars);

//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

for (let i = 0; i < cars.length; i+=2) {
    const car1 = cars[i];
    car1.volume += car[i].volume * 0.1;
    car1.price += car1.price * 0.05;

}
console.log(cars);

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

for (let i = 0; i < cars.length; i++) {
    const car1 = cars[i];
    if (car1.owner.drivingExperience <5 && car1.owner.age > 25) {
        car1.owner.drivingExperience +=1;
    }
}
console.log(cars);

//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let zero = 0;

for (let i = 0; i < cars.length; i++) {
  zero += cars[i].price;
}
console.log(zero);

// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

const arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function minAndMaxIndex(element) {
    let min = arr.indexOf(element);
    let max = arr.lastIndexOf(element);
    console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}`)
}

minAndMaxIndex(3);