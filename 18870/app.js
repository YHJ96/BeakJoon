const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let num = input[1].split(' ').map((item) => +item);

console.log(solution(num));

function solution(num) {
    let answer = '';
    const result = [];
    const mySet = new Set(num);
    const filter = [...mySet].sort((a,b) => a - b);
    const myMap = new Map();
    for(let index in filter) {
        myMap.set(filter[index], index);
    }
    for(let x of num) {
        result.push(myMap.get(x));
    }
    for(let x of result) {
        answer += x + ' ';
    }
    return answer;
}