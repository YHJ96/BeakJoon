const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item);
const file = [];
const search = [];
for(let i = 1; i < input.length; i++) {
    if(i <= n[0]) file.push(input[i].trim());
    else search.push(input[i].trim());
}

console.log(solution(file, search));

function solution(file, search) {
    let answer = '';
    const myMap = new Map();
    for(let x of file) {
        const item = x.split(' ');
        myMap.set(item[0], item[1]);
    }
    for(let x of search) {
        answer += myMap.get(x) + '\n';
    }
    return answer.trim();
}