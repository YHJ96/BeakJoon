const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => Number(item));
    inputArray.push({ A : inputValue[0], B : inputValue[1] });
}

solution(inputArray);

function solution(numArr) {
    // 사칙연산 문제
    let answer = '';
    let i = 0;
    while(i < numArr.length) {
        if(numArr[i].A === 0 && numArr[i].B === 0) break;
        answer += `${numArr[i].A + numArr[i].B}` + '\n';
        i++;
    }
    console.log(answer);
};