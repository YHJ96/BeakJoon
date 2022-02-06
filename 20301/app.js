const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ').map((item) => +item);

function solution(input) {
    const [n, k, m] = input;
    const answer = [];
    let num = Array.from({length : n}, (item, index) => index + 1);
    let count = 0;
    let check = 0;
    while(num.length) {
        if(check === m) {
            num = num.reverse();
            check = 0;
        }
        count = (count + k - 1) % num.length;
        answer.push(num[count]);
        num.splice(count, 1);
        check += 1;
    }
    return answer.join('\n');
}

console.log(solution(input));