"use strict"; //nodejs, tolerate for

function range(start, end, step) {
    var arr = [];
    var i;
    step = step || 1;

    for (i = start; step > -1
        ? i < end + 1
        : i > end - 1;
            i = i + step) {
        arr.push(i);
    }

    return arr;
}

function sum(arr) {
    var summa = 0;
    var i;
    for (i = 0; i < arr.length; i += 1) {
        summa += arr[i];
    }
    return summa;
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
