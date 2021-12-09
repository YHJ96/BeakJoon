const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item)[1];
const num = input[1].split(' ').map((item) => +item);

function solution(n, num) {
    let answer = '';
    // n만큼의 뽑는 개수를 지정
    let tmp = Array.from({length : n}, () => 0);
    // 배열 오름차순 정리
    num.sort((a,b) => a-b);
    function DFS(L, s) {
        if(L === n) {
            const item = tmp.join(' ');
            answer += item + '\n';
        } else {
            for(let i = s; i < num.length; i++) {
                tmp[L] = num[i];
                // 중복 조합이므로 그대로 가져가기
                DFS(L+1, i);
            }
        }
    }
    DFS(0, 0);
    // 정답 정제
    return answer.trim();
}

console.log(solution(n, num));