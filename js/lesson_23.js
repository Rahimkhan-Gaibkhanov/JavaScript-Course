    'use strict';

    // Задача 1

    // Скажите, что выведется в консоль в результате выполнения следующего кода:
    
    // let obj = {a: 1, b: 2, c: 3, d: 
    //     4, e: 5}; 
    // delete obj.e;
    // console.log('e' in obj);

    // выведит 4 елемента а 5 удалится и так как 5 того тену выведит false

    let obj = {a: 1, b: 2, c: 3, d: 
        4, e: 5}; 
    delete obj.e;
    console.log('e' in obj);

    // Задача 2

    // Дан массив:
    
    // let arr = ['a', 'b', 'c', 'd', 'e'];
    // Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

    let arr = ['a', 'b', 'c', 'd', 'e'];
    delete arr[3];
    delete arr[4];

    console.log(arr.length);