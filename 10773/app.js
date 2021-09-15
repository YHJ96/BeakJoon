const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input.map((item) => +item);

solution(input);

function solution(arr) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            answer.pop();
        } else answer.push(arr[i]);
    }
    if(answer.length === 0) {
        return console.log(0);
    }
    answer = answer.reduce((acc, curr) => acc + curr);
    console.log(answer);
}