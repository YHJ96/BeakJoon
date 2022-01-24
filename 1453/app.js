const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const seat = input[1].split(' ').map((item) => +item);

function solution(n, seat) {
    // PC방의 자석 중복을 확인
    const mySet = new Set([...seat]);
    // PC방의 총자석과 자석이 중복되어 못 앉는 사람을 제거
    const answer = n - mySet.size;
    // 정답
    return answer;
}

console.log(solution(n, seat));