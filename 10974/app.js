const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n) {
    let answer = '';
    // 순열을 담는 공간
    const tmp = Array.from({ length: n }, () => 0);
    // 중복순열 체크
    const ch = Array.from({ length: n }, () => 0);
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    // DFS 시작
    function DFS(L) {
        // n 개의 개수만큼 채웠을 때 DFS 정지
        if(L === n) {
            answer += tmp.slice().join(' ') + '\n';
        } else {
            // 배열 순회시작
            for(let i = 0; i < arr.length; i++) {
                if(ch[i] === 0) {
                    // 체크배열을 1로 바꿔주고 진행
                    ch[i] = 1;
                    // 순열 담아주기
                    tmp[L] = arr[i];
                    // 노드 레벨 증가
                    DFS(L+1);
                    // 백트레킹하면서 체크배열 1 해제
                    ch[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return answer.trim();
}

console.log(solution(+input[0]));