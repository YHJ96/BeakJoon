const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ');

function solution(start, end) {
    let answer =  0;
    let numArr = [];
    let count = 0;
    while(true) {
        for(let i = 0; i < count; i++) {
            numArr.push(count);
        }
        if(count === Math.ceil(end / 2)) break;
        count += 1;
    }
    for(let i = start; i <= end; i++) {
        answer += numArr[i - 1];
    }
    return answer;
}

console.log(solution(+input[0], +input[1]));