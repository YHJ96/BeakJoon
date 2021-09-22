const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= +input[0]; i++) {
    const inputValue = input[i].split(' ').map((item) => +item);
    inputArray.push(inputValue);
}

console.log(solution(inputArray));

function solution(arr) {
    let result = Array(arr.length).fill(1);
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i][0] > arr[j][0] && arr[i][1] > arr[j][1]) {
                result[j] += 1;
            } else if(arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
                result[i] += 1;
            }
        }
    }
    let answer = '';
    for(let x of result) {
        answer += x + ' ';
    }
    return answer;
}