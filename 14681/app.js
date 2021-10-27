const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((item) => parseInt(item));

solution(input[0], input[1]);

function solution(xAxis, yAxis) {
    // A,B 대소비교
    if(xAxis >= 0 && yAxis >= 0) console.log(1);
    else if(xAxis < 0 && yAxis >= 0) console.log(2);
    else if(xAxis < 0 && yAxis < 0) console.log(3);
    else return console.log(4);
}