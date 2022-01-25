    'use strict';

    // Задача 1

    // Возведите 2 в 10 степень.

    console.log(Math.pow(2, 10));

    // Задача 2

    // Найдите квадратный корень из 245.

    console.log(Math.sqrt(245));

    // Задача 3

    // Дан следующий массив:

    // [4, 2, 5, 19, 13, 0, 10]
    // Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

    let arr = [4, 2, 5, 19, 13, 0, 10];
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    console.log(Math.sqrt(result));

    // Задача 4

    // Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

    let result1 = Math.sqrt(379);
    console.log(result1);

    console.log(Math.round(result1));
    console.log(Math.round(Math.sqrt(379)));

    // Задача 5

    // Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

    let obj = {'floor': 0, 'ceil': 0};

    obj.floor = Math.floor(Math.sqrt(587));
    obj.ceil = Math.ceil(Math.sqrt(587));

    console.log(Math.sqrt(587));
    console.log(obj.floor + ' Small', obj.ceil + ' Big');

    // Задача 6

    // Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

    console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
    console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

    console.log(Math.random());

    // Задача 7

    // Выведите на экран случайное целое число от 1 до 100.

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    console.log(getRandomInt(1, 100));

    // Задача 8js

    // С помощью цикла заполните массив 10-ю случайными целыми числами.

    function getRandomInt1(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let arr1 = [];

    for (let i = 0; i <= 10; i++) {
        arr1[i] = getRandomInt1(1, 100);
    }

    console.log(arr1);

    // Задача 9

    // Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

    let a = -78;
    let b = -66537;

    console.log(Math.abs(a), Math.abs(b));
