const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split('').map((item) => Number(item));

solution(input);

// 내림차순 정렬문제
function solution(arr) {
    const newArr = arr.sort((a,b) => b - a).map((item) => item.toString());
    let answer = '';
    for(let x of newArr) {
        answer += x;
    }
    console.log(answer);
}