const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ');

console.log(solution(+input[0], +input[1]));

function solution(n, r) {
    let total = 1;
    let choice = 1;
    let math = 1;
    for(let i = 1; i <= n; i++) {
        total *= i;
    }
    for(let j = 1; j <= r; j++) {
        choice *= j;
    }
    for(let k = 1; k <= n - r; k++) {
        math *= k;
    }
    let answer = total / (choice * math);
    return answer;
}

// 1. nCr은 n! / (r! * !(n - r)) 이다.