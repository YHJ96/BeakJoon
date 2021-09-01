const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ');
input = input.map((item) => Number(item));

solution(input[0], input[1], input[2]);

function solution(a, b, c) {
    const answer1 = (a+b) % c;
    const answer2 = ((a%c) + (b%c))%c;
    const answer3 = (a*b)%c;
    const answer4 = ((a%c) * (b%c))%c;
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
}