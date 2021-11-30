const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();
const inputArray = [];
for(let i = 0 ; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => +item);
    inputArray.push(inputValue);
}

function checkDate(arr) {
    let answer = 0;
    const [L,P,V] = arr;
    const date = parseInt(V / P);
    const remainder = V % P;
    answer = date * L;
    if(remainder > L) answer += L;
    else answer += remainder;
    return answer;
}

function solution(arr) {
    let answer = '';
    let count = 0;
    for(let x of arr) {
      const item = checkDate(x);
      count++;
      answer += `Case ${count}: ${item}` + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray))