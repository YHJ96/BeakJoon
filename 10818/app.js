const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputArray = input[1].split(' ').map((item) => Number(item));

solution(inputArray);

function solution(n) {
    // 배열의 max값과 min값 구하기
    let min = n[0];
    let max = n[0];
    for(let i = 0; i < n.length; i++) {
        if(min > n[i]) min = n[i];
        if(max < n[i]) max = n[i];
    }
    console.log(min, max);
}