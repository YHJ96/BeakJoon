const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

function solution(n, m) {
    let answer = '';
    let result = [];
    // 사용할것인지 체크배열
    let ch = Array.from({length : n}, () => 0);
    // m개를 뽑는 갯수
    let tmp = Array.from({length : m}, () => 0);
    let num = [];
        // 1 ~ n 까지의 배열을 만듬
    for(let k = 1; k <= n; k++) num.push(k);
    function DFS(L) {
        // 2개를 뽑으면 종료
        if(L === m) result.push(tmp.slice());
        else {
            for(let i = 0; i < num.length; i++) {
                // 체크가 0일 경우
                if(ch[i] === 0) {
                    // 체크를 1로 바꾼다
                    ch[i] = 1;
                    // tmp에 순열 넣어주기
                    tmp[L] = num[i];
                    DFS(L+1);
                    // 백트레킹하면서 0으로 해당 숫자 바꿔주기
                    ch[i] = 0;
                }
            }
        }
    }
    DFS(0);
    // 숫자 정제
    for(let x of result) answer += x.join(' ') + '\n';
    return answer.trim();
}

console.log(solution(input[0], input[1]));