const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const item = input[i].split(' ').map((item) => +item);
    inputArray.push(item);
}

function findNum(arr) {
    arr.sort((a,b) => b-a);
    const [one, two, three] = arr;
    return three;
}

function solution(arr) {
    let answer = '';
    for(let x of arr) {
        const item = findNum(x);
        answer += item + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));