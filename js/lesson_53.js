    "use strict";

    // Задача 1

    // Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.

    let num = 631;
    let flag = true;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
     console.log(flag);
