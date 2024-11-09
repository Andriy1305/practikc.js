//1. Використовуя if...else,
//напишіть код, який буде питати через prompt:
//"Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMASCRIPT",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"
// *регістр не повинен впливати на правильну відповідь
// const answer = prompt("Яка офіційна назва JavaScript?");
//if ("ECMASCRIPT" === answer.toLocaleUpperCase()) {
 //   alert("Вірно"); 
//}
//else {alert("Не знаєте? ECMAScript!")}
// alert("ECMASCRIPT" === answer.toLocaleUpperCase() ? "Вірно!" : "Не знаєте? ECMAScript!"


//2. Напишіть программу, яка отримує від користувача
//число (кількість хвилин) через prompt і виводить у консоль
//рядок у форматі годин та хвилин
// 70 === 01:10
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples
const number = prompt("кількість хвилин");
const hours = Math.floor(number / 60);
const minutes = number % 60;
const modifHours = String(hours).padStart(2, "0"); 
const modifMinutes = String(minutes).padStart(2, "0"); 
console.log(`${modifHours}:${modifMinutes}`);

