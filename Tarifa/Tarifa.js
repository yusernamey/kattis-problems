let inputArr = [];
let usageArr = [];


    for (let i = 0; i < 2; i++) {
        input = readline();
        inputArr.push(input);
    }
    
let monthlyData = Number(inputArr[0]);
let month = Number(inputArr[1]);

    for (let i = 0; i < month; i++) {
        input = readline();
        usageArr.push(input);
    }
    
let usage = parseInt(usageArr.reduce((acc, val) => Number(acc) + Number(val)));
let result = (monthlyData*month) + monthlyData - usage;




print(result);