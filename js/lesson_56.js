    "use strict";


    // Задача 1

    // Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.

    for (let i = 10; i < 1000; i++) {
        let str = String(i);
        if (str[0] == 5 && str[1] == 5) {
            console.log(i);
        }
    }

    // Задача 2

    // Переберите циклом числа от 1 до 30 и сложите их как строки.

    let result = '';

    for (let j = 1; j <= 30; j++) {
        result += j;
    } 
    console.log(result)