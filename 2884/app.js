const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ');
input = input.map((item) => Number(item));

solution(input[0], input[1]);

function solution(hours, minutes) {
    if(minutes <= 45) {
        const minus = minutes - 45;
        minutes = 60 + minus;
        if(hours === 0) hours = 23;
        else hours = hours - 1;
    } else minutes = minutes - 45;
    console.log(hours, minutes);
}