const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item)[1];
const num = input[1].split(' ').map((item) => +item);

function solution(n, num) {
    // 중복제거를 위한 Set함수 생성
    let answer = new Set();
    // 중복을 막기 위한 체크배열 생성
    let ck = Array.from({length : num.length}, () => 0);
    // n 만큼의 뽑는 개수를 지정
    let tmp = Array.from({length : n}, () => 0);
    // 오름차순 정렬
    num.sort((a,b) => a-b);
    function DFS(L) {
        if(L === n) {
            // 중복 확인
            const item = tmp.join(' ');
            answer.add(item);
        } else {
            // 백트레킹 시작
            for(let i = 0; i < num.length; i++) {
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
    DFS(0);
    return [...answer].join('\n');
}

console.log(solution(n, num));