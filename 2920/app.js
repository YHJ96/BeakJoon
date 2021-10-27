const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

console.log(solution(input));

function solution(num) {
    // 1,2,3,4,5,6,7,8이 출력되면 ascending
    const ascending = [1,2,3,4,5,6,7,8];
    // 8,7,6,5,4,3,2,1이 출력되면 descending
    const descending = [...ascending].reverse();
    if(ascending.join() === num.join()) return 'ascending';
    else if(descending.join() === num.join()) return 'descending';
    // 2가지 조건말고는 전부 mixed 출력
    else return 'mixed';
} 