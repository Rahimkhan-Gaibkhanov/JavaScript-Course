    "use strict";

    // Задача 1

    // В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

    let month = 11;

    if (month >= 1 && month <= 3) {
        console.log('Spring');
    }
    if (month >= 4 && month <= 6) {
        console.log('Summer');
    }
    if (month >= 7 && month <= 9) {
        console.log('Autumn');
    }
    if (month >= 10 && month <= 12) {
        console.log('Winter');
    }

    // Задача 2

    // Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

    let str = 'abcde';

    if (str[0] == 'a') {
        console.log('Да');
    } else {
        console.log('Нет');
    }

    // Задача 3

    // Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

    let num = 12345;
    let num1 = String(num);

    if (num1[0] == 1 || num1[0] == 2 || num1[0] == 3) {
        console.log('Да');
    } else {
        console.log('Нет');
    }

    // Задача 4

    // Дано трехзначное число. Найдите сумму цифр этого числа.

    let num2 = 475;
    let num3 = String(num2);

    console.log(Number(num3[0]) + Number(num3[1]) + Number(num3[2]));

    // Задача 5

    // Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

    let num4 = 376376;
    let num5 = String(num4);
    let num6 = Number(num5[0]) + Number(num5[1]) + Number(num5[2]);
    let num7 = Number(num5[3]) + Number(num5[4]) + Number(num5[5]);

    if (num6 == num7) {
        console.log('Да');
    } else {
        console.log('Нет');
    }