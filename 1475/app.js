const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution(arr) {
    let answer = 0;
    const numberHash = new Map();
    const number = arr.split('').map((item) => {
        if(item === '9') return 6;
        else return +item;
    });
    for(let x of number) {
        if(!numberHash.has(x)) numberHash.set(x, 1);
        else numberHash.set(x, numberHash.get(x) + 1);
    }
    numberHash.set(6, Math.round(numberHash.get(6) / 2));
    numberHash.forEach((item) => {
        if(!Number.isNaN(item)) answer = Math.max(answer, item);
    });
    return answer;
}

console.log(solution(input));