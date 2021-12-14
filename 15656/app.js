const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item)[1];
const num = input[1].split(' ').map((item) => +item);

function solution(n, num) {
    let answer = [];
    // n 개를 뽑아서 나열할 배열 선언
    let tmp = Array.from({length : n}, () => 0);
    // 오름차순 정렬
    num.sort((a,b) => a-b);
    function DFS(L) {
        // n개를 뽑았을 경우
        if(L === n) {
            const item = tmp.join(' ');
            answer.push(item);
        } else {
            // 백트레킹 시작
            for(let i = 0; i < num.length; i++) {
                tmp[L] = num[i];
                DFS(L+1);
            }
        }
    }
    DFS(0);
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(n, num));