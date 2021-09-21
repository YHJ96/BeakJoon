const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = +input[0];

console.log(solution(input));

function solution(num) {
    let count  = 665;
    
    while(num !== 0) {
        count += 1;
        if(count.toString().includes('666')) {
            num -= 1;
        }
    }
    return count;
}