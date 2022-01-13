const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const item = +input[i];
    inputArray.push(item);
}

function solution(arr) {
    let answer = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i - 1] > arr[i]) answer += 1;
    }
    return answer;
}

console.log(solution(inputArray));