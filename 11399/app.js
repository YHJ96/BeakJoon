const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(' ').map((item) => +item);

console.log(solution(input));

function solution(arr) {
    arr.sort((a,b) => a - b);
    let answer = 0;
    for(let i = 0; i < arr.length; i++) {
        for(j = 0; j < i + 1; j++) {
            if(i === 0) {
                answer += arr[i];
            } else answer += arr[j];
        }
    }
    return answer;
}