const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = +input[0];

console.log(solution(input));

function solution(n) {
    let pi = Math.PI * n ** 2;
    let taxi = n ** 2 * 2;
    let answer = pi + '\n' + taxi;
    return answer;
}