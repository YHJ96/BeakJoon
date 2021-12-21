const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(' ').map((item) => Number(item));

function solution(n) {
    // 점수의 최대값으로 평균 재지정
    const max = Math.max(...n);
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        sum += n[i] / max * 100;
    }
    return sum / n.length;
}

console.log(solution(input));