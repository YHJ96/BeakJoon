const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item)[1];
const num = input[1].split(' ').map((item) => +item);

function solution(n, num) {
    // 중복체크를 위해 Set함수 생성
    let answer = new Set();
    // 오름차순 정렬
    num.sort((a,b) => a-b);
    // n만큼을 뽑아서 만들기 위해 배열 선언
    const tmp = Array.from({ length : n }, () => 0);
    function DFS(L, s) {
        if(L === n) {
            // 중복 제거를 위해 Set에 인자값 넣어주기
            const item = tmp.join(' ');
            answer.add(item);
        } else {
            // 백트래킹 시작 조합 뽑기
            for(let i = s; i < num.length; i++) {
                tmp[L] = num[i];
                DFS(L+1, i);
            }
        }
    }
    DFS(0,0);
    return [...answer].join('\n');
}

console.log(solution(n, num));