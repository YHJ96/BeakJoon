const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item)[1];
const num = input[1].split(' ').map((item) => +item);

function solution(n, num) {
    // 중복제거를위한 set함수 생성
    let answer = new Set();
    num.sort((a,b) => a-b);
    // n개를 뽑아서 조합할 빈 배열
    let tmp = Array.from({length : n}, () => 0);
    // 인자를 사용했는지 체크 배열
    let ch = Array.from({ length : num.length }, () => 0);
    function DFS(L, s) {
        if(L === n) {
            const item = tmp.join(' ');
            answer.add(item);
        } else {
            // 백트레킹 시작
            for(let i = s; i < num.length; i++) {
                if(ch[i] === 0) {
                    tmp[L] = num[i];
                    ch[i] = 1;
                    DFS(L+1, i);
                    ch[i] = 0;
                }
            }
        }
    }
    DFS(0,0);
    return [...answer].join('\n');
}

console.log(solution(n, num));