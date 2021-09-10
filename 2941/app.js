const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(s) {
    const croatia = ['c=','c-','dz=','d-','lj','nj','s=','z='];
    croatia.map((item) => {
        s = s.split(item).join('X');
    });
    console.log(s.length);
}