const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item)[1];
const num = input[1].split(' ').map((item) => +item);

function solution(n, num) {
    // 중복제거를 위해 Set함수 호출
    let answer = new Set();
    // 오름차순 정렬
    num.sort((a,b) => a-b);
    // n개를 뽑는 배열
    let tmp = Array.from({length : n}, () => 0);
    function DFS(L) {
        if(L === n) {
            const item = tmp.join(' ');
            answer.add(item);
        } else {
            // 백트레킹 시작
            for(let i = 0; i < num.length; i++) {
                tmp[L] = num[i];
                DFS(L+1);
            }
        }
    }
    DFS(0);
    return [...answer].join('\n');
}

console.log(solution(n, num));