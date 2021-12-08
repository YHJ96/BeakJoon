const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item)[1];
const num = input[1].split(' ').map((item) => +item);

function solution(n, num) {
    let answer = '';
    num.sort((a,b) => a-b);
    // n개를 담을 배열 선언
    const tmp = Array.from({ length : n }, () => 0);
    // 방문했는지 확인 배열 선언
    const ck = Array.from({ length : num.length }, () => 0);
    // 백트래킹 시작
    function DFS(L) {
        // 레벨이 n개이면 정지
        if(L === n) {
            const item = tmp.join(' ');
            answer += item + '\n';
        } else {
            for(let i = 0; i < num.length; i++) {
                // 방문을 안한 경우 실행
                if(ck[i] === 0) {
                    // 방문 처리
                    ck[i] = 1;
                    // 요소 담기
                    tmp[L] = num[i];
                    // 깊이 탐색 시작
                    DFS(L+1);
                    // 방문 해제
                    ck[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return answer.trim();
}

console.log(solution(n, num));