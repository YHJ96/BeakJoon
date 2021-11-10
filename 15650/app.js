const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

function solution(n, m) {
    let answer = '';
    // m개를 뽑는 횟수
    let tmp = Array.from({ length: m }, () => 0);
    function DFS(L, num) {
        // m개를 뽑으면 종료
        if (L === m) {
            answer += tmp.slice().join(' ') + '\n';
        } else {
            // 1부터 시작해서 n 까지
            for (let i = num; i <= n; i++) {
                // tmp에 i 대입
                tmp[L] = i;
                // 레벨과 num을 1씩 증가하면서 진행
                DFS(L + 1, i + 1);
            }
        }
    }
    DFS(0, 1);
    return answer.trim();
}

console.log(solution(input[0], input[1]));