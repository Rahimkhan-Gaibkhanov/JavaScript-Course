    "use strict";

    // Задача 1

    // Пусть даны следующие переменные:

    // let a = 2 * (3 - 1);
    // let b = 6 - 2;
    // Используя оператор ==, узнайте, равны ли значения этих переменных или нет.

    let a = 2 * (3 - 1);
    let b = 6 - 2;

    console.log(a == b);

    // Задача 2

    // Пусть даны следующие переменные:

    // let a = 5 * (7 - 4);
    // let b = 1 + 2 + 7;
    // Используя оператор >, узнайте, больше ли переменная a, чем b.

    let a1 = 5 * (7 - 4);
    let b1 = 1 + 2 + 7;

    console.log(a1 > b1);


    // Задача 3

    // Пусть даны следующие переменные:

    // let a = 2 ** 4;
    // let b = 4 ** 2;
    // Используя операцию оператор !=, узнайте, разные ли значения этих переменных или нет.

    let a2 = 2 ** 4;
    let b2 = 4 ** 2;

    console.log(a2 != b2);

    // Проверка значения из диапазона

    // Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
    
    // «Включительно» означает, что значение переменной age может быть равно 14 или 90.

    let age = 21;

    if (age >= 14 && age <= 90) {
        console.log('Включительно');
    }

    // Проверка значения вне диапазона

    // Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

    // Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

    let age1 = 13;

    if (!(age1 >= 14 && age1 <= 90)) {
        console.log('Включительно');
    }

    let age2 = 13;

    if (age2 <= 14 || age2 >= 90) {
        console.log('Включительно');
    }

    //     Проверка логина

    // Напишите код, который будет спрашивать логин с помощью prompt.

    // Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

    // Пароль проверять так:

    // Если введён пароль «Я главный», то выводить «Здравствуйте!»,
    // Иначе – «Неверный пароль»,
    // При отмене – «Отменено».

    let userName = prompt('Кто там ?', '');

    if (userName == 'Админ') {
        let userPassword = prompt('Пароль ?', '')
        if (userPassword == 'Я главный') {
            alert('Здравствуйте!');
        } else if (userPassword == '' || userPassword == null) {
                alert('Отменено');
        } else {
            alert('Неверный пороль');
        }
    }
    else if (userName == null || userName == '') {
        alert('Отменено');
    } else {
        alert('Я вас не знаю');
    }
