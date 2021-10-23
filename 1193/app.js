const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = +input;

console.log(solution(input));

// CheckPoint
function solution(n) {
    let count = 1;
    while(true) {
        n -= count;
        if(n <= 0) {
            n += count;
            break;
        }
        count += 1;
    }
    return (count % 2 === 1) ? `${count - (n - 1)}/${1 + (n - 1)}` : `${1 + (n - 1)}/${count - (n - 1)}`;
}