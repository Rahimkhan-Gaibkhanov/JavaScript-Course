    "use strict";

    // Задача 1

    // Дан следующий массив:

    // let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; 
    // Подсчитайте количество цифр 3 в этом массиве.

    let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

    let result = 0;

    for (let elem of arr) {
        if (elem == 3) {
            result++
        }
    }

    console.log(result);

    // Задача 2

    // Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.

    let arr1 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

    let result1 = 0;
    let result2 = 0;

    for (let elem1 of arr1) {
        if (elem1 == 3) {
            result1++
        }
        if (elem1 == 2) {
            result2++
        }
    }

    console.log(result1);
    console.log(result2);

    // Задача 3

    // Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.

    let str = 'abacbcacdecabde';
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = str[Number(i)]++;
       // console.log(obj[0]++);
    }
    console.log(obj);

