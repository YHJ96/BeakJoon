const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ').map((item) => +item);

function solution(input) {
    const [n, target] = input;
    let answer = 0;
    const num = [];
    for(let i = 1; i <= n; i++) num.push(i);
    num.forEach((item) => {
        const compare = item.toString().split('');
        for(let i = 0; i < compare.length; i++) {
            const value = +compare[i];
            if(value === target) answer += 1;
        }
    });
    return answer;
}

console.log(solution(input));