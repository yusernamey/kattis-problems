let inputArr = [];
for (let i = 0; i < 3; i++) {
  input = readline();
  inputArr.push(input);
}
let l = parseInt(inputArr[0]);
let d = parseInt(inputArr[1]);
let x = parseInt(inputArr[2]);
let min = 0;
let max = 0;

function answer () {
  let sum = 0;
  const digitSum = (number, n) => {
    sum = 0;
    while (n > 0) {
      let digit = number % 10;
      sum += digit;
      number = Math.floor(number / 10);
      n--;
    }
    return sum;
  };
  const findValues = () => {
    let found = true;
    let a = 0;
    const findMax = () => {
      max = d - a;
      let maxN = max.toString().length;
      digitSum(max, maxN);
    };
    const findMin = () => {
      min = l + a;
      let minN = min.toString().length;
      digitSum(min, minN);
    };
    const loop = () => {  
      while (found) {
        findMax();
        if (sum === x) {
            a = 0;
            found = false;
        } else {
          a++;
        }
      }
      found = true;
      while (found) {
        findMin();
        if (sum === x) {
            a = 0;
            found = false;
        } else {
          a++;
        }
      }
    };
    loop();
  };
  findValues();
}
answer();
print(min + '\n' + max);
