const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = Number(input[0]);

solution(input);

function solution(n) {
    for(let i = 1; i < 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}