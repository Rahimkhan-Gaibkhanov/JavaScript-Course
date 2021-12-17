    "use strict";


    // Задача 1

    // Дан двухмерный массив с числами:

    // let arr = [[1, 2, 3], [4, 5], [6]];
    // С помощью вложенных циклов найдите сумму элементов этого массива.

    let arr = [[1, 2, 3], [4, 5], [6]];
    let result = 0;

    for (let elem of arr) {
        for (let subElem of elem) {
            result += subElem;
        }
    }
    console.log(result);

    // Задача 2

    // Дан трехмерный массив с числами:

    // let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]; 
    // С помощью вложенных циклов найдите сумму элементов этого массива.

    let arr1 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    let result1 = 0;

    for (let elem1 of arr1) {
        for (let subElem1 of elem1) {
            for (let subSubElem1 of subElem1) {
                result1 += subSubElem1;
            }
        }
    }
    console.log(result1);

    // Задача 3

    // Решите предыдущие две задачи через цикл for.

    let arr2 = [[1, 2, 3], [4, 5], [6]];
    let result2 = 0;

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2[i].length; j++) {
            result2 += arr2[i][j];
        }
    }
    console.log(result2);

    let arr3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    let result3 = 0;

    for (let i1 = 0; i1 < arr3.length; i1++) {
        for (let j1 = 0; j1 < arr3[i1].length; j1++) {
            for (let k = 0; k < arr3[j1].length; k++) {
                result3 += arr3[i1][j1][k];
            }
        }
    }
    console.log(result3);
