const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input[1].split(' ').map((item) => +item);
const lang = input[0].split(' ').map((item) => +item)[1];

function solution(lang, arr) {
    let answer = lang;
    arr.sort((a,b) => a-b);
    for(let x of arr) {
        if(answer >= x) answer += 1;
    }
    return answer;
}

console.log(solution(lang, arr));