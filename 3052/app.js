const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => Number(item));

solution(input);

function solution(n) {
    // 중복체크
    const filterNum = [];
    n.forEach((item) => {
        const num = item % 42;
        if(filterNum.indexOf(num) === -1) {
            filterNum.push(num);
        }
    })
    console.log(filterNum.length);
}