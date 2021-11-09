const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

function solution(n, m) {
    let answer = '';
    let result = [];
    let ch = Array.from({length : n}, () => 0);
    let tmp = Array.from({length : m}, () => 0);
    let num = [];
    for(let k = 1; k <= n; k++) num.push(k);
    function DFS(L) {
        if(L === m) result.push(tmp.slice());
        else {
            for(let i = 0; i < num.length; i++) {
                if(ch[i] === 0) {
                    ch[i] = 1;
                    tmp[L] = num[i];
                    DFS(L+1);
                    ch[i] = 0;
                }
            }
        }
    }
    DFS(0);
    for(let x of result) answer += x.join(' ') + '\n';
    return answer.trim();
}

console.log(solution(input[0], input[1]));