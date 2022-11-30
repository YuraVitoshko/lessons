'use strict'

// ===========================================================

// console.log('35' + - "22");

// console.log('35' * "22");

// console.log('558' > 22++);

// let userCounter = 0;
// let newUserCounter = userCounter++;
// console.log(userCounter);

// console.log(!false && 11 || 18 && !'');
// let result = !"";
// console.log(Boolean(result));

// let name = 0;
// console.log(name ?? "Без имени");


// ===========================================================


// let message = `Hello`;

// let first = 5;
// let second = 10;

// if (first > 10) {
// 	console.log(message);
// } else if (first > 9) {
// 	console.log('1');
// } else if (first > 8) {
// 	console.log('2');
// } else if (first > 5) {
// 	console.log('3');
// } else if (first > 4) {
// 	console.log('000');
// }


// let message = `Hello`;

// if (5 > 1) {
// 	messageEnd = ', Yura!';
// } else {
// 	messageEnd = ', Olga!';
// }

// let messageEnd = (5 > 10) ? ', Yura' : ', Olga!';

// message += messageEnd;
// console.log(message);


// if (0) {
// 	console.log('False');
// } else if (' ') {
// 	console.log('True');
// }


// ===========================================================

// let num = 0;
// do {
// 	console.log(num);
// 	num++;
// } while (num < 0);

// let num = 0;
// for (; num < 5; num++) {
// 	if (num == 2) continue; 
// 	console.log(num);
// }
// let num = 1;
// do {
// 	console.log(num);
// 	num++;
// } while (num < 6)

// let num = 8;
// while (num) {
// 	console.log(num);
// 	num--;
// }

// for (let num = 0; num < 2; num++) {
// 	console.log(`Число: ${num}`);
// }

// let num = 0;
// do {
// 	console.log(`Число: ${num}`);
// 	num++;
// } while (num < 2);

// Цикл №1
// firstFor: for (let num = 0; num < 2; num++) {
// 		// Цикл №2
// 	for (let size = 0; size < 3; size++) {
// 	console.log(size);
// 	if (size == 1) { break firstFor;} 
// 	}
// }



// ===========================================================


// let someBigNum = 1e6;
// console.log(someBigNum);

// let someLittleNum = 1e-6;
// console.log(someLittleNum);


// console.log(0xff);

// Math.floor Округлює число в меншу сторону
// let numOne = Math.floor(5.8);
// let numTwo = Math.floor(2.2);
// let numThree = Math.floor(-2.2);

// console.log(numOne);
// console.log(numTwo);
// console.log(numThree);


// Math.ceil Округлює число в більшу сторону
// let numOne = Math.ceil(5.8);
// let numTwo = Math.ceil(2.2);
// let numThree = Math.ceil(-2.2);

// console.log(numOne);
// console.log(numTwo);
// console.log(numThree);


// Math.round Округлює число до ближчого цілого
// let numOne = Math.round(5.5);
// let numTwo = Math.round(2.2);
// let numThree = Math.round(-2.2);

// console.log(numOne);
// console.log(numTwo);
// console.log(numThree);

// Як отримати 5.8 чи 5.85?
// Спосіб множення і ділення

// let numOne = Math.round(5.845 * 10) / 10;
// console.log(numOne);
// let numTwo = Math.round(5.845 * 100) / 100;
// console.log(numTwo);
// let numThree = Math.round(5.8449 * 100) / 100;
// console.log(numThree);

// Метод toFixed(n) - округляє число до n знаків після 
// коми і повертає рядкове представлення результату

// let numOne = 5.845;
// console.log(numOne.toFixed(1));

// Перетворити в число:
// console.log(+numOne.toFixed(1));
// console.log(Number(numOne.toFixed(1)));


// let valueOne = parseInt('150.58px')
// console.log(valueOne);
// console.log(typeof valueOne);

// let valueTwo = parseFloat('150.58px')
// console.log(valueTwo);
// console.log(typeof valueTwo);


// let valueTwo = (+'150.58')
// console.log(valueTwo);
// console.log(typeof valueTwo);


// console.log(Math.max(5, 85, -49));
// console.log(Math.min(5, 85, -49));

// let num = -58;
// console.log(Math.abs(num));


// Math.pow(n, power)
// Повертає число n в степінь power
// console.log(Math.pow(5, 8));


// let sourceNum = 1.005 + Number.EPSILON;
// let numOne = Math.round(sourceNum * 100) / 100;
// console.log(numOne);


// let value = parseFloat('135.58px');
// console.log(value);


// let value = 58 + "Фрілансер";
// if (isNaN) {
// 	console.log('Результат виразу NaN');
// }


// let num = Math.max(10, 58, 39, -150, 0)
// console.log(num);

// Округлити число 58.858 до числа 58

// let num = Math.floor(58.858);
// console.log(num);

// ===========================================================


// let text1 = 'Hi';
// let text2 = `${text1} world`;
// console.log(text2);

// \n перенос рядку
// let text = (`Lorem \nipsum dolor \nsit amet`);
// console.log(text);


// \t табуляція
// let text = (`Lorem \n\tipsum dolor \n\t\tsit amet`);
// console.log(text);


// \\ зворотній слеш
// let text = (`Lorem \\ ipsum dolor \\ sit amet`);
// console.log(text);


// \' \" Лапки
// let text = (`Lorem \'ipsum dolor\' sit amet`);
// console.log(text);

// Довжина рядку
// let textOne = `Hello`;
// console.log(textOne.length);


// Отримуємо символ рядку
// let text = `Привіт!`;
// let firstSymbol = text[0];
// Останній символ рядку
// let lasttSymbol = text[text.length - 1];
// console.log(firstSymbol);
// console.log(lasttSymbol);

// for (const char of text) {
// 	console.log(char);
// }


// Зміна регістру
// let text = `Привіт!`;
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());


// Метод .indexOf(substr, pos)
// let text = `Привіт!`;
// console.log(text.indexOf('рив'));
// console.log(text.indexOf('рив', 3));

// Методи includes, startsWidth, endsWidth
// let text = `Привіт!`;
// console.log(text.includes('рив'));
// console.log(text.includes('рив', 3));
// Шукає з початку рядка
// console.log(text.startsWith('рив'));
// Шукає з кінця рядка
// console.log(text.endsWith('!'));

// Регістр має значення, тому при пошуку краще 
// переводити весь рядок в один регістр

// let text = `Hello`;
// let searchText = `El`;
// console.log(text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));


// Метод str.slice(start [, end]) - Повертає частину
// рядка від start до end (не враховуючи)
// let text = `Привіт!`;
// console.log(text.slice(1, 3));
// console.log(text.slice(-2, -1));
// console.log(text.slice(1));


// Порівняння рядків
// Алфавітний порядок
// console.log('A' > 'B');
// Нижній регістр завжди білше верхнього
// console.log('a' > 'B');


// console.log('Скрипт' > 'Скрипка');


// ========================================================


// let fls = 'Фрілансер';
// let text = 'Привіт! Я ${fls}';
// console.log(text);


// let text = `Фрілансер`;
// console.log(text[5]);

// let text = 123 + "456";
// console.log(text);

// let text = `Фрілансер`;
// console.log(text.toUpperCase());

// let text = `Фрілансер`;
// console.log(text.slice(3, 6));

let text = 'фрілансер';
console.log(text.includes('лан', 4));