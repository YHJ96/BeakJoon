const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].trim().split(' ');
    inputArray.push(inputValue);
}

// 메모리 초과
function findItem(value) {
    const result = [];
    const n = value[0].length;
    const arr = [...value[0]];
    const index = +value[1];
    const ck = Array.from({ length : n }, () => 0);
    const tmp = Array.from({length : n}, () => 0);
    let total = 1;
    let num = arr.length;
    while(num) {
        total *= num;
        num -= 1;
    }
    if(total < index - 1) return `${arr.join('')} ${index} = No permutation`;
    function DFS(L) {
        if(L === n) {
            const item = tmp.join('');
            result.push(item);
        } else {
            for(let i = 0; i < n; i++) {
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
    const answer = `${arr.join('')} ${index} = ${result[index-1]}`;
    return answer;
}

function solution(arr) {
    let answer = '';
    for(let i = 0; i < arr.length; i++) {
        const item = findItem(arr[i]);
        answer += item + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));