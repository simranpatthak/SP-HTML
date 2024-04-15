const numbers = [2, -4, 6, 8, -9];
const result = numbers.map(num => num < 0 ? 0 : num).join("");
console.log(result);