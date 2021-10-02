const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    inputArray.push(+input[i]);
}
console.log(solution(inputArray));

function solution(n) {
    if(n.length === 1) {
        return n[0] + '\n' + n[0] + '\n' + n[0] + '\n' + 0; 
    }
    const compare = [];
    const myMap = new Map();
    n.sort((a,b) => a - b); 
    const avg = Math.round(n.reduce((acc,curr) => acc + curr) / n.length);
    const length = n[n.length - 1] - n[0]; 
    const mid = n[Math.floor(n.length / 2)];
    let mode = 0;
    for(let x of n) {
        if(myMap.has(x) === false) myMap.set(x, 1);
        else myMap.set(x, myMap.get(x) + 1);
    }
    myMap.forEach((item, index) => compare.push([index, item]));
    compare.sort((a,b) => b[1] - a[1]);
    if(compare[0][1] === compare[1][1]) mode = compare[1][0];
    else mode = compare[0][0];
    const answer = avg + '\n' + mid + '\n' + mode + '\n' + length;
    return answer;
}