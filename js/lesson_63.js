    "use strict";


    // Задача 1

    // Дан следующий объект с работниками и их зарплатами:

    // let obj = {
    //     employee1: 100,
    //     employee2: 200,
    //     employee3: 300,
    //     employee4: 400,
    //     employee5: 500,
    //     employee6: 600,
    //     employee7: 700,
    // };
    // Увеличьте зарплату каждого работника на 10%.


    let obj = {
        employee1: 100,
        employee2: 200,
        employee3: 300,
        employee4: 400,
        employee5: 500,
        employee6: 600,
        employee7: 700,
    };

    for (let key in obj) {
        obj[key] += obj[key] / 10;
    }

    console.log(obj);

    // Задача 2

    // Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

    let obj1 = {
        employee1: 100,
        employee2: 200,
        employee3: 300,
        employee4: 400,
        employee5: 500,
        employee6: 600,
        employee7: 700,
    };

    for (let key1 in obj1) {
        if (obj1[key1] <= 400) {
        obj1[key1] += obj1[key1] / 10;
        }
    }

    console.log(obj1);

    // Задача 3

    // Даны следующие массивы:

    // let arr1 = [1, 2, 3, 4, 5];
    // let arr2 = [6, 7, 8, 9, 10];
    // С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10];

    let obj2 = {};

    for (let key2 in arr1) {
        obj2[arr1[key2]] = arr2[key2];
    }

    console.log(obj2);

    // Задача 4

    // Дан следующий объект:

    // let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10}; 
    // Найдите сумму ключей этого объекта и поделите ее на сумму значений.

    let obj3 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
    let result = 0;
    let result1 = 0;

    for (let key3 in obj3) {
        result += Number(key3);
        result1 += obj3[key3];
    }

    console.log(result / result1);

    // Задача 5

    // Дан следующий объект:

    // let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
    // Запишите ключи этого объекта в один массив, а значения - в другой.

    let obj4 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
    let arr3 = [];
    let arr4 = [];

    
    for (let key4 in obj4) {
    arr3.push(key4);
    arr4.push(obj4[key4]);
    }
    
    console.log(arr3);
    console.log(arr4);


    // Задача 6

    // Дан следующий объект:

    // let obj = {
    //     1: 125,
    //     2: 225,
    //     3: 128,
    //     4: 356,
    //     5: 145,
    //     6: 281,
    //     7: 452,
    // };
    // Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:

    // let arr = [
    //     125,
    //     225,
    //     128,
    //     145,
    //     281,
    // ];

        let obj5 = {
        1: 125,
        2: 225,
        3: 128,
        4: 356,
        5: 145,
        6: 281,
        7: 452,
    };

    let arr5 = [];

    for (let key5 in obj5) {
        if (obj5[key5] >= 100 && obj5[key5] <= 299) {
            arr5.push(obj5[key5])
        }
    }

    console.log(arr5);

    let obj6 = {
        1: 125,
        2: 225,
        3: 128,
        4: 356,
        5: 145,
        6: 281,
        7: 452,
    };

    let arr6 = [];
    
    for (let key6 in obj6) {
    let number = String(obj6[key6]);
        if (number[0] == 1 || number[0] == 2) {
            arr6.push(obj6[key6])
        }
    }
    
    console.log(arr6);

    // Задача 7

    // Дан следующий массив:

    // let arr = ['a', 'b', 'c', 'd', 'e'];
    // Создайте из этого массива следующий объект:

    // let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

    let arr7 = ['a', 'b', 'c', 'd', 'e'];
    let obj7 = {};

    for (let i = 0; i < arr7.length; i++) {
        let key = i + 1;
        obj7[key] = arr7[i];
    }

    console.log(obj7);

    // Задача 8

    // Дан следующий массив:

    // let arr = ['a', 'b', 'c', 'd', 'e'];
    // Создайте из этого массива следующий объект:

    // let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

    let arr8 = ['a', 'b', 'c', 'd', 'e'];
    let obj8 = {};

    for (let i8 = 0; i8 < arr8.length; i8++) {
        let key8 = arr8[i8];
        let key9 = i8 + 1;
        obj8[key8] = key9;
    }

    console.log(obj8);
