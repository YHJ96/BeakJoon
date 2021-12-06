const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const a = input[1].split(' ').map((item) => +item);
const b = input[2].split(' ').map((item) => +item);

function solution(a, b) {
    const result = [];
    const numHash = new Map();
    for(let bItem of b) {
        numHash.set(bItem, 1);
    }
    for(let aItem of a) {
        if(!numHash.has(aItem)) result.push(aItem);
    }
    if(result.length === 0) return 0;
    let answer = result.length + '\n';
    result.sort((a,b) => a-b);
    answer += result.join(' ');
    return answer;
} 

console.log(solution(a, b));