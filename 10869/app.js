const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ');
input = input.map((item) => Number(item));

solution(input[0], input[1]);

function solution(a, b) {
    const add = a + b;
    const minus = a - b;
    const times = a * b;
    const divide =  parseInt(a / b);
    const mod = a % b;
    console.log(add);
    console.log(minus);
    console.log(times);
    console.log(divide);
    console.log(mod);
}