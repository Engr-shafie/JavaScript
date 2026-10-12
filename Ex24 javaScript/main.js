// Create a function calculateArea that takes width and height as parameters and returns the area. If no height is provided, it should default to width (for calculating the area of a square).

function calculateArea(width, height = width) {
    return width * height
};
console.log(calculateArea(2, 10));
console.log(calculateArea(10));