const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputArray = [];
for(let i = 1; i <= Number(input[0]); i++) {
    const inputValue = input[i].split(' ').map((item) => Number(item));
    inputArray.push({ A : inputValue[0], B : inputValue[1] });
}

solution(Number(input[0]), inputArray);

function solution(n, numArr) {
    // 문자열에 변수 넣어서 출력하는 문제
    let answer = '';
    for(let i = 0; i < n; i++) {
        if(i === n - 1) answer += `Case #${i + 1}: ${numArr[i].A + numArr[i].B}`
        else answer += `Case #${i + 1}: ${numArr[i].A + numArr[i].B}` + '\n';
    }
    console.log(answer);
}