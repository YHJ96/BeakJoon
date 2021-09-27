const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

console.log(solution(input));

function solution(input) {
    let n = input[1];
    let arr = [];
    let answer = '';
    for(let i = 2; i <= n; i++) {
        arr[i] = i;
    }
    for(let i = 2; i <= n; i++) {
        if(arr[i] == 0) continue;
        for(let j = i+i; j <= n; j += i) {
            arr[j] = 0;
        }
    }
    for(let x of arr) {
        if(x !== 0 && x >= input[0]) {
            answer += x + '\n';
        }
    }
    return answer.trimEnd();
}