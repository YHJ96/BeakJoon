const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(+input[0]));

function solution(n) {
    // 숫자 시작
    let num = 0;
    // 분해합 결과
    let sum = 0;
    for(let i = 0; i < n; i++) {
        if(sum === n) break;
        num++;
        // 숫자를 자리수로 분해한 뒤 자리수만큼의 합
        const value = num.toString().split('').map((item) => +item).reduce((acc, curr) => acc + curr);
        sum = num + value;
        // 분해합이 없을경우 0
        if(i === n - 1) num = 0;
    }
    return num;
}