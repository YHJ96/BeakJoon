const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = input[1].split('').map((item) => Number(item));

solution(inputArray);

function solution(n) {
    // n배열에 있는 모든 수의 합 구하기
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    console.log(sum);
} 