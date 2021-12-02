const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const num = input[1].trim().split(' ').map((item) => +item);
const checkNum = input[3].trim().split(' ').map((item) => +item);

function solution(num, checkNum) {
    let answer = '';
    let numHash = new Map();
    for(let x of num) {
        if(!numHash.has(x)) numHash.set(x, 1);
    }
    for(let x of checkNum) {
        let isCheck = 0;
        if(numHash.has(x)) isCheck = 1;
        answer += isCheck + ' ';
    }
    return answer;
}

console.log(solution(num, checkNum));