const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length - 1; i++) {
    const item = input[i].split(' ').map((item) => +item);
    item.shift();
    inputArray.push(item);
}

function findLotto(arr) {
    let answer = '';
    let tmp = Array.from({length : 6}, () => 0);
    function DFS(L, num) {
        if(L === 6) {
            const value = tmp.slice().join(' ');
            answer += value + '\n';
        } else {
            for(let i = num; i < arr.length; i++) {
                tmp[L] = arr[i];
                DFS(L+1, i+1);
            }
        }
    }
    DFS(0, 0);
    return answer;
}

function solution(arr) {
    let answer = '';
    for(let i = 0; i < arr.length; i++) {
        const item = findLotto(arr[i]);
        answer += item + '\n'; 
    }
    return answer.trim();
}

console.log(solution(inputArray));