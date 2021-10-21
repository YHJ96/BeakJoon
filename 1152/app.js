const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ');

// 단어 자리수 구하기 문제
function solution(word) {
    // 없을 경우 예외처리
    if (word[0] === '') return 0;
    else return word.length;
}

console.log(solution(input)); 