const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.forEach((item, index) => {
    input[index] = item.trim();
});

function solution(arr) {
    let answer = '';
    arr.sort();
    const treeHash = new Map();
    const total = arr.length;
    for(let x of arr) {
        if(!treeHash.has(x)) treeHash.set(x, 1);
        else treeHash.set(x, treeHash.get(x)+1);
    }
    treeHash.forEach((item, index) => {
        const percent = treeHash.get(index) / total * 100;
        answer += `${index} ${percent.toFixed(4)}` + '\n';
    });
    return answer.trim();
}

console.log(solution(input));