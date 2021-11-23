const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for (let i = 0; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

function solution(arr) {
    let answer = '';
    arr.sort((a, b) => {
        if(a.length < b.length) {
            return a.length - b.length;
        }
        if(a.length === b.length) {
            const A = a.replace(/[a-z]/gi, "0").split('').map((item) => +item).reduce((acc, curr) => acc + curr);
            const B = b.replace(/[a-z]/gi, "0").split('').map((item) => +item).reduce((acc, curr) => acc + curr);
            if(A === B) {
                return a.localeCompare(b);
            }
            return A - B;
        }
    });
    for(let x of arr) {
        answer += x + '\n';
    }
    return answer.trim();
}
console.log(solution(inputArray));