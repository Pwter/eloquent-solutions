function arrayToList(arr) {
    var list = null;
    for (var i = arr.length -1 ; i > -1; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    var arr = [];
    for (var node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend(val, list) {
    return { value: val, rest: list};
}

function nth(list, n) {
    var i = 0;
    for (var node = list; node && i <= n; node = node.rest) {
        if (n == i)
            return node.value;
        i++;
    }
}

function nthRecursive(list, n) {
    if (n == 0) return list.value;
    else
        return nthRecursive(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30, 40, 50]), 2));
console.log(nthRecursive(arrayToList([10, 20, 30, 40, 50]), 3));
