
    'use strict';

    // // Задача 1

    // // Дана строка 'js'. Сделайте из нее строку 'JS'.

    // console.log('js'.toUpperCase());

    // // Задача 2

    // // Дана строка 'JS'. Сделайте из нее строку 'js'.

    // console.log('JS'.toLowerCase());

    // // Задача 3

    // // Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

    // let str = 'я учу javascript!';
    // let str1 = 'я учу javascript!';
    // let str2 = 'я учу javascript!';
    
    // console.log(str.substr(2, 3), str.substr(6, 10));
    // console.log(str1.substring(2, 5), str1.substring(6, 16));
    // console.log(str2.slice(2, 5), str2.slice(6, 16));

    // // Задача 4

    // // Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.

    // let str3 = 'abcde';
    // console.log(str3.indexOf('c'));

    // // Задача 5

    // // Дана строка. Проверьте, есть ли в этой строке символ 'a'.

    // let str4 = 'strong';
    // console.log(str4.indexOf('a'));

    // // Задача 6

    // // Дана строка. Проверьте, начинается ли эта строка с символа 'a'.

    // let str5 = 'strong';
    // let str6 = str5[0];
    // console.log(str6.indexOf('a'));

    // // Задача 7

    // // Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.

    // let str7 = 'stronga';
    // let str8 = str7[str7.length - 1];
    // console.log(str8.lastIndexOf('a'));

    // // Задача 8

    // // Дана строка. Проверьте, начинается ли эта строка на 'http://'.

    // let str9 = 'http://.google.com';
    // let str10 = '';

    // for (let i = 0; i <= 6; i++ ) {
    //     str10 += str9[i];
    // }

    // let str11 = '';
    // let str12 = 'http://';

    // for (let i1 = 0; i1 <= 6; i1++ ) {
    //     str11 += str12[i1];
    // }

    // if (str10 == str11) {
    //     console.log('Эта строка начинается на http://')
    // }
    // else {
    //     console.log('Эта строка не начинается на http://')
    // }

    // // Задача 9

    // // Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

    // // Задача 10

    // // Дана строка. Проверьте, начинается ли эта строка на 'http://'.

    // let str13 = 'http://google.com';

    // console.log(str13.startsWith('http://'));

    // // Задача 11

    // // Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

    // let str14 = 'index.html';

    // console.log(str14.endsWith('.html'));

    // // Задача 12

    // // Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

    // let str15 = '1-2-3-4-5';
    // let arr15 = str15.split('-');

    // console.log(arr15);

    // // Задача 13

    // // Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

    // let str16 = '12345';
    // let arr16 = str16.split('');

    // console.log(arr16);



    /////////

    //     Задача 1

    // Дана строка 'js'. Сделайте из нее строку 'JS'.
    let str1 = 'js';

    console.log(str1.toUpperCase());

    // Задача 2

    // Дана строка 'JS'. Сделайте из нее строку 'js'
    let str2 = 'JS';

    console.log(str2.toLowerCase());

    // Задача 3

    // Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

    let str3 = 'я учу javascript!';

    console.log(str3.substr(2, 3), str3.substr(6, 10));
    console.log(str3.substring(2, 5), str3.substring(6, 16));
    console.log(str3.slice(2, 5), str3.slice(6, 16));

    // Задача 4

    // Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.
    let str4 = 'abcde';

    console.log(str4.indexOf('c'));

    // Задача 5

    // Дана строка. Проверьте, есть ли в этой строке символ 'a'.

    let str5 = 'Roma';

    if (str5.indexOf('a') != -1) {
        console.log('Есть');
    } else {
        console.log('Нету');
    }

    // Задача 6

    // Дана строка. Проверьте, начинается ли эта строка с символа 'a'.

    let str6 = 'abcde';
    let str7 = str6.slice(0, 1);

    if (str7 == 'a') {
        console.log('начинается строка с символа a');
    } else {
        console.log('не начинается строка с символа a');
    }

    // Задача 7

    // Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.

    let str8 = 'bcdea';
    let str9 = str8.slice(-1);

    if (str9 == 'a') {
        console.log('заканчивается строка с символа a');
    } else {
        console.log('не заканчивается строка с символа a');
    }

    // Задача 8

    // Дана строка. Проверьте, начинается ли эта строка на 'http://'.

    let str10 = 'http://google.com';
    let str11 = str10.slice(0, 7);

    if (str11 == 'http://') {
        console.log('начинается эта строка на http://');
    } else {
        console.log('не начинается эта строка на http://');
    }

    // Задача 9

    // Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

    let str12 = 'index.html';
    let str13 = str12.slice(-5);

    if (str13 == '.html') {
        console.log('заканчивается эта строка на .html');
    } else {
        console.log('не заканчивается эта строка на .html');
    }

    //Задача 10

    // Дана строка. Проверьте, начинается ли эта строка на 'http://'.

    console.log('http://google.com'.startsWith('http://'));

    // Задача 11

    // Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

    console.log('index.html'.endsWith('.html'));

    // Задача 12

    // Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

    let str14 = '1-2-3-4-5';
    let arr14 = str14.split('-');

    console.log(arr14);

    // Задача 13

    // Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

    let str15 = '12345';
    let arr15 = str15.split('');

    console.log(arr15);

    // Задача 14

    // Дан следующий массив:

    // let arr = [1, 2, 3, 4, 5];
    // С помощью метода join слейте его в строку '1-2-3-4-5'.

    let arr16 = [1, 2, 3, 4, 5];
    let str16 = arr16.join('-');

    console.log(str16);