
    'use strict';

    // Задача 1

    // Сделайте функцию, выводящую на экран ваше имя.

    function func() {
        alert('Rahimkhan');
    }

    func();

    // Задача 2

    // Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.

    let result = 0;

    function func1() {
        for (let i = 1; i <= 100; i++) {
            result += i;
        }
        alert(result);
    }

    func1();