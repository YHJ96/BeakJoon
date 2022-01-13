const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(s) {
    let answer = 1;
    // 팰린드롬인지 확인하기 위해 배열로 만들고 뒤집기
    const compare = [...s].reverse();
    // 배열을 요소를 문자열로 치환하여 비교
    if(s === compare.join('')) return answer;
    answer = 0;
    return answer;
}

console.log(solution(input[0]));