const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item)[1];
const num = input[1].split(' ').map((item) => +item);

function solution(n, num) {
    let answer = '';
    // 오름차순 정렬
    num.sort((a,b) => a-b);
    // 배열의 인자의 개수를 담을 배열 선언
    let tmp = Array.from({length : n}, () => 0);
    // 중복을 제거하기 위해 사용
    let ck = Array.from({length : num.length}, () => 0);
    // 깊이 탐색 시작
    function DFS(L, s) {
        if(L === n) {
            const item = tmp.join(' ');
            answer += item + '\n';
        } else {
            // 백트레킹 시작
            for(let i = s; i < num.length; i++) {
                // 체크가 안되어있을 경우 확인
                if(ck[i] === 0) {
                    ck[i] = 1;
                    tmp[L] = num[i];
                    DFS(L+1, i);
                    ck[i] = 0;
                }
            }
        }
    }
    DFS(0,0);
    return answer.trim();
}

console.log(solution(n, num));