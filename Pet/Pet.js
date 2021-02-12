let intArray = [];

for (let i = 0; i < 5; i++) {
    input = readline().split(' ');
    let arr = input.reduce((acc, val) => {return Number(acc) + Number(val)});
    intArray.push(arr);
}

print(intArray.indexOf(Math.max(...intArray))+1,Math.max(...intArray));