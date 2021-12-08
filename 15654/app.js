const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item)[1];
const num = input[1].split(' ').map((item) => +item);

function solution(n, num) {
    let answer = '';
    num.sort((a,b) => a-b);
    const tmp = Array.from({ length : n }, () => 0);
    const ck = Array.from({ length : num.length }, () => 0);
    function DFS(L) {
        if(L === n) {
            const item = tmp.join(' ');
            answer += item + '\n';
        } else {
            for(let i = 0; i < num.length; i++) {
                if(ck[i] === 0) {
                    ck[i] = 1;
                    tmp[L] = num[i];
                    DFS(L+1);
                    ck[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return answer.trim();
}

console.log(solution(n, num));