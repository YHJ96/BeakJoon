const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let target = input[0].split(' ').map((item) => +item)[1];
let inputArray = input[1].split(' ').map((item) => +item);

function solution(target, arr) {
    let answer = 0;
    const n = arr.length;
    let ch = Array.from({ length : n }, () => 0);
    function DFS(L) {
        if(L === n) {
            let sum = 0;
            for(let i = 0; i < n; i++) {
                if(ch[i] === 0) sum += arr[i];
            }
            if(sum === target) answer += 1;
        } else {
            ch[L] = 1;
            DFS(L+1);
            ch[L] = 0;
            DFS(L+1);
        }
    }
    DFS(0);
    if(target === 0) answer -= 1;
    return answer;
}

console.log(solution(target, inputArray));