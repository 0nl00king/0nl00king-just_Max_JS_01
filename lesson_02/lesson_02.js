/*
1.
Почему код даёт именно такие результаты?
Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 сначала проинкрементили а=1, а после вывели
d = b++; alert(d);           // 1 сначала  вывели b=1, а после проинкрементили
c = (2+ ++a); alert(c);      // 5 2 + инкремент от a=2
d = (2+ b++); alert(d);      // 4 2 + b=2, после вывели,а потом проинкрементили
alert(a);                    // 3 итог предыдуших инкрементаций
alert(b);                    // 3 итог предыдуших инкрементаций

2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); // 5 = 1 + 2*2
*/

/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/
let a = -5;
let b = 10;

if (a > 0 && b > 0) {
    console.log(a - b);
}
if (a < 0 && b < 0) {
    console.log(a * b);
}
if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
    console.log(a + b);
}

/*
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/
a = 7;
switch (a) {
    case 0:
        console.log(a++);
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a);
}

/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/
function sumOfTwoNum(a, b) {
    return a + b;
}

function subOfTwoNum(a, b) {
    return a - b;
}

function mulOfTwoNum(a, b) {
    return a * b;
}

function divOfTwoNum(a, b) {
    return a / b;
}

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
 где arg1, arg2 – значения аргументов, operation – строка с названием операции.
 В зависимости от переданного значения операции выполнить одну из арифметических операций
 (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sumOfTwoNum(arg1, arg2);
        case '-':
            return subOfTwoNum(arg1, arg2);
        case '*':
            return mulOfTwoNum(arg1, arg2);
        case '/':
            return divOfTwoNum(arg1, arg2);
    }
}

let result1 = mathOperation(5, 4, '*');
console.log(`result of mathOperation function = ${result1}`);

/*
7. *Сравнить null и 0. Попробуйте объяснить результат.
    undefined и null равны друг другу и ничему больше (при нестрогом равенстве)

8. *С помощью рекурсии организовать функцию возведения числа в степень.
 Формат: function power(val, pow), где val – заданное число, pow – степень.
 */

function power(val, pow) {
    if (pow === 1) return val;
    return val * power(val, pow - 1);
}

let result2 = power(2, 5);
console.log(`result of power function = ${result2}`);