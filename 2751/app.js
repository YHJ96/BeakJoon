const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => Number(item));
input.shift();

solution(input)

function solution(nArr) {
    // 오름차순 정렬문제
    let answer = '';
    nArr.sort((a,b) => a - b);
    for(let i = 0; i < nArr.length; i++) {
        answer += nArr[i] + '\n';
    }
    console.log(answer);
}