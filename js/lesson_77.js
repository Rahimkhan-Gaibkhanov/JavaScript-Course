    'use strict';

    // Задача 1

    // Дан следующий массив работников:

    // let employees = [
    //     {
    //         name: 'name1',
    //         salary: 300,
    //     },
    //     {
    //         name: 'name2',
    //         salary: 400,
    //     },
    //     {
    //         name: 'name3',
    //         salary: 500,
    //     },
    // ];
    // Выведите на экран данные каждого работника в формате имя - зарплата.

    let employees = [
        {
            name: 'name1',
            salary: 300,
        },
        {
            name: 'name2',
            salary: 400,
        },
        {
            name: 'name3',
            salary: 500,
        },
    ];

    for (let robotsAndSalary of employees) {
        document.write(robotsAndSalary.name + ' ' + robotsAndSalary.salary + '<br>');
    }

    // Задача 2

    // Дан следующий массив работников:

    //     let employees = [
    //         {
    //             name: 'name1',
    //             salary: 300,
    //         },
    //         {
    //             name: 'name2',
    //             salary: 400,
    //         },
    //         {
    //             name: 'name3',
    //             salary: 500,
    //         },
    //     ];
    // Выведите на экран сумму зарплат всех работников.


    let employees1 = [
        {
            name1: 'name1',
            salary1: 300,
        },
        {
            name1: 'name2',
            salary1: 400,
        },
        {
            name1: 'name3',
            salary1: 500,
        },
    ];

    let sum = 0;

    for (let amountOfSalaries of employees1) {
        sum += amountOfSalaries.salary1;
    }

    document.write(sum + '<br>');

    // Задача 3

    // Дан следующий массив работников:

    // let employees = [
    //     {
    //         name: 'name1',
    //         salary: 300,
    //         age: 28,
    //     },
    //     {
    //         name: 'name2',
    //         salary: 400,
    //         age: 29,
    //     },
    //     {
    //         name: 'name3',
    //         salary: 500,
    //         age: 30,
    //     },
    //     {
    //         name: 'name4',
    //         salary: 600,
    //         age: 31,
    //     },
    //     {
    //         name: 'name5',
    //         salary: 700,
    //         age: 32,
    //     },
    // ];
    // Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.

    let employees2 = [
        {
            name2: 'name1',
            salary2: 300,
            age2: 28,
        },
        {
            name2: 'name2',
            salary2: 400,
            age2: 29,
        },
        {
            name2: 'name3',
            salary2: 500,
            age2: 30,
        },
        {
            name2: 'name4',
            salary2: 600,
            age2: 31,
        },
        {
            name2: 'name5',
            salary2: 700,
            age2: 32,
        },
    ];

    let sumOne = 0;

    for (let roboticsSalary of employees2) {
        if (roboticsSalary.age2 >= 30 && roboticsSalary.age2 <= 31) {
            sumOne += roboticsSalary['salary2'];
        }
    }

     document.write(sumOne + '<br>');

     // Задача 4

    // Дан следующий массив работников, в котором поле dismissed хранит в себе информацию о том, уволен работник или нет (true - уволен):

    // let employees = [
    //     {
    //         name: 'name1',
    //         salary: 300,
    //         dismissed: false,
    //     },
    //     {
    //         name: 'name2',
    //         salary: 400,
    //         dismissed: true,
    //     },
    //     {
    //         name: 'name3',
    //         salary: 500,
    //         dismissed: false,
    //     },
    //     {
    //         name: 'name4',
    //         salary: 600,
    //         dismissed: true,
    //     },
    //     {
    //         name: 'name5',
    //         salary: 700,
    //         dismissed: false,
    //     },
    // ];
    // Выведите на экран имена и зарплаты неуволенных работников.

    let employees3 = [
        {
            name3: 'name1',
            salary3: 300,
            dismissed3: false,
        },
        {
            name3: 'name2',
            salary3: 400,
            dismissed3: true,
        },
        {
            name3: 'name3',
            salary3: 500,
            dismissed3: false,
        },
        {
            name3: 'name4',
            salary3: 600,
            dismissed3: true,
        },
        {
            name3: 'name5',
            salary3: 700,
            dismissed3: false,
        },
    ];

    for (let nameAndSalary of employees3) {
        if (nameAndSalary.dismissed3 == true) {
            document.write(nameAndSalary.name3 + ' ' + nameAndSalary.salary3 + '<br>');
        }
    }

    // Задача 5

    // Дана следующая структура с данными:

    // let data = {
    //     1: [
    //         'data11',
    //         'data12',
    //         'data13',
    //     ],
    //     2: [
    //         'data21',
    //         'data22',
    //         'data23',
    //     ],
    //     3: [
    //         'data31',
    //         'data32',
    //         'data33',
    //         'data34',
    //         'data35',
    //     ],
    //     4: [
    //         'data41',
    //         'data42',
    //     ],
    // };
    // С помощью вложенных циклов выведите на экран все строки с данными.

    let data = {
        1: [
            'data11',
            'data12',
            'data13',
        ],
        2: [
            'data21',
            'data22',
            'data23',
        ],
        3: [
            'data31',
            'data32',
            'data33',
            'data34',
            'data35',
        ],
        4: [
            'data41',
            'data42',
        ],
    };

    for (let material in data) {
        for (let allData of data[material]) {
            console.log(allData);
        }
    }

    // Задача 6

    // Дана следующая структура с данными:

    // let data = [
    //     {
    //         1: 'data11',
    //         2: 'data12',
    //         3: 'data13',
    //         4: 'data14',
    //     },
    //     {
    //         1: 'data21',
    //         2: 'data22',
    //         3: 'data33',
    //     },
    //     {
    //         1: 'data31',
    //         2: 'data32',
    //     },
    // ];
    // Количество объектов в массиве и количество элементов в объекте может быть произвольным. С помощью вложенных циклов выведите на экран все строки с данными.

    let data1 = [
        {
            1: 'data11',
            2: 'data12',
            3: 'data13',
            4: 'data14',
        },
        {
            1: 'data21',
            2: 'data22',
            3: 'data33',
        },
        {
            1: 'data31',
            2: 'data32',
        },
    ];

    for (let material1 of data1) {
        for (let allData1 in material1) {
            console.log(material1[allData1]);
        }
    }

    // Задача 7

    // Дана следующая структура с данными:

    // let data = [
    //     {
    //         1: [
    //             'data111',
    //             'data112',
    //             'data113',
    //         ],
    //         2: [
    //             'data121',
    //             'data122',
    //             'data123',
    //         ],
    //     },
    //     {
    //         1: [
    //             'data211',
    //             'data212',
    //             'data213',
    //         ],
    //         2: [
    //             'data221',
    //             'data222',
    //             'data223',
    //             'data224',
    //         ],
    //         3: [
    //             'data231',
    //             'data232',
    //             'data233',
    //             'data234',
    //             'data235',
    //         ],
    //     },
    //     {
    //         1: [
    //             'data411',
    //             'data412',
    //             'data413',
    //         ],
    //         2: [
    //             'data421',
    //         ],
    //     },
    // ];
    // С помощью вложенных циклов выведите на экран все строки с данными.

    let data2 = [
        {
            1: [
                'data111',
                'data112',
                'data113',
            ],
            2: [
                'data121',
                'data122',
                'data123',
            ],
        },
        {
            1: [
                'data211',
                'data212',
                'data213',
            ],
            2: [
                'data221',
                'data222',
                'data223',
                'data224',
            ],
            3: [
                'data231',
                'data232',
                'data233',
                'data234',
                'data235',
            ],
        },
        {
            1: [
                'data411',
                'data412',
                'data413',
            ],
            2: [
                'data421',
            ],
        },
    ];

    for (let material2 of data2) {
        for (let material3 in material2) {
            for (let material4 of material2[material3]) {
        console.log(material4);
            }
        }
    }