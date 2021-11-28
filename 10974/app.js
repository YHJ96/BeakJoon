const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n) {
    let answer = '';
    const tmp = Array.from({ length: n }, () => 0);
    const ch = Array.from({ length: n }, () => 0);
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    function DFS(L) {
        if(L === n) {
            answer += tmp.slice().join(' ') + '\n';
        } else {
            for(let i = 0; i < arr.length; i++) {
                if(ch[i] === 0) {
                    ch[i] = 1;
                    tmp[L] = arr[i];
                    DFS(L+1);
                    ch[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return answer.trim();
}

console.log(solution(+input[0]));