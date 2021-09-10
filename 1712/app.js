const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => Number(item));

solution(input);

function solution(price) {
    const fix = price[0];
    const minus = price[2] - price[1];
    const answer = Math.floor(fix / minus) + 1;
    console.log(minus <= 0 ? -1 : answer);
}