    "use strict";

    // Задача 1

    // Создайте объект с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'. Выведите на экран все его элементы.

    let objOne = {1: 'a', 2: 'b', 3: 'c'};

    console.log(objOne);

    // Задача 2

    // Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.

    let objTwo = {a: 1, b: 2, c: 3};
    
    console.log(objTwo['a'] + objTwo['b'] + objTwo['c']);

    // Задача 3

    // Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов.

    let objThree = {'1a': 1, '2b': 2, 'c-c': 3};

    console.log(objThree['1a'] + objThree['2b'] + objThree['c-c']);

    // Задача 5

    // Дан объект:

    // let obj = {key1: 1, key2: 2, key3: 3}; 
    // Найдите сумму его элементов. Обращайтесь к элементам с помощью изученного синтаксиса.

    let objFour = {key1: 1, key2: 2, key3: 3};

    console.log(objFour.key1 + objFour.key2 + objFour.key3);

    // Задача 7

    // Создайте объект user с ключами name, surname, patronymic и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.

    let objUser = {name: 'Rahimkhan', surname: 'Gaibkhanov', patronymic: 'Vaqifovic'};

    console.log(`${objUser['surname']} ${objUser['name']} ${objUser['patronymic']}`);

    // Задача 8

    // Создайте объект date с ключами year, month и day и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год месяц день.

    let objDate = {year: 2021, month: 'September', day: 19};

    console.log(objDate.year + ' ' + objDate.month + ' ' + objDate.day);

    // Задача 9

    // Создайте объект с ключами a, b и c и элементами 1, 2 и 3.

    let objFive = {};
    objFive['a'] = 1;
    objFive['b'] = 2;
    objFive.c = 3;

    console.log(objFive);