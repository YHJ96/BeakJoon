const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const num = [];
const word = [];
for(let i = 1; i <= +input[0] * 2; i++) {
    const item = input[i].split(' ').map((item) => +item);
    if(i % 2 === 0) word.push(item);
    else num.push(item);
}

function print(num, word) {
    let count = 0;
    while(true) {
        const max = Math.max(...word);
        if(word[0] === max && num === 0) {
            count += 1;
            break;
        } else if(word[0] !== max && num === 0) {
            const value = word.shift();
            word.push(value);
            num = word.length - 1;
        } else if(word[0] === max) {
            word.shift();
            num -= 1;
            count += 1;
        } else if(word[0] !== max) {
            const value = word.shift();
            word.push(value);
            num -= 1;
        }
    }
    return count;
}

function solution(numArr, wordArr) {
    let answer = '';
    let n = 0;
    while(n < numArr.length) {
        const item = print(numArr[n][1], wordArr[n]);
        answer += item + '\n';
        n += 1;
    }
    return answer.trim();
}

console.log(solution(num, word));