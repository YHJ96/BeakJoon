const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputArray = input[1].split(' ').map((item) => Number(item));
input = input[0].split(' ').map((item) => Number(item));

solution(input[0], input[1], inputArray)

function solution(n, number, numArr) {
    let answer = '';
    for(let i = 0; i < n; i++) {
        // x보다 작으면 answer에 더하기
        if(numArr[i] < number) answer += numArr[i] + ' ';
    }
    console.log(answer);
}