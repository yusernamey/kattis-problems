const input = readline();
const inputArray = input.split('');
let result = [];
let findDouble = inputArray.reduce((acc, val) => {
	if ( val === acc) {
    } else {
        acc = val;
        result.push(acc)
    } 
    return acc;
}, 0);
print(result.join(''));