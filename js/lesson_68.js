    "use strict";


    // Задача 1

    // С помощью цикла сформируйте следующий массив:

    // ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 
    //     'xxxxxxxxxx'] 

    let arr = [];
    let str = '';

    for (let i = 0; i < 5; i++) {
        str += 'xx';
        arr.push(str);
    }
    console.log(arr);

    // Задача 2

    // С помощью цикла сформируйте следующий массив:

    // ['11111', '22222', '33333', '44444', 
    //     '55555'] 

    let arr1 = [];

    for (let i1 = 1; i1 <= 5; i1++) {
        let str1 = '';
        for (let j = 0; j < 5; j++) {
            str1 += i1;
        }
        arr1.push(str1);
    }

    console.log(arr1);