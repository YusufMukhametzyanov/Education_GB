//============HOME WORK=============

/* 
Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3. */

// let num1 = prompt("Enter number 1");
// let num2 = prompt("Enter number 2");

// alert(num1 <= 1 ? `Число ${num1} <= 1` : `Число ${num1} > 1`);
// alert(num2 >= 3 ? `Число ${num2} >= 3` : `Число ${num2} < 3`);

/* Задание 2
Перепишите код к тернарному оператору

let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
} */
// let test = true;
// console.log(test === true ? "+++" : "---");

/* 
Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью). */

// let day = prompt("Enter a number from 1 to 31");

// if ((day >= 1) & (day <= 10)) {
//   console.log("The first dacade of the month");
// } else if ((day > 10) & (day <= 20)) {
//   console.log("The second dacade of the month");
// } else if ((day > 20) & (day <= 31)) {
//   console.log("The third dacade of the month");
// }
/* 
Задание 4
Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
(Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц. */

// let numUser = prompt("Enter number");

// console.log(
//   `В числе ${numUser} количество сотен: ${Math.trunc(
//     (numUser % 1000) / 100
//   )}, десятков: ${Math.trunc((numUser % 100) / 10)}, единиц: ${numUser % 10}`
// );
