    "use strict";

    // Задача 1

    // Дана строка 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

    let str = 'abcde';

    console.log(str[0]);
    console.log(str[2]);
    console.log(str[str.length - 1]);

    // Задача 2

    // Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.

    let str1 = 'abcde';
    let str2 = str1[str1.length - 1] + str1[3] + str1[2] + str1[1] + str1[0];

    console.log(str2);

    // Задача 3

    // Дана переменная str со строкой 'abcde' и переменная num с номером символа. Выведите на экран символ, номер которого хранится в переменной num.

    let str3 = 'abcde';
    let num = 3;

    console.log(str3[num]);

    // Задача 4

    // Дана строка. Выведите на экран ее последний символ.

    let str4 = 'JavaScript';
    let a = str4.length - 1;

    console.log(str4[a]);

    // Задача 5

    // Дана строка. Выведите на экран ее предпоследний символ.

    let str5 = 'JavaScript';
    let b = str5.length - 2;

    console.log(str5[b]);

    // Задача 6

    // Дана строка. Выведите на экран ее предпредпоследний символ.

    let str6 = 'JavaScript';
    let c = str6.length - 3;

    console.log(str6[c]);

    // Задача 7

    // Дана строка '12345'. Найдите сумму цифр этой строки.

    let str7 = '12345';

    console.log(Number(str7[0]) + Number(str7[1]) + Number(str7[2]) + Number(str7[3]) + Number(str7[4]));

    // Задача 8

    // Дано число 12345. Найдите сумму цифр этого числа.

    let str8 = String(12345);

    console.log(Number(str8[0]) + Number(str8[1]) + Number(str8[2]) + Number(str8[3]) + Number(str8[4]));

    // Задача 9

    // Дано число 12345. Найдите произведение цифр этого числа.

    let str9 = String(12345);

    console.log(str9[0] * str9[1] * str9[2] * str9[3] * str9[4]);

    // Задача 10

    // Дано число 12345. Переставьте цифры этого числа в обратном порядке.

    let str10 = String(12345);

    console.log(str10[4] + str10[3] + str10[2] + str10[1] + str10[0]);


