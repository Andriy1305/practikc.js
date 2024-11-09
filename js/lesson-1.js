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
// const number = prompt("кількість хвилин");
// const hours = Math.floor(number / 60);
// const minutes = number % 60;
// const modifHours = String(hours).padStart(2, "0"); 
// const modifMinutes = String(minutes).padStart(2, "0"); 
// console.log(`${modifHours}:${modifMinutes}`);

//3. Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел
// * перепиши код на функцію getNumbers(min, max)

// const max = 56;
// const min = 33;
// let sum = 0;
// for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// function getNumbers(min, max) {
//     let sum = 0;
//  for (let i = max; i >= min; i--) {
//      console.log(i);
//      if (i % 2 === 0) {
//          sum += i;
//      }
//  }
//     return sum;
// }
// console.log (getNumbers(33,56) );

// 4. Змінна num може набувати 4 значення: 1, 2, 3 або 4 (запитуй число у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишемо 'winter', якщо має значення '2' - 'spring' і т.д.
// Розв'яжіть завдання через switch-case.

let num = Number(prompt("1 or 2 or 3 or 4"));
let result = "";
switch (num) {
    case 1:
        result = "winter";
        break
    case 2:
        result = "spring";
        break
    case 3:
        result = "summer";
        break
    case 4:
        result = "autemn";
        break
    default:
        result = " Attention (1 to 4)!"
}
console.log(result);