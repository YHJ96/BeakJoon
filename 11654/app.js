const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input[0]);

function solution(code) {
    // 아스키코드
    const ASCII = code.charCodeAt();
    console.log(ASCII);
}