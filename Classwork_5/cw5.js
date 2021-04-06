// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let mercedes = new Car('Mercedes-Benz', 'Germany', '2013', '300', '3.0 l');
//
// function Car(model, producer, year, max_speed, engine_volume) {
// this.model = model;
// this.producer = producer;
// this.year = year;
// this.max_speed = max_speed;
// this.engine_volume = engine_volume;
//
//     this.drive = function (drive) {
//         console.log(`їдемо зі швидкістю ${this.max_speed} км/годину`);
//     };
//
//     this.info = function (info) {
//         console.log(`
//         model: ${model}
//         producer: ${producer}
//         year: ${year}
//         max_speed: ${max_speed}
//         engine_volume: ${engine_volume}
//         `)
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.max_speed = Number(this.max_speed) + Number(newSpeed);
//         console.log(this.max_speed);
//     };
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(this.year);
//     };
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log(this.driver);
//     }
//
// }
// mercedes.drive();
// mercedes.info();
// mercedes.increaseMaxSpeed('50');
// mercedes.changeYear(2015);
// mercedes.addDriver('Ihor');

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, max_speed, engine_volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.engine_volume = engine_volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//     };
//
//     info() {
//         console.log(`
//         model: ${this.model}
//         producer: ${this.producer}
//         year: ${this.year}
//         max_speed: ${this.max_speed}
//         engine_volume: ${this.engine_volume}`);
//     };
//
//     increaseMaxSpeed (newSpeed) {
//         this.max_speed += newSpeed;
//         console.log(this.max_speed);
//     };
//
//     changeYear (newValue) {
//         this.year=newValue;
//         console.log(this.year);
//     };
//
//     addDriver (driver) {
//         this.driver = driver;
//         console.log(this.driver);
//     }
//
// }
//
// let MyCar = new Car('Lexus', 'Japan', 2013, 280, '3,5')
//
// MyCar.drive();
// MyCar.info();
// MyCar.increaseMaxSpeed(10);
// MyCar.changeYear(2017);
// MyCar.addDriver('name: Vovan, age: 28');


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом




// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить