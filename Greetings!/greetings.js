const greeting = readline();
const greetingArray = greeting.split('');
const doubleLetters = greetingArray.reduce((acc, currentValue, i) => {
    if (currentValue === "e") {
        acc.push(currentValue);
    } return acc;
}, []).join('');
let firstLetter = greetingArray.findIndex((letter) => letter === "e");
greetingArray.splice(firstLetter+=1, 0, doubleLetters);
const result = greetingArray.join('');
print(result);