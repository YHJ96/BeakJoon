const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputArray = [];
for(let i = 1; i <= Number(input[0]); i++) {
    const inputValue = input[i].split(' ').map((item) => Number(item));
    inputArray.push({ A: inputValue[0], B: inputValue[1] });
}

solution(Number(input[0]), inputArray);

function solution(n, numArr) {
    for(let i = 0; i < n; i++) {
        console.log(numArr[i].A + numArr[i].B);
    }
}