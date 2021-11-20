const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let target = input[0].split(' ').map((item) => +item)[1];
let inputArray = input[1].split(' ').map((item) => +item);

function solution(target, arr) {
    let answer = 0;
    const n = arr.length;
    // 체크 배열
    let ch = Array.from({ length : n }, () => 0);
    function DFS(L) {
        // L이 n까지 간경우 정지
        if(L === n) {
            // 합 구하기
            let sum = 0;
            for(let i = 0; i < n; i++) {
                if(ch[i] === 0) sum += arr[i];
            }
            // target과 같다면 answer에 1 더하기
            if(sum === target) answer += 1;
        } else {
            ch[L] = 1;
            DFS(L+1);
            ch[L] = 0;
            DFS(L+1);
        }
    }
    // DFS 실행
    DFS(0);
    // 공집합도 포함됨으로 0일 경우 1을 빼주기 왜냐하면 sum이 0으로 초기화 되었있음
    if(target === 0) answer -= 1;
    return answer;
}

console.log(solution(target, inputArray));