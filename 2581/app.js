const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(+input[0], +input[1]));

function solution(min, max) {
    let numArr = [];
    let compare = [];
    for(let i = min; i <= max; i++) {
        numArr.push(i);
    }
    for(let j = 0; j < numArr.length; j++) {
        if(numArr[j] === 1) {
            compare.push(1);
            continue;
        }
        let count = 2;
        while(count <= numArr[j] - 1) {
            if(numArr[j] % count === 0) {
                compare.push(numArr[j]);
                break;
            }
            count++;
        }
    }
    if(compare.length === numArr.length) return -1;
    const answer = numArr.filter((item) => !compare.includes(item));
    const numMin = Math.min(...answer);
    const numSum = answer.reduce((acc, curr) => acc + curr);
    const result = `${numSum}\n${numMin}`;
    return result;
}