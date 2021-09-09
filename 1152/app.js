const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ');

solution(input);

function solution(word) {
    if (word[0] === '') console.log(0);
    else console.log(word.length);
}