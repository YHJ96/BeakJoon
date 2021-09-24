const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(+input[0]));

function solution(n) {
    let num = 0;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        if(sum === n) break;
        num++;
        const value = num.toString().split('').map((item) => +item).reduce((acc, curr) => acc + curr);
        sum = num + value;
        if(i === n - 1) num = 0;
    }
    return num;
}