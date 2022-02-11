const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => BigInt(item));
const [a, b, c] = input;

// a를 b번 곱한뒤 c의 나머지
function solution(a, b, c) {
    // a^1 = a
    if(b === 1n) return a % c;
    // a^n = a^(n/2) * a^(n/2) 랑 같으므로 재귀호출
    let answer = solution(a, BigInt(parseInt(b / 2n)), c);
    answer = (answer * answer) % c;
    // 만약 홀수이면 a^(n/2) * a^(n/2) 의 값에 * a
    if(b % 2n === 1n) answer = (answer * a) % c;
    return answer;
}

console.log(Number(solution(a, b, c)));