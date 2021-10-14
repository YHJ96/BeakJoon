const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input[0].split(' ').map((item) => +item);

console.log(solution(input));

function solution(n) {
    const mySet = new Set(n);
    let result = [];
    for(let x of mySet) {
        result.push(x);
    }
    result.sort((a,b) => a-b);
    return result.join(' ');
}