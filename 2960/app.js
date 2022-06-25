const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(arr) {
    const [n, m] = arr;
    let answer = 0;
    const prime = [0, 0];
    let count = 0;
    // prime 배열에 2 ~ n 까지 등록
    for (let i = 2; i <= n; i++) prime[i] = i;
    // 2 ~ n 까지 탐색 시작
    for (let i = 2; i <= n; i++) {
        // 방문처리 기준을 0으로 해서 0이면 스킵
        if (prime[i] === 0) continue;
        // 방문처리 시작 n의 배수
        for (let j = i; j <= n; j += i) {
            // 방문 확인
            if (prime[j] === 0) continue;
            // 방문 처리
            prime[j] = 0;
            count++;
            // 해당 횟수의 count면 answer에 할당한뒤 정지
            if (count === m) {
                answer = j;
                break;
            }
        };
    }
    return answer;
}

console.log(solution(input));