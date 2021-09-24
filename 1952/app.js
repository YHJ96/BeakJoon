const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const numArr = input[1].split(' ').map((item) => +item);
const findNum = input[3].split(' ').map((item) => +item);

console.log(solution(numArr, findNum));

function solution(arr, num) {
    const result = Array.from({length : num.length}, () => 0);
    const newArr = new Set(arr);
    for(let i = 0; i < num.length; i++) {
        if(newArr.has(num[i])) result[i] += 1;
    }
    let answer = '';
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trimEnd();
}