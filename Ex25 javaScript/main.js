// 1. Use the spread operator to combine two arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array.

let array1 = [1,2,3];
let array2 = [...array1,4,5,6];

console.log(array2)


// 2. Create a function `multiply` that takes any number of arguments and returns their product using the rest parameter.

function multiply(...numbers) {
    return numbers.reduce((total, num)=> total * num, 1)
};
console.log(multiply(2,4));