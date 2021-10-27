const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => Number(item));
    inputArray.push(inputValue);
}
inputArray.pop();

solution(inputArray);

function solution(arr) {
    // 직각 삼각형 문제
    for(let i = 0; i < arr.length; i++) {
        const max = Math.max(...arr[i]);
        let sum = 0;
        for(let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j] * arr[i][j];
        }
        if(sum - (max * max) === max * max) {
            console.log('right');
            sum = 0;
        } else {
            console.log('wrong');
            sum = 0;
        }
    }
}