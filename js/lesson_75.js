
    'use strict';

    // Задача 1

    // Дан следующий объект с названиями месяцев:

    // let months = {
    //     'ru': [
    //         'январь',
    //         'февраль',
    //         'март',
    //         'апрель',
    //         'май',
    //         'июнь',
    //         'июль',
    //         'август',
    //         'сентябрь',
    //         'октябрь',
    //         'ноябрь',
    //         'декабрь',
    //     ],
    //     'en': [
    //         'january',
    //         'february',
    //         'march',
    //         'april',
    //         'may',
    //         'june',
    //         'july',
    //         'august',
    //         'september',
    //         'october',
    //         'november',
    //         'december',
    //     ],
    // };
    // Даны также следующие переменные:

    // let lang = 'ru'; // может быть или 'ru' или 'en' 
    // let month = 5;   // число от 0 до 11
    // Выведите на экран название месяца, соответствующее значениям переменных lang и month.


    let months = {
        'ru': [
            'январь',
            'февраль',
            'март',
            'апрель',
            'май',
            'июнь',
            'июль',
            'август',
            'сентябрь',
            'октябрь',
            'ноябрь',
            'декабрь',
        ],
        'en': [
            'january',
            'february',
            'march',
            'april',
            'may',
            'june',
            'july',
            'august',
            'september',
            'october',
            'november',
            'december',
        ],
    };

    let lang = 'en';
    let month = 0;

    console.log(months[lang][month]);

    // Задача 2

    // Дана вот такая структура для хранения списка дел за года, месяцы и дни:

    // let affairs = {
    //     '2018': {
    //         11: {
    //             29: ['дело111', 'дело112', 'дело113'],
    //             30: ['дело121', 'дело122', 'дело123'],
    //         },
    //         12: {
    //             30: ['дело211', 'дело212', 'дело213'],
    //             31: ['дело221', 'дело222', 'дело223'],
    //         },
    //     },
    //     '2019': {
    //         12: {
    //             29: ['дело311', 'дело312', 'дело313'],
    //             30: ['дело321', 'дело322', 'дело323'],
    //             31: ['дело331', 'дело332', 'дело333'],
    //         }
    //     },
    // }
    // Пусть даны также 3 переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.

    let affairs = {
        '2018': {
            11: {
                29: ['дело111', 'дело112', 'дело113'],
                30: ['дело121', 'дело122', 'дело123'],
            },
            12: {
                30: ['дело211', 'дело212', 'дело213'],
                31: ['дело221', 'дело222', 'дело223'],
            },
        },
        '2019': {
            12: {
                29: ['дело311', 'дело312', 'дело313'],
                30: ['дело321', 'дело322', 'дело323'],
                31: ['дело331', 'дело332', 'дело333'],
            }
        },
    }

    let year = 2019;
    let month1 = 12;
    let day = 31;

    console.log(affairs[year][month1][day]);

    // Задача 3

    // Автор следующего кода хотел вывести элемент со значением '24':

    // let obj = {
    //     key1: {
    //         key2: '12',
    //         key3: '13',
    //     },
    //     key2: {
    //         key4: '24',
    //         key5: '25',
    //     },
    // }

    // let key1 = 'key2';
    // let key2 = 'key4';
    // console.log(obj['key1'][key2]);
    // Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

    let obj = {
        key1: {
            key2: '12',
            key3: '13',
        },
        key2: {
            key4: '24',
            key5: '25',
        },
    }
    
    let key1 = 'key2';
    let key2 = 'key4';
    console.log(obj[key1][key2]);

    // Задача 4

    // Автор следующего кода хотел вывести элемент со значением '24':

    // let obj = {
    //     key1: {
    //         key2: '12',
    //         key3: '13',
    //     },
    //     key2: {
    //         key4: '24',
    //         key5: '25',
    //     },
    // }

    // let key1 = 'key2';
    // let key2 = 'key4';
    // console.log(obj.key1.key2);
    // Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

    let obj1 = {
        keyy1: {
            keyy2: '12',
            keyy3: '13',
        },
        keyy2: {
            keyy4: '24',
            keyy5: '25',
        },
    }

    let keyy1 = 'keyy2';
    let keyy2 = 'keyy4';
    console.log(obj1[keyy1][keyy2]);

    // Задача 5

    // Автор следующего кода хотел вывести элемент со значением '24':

    // let obj = {
    //     key1: {
    //         key2: '12',
    //         key3: '13',
    //     },
    //     key2: {
    //         key4: '24',
    //         key5: '25',
    //     },
    // }

    // let key1 = 'key2';
    // let key2 = 'key4';
    // console.log(obj.key1['key2']);
    // Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

    let obj2 = {
        keyyy1: {
            keyyy2: '12',
            keyyy3: '13',
        },
        keyyy2: {
            keyyy4: '24',
            keyyy5: '25',
        },
    }

    let keyyy1 = 'keyyy2';
    let keyyy2 = 'keyyy4';

    console.log(obj2[keyyy1][keyyy2]);

    // Задача 6

    // Автор следующего кода хотел вывести элемент со значением '24':

    // let obj = {
    //     key1: {
    //         key2: '12',
    //         key3: '13',
    //     },
    //     key2: {
    //         key4: '24',
    //         key5: '25',
    //     },
    // }

    // let key1 = 'key2';
    // console.log(obj['key1']['key4']);
    // Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

    let obj3 = {
        keyyyy1: {
            keyyyy2: '12',
            keyyyy3: '13',
        },
        keyyyy2: {
            keyyyy4: '24',
            keyyyy5: '25',
        },
    }
    
    let keyyyy1 = 'keyyyy2';

    console.log(obj3[keyyyy1]['keyyyy4']);
