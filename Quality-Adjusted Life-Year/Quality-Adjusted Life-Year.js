let input = readline().split(' ');
let n = Number(input[0]);
let intArray = [];
for (let i = 0; i < n; i++) {
    input = readline().split(' ');
    intArray.push(input[0]*input[1]);
}

let result = intArray.reduce((acc, val) => {
    return Math.fround(acc+val);
});
print(Number(result).toFixed(3));