// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// function Tag(tagName, tagDiscription, nameAtributes1, discriptionsAtributes1, nameAtributes2, discriptionsAtributes2) {
//     this.tagName = tagName;
//     this.tagDiscription = tagDiscription;
//     this.atributArray = [
//         {nameAtributes: nameAtributes1, discriptionsAtributes: discriptionsAtributes1},
//         {nameAtributes: nameAtributes2, discriptionsAtributes: discriptionsAtributes2},
//
//     ]
// }
//
// let a = new Tag('a', 'Является одним из важных элементов HTML и предназначен для создания ссылок.', 'name', 'Этот' +
//     ' атрибут обязателен в определении якоря на странице.', 'href', 'Этот атрибут устанавливает ссылку');
// console.log(a);
//
// let div = new Tag('div', 'Является блочным элементом и предназначен для выделения фрагмента документа' +
//     ' с целью изменения вида содержимого.', 'class', 'Селектор class, наоборот может применяться на одной странице' +
//     ' бесконечное количество раз.', 'id', 'Cелектор id может использоваться на странице только один раз.');
// console.log(div);
//
// let h1 = new Tag('h1', 'представляет собой наиболее важный заголовок первого уровня', 'align', 'Определяет' +
//     ' выравнивание заголовка.');
// console.log(h1);
//
// let span = new Tag('span', 'Предназначен для определения строчных элементов документа.');
// console.log(span);
//
// let input = new Tag('input', 'Является одним из разносторонних элементов формы и позволяет создавать' +
//     ' разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'type', 'Основной атрибут тега' +
//     ' input, определяющий вид элемента', 'accept', 'Устанавливает фильтр на типы файлов, которые вы можете' +
//     ' отправить через поле загрузки файлов.');
// console.log(input);
//
// let form = new  Tag('form', 'Связывает поле с формой по её идентификатору.', undefined);
// console.log(form);
//
// let option = new Tag('option', 'определяет отдельные пункты списка', 'disabled', 'Заблокировать для доступа элемент' +
//     ' списка.', 'label', 'Указание метки пункта списка.');
// console.log(option);
//
// let select = new Tag('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с' +
//     ' одним или множественным выбором, как показано далее','required', 'Список обязателен для выбора перед отправкой' +
//     ' формы.', 'multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.');
// console.log(select);

// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

//
// class Tag {
//     constructor(tagName, tagDescription, atributArray) {
//         this.tagName = tagName;
//         this.tagDescription = tagDescription;
//         this.atributArray = atributArray;
//     }
// }
//
// let a = new Tag('a', 'Является одним из важных элементов HTML и предназначен для создания ссылок.', [{title: 'name', discriptions: 'Этот' +
//     ' атрибут обязателен в определении якоря на странице.'}, {title: 'href', descriptions: 'Этот атрибут' +
//         ' устанавливает ссылку'}]);
// console.log(a);
//
// let div = new Tag('div', 'Является блочным элементом и предназначен для выделения фрагмента документа' +
//     ' с целью изменения вида содержимого.', [{title: 'class',descriptions: 'Селектор class, наоборот может' +
//         ' применяться на одной странице' +
//     ' бесконечное количество раз.'}, {title:'id',descriptions: 'Cелектор id может использоваться на странице только' +
//         ' один раз.'}]);
// console.log(div);
//
// let h1 = new Tag('h1', 'представляет собой наиболее важный заголовок первого уровня', [{title: 'align',description: 'Определяет' +
//     ' выравнивание заголовка.'}]);
// console.log(h1);
//
// let span = new Tag('span', 'Предназначен для определения строчных элементов документа.');
// console.log(span);
//
// let input = new Tag('input', 'Является одним из разносторонних элементов формы и позволяет создавать' +
//     ' разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{title:'type', description: 'Основной атрибут' +
//             ' тега' +
//     ' input, определяющий вид элемента'}, {title:'accept', description:'Устанавливает фильтр на типы файлов, которые' +
//         ' вы' +
//         ' можете' +
//     ' отправить через поле загрузки файлов.'}]);
// console.log(input);
//
// let form = new Tag('form', 'Связывает поле с формой по её идентификатору.');
// console.log(form);
//
// let option = new Tag('option', 'определяет отдельные пункты списка',[{ title: 'disabled',description: 'Заблокировать' +
//         ' для' +
//         ' доступа элемент' +
//     ' списка.'},{title: 'label',description: 'Указание метки пункта списка.'}]);
// console.log(option);
//
// let select = new Tag('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с' +
//     ' одним или множественным выбором, как показано далее', [{title:'required',description: 'Список обязателен для' +
//         ' выбора перед' +
//             ' отправкой' +
//     ' формы.'}, {title:'multiple', description:'Позволяет одновременно выбирать сразу несколько элементов списка.'}]);
// console.log(select);


//
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


let car = {
    model: 'Mercedes-Benz',
    producer: 'Germany',
year: 2013,
max_speed: 299,
engine_volume: '3.0D',

    drive: function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
    },

    info: function () {
        console.log(`
        model: ${this.model}
        producer: ${this.producer}
        year: ${this.year}
        max_speed: ${this.max_speed}
        engine_volume: ${this.engine_volume}
        `);
    },

    increaseMaxSpeed: function (newSpeed) {
        this.max_speed += newSpeed;
    },

    changeYear: function (newValue) {
        this.year = newValue
    },

    addDriver: function (driver) {
        this.driver = driver;
    }

}

car.drive();

car.info ();

car.increaseMaxSpeed(100);
console.log(car.max_speed);

car.changeYear(2021);
console.log(car.year);

car.addDriver({name: 'Ivan', age: 25});
console.log(car.driver);




