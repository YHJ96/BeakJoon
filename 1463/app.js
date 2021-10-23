const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(num) {
    let arr = [0, 0];
    for(let i = 2; i < num + 1; i++) {
        arr[i] = arr[i - 1] + 1;
        if(i % 2 === 0) arr[i] = Math.min(arr[i], arr[i / 2] + 1);
        if(i % 3 === 0) arr[i] = Math.min(arr[i], arr[i / 3] + 1);
    }
    return arr[num];
}

console.log(solution(+input[0]));