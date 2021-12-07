    "use strict";


    // let one = 0;
    // let two = 1;

    // for (let i = 1; i <= 100; i++) {
    //     let current = one + two;
        
    //     one = two;
    //     two = current;
        
    //     console.log(current);
    // }

    // Задача 2

    // Решите задачу на нахождение ряда чисел, каждое из которых равно сумме трех предыдущих, а первые три числа равны 0, 1 и 2.

    let one = 0;
    let two = 1;
    let three = 2;

    for (let i1 = 1; i1 < 11; i1++) {
        let current = one + two + three;

        one = two;
        two = three;
        three = current;
        console.log(current);
    }