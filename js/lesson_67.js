    "use strict";


    // Задача 1js.Pm.Lp.PLC

    // Выведите на экран следующую пирамидку:

    // xx
    // xxxx
    // xxxxxx
    // xxxxxxxx
    // xxxxxxxxxx

    let str = '';

    for (let i = 1; i <= 5; i++) {
        str += 'xx'; 
        document.write(str + '<br>')
    }

    // Задача 2

    // Выведите на экран следующую пирамидку:

    // 1
    // 333
    // 55555
    // 7777777
    // 999999999

    for (let i1 = 1; i1 <= 9; i1 += 2) {
        for (let j = 1; j <= i1; j++) {
            document.write(i1);
        }
        document.write('<br>');
    }

    // Задача 3

    // Выведите на экран следующую пирамидку:

    // xxxxxxxxxx
    // xxxxxxxx
    // xxxxxx
    // xxxx
    // xx

    for (let i2 = 9; i2 >= 1; i2 -= 2) {
        let str2 = '';

        for (let j2 = 0; j2 <= i2; j2++) {
            document.write(str2 + 'x');
        }
        document.write(str2 + '<br>');
    }

    // Задача 4

    // Выведите на экран следующую пирамидку:

    // 999999999
    // 88888888
    // 7777777
    // 666666
    // 55555
    // 4444
    // 333
    // 22
    // 1

    for (let i3 = 9; i3 >= 1; i3--) {
        for (let j3 = 1; j3 <= i3; j3++) {
            document.write(i3);
        }
        document.write('<br>');
    }