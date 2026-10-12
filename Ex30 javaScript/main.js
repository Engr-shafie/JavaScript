function operate(a, b, callback) {
    return callback(a, b);
}

function Multiplication(a, b) {
    return a * b;
}

function Division(a, b) {
    return a / b;
}

console.log("Multiplication:", operate(5, 3, Multiplication));        
console.log("Division:", operate(15, 3, Division)); 