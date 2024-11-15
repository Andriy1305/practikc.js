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

// let num = Number(prompt("1 or 2 or 3 or 4"));
// let result = "";
// switch (num) {
//     case 1:
//         result = "winter";
//         break
//     case 2:
//         result = "spring";
//         break
//     case 3:
//         result = "summer";
//         break
//     case 4:
//         result = "autemn";
//         break
//     default:
//         result = " Attention (1 to 4)!"
// }
// console.log(result);

//5. Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "admin",
//то prompt запрашує пароль.
//Якщо нічого не ввели чи нажали Cancel
//вивести в alert рядок "Cancel!"
//В противному випадку вивести рядок "Who are you?!"

//Пароль перевіряти так:
//Якщо введен пароль "123456",
//то вивести рядок "Welcome, boss!"
//в іншому випадку виводити рядок "Wrong password!"

// const login = prompt("Enter your login");
// console.log(login);
// if (login === "admin") {
//     const password = prompt("Enter your password")
//     if (password === "123456") {
//         alert("Welcome, boss!");
//     } else {
//         alert("Wrong password!");
//     }
// } else if (login === "" || login === null) {
//     alert("Cancel")
// } else {
//     alert("Who are you?!");
// }

// 6. Напишіть функцію checkNumber(num), яка перевіряє число:
// Якщо число ділитися на 3 повертати "fizz"
// Якщо ділитися на 5 повертати "buzz"
// Якщо ділитися на 3 і на 5 повернути "fizzbuzz"
// Додайте перевірку, що параметр дійсно є числом (в іншому випадку
// функція має повертати "Not a number")
// В якості дефолтного випадку повернути "Error!"

// function checkNumber(num) {
//     if (typeof num !== "number") {
//         return "Not a number";
//     }
//     if (num % 3 === 0 && num % 5 === 0) {
//         return "fizzbuzz";
//     }
//     if (num % 3 === 0) {
//         return "fizz";
//     }
//     if (num % 5 === 0) {
//         return "buzz";
//     }
//     return "Error!";
// }

// console.log(checkNumber(15));
// console.log(checkNumber(30));
// console.log(checkNumber(3));
// console.log(checkNumber("bgviz"));

// 7. Напишіть функцію, яка перевертатиме рядок у зворотньому порядку

function reverse(string) {
  let reversString = "";
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversString += string[i];
  }
  return reversString;
}
console.log(reverse("text"));

// Home work

// 8. Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз.
// Цикл повинен питати число, доки користувач не
// введе число більше 100, чи не натисне кнопку
// Cancel в prompt
// 9. В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
// 10. Є рядок, який складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є літера 'a'.
// Якщо це так - виведіть в alert 'Yes', в іншому випадку - 'No'.
// 11. При завантаженні сторінки користувачу пропонується
// в prompt ввести число. Ввод додається к значенню
// змінної total.
// Операція вводу числа продовжується до тих пір,
// доки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач закінчив ввод натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сумма введенних чисел дорівнює [число]."
// * Додати перевірку,що користувач ввів саме число,
// а не довільний набір символів.
