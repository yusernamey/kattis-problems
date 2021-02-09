const input = readline();
const inputArray = input.split('');
let result = "no hiss";
const doubleLetters = inputArray.reduce((acc, val) => {
	if ( (val === "s") && (acc === "s") ){
    	result = "hiss";
    } else {
        acc = val;
    } 
    return acc;
}, 0);
print(result);