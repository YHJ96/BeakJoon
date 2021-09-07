const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(' ').map((item) => Number(item));

solution(input);

function solution(n) {
    const max = Math.max(...n);
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        sum += n[i] / max * 100;
    }
    console.log(sum / n.length);
}