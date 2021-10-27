const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

console.log(solution(input));

// 메모리 문제 readline으로 해결해야 메모리 합격
function solution(arr) {
    let answer = 1;
    while (true) {
        // 나머지 정리로 인자가 모두 0 이 될때 까지 나누기함
        if((arr[0] - answer) % 15 === 0 && (arr[1] - answer) % 28 === 0 && (arr[2] - answer) % 19 === 0) return answer;
        answer += 1;
    }
} 