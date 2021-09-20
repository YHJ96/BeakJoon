const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => +item);

console.log(solution(input));

function solution(arr) {
    let result = arr;
    let sum = arr.reduce((a, b) => a + b, 0);
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if((sum - (arr[i] + arr[j])) === 100) {
                arr.splice(i, 1);
                arr.splice(j - 1 ,1);
            }
        }
    }
    result = result.sort((a,b) => a - b);
    let answer = '';
    for(let x of result) {
        answer += x.toString() + '\n';
    }
    return answer;
}