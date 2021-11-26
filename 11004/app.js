const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = input[1].split(' ').map((item) => +item);
const n = input[0].split(' ').map((item) => +item)[1];

function solution(arr, n) {
    arr.sort((a,b) => a-b);
    const answer = arr[n - 1];
    return answer;
}

console.log(solution(inputArray, n));