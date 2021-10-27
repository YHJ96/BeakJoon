const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const numArr = input[1].split(' ').map((item) => +item);
const findNum = input[3].split(' ').map((item) => +item);

console.log(solution(numArr, findNum));

function solution(arr, num) {
    // 길이가 num이랑 같은 배열을 선언
    const result = Array.from({length : num.length}, () => 0);
    // 인자를 set함수에 넣기
    const newArr = new Set(arr);
    for(let i = 0; i < num.length; i++) {
        // 인자가 있으면 그 해당 자리수에 1을 더하기
        if(newArr.has(num[i])) result[i] += 1;
    }
    let answer = '';
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trimEnd();
} 