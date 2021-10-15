const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const num = input[0].split(' ').map((item) => +item);
const list = [];
const compare = [];
for(let i = 1; i < input.length; i++) {
    if(i <= num[0]) list.push(input[i].trim());
    else compare.push(input[i].trim());
}

console.log(solution(list, compare));

function solution(list, compare) {
    // set에 list을 넣는다
    const mySet = new Set(list);
    let answer = 0;
    for(let x of compare) {
        // 비교할 인자가 set안에 있을경우 answer + 1 
        if(mySet.has(x)) answer += 1;
    }
    return answer;
}