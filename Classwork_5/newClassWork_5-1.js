// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.

class Computer {
    constructor(RAM, processorPower = 1000, name) {
        this.RAM = RAM;
        this.processorPower = processorPower;
        this.name = name;
    }
    switchingOn () {
        console.log('Hello Bro');
    }
}

let pc = new Computer(16,500, 'Asus');
pc.switchingOn();

// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)


class MacBook extends Computer {
    constructor(RAM, processorPower = 1000, name, inchMonitor) {
        super(RAM, processorPower = 1000, name);
        this.inchMonitor = inchMonitor;
        this.battery = Math.round(this.processorPower / (this.inchMonitor * this.RAM));
    }
}

let notebook = new MacBook(8, 800,'Lenovo', 15,6);
notebook.switchingOn();
console.log(notebook);

// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class UltraBook extends MacBook {
    constructor(RAM, processorPower = 1000, name, inchMonitor, weight,) {
        super(RAM, processorPower, name, inchMonitor);
        this.weiht = weight;
    }

    switchingOn() {
        if (this.weiht >= 2 || this.battery > 4) {
            console.error(`
            Weight: ${this.weiht} > 2 кг. 
            BatteryLife = ${this.battery} год.`);
        } else {
            console.log('Hello Ultra')
        }
    }
}

let laptop = new UltraBook(6, 700,'Sumsung', 17,2.3);
console.log(laptop);

laptop.switchingOn();

// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

class BasicPc extends Computer{
    constructor(RAM, processorPower = 1000, name) {
        super(RAM, processorPower, name);
        this.FPS = Math.round(this.processorPower / this.RAM);

    }
    gameStart (GameName) {
console.log(`You are playing ${GameName} with ${this.FPS} FSP`)
    }

    upgrade (upgradeProcessor, upgradeRAM) {

        this.upgradeProcessor = upgradeProcessor;
        this.upgradeRAM = upgradeRAM;

        if (upgradeProcessor > (this.processorPower * 1.1) || upgradeProcessor < this.processorPower) {
            console.log('Sorry Mikel');
        } else {console.log(`power increased ${Math.round(((upgradeProcessor/this.processorPower)-1)*100)} %`)}

        if (upgradeRAM === this.RAM * 2) {
            console.log(`RAM increased ${Math.round(((upgradeRAM/this.RAM)-1)*100)} %`);
        } else { console.log('Sorry:(( ');}
    }
}

let PC = new BasicPc(10,800,'Acer');

PC.gameStart ('Contra Strike');

PC.upgrade(850,19);

// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.

class CamePC extends BasicPc {
    constructor(RAM, processorPower = 1000, name) {
        super(RAM, processorPower, name);
        this.FPS *= 2;
    }
    gameStart(GameName) {
      this.processorPower *= 0.99;
        if (this.processorPower < 500 && this.RAM < 8) {
console.log(`на цьому відрі ${this.name} ігри не запускаються`);
        } else {
            console.log(`Комп Бомба`);
        }
    }
}

let gamePC = new CamePC(12,600,'Sony');
gamePC.gameStart('Contra');