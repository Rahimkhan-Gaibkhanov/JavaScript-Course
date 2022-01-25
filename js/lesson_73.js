    'use strict';

    //Задача 1

    // Дан следующий объект:

    // let obj = {
    //     key1: {
    //         key1: 1,
    //         key2: 2,
    //         key3: 3,
    //     },
    //     key2: {
    //         key1: 4,
    //         key2: 5,
    //         key3: 6,
    //     },
    //     key3: {
    //         key1: 7,
    //         key2: 8,
    //         key3: 9,
    //     },
    // }
    // Найдите сумму элементов приведенного объекта.

    let obj = {
        key1: {
            key1: 1,
            key2: 2,
            key3: 3,
        },
        key2: {
            key1: 4,
            key2: 5,
            key3: 6,
        },
        key3: {
            key1: 7,
            key2: 8,
            key3: 9,
        },
    }

    let result = 0;

    for (let i = 1; i <= Object.keys(obj).length; i++) {
        for (let j = 1; j <= Object.keys(obj).length; j++) {
            result += obj['key' + i]['key' + j]
        }
    }

    console.log(result);

    // Задача 2

    // Дан следующий объект:

    // let obj = {
    //     1: {
    //         1: 'a1',
    //         2: 'a2',
    //         3: 'a3',
    //     },
    //     2: {
    //         1: 'b1',
    //         2: 'b2',
    //         3: 'b3',
    //     },
    //     3: {
    //         1: 'c1',
    //         2: 'c2',
    //         3: 'c3',
    //     },
    // }
    // Выведите на экран элемент 'b2' и элемент 'c1'.

    let obj1 = {
        1: {
            1: 'a1',
            2: 'a2',
            3: 'a3',
        },
        2: {
            1: 'b1',
            2: 'b2',
            3: 'b3',
        },
        3: {
            1: 'c1',
            2: 'c2',
            3: 'c3',
        },
    }

    console.log(obj1[2][2] + ' ' + obj1[3][1]);

    // Задача 3

    // Дан следующий объект:

    // let obj = {
    //     key1: {
    //         a: 1, b: 2, c: {
    //             d: 3,
    //             e: 4,
    //         }, f: 5,
    //     },
    //     key2: {
    //         g: 6, h: 7,
    //     },
    // }
    // Найдите сумму всех элементов-чисел.

    let obj2 = {
        key1: {
            a: 1, b: 2, c: {
                d: 3,
                e: 4,
            }, f: 5,
        },
        key2: {
            g: 6, h: 7,
        },
    }

    console.log(obj2.key1.a + obj2.key1.b + obj2.key1.c.d + obj2.key1.c.e + obj2.key1.f + obj2.key2.g + obj2.key2.h);