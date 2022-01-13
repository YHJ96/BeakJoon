const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

function solution(arr) {
    arr.sort((a,b) => a-b);
    const answer = arr[1];
    return answer;
}

console.log(solution(input));