'use strict';

var word = 'tonight i am happy';
console.log(word);

var a = new Promise(function (resolve) {
    console.log('what the fuck');
});
var arr = [1, 2, 3];
var d = arr[0],
    b = arr[1],
    c = arr[2];

console.log(d, b, c);
arr.map(function (item) {
    return console.log(item);
});
