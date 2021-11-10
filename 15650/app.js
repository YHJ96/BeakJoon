const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

function solution(n, m) {
    let answer = '';
    let tmp = Array.from({ length: m }, () => 0);
    function DFS(L, num) {
        if (L === m) {
            answer += tmp.slice().join(' ') + '\n';
        } else {
            for (let i = num; i <= n; i++) {
                tmp[L] = i;
                DFS(L + 1, i + 1);
            }
        }
    }
    DFS(0, 1);
    return answer.trim();
}

console.log(solution(input[0], input[1]));