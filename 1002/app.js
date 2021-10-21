const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= input[0]; i++) {
    const inputValue = input[i].split(' ').map((item) => +item);
    inputArray.push(inputValue);
}
console.log(solution(inputArray));

// 미해결
function solution(arr) {
    for(let x of arr) {
        const jo = [x[0],x[1]];
        const beak = [x[3],x[4]];
        const ryu = [x[2],x[5]];
        console.log([jo,beak,ryu]);
    }
}

// 1. 원의 접점 방정식 문제