    "use strict";


    // Задача 1

    // Объявите пустой массив, а затем заполните его числами от 1 до 10. Используйте для этого метод push.

    let arr = [];

    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.push(4);
    arr.push(5);
    arr.push(6);
    arr.push(7);
    arr.push(8);
    arr.push(9);
    arr.push(10);

    console.log(arr);

    // Задача 2

    // Используя цикл и метод push заполните массив числами от 1 до 10.

    let arr1 = [];

    for (let i = 1; i <= 10; i++) {
        arr1.push(i);
    }
    console.log(arr1);

    // Задача 3

    // Используя цикл и метод push заполните массив 10-ю буквами 'x'.

    let arr2 = [];

    for (let j = 1; j <= 10; j++) {
        arr2.push('x') ;
    }
    console.log(arr2);

    // Задача 4

    // Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.

    let arr3 = [-1, -2, -3, 0, 1, 6, -6, -5, 3, 4, -10];
    let arr4 = [];

    for (let elem of arr3) {
        if (elem >= 0) {
            arr4.push(elem);
        }
    }
    console.log(arr4);

    // Задача 5

    // Дан следующий массив:

    // let arr = ['a', 'b', 'c', 'd', 'e'];
    // Описанным способом сделайте из него массив:

    // let arr = ['e', 'd', 'c', 'b', 'a'];

    let arr5 = ['a', 'b', 'c', 'd', 'e'];
    let arr6 = [];

    for (let k = arr5.length - 1; k >= 0; k--) {
        arr6.push(arr5[k]);
    }
    console.log(arr5);
    console.log(arr6);

    // Задача 6

    // Автор следующего кода хотел создать массив вида ['a', 'b', 'c']:

    // arr.push('a');
    // arr.push('b');
    // arr.push('c');
    // Написанный код, однако, выдает ошибку в консоль. Исправьте ошибку автора.

    let arr7 = [];

    arr7.push('a');
    arr7.push('b');
    arr7.push('c');

    console.log(arr7);

    // Задача 7js.Pm.Lp.APF

    // Автор следующего кода хотел создать заполнить массив числами от 1 до 5:

    // for (let i = 1; i <= 5; i++) {
    //     arr.push(i);
    // }

    // console.log(arr);
    // Написанный код, однако, выдает ошибку в консоль. Исправьте ошибку автора.

    let arr8 = [];

    for (let i1 = 1; i1 <= 5; i1++) {
    arr8.push(i1);
    }

    console.log(arr8);

    // Задача 8js.Pm.Lp.APF

    // Автор следующего кода хотел записать в новый массив только нечетные элементы старого массива:

    // let arr = [1, 2, 3, 4, 5, 6, 7, 
    //     8, 9]; 

    // for (let elem of arr) {
    //     if (elem % 2 != 0) {
    //         result.push(elem);
    //     }
    // }

    // console.log(result);
    // Написанный код, однако, выдает ошибку в консоль. Исправьте ошибку автора.

    let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [];
    
    for (let elem1 of arr9) {
        if (elem1 % 2 != 0) {
            result.push(elem1);
        }
    }
    
    console.log(result);