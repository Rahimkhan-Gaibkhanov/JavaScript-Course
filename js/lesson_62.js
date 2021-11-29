    "use strict";


    // Задача 1

    // Объявите пустой объект, а затем заполните его названиями дней недели в качестве ключей, и порядковыми номерами дней недели в качестве значений.

    let obj = {};

    obj['пн'] = 1;
    obj['вт'] = 2;
    obj['ср'] = 3;
    obj['чт'] = 4;
    obj['пт'] = 5;
    obj['сб'] = 6;
    obj['вс'] = 7;

    console.log(obj);

    // Задача 2

    // Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:

    // let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
    // let arr2 = [1, 2, 3, 4, 5, 6, 7];
    // С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

    let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
    let arr2 = [1, 2, 3, 4, 5, 6, 7];
    let obj1 = {};

    for (let i = 0; i <= 6; i++) {
        obj1[arr1[i]] = arr2[i];
    }

    console.log(obj1);

    // Задача 3

    // Модифицируйте предыдущую задачу так, чтобы ключами стали номера дней, а значениями - их названия.

    let arr3 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
    let arr4 = [1, 2, 3, 4, 5, 6, 7];
    let obj2 = {};

    for (let i1 = 0; i1 <= 6; i1++) {
        obj2[arr4[i1]] = arr3[i1];
    }

    console.log(obj2);

    // Задача 4

    // Дан объект:

    // let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17}; 
    // Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.

    let obj3 = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
    let result = {};

    for (let key in obj3) {
        if (obj3[key] >= 10 && obj3[key] <= 20) {
            result[key] = obj3[key]; 
        }
    }

    console.log(result);

    // Задача 5

    // Дан объект:

    // let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'}; 
    // Запишите в новый объект дни недели, номера которых являются нечетными числами.

    let obj4 = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
    let result1 = {};

    for (let key1 in obj4) {
        if (key1 % 2 != 0) {
            result1[key1] = obj4[key1]; 
        }
    }

    console.log(result1);

    // Задача 6

    // Дан объект:

    // let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
    // Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

    let obj5 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

    for (let elem in obj5) {
        obj5[elem] *= 4;
    }

    console.log(obj5);

    // Задача 7

    // Самостоятельно, не подсматривая в мой код, выполните переворот какого-нибудь объекта.

    let result2 = {};

    for (let key2 in obj5) {
        result2[obj5[key2]] = key2;
    }

    console.log(result2);