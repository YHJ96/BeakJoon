const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = +input[0];

console.log(solution(input));

function solution(n) {
    // 결과값의 0을 알려면 2와 5의 배수를 알면 된다. 최소값이므로 5의 배수를 알면 되고 5를 곱하면서 진행하면서 5의 개수를 출력한다.
    let answer = 0;
    for(let i = 5; i <= n; i *= 5) {
        console.log(i);
        answer += Math.floor(n / i);
    }
    return answer;
} 