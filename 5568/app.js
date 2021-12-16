const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((item) => +item);
input.shift();

function solution(arr) {
    const n = arr.shift();
    const answer = new Set();
    let tmp = Array.from({length : n}, () => 0);
    let ck = Array.from({length : arr.length}, () => 0);
    function DFS(L) {
        if(L === n) {
            const item = tmp.join('');
            answer.add(item);
        }
        else {
            for(let i = 0; i < arr.length; i++) {
                if(ck[i] === 0) {
                    ck[i] = 1;
                    tmp[L] = arr[i];
                    DFS(L+1);
                    ck[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return answer.size;
}

console.log(solution(input));