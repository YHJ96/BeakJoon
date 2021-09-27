const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => item.trim());
input.pop();

console.log(solution(input));

function solution(n) {
    let arr = [...n];
    let answer = '';
    for(let i = 0; i < arr.length; i++) {
        const compare = n[i].split('').reverse().join('');
        if(compare === arr[i].split('').join('')) answer += 'yes' + '\n';
        else answer += 'no' + '\n'; 
    }
    return answer.trimEnd();
}