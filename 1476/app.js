const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

console.log(solution(input));

function solution(arr) {
    let answer = 1;
    while (true) {
        if((arr[0] - answer) % 15 === 0 && (arr[1] - answer) % 28 === 0 && (arr[2] - answer) % 19 === 0) return answer;
        answer += 1;
    }
}