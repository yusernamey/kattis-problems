const input = parseInt(readline());
let winner = input % 2 === 0 ? 'Bob' : 'Alice';
      
print(winner);

//When % is used with 2, the number is even if the remainder is zero. Otherwise, the number is odd.