/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
let n = 100;

nextPlease:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPlease;
        }
        console.log(i);
    }
/*
2. С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
    a) Организовать такой массив для хранения товаров в корзине;
    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
let basketArr = [['orange', 150], ['tomato', 190], ['potato', 60]];

function countBasketPrice(basketArr) {
    const idx = 1;
    let result = 0;
    for (const val of basketArr) {
        result += val[idx];
    }
    return result;
}

let result1 = countBasketPrice(basketArr);
console.log(`result of countBasketPrice function = ${result1}`);

/*
3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
 Выглядеть это должно так:
    for(…){// здесь пусто}
*/
for (let i = -1; i < 9; i++, console.log(i)) {
}

/*
4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
 только у вашей пирамиды должно быть 20 рядов, а не 5:
    x
    xx
    xxx
    xxxx
    xxxxx
*/
const baseArr = [
    'x',
    'xx',
    'xxx',
    'xxxx',
    'xxxxx',
    'xxxxxx',
    'xxxxxxx',
    'xxxxxxxx',
    'xxxxxxxxx',
    'xxxxxxxxxx',
    'xxxxxxxxxxx',
    'xxxxxxxxxxxx',
    'xxxxxxxxxxxxx',
    'xxxxxxxxxxxxxx',
    'xxxxxxxxxxxxxxx',
    'xxxxxxxxxxxxxxxx',
    'xxxxxxxxxxxxxxxxx',
    'xxxxxxxxxxxxxxxxxx',
    'xxxxxxxxxxxxxxxxxxx',
    'xxxxxxxxxxxxxxxxxxxx'];

for (let i = -1; i < baseArr.length - 1; i++, console.log(`${baseArr[i]}`)) {
}
