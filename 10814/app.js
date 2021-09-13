const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= Number(input[0]); i++) {
    const inputValue = input[i].split(' ');
    inputArray.push({ A : +inputValue[0], B : inputValue[1].trim()});
}

solution(inputArray);

function solution(arr) {
    let answer = '';
    arr.sort((a,b) => a.A - b.A);
    for(let i = 0; i < arr.length; i++) {
        answer += `${arr[i].A} ${arr[i].B}` + '\n';
    }
    console.log(answer);
}