const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input.map((item) => +item);

function countNum(n) {
    let answer = 0;
    const add = [1,2,3];
    function DFS(L, sum) {
        if(sum > n) return;
        if(sum === n) answer++;
        else {
            for(let i = 0; i < add.length; i++) {
                DFS(L+1, sum + add[i]);
            }
        }
    }
    DFS(0, 0);
    return answer;
}

function solution(arr) {
    let answer = '';
    for(let x of arr) {
        answer += countNum(x) + '\n';
    }
    return answer.trim();
}

console.log(solution(input));