const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

function solution(n, m) {
    let answer = '';
    // 뽑는 개수를 지정하는 배열
    let tmp = Array.from({ length: m }, () => 0);
    function DFS(L) {
        // 뽑는 개수와 같으면 answer 값 넣기
        if (L === m) {
            answer += tmp.slice().join(' ') + '\n';
        } else {
            for (let i = 1; i <= n; i++) {
                // 1부터 시작
                tmp[L] = i;
                DFS(L + 1);
            }
        }
    }
    DFS(0);
    return answer.trim();
}

console.log(solution(input[0], input[1]));