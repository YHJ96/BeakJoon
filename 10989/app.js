const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < Number(input[0]); i++) {
    inputArray.push(Number(input[i]));
}

solution(inputArray);

function solution(arr) {
    const newArr = arr.sort((a,b) => a - b);
    let answer = '';
    for(let i = 0; i < arr.length; i++) {
        answer += newArr[i].toString() + '\n';
    }
    console.log(answer);
}

// 백준 입출력 문제 때문에 node.js 불가능