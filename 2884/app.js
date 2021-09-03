const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ');
input = input.map((item) => Number(item));

solution(input[0], input[1]);

function solution(hours, minutes) {
    minutes = minutes - 45;
    if(minutes < 0) {
        minutes = minutes + 60;
        hours = hours - 1;
        if(hours === -1) hours = 23;
    }
    console.log(`${hours} ${minutes}`);
}