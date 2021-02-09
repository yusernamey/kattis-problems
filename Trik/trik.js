let moves = readline();
let result = 1;

function answer () {
    const movesArray = moves.split('');
    movesArray.forEach((move, i) => {
        if (result === 1 && move === "A") {
            result +=1;
        } else if (result === 1 && move === "C") {
            result +=2;
        } 
        else if (result === 2 && move === "A") {
            result -=1;
        } else if (result === 2 &&move === "B") {
            result +=1;
        } 
        else if (result === 3 && move === "B") {
            result -=1;
        } else if (result === 3 && move === "C"){
            result -=2;
        } else {
            return false;
        }
    });
} 
answer();
print(result);