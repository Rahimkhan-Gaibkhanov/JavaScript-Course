    "use strict";

    // Задача 1

    // Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for-of выведите все эти элементы на экран.

    let arr = ['a', 'b', 'c', 'd', 'e'];

    for (let elem of arr) {
        console.log(elem);
    }

    // Задача 2

    // Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for-of найдите сумму элементов этого массива.

    let arr1 = [1, 2, 3, 4, 5];
    let result = 0;

    for (let elem1 of arr1) {
        result += elem1;
    }
    console.log(result);

    // Задача 3

    // Пусть у вас есть массив с названиями месяцев. С помощью цикла выведите на экран все месяцы из массива. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.

    let arr2 = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

    for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i]);
    }

    let arr3 = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

    for (let elem2 of arr3) {
        console.log(elem2);
    }

    // Задача 4

    // Пусть у вас есть массив с названиями месяцев. Пусть в переменной month хранится номер текущего месяца, например, 10. С помощью цикла выведите все месяцы, а текущий месяц выведите курсивом. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.

    let arr4 = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    let month = 10;

    for (let i4 = 0; i4 < arr4.length; i4++) {
        
        if (i4 == month) {
            document.write('<i>' + arr4[i4] + '</i>' + '<br>');
        }
        if (i4 == month) { continue }
        document.write(arr4[i4] + '<br>');
    }

    let arr5 = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    let month1 = 10;

    for (let elem5 of arr5) {
        if (elem5.length == 10) {
            document.write('<i>' + elem5 + '</i>' + '<br>');
        }
          console.log(elem5.length);
    }