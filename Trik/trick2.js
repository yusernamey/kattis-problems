let moves = "AB";
let result = 1;

function answer () {
    const movesArray = moves.split('');
    movesArray.forEach((move, i) => {
        if (result === 1 && move === "A") {
            result +=1;
        } else if (move === "C") {
            result +=2;
        } else {
            return false;
        }

        if (result === 2 && move === "A") {
            result -=1;
        } else if (move === "B") {
            result +=1;
        } else {
            return false;
        }
        
        if (result === 3 && move === "B") {
            result -=1;
        } else if (move === "C"){
            result -=2;
        } else {
            return false;
        }
    });
} 
answer();
console.log(result);





cups = 3;
moves = 'ABC';




0 [1, 0, 0] -> AC
A [1, 0, 0] -> [0, 1, 0] AC
B [0, 1, 0] -> [0, 0, 1] AB
C [0, 0, 1] -> [1, 0, 0] CB

suduarray = ["B","C"]

if (result === 1 || move === A) {
    const a = 
}




A [+1 , -1] 1 2
B [+1, -1] 2 3
C [+2, -2] 3 1

// result = 1
// A = 2 result =2 +1A
                                                                            // B = 1 result =1
// C = 3 result = 3 +2C

//result = 2 
//A = 1 result = 1 -1A
//B = 3 result = 3 +1B
                                                                            //C = 2 result = 2  

//result = 3

                                                                            //A = 3 result = 3
//B = 2 result = 2 -1B
//C = 1 result = 1 -2C

