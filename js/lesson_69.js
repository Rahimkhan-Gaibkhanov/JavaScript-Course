    "use strict";


    // Задача 1

    // Выведите с помощью цикла столбец чисел от 1 до 100.

    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }

    // Задача 2

    // Выведите с помощью цикла столбец чисел от 100 до 1.

    for (let i1 = 100; i1 >= 1; i1--) {
        console.log(i1);
    }

    // Задача 3

    // Выведите с помощью цикла столбец четных чисел от 1 до 100.

    for (let i2 = 2; i2 <= 100; i2 += 2) {
        console.log(i2);
    }

    // Задача 4

    // Заполните массив 10-ю иксами с помощью цикла.

    let arr = [];

    for (let i3 = 0; i3 < 10; i3++) {
        arr.push('x');
    }

    console.log(arr);

    // Задача 5

    // Заполните массив числами от 1 до 10 с помощью цикла.

    let arr1 = [];

    for (let i4 = 1; i4 <= 10; i4++) {
        arr1.push(i4);
    }

    console.log(arr1);

    // Задача 6

    // Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

    let arr2 = [3, 4, 65, 32, 1, 53, 23, 9, 10, 7, 4, 6, 98];

    for (let i6 = 0; i6 < arr2.length; i6++) {
        if (arr2[i6] > 0 && arr2[i6] < 10) {
            console.log(arr2[i6]);
        }
    }

    // Задача 7

    // Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.

    let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i7 = 0; i7 < arr3.length; i7++) {
        if (arr3[i7] == 5) {
            console.log('В массиве есть элемент со значением. ' + arr3[i7]);
        }
    }

    // Задача 8

    // Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

    let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let num = 0;

    for (let i8 = 0; i8 < arr4.length; i8++) {
        num += arr4[i8];
    }

    console.log(num);

    // Задача 9

    // Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

     let arr5 = [1, 2, 3, 4];

     for (let i9 = 0; i9 < arr5.length; i9++) {
         let result = 0;
         result += arr5[i9] * 4;
         console.log(result);
     }

     // Задача 10

    // Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

    let arr6 = [1, 2, 3, 4, 5];
    let result1 = 0;

     for (let i10 = 0; i10 < arr6.length; i10++) {
        result1 += arr6[i10];
     }

     console.log(result1 / arr6.length);
