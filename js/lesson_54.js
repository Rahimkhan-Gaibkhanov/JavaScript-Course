    "use strict";


    // Задача 1

    // Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.

    let num = 23;
    let nu = 1;

    while (num < 1000) {
        num *= 3;
        console.log(nu++);
        if (num > 1000) {
            console.log(num);
            break;
        }
    } 

    // Задача 2

    // Решите предыдущую задачу через цикл for.

    for (var num1 = 23, i = 1; num1 < 1000; num1 *= 3, i++) console.log(i);
    console.log(num1);
