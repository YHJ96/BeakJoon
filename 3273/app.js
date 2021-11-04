const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input[1].split(' ').map((item) => +item);
const target = +input[2];

function solution(arr, target) {
    arr.sort((a,b) => a-b);
    let answer = 0;
    let lb = 0;
    let rb = arr.length - 1;
    while(lb < rb) {
        const sum = arr[lb] + arr[rb];
        if(sum === target) answer++;
        if(sum <= target) lb++;
        else rb--;
    }
    return answer;
}

console.log(solution(arr, target));