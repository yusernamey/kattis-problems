const input = readline().split(' ');
let x = Number(input[0]);
let y = Number(input[1]);
let n = Number(input[2]);
let intArray = [];
let result = [];
for (let i = 1; i < n+1; i++) {
  intArray.push(i);
}
let check = (i, val) => {
    return parseInt(i/val) === i/val;
};
let condition = (cond1, cond2, str1, str2, str3, num) => {
    if ((cond1 === true) && (cond2 === true)) {
        result.push(str3);
    } else if (cond1 === true) {
        result.push(str1);
    } else if (cond2 === true) {
        result.push(str2);
    } else {
        result.push(num);
    }
};
intArray.forEach(number => {
    let findX = check(number, x);
    let findY = check(number, y);
    condition (findX, findY, "Fizz", "Buzz", "FizzBuzz",number);

});
for (let i = 0; i < n; i++) {
  print(result[i]);
}
