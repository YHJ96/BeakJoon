const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let inputArray = [];
for(let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

function solution(arr) {
    let answer = 0;
    let min = Math.min(arr.length, arr[0].length);
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            for(let k = 0; k < min; k++) {
                if(i+k < arr.length && j + k < arr[0].length) {
                    if(arr[i][j] === arr[i][j+k] && arr[i][j] === arr[i+k][j] && arr[i][j] === arr[i+k][j+k]) {
                        const width = (k + 1) ** 2;
                        answer = Math.max(answer, width);
                    }
                }
            }
        }
    }
    return answer;
}

console.log(solution(inputArray));