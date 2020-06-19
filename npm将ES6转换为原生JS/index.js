'use strict';


const word = 'tonight i am happy'
console.log(word)

let a = new Promise((resolve => {
    console.log('what the fuck')
}))
let arr = [1, 2, 3]
let [d, b, c] = arr
console.log(d, b, c)
arr.map(item => console.log(item))