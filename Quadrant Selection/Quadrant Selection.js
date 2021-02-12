let inputArr = [];
for (let i = 0; i < 2; i++) {
  input = readline();
  inputArr.push(input);
}
let x = inputArr[0];
let y = inputArr[1];
let result = () => {
    if (x < 0) 
    return (y < 0) ? 3 : 2;
    return (y < 0) ? 4 : 1;
}
print(result())