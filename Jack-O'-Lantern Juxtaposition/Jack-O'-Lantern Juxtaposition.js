let input = readline().split(' ');
print(input.reduce((acc,val) => Number(acc)*Number(val)));