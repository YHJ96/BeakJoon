const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const str = input[0].trim();
const compare = input[1];

function solution(str, compare) {
    // 문서의 compare에 해당된 문자별로 나누고 0을 대입
    const item = str.split(compare).join('0');
    // 0만 추출
    const answer = [...item].filter((item) => item === '0');
    return answer.length;
}

console.log(solution(str, compare));