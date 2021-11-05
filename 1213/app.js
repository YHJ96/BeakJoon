const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(s) {
    let answer = '';
    let resultArr = [];
    const sH = new Map();
    const compare = [];
    let center = '';
    let count = 0;
    for(let x of s) {
        if(sH.has(x)) sH.set(x, sH.get(x) + 1);
        else sH.set(x, 1);
    }
    sH.forEach((item, index) => {
        if(item % 2 === 1) {
            count++;
            center = index;
        }
    });
    if(count > 1) return `I'm Sorry Hansoo`;
    sH.forEach((item, index) => compare.push(index));
    compare.sort();
    for(let i = 0; i < compare.length; i++) {
        let num = sH.get(compare[i]);
        for(let j = 0; j < parseInt(num / 2); j++) {
            resultArr.push(compare[i]);
        }
    }
    let reResultArr = resultArr.slice().reverse();
    if(center.length === 0) answer += resultArr.join('') + reResultArr.join('');
    else answer += resultArr.join('') + center + reResultArr.join('');
    return answer;
}

console.log(solution(input[0]));