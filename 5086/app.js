const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
input.pop();
for(let x of input) {
    const inputValue = x.split(' ');
    inputArray.push({ A: +inputValue[0], B: +inputValue[1] });
}

solution(inputArray);

function solution(arr) {
    // 배수와 약수 문제
    let answer = '';
    for(let x of arr) {
        if(x.B % x.A === 0) {
            answer += 'factor' + '\n';
        } else if(x.A % x.B === 0) {
            answer += 'multiple' + '\n';
        } else answer += 'neither' + '\n';
    }
    console.log(answer);
}