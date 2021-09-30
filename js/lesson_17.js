    "use strict";

    // Задача 1

    // Создайте массив с элементами 'a', 'b' и 'c'. Выведите его на экран с помощью функции alert, а также выведите его в консоль с помощью console.log.

    let arrOne = ['a', 'b', 'c'];

    alert(arrOne);
    console.log(arrOne);

    // Задача 2

    // Создайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый из этих элементов.

    let arrTwo = ['a', 'b', 'c'];

    console.log(arrTwo[0]);
    console.log(arrTwo[1]);
    console.log(arrTwo[2]);

    // Задача 3

    // Создайте массив с элементами массив с элементами 'a', 'b', 'c', 'd'. Выведите с его помощью на экран строку 'a+b+c+d'.

    let arrThree = ['a', 'b', 'c', 'd'];

    console.log(`${arrThree[0]}+${arrThree[1]}+${arrThree[2]}+${arrThree[3]}`);

    // Задача 4

    // Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.

    let arrFour = [1, 2, 3];

    console.log(arrFour[0] + arrFour[1] + arrFour[2]);

    // Задача 5

    // Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

    let arrFive = [2, 5, 3, 9];
    let result = (arrFive[0] * arrFive[1]) + (arrFive[2] * arrFive[3]);

    console.log(result);

    // Задача 6

    // Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.

    let arrSix = [1, 2, 'a', 'b', true, false, NaN];

    console.log(arrSix.length);

    // Задача 7

    // Создайте массив с произвольными элементами. Выведите на экран последний элемент этого массива.

    let arrSeven = [1, 2, 'a', 'b', true, false, NaN];

    console.log(arrSeven[arrSeven.length - 1]);

    // Задача 8

    // Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

    let arrEight = ['a', 'b', 'c'];
    arrEight[0] = 1;
    arrEight[1] = 2;
    arrEight[2] = 3;

    console.log(arrEight);

    // Задача 9

    // Создайте массив с числами. Прибавьте к каждому элементу массива число 5. Выведите на экран измененный массив.

    let arrNine = [0, 0, 0];
    arrNine[0] += 5;
    arrNine[1] += 5;
    arrNine[2] += 5;


    console.log(arrNine);

    arrNine[0] += '5';
    arrNine[1] += '5';
    arrNine[2] += '5';

    console.log(arrNine);

    // Задача 10

    // Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.

    let arrTen = [1, 2, 3];
    arrTen[0]++
    arrTen[1]++
    arrTen[2]++

    console.log(arrTen);

    // Задача 11

    // С помощью описанного приема создайте массив с элементами 1, 2 и 3.

    let arrEleven = [];
    arrEleven[0] = 1;
    arrEleven[1] = 2;
    arrEleven[2] = 3;

    console.log(arrEleven);

    // Задача 12

    // Пусть дан такой массив:

    // let arr = [1, 2, 3];
    // Добавьте ему в конец элементы 4 и 5.

    let arrTwelve = [1, 2, 3];
    arrTwelve[3] = 4;
    arrTwelve[4] = 5;

    console.log(arrTwelve);

    // Задача 13

    // Пусть дан такой массив:

    // let arr = [];

    // arr[3] = 'a';
    // arr[8] = 'b';
    // Узнайте длину этого массива с помощью свойства length.

    let arrThirteen = [];

    arrThirteen[3] = 'a';
    arrThirteen[8] = 'b';
    
    console.log(arrThirteen.length);
