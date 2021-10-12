const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
let inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => +item);
    inputArray.push(inputValue);
}
console.log(solution(inputArray));

// 시간초과
function solution(arr) {
    let result = []
    const myMap = new Map();
    for(let i = 0; i < arr[0].length; i++) {
        myMap.set(i+1, arr[0][i]);
    }
    for(let i = 1; i < arr.length; i++) {
        let sum = 0;
        for(let j = arr[i][0]; j <= arr[i][1]; j++) {
            sum += myMap.get(j);
        }
        result.push(sum);
    }
    let answer = '';
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trimEnd();
}