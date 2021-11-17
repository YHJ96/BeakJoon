const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +input[0].split(' ')[0];
const arr = input[1].split(' ');

function wordChecker (s) {
    let result = true;
    let compare = [...s].sort().join('');
    if(s !== compare) result = false;
    return result;
}

// 순열 메모리초과
function solution(n, arr) {
    let answer = '';
    let result = [];
    let ch = Array.from({ length : arr.length }, () => 0);
    let tmp = Array.from({ length : n }, () => 0);
    function DFS(L) {
        if(L === n) {
            result.push(tmp.slice().join(''));
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
    result = result.filter((item) => wordChecker(item));
    for(let x of result) {
        answer += x + '\n';
    }
    return answer;
}

console.log(solution(n, arr));