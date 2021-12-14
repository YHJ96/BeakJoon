const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item)[1];
const num = input[1].split(' ').map((item) => +item);

function solution(n, num) {
    let answer = [];
    let tmp = Array.from({length : n}, () => 0);
    num.sort((a,b) => a-b);
    function DFS(L) {
        if(L === n) {
            const item = tmp.join(' ');
            answer.push(item);
        } else {
            for(let i = 0; i < num.length; i++) {
                tmp[L] = num[i];
                DFS(L+1);
            }
        }
    }
    DFS(0);
    return answer.join('\n');
}

console.log(solution(n, num));