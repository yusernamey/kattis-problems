let input = readline().split(' ');
let n = Number(input[0]);
let intArray = [];
for (let i = 0; i < n; i++) {
    input = readline().split(' ');
    intArray.push(input);
}
let multiplier = intArray.map(number => number % 10);
let baseNumber = intArray.map((number, i) => Math.floor(number / 10));
let numbers = baseNumber.map((number, i) => Math.pow(number, multiplier[i]));
let result = numbers.reduce((acc, val) => acc + val);
print(result);