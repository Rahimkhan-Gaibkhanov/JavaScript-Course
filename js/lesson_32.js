    "use strict";

    // Комбинации конструкций if-else в JavaScript

    // Задача 1

    // В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

    let day = 13;

    if (day >= 1 && day <= 10) {
    console.log('Первая декада');
    }

    if (day >= 11 && day <= 20) {
    console.log('Вторая декада');
    }

    if (day >= 21 && day <= 31) {
    console.log('Третья декада');
    }

    // Задача 2

    // Решите предыдущую задачу на декады месяца через конструкцию else if

    let today = 28;

    if (today >= 1 && today <= 10) {
    console.log('Первая декада');
    } else if (today >= 11 && today <= 20) {
    console.log('Вторая декада');
    } else if (today >= 21 && today <= 31) {
    console.log('Третья декада');
    }


    // Задача 3

    // Модифицируйте предыдущую задачу так, чтобы, если в переменной day будет не число от 1 до 31, выдавалось сообщение об ошибке.

    let today1 = 32;

    if (today1 >= 1 && today1 <= 10) {
    console.log('Первая декада');
    } else if (today1 >= 11 && today1<= 20) {
    console.log('Вторая декада');
    } else if (today1 >= 21 && today1 <= 31) {
    console.log('Третья декада');
    } else {
    console.log('неверное значение переменной num');
    }

    // Задача 4

    // Пусть в переменной num хранится число. Если это число меньше 10 или больше 99, то выведите на экран сообщение об этом. Если же число попадает в указанный диапазон, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите на экран сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двузначна.

    let num = String(26);
    let num1;

    if (num >= 10 && num <= 99) {
        if (num1 = Number(num[0]) + Number(num[1])) {
            if (num1 <= 9) {
                console.log('сумма цифр однозначна');
            } else {
                console.log('сумма цифр двузначна');
            }
        }
    } else {
        console.log('это число меньше 10 или больше 99');
    }